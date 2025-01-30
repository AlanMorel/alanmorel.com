"useClient";

import useModal from "@/src/atoms/ModalAtom.tsx";
import Button from "@/src/components/inputs/Button.tsx";
import ModalButtons from "@/src/components/modals/ModalButtons.tsx";
import ModalContent from "@/src/components/modals/ModalContent.tsx";
import ModalTitle from "@/src/components/modals/ModalTitle.tsx";
import { ReactElement } from "react";

interface Props {
    title: string;
    content: string;
    onYes: () => void;
}

export default function YesNoModal(props: Readonly<Props>): ReactElement {
    const { title, content: description, onYes } = props;
    const { closeModal } = useModal();

    return (
        <div className="w-screen max-w-lg">
            <ModalTitle>{title}</ModalTitle>
            <ModalContent>{description}</ModalContent>
            <ModalButtons>
                <Button variant="secondary" onClick={closeModal}>
                    No
                </Button>
                <Button variant="primary" onClick={onYes}>
                    Yes
                </Button>
            </ModalButtons>
        </div>
    );
}
