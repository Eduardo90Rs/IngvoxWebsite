import React from 'react';
import { MessageSquare, Mic, Star } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="pt-32 pb-20 md:pt-40 md:pb-32 bg-light-cream">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0 md:pr-12">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-deep-dark-blue">
              Desbrave o mundo. Uma conversa por vez.
            </h1>
            
            <p className="text-xl md:text-2xl text-dark-bluish-gray mb-8 leading-relaxed">
              Aprenda idiomas com a IA que conversa com você.
            </p>
            
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <a href="#plans" className="btn btn-primary text-lg px-8 py-4">
                Ativar acesso gratuito por 7 dias
              </a>
              
              <div className="flex items-center">
                <div className="flex -space-x-2">
                  {[1, 2, 3].map(i => (
                    <div key={i} className="w-10 h-10 rounded-full bg-golden-beige/30 border-2 border-light-cream flex items-center justify-center overflow-hidden">
                      <img 
                        src={`https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&dpr=1`} 
                        alt="User" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </div>
                <div className="ml-3">
                  <div className="flex items-center">
                    {[1, 2, 3, 4, 5].map(i => (
                      <Star key={i} size={16} className="text-golden-beige fill-current" />
                    ))}
                  </div>
                  <p className="text-sm text-dark-bluish-gray">+10.000 usuários</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="md:w-1/2 relative">
            <div className="bg-white rounded-2xl shadow-xl p-6 max-w-md mx-auto transform transition-all hover:-translate-y-1 hover:shadow-2xl duration-300">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-royal-blue/20 flex items-center justify-center">
                  <MessageSquare className="h-5 w-5 text-royal-blue" />
                </div>
                <div>
                  <h3 className="font-semibold">Conversa em Inglês</h3>
                  <p className="text-sm text-dark-bluish-gray">Nível: Intermediário</p>
                </div>
              </div>
              
              <div className="border-l-4 border-golden-beige/40 pl-4 py-2 mb-4">
                <p className="text-dark-bluish-gray italic">How was your weekend? Did you do anything interesting?</p>
              </div>
              
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-soft-lilac/20 flex items-center justify-center">
                  <Mic className="h-5 w-5 text-soft-lilac" />
                </div>
                <div className="flex-1 bg-soft-lilac/10 rounded-xl p-3">
                  <p className="text-gray-700">I visit my parents in the country. We eat lunch together.</p>
                </div>
              </div>
              
              <div className="border-l-4 border-green-400 pl-4 py-2 mb-4 bg-green-50 rounded-r-lg">
                <p className="text-gray-700">Ótimo! Algumas correções:</p>
                <p className="text-green-700 font-medium">"I <span className="underline">visited</span> my parents in the <span className="underline">countryside</span>. We <span className="underline">ate</span> lunch together."</p>
                <p className="text-sm text-gray-600 mt-1">Lembre-se de usar o tempo passado!</p>
              </div>
              
              <div className="flex justify-center mt-4">
                <div className="bg-blue-100 text-blue-600 rounded-full px-4 py-2 text-sm animate-pulse">
                  IA processando sua resposta...
                </div>
              </div>
            </div>
            
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-purple-200 rounded-full opacity-70 blur-xl z-0"></div>
            <div className="absolute -top-10 -left-10 w-32 h-32 bg-blue-200 rounded-full opacity-70 blur-xl z-0"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;