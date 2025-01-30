import ResumeEvent from "@/src/components/resume/ResumeEvent.tsx";
import ResumeSection from "@/src/components/resume/ResumeSection.tsx";
import DataJSON from "@/src/data.json" assert { type: "json" };
import { ReactElement } from "react";

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
};

export default async function ResumePage(): Promise<ReactElement> {
    const resume = DataJSON.resume;

    return (
        <div className="bg-slate-50 lg:min-h-screen lg:pt-20">
            <div className="mx-auto box-border w-full border border-slate-200 bg-white p-4 lg:h-[1056px] lg:w-[816px] lg:px-12 lg:py-6 print:border-0">
                <div className="mb-4 inline-flex w-full flex-wrap justify-center space-x-4 text-sm">
                    {resume.links.map(link => (
                        <a key={link.name} className="hover:underline" href={link.url}>
                            {link.name}
                        </a>
                    ))}
                </div>
                <h1 className="-mb-2 text-center text-3xl font-bold">{resume.header}</h1>
                <ResumeSection header="Skills">
                    <div className="text-sm">{resume.skills.join(", ")}</div>
                </ResumeSection>
                <ResumeSection header="Experience">
                    <ul className="list-none">
                        {resume.experience.map(experience => (
                            <li key={experience.organization}>
                                <ResumeEvent
                                    header={experience.organization}
                                    subheader={experience.title}
                                    date={experience.date}
                                />
                                <ul className="mb-2 list-disc pl-4 text-sm">
                                    {experience.achievements.map(achievement => (
                                        <li key={achievement}>{achievement}</li>
                                    ))}
                                </ul>
                            </li>
                        ))}
                    </ul>
                </ResumeSection>
                <ResumeSection header="Projects">
                    <ul className="mb-2 list-disc space-y-1 pl-4 text-sm">
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
                                <ResumeEvent
                                    header={education.university}
                                    subheader={education.college}
                                    date={education.date}
                                />
                                <div className="text-sm lg:text-base">{education.description}</div>
                            </li>
                        ))}
                    </ul>
                </ResumeSection>
            </div>
        </div>
    );
}
