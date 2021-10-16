import { Request, Response } from "express";

export default function (path: string): (req: Request, res: Response) => void {
    return (req: Request, res: Response): void => res.sendFile(path);
}
