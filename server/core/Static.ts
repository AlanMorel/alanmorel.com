import Config from "@/server/Config";
import express, { Application } from "express";

const staticOptions = {
    fallthrough: false
};

export default (app: Application): void => {
    app.use("/assets", express.static(`${Config.root}/assets`, staticOptions));
    app.use("/files", express.static(`${Config.root}/files`, staticOptions));
};
