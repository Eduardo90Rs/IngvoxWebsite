import React from 'react';
import { Heart, Users, Sparkles, TrendingUp, Globe, ArrowRight } from 'lucide-react';

const Mission: React.FC = () => {
  const values = [
    {
      icon: Users,
      title: 'Independência',
      description: 'Dominar um novo idioma é conquistar autonomia. Empoderamos você com confiança e autoestima para se expressar sem limites.',
      color: 'brand-accent'
    },
    {
      icon: Heart,
      title: 'Humanização da IA',
      description: 'Tecnologia com alma. Criamos uma experiência calorosa e empática, não apenas funcional.',
      color: 'brand-highlight'
    },
    {
      icon: Sparkles,
      title: 'Curiosidade',
      description: 'A curiosidade de aprender uma nova língua é o que nos motiva a ver o mundo de maneiras diferentes e expandir horizontes.',
      color: 'brand-accent'
    },
    {
      icon: TrendingUp,
      title: 'Evolução contínua',
      description: 'Sempre melhorando. Nossa plataforma evolui constantemente para oferecer a melhor experiência.',
      color: 'brand-highlight'
    },
    {
      icon: Globe,
      title: 'Diversidade cultural',
      description: 'Celebramos as diferenças. Cada idioma é uma porta para uma nova cultura e perspectiva.',
      color: 'brand-accent'
    }
  ];


  return (
    <section className="section bg-brand-highlight pattern-subtle whyitworks-to-mission ambient-shadow-strong relative">
      <div className="container-narrow py-20">
        {/* Logo Card */}
        <div className="flex justify-center mb-6">
          <div className="bg-brand-bg-tertiary/90 backdrop-blur-sm rounded-2xl p-8 shadow-soft border border-[#222539] animate-fade-in-up">
            <img 
              src="/assets/logos/1.png" 
              alt="IngVox Logo" 
              className="h-16 md:h-20 mx-auto transition-all duration-300 hover:scale-110 hover:brightness-110"
              loading="lazy"
            />
          </div>
        </div>

        {/* Mission Statement */}
        <div className="text-center mb-16">
          <h2 className="text-hero font-light text-white mb-8 font-montserrat section-indicator animate-fade-in-up">Nossa Missão</h2>
          <div className="max-w-4xl mx-auto decorative-quote">
            <p className="text-3xl md:text-4xl leading-tight font-montserrat mb-8">
              <span className="font-light text-white/90">Proporcionar fluência linguística real a qualquer pessoa, de forma </span>
              <span className="font-light text-white/90">Proporcionar fluência linguística real a qualquer pessoa, de forma </span>
              <span className="font-bold text-brand-accent animate-fade-in-stagger stagger-1">divertida</span><span className="font-light text-white/90">, </span>
              <span className="font-medium text-white animate-fade-in-stagger stagger-2">tranquila </span>
              <span className="font-light text-white/90">e profundamente </span>
              <span className="font-extrabold text-brand-accent animate-fade-in-stagger stagger-3">personalizada</span><span className="font-light text-white/90">, utilizando inteligência artificial humanizada.</span>
            </p>
          </div>
        </div>

        {/* Core Values */}
        <div className="mb-16">
          <h3 className="text-h2 font-bold text-center text-white mb-12 font-montserrat section-indicator">
            Nossos Valores
          </h3>
          
          {/* Asymmetric Layout: 2 large cards + 3 smaller cards */}
          <div className="space-y-6">
            {/* Top row - 2 large priority cards */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {values.slice(0, 2).map((value, index) => {
                const IconComponent = value.icon;
                return (
                  <div 
                    key={index}
                    className={`card group text-center p-10 relative overflow-hidden hover:animate-lift cursor-pointer transition-all duration-300 animate-fade-in-up stagger-${index + 1} border border-[#222539]`}
                    style={{
                      background: 'linear-gradient(135deg, #F8F9F9, #E2E8E9)'
                    }}
                  >
                    <div 
                      className={`w-20 h-20 mx-auto mb-8 rounded-3xl bg-${value.color}/15 flex items-center justify-center group-hover:bg-${value.color}/25 transition-all duration-300 shadow-medium group-hover:animate-rotate-subtle`}
                      style={{
                        background: 'linear-gradient(135deg, rgba(248, 249, 249, 0.5), rgba(226, 232, 233, 0.5))'
                      }}
                    >
                      <IconComponent className={`h-10 w-10 text-${value.color} transition-all duration-300 group-hover:scale-110`} />
                    </div>
                    <h4 className="font-montserrat font-bold text-brand-text mb-6 text-xl">
                      {value.title}
                    </h4>
                    <p className="body text-brand-text-secondary leading-relaxed">
                      {value.description}
                    </p>
                    {/* Decorative element */}
                    <div className="absolute top-4 right-4 w-2 h-2 bg-brand-accent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                );
              })}
            </div>
            
            {/* Bottom row - 3 smaller cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {values.slice(2).map((value, index) => {
                const IconComponent = value.icon;
                return (
                  <div 
                    key={index + 2}
                    className={`card group text-center p-8 hover:animate-lift cursor-pointer transition-all duration-300 animate-fade-in-up stagger-${index + 3} border border-[#222539]`}
                    style={{
                      background: 'linear-gradient(135deg, #F8F9F9, #E2E8E9)'
                    }}
                  >
                    <div 
                      className={`w-16 h-16 mx-auto mb-6 rounded-2xl bg-${value.color}/15 flex items-center justify-center group-hover:bg-${value.color}/25 transition-all duration-300 shadow-soft group-hover:animate-rotate-subtle`}
                      style={{
                        background: 'linear-gradient(135deg, rgba(248, 249, 249, 0.5), rgba(226, 232, 233, 0.5))'
                      }}
                    >
                      <IconComponent className={`h-8 w-8 text-${value.color} transition-all duration-300 group-hover:scale-110`} />
                    </div>
                    <h4 className="font-montserrat font-semibold text-brand-text mb-4 text-mission-card">
                      {value.title}
                    </h4>
                    <p className="body-small text-brand-text-secondary leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Vision Statement */}
        <div className="vision-dark rounded-3xl p-8 md:p-12 mb-4 text-center relative overflow-hidden animate-fade-in-up">
          {/* Background pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="pattern-subtle w-full h-full"></div>
          </div>
          
          <div className="relative z-10">
            <h3 className="text-h2 font-bold text-white mb-6 font-montserrat section-indicator">
              Nossa Visão
            </h3>
            <p className="text-2xl md:text-3xl text-white/90 leading-relaxed max-w-4xl mx-auto font-poppins font-light">
              Ser o <span className="font-bold text-brand-highlight">tutor de bolso mais respeitado do mundo</span>, reconhecido por transformar 
              estudantes em <span className="font-semibold text-white">comunicadores plurilíngues confiantes</span>.
            </p>
            
            {/* Decorative elements */}
            <div className="mt-6 flex justify-center">
              <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-brand-highlight to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
      {/* Gradient overlay at bottom */}
      <div 
        className="absolute left-0 right-0 pointer-events-none"
        style={{
          bottom: '-10px',
          height: '100px',
          background: 'linear-gradient(to bottom, transparent, #F8F9F9)'
        }}
      />
    </section>
  );
};

export default Mission;