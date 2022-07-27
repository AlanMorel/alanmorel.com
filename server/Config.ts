import dotenv from "dotenv";

dotenv.config();

const getOrigin = (): string => {
    const docker = process.env.DOCKER ? true : false;
    if (docker) {
        return process.env.DOCKER_ORIGIN || `http://${name.toLowerCase()}.localhost`;
    } else {
        return process.env.ORIGIN || `http://localhost:${port}`;
    }
};

const root = `${process.cwd()}`;

const name = "AlanMorel";
const partials = `${root}/server/views/partials`;

const port = parseInt(process.env.PORT || "8080");
const env = process.env.NODE_ENV || "development";
const version = parseInt(process.env.VERSION || "0");
const origin = getOrigin();

const twitterHandle = process.env.TWITTER_HANDLE ?? "";

const sharex = {
    secret: process.env.SHAREX_SECRET || ""
};

export default {
    root,
    name,
    partials,
    port,
    env,
    version,
    origin,
    twitterHandle,
    sharex
};
