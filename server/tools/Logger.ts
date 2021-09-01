import Config from "@/Config";
import fs from "fs";
import { HexColor } from "./HexColor";

interface Color {
    r: number;
    b: number;
    g: number;
}

export class Logger {
    public static log(message: string, hex: HexColor = HexColor.BLUE): void {
        this.print(message, hex);
        this.writeToFile("log", message);
    }

    public static error(error: string, hex: HexColor = HexColor.ORANGE): void {
        this.print(error, hex);
        this.writeToFile("error", error);
    }

    public static debug(message: string, hex: HexColor = HexColor.PURPLE): void {
        this.print(message, hex);
        this.writeToFile("debug", message);
    }

    private static hexToColor(color: number): Color {
        const r = color >> 16;
        const g = (color >> 8) & 0xff;
        const b = color & 0xff;

        return { r, g, b };
    }

    private static print(message: string, hex: HexColor): void {
        const color = this.hexToColor(hex);
        console.log("\u001b[38;2;" + color.r + ";" + color.g + ";" + color.b + "m" + message + "\u001b[0m");
        this.writeToFile("all", message);
    }

    private static writeToFile(filename: string, message: string): void {
        fs.appendFile(Config.root + "/logs/" + filename + ".log", message + "\r\n", error => {
            if (error) {
                throw error;
            }
        });
    }
}
