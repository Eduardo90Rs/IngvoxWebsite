import React from 'react';
import { useStaggerAnimation } from '../hooks/useScrollAnimation';
import { Sparkles, TrendingUp } from 'lucide-react';

const Languages: React.FC = () => {
  const staggerRef = useStaggerAnimation(100);
  
  const languages = [
    { 
      name: 'Inglês', 
      code: 'en', 
      flag: '/assets/Flag_of_United_Kingdom_Flat_Round_Corner-128x128.png',
      nativeName: 'English',
      learners: '1.5B+ falantes'
    },
    { 
      name: 'Espanhol', 
      code: 'es', 
      flag: '/assets/Flag_of_Spain_Flat_Round_Corner-128x128.png',
      nativeName: 'Español',
      learners: '500M+ falantes'
    },
    { 
      name: 'Francês', 
      code: 'fr', 
      flag: '/assets/Flag_of_France_Flat_Round_Corner-128x128.png',
      nativeName: 'Français',
      learners: '280M+ falantes'
    },
    { 
      name: 'Alemão', 
      code: 'de', 
      flag: '/assets/Flag_of_Germany_Flat_Round_Corner-128x128.png',
      nativeName: 'Deutsch',
      learners: '130M+ falantes'
    },
    { 
      name: 'Italiano', 
      code: 'it', 
      flag: '/assets/Flag_of_Italy_Flat_Round_Corner-128x128.png',
      nativeName: 'Italiano',
      learners: '65M+ falantes'
    },
    { 
      name: 'Japonês', 
      code: 'jp', 
      flag: '/assets/Flag_of_Japan_Flat_Round_Corner-128x128.png',
      nativeName: '日本語',
      learners: '125M+ falantes'
    },
    { 
      name: 'Mandarim', 
      code: 'cn', 
      flag: '/assets/Flag_of_Peoples_Republic_of_China_Flat_Round_Corner-128x128.png',
      nativeName: '中文',
      learners: '1.1B+ falantes'
    },
    { 
      name: 'Russo', 
      code: 'ru', 
      flag: '/assets/Flag_of_Russia_Flat_Round_Corner-128x128.png',
      nativeName: 'Русский',
      learners: '260M+ falantes'
    },
    { 
      name: 'Coreano', 
      code: 'kr', 
      flag: '/assets/Flag_of_South_Korea_Flat_Round_Corner-128x128.png',
      nativeName: '한국어',
      learners: '77M+ falantes'
    },
    { 
      name: 'Português', 
      code: 'br', 
      flag: '/assets/Flag_of_Brazil_Flat_Round_Corner-128x128.png',
      nativeName: 'Português',
      learners: '260M+ falantes'
    },
  ];

  const upcomingLanguages = [
    { 
      name: 'Hindi', 
      code: 'hi', 
      flag: '/assets/Flag_of_India_Flat_Round_Corner-128x128.png',
      nativeName: 'हिन्दी'
    },
    { 
      name: 'Urdu', 
      code: 'ur', 
      flag: '/assets/Flag_of_Pakistan_Flat_Round_Corner-128x128.png',
      nativeName: 'اردو'
    },
    { 
      name: 'Turco', 
      code: 'tr', 
      flag: '/assets/Flag_of_Turkey_Flat_Round_Corner-128x128.png',
      nativeName: 'Türkçe'
    },
    { 
      name: 'Grego', 
      code: 'gr', 
      flag: '/assets/Flag_of_Greece_Flat_Round_Corner-128x128.png',
      nativeName: 'Ελληνικά'
    },
    { 
      name: 'Árabe', 
      code: 'ar', 
      flag: '/assets/Flag_of_Saudi_Arabia_Flat_Round_Corner-128x128.png',
      nativeName: 'العربية'
    },
  ];

  return (
    <section id="languages" className="section bg-gradient-lavender-subtle ambient-shadow-light">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="section-title">Idiomas Disponíveis</h2>
          <p className="section-subtitle">
            Pratique conversação natural com IA especializada em cada idioma
          </p>
        </div>
        
        {/* Main Languages Grid */}
        <div 
          ref={staggerRef}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 max-w-7xl mx-auto mb-16"
        >
          {languages.map((language, index) => (
            <div 
              key={language.code}
              className="group relative bg-gradient-lavender-medium rounded-2xl p-6 cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-medium border border-brand-highlight/10 hover:border-brand-highlight/25 glass-effect"
            >
              {/* Glow effect on hover */}
              <div className="absolute inset-0 rounded-2xl bg-brand-highlight/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
              
              <div className="relative z-10 text-center space-y-4">
                {/* Flag with breathing animation */}
                <div className="relative mx-auto w-20 h-20 animate-breathing">
                  <img 
                    src={language.flag} 
                    alt={`Bandeira ${language.name}`}
                    className="w-full h-full object-cover rounded-xl shadow-soft"
                    loading="lazy"
                  />
                </div>
                
                {/* Language Names */}
                <div className="space-y-1">
                  <h3 className="font-montserrat font-bold text-brand-text group-hover:text-brand-accent transition-colors">
                    {language.name}
                  </h3>
                  <p className="body-small text-brand-text-muted font-medium">
                    {language.nativeName}
                  </p>
                </div>
                
                {/* Stats */}
                <div className="flex items-center justify-center gap-1">
                  <TrendingUp className="w-3 h-3 text-brand-accent" />
                  <span className="text-brand-text-secondary text-xs">{language.learners}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Coming Soon Section */}
        <div className="bg-brand-bg-tertiary/50 rounded-2xl p-8 max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 bg-brand-accent/10 text-brand-accent px-4 py-2 rounded-full text-body-sm font-medium mb-4">
              <Sparkles className="w-4 h-4" />
              Em Breve
            </div>
            <h3 className="text-h3 font-bold text-brand-text mb-2">Novos idiomas chegando</h3>
            <p className="body-small text-brand-text-secondary">
              Expandimos constantemente nossa oferta de idiomas
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {upcomingLanguages.map((language) => (
              <div 
                key={language.code}
                className="bg-brand-bg-tertiary rounded-xl p-4 border border-brand-highlight/10 group hover:border-brand-highlight/20 transition-all duration-300"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 opacity-60 group-hover:opacity-100 transition-opacity">
                    <img 
                      src={language.flag} 
                      alt={`Bandeira ${language.name}`}
                      className="w-full h-full object-cover rounded-lg shadow-soft"
                      loading="lazy"
                    />
                  </div>
                  <div>
                    <h4 className="font-montserrat font-semibold text-brand-text">
                      {language.name}
                    </h4>
                    <p className="body-small text-brand-text-muted">
                      {language.nativeName}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <p className="body-small text-brand-text-muted">
              Quer sugerir um idioma? <a href="mailto:contato@ingvox.com" className="text-brand-accent hover:underline">Entre em contato</a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Languages;