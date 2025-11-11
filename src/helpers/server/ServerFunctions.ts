import { ThemeState } from "@/src/atoms/ThemeAtom.ts";
import Config from "@/src/helpers/Config.ts";
import { fileExists, getEntryPath, readFile } from "@/src/helpers/server/JournalHelper.ts";
import logger from "@/src/helpers/server/Logger.ts";
import { compareStrings } from "@/src/helpers/server/StringHelper.ts";
import redirects from "@/src/redirects.json";
import { createServerFn } from "@tanstack/react-start";
import { getRequestHeaders } from "@tanstack/react-start/server";
import cookie from "cookie";

interface Redirect {
    source: string;
    destination: string;
    permanent: boolean;
}

export const getRedirect = createServerFn({ method: "GET" })
    .inputValidator((data: { pathname: string }) => data)
    .handler(async ({ data }): Promise<Redirect | null> => {
        const { pathname } = data;

        try {
            const redirectConfig = redirects.find(r => r.source === `/${pathname}`);

            return redirectConfig || null;
        } catch (error) {
            console.error("Error reading redirects:", error);
            return null;
        }
    });

export const getTheme = createServerFn().handler((): ThemeState => {
    const headers = getRequestHeaders();

    const cookies = cookie.parse(headers.get("cookie") || "");

    const theme = cookies.theme;

    return (theme as ThemeState) || "light";
});

export const isJournalAuthenticated = createServerFn().handler((): boolean => {
    const headers = getRequestHeaders();

    const cookies = cookie.parse(headers.get("cookie") || "");

    const password = cookies[Config.journal.cookieName];

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
});

export const getJournalEntry = createServerFn()
    .inputValidator((data: { date: Date }) => data)
    .handler(async ({ data }): Promise<string> => {
        const { date } = data;

        const path = getEntryPath(date);

        const entryExists = await fileExists(path);

        if (entryExists) {
            return await readFile(path);
        }

        return "";
    });
