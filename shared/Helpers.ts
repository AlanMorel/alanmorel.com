export const formatNumber = (number: number): string => {
    const formatter = Intl.NumberFormat("en", { notation: "compact" });
    return formatter.format(number);
};

export const formatDate = (date: Date): string => {
    const formatter = Intl.DateTimeFormat(undefined, {
        month: "short",
        day: "2-digit"
    });

    const UTCdatestring = new Date(date).toLocaleString("en-US", { timeZone: "UTC" });

    const UTCDate = new Date(UTCdatestring);

    return formatter.format(UTCDate);
};

export const getMonthName = (date: Date): string => {
    const formatter = Intl.DateTimeFormat(undefined, {
        month: "short"
    });

    const UTCdatestring = new Date(date).toLocaleString("en-US", { timeZone: "UTC" });

    const UTCDate = new Date(UTCdatestring);

    return formatter.format(UTCDate);
};

export const getDayNumber = (date: Date): number => {
    const UTCdatestring = new Date(date).toLocaleString("en-US", { timeZone: "UTC" });

    const UTCDate = new Date(UTCdatestring);

    return UTCDate.getDate();
};

export const formatFullDate = (date: Date): string => {
    const formatter = Intl.DateTimeFormat(undefined, {
        month: "short",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
        hour12: false
    });

    const UTCdatestring = new Date(date).toLocaleString("en-US", { timeZone: "UTC" });

    const UTCDate = new Date(UTCdatestring);

    return formatter.format(UTCDate);
};

export const extractHandle = (value: string): string => {
    if (!value || !value.length) {
        return "";
    }

    if (value.indexOf(".com/") > 0) {
        value = value.split(".com/")[1];
    }

    value = value.replaceAll("/", "");

    return value;
};
