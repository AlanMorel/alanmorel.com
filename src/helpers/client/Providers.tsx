"use client";

import { ThemeState } from "@/src/atoms/ThemeAtom.ts";
import ThemeProviders from "@/src/helpers/client/ThemeProviders.tsx";
import { ReactElement, ReactNode } from "react";

interface Props {
    children: ReactNode;
    initialTheme: ThemeState;
}

export default function Providers(props: Readonly<Props>): ReactElement {
    const { children, initialTheme } = props;

    return (
        <ThemeProviders initialTheme={initialTheme}>
            <div className="text-dark min-h-screen bg-slate-50">{children}</div>
        </ThemeProviders>
    );
}
