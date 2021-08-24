import { Request, Response } from "express";

export default function(link: string): (req: Request, res: Response) => void {
    return (req: Request, res: Response): void => res.redirect(link);
}
