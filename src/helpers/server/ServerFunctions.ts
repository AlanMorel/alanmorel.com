import type { ThemeState } from "@/src/atoms/ThemeAtom.ts";
import redirects from "@/src/redirects.json";
import { createServerFn } from "@tanstack/react-start";
import { getRequestHeaders } from "@tanstack/react-start/server";
import cookie from "cookie";
import { promises as fs } from "node:fs";
import path from "node:path";

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

export const getAIImages = createServerFn({ method: "GET" }).handler(async (): Promise<string[]> => {
    const imagesDirectory = path.join(process.cwd(), "files", "ai");

    const images = await fs.readdir(imagesDirectory);

    return images.map(image => `/files/ai/${image}`);
});

export const getTheme = createServerFn().handler((): ThemeState => {
    const headers = getRequestHeaders();

    const cookies = cookie.parse(headers.get("cookie") || "");

    const theme = cookies.theme;

    return (theme as ThemeState) || "light";
});
