import Config from "@/src/Config";
import "@/src/globals.css";
import Analytics from "@/src/helpers/client/Analytics";
import { ReactNode } from "react";

interface Props {
    children: ReactNode;
}

export default async function RootLayout(props: Props): Promise<JSX.Element> {
    const { children } = props;

    return (
        <html lang="en">
            <body className="m-0 font-sans">{children}</body>
            <Analytics />
        </html>
    );
}

const title = "Alan Morel";
const description = "Alan Morel - Software Engineer, Photographer, Music Producer";
const image = "/images/meta-image.png";
const favicon = "/favicons/favicon.ico";
const handle = "@AlanMorelX";

export const metadata = {
    title: {
        default: title,
        template: `%s | ${Config.app.name}`
    },
    description: description,
    applicationName: Config.app.name,
    colorScheme: "light",
    openGraph: {
        title: Config.app.name,
        description: description,
        url: `https://${Config.app.domain}`,
        siteName: Config.app.name,
        images: [
            {
                url: image,
                width: 1280,
                height: 800
            }
        ],
        locale: "en-US",
        type: "website"
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
    twitter: {
        card: "summary_large_image",
        title: title,
        description: description,
        creator: handle,
        images: {
            url: image,
            alt: `${Config.app.name} Logo`
        }
    },
    viewport: {
        width: "device-width",
        initialScale: 1,
        minimumScale: 1
    }
};
