export function getReadableDate(date: Date): string {
    const options = { weekday: "long", month: "long", day: "numeric", year: "numeric" } as const;
    const formatter = new Intl.DateTimeFormat("en-US", options);

    return formatter.format(date);
}

export function addDays(date: Date, days: number): Date {
    return new Date(date.getTime() + 86400000 * days);
}

export function isDateEarlier(dateA: Date, dateB: Date): boolean {
    const yearA = dateA.getFullYear();
    const yearB = dateB.getFullYear();

    if (yearA < yearB) {
        return true;
    }

    const monthA = dateA.getMonth();
    const monthB = dateB.getMonth();

    if (yearA === yearB && monthA < monthB) {
        return true;
    }

    const dayA = dateA.getDate();
    const dayB = dateB.getDate();

    return yearA === yearB && monthA === monthB && dayA < dayB;
}
