import { NextFunction, Request, Response } from "express";

export default function (path: string): (req: Request, res: Response, next: NextFunction) => void {
    return async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        req.url = path;
        next();
    };
}
