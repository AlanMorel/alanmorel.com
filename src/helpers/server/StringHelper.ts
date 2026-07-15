import { randomBytes, timingSafeEqual } from "node:crypto";

export function compareStrings(a: string, b: string): boolean {
    const bufferA = Buffer.from(a);
    const bufferB = Buffer.from(b);

    if (bufferA.length !== bufferB.length) {
        return false;
    }

    return timingSafeEqual(bufferA, bufferB);
}

export function getRandomFilename(length: number): string {
    return randomBytes(length).toString("hex").slice(0, length);
}
