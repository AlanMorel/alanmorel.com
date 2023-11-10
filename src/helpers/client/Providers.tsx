"use client";

import { ThemeProvider } from "next-themes";
import { ReactElement, ReactNode } from "react";

interface Props {
    children: ReactNode;
}

export default function Providers(props: Props): ReactElement {
    const { children } = props;

    return (
        <ThemeProvider enableColorScheme={false} defaultTheme="light">
            {children}
        </ThemeProvider>
    );
}
