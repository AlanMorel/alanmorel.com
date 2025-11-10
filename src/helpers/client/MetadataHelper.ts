// src/routes/__root.tsx
/// <reference types="vite/client" />
// other imports...

import Config from "@/src/Config.ts";
import appCss from "@/src/styles.css?url";
import { redirect } from "@tanstack/react-router";
import { DetailedHTMLProps, LinkHTMLAttributes, MetaHTMLAttributes } from "react";

type TanStackMeta = DetailedHTMLProps<MetaHTMLAttributes<HTMLMetaElement>, HTMLMetaElement>;
type TanStackLink = DetailedHTMLProps<LinkHTMLAttributes<HTMLLinkElement>, HTMLLinkElement>;

type TanStackMetaInfo = {
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

export type TanStackLinksInfo = {
    canonical: string;
};

export function getTanStackLinks(info: TanStackLinksInfo): TanStackLink[] {
    const { canonical } = info;

    const appleTouchSizes = [57, 60, 72, 76, 114, 120, 144, 152];
    const appleTouchIcons: TanStackLink[] = [];

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

export function getTanStackMeta(info: TanStackMetaInfo): TanStackMeta[] {
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

type Metadata = {
    metadataBase: URL;
    alternates: {
        canonical: string;
    };
    title: string;
    description: string;
    applicationName: string;
    openGraph: {
        title: string;
        description: string;
        url: string;
        siteName: string;
        images: {
            url: string;
            width: number;
            height: number;
        }[];
        locale: string;
        type: string;
    };
    twitter: {
        card: string;
        title: string;
        description: string;
        creator: string;
        images: {
            url: string;
            alt: string;
        };
    };
    icons: {
        icon: string;
        shortcut: string;
        apple: {
            url: string;
            sizes: string;
            type: string;
        }[];
        other: {
            rel: string;
            url: string;
        };
    };
    robots: {
        index: boolean;
    };
};

type Viewport = {
    colorScheme: "light" | "dark";
    width: "device-width";
    initialScale: number;
    minimumScale: number;
};

export const viewport: Viewport = {
    colorScheme: "light",
    width: "device-width",
    initialScale: 1,
    minimumScale: 1
};

type MetadataGenerator = (props: MetadataProps) => Promise<BaseMetadata>;
type MetadataHandler = (props: MetadataProps) => Promise<Metadata>;

export type BaseMetadata = {
    title: string;
    description: string;
    canonical: string;
    image?: string;
};

export type MetadataProps = {
    params: any;
    searchParams: any;
};

export function withDynamicMetadata(handler: MetadataGenerator): MetadataHandler {
    return async function generateMetadata(props: MetadataProps): Promise<Metadata> {
        try {
            const baseMetadata = await handler(props);

            return buildMetadata(baseMetadata);
        } catch (error) {
            console.error(error);
            throw redirect({ to: "/" });
        }
    };
}

export function withMetadata(baseMetadata: BaseMetadata): Metadata {
    return buildMetadata(baseMetadata);
}

const favicon = "/favicons/favicon.ico";
const image = "/images/meta-image.png";

const buildMetadata = (base: BaseMetadata): Metadata => {
    return {
        metadataBase: new URL(`https://${Config.app.domain}`),
        alternates: {
            canonical: `https://${Config.app.domain}${base.canonical}`
        },
        title: base.title,
        description: base.description,
        applicationName: Config.app.name,
        openGraph: {
            title: base.title,
            description: base.description,
            url: `https://${Config.app.domain}`,
            siteName: Config.app.name,
            images: [
                {
                    url: base.image ?? image,
                    width: 1280,
                    height: 800
                }
            ],
            locale: "en-US",
            type: "website"
        },
        twitter: {
            card: "summary_large_image",
            title: base.title,
            description: base.description,
            creator: `@${Config.app.socials.twitter}`,
            images: {
                url: base.image ?? image,
                alt: `${Config.app.name} Logo`
            }
        },
        icons: {
            icon: favicon,
            shortcut: favicon,
            apple: [
                {
                    url: "/favicons/apple-touch-icon-57x57.png",
                    sizes: "57x57",
                    type: "image/png"
                },
                {
                    url: "/favicons/apple-touch-icon-60x60.png",
                    sizes: "60x60",
                    type: "image/png"
                },
                {
                    url: "/favicons/apple-touch-icon-72x72.png",
                    sizes: "72x72",
                    type: "image/png"
                },
                {
                    url: "/favicons/apple-touch-icon-76x76.png",
                    sizes: "76x76",
                    type: "image/png"
                },
                {
                    url: "/favicons/apple-touch-icon-114x114.png",
                    sizes: "114x114",
                    type: "image/png"
                },
                {
                    url: "/favicons/apple-touch-icon-120x120.png",
                    sizes: "120x120",
                    type: "image/png"
                },
                {
                    url: "/favicons/apple-touch-icon-144x144.png",
                    sizes: "144x144",
                    type: "image/png"
                },
                {
                    url: "/favicons/apple-touch-icon-152x152.png",
                    sizes: "152x152",
                    type: "image/png"
                }
            ],
            other: {
                rel: "apple-touch-icon-precomposed",
                url: "/favicons/apple-touch-icon-152x152.png"
            }
        },
        robots: {
            index: false
        }
    };
};
