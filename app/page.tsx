import Contacts from "@/src/components/Contacts.tsx";
import Intro from "@/src/components/Intro.tsx";
import Projects from "@/src/components/projects/Projects.tsx";
import StructuredData from "@/src/components/StructuredData.tsx";
import config from "@/src/Config.ts";
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
    name: config.app.name,
    url: config.app.url,
    logo: {
        "@type": "ImageObject",
        url: `${config.app.url}/images/meta-logo.png`,
        width: 1024,
        height: 1024
    },
    brand: config.app.name,
    sameAs: [`https://twitter.com/${config.app.socials.twitter}`]
};

const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: config.app.name,
    url: config.app.url
};
