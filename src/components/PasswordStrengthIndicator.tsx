import { motion } from 'framer-motion';
import { Check, X } from 'lucide-react';

interface PasswordStrengthIndicatorProps {
  password: string;
  strength: { score: number; feedback: string[] };
}

const PasswordStrengthIndicator: React.FC<PasswordStrengthIndicatorProps> = ({ 
  password, 
  strength 
}) => {
  const getStrengthColor = (score: number) => {
    if (score >= 100) return 'from-brand-accent to-green-500';
    if (score >= 75) return 'from-yellow-500 to-brand-accent';
    if (score >= 50) return 'from-orange-500 to-yellow-500';
    return 'from-red-500 to-orange-500';
  };

  const getStrengthText = (score: number) => {
    if (score >= 100) return 'Muito forte';
    if (score >= 75) return 'Forte';
    if (score >= 50) return 'Moderada';
    return 'Fraca';
  };

  const requirements = [
    { test: /.{8,}/, message: 'Mínimo 8 caracteres' },
    { test: /[A-Z]/, message: 'Uma letra maiúscula' },
    { test: /[0-9]/, message: 'Um número' },
    { test: /[^A-Za-z0-9]/, message: 'Um caractere especial' }
  ];

  if (!password) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="mt-4 space-y-3"
    >
      {/* Barra de força */}
      <div className="space-y-2">
        <div className="flex justify-between items-center">
          <span className="text-sm font-medium text-brand-text">
            Força da senha
          </span>
          <span className="text-sm font-medium text-brand-highlight">
            {getStrengthText(strength.score)}
          </span>
        </div>
        
        <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${strength.score}%` }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className={`h-full bg-gradient-to-r ${getStrengthColor(strength.score)} transition-all duration-500`}
          />
        </div>
      </div>

      {/* Lista de requisitos */}
      <div className="space-y-2">
        <p className="text-sm font-medium text-brand-text">Requisitos:</p>
        <div className="grid gap-2">
          {requirements.map((req, index) => {
            const isValid = req.test.test(password);
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center space-x-2"
              >
                <motion.div
                  animate={{
                    scale: isValid ? 1.1 : 1,
                    rotate: isValid ? 360 : 0
                  }}
                  transition={{ duration: 0.3 }}
                  className={`flex items-center justify-center w-4 h-4 rounded-full ${
                    isValid 
                      ? 'bg-brand-accent text-white' 
                      : 'bg-gray-200 text-gray-400'
                  }`}
                >
                  {isValid ? (
                    <Check size={10} />
                  ) : (
                    <X size={10} />
                  )}
                </motion.div>
                <span className={`text-sm ${
                  isValid ? 'text-brand-accent font-medium' : 'text-gray-500'
                }`}>
                  {req.message}
                </span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
};

export default PasswordStrengthIndicator;