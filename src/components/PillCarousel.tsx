import Pill from "@/src/components/Pill.tsx";
import type { ReactElement } from "react";

export interface PillItem {
    icon: ReactElement;
    label: string;
}

interface Prop {
    pills: PillItem[];
    reverse?: boolean;
}

export default function PillCarousel(props: Readonly<Prop>): ReactElement {
    const { pills, reverse = false } = props;

    const items = reverse ? [...pills].reverse() : pills;

    return (
        <div className="mx-auto max-w-240 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
            <ul className={reverse ? "animate-marquee-reverse flex w-max" : "animate-marquee flex w-max"}>
                {[...items, ...items].map((pill, i) => (
                    <li className="inline-flex shrink-0" key={`${pill.label}-${i}`}>
                        <Pill
                            className="bg-slate-200 dark:bg-slate-200"
                            Icon={pill.icon}
                            label={pill.label}
                        />
                    </li>
                ))}
            </ul>
        </div>
    );
}
