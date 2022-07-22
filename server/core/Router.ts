import Config from "@/server/Config";
import AssetController from "@/server/controllers/get/AssetController";
import LinkController from "@/server/controllers/get/LinkController";
import MainController from "@/server/controllers/get/MainController";
import ResumeController from "@/server/controllers/get/ResumeController";
import ShareXController from "@/server/controllers/post/ShareXController";
import links from "../links.json" assert { type: "json" };

import { Application } from "express";

const setGetRoutes = (app: Application): void => {
    for (const link of links) {
        app.get(link.from, LinkController(link.to));
    }
    app.get("/robots.txt", AssetController(`${Config.root}/assets/robots.txt`));
    app.get("/resume", ResumeController);
    app.get("*", MainController);
};

const setPostRoutes = (app: Application): void => {
    app.post("/sharex", ShareXController);
};

export default (app: Application): void => {
    setGetRoutes(app);
    setPostRoutes(app);
};
