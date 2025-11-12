import { saveJournalEntry } from "@/src/helpers/server/JournalHelper.ts";
import { sendFailure, sendSuccess } from "@/src/helpers/server/ResultHelper";
import { isJournalAuthenticated } from "@/src/helpers/server/ServerFunctions.ts";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/api/journal/save")({
    server: {
        handlers: {
            POST: async ({ request }) => {
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
        }
    }
});
