export function getColor(theme: string): string | undefined {
    if (theme === "dark") {
        return "text-dark";
    } else {
        return "text-light";
    }
}
