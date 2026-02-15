import Icon from "@/src/components/icons/Icon.tsx";
import type { ReactElement } from "react";

export default function ProcessingIcon(): ReactElement {
    return (
        <Icon viewBox="710 690">
            <path d="M400 500C700 500 700 100 400 100" fill="none" stroke="#0468FF" strokeWidth="150px" />
            <path d="M400 200L100 600" fill="none" stroke="#1F34AB" strokeWidth="150px" />
            <path d="M100 300L200 500" fill="none" stroke="#85AEFF" strokeWidth="150px" />
        </Icon>
    );
}
