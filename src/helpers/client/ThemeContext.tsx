"use client";

import { themeAtom } from "@/src/atoms/ThemeAtom.ts";
import { useAtomValue } from "jotai";
import type { ReactElement, ReactNode } from "react";

interface Props {
    children: ReactNode;
}

export default function ThemeContext(props: Readonly<Props>): ReactElement {
    const { children } = props;

    const theme = useAtomValue(themeAtom);

    return <div data-theme={theme}>{children}</div>;
}
