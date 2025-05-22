"use client";

import useTheme from "@/src/atoms/ThemeAtom.ts";
import { ReactElement, ReactNode } from "react";

interface Props {
    children: ReactNode;
}

export default function Providers(props: Readonly<Props>): ReactElement {
    const { children } = props;

    const { theme } = useTheme();

    return (
        <div data-theme={theme}>
            <div className="text-dark min-h-screen bg-slate-50">{children}</div>
        </div>
    );
}
