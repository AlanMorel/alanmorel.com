import Icon from "@/src/components/icons/Icon.tsx";
import { ReactElement } from "react";

export default function CSSIcon(): ReactElement {
    return (
        <Icon viewBox="48 48">
            <path fill="#0277BD" d="M41 5H7l3 34 14 4 14-4z" />
            <path fill="#039BE5" d="M24 8v31.898L35.2 36.7 37.7 8z" />
            <path
                fill="#fff"
                d="M33.102 13H24v4h4.898l-.296 4H24v4h4.398l-.296 4.5L24 30.898v4.204l7.898-2.602.704-11.5z"
            />
            <path
                fill="#eee"
                d="M24 13v4h-8.898l-.301-4zm-4.602 8l.204 4H24v-4zm.403 6h-4l.3 5.5L24 35.102v-4.204L19.898 29.5z"
            />
        </Icon>
    );
}
