import ResumeContent from "@/src/components/resume/ResumeContent.tsx";
import ResumeDownloadButton from "@/src/components/resume/ResumeDownloadButton.tsx";
import config from "@/src/Config.ts";
import { getHead } from "@/src/helpers/client/MetadataHelper.ts";
import { createFileRoute } from "@tanstack/react-router";
import { createServerFn } from "@tanstack/react-start";
import { CompositeComponent, createCompositeComponent } from "@tanstack/react-start/rsc";
import type { ReactElement } from "react";

export type Resume = {
    header: string;
    links: {
        name: string;
        url: string;
    }[];
    skills: string[];
    experience: {
        organization: string;
        title: string;
        date: string;
        achievements: string[];
    }[];
    projects: {
        name: string;
        description: string;
    }[];
    education: {
        university: string;
        college: string;
        description: string;
    }[];
};

const getResumePage = createServerFn().handler(async () => {
    const src = await createCompositeComponent(ResumeContent);

    return { src };
});

export const Route = createFileRoute("/resume")({
    loader: async () => await getResumePage(),
    head: () =>
        getHead({
            title: `Resume - ${config.metaInfo.title}`,
            description: `Resume - ${config.metaInfo.description}`,
            canonical: "/resume",
            image: {
                url: config.metaInfo.image.url,
                width: config.metaInfo.image.width,
                height: config.metaInfo.image.height,
                alt: config.metaInfo.image.alt
            }
        }),
    component: ResumePage
});

function ResumePage(): ReactElement {
    const { src } = Route.useLoaderData();

    return <CompositeComponent renderDownloadButton={() => <ResumeDownloadButton />} src={src} />;
}
