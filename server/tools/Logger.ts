import Config from "@/Config";
import { formatTimestamp } from "@/tools/DateFormatter";
import chalk from "chalk";
import { promises as fs } from "fs";

export class Logger {
    public static log(message: string, color: chalk.Chalk = chalk.blue): void {
        this.print(message, color);
        this.writeToFile("log", message);
    }

    public static error(error: string, color: chalk.Chalk = chalk.yellow): void {
        this.print(error, color);
        this.writeToFile("error", error);
    }

    public static debug(message: string, color: chalk.Chalk = chalk.magenta): void {
        this.print(message, color);
        this.writeToFile("debug", message);
    }

    private static print(message: string, color: chalk.Chalk): void {
        console.log(`${color(message)}`);
        this.writeToFile("all", message);
    }

    private static async writeToFile(type: string, message: string): Promise<void> {
        const timestamp = new Date().toISOString().split("T")[0];
        const timestampReadable = formatTimestamp(new Date());

        const path = `${Config.root}/logs/${type}/${timestamp}.log`;
        const log = `[${timestampReadable}]: ${message}\r\n`;

        fs.appendFile(path, log);
    }
}
