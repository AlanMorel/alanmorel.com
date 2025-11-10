import Config from "@/src/Config.ts";
import { createFileRoute } from "@tanstack/react-router";

const routes = ["", "/resume"];

function getSitemapXML(routes: string[]): string {
    const lastModified = new Date().toISOString();

    return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes
    .map(
        route => `  <url>
    <loc>${Config.app.url}${route}</loc>
    <lastmod>${lastModified}</lastmod>
  </url>`
    )
    .join("\n")}
</urlset>`;
}

export const Route = createFileRoute("/sitemap.xml")({
    server: {
        handlers: {
            GET: () => {
                const sitemap = getSitemapXML(routes);

                return new Response(sitemap, {
                    headers: {
                        "Content-Type": "application/xml"
                    }
                });
            }
        }
    }
});
