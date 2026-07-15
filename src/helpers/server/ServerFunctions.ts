import type { ThemeState } from "@/src/atoms/ThemeAtom.ts";
import logger from "@/src/helpers/server/Logger.ts";
import redirects from "@/src/redirects.json";
import { createServerFn } from "@tanstack/react-start";
import { getRequestHeaders } from "@tanstack/react-start/server";
import { parseCookie } from "cookie";

interface Redirect {
    source: string;
    destination: string;
    permanent: boolean;
}

export const getRedirect = createServerFn({ method: "GET" })
    .validator((data: { pathname: string }) => data)
    .handler(async ({ data }): Promise<Redirect | null> => {
        const { pathname } = data;

        try {
            const redirectConfig = redirects.find(r => r.source === `/${pathname}`);

            return redirectConfig || null;
        } catch (error) {
            logger.error(`Error reading redirects: ${error}`);

            return null;
        }
    });

export const getTheme = createServerFn().handler((): ThemeState => {
    const headers = getRequestHeaders();

    const cookies = parseCookie(headers.get("cookie") || "");

    const theme = cookies.theme;

    return (theme as ThemeState) || "light";
});
