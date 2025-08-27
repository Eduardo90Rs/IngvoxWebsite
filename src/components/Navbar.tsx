import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
      
      // Update active section based on scroll position
      const sections = ['how-it-works', 'languages', 'plans', 'faq'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      setActiveSection(currentSection || '');
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: '#how-it-works', label: 'Como Funciona', id: 'how-it-works' },
    { href: '#languages', label: 'Idiomas', id: 'languages' },
    { href: '#plans', label: 'Preços', id: 'plans' },
    { href: '#faq', label: 'FAQ', id: 'faq' }
  ];

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    // Smooth scroll to section
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
        ? 'bg-brand-bg-tertiary/95 backdrop-blur-md shadow-soft border-b border-brand-highlight/10 py-3' 
        : 'bg-transparent py-5'
      }`}
    >
      <div className="container flex items-center justify-between">
        {/* Logo with subtle hover effect */}
        <a 
          href="#" 
          className="flex items-center group transition-transform duration-300 hover:scale-105"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
        >
          <img 
            src="/assets/logos/1.png" 
            alt="IngVox Logo" 
            className="h-8 md:h-10 transition-all duration-300 group-hover:brightness-110"
          />
        </a>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={item.href}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(item.href);
              }}
              className={`font-poppins font-medium transition-all duration-300 relative group ${
                activeSection === item.id
                  ? 'text-brand-accent'
                  : 'text-brand-text hover:text-brand-accent'
              }`}
            >
              {item.label}
              <span className={`absolute -bottom-1 left-0 h-0.5 bg-brand-accent transition-all duration-300 ${
                activeSection === item.id ? 'w-full' : 'w-0 group-hover:w-full'
              }`}></span>
            </a>
          ))}
        </nav>

        {/* CTA & Mobile Menu Button */}
        <div className="flex items-center space-x-4">
          <a 
            href="#plans" 
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('#plans');
            }}
            className="btn btn-primary btn-small group"
          >
            Teste Grátis
          </a>
          
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-brand-text hover:text-brand-accent transition-colors duration-300 rounded-lg hover:bg-brand-bg-secondary/50"
          >
            {isMobileMenuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className={`md:hidden transition-all duration-500 overflow-hidden ${
        isMobileMenuOpen 
          ? 'max-h-64 opacity-100 border-b border-brand-highlight/10' 
          : 'max-h-0 opacity-0'
      }`}>
        <div className="bg-brand-bg-tertiary/95 backdrop-blur-md">
          <nav className="container py-4 space-y-2">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.href);
                }}
                className={`block py-2 px-4 rounded-lg font-poppins font-medium transition-all duration-300 ${
                  activeSection === item.id
                    ? 'text-brand-accent bg-brand-accent/10'
                    : 'text-brand-text hover:text-brand-accent hover:bg-brand-bg-secondary/50'
                }`}
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;