import Entry from "@/src/components/journal/Entry";
import Config from "@/src/helpers/Config";
import HotToast from "@/src/helpers/client/HotToast";
import { getJournalEntry, isJournalAuthenticated } from "@/src/helpers/server/JournalHelper";
import { withMetadata } from "@/src/helpers/server/MetadataHelper";
import { redirect } from "next/navigation";

export default async function JournalPage(): Promise<JSX.Element> {
    const isAuthenticated = isJournalAuthenticated();

    if (!isAuthenticated) {
        return redirect("/");
    }

    const today = new Date();
    const entry = await getJournalEntry(today);

    return (
        <div className="mx-auto max-w-3xl text-center">
            <div className="mx-4">
                <h1 className="mb-2 mt-4 text-4xl font-bold">Journal</h1>
                <Entry entry={entry} startDate={Config.journal.startDate.getTime()} />
            </div>
            <HotToast />
        </div>
    );
}

export const metadata = withMetadata({
    title: "Journal",
    description: "Add and view journal entries."
});
