import Config from "@/Config";
import AppInfo from "@/helpers/AppInfo";
import { sendFailure, sendSuccess } from "@/helpers/ResultHelper";
import { compareStrings, getRandomFilename } from "@/helpers/StringHelper";
import { Logger } from "@/tools/Logger";
import { Request, Response } from "express";
import { UploadedFile } from "express-fileupload";

const filenameLength = 3;

export default function (req: Request, res: Response): void {
    const app = AppInfo(req);

    if (!req.body.secret || !req.files) {
        sendFailure(res, "Error uploading");
        return;
    }

    const secret = req.body.secret;

    if (!compareStrings(secret, Config.sharex.secret)) {
        sendFailure(res, "Secret is incorrect");
        return;
    }

    const image = req.files["sharex"] as UploadedFile;
    const filename = getRandomFilename(filenameLength);

    const path = "/images/" + filename + ".png";

    image.mv(Config.root + path, error => {
        if (error) {
            sendFailure(res, error);
            return;
        }

        Logger.log("Uploaded " + image.name + " as " + filename + ".png from ShareX successfully");

        const result = {
            link: app.base + path
        };

        sendSuccess(res, result);
    });
}
