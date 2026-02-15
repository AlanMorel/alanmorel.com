import getIcon from "@/src/components/Icons.tsx";
import Pill from "@/src/components/Pill.tsx";
import type { Project } from "@/src/components/projects/Projects.tsx";
import type { ReactElement } from "react";

interface Prop {
    project: Project;
}

export default function ProjectPlatforms(props: Readonly<Prop>): ReactElement {
    const { project } = props;

    return (
        <div className="mb-4">
            <div className="mb-2 font-bold">Available on</div>
            <ul>
                {project.platforms.map(platform => (
                    <li className="inline-flex" key={platform}>
                        <Pill Icon={getIcon(platform.toLowerCase())} label={platform} theme={project.theme} />
                    </li>
                ))}
            </ul>
        </div>
    );
}
