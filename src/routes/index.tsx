import Contacts from "@/src/components/Contacts.tsx";
import Intro from "@/src/components/Intro.tsx";
import Projects from "@/src/components/projects/Projects.tsx";
import StructuredData from "@/src/components/StructuredData.tsx";
import config from "@/src/Config.ts";
import { getLinks, getMeta } from "@/src/helpers/client/MetadataHelper";
import { organization, website } from "@/src/helpers/server/Schema.ts";
import { createFileRoute } from "@tanstack/react-router";
import { ReactElement } from "react";

export const Route = createFileRoute("/")({
    head: () => ({
        meta: getMeta({
            title: config.metaInfo.title,
            description: config.metaInfo.description,
            canonical: "/",
            image: {
                url: config.metaInfo.image.url,
                width: config.metaInfo.image.width,
                height: config.metaInfo.image.height,
                alt: config.metaInfo.image.alt
            }
        }),
        links: getLinks({
            canonical: "/"
        })
    }),
    component: HomePage
});

function HomePage(): ReactElement {
    return (
        <main className="tracking-[0.025rem]">
            <Intro />
            <Contacts />
            <Projects />
            <StructuredData data={organization} />
            <StructuredData data={website} />
        </main>
    );
}
