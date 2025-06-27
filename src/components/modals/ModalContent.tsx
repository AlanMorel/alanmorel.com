import { Dialog } from "@base-ui-components/react/dialog";
import { ReactElement } from "react";

interface Props {
    children: ReactElement | string | ReactElement[];
}

export default function ModalContent(props: Readonly<Props>): ReactElement {
    const { children } = props;

    return <Dialog.Description className="mb-2 text-lg text-slate-600">{children}</Dialog.Description>;
}
