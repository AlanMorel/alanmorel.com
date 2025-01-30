import { isJournalAuthenticated, saveJournalEntry } from "@/src/helpers/server/JournalHelper";
import { sendFailure, sendSuccess } from "@/src/helpers/server/ResultHelper";
import { NextResponse } from "next/server";

export async function POST(request: Request): Promise<NextResponse> {
    const isAuthenticated = await isJournalAuthenticated();

    if (!isAuthenticated) {
        return sendFailure("not authenticated");
    }

    const { date, entry } = await request.json();
    const result = await saveJournalEntry(new Date(date), entry);

    if (!result) {
        return sendFailure("failed to save entry");
    }

    return sendSuccess();
}
