import { ReactNode } from "react";

interface Props {
    children: ReactNode;
    onClick: () => void;
}

export default function EntryButton(props: Props): JSX.Element {
    const { children, onClick } = props;

    return (
        <button
            className="mt-4 inline-flex items-center rounded-lg bg-slate-100 px-4 py-2 transition hover:bg-slate-200"
            onClick={onClick}
        >
            {children}
        </button>
    );
}
