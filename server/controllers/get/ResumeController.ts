import AppInfo from "@/server/helpers/AppInfo";
import { Request, Response } from "express";

export default function (req: Request, res: Response): void {
    const app = AppInfo(req);

    res.render("resume", {
        ...app
    });
}
