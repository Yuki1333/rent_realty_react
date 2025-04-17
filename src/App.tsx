import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import LoginModal from '@components/modals/LoginModal';
import Header from '@components/Header';
import Footer from '@components/Footer';

function App() {

  const [isLoginOpen, setIsLoginOpen] = useState(false);

  return (
    <div className="flex flex-col min-h-screen font-sans text-gray-800">
      <Header onLoginClick={() => setIsLoginOpen(true)}/>
      <main className="flex-1 container mx-auto px-4 py-8">
        <Outlet />
      </main>
      <Footer />
      { isLoginOpen && <LoginModal isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)} /> }
    </div>
  )
}

export default App
