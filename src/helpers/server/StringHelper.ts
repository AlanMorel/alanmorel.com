export function compareStrings(a: string, b: string): boolean {
    if (a.length != b.length) {
        return false;
    }
    let x = 0;
    for (let i = 0; i < a.length; i++) {
        x |= parseInt(a.charAt(i)) ^ parseInt(b.charAt(i));
    }
    return x == 0;
}

export function getRandomFilename(length: number): string {
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let result = "";
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
}
