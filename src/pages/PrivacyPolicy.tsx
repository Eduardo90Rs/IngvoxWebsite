import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Shield, Mail, Phone, MapPin } from 'lucide-react';

const PrivacyPolicy: React.FC = () => {
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
              <Shield className="h-6 w-6 text-white/90" />
              <h1 className="font-montserrat text-2xl font-bold text-white">
                Política de Privacidade
              </h1>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container py-12">
        <div className="max-w-4xl mx-auto bg-white/95 rounded-2xl shadow-xl p-8 md:p-12">
          
          {/* Update Info */}
          <div className="text-center mb-8 pb-6 border-b border-[#A899BC]/20">
            <p className="text-sm text-gray-600 italic">
              Última atualização: 22 de agosto de 2025
            </p>
          </div>

          {/* Section 1 - Introdução */}
          <section className="mb-10">
            <h2 className="font-montserrat text-2xl font-bold text-[#222539] mb-4">
              1. INTRODUÇÃO
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              A IngVox ("nós", "nosso" ou "Empresa") opera o aplicativo IngVox ("Aplicativo"), um tutor inteligente de idiomas que utiliza inteligência artificial para personalizar o aprendizado de línguas estrangeiras. Esta Política de Privacidade informa sobre nossas práticas de coleta, uso, armazenamento e proteção de suas informações pessoais.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Ao usar nosso Aplicativo, você concorda com a coleta e uso de informações de acordo com esta política.
            </p>
          </section>

          {/* Section 2 - Informações que Coletamos */}
          <section className="mb-10">
            <h2 className="font-montserrat text-2xl font-bold text-[#222539] mb-4">
              2. INFORMAÇÕES QUE COLETAMOS
            </h2>
            
            <div className="mb-6">
              <h3 className="font-poppins text-lg font-semibold text-[#A899BC] mb-3">
                2.1 Informações Fornecidas por Você
              </h3>
              <ul className="space-y-2 ml-4">
                <li className="flex items-start">
                  <span className="text-[#A899BC] mr-2">•</span>
                  <span className="text-gray-700"><strong>Dados de Cadastro:</strong> nome, email, telefone, data de nascimento</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#A899BC] mr-2">•</span>
                  <span className="text-gray-700"><strong>Informações de Perfil:</strong> foto, biografia, idioma nativo, idiomas de interesse</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#A899BC] mr-2">•</span>
                  <span className="text-gray-700"><strong>Dados de Aprendizagem:</strong> nível de proficiência, objetivos de aprendizado, áreas de interesse</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#A899BC] mr-2">•</span>
                  <span className="text-gray-700"><strong>Conteúdo do Usuário:</strong> gravações de voz, respostas a exercícios, textos escritos</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#A899BC] mr-2">•</span>
                  <span className="text-gray-700"><strong>Progresso Educacional:</strong> pontuações, lições completadas, tempo de estudo</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#A899BC] mr-2">•</span>
                  <span className="text-gray-700"><strong>Informações de Contato:</strong> quando você nos contata para suporte</span>
                </li>
              </ul>
            </div>

            <div className="mb-6">
              <h3 className="font-poppins text-lg font-semibold text-[#A899BC] mb-3">
                2.2 Informações Coletadas Automaticamente
              </h3>
              <ul className="space-y-2 ml-4">
                <li className="flex items-start">
                  <span className="text-[#A899BC] mr-2">•</span>
                  <span className="text-gray-700"><strong>Dados do Dispositivo:</strong> modelo, sistema operacional, identificadores únicos, configurações de idioma</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#A899BC] mr-2">•</span>
                  <span className="text-gray-700"><strong>Dados de Uso:</strong> lições acessadas, tempo de estudo, frequência de uso, recursos utilizados</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#A899BC] mr-2">•</span>
                  <span className="text-gray-700"><strong>Dados de Desempenho:</strong> padrões de erro, velocidade de resposta, áreas de dificuldade</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#A899BC] mr-2">•</span>
                  <span className="text-gray-700"><strong>Dados de Voz:</strong> análise de pronúncia, entonação e fluência (processados pela IA)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#A899BC] mr-2">•</span>
                  <span className="text-gray-700"><strong>Dados de Localização:</strong> localização aproximada (IP) ou precisa (GPS, se autorizado)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#A899BC] mr-2">•</span>
                  <span className="text-gray-700"><strong>Cookies e Tecnologias Similares:</strong> para melhorar a experiência</span>
                </li>
              </ul>
            </div>

            <div className="mb-6">
              <h3 className="font-poppins text-lg font-semibold text-[#A899BC] mb-3">
                2.3 Informações de Terceiros
              </h3>
              <ul className="space-y-2 ml-4">
                <li className="flex items-start">
                  <span className="text-[#A899BC] mr-2">•</span>
                  <span className="text-gray-700"><strong>Redes Sociais:</strong> se você conectar contas sociais</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#A899BC] mr-2">•</span>
                  <span className="text-gray-700"><strong>Parceiros:</strong> informações de parceiros comerciais</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#A899BC] mr-2">•</span>
                  <span className="text-gray-700"><strong>Outros Usuários:</strong> quando mencionam ou interagem com você</span>
                </li>
              </ul>
            </div>
          </section>

          {/* Section 3 - Como Usamos suas Informações */}
          <section className="mb-10">
            <h2 className="font-montserrat text-2xl font-bold text-[#222539] mb-4">
              3. COMO USAMOS SUAS INFORMAÇÕES
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Utilizamos as informações coletadas para:
            </p>

            <div className="mb-6">
              <h3 className="font-poppins text-lg font-semibold text-[#A899BC] mb-3">
                3.1 Fornecer e Manter o Serviço
              </h3>
              <ul className="space-y-2 ml-4">
                <li className="flex items-start">
                  <span className="text-[#A899BC] mr-2">•</span>
                  <span className="text-gray-700">Criar e gerenciar sua conta</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#A899BC] mr-2">•</span>
                  <span className="text-gray-700">Fornecer funcionalidades do Aplicativo</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#A899BC] mr-2">•</span>
                  <span className="text-gray-700">Processar transações e pagamentos</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#A899BC] mr-2">•</span>
                  <span className="text-gray-700">Comunicar sobre o serviço</span>
                </li>
              </ul>
            </div>

            <div className="mb-6">
              <h3 className="font-poppins text-lg font-semibold text-[#A899BC] mb-3">
                3.2 Melhorar o Serviço
              </h3>
              <ul className="space-y-2 ml-4">
                <li className="flex items-start">
                  <span className="text-[#A899BC] mr-2">•</span>
                  <span className="text-gray-700">Analisar uso e tendências</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#A899BC] mr-2">•</span>
                  <span className="text-gray-700">Desenvolver novos recursos</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#A899BC] mr-2">•</span>
                  <span className="text-gray-700">Personalizar sua experiência</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#A899BC] mr-2">•</span>
                  <span className="text-gray-700">Realizar pesquisas e análises</span>
                </li>
              </ul>
            </div>

            <div className="mb-6">
              <h3 className="font-poppins text-lg font-semibold text-[#A899BC] mb-3">
                3.3 Comunicações
              </h3>
              <ul className="space-y-2 ml-4">
                <li className="flex items-start">
                  <span className="text-[#A899BC] mr-2">•</span>
                  <span className="text-gray-700">Enviar notificações importantes</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#A899BC] mr-2">•</span>
                  <span className="text-gray-700">Responder suas solicitações</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#A899BC] mr-2">•</span>
                  <span className="text-gray-700">Enviar atualizações e novidades (com consentimento)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#A899BC] mr-2">•</span>
                  <span className="text-gray-700">Marketing e promoções (com consentimento)</span>
                </li>
              </ul>
            </div>

            <div className="mb-6">
              <h3 className="font-poppins text-lg font-semibold text-[#A899BC] mb-3">
                3.4 Segurança e Conformidade
              </h3>
              <ul className="space-y-2 ml-4">
                <li className="flex items-start">
                  <span className="text-[#A899BC] mr-2">•</span>
                  <span className="text-gray-700">Detectar e prevenir fraudes</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#A899BC] mr-2">•</span>
                  <span className="text-gray-700">Monitorar violações dos Termos</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#A899BC] mr-2">•</span>
                  <span className="text-gray-700">Cumprir obrigações legais</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#A899BC] mr-2">•</span>
                  <span className="text-gray-700">Proteger direitos e segurança</span>
                </li>
              </ul>
            </div>
          </section>

          {/* Section 4 - Base Legal para Processamento */}
          <section className="mb-10">
            <h2 className="font-montserrat text-2xl font-bold text-[#222539] mb-4">
              4. BASE LEGAL PARA PROCESSAMENTO (LGPD)
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Processamos suas informações com base em:
            </p>
            <ul className="space-y-2 ml-4">
              <li className="flex items-start">
                <span className="text-[#A899BC] mr-2">•</span>
                <span className="text-gray-700"><strong>Consentimento:</strong> quando você autoriza expressamente</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#A899BC] mr-2">•</span>
                <span className="text-gray-700"><strong>Execução de Contrato:</strong> necessário para fornecer o serviço</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#A899BC] mr-2">•</span>
                <span className="text-gray-700"><strong>Obrigação Legal:</strong> quando exigido por lei</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#A899BC] mr-2">•</span>
                <span className="text-gray-700"><strong>Interesse Legítimo:</strong> para melhorias e segurança</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#A899BC] mr-2">•</span>
                <span className="text-gray-700"><strong>Proteção Vital:</strong> em situações de emergência</span>
              </li>
            </ul>

            <div className="mt-8">
              <h3 className="font-poppins text-lg font-semibold text-[#A899BC] mb-3">
                4.1 USO DE INTELIGÊNCIA ARTIFICIAL
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                O IngVox utiliza tecnologias de IA para:
              </p>
              <ul className="space-y-2 ml-4">
                <li className="flex items-start">
                  <span className="text-[#A899BC] mr-2">•</span>
                  <span className="text-gray-700"><strong>Personalização:</strong> Adaptar conteúdo ao seu nível e estilo de aprendizagem</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#A899BC] mr-2">•</span>
                  <span className="text-gray-700"><strong>Análise de Voz:</strong> Avaliar pronúncia e fornecer feedback</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#A899BC] mr-2">•</span>
                  <span className="text-gray-700"><strong>Processamento de Linguagem:</strong> Corrigir gramática e sugerir melhorias</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#A899BC] mr-2">•</span>
                  <span className="text-gray-700"><strong>Geração de Conteúdo:</strong> Criar exercícios personalizados</span>
                </li>
              </ul>

              <div className="bg-green-50 border-l-4 border-green-400 p-4 mt-4">
                <p className="font-semibold text-green-800 mb-2">Importante:</p>
                <ul className="space-y-2 ml-4">
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    <span className="text-gray-700">Suas gravações de voz são processadas em tempo real e não são armazenadas permanentemente sem seu consentimento</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    <span className="text-gray-700">Os modelos de IA não são treinados com seus dados pessoais individuais</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    <span className="text-gray-700">Você pode optar por não usar recursos de IA nas configurações</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Section 5 - Compartilhamento de Informações */}
          <section className="mb-10">
            <h2 className="font-montserrat text-2xl font-bold text-[#222539] mb-4">
              5. COMPARTILHAMENTO DE INFORMAÇÕES
            </h2>

            <div className="mb-6">
              <h3 className="font-poppins text-lg font-semibold text-[#A899BC] mb-3">
                5.1 Com Seu Consentimento
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Compartilhamos informações quando você autoriza expressamente.
              </p>
            </div>

            <div className="mb-6">
              <h3 className="font-poppins text-lg font-semibold text-[#A899BC] mb-3">
                5.2 Prestadores de Serviço
              </h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                Com empresas que nos ajudam a operar:
              </p>
              <ul className="space-y-2 ml-4">
                <li className="flex items-start">
                  <span className="text-[#A899BC] mr-2">•</span>
                  <span className="text-gray-700">Hospedagem e infraestrutura</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#A899BC] mr-2">•</span>
                  <span className="text-gray-700">Análise de dados</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#A899BC] mr-2">•</span>
                  <span className="text-gray-700">Processamento de pagamentos</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#A899BC] mr-2">•</span>
                  <span className="text-gray-700">Atendimento ao cliente</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#A899BC] mr-2">•</span>
                  <span className="text-gray-700">Marketing e publicidade</span>
                </li>
              </ul>
            </div>

            <div className="mb-6">
              <h3 className="font-poppins text-lg font-semibold text-[#A899BC] mb-3">
                5.3 Requisitos Legais
              </h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                Quando obrigados por:
              </p>
              <ul className="space-y-2 ml-4">
                <li className="flex items-start">
                  <span className="text-[#A899BC] mr-2">•</span>
                  <span className="text-gray-700">Ordem judicial</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#A899BC] mr-2">•</span>
                  <span className="text-gray-700">Processo legal</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#A899BC] mr-2">•</span>
                  <span className="text-gray-700">Autoridades governamentais</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#A899BC] mr-2">•</span>
                  <span className="text-gray-700">Proteção de direitos</span>
                </li>
              </ul>
            </div>

            <div className="mb-6">
              <h3 className="font-poppins text-lg font-semibold text-[#A899BC] mb-3">
                5.4 Transferências Empresariais
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Em caso de fusão, aquisição ou venda de ativos.
              </p>
            </div>

            <div className="mb-6">
              <h3 className="font-poppins text-lg font-semibold text-[#A899BC] mb-3">
                5.5 Informações Agregadas
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Dados anonimizados e agregados para análises.
              </p>
            </div>
          </section>

          {/* Section 6 - Armazenamento e Segurança */}
          <section className="mb-10">
            <h2 className="font-montserrat text-2xl font-bold text-[#222539] mb-4">
              6. ARMAZENAMENTO E SEGURANÇA
            </h2>

            <div className="mb-6">
              <h3 className="font-poppins text-lg font-semibold text-[#A899BC] mb-3">
                6.1 Medidas de Segurança
              </h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                Implementamos medidas técnicas e organizacionais:
              </p>
              <ul className="space-y-2 ml-4">
                <li className="flex items-start">
                  <span className="text-[#A899BC] mr-2">•</span>
                  <span className="text-gray-700">Criptografia de dados</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#A899BC] mr-2">•</span>
                  <span className="text-gray-700">Controle de acesso</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#A899BC] mr-2">•</span>
                  <span className="text-gray-700">Monitoramento de segurança</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#A899BC] mr-2">•</span>
                  <span className="text-gray-700">Auditorias regulares</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#A899BC] mr-2">•</span>
                  <span className="text-gray-700">Treinamento de equipe</span>
                </li>
              </ul>
            </div>

            <div className="mb-6">
              <h3 className="font-poppins text-lg font-semibold text-[#A899BC] mb-3">
                6.2 Retenção de Dados
              </h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                Mantemos suas informações pelo tempo necessário:
              </p>
              <ul className="space-y-2 ml-4">
                <li className="flex items-start">
                  <span className="text-[#A899BC] mr-2">•</span>
                  <span className="text-gray-700">Durante a vigência da conta</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#A899BC] mr-2">•</span>
                  <span className="text-gray-700">Conforme obrigações legais</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#A899BC] mr-2">•</span>
                  <span className="text-gray-700">Para resolver disputas</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#A899BC] mr-2">•</span>
                  <span className="text-gray-700">Aplicar nossos acordos</span>
                </li>
              </ul>
            </div>

            <div className="mb-6">
              <h3 className="font-poppins text-lg font-semibold text-[#A899BC] mb-3">
                6.3 Localização dos Dados
              </h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                Seus dados podem ser armazenados em:
              </p>
              <ul className="space-y-2 ml-4">
                <li className="flex items-start">
                  <span className="text-[#A899BC] mr-2">•</span>
                  <span className="text-gray-700">Servidores no Brasil</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#A899BC] mr-2">•</span>
                  <span className="text-gray-700">Serviços de nuvem internacionais com certificações de segurança</span>
                </li>
              </ul>
            </div>
          </section>

          {/* Section 7 - Seus Direitos (LGPD) */}
          <section className="mb-10">
            <h2 className="font-montserrat text-2xl font-bold text-[#222539] mb-4">
              7. SEUS DIREITOS (LGPD)
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Você tem direito a:
            </p>

            <div className="mb-6">
              <h3 className="font-poppins text-lg font-semibold text-[#A899BC] mb-3">
                7.1 Direitos Básicos
              </h3>
              <ul className="space-y-2 ml-4">
                <li className="flex items-start">
                  <span className="text-[#A899BC] mr-2">•</span>
                  <span className="text-gray-700"><strong>Confirmação:</strong> saber se processamos seus dados</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#A899BC] mr-2">•</span>
                  <span className="text-gray-700"><strong>Acesso:</strong> obter cópia de seus dados</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#A899BC] mr-2">•</span>
                  <span className="text-gray-700"><strong>Correção:</strong> atualizar dados incorretos</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#A899BC] mr-2">•</span>
                  <span className="text-gray-700"><strong>Anonimização:</strong> tornar dados anônimos</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#A899BC] mr-2">•</span>
                  <span className="text-gray-700"><strong>Bloqueio:</strong> suspender processamento</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#A899BC] mr-2">•</span>
                  <span className="text-gray-700"><strong>Eliminação:</strong> excluir seus dados</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#A899BC] mr-2">•</span>
                  <span className="text-gray-700"><strong>Portabilidade:</strong> receber dados em formato estruturado</span>
                </li>
              </ul>
            </div>

            <div className="mb-6">
              <h3 className="font-poppins text-lg font-semibold text-[#A899BC] mb-3">
                7.2 Outros Direitos
              </h3>
              <ul className="space-y-2 ml-4">
                <li className="flex items-start">
                  <span className="text-[#A899BC] mr-2">•</span>
                  <span className="text-gray-700"><strong>Informação:</strong> sobre compartilhamento com terceiros</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#A899BC] mr-2">•</span>
                  <span className="text-gray-700"><strong>Revogação:</strong> retirar consentimento</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#A899BC] mr-2">•</span>
                  <span className="text-gray-700"><strong>Oposição:</strong> opor-se a processamento</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#A899BC] mr-2">•</span>
                  <span className="text-gray-700"><strong>Revisão:</strong> de decisões automatizadas</span>
                </li>
              </ul>
            </div>

            <div className="mb-6">
              <h3 className="font-poppins text-lg font-semibold text-[#A899BC] mb-3">
                7.3 Como Exercer Seus Direitos
              </h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                Entre em contato através de:
              </p>
              <ul className="space-y-2 ml-4">
                <li className="flex items-start">
                  <span className="text-[#A899BC] mr-2">•</span>
                  <span className="text-gray-700">Email: support@ingvox.com</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#A899BC] mr-2">•</span>
                  <span className="text-gray-700">Telefone: +55 54 99671-7461</span>
                </li>
              </ul>

              <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mt-4">
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span className="text-gray-700"><strong>Prazo de resposta:</strong> Responderemos sua solicitação em até 15 dias úteis, conforme previsto na LGPD. Em casos complexos, este prazo pode ser prorrogado mediante justificativa.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span className="text-gray-700"><strong>Informações necessárias:</strong> Para sua segurança, poderemos solicitar informações adicionais para confirmar sua identidade antes de processar sua solicitação.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span className="text-gray-700"><strong>Gratuidade:</strong> O exercício dos seus direitos é gratuito. Apenas em caso de solicitações repetitivas ou excessivas, poderemos cobrar uma taxa administrativa.</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Section 8 - Cookies */}
          <section className="mb-10">
            <h2 className="font-montserrat text-2xl font-bold text-[#222539] mb-4">
              8. COOKIES E TECNOLOGIAS SIMILARES
            </h2>

            <div className="mb-6">
              <h3 className="font-poppins text-lg font-semibold text-[#A899BC] mb-3">
                8.1 O Que São Cookies
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Pequenos arquivos que armazenam informações sobre sua visita.
              </p>
            </div>

            <div className="mb-6">
              <h3 className="font-poppins text-lg font-semibold text-[#A899BC] mb-3">
                8.2 Como Usamos
              </h3>
              <ul className="space-y-2 ml-4">
                <li className="flex items-start">
                  <span className="text-[#A899BC] mr-2">•</span>
                  <span className="text-gray-700"><strong>Essenciais:</strong> funcionamento básico</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#A899BC] mr-2">•</span>
                  <span className="text-gray-700"><strong>Desempenho:</strong> melhorar performance</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#A899BC] mr-2">•</span>
                  <span className="text-gray-700"><strong>Funcionalidade:</strong> lembrar preferências</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#A899BC] mr-2">•</span>
                  <span className="text-gray-700"><strong>Publicidade:</strong> anúncios relevantes</span>
                </li>
              </ul>
            </div>

            <div className="mb-6">
              <h3 className="font-poppins text-lg font-semibold text-[#A899BC] mb-3">
                8.3 Gerenciamento
              </h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                Você pode controlar cookies através:
              </p>
              <ul className="space-y-2 ml-4">
                <li className="flex items-start">
                  <span className="text-[#A899BC] mr-2">•</span>
                  <span className="text-gray-700">Configurações do navegador</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#A899BC] mr-2">•</span>
                  <span className="text-gray-700">Configurações do dispositivo</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#A899BC] mr-2">•</span>
                  <span className="text-gray-700">Opções no Aplicativo</span>
                </li>
              </ul>
            </div>
          </section>

          {/* Section 9 - Privacidade de Menores */}
          <section className="mb-10">
            <h2 className="font-montserrat text-2xl font-bold text-[#222539] mb-4">
              9. PRIVACIDADE DE MENORES
            </h2>

            <div className="mb-6">
              <h3 className="font-poppins text-lg font-semibold text-[#A899BC] mb-3">
                9.1 Restrição de Idade
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Não coletamos intencionalmente dados de menores de 13 anos sem consentimento parental.
              </p>
            </div>

            <div className="mb-6">
              <h3 className="font-poppins text-lg font-semibold text-[#A899BC] mb-3">
                9.2 Consentimento Parental
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Para menores entre 13 e 18 anos, recomendamos supervisão dos pais/responsáveis.
              </p>
            </div>

            <div className="mb-6">
              <h3 className="font-poppins text-lg font-semibold text-[#A899BC] mb-3">
                9.3 Descoberta de Coleta Indevida
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Se descobrirmos coleta indevida, excluiremos imediatamente.
              </p>
            </div>
          </section>

          {/* Section 10 - Transferências Internacionais */}
          <section className="mb-10">
            <h2 className="font-montserrat text-2xl font-bold text-[#222539] mb-4">
              10. TRANSFERÊNCIAS INTERNACIONAIS
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Suas informações podem ser transferidas para outros países. Garantimos proteção adequada através de:
            </p>
            <ul className="space-y-2 ml-4">
              <li className="flex items-start">
                <span className="text-[#A899BC] mr-2">•</span>
                <span className="text-gray-700">Cláusulas contratuais padrão</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#A899BC] mr-2">•</span>
                <span className="text-gray-700">Certificações de privacidade</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#A899BC] mr-2">•</span>
                <span className="text-gray-700">Medidas de segurança apropriadas</span>
              </li>
            </ul>
          </section>

          {/* Section 11 - Links para Terceiros */}
          <section className="mb-10">
            <h2 className="font-montserrat text-2xl font-bold text-[#222539] mb-4">
              11. LINKS PARA TERCEIROS
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Nosso Aplicativo pode conter links para sites/apps de terceiros. Não somos responsáveis pelas práticas de privacidade deles.
            </p>
          </section>

          {/* Section 12 - Alterações na Política */}
          <section className="mb-10">
            <h2 className="font-montserrat text-2xl font-bold text-[#222539] mb-4">
              12. ALTERAÇÕES NA POLÍTICA
            </h2>

            <div className="mb-6">
              <h3 className="font-poppins text-lg font-semibold text-[#A899BC] mb-3">
                12.1 Notificação
              </h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                Informaremos sobre alterações através de:
              </p>
              <ul className="space-y-2 ml-4">
                <li className="flex items-start">
                  <span className="text-[#A899BC] mr-2">•</span>
                  <span className="text-gray-700">Notificação no Aplicativo</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#A899BC] mr-2">•</span>
                  <span className="text-gray-700">Email</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#A899BC] mr-2">•</span>
                  <span className="text-gray-700">Aviso em nosso site</span>
                </li>
              </ul>
            </div>

            <div className="mb-6">
              <h3 className="font-poppins text-lg font-semibold text-[#A899BC] mb-3">
                12.2 Vigência
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Alterações entram em vigor na data de publicação.
              </p>
            </div>

            <div className="mb-6">
              <h3 className="font-poppins text-lg font-semibold text-[#A899BC] mb-3">
                12.3 Consentimento
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Uso continuado implica aceitação das mudanças.
              </p>
            </div>
          </section>

          {/* Section 13 - Violação de Dados */}
          <section className="mb-10">
            <h2 className="font-montserrat text-2xl font-bold text-[#222539] mb-4">
              13. VIOLAÇÃO DE DADOS
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Em caso de violação de dados que possa causar risco:
            </p>
            <ul className="space-y-2 ml-4">
              <li className="flex items-start">
                <span className="text-[#A899BC] mr-2">•</span>
                <span className="text-gray-700">Notificaremos autoridades competentes</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#A899BC] mr-2">•</span>
                <span className="text-gray-700">Comunicaremos usuários afetados</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#A899BC] mr-2">•</span>
                <span className="text-gray-700">Tomaremos medidas corretivas</span>
              </li>
            </ul>
          </section>

          {/* Section 14 - DPO */}
          <section className="mb-10">
            <h2 className="font-montserrat text-2xl font-bold text-[#222539] mb-4">
              14. ENCARREGADO DE PROTEÇÃO DE DADOS (DPO)
            </h2>
            <div className="bg-[#A899BC]/10 p-6 rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <Mail className="h-4 w-4 text-[#A899BC]" />
                <p className="text-gray-700">
                  <strong>Email:</strong> support@ingvox.com
                </p>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-[#A899BC]" />
                <p className="text-gray-700">
                  <strong>Telefone:</strong> +55 54 99671-7461
                </p>
              </div>
            </div>
          </section>

          {/* Section 15 - ANPD */}
          <section className="mb-10">
            <h2 className="font-montserrat text-2xl font-bold text-[#222539] mb-4">
              15. AUTORIDADE NACIONAL DE PROTEÇÃO DE DADOS
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Você pode registrar reclamação junto à ANPD:
            </p>
            <ul className="space-y-2 ml-4">
              <li className="flex items-start">
                <span className="text-[#A899BC] mr-2">•</span>
                <span className="text-gray-700">Site: www.gov.br/anpd</span>
              </li>
            </ul>
          </section>

          {/* Section 16 - Contato */}
          <section className="mb-10">
            <h2 className="font-montserrat text-2xl font-bold text-[#222539] mb-4">
              16. CONTATO
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Para questões sobre privacidade:
            </p>
            
            <div className="bg-[#A899BC]/10 p-6 rounded-lg">
              <h3 className="font-poppins font-bold text-[#222539] mb-1">IngVox</h3>
              <p className="text-gray-700 mb-3">Responsável pela Proteção de Dados</p>
              
              <div className="space-y-2">
                <p className="text-gray-700">
                  <strong>Website:</strong> www.ingvox.com
                </p>
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-[#A899BC]" />
                  <p className="text-gray-700">
                    <strong>Email:</strong> support@ingvox.com
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-[#A899BC]" />
                  <p className="text-gray-700">
                    <strong>Telefone:</strong> +55 54 99671-7461
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <MapPin className="h-4 w-4 text-[#A899BC] mt-1" />
                  <p className="text-gray-700">
                    <strong>Endereço:</strong> Rua André da Rocha, 126, Centro, Lagoa Vermelha, RS, Brasil
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Section 17 - Consentimento */}
          <section className="mb-10">
            <h2 className="font-montserrat text-2xl font-bold text-[#222539] mb-4">
              17. CONSENTIMENTO
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Ao usar o Aplicativo, você consente com:
            </p>
            <ul className="space-y-2 ml-4">
              <li className="flex items-start">
                <span className="text-[#A899BC] mr-2">•</span>
                <span className="text-gray-700">Coleta e processamento conforme descrito</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#A899BC] mr-2">•</span>
                <span className="text-gray-700">Transferências de dados necessárias</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#A899BC] mr-2">•</span>
                <span className="text-gray-700">Comunicações relacionadas ao serviço</span>
              </li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-4">
              Você pode retirar seu consentimento a qualquer momento.
            </p>
          </section>

          {/* Section 18 - Glossário */}
          <section className="mb-10">
            <h2 className="font-montserrat text-2xl font-bold text-[#222539] mb-4">
              18. GLOSSÁRIO
            </h2>
            <ul className="space-y-2 ml-4">
              <li className="flex items-start">
                <span className="text-[#A899BC] mr-2">•</span>
                <span className="text-gray-700"><strong>Dados Pessoais:</strong> informações que identificam uma pessoa</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#A899BC] mr-2">•</span>
                <span className="text-gray-700"><strong>Processamento:</strong> qualquer operação com dados pessoais</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#A899BC] mr-2">•</span>
                <span className="text-gray-700"><strong>Controlador:</strong> quem decide sobre o processamento</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#A899BC] mr-2">•</span>
                <span className="text-gray-700"><strong>Operador:</strong> quem processa em nome do controlador</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#A899BC] mr-2">•</span>
                <span className="text-gray-700"><strong>Titular:</strong> pessoa a quem os dados se referem</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#A899BC] mr-2">•</span>
                <span className="text-gray-700"><strong>LGPD:</strong> Lei Geral de Proteção de Dados (Lei 13.709/2018)</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#A899BC] mr-2">•</span>
                <span className="text-gray-700"><strong>ANPD:</strong> Autoridade Nacional de Proteção de Dados</span>
              </li>
            </ul>
          </section>

          {/* Footer Notice */}
          <div className="mt-12 pt-8 border-t border-[#A899BC]/20">
            <p className="text-sm text-gray-600 italic text-center">
              Esta Política de Privacidade foi elaborada em conformidade com a Lei Geral de Proteção de Dados (LGPD) e demais legislações aplicáveis.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default PrivacyPolicy;