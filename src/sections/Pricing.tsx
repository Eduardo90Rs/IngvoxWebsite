import React, { useState } from 'react';
import { Check } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Pricing: React.FC = () => {
  const [isAnnual, setIsAnnual] = useState(true);
  const navigate = useNavigate();
  
  const plans = [
    {
      name: 'Básico',
      description: 'Para começar sua jornada',
      price: isAnnual ? 29.90 : 39.90,
      period: '/mês',
      billed: isAnnual ? 'R$ 358,80/ano' : 'cobrado mensalmente',
      features: [
        'Conversação ilimitada',
        'Todos os idiomas disponíveis',
        'Correções personalizadas',
        'Acompanhamento de progresso',
        'Tópicos variados de conversação',
      ],
      highlight: false,
      savings: isAnnual ? '25%' : null
    },
    {
      name: 'Premium',
      description: 'Acelere seu aprendizado',
      price: isAnnual ? 24.90 : 34.90,
      period: '/mês',
      billed: isAnnual ? 'R$ 298,80/ano' : 'R$ 104,70 por 3 meses',
      features: [
        'Tudo do plano Básico',
        'Exercícios temáticos',
        'Simulações de situações reais',
        'Relatórios de progresso detalhados',
        'Suporte prioritário',
      ],
      highlight: true,
      savings: isAnnual ? '35%' : '12%'
    },
    {
      name: 'Pro',
      description: 'Fluência sem limites',
      price: isAnnual ? 19.90 : null,
      period: '/mês',
      billed: 'R$ 238,80/ano',
      features: [
        'Tudo do plano Premium',
        'Sessões de conversação 1:1',
        'Análise avançada de pronúncia',
        'Certificados de progresso',
        'Acesso antecipado a novos recursos',
      ],
      highlight: false,
      savings: '50%',
      available: isAnnual
    }
  ];

  const visiblePlans = plans.filter(plan => plan.available !== false);

  return (
    <section id="plans" className="section bg-brand-bg-secondary">
      <div className="container-narrow">
        <div className="text-center mb-16">
          <h2 className="section-title">Escolha seu plano</h2>
          <p className="section-subtitle">
            Comece gratuitamente e escolha o plano ideal para seu aprendizado
          </p>
        </div>
        
        {/* Toggle Switch Clean */}
        <div className="flex justify-center mb-12">
          <div className="bg-brand-bg-tertiary border border-brand-highlight/10 p-1 rounded-2xl inline-flex shadow-subtle">
            <button
              className={`px-6 py-2 rounded-xl text-body-sm font-medium transition-all font-poppins ${
                !isAnnual 
                  ? 'bg-brand-accent text-white shadow-soft' 
                  : 'text-brand-text-secondary hover:text-brand-text'
              }`}
              onClick={() => setIsAnnual(false)}
            >
              Mensal
            </button>
            <button
              className={`px-6 py-2 rounded-xl text-body-sm font-medium transition-all font-poppins relative ${
                isAnnual 
                  ? 'bg-brand-accent text-white shadow-soft' 
                  : 'text-brand-text-secondary hover:text-brand-text'
              }`}
              onClick={() => setIsAnnual(true)}
            >
              Anual
              <span className="absolute -top-2 -right-2 bg-brand-highlight text-white text-xs px-1.5 py-0.5 rounded-full">
                Economize
              </span>
            </button>
          </div>
        </div>
        
        {/* Plans Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {visiblePlans.map((plan, index) => (
            <div 
              key={index}
              className={`card relative ${
                plan.highlight 
                  ? 'card-feature border-brand-accent/20 ring-1 ring-brand-accent/10' 
                  : 'card-hover'
              }`}
            >
              {/* Popular Badge */}
              {plan.highlight && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <div className="bg-brand-accent text-white px-4 py-1 rounded-full text-body-sm font-medium">
                    Mais popular
                  </div>
                </div>
              )}
              
              <div className="p-8">
                {/* Plan Header */}
                <div className="text-center mb-8">
                  <h3 className="text-h3 font-bold mb-2">{plan.name}</h3>
                  <p className="body-small text-brand-text-muted mb-4">{plan.description}</p>
                  
                  {plan.savings && (
                    <div className="inline-flex items-center gap-2 mb-4">
                      <span className="body-small text-brand-accent font-medium">
                        Economize {plan.savings}
                      </span>
                      <div className="w-1 h-1 bg-brand-accent rounded-full"></div>
                    </div>
                  )}
                  
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-brand-text">
                      R$ {plan.price?.toFixed(2).replace('.', ',')}
                    </span>
                    <span className="text-brand-text-secondary">{plan.period}</span>
                  </div>
                  
                  <p className="body-small text-brand-text-muted">{plan.billed}</p>
                </div>
                
                {/* Features List */}
                <div className="mb-8">
                  <ul className="space-y-3">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <div className="flex-shrink-0 w-5 h-5 rounded-full bg-brand-accent/10 flex items-center justify-center mt-0.5">
                          <Check className="h-3 w-3 text-brand-accent" />
                        </div>
                        <span className="text-brand-text-secondary text-body">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                {/* CTA Button */}
                <button
                  onClick={() => navigate('/stores')}
                  className={`btn w-full ${
                    plan.highlight
                      ? 'btn-lavender'
                      : 'btn-secondary'
                  }`}
                >
                  {index === 0
                    ? 'Começar Básico'
                    : plan.highlight
                    ? 'Começar Premium'
                    : 'Começar Pro'}
                </button>
                
                <p className="body-small text-brand-text-muted text-center mt-4">
                  Sem compromisso • Cancele a qualquer momento
                </p>
              </div>
            </div>
          ))}
        </div>
        
        {/* Trust Message */}
        <div className="text-center mt-16 pt-12 border-t border-brand-highlight/10">
          <p className="body-large text-brand-text-secondary">
            30 dias de garantia • Sem anúncios • Dados seguros
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;