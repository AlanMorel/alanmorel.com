import { Ref, ref } from "vue";

interface State {
    theme: Ref;
    setTheme: (newState: string) => void;
}

const theme = ref("dark");

export function useTheme(): State {
    const setTheme = (newState: string): void => {
        theme.value = newState;
    };

    return { theme: theme, setTheme };
}
