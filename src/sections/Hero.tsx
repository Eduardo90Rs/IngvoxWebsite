import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="section bg-gradient-hero-bg min-h-screen flex items-center section-fade-bottom">
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
              <a href="#plans" className="btn btn-lavender btn-large group">
                Começar
                <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>
          
          {/* Mockup Demo Column */}
          <div className="lg:col-span-7 relative">
            <div className="max-w-sm mx-auto">
              {/* Mockup Image */}
              <div className="relative overflow-hidden">
                <img
                  src="/assets/Mockup.png"
                  alt="IngVox App Interface Mockup"
                  className="w-full h-auto rounded-2xl shadow-soft transition-all duration-300 hover:scale-105"
                  loading="lazy"
                />
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