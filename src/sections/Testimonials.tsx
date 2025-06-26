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
    <section className="section bg-white">
      <div className="container">
        <h2 className="section-title">O que nossos usuários dizem</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="card card-hover"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full overflow-hidden mr-3">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-bold">{testimonial.name}</h3>
                  <p className="text-sm text-dark-bluish-gray">{testimonial.location}</p>
                </div>
              </div>
              
              <div className="flex mb-3">
                {[...Array(testimonial.stars)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-golden-beige fill-current" />
                ))}
              </div>
              
              <p className="text-dark-bluish-gray italic">"{testimonial.text}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;