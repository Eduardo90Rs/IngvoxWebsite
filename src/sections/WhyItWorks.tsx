import React from 'react';

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
    <section className="section bg-light-cream">
      <div className="container">
        <h2 className="section-title">Por que Funciona?</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {reasons.map((reason, index) => (
            <div 
              key={index}
              className="relative overflow-hidden"
            >
              <div className="card h-full flex flex-col p-8 bg-white hover:bg-soft-lilac/20 transition-all duration-500">
                <h3 className="text-xl md:text-2xl font-bold mb-4 text-deep-dark-blue">{reason.title}</h3>
                <p className="text-dark-bluish-gray leading-relaxed">{reason.description}</p>
                
                <div className="absolute top-0 right-0 h-16 w-16 transform translate-x-8 -translate-y-8">
                  <div className="w-full h-full bg-soft-lilac opacity-20 rounded-full"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <a href="#plans" className="btn btn-primary">
            Experimenter agora
          </a>
        </div>
      </div>
    </section>
  );
};

export default WhyItWorks;