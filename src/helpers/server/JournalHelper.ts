import Config from "@/src/helpers/Config";
import { pathExists } from "@/src/helpers/server/FileSystemHelper";
import { Logger } from "@/src/helpers/server/Logger";
import { compareStrings } from "@/src/helpers/server/StringHelper";
import { getYYYYMMDD } from "@/src/helpers/shared/DateFormatter";
import { promises as fs } from "fs";
import { cookies } from "next/headers";

export function isJournalAuthenticated(): boolean {
    const cookieStore = cookies();
    const password = cookieStore.get(Config.journal.cookieName)?.value;

    if (!password) {
        Logger.critical("No password cookie found");
        return false;
    }

    const journalPassword = Config.journal.password;

    if (!compareStrings(password, journalPassword)) {
        Logger.critical("Password cookie does not match");
        return false;
    }

    return true;
}

export async function getJournalEntry(date: Date): Promise<string> {
    let entry = "";

    const path = `./entries/${getYYYYMMDD(date)}.txt`;

    const entryExists = await pathExists(path);

    if (entryExists) {
        entry = await fs.readFile(`./entries/${getYYYYMMDD(date)}.txt`, "utf-8");
    }

    return entry;
}
