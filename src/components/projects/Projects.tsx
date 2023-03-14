import ProjectImages from "@/src/components/projects/ProjectImages";
import ProjectLinks from "@/src/components/projects/ProjectLinks";
import ProjectPlatforms from "@/src/components/projects/ProjectPlatforms";
import ProjectTechnologies from "@/src/components/projects/ProjectTechnologies";
import DataJSON from "@/src/data.json" assert { type: "json" };

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

const getColor = (project: Project): string | undefined => {
    if (project.theme === "dark") {
        return "text-black";
    } else {
        return "text-white";
    }
};

export default function Projects(): JSX.Element {
    const projects: Project[] = DataJSON.projects;

    return (
        <ul className="flex list-none flex-col">
            {projects.map(project => (
                <li key={project.name} style={{ backgroundColor: project.background }}>
                    <div
                        className={`mx-auto grid max-w-[70rem] grid-cols-[20%_80%] grid-rows-[auto,_auto] gap-x-4 px-4 pt-8 sm:grid-rows-[auto] sm:gap-x-8 sm:px-8 sm:pb-4 ${getColor(
                            project
                        )}`}
                    >
                        <div className="relative">
                            <img
                                src={`/images/projects/${project.slug}/icon.png`}
                                alt={`${project.name} icon`}
                                loading="lazy"
                                className="absolute w-full rounded-sm sm:rounded-xl"
                            />
                        </div>
                        <div className="mb-2 text-left">
                            <div>
                                <h2 className="highlight mt--3 mb-2 inline-flex text-3xl font-bold sm:mb-4 sm:text-6xl">
                                    {project.name}
                                </h2>
                                <div className="mx-0 mt-1 mb-2 font-bold">Released {project.date}</div>
                            </div>
                            <div className="mb-4">{project.description}</div>
                        </div>
                        <div className="col-span-2 sm:col-span-1 sm:col-start-2">
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
