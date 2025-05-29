import { setCookie } from "@/src/helpers/shared/CookieHelper.ts";
import { atom, useAtom } from "jotai";

export type ThemeState = "dark" | "light";

interface IThemeState {
    theme: ThemeState;
    setTheme: (theme: ThemeState) => void;
}

const themeAtom = atom<ThemeState>("light");

export function useTheme(): IThemeState {
    const [theme, setTheme] = useAtom(themeAtom);

    function setThemeWithCookie(value: ThemeState): void {
        setTheme(value);
        setCookie("theme", value, 365);
    }

    return {
        theme,
        setTheme: setThemeWithCookie
    };
}

export { themeAtom };
