import GitHubIcon from "@/src/components/icons/GitHubIcon.tsx";
import InstagramIcon from "@/src/components/icons/InstagramIcon.tsx";
import LinkedInIcon from "@/src/components/icons/LinkedInIcon.tsx";
import ThemeSwitcher from "@/src/components/other/ThemeSwitcher.tsx";
import config from "@/src/Config.ts";
import { ReactElement } from "react";

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
    },
    {
        type: "Instagram",
        href: `https://instagram.com/${config.app.socials.instagram}`,
        Icon: InstagramIcon
    }
];

export default function Contacts(): ReactElement {
    return (
        <ul className="my-4 flex list-none flex-wrap justify-center">
            {contacts.map(contact => (
                <li key={contact.type} className="mx-4 mb-8">
                    <a
                        href={contact.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-slate-400 transition hover:text-slate-600"
                        aria-label={`Link to my ${contact.type} profile`}
                    >
                        <div className="size-10">
                            <contact.Icon />
                        </div>
                    </a>
                </li>
            ))}
            <li className="mx-4 mb-8">
                <ThemeSwitcher />
            </li>
        </ul>
    );
}
