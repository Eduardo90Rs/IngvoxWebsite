import { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';
import { useNavigate } from 'react-router-dom';

interface PasswordState {
  password: string;
  confirmPassword: string;
}

interface ValidationErrors {
  password: string[];
  confirmPassword: string;
  general: string;
}

interface PasswordStrength {
  score: number;
  feedback: string[];
}

export const usePasswordReset = () => {
  const navigate = useNavigate();
  const [passwords, setPasswords] = useState<PasswordState>({
    password: '',
    confirmPassword: ''
  });
  const [errors, setErrors] = useState<ValidationErrors>({
    password: [],
    confirmPassword: '',
    general: ''
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [tokenValid, setTokenValid] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  // Validação do token na URL
  useEffect(() => {
    const checkToken = async () => {
      const hashParams = new URLSearchParams(window.location.hash.substring(1));
      const accessToken = hashParams.get('access_token');
      const type = hashParams.get('type');

      // Para desenvolvimento - permite acesso sem token se estiver em localhost
      const isDevelopment = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1';
      
      if (!accessToken || type !== 'recovery') {
        if (isDevelopment) {
          // Em desenvolvimento, permite acesso para teste
          setTokenValid(true);
          return;
        }
        // Token inválido - redireciona para home
        navigate('/', { replace: true });
        return;
      }

      try {
        // Verifica se o token é válido no Supabase
        const { data, error } = await supabase.auth.getUser(accessToken);
        if (error || !data.user) {
          navigate('/', { replace: true });
          return;
        }
        
        setTokenValid(true);
      } catch {
        navigate('/', { replace: true });
      }
    };

    checkToken();
  }, [navigate]);

  // Validação da força da senha
  const getPasswordStrength = (password: string): PasswordStrength => {
    let score = 0;
    const feedback: string[] = [];

    const requirements = [
      { test: /.{8,}/, message: 'Mínimo 8 caracteres' },
      { test: /[A-Z]/, message: 'Uma letra maiúscula' },
      { test: /[0-9]/, message: 'Um número' },
      { test: /[^A-Za-z0-9]/, message: 'Um caractere especial' }
    ];

    requirements.forEach(req => {
      if (req.test.test(password)) {
        score += 25;
      } else {
        feedback.push(req.message);
      }
    });

    return { score, feedback };
  };

  // Validação em tempo real
  const validatePassword = (password: string): string[] => {
    const { feedback } = getPasswordStrength(password);
    return feedback;
  };

  const validateConfirmPassword = (password: string, confirmPassword: string): string => {
    if (!confirmPassword) return '';
    return password !== confirmPassword ? 'As senhas não coincidem' : '';
  };

  // Handlers
  const handlePasswordChange = (password: string) => {
    setPasswords(prev => ({ ...prev, password }));
    setErrors(prev => ({
      ...prev,
      password: validatePassword(password),
      confirmPassword: validateConfirmPassword(password, prev.confirmPassword)
    }));
  };

  const handleConfirmPasswordChange = (confirmPassword: string) => {
    setPasswords(prev => ({ ...prev, confirmPassword }));
    setErrors(prev => ({
      ...prev,
      confirmPassword: validateConfirmPassword(passwords.password, confirmPassword)
    }));
  };

  const togglePasswordVisibility = () => {
    setShowPassword(prev => !prev);
  };

  // Submissão do formulário
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const passwordErrors = validatePassword(passwords.password);
    const confirmError = validateConfirmPassword(passwords.password, passwords.confirmPassword);
    
    if (passwordErrors.length > 0 || confirmError) {
      setErrors(prev => ({
        ...prev,
        password: passwordErrors,
        confirmPassword: confirmError
      }));
      return;
    }

    setLoading(true);
    setErrors(prev => ({ ...prev, general: '' }));

    try {
      const { error } = await supabase.auth.updateUser({
        password: passwords.password
      });

      if (error) {
        setErrors(prev => ({
          ...prev,
          general: 'Erro ao atualizar senha. Tente novamente.'
        }));
      } else {
        setSuccess(true);
        // Redireciona para login após 2 segundos
        setTimeout(() => {
          navigate('/login', { replace: true });
        }, 2000);
      }
    } catch {
      setErrors(prev => ({
        ...prev,
        general: 'Erro inesperado. Tente novamente.'
      }));
    } finally {
      setLoading(false);
    }
  };

  const isFormValid = () => {
    return passwords.password && 
           passwords.confirmPassword && 
           errors.password.length === 0 && 
           !errors.confirmPassword;
  };

  return {
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
  };
};