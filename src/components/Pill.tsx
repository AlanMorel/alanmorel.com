import tw from "@/src/components/other/TailwindHelper.ts";
import { getColor } from "@/src/helpers/client/ColorHelpers.ts";
import { ReactElement } from "react";

interface Prop {
    Icon: ReactElement;
    label: string;
    theme: string;
    className?: string;
}

export default function Pill(props: Readonly<Prop>): ReactElement {
    const { Icon, label, theme, className } = props;

    return (
        <div
            className={tw(
                "border-dark/10 bg-dark/10 mr-3 mb-2 inline-flex items-center rounded-md border-b-2 px-3 py-1 transition",
                className
            )}
        >
            <div className="h-5">{Icon}</div>
            <div className={tw("ml-2", getColor(theme))}>{label}</div>
        </div>
    );
}
