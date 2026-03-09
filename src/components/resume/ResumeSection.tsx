import type { ReactElement, ReactNode } from "react";

interface Props {
    header: string;
    children: ReactNode;
}

export default function ResumeSection(props: Readonly<Props>): ReactElement {
    const { header, children } = props;

    return (
        <div className="mb-4 print:mb-3">
            <h2 className="mb-2 border-b border-slate-300 pb-1 text-base font-bold uppercase dark:border-slate-700">
                {header}
            </h2>
            <div>{children}</div>
        </div>
    );
}
