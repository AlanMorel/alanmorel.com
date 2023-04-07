import "@/src/globals.css";
import Analytics from "@/src/helpers/client/Analytics";
import { withMetadata } from "@/src/helpers/server/MetadataHelper";
import "@fontsource/inter/variable.css";
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

export const metadata = withMetadata({
    title: "Alan Morel",
    description: "Alan Morel - Software Engineer, Photographer, Music Producer"
});
