import Config from "@/server/Config";
import express, { Application } from "express";

const staticOptions = {
    fallthrough: false
};

export default (app: Application): void => {
    app.use("/assets", express.static(`${Config.root}/assets`, staticOptions));
    app.use("/images", express.static(`${Config.root}/images`, staticOptions));
};
