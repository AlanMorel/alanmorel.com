import { isJournalAuthenticated, saveJournalEntry } from "@/src/helpers/server/JournalHelper";
import { Logger } from "@/src/helpers/server/Logger";
import { sendFailure, sendSuccess } from "@/src/helpers/server/ResultHelper";
import { NextResponse } from "next/server";

export async function POST(request: Request): Promise<NextResponse> {
    const isAuthenticated = isJournalAuthenticated();

    if (!isAuthenticated) {
        return sendFailure("not authenticated");
    }

    const { date, entry } = await request.json();

    const result = await saveJournalEntry(new Date(date), entry);

    if (!result) {
        return sendFailure("failed to save entry");
    }

    Logger.log(`Saved journal entry for ${date}: ${entry}`);

    return sendSuccess();
}
