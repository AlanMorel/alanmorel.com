import Contacts from "@/src/components/Contacts.tsx";
import HomePageContent from "@/src/components/HomePageContent.tsx";
import Projects from "@/src/components/projects/Projects.tsx";
import SimpleHomepage from "@/src/components/SimpleHomepage.tsx";
import config from "@/src/Config.ts";
import { getHead } from "@/src/helpers/client/MetadataHelper.ts";
import { createFileRoute } from "@tanstack/react-router";
import { createServerFn } from "@tanstack/react-start";
import { CompositeComponent, createCompositeComponent } from "@tanstack/react-start/rsc";
import type { ReactElement } from "react";

const getHomePage = createServerFn().handler(async () => {
    const src = await createCompositeComponent(HomePageContent);

    return { src };
});

export const Route = createFileRoute("/")({
    loader: async () => await getHomePage(),
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
    const { src } = Route.useLoaderData();

    if (config.simpleMode) {
        return <SimpleHomepage />;
    }

    return <CompositeComponent renderContacts={() => <Contacts />} renderProjects={() => <Projects />} src={src} />;
}
