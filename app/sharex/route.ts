import Config from "@/src/Config";
import { default as ServerConfig } from "@/src/helpers/Config";
import { Logger } from "@/src/helpers/server/Logger";
import { compareStrings, getRandomFilename } from "@/src/helpers/server/StringHelper";
import { promises as fs } from "fs";

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

    const path = `public/files/${filename}.${extension}`;

    const buffer = await file.arrayBuffer();
    const data = Buffer.from(buffer);

    await fs.writeFile(path, data);

    Logger.log(`Uploaded ${file.name} as ${filename}.${extension} from ShareX successfully`);

    const result = {
        link: `${Config.app.url}/${path}`
    };

    return new Response(JSON.stringify(result), {
        status: 200
    });
}
