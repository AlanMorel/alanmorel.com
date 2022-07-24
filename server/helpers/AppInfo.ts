import Config from "@/server/Config";
import { Request } from "express";

export default function (req: Request): any {
    const app = {
        slug: "alanmorel",
        domain: "alanmorel.com",
        env: Config.env,
        now: new Date(),
        base: `${req.protocol}://${req.get("host")}`,
        canonical: req.originalUrl,
        root: Config.root,
        version: Config.version
    };

    const metaInfo = {
        title: "Alan Morel - Software Engineer, Photographer, Music Producer",
        description: "Alan Morel - Software Engineer, Photographer, Music Producer",
        image: "/assets/images/meta-image.png",
        twitter: "AlanMorelX"
    };

    return {
        ...app,
        ...metaInfo
    };
}
