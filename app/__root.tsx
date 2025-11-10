import Providers from "@/src/helpers/client/Providers.tsx";
import { getTheme } from "@/src/helpers/server/ServerFunctions.ts";
import { createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";
import { ReactElement, ReactNode } from "react";

export const Route = createRootRoute({
    loader: async () => {
        const theme = await getTheme();

        return { theme };
    },
    shellComponent: RootComponent
});

function RootComponent({ children }: Readonly<{ children: ReactNode }>): ReactElement {
    const { theme } = Route.useLoaderData();

    return (
        <html lang="en" className="font-inter" suppressHydrationWarning>
            <head>
                <HeadContent />
            </head>
            <body className="font-text m-0">
                <Providers initialTheme={theme}>{children}</Providers>
                <Scripts />
            </body>
        </html>
    );
}
