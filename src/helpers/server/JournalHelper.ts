import Config from "@/src/helpers/Config";
import { fileExists } from "@/src/helpers/server/FileSystemHelper";
import logger from "@/src/helpers/server/Logger";
import { compareStrings } from "@/src/helpers/server/StringHelper";
import { getYYYYMMDD } from "@/src/helpers/shared/DateFormatter";
import { promises as fs } from "fs";
import { cookies } from "next/headers";

export function isJournalAuthenticated(): boolean {
    const cookieStore = cookies();
    const password = cookieStore.get(Config.journal.cookieName)?.value;

    if (!password) {
        logger.critical("No password cookie found");
        return false;
    }

    const journalPassword = Config.journal.password;

    if (!compareStrings(password, journalPassword)) {
        logger.critical("Password cookie does not match");
        return false;
    }

    return true;
}

function getEntryPath(date: Date): string {
    const dateStr = getYYYYMMDD(date);

    const split = dateStr.split("-");
    const year = split[0];
    const month = split[1];

    return `./entries/${year}/${month}/${dateStr}.txt`;
}

export async function getJournalEntry(date: Date): Promise<string> {
    const path = getEntryPath(date);

    const entryExists = await fileExists(path);

    if (entryExists) {
        return await fs.readFile(path, "utf-8");
    }

    return "";
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
