import getIcon from "@/src/components/Icons.tsx";
import Pill from "@/src/components/Pill.tsx";
import { Project } from "@/src/components/projects/Projects.tsx";
import { ReactElement } from "react";

interface Prop {
    project: Project;
}

function getIconName(linkName: string): string {
    if (linkName.includes("windows")) {
        return "windows";
    } else if (linkName.includes("github")) {
        return "github";
    } else if (linkName.includes("google play store")) {
        return "google play";
    } else if (linkName.includes("chrome web store")) {
        return "chrome";
    } else if (linkName.includes("visual boy advance")) {
        return "game boy advance";
    }

    return "web";
}

export default function ProjectLinks(props: Readonly<Prop>): ReactElement {
    const { project } = props;

    return (
        <ul className="mx-0 my-2 flex flex-wrap justify-center pb-3 text-sm sm:text-base">
            {project.links.map(link => (
                <li key={link.url} className="inline-flex">
                    <a href={link.url} target="_blank" rel="noopener noreferrer" className="text-white">
                        <Pill
                            label={link.name}
                            theme={project.theme}
                            Icon={getIcon(getIconName(link.name.toLowerCase()))}
                            className="hover:bg-black/20"
                        />
                    </a>
                </li>
            ))}
        </ul>
    );
}
