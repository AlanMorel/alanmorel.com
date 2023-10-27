import logger from "@/src/helpers/server/Logger";
import fs, { promises as fsAsync } from "fs";

export const fileExists = async (path: string): Promise<boolean> => {
    try {
        await fsAsync.stat(path);
    } catch (error) {
        logger.critical(`Failed to check if file exists: ${JSON.stringify(error)}`);
        return false;
    }

    return true;
};

export const createIfNotExists = (directory: string): void => {
    if (!fs.existsSync(directory)) {
        fs.mkdirSync(directory, { recursive: true });
    }
};

export const checkFileSize = (filePath: string): number => {
    try {
        const stats = fs.statSync(filePath);
        return stats.size;
    } catch (error) {
        return -1;
    }
};

export const deleteFile = (filePath: string): void => {
    try {
        fs.unlinkSync(filePath);
    } catch (error) {}
};
