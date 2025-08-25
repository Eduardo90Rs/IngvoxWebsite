import { motion } from 'framer-motion';
import { Eye, EyeOff, Lock, CheckCircle, ArrowLeft, Loader2 } from 'lucide-react';
import { usePasswordReset } from '../hooks/usePasswordReset';
import PasswordStrengthIndicator from './PasswordStrengthIndicator';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../lib/supabase';

const ResetPassword: React.FC = () => {
  const navigate = useNavigate();
  const {
    passwords,
    errors,
    loading,
    success,
    tokenValid,
    showPassword,
    handlePasswordChange,
    handleConfirmPasswordChange,
    togglePasswordVisibility,
    handleSubmit,
    isFormValid,
    getPasswordStrength
  } = usePasswordReset();

  // Verificar se Supabase está configurado
  const isSupabaseConfigured = !(supabase as typeof supabase & { __notConfigured?: boolean }).__notConfigured;
  
  if (!isSupabaseConfigured && import.meta.env.PROD) {
    return (
      <div className="min-h-screen bg-brand-bg-primary flex items-center justify-center p-4">
        <div className="bg-red-50 border border-red-200 rounded-xl p-8 max-w-md">
          <h1 className="text-xl font-bold text-red-800 mb-4">Erro de Configuração</h1>
          <p className="text-red-700 mb-4">
            O sistema de recuperação de senha não está configurado corretamente.
          </p>
          <p className="text-sm text-red-600">
            Por favor, entre em contato com o suporte técnico.
          </p>
          <div className="mt-4 p-3 bg-red-100 rounded text-xs font-mono text-red-800">
            Erro: Variáveis de ambiente não configuradas
          </div>
        </div>
      </div>
    );
  }

  // Não renderizar nada até validar o token
  if (!tokenValid) {
    return (
      <div className="min-h-screen bg-brand-bg-primary flex items-center justify-center p-4">
        <div className="bg-brand-bg-secondary rounded-xl p-8 max-w-md text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-brand-accent mx-auto mb-4"></div>
          <p className="text-brand-text">Validando token...</p>
        </div>
      </div>
    );
  }

  // Estado de sucesso
  if (success) {
    return (
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
            Senha Alterada!
          </motion.h2>
          
          {/* Mensagem principal */}
          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="text-brand-text/70 mb-8 font-poppins leading-relaxed"
          >
            Sua senha foi alterada com sucesso. 
            Você já pode voltar ao aplicativo IngVox e fazer login com sua nova senha.
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
    );
  }

  const passwordStrength = getPasswordStrength(passwords.password);
  const isDevelopment = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1';

  return (
    <>
      {/* Meta tags para SEO */}
      <title>Alterar Senha - IngVox</title>
      <meta name="robots" content="noindex, nofollow" />
      
      <div className="min-h-screen bg-brand-bg-primary flex items-center justify-center p-4">
        {/* Aviso de desenvolvimento */}
        {isDevelopment && (
          <div className="fixed top-4 left-4 right-4 z-50">
            <div className="bg-yellow-100 border border-yellow-400 text-yellow-800 px-4 py-3 rounded-lg text-center">
              <strong>Modo Desenvolvimento:</strong> Esta página normalmente requer um token válido do email. 
              Em produção, só funciona via link do email.
            </div>
          </div>
        )}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="w-full max-w-md"
        >
          <div className="bg-brand-bg-secondary rounded-2xl shadow-soft p-8">
            {/* Header */}
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-center mb-8"
            >
              <div className="mx-auto w-16 h-16 bg-gradient-to-br from-brand-highlight to-brand-accent rounded-full flex items-center justify-center mb-6">
                <Lock className="w-8 h-8 text-white" />
              </div>
              
              <h1 className="text-2xl font-bold text-brand-text mb-2 font-montserrat">
                Criar Nova Senha
              </h1>
              
              <p className="text-gray-600 text-sm">
                Digite sua nova senha abaixo. Certifique-se de que seja segura.
              </p>
            </motion.div>

            {/* Formulário */}
            <motion.form
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              onSubmit={handleSubmit}
              className="space-y-6"
            >
              {/* Campo Nova Senha */}
              <div className="space-y-2">
                <label htmlFor="password" className="block text-sm font-medium text-brand-text">
                  Nova Senha
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    id="password"
                    value={passwords.password}
                    onChange={(e) => handlePasswordChange(e.target.value)}
                    className="w-full px-4 py-3 pr-12 border border-gray-200 rounded-xl focus:ring-2 focus:ring-brand-accent focus:border-transparent transition-all duration-200 bg-white"
                    placeholder="Digite sua nova senha"
                    disabled={loading}
                  />
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    type="button"
                    onClick={togglePasswordVisibility}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-brand-accent transition-colors duration-200"
                    disabled={loading}
                  >
                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </motion.button>
                </div>
                
                {/* Indicador de força da senha */}
                <PasswordStrengthIndicator 
                  password={passwords.password} 
                  strength={passwordStrength} 
                />
              </div>

              {/* Campo Confirmar Senha */}
              <div className="space-y-2">
                <label htmlFor="confirmPassword" className="block text-sm font-medium text-brand-text">
                  Confirmar Nova Senha
                </label>
                <input
                  type={showPassword ? "text" : "password"}
                  id="confirmPassword"
                  value={passwords.confirmPassword}
                  onChange={(e) => handleConfirmPasswordChange(e.target.value)}
                  className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-brand-accent focus:border-transparent transition-all duration-200 bg-white ${
                    errors.confirmPassword 
                      ? 'border-red-300 focus:ring-red-500' 
                      : 'border-gray-200'
                  }`}
                  placeholder="Confirme sua nova senha"
                  disabled={loading}
                />
                {errors.confirmPassword && (
                  <motion.p
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-sm text-red-600"
                  >
                    {errors.confirmPassword}
                  </motion.p>
                )}
              </div>

              {/* Erro geral */}
              {errors.general && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="p-4 bg-red-50 border border-red-200 rounded-xl"
                >
                  <p className="text-sm text-red-600 text-center">{errors.general}</p>
                </motion.div>
              )}

              {/* Botão Submit */}
              <motion.button
                whileHover={isFormValid() && !loading ? { scale: 1.02 } : {}}
                whileTap={isFormValid() && !loading ? { scale: 0.98 } : {}}
                type="submit"
                disabled={!isFormValid() || loading}
                className={`w-full py-4 rounded-xl font-medium transition-all duration-300 flex items-center justify-center space-x-2 ${
                  isFormValid() && !loading
                    ? 'bg-gradient-to-r from-brand-accent to-green-500 hover:from-green-500 hover:to-brand-accent text-white shadow-lg hover:shadow-xl'
                    : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                }`}
              >
                {loading ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    <span>Alterando senha...</span>
                  </>
                ) : (
                  <span>Alterar Senha</span>
                )}
              </motion.button>

              {/* Link voltar */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="button"
                onClick={() => navigate('/')}
                className="w-full py-3 text-brand-highlight hover:text-brand-accent transition-colors duration-200 flex items-center justify-center space-x-2"
                disabled={loading}
              >
                <ArrowLeft size={16} />
                <span>Voltar ao início</span>
              </motion.button>
            </motion.form>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default ResetPassword;