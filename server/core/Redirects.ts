import RewriteController from "@/controllers/get/RewriteController";
import { Application } from "express";

export default (app: Application): void => {
    app.get("/dist/chunk-vendors.(:version).js", RewriteController("/dist/chunk-vendors.js"));
    app.get("/dist/index.(:version).js", RewriteController("/dist/index.js"));
};
