"use client";

import useTheme from "@/src/atoms/ThemeAtom.ts";
import { MoonIcon, SunIcon } from "lucide-react";
import { ReactElement, useEffect, useState } from "react";

export default function ThemeSwitcher(): ReactElement {
    const [mounted, setMounted] = useState(false);

    const { theme, setTheme } = useTheme();

    useEffect(() => {
        setMounted(true);
    }, []);

    function getIcon(): ReactElement {
        if (!mounted || theme === "light") {
            return <SunIcon className="size-10" onClick={(): void => setTheme("dark")} />;
        } else if (theme === "dark") {
            return <MoonIcon className="size-10" onClick={(): void => setTheme("light")} />;
        }

        return <></>;
    }

    return <div className="cursor-pointer text-slate-400 transition hover:text-slate-600">{getIcon()}</div>;
}
