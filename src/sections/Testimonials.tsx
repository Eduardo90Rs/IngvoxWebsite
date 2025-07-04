import React from 'react';
import { Star } from 'lucide-react';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      name: 'Marina Silva',
      location: 'São Paulo, SP',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=600',
      text: 'Depois de tentar vários aplicativos, o IngVox foi o único que realmente melhorou minha fluência em inglês. As conversas são tão naturais que esqueço que estou falando com uma IA!',
      stars: 5
    },
    {
      name: 'Carlos Mendes',
      location: 'Rio de Janeiro, RJ',
      image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600',
      text: 'Estou me preparando para uma viagem à Espanha e o IngVox tem sido essencial. Em apenas 2 meses, já consigo manter conversas básicas em espanhol com confiança.',
      stars: 5
    },
    {
      name: 'Juliana Costa',
      location: 'Belo Horizonte, MG',
      image: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=600',
      text: 'O que mais gosto é como a IA corrige meus erros sutilmente, sem me fazer sentir mal. É como ter um professor particular paciente disponível 24/7.',
      stars: 5
    }
  ];

  return (
    <section className="section bg-brand-bg-primary">
      <div className="container">
        <h2 className="section-title accent-underline">O que nossos usuários dizem</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="card card-hover border border-brand-highlight/10"
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-full overflow-hidden mr-4 ring-2 ring-brand-highlight/20">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-bold font-montserrat text-brand-text">{testimonial.name}</h3>
                  <p className="text-sm text-brand-text/70 font-poppins">{testimonial.location}</p>
                </div>
              </div>
              
              <div className="flex mb-4">
                {[...Array(testimonial.stars)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-brand-accent fill-current" />
                ))}
              </div>
              
              <p className="text-brand-text/80 italic font-poppins leading-relaxed">"{testimonial.text}"</p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <div className="inline-flex items-center space-x-2 bg-brand-bg-secondary px-6 py-3 rounded-full">
            <Star className="w-5 h-5 text-brand-accent fill-current" />
            <span className="font-medium text-brand-text font-poppins">4.9/5 baseado em +10.000 avaliações</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;