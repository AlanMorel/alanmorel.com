import Entry from "@/src/components/journal/Entry";
import Modal from "@/src/components/modals/Modal";
import Config from "@/src/helpers/Config";
import HotToast from "@/src/helpers/client/HotToast";
import { getJournalEntry, isJournalAuthenticated } from "@/src/helpers/server/JournalHelper";
import { withMetadata } from "@/src/helpers/server/MetadataHelper";
import { redirect } from "next/navigation";
import { ReactElement } from "react";

export default async function JournalPage(): Promise<ReactElement> {
    const isAuthenticated = isJournalAuthenticated();

    if (!isAuthenticated) {
        return redirect("/");
    }

    const today = new Date();
    const entry = await getJournalEntry(today);

    return (
        <div className="mx-auto max-w-3xl text-center">
            <div className="mx-4">
                <h1 className="mb-2 mt-4 text-3xl font-bold">Journal</h1>
                <Entry entry={entry} startDate={Config.journal.startDate.getTime()} />
            </div>
            <Modal />
            <HotToast />
        </div>
    );
}

export const metadata = withMetadata({
    title: "Journal",
    description: "Add and view journal entries.",
    canonical: "/journal"
});
