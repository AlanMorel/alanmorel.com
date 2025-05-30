"use client";

import useModal from "@/src/atoms/ModalAtom.tsx";
import tw from "@/src/components/other/TailwindHelper.ts";
import { Close, Content, Overlay, Portal, Root } from "@radix-ui/react-dialog";
import { XIcon } from "lucide-react";
import { ReactElement } from "react";

export default function Modal(): ReactElement {
    const { modal, setOpenState } = useModal();

    return (
        <Root open={modal.open} onOpenChange={setOpenState}>
            <Portal>
                <Overlay className="data-[state=closed]:animate-fade-out data-[state=open]:animate-fade-in fixed inset-0 z-20 bg-black/25" />
                <Content
                    className={tw(
                        "data-[state=closed]:animate-leave-centered data-[state=open]:animate-enter-centered fixed top-[50%] left-[50%] z-50 box-content w-[95vw] max-w-lg -translate-x-[50%] -translate-y-[50%] rounded-xl bg-white px-8 py-6 shadow-xl focus:outline-hidden focus-visible:ring-3 focus-visible:ring-purple-500/75 md:w-full"
                    )}
                >
                    <div>{modal.content}</div>
                    <Close
                        className={tw(
                            "group absolute top-5 right-6 inline-flex h-8 w-8 items-center justify-center rounded-md p-1 font-bold text-slate-400 hover:bg-slate-200 hover:text-black focus:outline-hidden focus-visible:ring-3 focus-visible:ring-purple-500/75"
                        )}
                    >
                        <XIcon className="size-5 text-slate-400 group-hover:text-black" />
                        <span className="sr-only">Close</span>
                    </Close>
                </Content>
            </Portal>
        </Root>
    );
}
