import Config from "@/server/Config";
import EJS from "@/server/core/EJS";
import router from "@/server/core/Router";
import SignalHandler from "@/server/core/SignalHandler";
import staticAssets from "@/server/core/Static";
import ErrorHandler from "@/server/helpers/ErrorHandler";
import { Logger } from "@/server/tools/Logger";
import compression from "compression";
import express from "express";
import fileUpload from "express-fileupload";
import helmet from "helmet";
import * as vite from "vite";

startServer();

async function startServer() {
    const app = express();

    app.enable("trust proxy");

    app.use(compression());
    app.use(fileUpload());
    app.use(express.json());
    app.use(
        express.urlencoded({
            extended: true
        })
    );
    app.use(
        helmet({
            contentSecurityPolicy: false,
            crossOriginEmbedderPolicy: false
        })
    );

    if (Config.env === "production") {
        app.use(express.static(`${Config.root}/dist/client`));
    } else {
        const viteDevServer = await vite.createServer({
            root: Config.root,
            server: {
                middlewareMode: true
            }
        });
        app.use(viteDevServer.middlewares);
    }

    staticAssets(app);
    EJS(app);
    router(app);
    app.use(ErrorHandler);

    const server = app.listen(Config.port);

    SignalHandler(server);

    Logger.log(`${Config.name} v${Config.version} is running at ${Config.origin} in ${Config.env} mode`);
}
