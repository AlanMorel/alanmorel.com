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
                    <div className={`mx-auto flex max-w-[70rem] px-4 pt-8 sm:pb-4 ${getColor(project)}`}>
                        <div className="translate--4 absolute w-[20%] flex-[20%] sm:relative sm:w-auto">
                            <img
                                src={`/images/projects/${project.slug}/icon.png`}
                                alt="name"
                                loading="lazy"
                                className="w-full rounded-2xl"
                            />
                        </div>
                        <div className="box-border flex-[80%] sm:pl-[5%]">
                            <div className="mb-2 pl-[30%] text-left sm:pl-0">
                                <div>
                                    <h2 className="highlight mt--3 mb-2 inline-flex text-3xl font-bold sm:mb-4 sm:text-6xl">
                                        {project.name}
                                    </h2>
                                    <div className="mx-0 mt-1 mb-2 font-bold">Released {project.date}</div>
                                </div>
                                <div className="mb-4">{project.description}</div>
                            </div>
                            <div>
                                <ProjectTechnologies project={project} />
                                <ProjectPlatforms project={project} />
                            </div>
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
