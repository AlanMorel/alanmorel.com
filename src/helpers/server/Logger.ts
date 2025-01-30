import { createIfNotExists } from "@/src/helpers/server/FileSystemHelper.ts";
import pino, { Logger, StreamEntry, multistream } from "pino";
import pretty from "pino-pretty";
import { createStream } from "rotating-file-stream";

const base = "logs";
const levels = ["info", "error", "fatal"];

function getGenerator(prefix: string, level: string) {
    return (time: number | Date): string => {
        let directory = `${base}${prefix}/${level}`;

        if (!time) {
            createIfNotExists(directory);

            return `${directory}/${level}.log`;
        }

        const now = new Date(time);

        const timestamp = now.toISOString().split("T")[0];
        const [year, month] = [...timestamp.split("-")];

        directory += `/${year}/${month}`;

        createIfNotExists(directory);

        return `${directory}/${timestamp}.log`;
    };
}

function getStreams(prefix: string): StreamEntry<string>[] {
    return [
        ...levels.map(level => {
            const stream = createStream(getGenerator(prefix, level), {
                interval: "1d"
            });

            return {
                level,
                stream: stream
            };
        }),
        {
            stream: pretty({
                colorize: true,
                translateTime: "SYS:dd-mm-yyyy HH:MM:ss TT"
            })
        }
    ];
}

const pinoOptions = {
    level: "debug",
    safe: true,
    redact: {
        paths: ["pid", "hostname"],
        remove: true
    }
};

function createPinoLogger(prefix: string): Logger {
    return pino(pinoOptions, multistream(getStreams(prefix)));
}

const pinoLogger = createPinoLogger("");

const logger = {
    log: function (message: string): void {
        pinoLogger.info(message);
    },
    error: function (error: string): void {
        pinoLogger.error(error);
    },
    critical: function (error: string): void {
        pinoLogger.error(error);
        pinoLogger.fatal(error);
    }
};

export default logger;
