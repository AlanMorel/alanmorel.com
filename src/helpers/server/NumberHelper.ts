export function getYearMonthDate(): [string, string, string] {
    const date = new Date();
    const year = date.getFullYear().toString();
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const day = date.getDate().toString().padStart(2, "0");

    return [year, month, day];
}

export function getDateStamp(): string {
    const [year, month, day] = getYearMonthDate();

    return `${year}-${month}-${day}`;
}
