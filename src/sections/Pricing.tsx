import React, { useState } from 'react';
import { Check } from 'lucide-react';

const Pricing: React.FC = () => {
  const [isAnnual, setIsAnnual] = useState(true);
  
  const plans = [
    {
      name: 'Mensal',
      price: isAnnual ? 29.90 : 39.90,
      period: '/mês',
      billed: isAnnual ? 'cobrado anualmente' : 'cobrado mensalmente',
      features: [
        'Conversação ilimitada',
        'Todos os idiomas disponíveis',
        'Correções personalizadas',
        'Acompanhamento de progresso',
        'Tópicos de conversação variados',
      ],
      highlight: false,
      discount: isAnnual ? 'Economize 25%' : null
    },
    {
      name: 'Trimestral',
      price: isAnnual ? 24.90 : 34.90,
      period: '/mês',
      billed: isAnnual ? 'cobrado anualmente' : 'cobrado trimestralmente',
      features: [
        'Conversação ilimitada',
        'Todos os idiomas disponíveis',
        'Correções personalizadas',
        'Acompanhamento de progresso',
        'Tópicos de conversação variados',
        'Exercícios temáticos',
      ],
      highlight: true,
      discount: isAnnual ? 'Economize 30%' : 'Economize 12%'
    },
    {
      name: 'Anual',
      price: isAnnual ? 19.90 : null,
      period: '/mês',
      billed: 'cobrado anualmente',
      features: [
        'Conversação ilimitada',
        'Todos os idiomas disponíveis',
        'Correções personalizadas',
        'Acompanhamento de progresso',
        'Tópicos de conversação variados',
        'Exercícios temáticos',
        'Relatórios detalhados de evolução',
      ],
      highlight: false,
      discount: 'Economize 50%'
    }
  ];

  return (
    <section id="plans" className="section bg-brand-bg-secondary">
      <div className="container">
        <h2 className="section-title accent-underline">Planos e Preços</h2>
        
        <div className="flex justify-center mb-12">
          <div className="bg-brand-highlight/20 p-1 rounded-full inline-flex">
            <button
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all font-poppins ${
                !isAnnual ? 'bg-brand-bg-primary shadow-soft text-brand-text' : 'text-brand-text/70'
              }`}
              onClick={() => setIsAnnual(false)}
            >
              Pagamento Mensal
            </button>
            <button
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all font-poppins ${
                isAnnual ? 'bg-brand-bg-primary shadow-soft text-brand-text' : 'text-brand-text/70'
              }`}
              onClick={() => setIsAnnual(true)}
            >
              Pagamento Anual
            </button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`card relative overflow-hidden ${
                plan.highlight 
                  ? 'border-2 border-brand-accent transform md:-translate-y-4 bg-brand-bg-primary'
                  : 'bg-brand-bg-primary'
              }`}
            >
              {plan.highlight && (
                <div className="absolute top-0 left-0 right-0 bg-brand-accent text-brand-bg-secondary text-center py-2 text-sm font-medium font-poppins">
                  Mais Popular
                </div>
              )}
              
              <div className={`p-6 ${plan.highlight ? 'pt-10' : ''}`}>
                <h3 className="text-xl font-bold mb-2 font-montserrat text-brand-text">{plan.name}</h3>
                
                {plan.discount && (
                  <span className="inline-block bg-brand-accent/20 text-brand-accent text-xs font-semibold px-3 py-1 rounded-full mb-3 font-poppins">
                    {plan.discount}
                  </span>
                )}
                
                <div className="mb-6">
                  <span className="text-4xl font-bold text-brand-text font-montserrat">R$ {plan.price?.toFixed(2).replace('.', ',')}</span>
                  <span className="text-brand-text/70 font-poppins">{plan.period}</span>
                  <div className="text-sm text-brand-text/60 font-poppins">{plan.billed}</div>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <Check className="h-5 w-5 text-brand-accent mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-brand-text/80 font-poppins">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <button 
                  className={`w-full py-3 rounded-full font-medium transition-all duration-300 font-poppins ${
                    plan.highlight 
                      ? 'bg-brand-accent hover:bg-brand-accent/90 text-brand-bg-secondary shadow-soft'
                      : 'bg-brand-highlight/20 hover:bg-brand-highlight/30 text-brand-text'
                  }`}
                >
                  {plan.name === 'Mensal' || plan.name === 'Trimestral' 
                    ? 'Teste grátis por 7 dias' 
                    : 'Assinar Agora'}
                </button>
                
                <p className="text-xs text-center text-brand-text/60 mt-4 font-poppins">
                  Sem surpresas. Cancele quando quiser.
                </p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12 text-brand-text/80 font-poppins">
          <p>Sem surpresas. Sem anúncios. Só fluência.</p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;