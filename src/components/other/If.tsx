import { ReactElement } from "react";

interface Props {
    condition: boolean | undefined;
    children: ReactElement | ReactElement[] | string;
}

export default function If(props: Props): ReactElement {
    const { condition, children } = props;

    return <>{condition && children}</>;
}
