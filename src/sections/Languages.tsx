import React from 'react';

const Languages: React.FC = () => {
  const languages = [
    { name: 'Inglês', code: 'en', flag: '🇬🇧' },
    { name: 'Espanhol', code: 'es', flag: '🇪🇸' },
    { name: 'Francês', code: 'fr', flag: '🇫🇷' },
    { name: 'Alemão', code: 'de', flag: '🇩🇪' },
    { name: 'Italiano', code: 'it', flag: '🇮🇹' },
    { name: 'Japonês', code: 'jp', flag: '🇯🇵' },
    { name: 'Mandarim', code: 'cn', flag: '🇨🇳' },
    { name: 'Russo', code: 'ru', flag: '🇷🇺' },
  ];

  return (
    <section id="languages" className="section bg-light-cream">
      <div className="container">
        <h2 className="section-title">Idiomas Disponíveis</h2>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 mt-10 max-w-4xl mx-auto">
          {languages.map((language) => (
            <div 
              key={language.code}
              className="card card-hover bg-white flex flex-col items-center py-6 cursor-pointer"
            >
              <div className="text-5xl mb-3">{language.flag}</div>
              <h3 className="font-medium text-lg">{language.name}</h3>
            </div>
          ))}
        </div>
        
        <div className="mt-16 relative max-w-xl mx-auto">
          <div className="relative z-10 flex justify-center">
            <div className="bg-gradient-to-r from-royal-blue to-soft-lilac p-1 rounded-full">
              <div className="bg-white p-4 rounded-full">
                <div className="w-48 h-48 rounded-full overflow-hidden bg-golden-beige/20 relative">
                  {/* Globe animation would go here - simplified with a static image */}
                  <img 
                    src="https://images.pexels.com/photos/355829/pexels-photo-355829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                    alt="Globe" 
                    className="w-full h-full object-cover"
                  />
                  
                  {/* Dots representing languages */}
                  {languages.map((_, index) => {
                    const angle = (index * 45) * Math.PI / 180;
                    const x = 50 + 40 * Math.cos(angle);
                    const y = 50 + 40 * Math.sin(angle);
                    
                    return (
                      <div 
                        key={index}
                        className="absolute w-3 h-3 bg-royal-blue rounded-full animate-pulse"
                        style={{
                          left: `${x}%`,
                          top: `${y}%`,
                          animationDelay: `${index * 0.2}s`
                        }}
                      ></div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
          
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-soft-lilac opacity-30 blur-xl z-0"></div>
        </div>
        
        <p className="text-center text-dark-bluish-gray mt-10">
          Novos idiomas são adicionados regularmente. Em breve: Coreano, Árabe e mais!
        </p>
      </div>
    </section>
  );
};

export default Languages;