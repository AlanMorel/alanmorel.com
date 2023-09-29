import Icon from "@/src/components/icons/Icon";
import { ReactElement } from "react";

export default function XIcon(): ReactElement {
    return (
        <Icon viewBox="256 256" fill="currentColor">
            <circle cx="128" cy="128" r="128" />
            <path
                fill="#FFF"
                d="m140 118 46-54h-11l-40 47-32-47H66l48 71-48 57h11l42-50 34 50h37l-50-74zm-15 18-5-7-39-56h16l32 45 5 7 41 59h-17l-33-48z"
            />
        </Icon>
    );
}
