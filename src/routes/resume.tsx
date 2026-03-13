import ResumeDownloadButton from "@/src/components/resume/ResumeDownloadButton.tsx";
import ResumeEvent from "@/src/components/resume/ResumeEvent.tsx";
import ResumeSection from "@/src/components/resume/ResumeSection.tsx";
import config from "@/src/Config.ts";
import DataJSON from "@/src/data.json" with { type: "json" };
import { getHead } from "@/src/helpers/client/MetadataHelper.ts";
import { createFileRoute } from "@tanstack/react-router";
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

export const Route = createFileRoute("/resume")({
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
        <div className="bg-slate-50 text-sm text-black lg:min-h-screen lg:pt-20 dark:bg-slate-950">
            <div className="mx-auto mb-4 flex w-full justify-center py-2 print:hidden">
                <ResumeDownloadButton />
            </div>
            <div className="mx-auto box-border w-full border border-slate-200 bg-white p-4 lg:h-[1056px] lg:w-[816px] lg:px-12 lg:py-8 dark:border-slate-800 print:border-0">
                <div className="mb-4 inline-flex w-full flex-wrap justify-center space-x-4">
                    {resume.links.map(link => (
                        <a className="hover:underline" href={link.url} key={link.name}>
                            {link.name}
                        </a>
                    ))}
                </div>
                <h1 className="-mb-2 text-center text-4xl font-bold">{resume.header}</h1>
                <ResumeSection header="Skills">
                    <div>{resume.skills.join(", ")}</div>
                </ResumeSection>
                <ResumeSection header="Experience">
                    <ul className="list-none">
                        {resume.experience.map(experience => (
                            <li key={experience.organization}>
                                <ResumeEvent
                                    date={experience.date}
                                    header={experience.organization}
                                    subheader={experience.title}
                                />
                                <ul className="mb-2 list-disc space-y-1 pl-4">
                                    {experience.achievements.map(achievement => (
                                        <li key={achievement}>{achievement}</li>
                                    ))}
                                </ul>
                            </li>
                        ))}
                    </ul>
                </ResumeSection>
                <ResumeSection header="Projects">
                    <ul className="mb-2 list-disc space-y-2 pl-4">
                        {resume.projects.map(project => (
                            <li key={project.name}>
                                <strong>{project.name}</strong> {project.description}
                            </li>
                        ))}
                    </ul>
                </ResumeSection>
                <ResumeSection header="Education">
                    <ul className="list-none">
                        {resume.education.map(education => (
                            <li key={education.university}>
                                <ResumeEvent header={education.university} subheader={education.college} />
                                <div>{education.description}</div>
                            </li>
                        ))}
                    </ul>
                </ResumeSection>
            </div>
        </div>
    );
}
