import logger from "@/src/helpers/server/Logger.ts";
import { NextResponse } from "next/server";

export type Result = ResultSuccess | ResultFailure;

export interface ResultSuccess {
    success: true;
    data: unknown;
}

export interface ResultFailure {
    success: false;
    error: string;
}

export function sendSuccess(payload: unknown = {}): NextResponse {
    const data = {
        success: true,
        data: payload
    } as ResultSuccess;

    return NextResponse.json(data);
}

export function sendFailure(error: string = ""): NextResponse {
    const data = {
        success: false,
        error
    } as ResultFailure;

    if (error.length) {
        logger.error(error);
    }

    return NextResponse.json(data);
}
