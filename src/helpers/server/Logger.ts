import { getDateStamp, getYearMonthDate } from "@/src/helpers/server/NumberHelper.ts";
import { dim, white } from "colorette";
import fs from "node:fs";
import path from "node:path";
import pino, { Level, Logger, multistream, MultiStreamRes } from "pino";
import pretty from "pino-pretty";

let datestamp = getDateStamp();

const base = "logs";
const levels: Level[] = ["info", "error", "fatal"];

const pinoOptions = {
    level: "debug",
    redact: {
        paths: ["pid", "hostname"],
        remove: true
    }
};

const prettyOptions = {
    colorize: true,
    translateTime: "SYS:h:MM:ss TT",
    messageFormat: (log: Record<string, unknown>, messageKey: string): string => {
        return `${white(log[messageKey] as string)}`;
    },
    customPrettifiers: {
        time: (timestamp: string | object): string => {
            return dim(timestamp as string);
        }
    }
};

const consoleLogger = pino(pinoOptions, pretty(prettyOptions));

function createPinoLogger(prefix: string): Logger {
    return pino(pinoOptions, getFileTransports(prefix));
}

function getFileTransports(prefix: string): MultiStreamRes<Level> {
    const [year, month, day] = getYearMonthDate();

    const basePath = path.resolve(`${base}/${prefix}`);

    levels.forEach((level: Level) => {
        const directory = path.join(basePath, level, year, month);
        fs.mkdirSync(directory, {
            recursive: true
        });
    });

    return multistream(
        levels.map((level: Level) => {
            return {
                level,
                stream: pino.destination(`${basePath}/${level}/${year}/${month}/${year}-${month}-${day}.log`)
            };
        })
    );
}

let fileLogger = createPinoLogger("");

const logger = {
    log: function (message: string): void {
        setLoggers();
        consoleLogger.info(message);
        fileLogger.info(message);
    },
    error: function (error: string): void {
        setLoggers();
        consoleLogger.error(error);
        fileLogger.error(error);
    },
    critical: function (error: string): void {
        setLoggers();
        consoleLogger.fatal(error);
        fileLogger.fatal(error);
    }
};

function setLoggers(): void {
    const currentDatestamp = getDateStamp();

    if (currentDatestamp === datestamp) {
        return;
    }

    datestamp = currentDatestamp;

    logger.log("Refreshing loggers...");

    fileLogger = createPinoLogger("");
}

export default logger;
