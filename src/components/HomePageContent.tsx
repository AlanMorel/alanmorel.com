import getIcon from "@/src/components/Icons.tsx";
import Intro from "@/src/components/Intro.tsx";
import OpenSourceAside from "@/src/components/OpenSourceAside.tsx";
import type { PillItem } from "@/src/components/PillCarousel.tsx";
import PillCarousel from "@/src/components/PillCarousel.tsx";
import StructuredData from "@/src/components/StructuredData.tsx";
import data from "@/src/data.json" with { type: "json" };
import { organization, website } from "@/src/helpers/server/Schema.ts";
import type { ReactElement, ReactNode } from "react";

interface Props {
    renderContacts?: () => ReactNode;
    renderProjects?: () => ReactNode;
}

export default function HomePageContent(props: Readonly<Props>): ReactElement {
    const technologyHighlight: PillItem[] = data.technologies.map(tech => ({
        icon: getIcon(tech.toLowerCase()),
        label: tech
    }));

    return (
        <main className="tracking-[0.025rem]">
            <Intro />
            {props.renderContacts?.()}
            <section className="py-8">
                <div className="flex flex-col gap-2">
                    <PillCarousel pills={technologyHighlight} />
                    <PillCarousel pills={technologyHighlight} reverse />
                </div>
            </section>
            <OpenSourceAside />
            {props.renderProjects?.()}
            <StructuredData data={organization} />
            <StructuredData data={website} />
        </main>
    );
}
