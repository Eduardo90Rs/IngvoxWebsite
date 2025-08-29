import React from 'react';
import { Globe, MessageCircle, Lightbulb, GraduationCap, ArrowRight } from 'lucide-react';
import { useScrollAnimation, useStaggerAnimation } from '../hooks/useScrollAnimation';

const HowItWorks: React.FC = () => {
  const titleRef = useScrollAnimation();
  const stepsRef = useStaggerAnimation(150);
  const ctaRef = useScrollAnimation({ rootMargin: '0px 0px -20px 0px' });

  const steps = [
    {
      icon: Globe,
      title: 'Escolha o idioma',
      description: 'Selecione entre diversos idiomas disponíveis para começar sua jornada.',
      color: 'brand-accent'
    },
    {
      icon: MessageCircle,
      title: 'Comece a conversar',
      description: 'Interaja usando texto ou voz de forma natural, como em uma conversa real.',
      color: 'brand-highlight'
    },
    {
      icon: Lightbulb,
      title: 'A IA entende e corrige',
      description: 'Nossa IA compreende seu nível, corrige erros e estimula seu progresso.',
      color: 'brand-accent'
    },
    {
      icon: GraduationCap,
      title: 'Você aprende naturalmente',
      description: 'Adquira fluência através da prática constante e feedback personalizado.',
      color: 'brand-highlight'
    }
  ];

  return (
    <section 
      id="how-it-works" 
      className="section hero-to-howitworks ambient-shadow-light"
      style={{
        background: 'linear-gradient(135deg, #439172, #E2E8E9)'
      }}
    >
      <div className="container">
        <div ref={titleRef} className="text-center mb-20">
          <h2 className="section-title text-white">Como funciona</h2>
          <p className="section-subtitle text-white/90">
            Quatro passos simples para transformar sua fluência
          </p>
        </div>
        
        <div ref={stepsRef} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <div 
                key={index} 
                className="card card-hover group text-center relative transition-all duration-300 hover:scale-105 bg-brand-bg-tertiary border-2 border-brand-highlight hover:border-brand-highlight/80 p-8 md:p-12 min-h-[360px] flex flex-col justify-center"
              >
                {/* Step Number */}
                <div className="absolute top-3 right-3 w-10 h-10 rounded-full bg-brand-highlight flex items-center justify-center shadow-soft group-hover:scale-110 transition-all duration-300 animate-breathing z-20">
                  <span className="text-white text-body font-bold">{index + 1}</span>
                </div>
                
                <div className="space-y-4">
                  {/* Icon with enhanced animation */}
                  <div className={`w-16 h-16 mx-auto rounded-2xl bg-${step.color}/15 flex items-center justify-center group-hover:bg-${step.color}/25 transition-all duration-300 group-hover:scale-115 relative z-10 shadow-soft`}>
                    <IconComponent className={`h-8 w-8 text-${step.color} transition-all duration-300 group-hover:scale-115 group-hover:drop-shadow-sm`} />
                  </div>
                  
                  <div>
                    <h3 className="text-h3 font-bold mb-3 group-hover:text-brand-highlight transition-all duration-300 relative z-10">
                      {step.title}
                    </h3>
                    <p className="body-small text-brand-text-secondary leading-relaxed relative z-10">
                      {step.description}
                    </p>
                  </div>
                </div>
                
                {/* Connection Arrow - only on larger screens */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:flex absolute right-2 top-1/2 transform -translate-y-1/2 z-10">
                    <div 
                      className="w-8 h-8 rounded-full flex items-center justify-center shadow-soft border border-brand-highlight/10 hover:scale-110 transition-all duration-300"
                      style={{
                        background: 'linear-gradient(135deg, rgba(67, 145, 114, 0.15), rgba(248, 249, 249, 0.95))'
                      }}
                    >
                      <ArrowRight className="w-4 h-4 text-brand-accent" />
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
        
        <div ref={ctaRef} className="mt-20 text-center">
          <a href="#plans" className="btn btn-lavender btn-large group">
            Começar minha jornada
            <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;