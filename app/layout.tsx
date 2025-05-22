import config from "@/src/Config.ts";
import "@/src/globals.css";
import Analytics from "@/src/helpers/client/Analytics.tsx";
import Providers from "@/src/helpers/client/Providers.tsx";
import { withMetadata } from "@/src/helpers/server/MetadataHelper.ts";
import { Inter } from "next/font/google";
import { ReactElement, ReactNode } from "react";

export { viewport } from "@/src/helpers/server/MetadataHelper.ts";

interface Props {
    children: ReactNode;
}

const inter = Inter({
    subsets: ["latin"],
    variable: "--font-inter"
});

export default async function RootLayout(props: Readonly<Props>): Promise<ReactElement> {
    const { children } = props;

    return (
        <html lang="en" className={inter.variable} suppressHydrationWarning>
            <body className="font-text m-0">
                <Providers>{children}</Providers>
                <Analytics />
            </body>
        </html>
    );
}

export const metadata = withMetadata({
    title: config.metaInfo.title,
    description: config.metaInfo.description,
    canonical: "/"
});
