import Entry from "@/src/components/journal/Entry.tsx";
import Modal from "@/src/components/modals/Modal.tsx";
import Config from "@/src/helpers/Config.ts";
import HotToast from "@/src/helpers/client/HotToast.tsx";
import { getJournalEntry, isJournalAuthenticated } from "@/src/helpers/server/JournalHelper.ts";
import { withMetadata } from "@/src/helpers/server/MetadataHelper.ts";
import { redirect } from "next/navigation";
import { ReactElement } from "react";

export const dynamic = "force-dynamic";

export default async function JournalPage(): Promise<ReactElement> {
    const isAuthenticated = await isJournalAuthenticated();

    if (!isAuthenticated) {
        return redirect("/");
    }

    const today = new Date();
    const entry = await getJournalEntry(today);

    return (
        <div className="mx-auto max-w-3xl text-center">
            <div className="mx-4">
                <h1 className="mb-2 pt-4 text-3xl font-bold">Journal</h1>
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
