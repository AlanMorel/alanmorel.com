import tw from "@/src/components/other/TailwindHelper.ts";
import ProjectImages from "@/src/components/projects/ProjectImages.tsx";
import ProjectLinks from "@/src/components/projects/ProjectLinks.tsx";
import ProjectPlatforms from "@/src/components/projects/ProjectPlatforms.tsx";
import ProjectTechnologies from "@/src/components/projects/ProjectTechnologies.tsx";
import DataJSON from "@/src/data.json" assert { type: "json" };
import { ReactElement } from "react";

export type Project = {
    name: string;
    slug: string;
    background: string;
    theme: string;
    date: string;
    description: string;
    images: number;
    technologies: string[];
    platforms: string[];
    links: {
        name: string;
        url: string;
    }[];
};

function getColor(project: Project): string | undefined {
    if (project.theme === "dark") {
        return "text-black";
    } else {
        return "text-white";
    }
}

export default function Projects(): ReactElement {
    const projects: Project[] = DataJSON.projects;

    return (
        <ul className="flex list-none flex-col">
            {projects.map(project => (
                <li key={project.name} style={{ backgroundColor: project.background }}>
                    <div
                        className={tw(
                            "mx-auto grid max-w-[70rem] grid-cols-[1fr_4fr] grid-rows-[auto__auto] gap-x-4 px-4 pt-4 sm:grid-rows-[auto] sm:gap-x-8 sm:px-8 sm:pb-4 sm:pt-8",
                            getColor(project)
                        )}
                    >
                        <div className="relative">
                            <img
                                src={`/images/projects/${project.slug}/icon.png`}
                                alt={`${project.name} icon`}
                                loading="lazy"
                                className="absolute w-full rounded-xs sm:rounded-xl"
                            />
                        </div>
                        <div className="mb-2 text-left">
                            <div>
                                <h2 className="highlight mb-2 mt--3 inline-flex text-3xl font-bold sm:mb-4 sm:text-6xl">
                                    {project.name}
                                </h2>
                                <div className="mx-0 mb-2 mt-1 text-sm font-bold sm:text-base">
                                    Released {project.date}
                                </div>
                            </div>
                            <div className="mb-4 text-sm sm:text-base">{project.description}</div>
                        </div>
                        <div className="col-span-2 text-sm sm:col-span-1 sm:col-start-2 sm:text-base">
                            <ProjectTechnologies project={project} />
                            <ProjectPlatforms project={project} />
                        </div>
                    </div>
                    <div className="px-4 sm:px-0">
                        <ProjectImages project={project} />
                        <ProjectLinks project={project} />
                    </div>
                </li>
            ))}
        </ul>
    );
}
