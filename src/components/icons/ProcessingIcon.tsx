import Icon from "@/src/components/icons/Icon";
import { ReactElement } from "react";

export default function ProcessingIcon(): ReactElement {
    return (
        <Icon viewBox="710 690">
            <path d="M400 500C700 500 700 100 400 100" stroke="#0468FF" strokeWidth="150px" fill="none" />
            <path d="M400 200L100 600" stroke="#1F34AB" strokeWidth="150px" fill="none" />
            <path d="M100 300L200 500" stroke="#85AEFF" strokeWidth="150px" fill="none" />
        </Icon>
    );
}
