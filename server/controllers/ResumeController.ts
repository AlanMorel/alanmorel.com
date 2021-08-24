import { Request, Response } from "express";
import Config from "@/Config";

const app = {
    ...Config
};

const metaInfo = {
    title: "Alan Morel - Software Engineer, Photographer, Music Producer",
    description: "Alan Morel - Software Engineer, Photographer, Music Producer",
    image: "/assets/images/pic.png",
    twitter: "AlanMorelX"
};

export default function (req: Request, res: Response): void {
    const base = req.protocol + "://" + req.get("host");
    const canonical = req.originalUrl;

    res.render("resume", {
        app,
        metaInfo,
        base,
        canonical
    });
}
