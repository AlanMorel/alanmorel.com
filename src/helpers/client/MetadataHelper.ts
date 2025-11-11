// src/routes/__root.tsx
/// <reference types="vite/client" />
// other imports...

import Config from "@/src/Config.ts";
import appCss from "@/src/styles.css?url";
import { DetailedHTMLProps, LinkHTMLAttributes, MetaHTMLAttributes } from "react";

type Meta = DetailedHTMLProps<MetaHTMLAttributes<HTMLMetaElement>, HTMLMetaElement>;
type Link = DetailedHTMLProps<LinkHTMLAttributes<HTMLLinkElement>, HTMLLinkElement>;

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

export type LinksInfo = {
    canonical: string;
};

export function getLinks(info: LinksInfo): Link[] {
    const { canonical } = info;

    const appleTouchSizes = [57, 60, 72, 76, 114, 120, 144, 152];
    const appleTouchIcons: Link[] = [];

    for (const size of appleTouchSizes) {
        appleTouchIcons.push({
            rel: "apple-touch-icon",
            href: `/favicons/apple-touch-icon-${size}x${size}.png`,
            sizes: `${size}x${size}`,
            type: "image/png"
        });
    }

    return [
        { rel: "stylesheet", href: appCss },
        {
            rel: "canonical",
            href: canonical
        },
        {
            rel: "shortcut icon",
            href: "/favicons/favicon.ico"
        },
        {
            rel: "icon",
            href: "/favicons/favicon.ico"
        },
        ...appleTouchIcons,
        {
            rel: "apple-touch-icon-precomposed",
            href: "/favicons/apple-touch-icon-152x152.png"
        }
    ];
}

export function getMeta(info: MetaInfo): Meta[] {
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
            content: Config.app.name
        },
        {
            name: "robots",
            content: "noindex"
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
            content: canonical
        },
        {
            name: "og:site_name",
            content: Config.app.name
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
            name: "twitter:creator",
            content: `@${Config.app.socials.twitter}`
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
