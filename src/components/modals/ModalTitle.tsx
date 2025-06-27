import { Dialog } from "@base-ui-components/react/dialog";
import { ReactElement } from "react";

interface Props {
    children: ReactElement | string;
}

export default function ModalTitle(props: Readonly<Props>): ReactElement {
    const { children } = props;

    return <Dialog.Title className="mb-6 text-2xl leading-6 font-bold text-slate-900">{children}</Dialog.Title>;
}
