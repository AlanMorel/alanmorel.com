import Contacts from "@/src/components/Contacts.tsx";
import getIcon from "@/src/components/Icons.tsx";
import Intro from "@/src/components/Intro.tsx";
import OpenSourceAside from "@/src/components/OpenSourceAside.tsx";
import type { PillItem } from "@/src/components/PillCarousel.tsx";
import PillCarousel from "@/src/components/PillCarousel.tsx";
import Projects from "@/src/components/projects/Projects.tsx";
import SimpleHomepage from "@/src/components/SimpleHomepage.tsx";
import StructuredData from "@/src/components/StructuredData.tsx";
import config from "@/src/Config.ts";
import data from "@/src/data.json" with { type: "json" };
import { getHead } from "@/src/helpers/client/MetadataHelper.ts";
import { organization, website } from "@/src/helpers/server/Schema.ts";
import { createFileRoute } from "@tanstack/react-router";
import type { ReactElement } from "react";

const technologyHighlight: PillItem[] = data.technologies.map(tech => ({
    icon: getIcon(tech.toLowerCase()),
    label: tech
}));

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
            <section className="py-8">
                <div className="flex flex-col gap-2">
                    <PillCarousel pills={technologyHighlight} />
                    <PillCarousel pills={technologyHighlight} reverse />
                </div>
            </section>
            <OpenSourceAside />
            <Projects />
            <StructuredData data={organization} />
            <StructuredData data={website} />
        </main>
    );
}
