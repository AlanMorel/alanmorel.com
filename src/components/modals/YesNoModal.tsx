"useClient";

import useModalState from "@/src/atoms/ModalAtom";
import Button from "@/src/components/inputs/Button";
import ModalButtons from "@/src/components/modals/ModalButtons";
import ModalContent from "@/src/components/modals/ModalContent";
import ModalTitle from "@/src/components/modals/ModalTitle";
import { ReactElement } from "react";

interface Props {
    title: string;
    content: string;
    onYes: () => void;
}

export default function YesNoModal(props: Props): ReactElement {
    const { title, content: description, onYes } = props;
    const { closeModal } = useModalState();

    return (
        <div className="w-screen max-w-lg">
            <ModalTitle>{title}</ModalTitle>
            <ModalContent>{description}</ModalContent>
            <ModalButtons>
                <Button variant="secondary" onClick={closeModal} text="No" />
                <Button variant="primary" onClick={onYes} text="Yes" />
            </ModalButtons>
        </div>
    );
}
