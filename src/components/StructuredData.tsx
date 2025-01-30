import { ReactElement } from "react";

interface Props {
    data: any;
}

export default function StructuredData(props: Readonly<Props>): ReactElement {
    const { data } = props;

    return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}
