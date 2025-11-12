"use client";

import useModal from "@/src/atoms/ModalAtom.tsx";
import { Dialog } from "@base-ui-components/react/dialog";
import { ReactElement } from "react";

export default function Modal(): ReactElement {
    const { modal, setOpenState } = useModal();

    return (
        <Dialog.Root open={modal.open} onOpenChange={setOpenState}>
            <Dialog.Portal>
                <Dialog.Backdrop className="fixed inset-0 bg-black opacity-70 transition-all duration-150 data-ending-style:opacity-0 data-starting-style:opacity-0" />
                <Dialog.Popup className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-150 data-ending-style:scale-90 data-ending-style:opacity-0 data-starting-style:scale-90 data-starting-style:opacity-0 dark:outline-gray-300">
                    <div className="">{modal.content}</div>
                    <Dialog.Close className="group absolute top-2 right-2 inline-flex size-8 cursor-pointer items-center justify-center rounded-md p-1 text-slate-950 transition hover:bg-slate-300 focus:outline-hidden">
                        <span className="text-2xl text-slate-500 group-hover:text-slate-950">&times;</span>
                        <span className="sr-only">Close</span>
                    </Dialog.Close>
                </Dialog.Popup>
            </Dialog.Portal>
        </Dialog.Root>
    );
}
