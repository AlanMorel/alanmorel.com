import dotenv from "dotenv";
import fs from "fs";

dotenv.config();

const getRoot = (): string => {
    const root = __dirname.split("dist")[0].split("server")[0];
    root.endsWith("/") ? root.slice(0, -1) : root;
    return root;
};

const getVersion = (): number => {
    const path = getRoot() + "/version.txt";
    if (!fs.existsSync(path)) {
        console.error("Please create ./version.txt file");
        return 0;
    }
    const contents = fs.readFileSync(path, { encoding: "utf8", flag: "r" });
    return parseInt(contents);
};

const getOrigin = (): string => {
    let origin = process.env.ORIGIN || "http://localhost:" + port;
    if (docker) {
        origin = process.env.DOCKER_ORIGIN ?? "http://" + name.toLowerCase() + ".localhost";
    }

    return origin;
};

const name = "AlanMorel";
const port = parseInt(process.env.PORT || "8080");
const env = process.env.NODE_ENV || "development";
const root = getRoot();
const version = getVersion();
const docker = process.env.DOCKER ? true : false;
const origin = getOrigin();

const sharex = {
    secret: process.env.SHAREX_SECRET || ""
};

export default {
    name,
    port,
    origin,
    env,
    root,
    version,
    sharex
};
