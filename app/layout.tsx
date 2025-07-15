import { ThemeState } from "@/src/atoms/ThemeAtom.ts";
import config from "@/src/Config.ts";
import Providers from "@/src/helpers/client/Providers.tsx";
import { withMetadata } from "@/src/helpers/server/MetadataHelper.ts";
import "@/src/styles.css";
import { Inter } from "next/font/google";
import { cookies } from "next/headers";
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

    const cookieStore = await cookies();
    const theme = (cookieStore.get("theme")?.value ?? "light") as ThemeState;

    return (
        <html lang="en" className={inter.variable} suppressHydrationWarning>
            <body className="font-text m-0">
                <Providers initialTheme={theme}>{children}</Providers>
            </body>
        </html>
    );
}

export const metadata = withMetadata({
    title: config.metaInfo.title,
    description: config.metaInfo.description,
    canonical: "/"
});
