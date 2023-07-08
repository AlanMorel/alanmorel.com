import { Dialog } from "@headlessui/react";
import { ReactElement } from "react";

interface Props {
    children: ReactElement | string;
}

export default function ModalTitle(props: Props): ReactElement {
    const { children } = props;

    return (
        <Dialog.Title as="h3" className="mb-6 text-2xl font-bold leading-6 text-slate-900">
            {children}
        </Dialog.Title>
    );
}
