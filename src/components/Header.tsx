import { NavLink } from 'react-router-dom';

import Login from "@components/Login";
import { HeaderProps } from "@models/HeaderProps";

const Header: React.FC<HeaderProps> = ({ onLoginClick }) => {
    return (
        <header className="bg-white shadow-md">
            <div className="container mx-auto px-4 py-4 flex items-center justify-between">
                <NavLink to="/" className="flex items-center space-x-2">
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="w-8 h-8 text-blue-600"
                    >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 6v6l4 2"
                    />
                    </svg>
                    <span className="text-xl font-bold text-blue-600">MyLogo</span>
                </NavLink>
                <div className="text-sm text-gray-700">
                    <Login onLoginClick={onLoginClick as () => void} />
                </div>
            </div>
        </header>
    )
}

export default Header;