import AppInfo from "@/server/helpers/AppInfo";
import { Logger } from "@/server/tools/Logger";
import { NextFunction, Request, Response } from "express";

export default (err: any, req: Request, res: Response, next: NextFunction): void => {
    const app = AppInfo(req);

    Logger.error(`500 error on path: ${app.path}, file: ${err.path}`);
    Logger.error(err.message);

    res.redirect("/");
};
