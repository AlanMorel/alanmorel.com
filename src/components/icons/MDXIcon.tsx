import Icon from "@/src/components/icons/Icon.tsx";
import { ReactElement } from "react";

export default function MDXIcon(): ReactElement {
    return (
        <Icon viewBox="512 200">
            <path
                fill="#f9ac00"
                d="M19 3h474c9 0 16 7 16 16v173c0 9-7 17-16 17H19c-9 0-16-8-16-17V19c0-9 7-16 16-16z"
            />
            <path d="M273 40v85l31-31 16 16-58 57-58-58 15-16 31 31V40zM72 163V97l40 40 41-40v65h22V43l-63 63-62-63v120z" />
            <path fill="#000" d="m448 37 16 15-48 48 46 45-16 16-45-46-46 46-16-16 46-45-47-48 16-15 47 47z" />
        </Icon>
    );
}
