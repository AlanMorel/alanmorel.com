import Config from "@/server/Config";
import { Request } from "express";

const configs = {
    root: Config.root,
    name: Config.name,
    partials: Config.partials
};

export default function (req: Request): any {
    const framework = {
        base: `${req.protocol}://${req.get("host")}`,
        canonical: `${req.protocol}://${req.get("host") + req.path}`
    };

    return {
        ...configs,
        ...framework
    };
}
