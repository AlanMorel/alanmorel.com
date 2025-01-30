import Config from "@/src/Config.ts";
import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
    return {
        rules: {
            userAgent: "*",
            allow: "/"
        },
        sitemap: `${Config.app.url}/sitemap.xml`
    };
}
