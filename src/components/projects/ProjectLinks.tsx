import getIcon from "@/src/components/Icons";
import Pill from "@/src/components/Pill";
import { Project } from "@/src/components/projects/Projects";

interface Prop {
    project: Project;
}

const getIconName = (linkName: string): string => {
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
};

export default function ProjectLinks(props: Prop): JSX.Element {
    const { project } = props;

    return (
        <ul className="mx-0 mt-4 mb-2 flex flex-wrap justify-center py-4">
            {project.links.map(link => (
                <li key={link.url} className="inline-flex">
                    <a href={link.url} target="_blank" rel="noopener noreferrer" className="text-white">
                        <Pill
                            label={link.name}
                            Icon={getIcon(getIconName(link.name.toLowerCase()))}
                            className="hover:bg-black/20"
                        />
                    </a>
                </li>
            ))}
        </ul>
    );
}