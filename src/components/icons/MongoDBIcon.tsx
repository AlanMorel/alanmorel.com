import Icon from "@/src/components/icons/Icon.tsx";
import { ReactElement } from "react";

export default function MongoDBIcon(): ReactElement {
    return (
        <Icon viewBox="48 48">
            <defs>
                <linearGradient id="0" x1="24.2" y1="47.593" x2="25.627" y2="0" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#54a44d" />
                    <stop offset="1" stopColor="#469747" />
                </linearGradient>
            </defs>
            <circle r="24" cy="24" cx="24" fill="url(#0)" />
            <g transform="matrix(.05078 0 0 .05078 10 10)" fill="#3a5821">
                <path d="m413.69 0c0 0-45.37 44.01-94.43 61.759-363.33 131.42-210.1 387.52-205.1 388.36 0 0 20.374-35.48 47.896-55.717 174.64-128.39 210.14-276.17 210.14-276.17 0 0-39.19 177.83-194.56 288.48-34.32 24.426-57.55 84.57-67.39 144.68 0 0 24.325-9.828 34.785-12.49 4.079-26.618 12.607-52.11 27.03-74.875 217.15 25.854 288.27-149.12 297.56-210.14 21.929-144.1-55.928-253.89-55.928-253.89" />
            </g>
        </Icon>
    );
}
