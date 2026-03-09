import { ThemeState, useTheme } from "@/src/atoms/ThemeAtom.ts";
import cn from "@/src/components/other/TailwindHelper.ts";
import ProjectImages from "@/src/components/projects/ProjectImages.tsx";
import ProjectLinks from "@/src/components/projects/ProjectLinks.tsx";
import ProjectPlatforms from "@/src/components/projects/ProjectPlatforms.tsx";
import ProjectTechnologies from "@/src/components/projects/ProjectTechnologies.tsx";
import DataJSON from "@/src/data.json" with { type: "json" };
import type { ReactElement } from "react";

export type Project = {
    name: string;
    slug: string;
    background: string;
    darkBackground: string;
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

function getBackground(project: Project, theme: ThemeState): string {
    if (theme === "dark") {
        return project.darkBackground;
    } else {
        return project.background;
    }
}

function getTheme(project: Project, theme: ThemeState): string {
    if (theme === "light") {
        return project.theme === "light" ? "text-light" : "text-dark";
    } else {
        return "text-dark";
    }
}

export default function Projects(): ReactElement {
    const projects: Project[] = DataJSON.projects;

    const { theme } = useTheme();

    return (
        <ul className="flex list-none flex-col">
            {projects.map(project => (
                <li key={project.name} style={{ backgroundColor: getBackground(project, theme) }}>
                    <div
                        className={cn(
                            "mx-auto grid max-w-[70rem] grid-cols-[1fr_4fr] grid-rows-[auto__auto] gap-x-4 px-4 pt-4 sm:grid-rows-[auto] sm:gap-x-8 sm:px-8 sm:pt-8 sm:pb-4 ",
                            getTheme(project, theme)
                        )}
                    >
                        <div className="relative">
                            <img
                                alt={`${project.name} icon`}
                                className="absolute w-full rounded-xs sm:rounded-xl"
                                loading="lazy"
                                src={`/images/projects/${project.slug}/icon.png`}
                            />
                        </div>
                        <div className="mb-2 text-left">
                            <div>
                                <h2 className="highlight mt--3 mb-2 inline-flex text-3xl font-bold sm:mb-4 sm:text-6xl">
                                    {project.name}
                                </h2>
                                <div className="mx-0 mt-1 mb-2 text-sm font-bold sm:text-base">
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
