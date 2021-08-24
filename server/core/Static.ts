import Config from "@/Config";
import express, { Application } from "express";

const staticOptions = {
    fallthrough: false
};

export default (app: Application): void => {
    app.use("/dist", express.static(Config.root + "/dist/" + Config.env, staticOptions));
    app.use("/assets", express.static(Config.root + "/assets", staticOptions));
};
