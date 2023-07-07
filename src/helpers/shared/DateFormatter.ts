export function getNowDate(date: number, offset: number = 5): Date {
    const timeOffset = offset * 60 * 60 * 1000;

    return new Date(date - timeOffset);
}

export function formatDatestamp(date: string | Date): string {
    const options: Intl.DateTimeFormatOptions = {
        month: "short",
        day: "2-digit",
        year: "numeric"
    };
    return new Date(date).toLocaleDateString("en-US", options);
}

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

export function getYYYYMMDD(date: Date): string {
    const year = date.getFullYear().toString();
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const day = date.getDate().toString().padStart(2, "0");

    return `${year}-${month}-${day}`;
}

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
