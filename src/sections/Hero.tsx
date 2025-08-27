import React from 'react';
import { MessageSquare, Mic, Star, ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="section bg-gradient-hero-bg min-h-screen flex items-center">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Content Column */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-6">
              <h1 className="display text-brand-accent">
                Desbrave o mundo.
                <br />
                <span className="text-brand-text-secondary">Uma conversa por vez.</span>
              </h1>
              
              <p className="body-large text-brand-text-secondary max-w-lg">
                Aprenda idiomas com a IA que conversa com você naturalmente.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row items-start gap-4">
              <a href="#plans" className="btn btn-primary btn-large group">
                Começar gratuitamente
                <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
              </a>
              
              <div className="flex items-center gap-3">
                <div className="flex -space-x-1">
                  {[1, 2, 3].map(i => (
                    <div key={i} className="w-8 h-8 rounded-full bg-brand-accent/20 border-2 border-brand-bg-primary overflow-hidden">
                      <div className="w-full h-full bg-gradient-to-br from-brand-highlight to-brand-accent opacity-60"></div>
                    </div>
                  ))}
                </div>
                <div className="space-y-1">
                  <div className="flex items-center gap-1">
                    {[1, 2, 3, 4, 5].map(i => (
                      <Star key={i} size={12} className="text-brand-accent fill-current" />
                    ))}
                  </div>
                  <p className="body-small text-brand-text-muted">+10.000 usuários</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Chat Demo Column */}
          <div className="lg:col-span-7 relative">
            <div className="max-w-lg mx-auto">
              {/* Chat Interface */}
              <div className="bg-gradient-lavender-medium rounded-2xl shadow-soft p-8 transition-all duration-300 border border-brand-highlight/15 relative overflow-hidden">
                {/* Header */}
                <div className="flex items-center justify-between pb-4 mb-8 border-b border-brand-highlight/15">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-brand-accent/20 flex items-center justify-center">
                      <MessageSquare className="h-4 w-4 text-brand-accent" />
                    </div>
                    <div>
                      <h3 className="font-montserrat font-semibold text-brand-text text-body">Inglês • Conversação</h3>
                      <p className="body-small text-brand-text-muted">Nível intermediário</p>
                    </div>
                  </div>
                  <div className="accent-dot animate-breathing"></div>
                </div>
                
                {/* Messages */}
                <div className="space-y-6 mb-8">
                  {/* AI Message */}
                  <div className="flex gap-3">
                    <div className="w-6 h-6 rounded-full bg-brand-highlight/20 flex items-center justify-center flex-shrink-0 mt-1">
                      <div className="w-2 h-2 bg-brand-highlight rounded-full"></div>
                    </div>
                    <div className="bg-brand-highlight/10 rounded-2xl rounded-tl-md p-4 max-w-xs">
                      <p className="text-brand-text-secondary text-body">How was your weekend? Did you do anything interesting?</p>
                    </div>
                  </div>
                  
                  {/* User Message */}
                  <div className="flex gap-3 justify-end">
                    <div className="bg-brand-accent/10 rounded-2xl rounded-tr-md p-4 max-w-xs">
                      <p className="text-brand-text text-body">I visit my parents in the country. We eat lunch together.</p>
                    </div>
                    <div className="w-6 h-6 rounded-full bg-brand-accent/20 flex items-center justify-center flex-shrink-0 mt-1">
                      <Mic className="h-3 w-3 text-brand-accent" />
                    </div>
                  </div>
                  
                  {/* AI Correction */}
                  <div className="flex gap-3">
                    <div className="w-6 h-6 rounded-full bg-brand-highlight/20 flex items-center justify-center flex-shrink-0 mt-1">
                      <div className="w-2 h-2 bg-brand-highlight rounded-full"></div>
                    </div>
                    <div className="bg-brand-accent/5 border-l-2 border-brand-accent rounded-2xl rounded-tl-md p-4 max-w-sm">
                      <p className="body-small text-brand-text-secondary mb-2">Ótimo! Pequenas correções:</p>
                      <p className="text-brand-text text-body">
                        "I <span className="text-brand-accent font-medium">visited</span> my parents in the <span className="text-brand-accent font-medium">countryside</span>. We <span className="text-brand-accent font-medium">ate</span> lunch together."
                      </p>
                      <p className="body-small text-brand-text-muted mt-2">💡 Lembre-se do tempo passado!</p>
                    </div>
                  </div>
                </div>
                
                {/* Typing Indicator */}
                <div className="flex items-center justify-center">
                  <div className="bg-brand-highlight/15 rounded-full px-4 py-2 flex items-center gap-2">
                    <div className="flex gap-1">
                      <div className="w-1 h-1 bg-brand-highlight rounded-full animate-pulse"></div>
                      <div className="w-1 h-1 bg-brand-highlight rounded-full animate-pulse" style={{animationDelay: '0.2s'}}></div>
                      <div className="w-1 h-1 bg-brand-highlight rounded-full animate-pulse" style={{animationDelay: '0.4s'}}></div>
                    </div>
                    <span className="body-small text-brand-highlight">IA processando...</span>
                  </div>
                </div>
              </div>
              
              {/* Subtle background elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-brand-highlight/5 rounded-full blur-xl"></div>
              <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-brand-accent/5 rounded-full blur-2xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;