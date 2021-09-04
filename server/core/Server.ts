import Config from "@/Config";
import EJS from "@/core/EJS";
import redirects from "@/core/Redirects";
import router from "@/core/Router";
import SignalHandler from "@/core/SignalHandler";
import staticAssets from "@/core/Static";
import { Logger } from "@/tools/Logger";
import express from "express";

const app = express();

redirects(app);
staticAssets(app);
EJS(app);
router(app);

const server = app.listen(Config.port, "0.0.0.0", () => {
    Logger.log(`${Config.name} v${Config.version} is running at ${Config.origin} in ${Config.env} mode`);
});

SignalHandler(server);
