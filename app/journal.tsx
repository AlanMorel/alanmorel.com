import config from "@/src/Config.ts";
import Entry from "@/src/components/journal/Entry.tsx";
import Modal from "@/src/components/modals/Modal.tsx";
import Config from "@/src/helpers/Config.ts";
import HotToast from "@/src/helpers/client/HotToast.tsx";
import { getLinks, getMeta } from "@/src/helpers/client/MetadataHelper.ts";
import { getJournalEntry, isJournalAuthenticated } from "@/src/helpers/server/ServerFunctions.ts";
import { createFileRoute, redirect } from "@tanstack/react-router";
import { ReactElement } from "react";

export const Route = createFileRoute("/journal")({
    beforeLoad: async () => {
        const isAuthenticated = await isJournalAuthenticated();

        if (!isAuthenticated) {
            throw redirect({ to: "/" });
        }
    },
    loader: async () => {
        const today = new Date();

        const entry = await getJournalEntry({
            data: {
                date: today
            }
        });

        return {
            entry,
            startDate: Config.journal.startDate.getTime()
        };
    },
    head: () => ({
        meta: getMeta({
            title: "Journal",
            description: "Add and view journal entries.",
            canonical: "/journal",
            image: {
                url: config.metaInfo.image,
                width: 1280,
                height: 800,
                alt: config.metaInfo.title
            }
        }),
        links: getLinks({
            canonical: "/journal"
        })
    }),
    component: JournalPage
});

function JournalPage(): ReactElement {
    const { entry, startDate } = Route.useLoaderData();

    return (
        <div className="mx-auto max-w-3xl text-center text-black">
            <div className="mx-4">
                <h1 className="mb-2 pt-4 text-3xl font-bold">Journal</h1>
                <Entry entry={entry} startDate={startDate} />
            </div>
            <Modal />
            <HotToast />
        </div>
    );
}
