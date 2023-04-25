export function getReadableDate(date: Date): string {
    const options = { weekday: "long", month: "long", day: "numeric", year: "numeric" } as const;
    const formatter = new Intl.DateTimeFormat("en-US", options);

    return formatter.format(date);
}

export function addDays(date: Date, days: number): Date {
    return new Date(date.getTime() + 86400000 * days);
}
