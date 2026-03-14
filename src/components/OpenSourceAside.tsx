import config from "@/src/Config.ts";
import { CodeXmlIcon } from "lucide-react";
import type { ReactElement } from "react";

export default function OpenSourceAside(): ReactElement {
    return (
        <div className="flex items-center justify-center gap-2 py-4">
            <CodeXmlIcon className="size-4 text-slate-700" />
            <span className="text-center text-sm text-slate-700">
                This website is{" "}
                <a
                    className="cursor-pointer underline hover:no-underline"
                    href={`https://github.com/${config.app.socials.gitHub}/${config.app.domain}`}
                    rel="noopener noreferrer"
                    target="_blank"
                >
                    open-source
                </a>
                !
            </span>
        </div>
    );
}
