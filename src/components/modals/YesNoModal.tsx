"useClient";

import useModal from "@/src/atoms/ModalAtom.tsx";
import Button from "@/src/components/inputs/Button.tsx";
import ModalButtons from "@/src/components/modals/ModalButtons.tsx";
import ModalContent from "@/src/components/modals/ModalContent.tsx";
import ModalTitle from "@/src/components/modals/ModalTitle.tsx";
import type { ReactElement } from "react";

interface Props {
    title: string;
    content: string;
    onYes: () => void;
}

export default function YesNoModal(props: Readonly<Props>): ReactElement {
    const { title, content: description, onYes } = props;
    const { closeModal } = useModal();

    return (
        <div className="w-screen max-w-lg rounded-2xl bg-white p-8">
            <ModalTitle>{title}</ModalTitle>
            <ModalContent>{description}</ModalContent>
            <ModalButtons>
                <Button onClick={closeModal} variant="secondary">
                    No
                </Button>
                <Button onClick={onYes} variant="primary">
                    Yes
                </Button>
            </ModalButtons>
        </div>
    );
}
