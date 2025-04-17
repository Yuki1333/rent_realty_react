export type ModalProps = {
    isOpen: boolean;
    onClose: () => void;
    title?: string;
    children: React.ReactNode;
}

export type LoginModalProps  = {
    isOpen: boolean;
    onClose: () => void;
}