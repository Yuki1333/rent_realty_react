import { useState } from 'react';
import Modal from '@components/UI/Modal';
import Btn from '@components/UI/Btn';
import CustomInput from '@components/UI/CustomInput';
import { LoginModalProps } from '@models/UI/ModalProps';
 
const LoginModal: React.FC<LoginModalProps> = ({ isOpen, onClose }) => {

    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log({ email, username });
    };

    return (
        <Modal isOpen={isOpen} onClose={onClose} title="Вход">
            <form onSubmit={handleSubmit} className="space-y-4">
                <CustomInput title='Ваше имя' type="text" value={username} onChange={ (e)=>{setUsername(e.target.value) } } required />
                <CustomInput title='Ваш Email' type="email" value={email} onChange={ (e)=>{setEmail(e.target.value) } } required />
                <Btn type="submit" className="bg-blue-600 text-white hover:bg-blue-700">Войти</Btn>
            </form>
        </Modal>
    )
}

export default LoginModal;