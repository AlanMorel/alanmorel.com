import Config from "@/server/Config";
import { Request } from "express";

const app = {
    slug: "alanmorel",
    domain: "alanmorel.com",
    partials: `${Config.root}/server/views/partials`
};

const configs = {
    env: Config.env,
    root: Config.root,
    version: Config.version
};

export default function (req: Request): any {
    const framework = {
        base: `${req.protocol}://${req.get("host")}`,
        canonical: `${req.protocol}://${req.get("host") + req.path}`
    };

    return {
        ...app,
        ...configs,
        ...framework
    };
}
