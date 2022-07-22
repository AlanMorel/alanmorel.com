import Config from "@/shared/Config";

export const organization = {
    "@context": "http://schema.org",
    "@type": "Organization",
    name: Config.app.name,
    url: Config.app.origin,
    logo: {
        "@type": "ImageObject",
        url: Config.app.origin + "/images/meta-logo.png",
        width: 1024,
        height: 1024
    },
    brand: Config.app.name,
    sameAs: Object.values(Config.app.social)
};

export const website = {
    "@context": "http://schema.org",
    "@type": "WebSite",
    name: Config.app.name,
    url: Config.app.origin
};
