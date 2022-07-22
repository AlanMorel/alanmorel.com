import Config from "@/server/Config";
import { fileExists } from "@/server/helpers/FileSystemHelper";
import { formatTimestamp } from "@/server/tools/DateFormatter";
import { promises as fs } from "fs";
import picocolors from "picocolors";
import { Formatter } from "picocolors/types";

const { blue, magenta, yellow } = picocolors;

export class Logger {
    public static log(message: string, color: Formatter = blue): void {
        this.print(message, color);
        this.writeToFile("log", message);
    }

    public static error(error: string, color: Formatter = yellow): void {
        this.print(error, color);
        this.writeToFile("error", error);
    }

    public static debug(message: string, color: Formatter = magenta): void {
        this.print(message, color);
        this.writeToFile("debug", message);
    }

    private static print(message: string, color: Formatter): void {
        console.log(`${color(message)}`);
        this.writeToFile("all", message);
    }

    private static async writeToFile(type: string, message: string): Promise<void> {
        const now = new Date();

        const timestamp = now.toISOString().split("T")[0];
        const [year, month] = [...timestamp.split("-")];

        const directory = `${Config.root}/logs/${type}/${year}/${month}`;
        const path = `${directory}/${timestamp}.log`;

        const timestampReadable = formatTimestamp(now);
        const log = `[${timestampReadable}]: ${message}\r\n`;

        const exists = await fileExists(directory);

        if (!exists) {
            await fs.mkdir(directory, { recursive: true });
        }

        await fs.appendFile(path, log);
    }
}
