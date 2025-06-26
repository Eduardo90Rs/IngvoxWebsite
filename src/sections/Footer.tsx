import React from 'react';
import { Instagram, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-dark-bluish-gray text-light-cream py-16">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <a href="#" className="flex items-center mb-6">
              <img src="/assets/logos/3.png" alt="IngVox Logo" className="h-20" />
            </a>
            
            <div className="max-w-md">
              <p className="text-light-cream leading-relaxed">
                Aprender um idioma é mais do que uma habilidade. 
                É um gesto de abertura ao mundo.
                O mundo está pronto para ouvir você.
              </p>
            </div>
            
            <div className="flex space-x-4 mt-6">
              <a href="#" className="text-light-cream hover:text-golden-beige transition-colors">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="mailto:contato@ingvox.com" className="text-light-cream hover:text-golden-beige transition-colors">
                <Mail className="h-6 w-6" />
              </a>
            </div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-bold text-lg text-golden-beige mb-4">Explorar</h3>
              <ul className="space-y-2">
                <li><a href="#how-it-works" className="text-light-cream hover:text-golden-beige transition-colors">Como Funciona</a></li>
                <li><a href="#languages" className="text-light-cream hover:text-golden-beige transition-colors">Idiomas</a></li>
                <li><a href="#faq" className="text-light-cream hover:text-golden-beige transition-colors">FAQ</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-bold text-lg text-golden-beige mb-4">Legal</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-light-cream hover:text-golden-beige transition-colors">Termos de Uso</a></li>
                <li><a href="#" className="text-light-cream hover:text-golden-beige transition-colors">Privacidade</a></li>
                <li><a href="#" className="text-light-cream hover:text-golden-beige transition-colors">Cookies</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-bold text-lg text-golden-beige mb-4">Download</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-light-cream hover:text-golden-beige transition-colors">App Store</a></li>
                <li><a href="#" className="text-light-cream hover:text-golden-beige transition-colors">Google Play</a></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="border-t border-dark-bluish-gray mt-12 pt-8 text-center text-light-cream text-sm">
          <p>&copy; {new Date().getFullYear()} IngVox. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;