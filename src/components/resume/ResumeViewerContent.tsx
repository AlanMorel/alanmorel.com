"use client";

import ResumePDF from "@/src/components/resume/Resume.tsx";
import DataJSON from "@/src/data.json" with { type: "json" };
import { PDFViewer } from "@react-pdf/renderer";
import type { ReactElement } from "react";

export default function ResumeViewerContent(): ReactElement {
    return (
        <div className="h-screen">
            <PDFViewer height="100%" width="100%">
                <ResumePDF resume={DataJSON.resume} />
            </PDFViewer>
        </div>
    );
}
