import getIcon from "@/src/components/Icons.tsx";
import Pill from "@/src/components/Pill.tsx";
import { Project } from "@/src/components/projects/Projects.tsx";
import { ReactElement } from "react";

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
                    <li key={platform} className="inline-flex">
                        <Pill label={platform} Icon={getIcon(platform.toLowerCase())} />
                    </li>
                ))}
            </ul>
        </div>
    );
}
