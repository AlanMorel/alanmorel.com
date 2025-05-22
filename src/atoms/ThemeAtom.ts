import { atom, useAtom } from "jotai";

type ThemeState = "dark" | "light";

interface IThemeState {
    theme: ThemeState;
    setTheme: (theme: ThemeState) => void;
}

const themeAtom = atom<ThemeState>("light");

function useTheme(): IThemeState {
    const [theme, setTheme] = useAtom(themeAtom);

    return {
        theme,
        setTheme
    };
}

export default useTheme;
