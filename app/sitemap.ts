import Config from "@/src/Config.ts";
import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const routes = ["", "/resume"];

    return routes.map(route => ({
        url: `${Config.app.url}${route}`,
        lastModified: new Date().toISOString()
    }));
}
