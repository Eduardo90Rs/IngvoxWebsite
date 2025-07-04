import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
        ? 'bg-brand-bg-secondary shadow-soft py-3' 
        : 'bg-transparent py-5'
      }`}
    >
      <div className="container flex items-center justify-between">
        <a href="#" className="flex items-center">
          <img src="/assets/logos/1.png" alt="IngVox Logo" className="h-16" />
        </a>
        
        <nav className="hidden md:flex items-center space-x-10">
          <a href="#how-it-works" className="font-poppins font-medium text-brand-text hover:text-brand-accent transition-colors">
            Como Funciona
          </a>
          <a href="#languages" className="font-poppins font-medium text-brand-text hover:text-brand-accent transition-colors">
            Idiomas
          </a>
          <a href="#faq" className="font-poppins font-medium text-brand-text hover:text-brand-accent transition-colors">
            FAQ
          </a>
        </nav>

        <div className="flex items-center space-x-4">
          <a href="#plans" className="btn btn-primary text-sm md:text-base">
            Teste Grátis
          </a>
          
          <button className="md:hidden text-brand-text">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;