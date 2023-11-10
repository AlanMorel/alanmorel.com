"use client";

import { Laptop2Icon, MoonIcon, SunIcon } from "lucide-react";
import { useTheme } from "next-themes";
import { ReactElement, useEffect, useState } from "react";

export default function ThemeSwitcher(): ReactElement {
    const [mounted, setMounted] = useState(false);
    const { theme, setTheme } = useTheme();

    useEffect(() => {
        setMounted(true);
    }, []);

    function getIcon(): ReactElement {
        if (!mounted || theme === "light") {
            return <SunIcon className="h-10 w-10" onClick={(): void => setTheme("dark")} />;
        } else if (theme === "system") {
            return <Laptop2Icon className="h-10 w-10" onClick={(): void => setTheme("light")} />;
        } else if (theme === "dark") {
            return <MoonIcon className="h-10 w-10" onClick={(): void => setTheme("system")} />;
        }

        return <></>;
    }

    return <div className="cursor-pointer text-slate-400 transition hover:text-slate-600">{getIcon()}</div>;
}
