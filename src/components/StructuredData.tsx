import type { ReactElement } from "react";

interface Props {
    data: any;
}

export default function StructuredData(props: Readonly<Props>): ReactElement {
    const { data } = props;

    return <script dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} type="application/ld+json" />;
}
