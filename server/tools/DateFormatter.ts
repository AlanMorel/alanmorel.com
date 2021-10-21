export function formatTimestamp(date: string | Date): string {
    const options: Intl.DateTimeFormatOptions = {
        month: "short",
        day: "2-digit",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit"
    };
    return new Date(date).toLocaleDateString("en-US", options);
}
