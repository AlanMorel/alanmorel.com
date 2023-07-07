import { ReactElement, ReactNode } from "react";

interface Props {
    children: ReactNode;
    viewBox: string;
    fill?: string;
}

export default function Contacts(props: Props): ReactElement {
    const { children, viewBox, fill } = props;

    return (
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox={`0 0 ${viewBox}`} fill={fill} className="h-full">
            {children}
        </svg>
    );
}
