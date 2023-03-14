import { Project } from "@/src/components/projects/Projects";

interface Prop {
    project: Project;
}

export default function ProjectImages(props: Prop): JSX.Element {
    const { project } = props;

    return (
        <ul className="mx-0 mb-2 flex flex-wrap justify-center sm:mt-4 sm:py-4">
            {Array.from(Array(project.images).keys()).map(image => (
                <li key={image}>
                    <img
                        src={`/images/projects/${project.slug}/image${image + 1}.png`}
                        alt={`${project.name} image`}
                        loading="lazy"
                        className="mt-0 mr-4 mb-5 ml-0 max-h-[30rem] max-w-full rounded shadow-xl"
                    />
                </li>
            ))}
        </ul>
    );
}