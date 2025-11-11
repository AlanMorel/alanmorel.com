import Config from "@/src/Config.ts";
import { createFileRoute } from "@tanstack/react-router";
import { SitemapStream, streamToPromise } from "sitemap";

const routes = ["", "/resume"];

async function getSitemapXML(routes: string[]): Promise<string> {
    const stream = new SitemapStream({ hostname: Config.app.url });

    routes.forEach(route => {
        const lastModified = new Date().toISOString();

        stream.write({
            url: route,
            lastmod: lastModified
        });
    });

    stream.end();

    const sitemap = await streamToPromise(stream);

    return sitemap.toString();
}

export const Route = createFileRoute("/sitemap.xml")({
    server: {
        handlers: {
            GET: async () => {
                const sitemap = await getSitemapXML(routes);
                return new Response(sitemap, {
                    headers: {
                        "Content-Type": "application/xml"
                    }
                });
            }
        }
    }
});
