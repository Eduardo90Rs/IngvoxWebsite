import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Trash2, Mail, Clock, AlertTriangle, CheckCircle2 } from 'lucide-react';

const DeleteAccount: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#E2E8E9] via-[#E8E4E9] to-[#F8F9F9]">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-gradient-to-r from-[#A899BC] to-[#B9ABCD] shadow-lg">
        <div className="container py-4">
          <div className="flex items-center justify-between">
            <Link 
              to="/" 
              className="flex items-center gap-2 text-white hover:text-white/90 transition-colors"
            >
              <ArrowLeft className="h-5 w-5" />
              <span className="font-poppins">Voltar ao site</span>
            </Link>
            <div className="flex items-center gap-2">
              <Trash2 className="h-6 w-6 text-white/90" />
              <h1 className="font-montserrat text-2xl font-bold text-white">
                Exclusão de Conta
              </h1>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container py-12">
        <div className="max-w-4xl mx-auto bg-white/95 rounded-2xl shadow-xl p-8 md:p-12">
          
          {/* Warning Box */}
          <div className="bg-red-50 border-l-4 border-red-400 p-6 mb-8 rounded-r-lg">
            <div className="flex items-start">
              <AlertTriangle className="h-6 w-6 text-red-400 mt-0.5 mr-3 flex-shrink-0" />
              <div>
                <h3 className="font-montserrat text-lg font-semibold text-red-800 mb-2">
                  Atenção: Esta ação é irreversível
                </h3>
                <p className="text-red-700 leading-relaxed">
                  A exclusão da sua conta removerá permanentemente todos os seus dados do IngVox. 
                  Esta ação não pode ser desfeita e você perderá acesso ao seu histórico de aprendizado, 
                  conversas e progresso.
                </p>
              </div>
            </div>
          </div>

          {/* Introduction */}
          <section className="mb-10">
            <h2 className="font-montserrat text-2xl font-bold text-[#222539] mb-4">
              Solicitação de Exclusão de Conta
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Para solicitar a exclusão permanente da sua conta e todos os dados pessoais associados 
              ao IngVox, siga as instruções abaixo. Processamos todas as solicitações de acordo com 
              a Lei Geral de Proteção de Dados (LGPD) e regulamentações internacionais de privacidade.
            </p>
          </section>

          {/* How to Request */}
          <section className="mb-10">
            <h2 className="font-montserrat text-2xl font-bold text-[#222539] mb-6">
              Como Solicitar a Exclusão
            </h2>
            
            <div className="bg-[#A899BC]/10 border border-[#A899BC]/20 rounded-xl p-6 mb-6">
              <div className="flex items-start gap-4">
                <div className="bg-[#A899BC] text-white rounded-full p-2 flex-shrink-0">
                  <Mail className="h-5 w-5" />
                </div>
                <div className="flex-1">
                  <h3 className="font-poppins text-lg font-semibold text-[#222539] mb-2">
                    Envie um email para:
                  </h3>
                  <div className="bg-white/80 border border-[#A899BC]/30 rounded-lg p-4 mb-4">
                    <p className="font-poppins text-lg font-bold text-[#A899BC] mb-1">
                      support@ingvox.com
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid gap-4 mb-6">
              <div className="flex items-start gap-3">
                <div className="bg-[#A899BC] text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">
                  1
                </div>
                <div>
                  <p className="font-poppins font-semibold text-[#222539] mb-1">
                    Assunto do email:
                  </p>
                  <p className="text-gray-700 bg-gray-50 px-3 py-2 rounded border font-mono">
                    Solicitação de Exclusão de Conta
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="bg-[#A899BC] text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">
                  2
                </div>
                <div>
                  <p className="font-poppins font-semibold text-[#222539] mb-1">
                    Incluir no email:
                  </p>
                  <ul className="text-gray-700 space-y-1">
                    <li>• Seu email cadastrado no app</li>
                    <li>• Confirmação de que deseja excluir permanentemente a conta</li>
                    <li>• Motivo da exclusão (opcional)</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* What will be deleted */}
          <section className="mb-10">
            <h2 className="font-montserrat text-2xl font-bold text-[#222539] mb-6">
              Dados que serão excluídos
            </h2>
            
            <div className="grid gap-4">
              <div className="flex items-start gap-3 p-4 bg-red-50 rounded-lg border border-red-200">
                <CheckCircle2 className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-poppins font-semibold text-[#222539] mb-1">
                    Dados de Perfil e Autenticação
                  </p>
                  <p className="text-gray-600 text-sm">
                    Nome, email, senha, foto de perfil, preferências de idioma
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 bg-red-50 rounded-lg border border-red-200">
                <CheckCircle2 className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-poppins font-semibold text-[#222539] mb-1">
                    Histórico de Conversas com IA
                  </p>
                  <p className="text-gray-600 text-sm">
                    Todas as conversas, exercícios realizados, correções e feedback
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 bg-red-50 rounded-lg border border-red-200">
                <CheckCircle2 className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-poppins font-semibold text-[#222539] mb-1">
                    Preferências de Aprendizado
                  </p>
                  <p className="text-gray-600 text-sm">
                    Configurações personalizadas, nível de proficiência, objetivos
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 bg-red-50 rounded-lg border border-red-200">
                <CheckCircle2 className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-poppins font-semibold text-[#222539] mb-1">
                    Dados de Assinatura
                  </p>
                  <p className="text-gray-600 text-sm">
                    Informações de pagamento, histórico de assinatura, faturas
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Timeline */}
          <section className="mb-10">
            <h2 className="font-montserrat text-2xl font-bold text-[#222539] mb-6">
              Prazo de Processamento
            </h2>
            
            <div className="bg-blue-50 border-l-4 border-blue-400 p-6 rounded-r-lg">
              <div className="flex items-start gap-3">
                <Clock className="h-6 w-6 text-blue-500 mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="font-poppins text-lg font-semibold text-blue-800 mb-2">
                    30 dias úteis
                  </h3>
                  <p className="text-blue-700 leading-relaxed mb-3">
                    Sua solicitação será processada em até 30 dias úteis após o recebimento e 
                    confirmação da sua identidade.
                  </p>
                  <p className="text-blue-700 leading-relaxed text-sm">
                    Você receberá uma confirmação por email quando a exclusão for concluída.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Process Steps */}
          <section className="mb-10">
            <h2 className="font-montserrat text-2xl font-bold text-[#222539] mb-6">
              Processo de Exclusão
            </h2>
            
            <div className="space-y-4">
              <div className="flex items-start gap-4 p-4 bg-[#A899BC]/5 rounded-lg">
                <div className="bg-[#A899BC] text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold flex-shrink-0">
                  1
                </div>
                <div>
                  <p className="font-poppins font-semibold text-[#222539] mb-1">
                    Recebimento da Solicitação
                  </p>
                  <p className="text-gray-700 text-sm">
                    Recebemos seu email e iniciamos o processo de verificação
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-[#A899BC]/5 rounded-lg">
                <div className="bg-[#A899BC] text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold flex-shrink-0">
                  2
                </div>
                <div>
                  <p className="font-poppins font-semibold text-[#222539] mb-1">
                    Confirmação de Identidade
                  </p>
                  <p className="text-gray-700 text-sm">
                    Verificamos sua identidade para garantir a segurança da solicitação
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-[#A899BC]/5 rounded-lg">
                <div className="bg-[#A899BC] text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold flex-shrink-0">
                  3
                </div>
                <div>
                  <p className="font-poppins font-semibold text-[#222539] mb-1">
                    Exclusão dos Dados
                  </p>
                  <p className="text-gray-700 text-sm">
                    Removemos permanentemente todos os seus dados de nossos sistemas
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-green-50 rounded-lg border border-green-200">
                <div className="bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold flex-shrink-0">
                  4
                </div>
                <div>
                  <p className="font-poppins font-semibold text-[#222539] mb-1">
                    Confirmação Final
                  </p>
                  <p className="text-gray-700 text-sm">
                    Enviamos uma confirmação por email de que a exclusão foi concluída
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Contact Information */}
          <section className="mb-10">
            <h2 className="font-montserrat text-2xl font-bold text-[#222539] mb-6">
              Precisa de Ajuda?
            </h2>
            
            <div className="bg-[#A899BC]/10 rounded-xl p-6">
              <p className="text-gray-700 leading-relaxed mb-4">
                Se você tiver dúvidas sobre o processo de exclusão de conta ou precisar de 
                assistência, entre em contato conosco:
              </p>
              
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-[#A899BC]" />
                <div>
                  <p className="font-poppins font-semibold text-[#222539]">
                    Email de Suporte:
                  </p>
                  <a 
                    href="mailto:support@ingvox.com" 
                    className="text-[#A899BC] hover:text-[#A899BC]/80 font-poppins font-medium transition-colors"
                  >
                    support@ingvox.com
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* Legal Notice */}
          <section className="border-t border-[#A899BC]/20 pt-8">
            <p className="text-sm text-gray-600 leading-relaxed text-center">
              Este processo de exclusão de conta está em conformidade com a Lei Geral de 
              Proteção de Dados (LGPD), GDPR e outras regulamentações de privacidade aplicáveis. 
              Para mais informações sobre nossos práticas de privacidade, consulte nossa{' '}
              <Link 
                to="/privacy" 
                className="text-[#A899BC] hover:text-[#A899BC]/80 transition-colors underline"
              >
                Política de Privacidade
              </Link>.
            </p>
          </section>
        </div>
      </main>
    </div>
  );
};

export default DeleteAccount;