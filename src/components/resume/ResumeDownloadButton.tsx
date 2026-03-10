import ResumePDF from "@/src/components/resume/Resume.tsx";
import DataJSON from "@/src/data.json" with { type: "json" };
import { pdf } from "@react-pdf/renderer";
import type { ReactElement } from "react";

async function downloadPDF(resume: typeof DataJSON.resume, fileName: string): Promise<void> {
    const blob = await pdf(<ResumePDF resume={resume} />).toBlob();
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = fileName;
    a.click();
    URL.revokeObjectURL(url);
}

export default function ResumeDownloadButton(): ReactElement {
    const resume = DataJSON.resume;

    const slug = resume.header.toLowerCase().replace(/ /g, "-");
    const fileName = `${slug}-resume.pdf`;

    return (
        <button
            className="cursor-pointer text-slate-800 underline hover:no-underline dark:text-slate-200"
            onClick={(): void => {
                void downloadPDF(resume, fileName);
            }}
        >
            Download PDF
        </button>
    );
}
