import Config from "@/Config";
import AssetController from "@/Controllers/AssetController";
import LinkController from "@/Controllers/LinkController";
import MainController from "@/Controllers/MainController";
import ResumeController from "@/Controllers/ResumeController";
import links from "@/links.json";
import { Application } from "express";

export default (app: Application): void => {
    for (const link of links) {
        app.get(link.from, LinkController(link.to));
    }
    app.get("/robots.txt", AssetController(Config.root + "/assets/robots.txt"));
    app.get("/resume", ResumeController);
    app.get("*", MainController);
};
