interface Prop {
    Icon: JSX.Element;
    label: string;
    className?: string;
}

export default function Pill(props: Prop): JSX.Element {
    const { Icon, label, className } = props;

    return (
        <div
            className={`mb-2 mr-3 inline-flex items-center rounded-md border-b-2 border-black/10 bg-black/10 px-3 py-1 transition ${className}`}
        >
            <div className="mr-2 h-5">{Icon}</div>
            <div className="text-white">{label}</div>
        </div>
    );
}
