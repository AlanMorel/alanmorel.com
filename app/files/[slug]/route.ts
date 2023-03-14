import { promises as fs } from "fs";

export async function GET(request: Request): Promise<Response> {
    const url = new URL(request.url);
    const pathname = url.pathname.replace("/files", "");

    try {
        const file = await fs.readFile(`files/${pathname}`);
        return new Response(file);
    } catch (error) {
        return new Response("Not found", { status: 404 });
    }
}
