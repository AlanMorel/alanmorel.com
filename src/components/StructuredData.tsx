interface Props {
    data: any;
}

export default function StructuredData(props: Props): JSX.Element {
    const { data } = props;

    return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}
