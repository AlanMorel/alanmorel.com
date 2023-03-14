import FacebookIcon from "@/src/components/icons/FacebookIcon";
import GitHubIcon from "@/src/components/icons/GitHubIcon";
import InstagramIcon from "@/src/components/icons/InstagramIcon";
import LinkedInIcon from "@/src/components/icons/LinkedInIcon";
import TwitterIcon from "@/src/components/icons/TwitterIcon";

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
        type: "Twitter",
        href: "https://twitter.com/AlanMorelX",
        Icon: TwitterIcon
    },
    {
        type: "Instagram",
        href: "https://instagram.com/AlanMorelX",
        Icon: InstagramIcon
    }
];

export default function Contacts(): JSX.Element {
    return (
        <ul className="mt-4 mb-4 flex list-none flex-wrap justify-center">
            {contacts.map(contact => (
                <li key={contact.type} className="mb-8 mr-4 ml-4">
                    <a
                        href={contact.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-slate-400 transition hover:text-slate-600"
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