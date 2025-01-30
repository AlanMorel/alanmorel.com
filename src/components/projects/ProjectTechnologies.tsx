import getIcon from "@/src/components/Icons";
import Pill from "@/src/components/Pill";
import { Project } from "@/src/components/projects/Projects";
import { ReactElement } from "react";

interface Prop {
    project: Project;
}

export default function ProjectImages(props: Readonly<Prop>): ReactElement {
    const { project } = props;

    return (
        <div className="mb-4">
            <div className="mb-2 font-bold">Technologies</div>
            <ul>
                {project.technologies.map(tech => (
                    <li key={tech} className="inline-flex">
                        <Pill label={tech} Icon={getIcon(tech.toLowerCase())} />
                    </li>
                ))}
            </ul>
        </div>
    );
}
