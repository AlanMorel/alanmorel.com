import ResumeViewerContent from "@/src/components/resume/ResumeViewerContent.tsx";
import config from "@/src/Config.ts";
import { getHead } from "@/src/helpers/client/MetadataHelper.ts";
import { createFileRoute } from "@tanstack/react-router";
import type { ReactElement } from "react";

export const Route = createFileRoute("/resume-viewer")({
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
    component: ResumeViewerPage
});

function ResumeViewerPage(): ReactElement {
    return <ResumeViewerContent />;
}
