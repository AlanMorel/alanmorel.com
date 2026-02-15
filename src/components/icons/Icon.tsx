import type { ReactElement, ReactNode } from "react";

interface Props {
    children: ReactNode;
    viewBox: string;
    fill?: string;
}

export default function Contacts(props: Readonly<Props>): ReactElement {
    const { children, viewBox, fill } = props;

    return (
        <svg className="h-full" fill={fill} version="1.1" viewBox={`0 0 ${viewBox}`} xmlns="http://www.w3.org/2000/svg">
            {children}
        </svg>
    );
}
