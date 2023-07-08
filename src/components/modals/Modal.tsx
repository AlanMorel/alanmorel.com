"use client";

import useModalState from "@/src/atoms/ModalAtom";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, ReactElement } from "react";

export default function Modal(): ReactElement {
    const { modal, closeModal } = useModalState();

    return (
        <Transition appear show={modal.open} as={Fragment}>
            <Dialog as="div" className="relative z-10" onClose={closeModal}>
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-black/25" />
                </Transition.Child>
                <div className="fixed inset-0 overflow-y-auto">
                    <div className="flex min-h-full items-center justify-center p-4 text-center">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 scale-95"
                            enterTo="opacity-100 scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 scale-100"
                            leaveTo="opacity-0 scale-95"
                        >
                            <Dialog.Panel className="w-auto rounded-xl bg-white px-8 py-6 text-left align-middle shadow-xl transition-all">
                                {modal.content}
                                <button
                                    className="absolute right-4 top-4 h-8 w-8 rounded-md font-bold text-slate-400 hover:bg-slate-200 hover:text-black"
                                    onClick={closeModal}
                                >
                                    ✕
                                </button>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition>
    );
}
