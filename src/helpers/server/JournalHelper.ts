import logger from "@/src/helpers/server/Logger.ts";
import { getYYYYMMDD } from "@/src/helpers/shared/DateFormatter.ts";
import { promises as fs } from "node:fs";

export function getEntryPath(date: Date): string {
    const dateStr = getYYYYMMDD(date);

    const split = dateStr.split("-");
    const year = split[0];
    const month = split[1];

    return `./entries/${year}/${month}/${dateStr}.txt`;
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
