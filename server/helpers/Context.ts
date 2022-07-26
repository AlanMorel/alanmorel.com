import Config from "@/server/Config";
import { Request } from "express";

export default function (req: Request): any {
    return {
        slug: "alanmorel",
        domain: "alanmorel.com",
        env: Config.env,
        now: new Date(),
        base: `${req.protocol}://${req.get("host")}`,
        canonical: req.originalUrl,
        root: Config.root,
        version: Config.version
    };
}
