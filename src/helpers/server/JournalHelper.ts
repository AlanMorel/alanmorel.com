import Config from "@/src/helpers/Config.ts";
import logger from "@/src/helpers/server/Logger.ts";
import { compareStrings } from "@/src/helpers/server/StringHelper.ts";
import { getYYYYMMDD } from "@/src/helpers/shared/DateFormatter.ts";
import { cookies } from "next/headers";
import { constants, promises as fs } from "node:fs";

export async function isJournalAuthenticated(): Promise<boolean> {
    const cookieStore = await cookies();
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

async function fileExists(filePath: string): Promise<boolean> {
    try {
        await fs.access(filePath, constants.F_OK);
        return true;
    } catch {
        return false;
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
