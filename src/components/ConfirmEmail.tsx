import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

const ConfirmEmail: React.FC = () => {
  return (
    <>
      {/* Meta tags para SEO */}
      <title>Email Confirmado - IngVox</title>
      <meta name="robots" content="noindex, nofollow" />
      
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="min-h-screen bg-brand-bg-primary flex items-center justify-center p-4"
      >
        <div className="bg-brand-bg-secondary rounded-2xl shadow-xl p-8 max-w-md w-full text-center">
          {/* Logo da empresa */}
          <motion.img 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            src="/assets/logos/1.png" 
            alt="IngVox" 
            className="w-32 h-32 mx-auto mb-6 object-contain"
          />
          
          {/* Ícone de sucesso */}
          <motion.div 
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.4, duration: 0.5, type: "spring" }}
            className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6"
          >
            <CheckCircle className="w-10 h-10 text-green-600" />
          </motion.div>
          
          {/* Título */}
          <motion.h2 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-2xl font-bold text-brand-text mb-4 font-montserrat"
          >
            Email Confirmado!
          </motion.h2>
          
          {/* Mensagem principal */}
          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="text-brand-text/70 mb-8 font-poppins leading-relaxed"
          >
            Seu email foi confirmado com sucesso. 
            Você já pode voltar ao aplicativo IngVox e aproveitar todos os recursos disponíveis.
          </motion.p>
          
          {/* Nota informativa */}
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.0 }}
            className="bg-brand-highlight/10 border border-brand-highlight/20 rounded-lg p-4"
          >
            <p className="text-sm text-brand-text/60 font-poppins">
              💡 Esta janela pode ser fechada com segurança.
            </p>
          </motion.div>
        </div>
      </motion.div>
    </>
  );
};

export default ConfirmEmail;