import GitHubIcon from "@/src/components/icons/GitHubIcon.tsx";
import LinkedInIcon from "@/src/components/icons/LinkedInIcon.tsx";
import config from "@/src/Config.ts";
import { FileText, Mail } from "lucide-react";
import type { MouseEvent, ReactElement } from "react";

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

function handleEmailClick(event: MouseEvent): void {
    event.preventDefault();

    globalThis.location.href = `mailto:${config.app.email}`;
}

const buttonClasses =
    "group mx-4 flex cursor-pointer flex-col items-center gap-1 text-slate-500 transition hover:text-slate-800";

export default function Contacts(): ReactElement {
    return (
        <ul className="my-4 flex list-none flex-wrap justify-center">
            <li>
                <button aria-label="Send me an email" className={buttonClasses} onClick={handleEmailClick}>
                    <div className="size-10">
                        <Mail className="size-full" />
                    </div>
                    <span className="text-base">Email</span>
                </button>
            </li>
            {contacts.map(contact => (
                <li key={contact.type}>
                    <a
                        aria-label={`Link to my ${contact.type} profile`}
                        className={buttonClasses}
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
                <a aria-label="Link to my resume" className={buttonClasses} href="/resume" target="_blank">
                    <div className="size-10">
                        <FileText className="size-full" />
                    </div>
                    <span className="text-base">Resume</span>
                </a>
            </li>
        </ul>
    );
}
