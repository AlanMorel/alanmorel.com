import { sendFailure, sendSuccess } from "@/src/helpers/server/ResultHelper.ts";
import { getJournalEntry, isJournalAuthenticated } from "@/src/helpers/server/ServerFunctions.ts";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/api/journal/fetch")({
    server: {
        handlers: {
            POST: async ({ request }) => {
                const isAuthenticated = await isJournalAuthenticated();

                if (!isAuthenticated) {
                    return sendFailure("not authenticated");
                }

                const { date } = await request.json();

                const entry = await getJournalEntry({
                    data: {
                        date: new Date(date)
                    }
                });

                return sendSuccess(entry);
            }
        }
    }
});
