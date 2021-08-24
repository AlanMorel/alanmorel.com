import Config from "@/Config";
import EJS from "@/core/EJS";
import router from "@/core/Router";
import staticAssets from "@/core/Static";
import express from "express";

const app = express();

staticAssets(app);
EJS(app);
router(app);

app.listen(Config.port, "0.0.0.0", () => {
    console.log(`${Config.name} v${Config.version} is running at ${Config.origin} in ${Config.env} mode`);
});
