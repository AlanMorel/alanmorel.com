import GitHubIcon from "@/src/components/icons/GitHubIcon.tsx";
import LinkedInIcon from "@/src/components/icons/LinkedInIcon.tsx";
import config from "@/src/Config.ts";
import { FileText } from "lucide-react";
import type { ReactElement } from "react";

const contacts = [
    {
        type: "GitHub",
        href: `https://github.com/${config.app.socials.gitHub}`,
        Icon: GitHubIcon
    },
    {
        type: "LinkedIn",
        href: `https://linkedin.com/in/${config.app.socials.linkedIn}`,
        Icon: LinkedInIcon
    }
];

export default function Contacts(): ReactElement {
    return (
        <ul className="my-4 flex list-none flex-wrap justify-center">
            {contacts.map(contact => (
                <li key={contact.type}>
                    <a
                        aria-label={`Link to my ${contact.type} profile`}
                        className="group mx-4 flex flex-col items-center gap-1 text-slate-500 transition hover:text-slate-800"
                        href={contact.href}
                        rel="noopener noreferrer"
                        target="_blank"
                    >
                        <div className="size-10">
                            <contact.Icon />
                        </div>
                        <span className="text-base">{contact.type}</span>
                    </a>
                </li>
            ))}
            <li>
                <a
                    aria-label="Link to my resume"
                    className="group mx-4 flex flex-col items-center gap-1 text-slate-500 transition hover:text-slate-800"
                    href="/resume"
                    target="_blank"
                >
                    <div className="flex size-10 items-center justify-center">
                        <FileText className="size-full" />
                    </div>
                    <span className="text-base">Resume</span>
                </a>
            </li>
        </ul>
    );
}
