export function setCookie(name: string, value: string, days?: number): void {
    let expires = "";

    if (days) {
        const date = new Date();
        date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
        expires = `; expires=${date.toUTCString()}`;
    }

    document.cookie = `${name}=${value || ""}${expires}; path=/`;
}

export function readCookie(name: string): string | null {
    const cookies = document.cookie.split(";");

    for (const element of cookies) {
        const cookie = element.trim();

        if (cookie.startsWith(`${name}=`)) {
            return cookie.substring(name.length + 1);
        }
    }

    return null;
}
