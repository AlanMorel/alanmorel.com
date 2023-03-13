import { fileExists } from "@/src/helpers/server/FileSystemHelper";
import { formatTimestamp } from "@/src/helpers/shared/DateFormatter";
import { promises as fs } from "fs";
import picocolors from "picocolors";
import { Formatter } from "picocolors/types";

const { blue, yellow, magenta } = picocolors;

export class Logger {
    public static log(message: string, id: string | null = null): void {
        const color = blue;
        this.print(message, color);
        this.writeToFile("log", message, id);
    }

    public static error(error: string, id: string | null = null): void {
        const color = yellow;
        this.print(error, color);
        this.writeToFile("error", error, id);
    }

    public static critical(error: string, id: string | null = null): void {
        const color = yellow;
        this.print(error, color);
        this.writeToFile("error", error, id);
        this.writeToFile("critical", error, id);
    }

    public static debug(message: string, id: string | null = null): void {
        const color = magenta;
        this.print(message, color);
        this.writeToFile("debug", message, id);
    }

    private static print(message: string, color: Formatter): void {
        console.log(`${color(message)}`);
        this.writeToFile("all", message);
    }

    private static async writeToFile(type: string, message: string, id: string | null = null): Promise<void> {
        const now = new Date();

        const timestamp = now.toISOString().split("T")[0];
        const [year, month] = [...timestamp.split("-")];

        const timestampReadable = formatTimestamp(now);
        const log = `[${timestampReadable}]: ${message}\r\n`;

        await this.write(`logs/${type}/${year}/${month}`, timestamp, log);

        if (id) {
            await this.write(`logs/users/${id}/${type}/${year}/${month}`, timestamp, log);
        }
    }

    private static async write(directory: string, timestamp: string, log: string): Promise<void> {
        const path = `${directory}/${timestamp}.log`;

        const exists = await fileExists(directory);

        if (!exists) {
            await fs.mkdir(directory, { recursive: true });
        }

        await fs.appendFile(path, log);
    }
}
