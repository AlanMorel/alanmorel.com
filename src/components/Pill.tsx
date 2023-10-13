import { ReactElement } from "react";

interface Prop {
    Icon: ReactElement;
    label: string;
    className?: string;
}

export default function Pill(props: Prop): ReactElement {
    const { Icon, label, className } = props;

    return (
        <div
            className={`mb-2 mr-3 inline-flex items-center rounded-md border-b-2 border-black/10 bg-black/10 px-3 py-1 transition ${className}`}
        >
            <div className="h-5">{Icon}</div>
            <div className="ml-2 text-white">{label}</div>
        </div>
    );
}
