"use client";

import { themeAtom, ThemeState } from "@/src/atoms/ThemeAtom.ts";
import ThemeContext from "@/src/helpers/client/ThemeContext.tsx";
import { createStore, Provider as JotaiProvider } from "jotai";
import { ReactElement, ReactNode } from "react";

interface Props {
    children: ReactNode;
    initialTheme: ThemeState;
}

export default function ThemeProviders(props: Readonly<Props>): ReactElement {
    const { children, initialTheme } = props;

    const store = createStore();

    store.set(themeAtom, initialTheme);

    return (
        <JotaiProvider store={store}>
            <ThemeContext>{children}</ThemeContext>
        </JotaiProvider>
    );
}
