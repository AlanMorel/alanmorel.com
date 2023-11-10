import "@/src/globals.css";
import Analytics from "@/src/helpers/client/Analytics";
import Providers from "@/src/helpers/client/Providers";
import { withMetadata } from "@/src/helpers/server/MetadataHelper";
import { Inter } from "next/font/google";
import { ReactElement, ReactNode } from "react";

export { viewport } from "@/src/helpers/server/MetadataHelper";

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
        <html lang="en" className={inter.variable} suppressHydrationWarning>
            <body className="m-0 bg-slate-50 font-text text-black">
                <Providers>{children}</Providers>
                <Analytics />
            </body>
        </html>
    );
}

export const metadata = withMetadata({
    title: "Alan Morel",
    description: "Alan Morel - Software Engineer, Photographer, Music Producer"
});
