import { Logger } from "@/server/tools/Logger";
import { Response } from "express";

export function sendSuccess(res: Response, payload: any = {}): void {
    const data = {
        success: true,
        ...payload
    };
    res.json(data);
}

export function sendFailure(res: Response, error: string = ""): void {
    const data = {
        success: false,
        error
    };
    res.json(data);
    Logger.error(error);
}
