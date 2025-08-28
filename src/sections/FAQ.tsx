import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'Preciso saber algo antes de começar?',
      answer: 'Não! O IngVox é projetado para todos os níveis, desde iniciantes absolutos até falantes avançados. Nossa IA adapta-se ao seu nível atual e progride junto com você.'
    },
    {
      question: 'Quantos idiomas posso aprender ao mesmo tempo?',
      answer: 'Você pode aprender quantos idiomas quiser simultaneamente! Todos os planos oferecem acesso ilimitado a todos os idiomas disponíveis. Recomendamos focar em 1-2 idiomas para melhores resultados.'
    },
    {
      question: 'Como funciona a IA?',
      answer: 'Nossa IA usa modelos de linguagem avançados treinados especificamente para o ensino de idiomas. Ela identifica seu nível, detecta erros, fornece correções contextualizadas e adapta as conversações para desafiar você progressivamente.'
    },
    {
      question: 'E se eu for iniciante total?',
      answer: 'O IngVox é perfeito para iniciantes! A IA começa com frases simples, vocabulário básico e progride gradualmente. Ela também pode oferecer explicações em português quando necessário.'
    }
  ];

  const toggleFaq = (index: number) => {
    if (openIndex === index) {
      setOpenIndex(null);
    } else {
      setOpenIndex(index);
    }
  };

  return (
    <section id="faq" className="section bg-brand-bg-secondary mission-to-faq ambient-shadow-medium">
      <div className="container max-w-4xl">
        <h2 className="section-title accent-underline">Perguntas Frequentes</h2>
        
        <div className="mt-10 space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="border border-brand-highlight/20 rounded-xl overflow-hidden bg-brand-bg-primary"
            >
              <button
                className="w-full px-6 py-5 text-left flex justify-between items-center focus:outline-none hover:bg-brand-highlight/5 transition-colors font-poppins"
                onClick={() => toggleFaq(index)}
              >
                <h3 className="text-lg font-medium font-montserrat text-brand-text">{faq.question}</h3>
                {openIndex === index ? (
                  <ChevronUp className="h-5 w-5 text-brand-accent" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-brand-accent" />
                )}
              </button>
              
              <div 
                className={`px-6 overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96 pb-6' : 'max-h-0'
                }`}
              >
                <p className="text-brand-text/80 font-poppins leading-relaxed">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-brand-text/70 mb-6 font-poppins">Ainda tem dúvidas?</p>
          <a 
            href="mailto:contato@ingvox.com" 
            className="text-brand-accent hover:text-brand-highlight font-medium font-poppins transition-colors"
          >
            Entre em contato conosco
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;