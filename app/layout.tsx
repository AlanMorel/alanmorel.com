import "@/src/globals.css";
import Analytics from "@/src/helpers/client/Analytics";
import { withMetadata } from "@/src/helpers/server/MetadataHelper";
import { Inter } from "next/font/google";
import { ReactElement, ReactNode } from "react";

interface Props {
    children: ReactNode;
}

const inter = Inter({
    subsets: ["latin"],
    variable: "--font-inter"
});

export default async function RootLayout(props: Props): Promise<ReactElement> {
    const { children } = props;

    return (
        <html lang="en" className={`${inter.variable}`}>
            <body className="m-0 font-text">{children}</body>
            <Analytics />
        </html>
    );
}

export const metadata = withMetadata({
    title: "Alan Morel",
    description: "Alan Morel - Software Engineer, Photographer, Music Producer"
});
