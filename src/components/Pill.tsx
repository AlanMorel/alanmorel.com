import cn from "@/src/components/other/TailwindHelper.ts";
import type { ReactElement } from "react";

interface Prop {
    Icon: ReactElement;
    label: string;
    className?: string;
}

export default function Pill(props: Readonly<Prop>): ReactElement {
    const { Icon, label, className } = props;

    return (
        <div
            className={cn(
                "border-dark/10 bg-dark/10 mr-3 mb-2 inline-flex items-center rounded-md border-b-2 px-3 py-1 transition",
                className
            )}
        >
            <div className="h-5">{Icon}</div>
            <div className="ml-2">{label}</div>
        </div>
    );
}
