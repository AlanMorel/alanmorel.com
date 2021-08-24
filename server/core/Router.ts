import Config from "@/Config";
import AssetController from "@/controllers/AssetController";
import LinkController from "@/controllers/LinkController";
import MainController from "@/controllers/MainController";
import ResumeController from "@/controllers/ResumeController";
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
