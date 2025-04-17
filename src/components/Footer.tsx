const Footer = ()=>{
    return (
        <footer className="bg-gray-100 border-t py-6">
            <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2">
                <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-6 h-6 text-blue-600"
                >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 6v6l4 2"
                />
                </svg>
                <span className="text-lg font-bold text-blue-600">MyLogo</span>
            </div>
            <div className="text-sm text-gray-700">
                <a href="tel:+79991234567" className="hover:text-blue-600">
                +7 (999) 123-45-67
                </a>
            </div>
            </div>
        </footer>
    )
}

export default Footer;