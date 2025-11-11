import { atom, useAtom } from "jotai";
import Cookies from "js-cookie";

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
        Cookies.set("theme", value, {
            expires: 365
        });
    }

    return {
        theme,
        setTheme: setThemeWithCookie
    };
}

export { themeAtom };
