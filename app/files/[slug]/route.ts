import logger from "@/src/helpers/server/Logger.ts";
import mime from "mime-types";
import { promises as fs } from "node:fs";

export async function GET(request: Request): Promise<Response> {
    const url = new URL(request.url);
    const pathname = url.pathname.replace("/files", "");

    try {
        const file = await fs.readFile(`files/${pathname}`);
        const type = mime.lookup(pathname) as string;

        return new Response(file, {
            status: 200,
            headers: {
                "Content-Type": type
            }
        });
    } catch (error) {
        logger.error(JSON.stringify(error));
        return new Response("Not found", { status: 404 });
    }
}
