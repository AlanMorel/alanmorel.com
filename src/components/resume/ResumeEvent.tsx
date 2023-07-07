import { ReactElement } from "react";

interface Props {
    header: string;
    subheader: string;
    date: string;
}

export default function ResumeEvent(props: Props): ReactElement {
    const { header, subheader, date } = props;

    return (
        <div className="flex justify-between">
            <div>
                <strong>{header}</strong>, <em>{subheader}</em>
            </div>
            <div className="hidden text-sm font-bold lg:inline-flex">{date}</div>
        </div>
    );
}
