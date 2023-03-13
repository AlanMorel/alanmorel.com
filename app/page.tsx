import Contacts from "@/src/components/Contacts";
import Intro from "@/src/components/Intro";
import Projects from "@/src/components/projects/Projects";
import StructuredData from "@/src/components/StructuredData";

export default async function HomePage(): Promise<JSX.Element> {
    return (
        <main className="bg-slate-50 tracking-[0.025rem]">
            <Intro />
            <Contacts />
            <Projects />
            <StructuredData data={organization} />
            <StructuredData data={website} />
        </main>
    );
}

const organization = {
    "@context": "http://schema.org",
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
    "@context": "http://schema.org",
    "@type": "WebSite",
    name: "AlanMorel",
    url: "https://alanmorel.com"
};
