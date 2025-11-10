import logger from "@/src/helpers/server/Logger.ts";
import { getYYYYMMDD } from "@/src/helpers/shared/DateFormatter.ts";
import { constants, promises as fs } from "node:fs";

export function getEntryPath(date: Date): string {
    const dateStr = getYYYYMMDD(date);

    const split = dateStr.split("-");
    const year = split[0];
    const month = split[1];

    return `./entries/${year}/${month}/${dateStr}.txt`;
}

export async function fileExists(filePath: string): Promise<boolean> {
    try {
        await fs.access(filePath, constants.F_OK);
        return true;
    } catch {
        return false;
    }
}

export async function readFile(filePath: string): Promise<string> {
    try {
        return await fs.readFile(filePath, "utf-8");
    } catch (error) {
        logger.critical(JSON.stringify(error));
        return "";
    }
}

export async function saveJournalEntry(date: Date, entry: string): Promise<boolean> {
    const path = getEntryPath(date);

    const directory = path.substring(0, path.lastIndexOf("/"));

    logger.log(`Date:\r\n${new Date()}\r\nEntry:\r\n${entry}`);

    try {
        await fs.mkdir(directory, { recursive: true });
        await fs.writeFile(path, entry, "utf-8");
        return true;
    } catch (error) {
        logger.error(error as string);
    }

    return false;
}
