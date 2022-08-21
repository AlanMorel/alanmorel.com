import { NextFunction, Request, Response } from "express";
import { renderPage } from "vite-plugin-ssr";

export default async function (req: Request, res: Response, next: NextFunction): Promise<void> {
    const pageContextInit = {
        urlOriginal: req.originalUrl,
        userAgent: req.headers["user-agent"]
    };

    const pageContext = await renderPage(pageContextInit);
    const { httpResponse } = pageContext;

    if (!httpResponse) {
        next();
        return;
    }

    const { statusCode, contentType } = httpResponse;

    res.status(statusCode).type(contentType);
    httpResponse.pipe(res);
}
