import getIcon from "@/src/components/Icons";
import Pill from "@/src/components/Pill";
import { Project } from "@/src/components/projects/Projects";

interface Prop {
    project: Project;
}

export default function ProjectImages(props: Prop): JSX.Element {
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
