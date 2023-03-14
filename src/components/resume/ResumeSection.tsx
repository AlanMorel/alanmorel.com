interface Props {
    header: string;
    children: React.ReactNode;
}

export default function ResumeSection(props: Props): JSX.Element {
    const { header, children } = props;

    return (
        <div className="mb-4 print:mb-3">
            <h2 className="mb-2 border-b border-slate-300 pb-1 font-bold uppercase">{header}</h2>
            <div>{children}</div>
        </div>
    );
}
