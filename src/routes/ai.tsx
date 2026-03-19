import { getAIImages } from "@/src/helpers/server/ServerFunctions.ts";
import { createFileRoute } from "@tanstack/react-router";
import type { ReactElement } from "react";

export const Route = createFileRoute("/ai")({
    loader: () => getAIImages(),
    component: AIPage
});

function AIPage(): ReactElement {
    const images = Route.useLoaderData();
    return (
        <div>
            {images.map(src => (
                <img alt={src} key={src} src={src} />
            ))}
        </div>
    );
}
