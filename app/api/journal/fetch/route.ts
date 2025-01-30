import { getJournalEntry, isJournalAuthenticated } from "@/src/helpers/server/JournalHelper.ts";
import { sendFailure, sendSuccess } from "@/src/helpers/server/ResultHelper.ts";
import { NextResponse } from "next/server";

export async function POST(request: Request): Promise<NextResponse> {
    const isAuthenticated = await isJournalAuthenticated();

    if (!isAuthenticated) {
        return sendFailure("not authenticated");
    }

    const { date } = await request.json();
    const entry = await getJournalEntry(new Date(date));

    return sendSuccess(entry);
}
