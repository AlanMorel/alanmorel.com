import Context from "@/server/helpers/Context";
import { Logger } from "@/server/tools/Logger";
import { NextFunction, Request, Response } from "express";

export default (err: any, req: Request, res: Response, next: NextFunction): void => {
    const context = Context(req);

    Logger.error(`500 error on path: ${context.path}, file: ${err.path}`);
    Logger.error(err.message);

    res.redirect("/");
};
