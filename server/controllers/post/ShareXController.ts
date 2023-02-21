import Config from "@/server/Config";
import Context from "@/server/helpers/Context";
import { sendFailure, sendSuccess } from "@/server/helpers/ResultHelper";
import { compareStrings, getRandomFilename } from "@/server/helpers/StringHelper";
import { Logger } from "@/server/tools/Logger";
import { Request, Response } from "express";
import { UploadedFile } from "express-fileupload";

const filenameLength = 8;

export default async function (req: Request, res: Response): Promise<void> {
    const context = Context(req);

    if (!req.body.secret || !req.files) {
        sendFailure(res, "Error uploading");
        return;
    }

    const secret = req.body.secret;

    if (!secret) {
        sendFailure(res, "Secret is missing");
        return;
    }

    if (!compareStrings(secret, Config.sharex.secret)) {
        sendFailure(res, "Secret is incorrect");
        return;
    }

    const file = req.files["sharex"] as UploadedFile;
    const extension = file.name.split(".").pop();

    const filename = getRandomFilename(filenameLength);

    const path = `/files/${filename}.${extension}`;

    await file.mv(Config.root + path);

    Logger.log(`Uploaded ${file.name} as ${filename}.${extension} from ShareX successfully`);

    const result = {
        link: context.base + path
    };

    sendSuccess(res, result);
}
