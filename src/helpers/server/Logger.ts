import { getYearMonthDate } from "@/src/helpers/server/NumberHelper.ts";
import { dim, white } from "colorette";
import fs from "fs";
import path from "path";
import pino, { Level, Logger, multistream, MultiStreamRes } from "pino";
import pretty from "pino-pretty";

const DAY = 24 * 60 * 60 * 1000;

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
        fs.mkdirSync(directory, { recursive: true });
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
        consoleLogger.info(message);
        fileLogger.info(message);
    },
    error: function (error: string): void {
        consoleLogger.error(error);
        fileLogger.error(error);
    },
    critical: function (error: string): void {
        consoleLogger.fatal(error);
        fileLogger.fatal(error);
    }
};

function refreshLoggers(): void {
    logger.log("Refreshing loggers...");
    fileLogger = createPinoLogger("");
}

function scheduleLoggerRefresh(): void {
    const now = new Date();
    const midnight = new Date(now);
    midnight.setHours(24, 0, 0, 0);

    const timeUntilMidnight = midnight.getTime() - now.getTime();

    setTimeout(() => {
        refreshLoggers();
        setInterval(refreshLoggers, DAY);
    }, timeUntilMidnight);
}

scheduleLoggerRefresh();

export default logger;
