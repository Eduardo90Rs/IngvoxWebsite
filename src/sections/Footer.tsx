import React from 'react';
import { Instagram, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer 
      className="text-[#222539] py-16 ambient-shadow-light"
      style={{
        background: 'linear-gradient(to bottom, #E2E8E9, #A899BC)'
      }}
    >
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <a href="#" className="flex items-center mb-6">
              <img src="/assets/logos/1.png" alt="IngVox Logo" className="h-16" />
            </a>
            
            <div className="max-w-md">
              <p className="font-poppins text-[#222539] leading-relaxed">
                Aprender um idioma é mais do que uma habilidade. 
                É um gesto de abertura ao mundo.
                O mundo está pronto para ouvir você.
              </p>
            </div>
            
            <div className="flex space-x-4 mt-6">
              <a href="#" className="text-[#222539] hover:text-[#222539]/80 transition-colors">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="mailto:contato@ingvox.com" className="text-[#222539] hover:text-[#222539]/80 transition-colors">
                <Mail className="h-6 w-6" />
              </a>
            </div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-montserrat font-bold text-lg text-brand-text mb-4">Explorar</h3>
              <ul className="space-y-2 font-poppins">
                <li><a href="#how-it-works" className="text-[#222539] hover:text-[#222539]/80 transition-colors">Como Funciona</a></li>
                <li><a href="#languages" className="text-[#222539] hover:text-[#222539]/80 transition-colors">Idiomas</a></li>
                <li><a href="#faq" className="text-[#222539] hover:text-[#222539]/80 transition-colors">FAQ</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-montserrat font-bold text-lg text-brand-text mb-4">Legal</h3>
              <ul className="space-y-2 font-poppins">
                <li><a href="#" className="text-[#222539] hover:text-[#222539]/80 transition-colors">Termos de Uso</a></li>
                <li><a href="#" className="text-[#222539] hover:text-[#222539]/80 transition-colors">Privacidade</a></li>
                <li><a href="#" className="text-[#222539] hover:text-[#222539]/80 transition-colors">Cookies</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-montserrat font-bold text-lg text-brand-text mb-4">Download</h3>
              <ul className="space-y-2 font-poppins">
                <li><a href="#" className="text-[#222539] hover:text-[#222539]/80 transition-colors">App Store</a></li>
                <li><a href="#" className="text-[#222539] hover:text-[#222539]/80 transition-colors">Google Play</a></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/20 mt-12 pt-8 text-center text-[#222539]/80 text-sm font-poppins">
          <p>&copy; {new Date().getFullYear()} IngVox. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;