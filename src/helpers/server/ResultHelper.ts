import logger from "@/src/helpers/server/Logger.ts";

export type Result = ResultSuccess | ResultFailure;

export interface ResultSuccess {
    success: true;
    data: unknown;
}

export interface ResultFailure {
    success: false;
    error: string;
}

export function sendSuccess(payload: unknown = {}): Response {
    const data = {
        success: true,
        data: payload
    } as ResultSuccess;

    return new Response(JSON.stringify(data), {
        status: 200,
        headers: {
            "Content-Type": "application/json"
        }
    });
}

export function sendFailure(error: string = ""): Response {
    const data = {
        success: false,
        error
    } as ResultFailure;

    if (error.length) {
        logger.error(error);
    }

    return new Response(JSON.stringify(data), {
        status: 200,
        headers: {
            "Content-Type": "application/json"
        }
    });
}
