import config from "@/src/Config.ts";
import type { ReactElement } from "react";

export default function SimpleHomepage(): ReactElement {
    return (
        <div className="flex max-w-240 flex-col p-2">
            <div className="text-2xl font-bold">{config.metaInfo.title}</div>
            <div className="text-base">{config.metaInfo.description}</div>
        </div>
    );
}
