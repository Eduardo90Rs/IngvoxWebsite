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
    <section id="how-it-works" className="section bg-brand-bg-secondary">
      <div className="container-narrow">
        <div ref={titleRef} className="text-center mb-20">
          <h2 className="section-title">Como funciona</h2>
          <p className="section-subtitle">
            Quatro passos simples para transformar sua fluência
          </p>
        </div>
        
        <div ref={stepsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <div 
                key={index} 
                className="card card-hover group text-center relative transition-all duration-300 hover:scale-105"
              >
                {/* Step Number */}
                <div className="absolute -top-3 -left-3 w-6 h-6 bg-brand-accent rounded-full flex items-center justify-center">
                  <span className="text-white text-body-sm font-bold">{index + 1}</span>
                </div>
                
                <div className="space-y-4">
                  {/* Icon with subtle animation */}
                  <div className={`w-16 h-16 mx-auto rounded-2xl bg-${step.color}/10 flex items-center justify-center group-hover:bg-${step.color}/20 transition-all duration-300 group-hover:scale-110`}>
                    <IconComponent className={`h-8 w-8 text-${step.color} transition-all duration-300 group-hover:scale-110`} />
                  </div>
                  
                  <div>
                    <h3 className="text-h3 font-bold mb-3 group-hover:text-brand-accent transition-colors duration-300">
                      {step.title}
                    </h3>
                    <p className="body-small text-brand-text-secondary leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
                
                {/* Connection Arrow - only on larger screens */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:flex absolute -right-4 top-1/2 transform -translate-y-1/2 z-10">
                    <div className="w-8 h-8 bg-brand-bg-primary rounded-full flex items-center justify-center shadow-subtle">
                      <ArrowRight className="w-4 h-4 text-brand-accent" />
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
        
        <div ref={ctaRef} className="mt-20 text-center">
          <a href="#plans" className="btn btn-primary btn-large group">
            Começar minha jornada
            <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
          </a>
          <p className="body-small text-brand-text-muted mt-4">
            Teste grátis por 7 dias • Sem compromisso
          </p>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;