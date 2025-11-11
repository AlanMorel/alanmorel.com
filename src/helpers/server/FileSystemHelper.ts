import logger from "@/src/helpers/server/Logger.ts";
import fs, { constants } from "node:fs";

export function createIfNotExists(directory: string): void {
    if (!fs.existsSync(directory)) {
        fs.mkdirSync(directory, { recursive: true });
    }
}

export function checkFileSize(filePath: string): number {
    try {
        const stats = fs.statSync(filePath);
        return stats.size;
    } catch (error) {
        logger.critical(JSON.stringify(error));
        return -1;
    }
}

export function deleteFile(filePath: string): void {
    try {
        fs.unlinkSync(filePath);
    } catch (error) {
        logger.critical(JSON.stringify(error));
    }
}

export async function fileExists(filePath: string): Promise<boolean> {
    try {
        await fs.promises.access(filePath, constants.F_OK);
        return true;
    } catch {
        return false;
    }
}

export async function readFile(filePath: string): Promise<string> {
    try {
        return await fs.promises.readFile(filePath, "utf-8");
    } catch (error) {
        logger.critical(JSON.stringify(error));
        return "";
    }
}
