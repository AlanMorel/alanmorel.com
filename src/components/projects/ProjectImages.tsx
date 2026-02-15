import type { Project } from "@/src/components/projects/Projects.tsx";
import type { ReactElement } from "react";

interface Prop {
    project: Project;
}

export default function ProjectImages(props: Readonly<Prop>): ReactElement {
    const { project } = props;

    return (
        <ul className="mx-0 flex flex-wrap justify-center sm:mt-4 sm:py-2">
            {Array.from(new Array(project.images).keys()).map(image => (
                <li key={image}>
                    <img
                        alt={project.name}
                        className="mt-0 mr-4 mb-5 ml-0 max-h-[30rem] max-w-full rounded-lg shadow-xl"
                        loading="lazy"
                        src={`/images/projects/${project.slug}/image${image + 1}.png`}
                    />
                </li>
            ))}
        </ul>
    );
}
