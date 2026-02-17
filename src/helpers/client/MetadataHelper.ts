import config from "@/src/Config.ts";
import type { DetailedHTMLProps, LinkHTMLAttributes, MetaHTMLAttributes, ScriptHTMLAttributes } from "react";

type Meta = DetailedHTMLProps<MetaHTMLAttributes<HTMLMetaElement>, HTMLMetaElement>;
type Link = DetailedHTMLProps<LinkHTMLAttributes<HTMLLinkElement>, HTMLLinkElement>;
type Script = DetailedHTMLProps<ScriptHTMLAttributes<HTMLScriptElement>, HTMLScriptElement>;

type MetaInfo = {
    title: string;
    description: string;
    canonical: string;
    image: {
        url: string;
        width: number;
        height: number;
        alt: string;
    };
};

type LinksInfo = {
    canonical: string;
    preconnect?: string[];
};

type ScriptsInfo = {
    title: string;
    description: string;
    image: {
        url: string;
        width: number;
        height: number;
    };
    canonical: string;
};

type HeadInfo = {
    title: string;
    description: string;
    canonical: string;
    image?: {
        url: string;
        width: number;
        height: number;
        alt: string;
    };
    preconnect?: string[];
};

function getLinks(info: LinksInfo): Link[] {
    const { canonical, preconnect } = info;
    const links: Link[] = [];
    const appleTouchSizes = [57, 72, 76, 114, 120, 144, 152, 180];
    const appleTouchIcons: Link[] = [];

    for (const size of appleTouchSizes) {
        appleTouchIcons.push({
            rel: "apple-touch-icon",
            href: `/images/favicons/apple-touch-icon-${size}x${size}.png`,
            sizes: `${size}x${size}`,
            type: "image/png"
        });
    }

    if (preconnect) {
        for (const url of preconnect) {
            links.push({
                rel: "preconnect",
                href: url
            });
        }
    }

    links.push(
        {
            rel: "canonical",
            href: config.app.url + canonical
        },
        {
            rel: "manifest",
            href: "/manifest.json"
        },
        {
            rel: "shortcut icon",
            href: "/images/favicons/favicon.ico"
        },
        {
            rel: "icon",
            href: "/images/favicons/favicon.ico"
        },
        ...appleTouchIcons,
        {
            rel: "apple-touch-icon",
            href: "/images/favicons/apple-touch-icon.png"
        }
    );

    return links;
}

function getMeta(info: MetaInfo): Meta[] {
    const { title, description, canonical, image } = info;
    const { url: imageUrl, width: imageWidth, height: imageHeight, alt: imageAlt } = image;

    return [
        {
            charSet: "utf-8"
        },
        {
            name: "viewport",
            content: "width=device-width, initial-scale=1, minimum-scale=1"
        },
        {
            title: title
        },
        {
            name: "description",
            content: description
        },
        {
            name: "application-name",
            content: config.app.name
        },
        {
            name: "theme-color",
            content: "#000000"
        },
        {
            name: "HandheldFriendly",
            content: "True"
        },
        {
            name: "mobile-web-app-capable",
            content: "yes"
        },
        {
            name: "apple-mobile-web-app-capable",
            content: "yes"
        },
        {
            name: "apple-mobile-web-app-status-bar-style",
            content: "default"
        },
        {
            name: "apple-mobile-web-app-title",
            content: config.app.name
        },
        {
            name: "og:title",
            content: title
        },
        {
            name: "og:description",
            content: description
        },
        {
            name: "og:url",
            content: config.app.url + canonical
        },
        {
            name: "og:site_name",
            content: config.app.name
        },
        {
            name: "og:locale",
            content: "en_US"
        },
        {
            name: "og:image",
            content: imageUrl
        },
        {
            name: "og:image:width",
            content: imageWidth.toString()
        },
        {
            name: "og:image:height",
            content: imageHeight.toString()
        },
        {
            name: "og:type",
            content: "website"
        },
        {
            name: "twitter:card",
            content: "summary_large_image"
        },
        {
            name: "twitter:title",
            content: title
        },
        {
            name: "twitter:description",
            content: description
        },
        {
            name: "twitter:image",
            content: imageUrl
        },
        {
            name: "twitter:image:alt",
            content: imageAlt
        }
    ];
}

function getScripts(info: ScriptsInfo): Script[] {
    const { title, description, image, canonical } = info;
    const { url: imageUrl, width: imageWidth, height: imageHeight } = image;

    const scripts = [
        {
            type: "application/ld+json",
            children: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "WebPage",
                mainEntityOfPage: {
                    "@type": "Webpage",
                    "@id": canonical
                },
                headline: title,
                description: description,
                image: imageUrl,
                publisher: {
                    "@type": "Organization",
                    name: config.app.name,
                    url: config.app.url,
                    logo: {
                        "@type": "ImageObject",
                        url: imageUrl,
                        width: imageWidth,
                        height: imageHeight
                    }
                }
            })
        }
    ];

    return scripts;
}

export function getHead(info: HeadInfo): { meta: Meta[]; links: Link[]; scripts: Script[] } {
    const { description, canonical, preconnect } = info;

    let { title } = info;

    title = `${title} | ${config.app.name}`;

    const image = info.image ?? {
        url: "/images/app/meta-image.png",
        width: 1280,
        height: 800,
        alt: `${config.app.name} Logo`
    };

    return {
        meta: getMeta({ title, description, canonical, image }),
        links: getLinks({ canonical, preconnect }),
        scripts: getScripts({ title, description, image, canonical })
    };
}
