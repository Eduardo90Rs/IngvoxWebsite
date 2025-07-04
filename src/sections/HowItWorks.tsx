import React from 'react';
import { Globe, MessageCircle, Lightbulb, GraduationCap } from 'lucide-react';

const HowItWorks: React.FC = () => {
  const steps = [
    {
      icon: <Globe className="h-10 w-10 text-brand-accent" />,
      title: 'Escolha o idioma',
      description: 'Selecione entre diversos idiomas disponíveis para começar sua jornada.'
    },
    {
      icon: <MessageCircle className="h-10 w-10 text-brand-highlight" />,
      title: 'Comece a conversar',
      description: 'Interaja usando texto ou voz de forma natural, como em uma conversa real.'
    },
    {
      icon: <Lightbulb className="h-10 w-10 text-brand-accent" />,
      title: 'A IA entende e corrige',
      description: 'Nossa IA compreende seu nível, corrige erros e estimula seu progresso.'
    },
    {
      icon: <GraduationCap className="h-10 w-10 text-brand-highlight" />,
      title: 'Você aprende naturalmente',
      description: 'Adquira fluência através da prática constante e feedback personalizado.'
    }
  ];

  return (
    <section id="how-it-works" className="section bg-brand-bg-secondary">
      <div className="container">
        <h2 className="section-title accent-underline">Como Funciona o IngVox</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className="card card-hover flex flex-col items-center text-center relative"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="mb-6 p-4 rounded-full bg-brand-accent/10">{step.icon}</div>
              <h3 className="text-xl font-bold mb-4 font-montserrat text-brand-text">{step.title}</h3>
              <p className="text-brand-text/80 font-poppins leading-relaxed">{step.description}</p>
              
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2">
                  <svg className="w-8 h-8 text-brand-highlight/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <a href="#plans" className="btn btn-primary">
            Começar Agora
          </a>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;