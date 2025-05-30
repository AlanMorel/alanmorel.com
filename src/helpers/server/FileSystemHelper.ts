import logger from "@/src/helpers/server/Logger.ts";
import fs from "node:fs";

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
