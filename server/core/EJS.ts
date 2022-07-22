import Config from "@/server/Config";
import { Application } from "express";

export default (app: Application): void => {
    app.set("view engine", "ejs");
    app.set("views", `${Config.root}/server/views`);
};
