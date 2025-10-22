import React from 'react';
import { Link } from 'react-router-dom';

const WhyItWorks: React.FC = () => {
  const reasons = [
    {
      title: "Você não falha. O método que te deram é que falha.",
      description: "Aprender com livros e exercícios repetitivos não reflete o uso real de um idioma. O IngVox traz contextos autênticos."
    },
    {
      title: "A fluência vem da prática real. Conversar. Errar. Evoluir.",
      description: "Assim como uma criança aprende sua língua materna: através da conversação e da correção natural em tempo real."
    },
    {
      title: "Com IA que entende seu nível e seu jeito.",
      description: "Nossa IA se adapta ao seu nível atual e estilo de aprendizado, fornecendo desafios adequados ao seu progresso."
    }
  ];

  return (
    <section id="why-it-works" className="section bg-brand-bg-secondary languages-to-whyitworks ambient-shadow-medium">
      <div className="container">
        <h2 className="section-title accent-underline">Por que Funciona?</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {reasons.map((reason, index) => (
            <div 
              key={index}
              className="relative overflow-hidden group"
            >
              <div className="card h-full flex flex-col p-8 hover:bg-brand-bg-primary transition-all duration-500 border border-brand-highlight/10 group-hover:border-brand-accent/30">
                <h3 className="text-xl md:text-2xl font-bold mb-6 text-brand-text font-montserrat leading-tight">{reason.title}</h3>
                <p className="text-brand-text/80 leading-relaxed font-poppins">{reason.description}</p>
                
                <div className="absolute top-0 right-0 h-16 w-16 transform translate-x-8 -translate-y-8">
                  <div className="w-full h-full bg-brand-highlight opacity-20 rounded-full group-hover:bg-brand-accent group-hover:opacity-30 transition-all duration-500"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <Link to="/stores" className="btn btn-lavender">
            Experimentar agora
          </Link>
        </div>
      </div>
    </section>
  );
};

export default WhyItWorks;