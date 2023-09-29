import FacebookIcon from "@/src/components/icons/FacebookIcon";
import GitHubIcon from "@/src/components/icons/GitHubIcon";
import InstagramIcon from "@/src/components/icons/InstagramIcon";
import LinkedInIcon from "@/src/components/icons/LinkedInIcon";
import XIcon from "@/src/components/icons/XIcon";
import { ReactElement } from "react";

const contacts = [
    {
        type: "GitHub",
        href: "https://github.com/AlanMorel",
        Icon: GitHubIcon
    },
    {
        type: "LinkedIn",
        href: "https://linkedin.com/in/AlanMorel",
        Icon: LinkedInIcon
    },
    {
        type: "Facebook",
        href: "https://facebook.com/AlanMorelX",
        Icon: FacebookIcon
    },
    {
        type: "X",
        href: "https://x.com/AlanMorelX",
        Icon: XIcon
    },
    {
        type: "Instagram",
        href: "https://instagram.com/AlanMorelX",
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
                        <div className="h-10 w-10 ">
                            <contact.Icon />
                        </div>
                    </a>
                </li>
            ))}
        </ul>
    );
}
