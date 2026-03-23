import ResumePDF from "@/src/components/resume/Resume.tsx";
import config from "@/src/Config.ts";
import DataJSON from "@/src/data.json" with { type: "json" };
import { getHead } from "@/src/helpers/client/MetadataHelper.ts";
import { PDFViewer } from "@react-pdf/renderer";
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
    component: ResumePage
});

function ResumePage(): ReactElement {
    const resume = DataJSON.resume;

    return (
        <div className="h-screen">
            <PDFViewer height="100%" width="100%">
                <ResumePDF resume={resume} />
            </PDFViewer>
        </div>
    );
}
