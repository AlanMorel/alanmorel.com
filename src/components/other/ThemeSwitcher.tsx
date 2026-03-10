import { useTheme } from "@/src/atoms/ThemeAtom.ts";
import { MoonIcon, SunIcon } from "lucide-react";
import type { ReactElement } from "react";

export default function ThemeSwitcher(): ReactElement {
    const { theme, setTheme } = useTheme();

    function getIcon(): ReactElement {
        if (theme === "light") {
            return <SunIcon className="size-10" onClick={(): void => setTheme("dark")} />;
        } else if (theme === "dark") {
            return <MoonIcon className="size-10" onClick={(): void => setTheme("light")} />;
        }

        return <></>;
    }

    return (
        <div className="fixed right-6 bottom-6 flex size-12 items-center justify-center rounded-full bg-white/10 shadow-md backdrop-blur-3xl transition hover:bg-white/25">
            <div className="cursor-pointer text-white transition">{getIcon()}</div>
        </div>
    );
}
