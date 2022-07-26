import Context from "@/server/helpers/Context";
import Config from "@/shared/Config";
import { Request, Response } from "express";

export default function (req: Request, res: Response): void {
    const context = Context(req);
    const meta = Config.metaInfo;

    res.render("resume", {
        ...context,
        ...meta
    });
}
