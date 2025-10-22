import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../sections/Footer';

const Stores: React.FC = () => {
  return (
    <div className="min-h-screen bg-brand-bg-primary">
      <Navbar />

      <section className="section min-h-screen flex items-center justify-center bg-gradient-hero-bg">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            {/* Header */}
            <div className="mb-16">
              <h1 className="display text-brand-accent mb-6">
                Baixe o IngVox
              </h1>
              <p className="body-large text-brand-text-secondary max-w-2xl mx-auto">
                Comece sua jornada de aprendizado de idiomas hoje mesmo. Escolha sua plataforma:
              </p>
            </div>

            {/* Store Logos */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
              {/* Apple Store */}
              <div className="card card-hover p-8 text-center transition-all duration-300 hover:scale-105">
                <a
                  href="https://apps.apple.com/br/app/ingvox/id6753187230"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <img
                    src="/assets/stores/Applelogo.png"
                    alt="Download na App Store"
                    className="w-full max-w-[280px] mx-auto mb-4 transition-transform duration-300 hover:scale-110"
                  />
                  <p className="body text-brand-text-secondary font-medium">
                    Disponível na App Store
                  </p>
                </a>
              </div>

              {/* Google Play */}
              <div className="card p-8 text-center relative opacity-60">
                <div className="relative">
                  <img
                    src="/assets/stores/Googleplaylogo.png"
                    alt="Em breve no Google Play"
                    className="w-full max-w-[280px] mx-auto mb-4 grayscale"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-brand-highlight text-white px-6 py-3 rounded-full shadow-soft">
                      <p className="body-small font-medium">Em breve</p>
                    </div>
                  </div>
                </div>
                <p className="body text-brand-text-muted mt-4">
                  Logo disponível no Google Play
                </p>
              </div>
            </div>

            {/* Additional Info */}
            <div className="mt-16 pt-12 border-t border-brand-highlight/10">
              <p className="body-large text-brand-text-secondary">
                Aprenda idiomas com IA que conversa com você naturalmente
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Stores;
