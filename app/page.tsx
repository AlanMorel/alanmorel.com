import Contacts from "@/src/components/Contacts.tsx";
import Intro from "@/src/components/Intro.tsx";
import Projects from "@/src/components/projects/Projects.tsx";
import StructuredData from "@/src/components/StructuredData.tsx";
import { ReactElement } from "react";

export default async function HomePage(): Promise<ReactElement> {
    return (
        <main className="tracking-[0.025rem]">
            <Intro />
            <Contacts />
            <Projects />
            <StructuredData data={organization} />
            <StructuredData data={website} />
        </main>
    );
}

const organization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "AlanMorel",
    url: "https://alanmorel.com",
    logo: {
        "@type": "ImageObject",
        url: "https://alanmorel.com/images/meta-logo.png",
        width: 1024,
        height: 1024
    },
    brand: "AlanMorel",
    sameAs: ["https://twitter.com/AlanMorelX"]
};

const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "AlanMorel",
    url: "https://alanmorel.com"
};
