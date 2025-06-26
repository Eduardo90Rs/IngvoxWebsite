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
    <section id="plans" className="section bg-light-cream">
      <div className="container">
        <h2 className="section-title">Planos e Preços</h2>
        
        <div className="flex justify-center mb-12">
          <div className="bg-golden-beige/30 p-1 rounded-full inline-flex">
            <button
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                !isAnnual ? 'bg-white shadow-md' : 'text-dark-bluish-gray'
              }`}
              onClick={() => setIsAnnual(false)}
            >
              Pagamento Mensal
            </button>
            <button
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                isAnnual ? 'bg-white shadow-md' : 'text-dark-bluish-gray'
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
                  ? 'border-2 border-royal-blue transform md:-translate-y-4'
                  : ''
              }`}
            >
              {plan.highlight && (
                <div className="absolute top-0 left-0 right-0 bg-royal-blue text-white text-center py-1 text-sm font-medium">
                  Mais Popular
                </div>
              )}
              
              <div className={`p-6 ${plan.highlight ? 'pt-8' : ''}`}>
                <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                
                {plan.discount && (
                  <span className="inline-block bg-forest-green/20 text-forest-green text-xs font-semibold px-2 py-1 rounded-full mb-3">
                    {plan.discount}
                  </span>
                )}
                
                <div className="mb-4">
                  <span className="text-4xl font-bold">R$ {plan.price?.toFixed(2).replace('.', ',')}</span>
                  <span className="text-dark-bluish-gray">{plan.period}</span>
                  <div className="text-sm text-dark-bluish-gray">{plan.billed}</div>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <Check className="h-5 w-5 text-forest-green mr-2 flex-shrink-0" />
                      <span className="text-dark-bluish-gray">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <button 
                  className={`w-full py-3 rounded-lg font-medium ${
                    plan.highlight 
                      ? 'bg-royal-blue hover:bg-deep-dark-blue text-white'
                      : 'bg-golden-beige/30 hover:bg-golden-beige/50 text-deep-dark-blue'
                  }`}
                >
                  {plan.name === 'Mensal' || plan.name === 'Trimestral' 
                    ? 'Teste grátis por 7 dias' 
                    : 'Assinar Agora'}
                </button>
                
                <p className="text-xs text-center text-dark-bluish-gray mt-4">
                  Sem surpresas. Cancele quando quiser.
                </p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-10 text-dark-bluish-gray">
          <p>Sem surpresas. Sem anúncios. Só fluência.</p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;