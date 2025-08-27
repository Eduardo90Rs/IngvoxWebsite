import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      name: 'Marina Silva',
      role: 'Estudante de Medicina',
      location: 'São Paulo',
      text: 'Depois de tentar vários aplicativos, o IngVox foi o único que realmente melhorou minha fluência. As conversas são naturais e o feedback é sempre construtivo.',
      rating: 5,
      language: 'Inglês',
      timeUsing: '8 meses'
    },
    {
      name: 'Carlos Mendes',
      role: 'Engenheiro de Software',
      location: 'Rio de Janeiro',
      text: 'Me preparando para trabalhar no exterior, o IngVox tem sido essencial. Em 3 meses já tenho confiança para reuniões em inglês.',
      rating: 5,
      language: 'Inglês',
      timeUsing: '3 meses'
    },
    {
      name: 'Juliana Costa',
      role: 'Designer Gráfica',
      location: 'Belo Horizonte',
      text: 'A IA é incrivelmente paciente. Corrige meus erros sem me fazer sentir constrangida. Como ter um professor particular 24/7.',
      rating: 5,
      language: 'Espanhol',
      timeUsing: '6 meses'
    }
  ];

  return (
    <section className="section bg-brand-bg-primary">
      <div className="container-narrow">
        <div className="text-center mb-20">
          <h2 className="section-title">Histórias de sucesso</h2>
          <p className="section-subtitle">
            Descubra como nossos usuários alcançaram fluência com o IngVox
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="card card-hover group"
            >
              <div className="space-y-6">
                {/* Quote */}
                <div className="relative">
                  <Quote className="h-8 w-8 text-brand-accent/20 mb-4" />
                  <p className="body-large text-brand-text leading-relaxed">
                    "{testimonial.text}"
                  </p>
                </div>
                
                {/* Rating */}
                <div className="flex items-center gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-brand-accent fill-current" />
                  ))}
                </div>
                
                {/* Author Info */}
                <div className="pt-4 border-t border-brand-highlight/10">
                  <div className="flex items-start justify-between">
                    <div>
                      <h4 className="font-montserrat font-semibold text-brand-text">
                        {testimonial.name}
                      </h4>
                      <p className="body-small text-brand-text-secondary">
                        {testimonial.role}
                      </p>
                      <p className="body-small text-brand-text-muted">
                        {testimonial.location}
                      </p>
                    </div>
                    
                    <div className="text-right">
                      <div className="body-small text-brand-text-secondary font-medium">
                        {testimonial.language}
                      </div>
                      <div className="body-small text-brand-text-muted">
                        {testimonial.timeUsing}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Social Proof Clean */}
        <div className="mt-20 text-center space-y-6">
          <div className="inline-flex items-center gap-3 bg-brand-bg-tertiary border border-brand-highlight/10 px-6 py-3 rounded-2xl shadow-subtle">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 text-brand-accent fill-current" />
              ))}
            </div>
            <div className="w-px h-4 bg-brand-highlight/20"></div>
            <span className="body-small text-brand-text font-medium">4.9/5</span>
            <span className="body-small text-brand-text-muted">+10.000 avaliações</span>
          </div>
          
          <p className="body-small text-brand-text-muted max-w-md mx-auto">
            Junte-se a milhares de estudantes que já transformaram sua fluência com o IngVox
          </p>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;