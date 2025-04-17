import { createPortal } from 'react-dom';

import { ModalProps } from '@models/UI/ModalProps';

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, children }) => {

    if (!isOpen) return null;

    const handleBackdropClick = (e: React.MouseEvent) => {
        if (e.target === e.currentTarget) {
          onClose();
        }
    };

    return createPortal(
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50" onClick={handleBackdropClick}>
            <div className="bg-white rounded-2xl shadow-xl w-full max-w-md p-6 relative">
                <button
                onClick={onClose}
                className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 text-xl"
                >×</button>
                {title && <h2 className="text-2xl font-semibold mb-4 text-center">{title}</h2>}
                <div>{children}</div>
            </div>
        </div>,
        document.body
  )
}
export default Modal;