import { LoginProps } from "@models/LoginProps";
import Btn from '@components/UI/Btn';

const Login: React.FC<LoginProps> = ({ onLoginClick }) => {
    return (
        <Btn className="bg-blue-600 hover:bg-blue-700 text-white" onClick={onLoginClick}>Вход</Btn>
    )
}
export default Login;