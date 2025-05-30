import Config from "@/src/Config.ts";
import { default as ServerConfig } from "@/src/helpers/Config.ts";
import logger from "@/src/helpers/server/Logger.ts";
import { compareStrings, getRandomFilename } from "@/src/helpers/server/StringHelper.ts";
import { promises as fs } from "node:fs";

const filenameLength = 8;

export async function POST(request: Request): Promise<Response> {
    const formData = await request.formData();

    const secret = formData.get("secret") as string;

    if (!secret) {
        return new Response("Secret is missing", {
            status: 400
        });
    }

    const file = formData.get("sharex") as File;

    if (!file) {
        return new Response("File is missing", {
            status: 400
        });
    }

    if (!compareStrings(secret, ServerConfig.sharex.secret)) {
        return new Response("Secret is incorrect", {
            status: 400
        });
    }

    const filename = getRandomFilename(filenameLength);
    const extension = file.name.split(".").pop();

    const path = `files/${filename}.${extension}`;

    const buffer = await file.arrayBuffer();
    const data = Buffer.from(buffer);

    await fs.writeFile(path, data);

    logger.log(`Uploaded ${file.name} as ${filename}.${extension} from ShareX successfully`);

    const result = {
        link: `${Config.app.url}/${path}`
    };

    return new Response(JSON.stringify(result), {
        status: 200
    });
}
