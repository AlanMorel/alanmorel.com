import Contacts from "@/src/components/Contacts.tsx";
import Intro from "@/src/components/Intro.tsx";
import Projects from "@/src/components/projects/Projects.tsx";
import SimpleHomepage from "@/src/components/SimpleHomepage.tsx";
import StructuredData from "@/src/components/StructuredData.tsx";
import config from "@/src/Config.ts";
import { getHead } from "@/src/helpers/client/MetadataHelper.ts";
import { organization, website } from "@/src/helpers/server/Schema.ts";
import { createFileRoute } from "@tanstack/react-router";
import type { ReactElement } from "react";

export const Route = createFileRoute("/")({
    head: () =>
        getHead({
            title: config.metaInfo.title,
            description: `${config.metaInfo.title} - ${config.metaInfo.description}`,
            canonical: "/",
            image: {
                url: config.metaInfo.image.url,
                width: config.metaInfo.image.width,
                height: config.metaInfo.image.height,
                alt: config.metaInfo.image.alt
            }
        }),
    component: HomePage
});

function HomePage(): ReactElement {
    if (config.simpleMode) {
        return <SimpleHomepage />;
    }

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
