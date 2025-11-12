import logger from "@/src/helpers/server/Logger.ts";
import { createFileRoute } from "@tanstack/react-router";
import mime from "mime-types";
import { promises as fs } from "node:fs";

export const Route = createFileRoute("/files/$")({
    server: {
        handlers: {
            GET: async ({ params }) => {
                const pathname = params["_splat"];

                if (!pathname) {
                    return new Response("Not found", { status: 404 });
                }

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
        }
    }
});
