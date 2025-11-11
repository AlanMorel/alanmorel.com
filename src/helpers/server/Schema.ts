import Config from "@/src/Config.ts";

export const organization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: Config.app.name,
    url: Config.app.url,
    logo: {
        "@type": "ImageObject",
        url: `${Config.app.url}/images/meta-image.png`,
        width: 1024,
        height: 1024
    },
    brand: Config.app.name,
    sameAs: Object.values(Config.app.socials)
};

export const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: Config.app.name,
    url: Config.app.url
};
