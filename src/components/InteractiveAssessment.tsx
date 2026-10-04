import React, { useState } from 'react';
import { CheckCircle2, ArrowRight, RotateCcw, Sparkles, MapPin, Scale, FileText, Clock, AlertTriangle, ShieldCheck } from 'lucide-react';
import { WhatsAppIcon } from './WhatsAppIcon';
import confetti from 'canvas-confetti';
import { getWhatsAppUrl } from '@/lib/utils';

export const InteractiveAssessment: React.FC = () => {
  const [step, setStep] = useState(1);
  const [selectedArea, setSelectedArea] = useState('');
  const [selectedDetail, setSelectedDetail] = useState('');
  const [selectedDocs, setSelectedDocs] = useState('');
  const [selectedUrgency, setSelectedUrgency] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('');

  const TOTAL_STEPS = 5;

  // Step 1: Areas
  const areas = [
    { 
      id: 'INSS / Previdenciário', 
      label: 'Negativa de benefício, Aposentadoria Rural/Urbana, BPC/LOAS ou pensão', 
      icon: '🏛️' 
    },
    { 
      id: 'Direito do Trabalho', 
      label: 'Demissão, verbas rescisórias pendentes, acidente ou direitos atrasados', 
      icon: '👷' 
    },
    { 
      id: 'Cível & Família', 
      label: 'Inventário, divórcio, pensão alimentícia, contratos ou danos morais', 
      icon: '⚖️' 
    },
    { 
      id: 'Outro Caso Urgente', 
      label: 'Notificação judicial, cobrança indevida ou situação com prazo correndo', 
      icon: '⚡' 
    }
  ];

  // Step 2: Dynamic specific demands based on selected area
  const areaDetails: Record<string, string[]> = {
    'INSS / Previdenciário': [
      'Benefício negado ou cortado pelo INSS (quero reverter na Justiça Federal)',
      'BPC / LOAS (Benefício para Idosos ou Pessoas com Deficiência / Autismo)',
      'Aposentadoria Rural ou Segurado Especial (Trabalhador do campo / pescador)',
      'Aposentadoria por Idade, Tempo de Contribuição ou Especial (Insalubre)',
      'Auxílio-Doença, Incapacidade Temporária ou Aposentadoria por Invalidez',
      'Pensão por Morte, Auxílio-Reclusão ou Revisão de Valor de Benefício'
    ],
    'Direito do Trabalho': [
      'Demissão sem recebimento integral de rescisão, FGTS ou multa de 40%',
      'Acidente de trabalho, sequela física ou doença ocupacional (LER/Burnout)',
      'Trabalho sem carteira assinada (quero reconhecer vínculo e FGTS atrasado)',
      'Horas extras não quitadas, intervalo suprimido ou adicional de insalubridade',
      'Assédio moral, perseguição ou constrangimento no trabalho (Rescisão Indireta)',
      'Estabilidade de gestante ou acidente violada'
    ],
    'Cível & Família': [
      'Inventário e partilha de herança familiar (judicial ou em cartório)',
      'Divórcio, partilha de bens do casal ou dissolução de união estável',
      'Fixação, execução ou revisão de pensão alimentícia e guarda de filhos',
      'Cobrança indevida, negativação irregular (SPC/Serasa) ou abusos bancários',
      'Indenização por danos morais, materiais ou perda financeira injusta',
      'Contratos, compra e venda ou regularização fundiária/imóveis'
    ],
    'Outro Caso Urgente': [
      'Recebi uma intimação ou notificação com prazo judicial correndo',
      'Bloqueio judicial de conta bancária ou execução de bens',
      'Análise preventiva de documentos ou contratos importantes',
      'Outra situação emergencial que requer atuação rápida de advogadas'
    ]
  };

  // Step 3: Documentation status
  const docStatuses = [
    { 
      title: 'Já possuo documentos e comprovantes em mãos', 
      desc: 'Tenho carteira de trabalho, laudos, carta de negativa do INSS ou rescisão pronta' 
    },
    { 
      title: 'Tenho parte dos documentos e preciso de orientação', 
      desc: 'Possuo alguns comprovantes, mas preciso de ajuda para saber o que falta' 
    },
    { 
      title: 'Não tenho quase nada e preciso que busquem por mim', 
      desc: 'Preciso que as advogadas verifiquem meu histórico e orientem como emitir' 
    },
    { 
      title: 'Recebi uma negativa recente com prazo fatal correndo', 
      desc: 'Tenho a carta de indeferimento ou notificação oficial recente' 
    }
  ];

  // Step 4: Urgency level
  const urgencyLevels = [
    { 
      title: 'Alta Urgência', 
      desc: 'Estou sem renda, com benefício cortado, prazo fatal correndo ou fui demitido recentemente',
      badge: 'Prioridade Máxima',
      badgeColor: 'bg-red-500/15 text-red-400 border-red-500/30'
    },
    { 
      title: 'Moderada', 
      desc: 'Quero ingressar com o processo nas próximas semanas de forma planejada e segura',
      badge: 'Atendimento Normal',
      badgeColor: 'bg-gold-500/15 text-gold-300 border-gold-500/30'
    },
    { 
      title: 'Preventiva / Avaliação', 
      desc: 'Quero tirar dúvidas e entender meus direitos antes de dar qualquer entrada formal',
      badge: 'Orientação Consultiva',
      badgeColor: 'bg-blue-500/15 text-blue-300 border-blue-500/30'
    }
  ];

  // Step 5: Locations across Ceará
  const locations = [
    'Fortaleza ou Região Metropolitana',
    'Sertão Central (Quixadá, Quixeramobim, Banabuiú e região)',
    'Região do Cariri (Juazeiro do Norte, Crato, Barbalha)',
    'Região Norte (Sobral, Tianguá, Camocim e municípios vizinhos)',
    'Sertão dos Crateús e Inhamuns (Crateús, Tauá e região)',
    'Centro-Sul (Iguatu, Icó, Cedro e região)',
    'Outro município no interior do Ceará'
  ];

  // Navigation handlers
  const handleNextStep1 = (area: string) => {
    setSelectedArea(area);
    setStep(2);
  };

  const handleNextStep2 = (detail: string) => {
    setSelectedDetail(detail);
    setStep(3);
  };

  const handleNextStep3 = (docs: string) => {
    setSelectedDocs(docs);
    setStep(4);
  };

  const handleNextStep4 = (urgency: string) => {
    setSelectedUrgency(urgency);
    setStep(5);
  };

  const handleFinish = (loc: string) => {
    setSelectedLocation(loc);
    setStep(6);

    try {
      confetti({
        particleCount: 65,
        spread: 75,
        origin: { y: 0.6 },
        colors: ['#C5A059', '#E6C878', '#FFFFFF']
      });
    } catch (e) {
      // safe fallback
    }
  };

  const handleReset = () => {
    setStep(1);
    setSelectedArea('');
    setSelectedDetail('');
    setSelectedDocs('');
    setSelectedUrgency('');
    setSelectedLocation('');
  };

  // WhatsApp pre-formatted rich message
  const generatedWhatsAppMsg = `Olá, Dra. Samara e Dra. Mariana! Realizei a triagem completa no site oficial de vocês:
• Área: ${selectedArea}
• Demanda específica: ${selectedDetail}
• Documentação: ${selectedDocs}
• Urgência: ${selectedUrgency}
• Região no Ceará: ${selectedLocation}

Gostaria de uma orientação jurídica personalizada sobre a viabilidade do meu caso.`;

  return (
    <section id="triagem" className="py-16 bg-[#0B0B0E] relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[350px] bg-gold-500/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-3xl mx-auto px-4 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-500/10 border border-gold-500/30 text-gold-400 text-[10px] font-semibold uppercase tracking-wider mb-2.5">
            <img src="/logo.jpg" alt="Souza & Selly" className="w-3.5 h-3.5 rounded-full object-cover border border-gold-500/50" />
            <span>Triagem Jurídica Completa • Passo a Passo</span>
          </div>

          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white mb-2 leading-tight">
            Descubra a Viabilidade do seu <span className="text-gold-metallic">Direito</span>
          </h2>
          
          <p className="text-neutral-400 text-xs sm:text-sm font-light max-w-lg mx-auto">
            Siga as 5 etapas guiadas para mapear sua situação e receber um atendimento totalmente mastigado e direto com as advogadas.
          </p>
        </div>

        {/* Card Container */}
        <div className="rounded-2xl bg-[#121217] border border-gold-500/30 p-5 sm:p-7 shadow-xl relative transition-all duration-300">
          
          {/* Progress Indicator */}
          {step <= TOTAL_STEPS && (
            <div className="mb-6">
              <div className="flex justify-between items-center text-xs text-neutral-400 mb-1.5">
                <span className="font-medium text-neutral-300">
                  Etapa <strong className="text-white font-bold">{step}</strong> de {TOTAL_STEPS}
                </span>
                <span className="text-gold-400 font-semibold text-[11px]">
                  {Math.round((step / TOTAL_STEPS) * 100)}% concluído
                </span>
              </div>
              <div className="w-full h-1.5 bg-neutral-800 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gold-metallic transition-all duration-500 ease-out"
                  style={{ width: `${(step / TOTAL_STEPS) * 100}%` }}
                />
              </div>
            </div>
          )}

          {/* STEP 1: Main Practice Area */}
          {step === 1 && (
            <div className="animate-fade-in-up">
              <h3 className="font-serif text-base sm:text-lg font-bold text-white mb-1">
                1. Qual é a sua principal necessidade jurídica?
              </h3>
              <p className="text-neutral-400 text-xs mb-4 font-light">
                Selecione a área central do seu caso para personalizarmos os próximos passos:
              </p>

              <div className="grid gap-2">
                {areas.map((a) => (
                  <button
                    key={a.id}
                    onClick={() => handleNextStep1(a.id)}
                    className="flex items-center gap-3 p-3 rounded-xl bg-[#181820] border border-neutral-800 hover:border-gold-500/50 hover:bg-[#1E1E28] transition-all text-left group"
                  >
                    <span className="text-xl shrink-0 p-1 rounded-lg bg-neutral-800/80">{a.icon}</span>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-xs sm:text-sm font-bold text-white group-hover:text-gold-300 transition-colors">
                        {a.id}
                      </h4>
                      <p className="text-[11px] text-neutral-400 mt-0.5 font-light truncate sm:whitespace-normal">
                        {a.label}
                      </p>
                    </div>
                    <ArrowRight className="w-4 h-4 text-neutral-500 group-hover:text-gold-400 group-hover:translate-x-1 transition-all shrink-0" />
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* STEP 2: Specific Demand (Dynamic based on Step 1) */}
          {step === 2 && (
            <div className="animate-fade-in-up">
              <div className="flex items-center justify-between mb-3">
                <button 
                  onClick={() => setStep(1)}
                  className="text-xs text-gold-400 hover:underline flex items-center gap-1"
                >
                  ← Voltar à etapa anterior
                </button>
                <span className="text-[10px] text-neutral-400 uppercase tracking-wider font-semibold">
                  Área: {selectedArea}
                </span>
              </div>

              <h3 className="font-serif text-base sm:text-lg font-bold text-white mb-1">
                2. Qual situação melhor descreve a sua demanda?
              </h3>
              <p className="text-neutral-400 text-xs mb-4 font-light">
                Escolha o detalhe que mais se aproxima do que você está enfrentando:
              </p>

              <div className="grid gap-2">
                {(areaDetails[selectedArea] || areaDetails['Outro Caso Urgente']).map((item, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleNextStep2(item)}
                    className="flex items-center justify-between gap-3 p-3 rounded-xl bg-[#181820] border border-neutral-800 hover:border-gold-500/50 hover:bg-[#1E1E28] transition-all text-left group"
                  >
                    <span className="text-xs text-neutral-200 group-hover:text-white font-medium leading-relaxed">
                      {item}
                    </span>
                    <ArrowRight className="w-4 h-4 text-neutral-500 group-hover:text-gold-400 group-hover:translate-x-1 transition-all shrink-0" />
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* STEP 3: Document Status */}
          {step === 3 && (
            <div className="animate-fade-in-up">
              <div className="flex items-center justify-between mb-3">
                <button 
                  onClick={() => setStep(2)}
                  className="text-xs text-gold-400 hover:underline flex items-center gap-1"
                >
                  ← Voltar à etapa anterior
                </button>
                <span className="text-[10px] text-neutral-400 uppercase tracking-wider font-semibold">
                  Documentação
                </span>
              </div>

              <h3 className="font-serif text-base sm:text-lg font-bold text-white mb-1">
                3. Você já possui documentos ou laudos em mãos?
              </h3>
              <p className="text-neutral-400 text-xs mb-4 font-light">
                Não se preocupe caso não tenha tudo: nós auxiliamos em todo o levantamento necessário.
              </p>

              <div className="grid gap-2">
                {docStatuses.map((doc, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleNextStep3(doc.title)}
                    className="flex items-start gap-3 p-3 rounded-xl bg-[#181820] border border-neutral-800 hover:border-gold-500/50 hover:bg-[#1E1E28] transition-all text-left group"
                  >
                    <FileText className="w-4 h-4 text-gold-400 shrink-0 mt-0.5" />
                    <div className="flex-1">
                      <h4 className="text-xs font-bold text-white group-hover:text-gold-300 transition-colors">
                        {doc.title}
                      </h4>
                      <p className="text-[11px] text-neutral-400 mt-0.5 font-light">
                        {doc.desc}
                      </p>
                    </div>
                    <ArrowRight className="w-4 h-4 text-neutral-500 group-hover:text-gold-400 group-hover:translate-x-1 transition-all shrink-0 mt-1" />
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* STEP 4: Urgency / Timing */}
          {step === 4 && (
            <div className="animate-fade-in-up">
              <div className="flex items-center justify-between mb-3">
                <button 
                  onClick={() => setStep(3)}
                  className="text-xs text-gold-400 hover:underline flex items-center gap-1"
                >
                  ← Voltar à etapa anterior
                </button>
                <span className="text-[10px] text-neutral-400 uppercase tracking-wider font-semibold">
                  Urgência
                </span>
              </div>

              <h3 className="font-serif text-base sm:text-lg font-bold text-white mb-1">
                4. Qual é o nível de urgência do seu caso?
              </h3>
              <p className="text-neutral-400 text-xs mb-4 font-light">
                Isso ajuda nossa equipe a definir a velocidade e a prioridade de atendimento:
              </p>

              <div className="grid gap-2">
                {urgencyLevels.map((u, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleNextStep4(u.title)}
                    className="flex items-start justify-between gap-3 p-3.5 rounded-xl bg-[#181820] border border-neutral-800 hover:border-gold-500/50 hover:bg-[#1E1E28] transition-all text-left group"
                  >
                    <div className="flex items-start gap-3">
                      <Clock className="w-4 h-4 text-gold-400 shrink-0 mt-0.5" />
                      <div>
                        <h4 className="text-xs font-bold text-white group-hover:text-gold-300 transition-colors">
                          {u.title}
                        </h4>
                        <p className="text-[11px] text-neutral-400 mt-0.5 font-light">
                          {u.desc}
                        </p>
                      </div>
                    </div>
                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded-md border shrink-0 ${u.badgeColor}`}>
                      {u.badge}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* STEP 5: Location in Ceará */}
          {step === 5 && (
            <div className="animate-fade-in-up">
              <div className="flex items-center justify-between mb-3">
                <button 
                  onClick={() => setStep(4)}
                  className="text-xs text-gold-400 hover:underline flex items-center gap-1"
                >
                  ← Voltar à etapa anterior
                </button>
                <span className="text-[10px] text-neutral-400 uppercase tracking-wider font-semibold">
                  Localização no Ceará
                </span>
              </div>

              <h3 className="font-serif text-base sm:text-lg font-bold text-white mb-1">
                5. Onde você reside atualmente no Ceará?
              </h3>
              <p className="text-neutral-400 text-xs mb-4 font-light">
                Com base nisso, organizamos se seu atendimento será na sede em Fortaleza ou em uma de nossas visitas presenciais no interior:
              </p>

              <div className="grid sm:grid-cols-2 gap-2">
                {locations.map((loc, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleFinish(loc)}
                    className="flex items-center gap-2.5 p-3 rounded-xl bg-[#181820] border border-neutral-800 hover:border-gold-500/50 hover:bg-[#1E1E28] transition-all text-left group"
                  >
                    <MapPin className="w-3.5 h-3.5 text-gold-400 shrink-0" />
                    <span className="text-xs text-neutral-200 group-hover:text-white font-medium">
                      {loc}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* STEP 6: Final Result Diagnostic Card */}
          {step === 6 && (
            <div className="text-center animate-fade-in-up py-2">
              <div className="flex items-center justify-center gap-2 mb-3">
                <img
                  src="/logo.jpg"
                  alt="Souza & Selly Advocacia"
                  className="w-12 h-12 rounded-full object-cover border-2 border-gold-500/60 shadow-lg shadow-gold-500/20"
                />
              </div>

              <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 text-[10px] font-bold uppercase tracking-wider mb-2">
                <Sparkles className="w-3 h-3" />
                <span>Triagem Concluída com Êxito</span>
              </div>

              <h3 className="font-serif text-lg sm:text-xl font-bold text-white mb-1.5">
                Caso Pré-Qualificado para Atendimento!
              </h3>
              
              <p className="text-xs text-neutral-300 max-w-lg mx-auto mb-4 font-light">
                Seus dados foram organizados. A <strong className="text-white font-semibold">Dra. Samara Selly</strong> e a <strong className="text-white font-semibold">Dra. Mariana Souza</strong> já receberão o seu caso mastigado para orientação direta.
              </p>

              {/* Comprehensive Summary Card */}
              <div className="p-3.5 rounded-xl bg-[#181820] border border-neutral-800 text-left max-w-lg mx-auto mb-5 space-y-2 text-xs">
                <div className="flex justify-between items-center border-b border-neutral-800/80 pb-1.5">
                  <span className="text-neutral-400 text-[11px]">Área do Direito:</span>
                  <span className="text-gold-300 font-semibold text-[11px]">{selectedArea}</span>
                </div>
                <div className="border-b border-neutral-800/80 pb-1.5">
                  <span className="text-neutral-400 text-[11px] block mb-0.5">Demanda Específica:</span>
                  <span className="text-white font-medium text-[11px] leading-tight block">{selectedDetail}</span>
                </div>
                <div className="flex justify-between items-center border-b border-neutral-800/80 pb-1.5">
                  <span className="text-neutral-400 text-[11px]">Situação dos Documentos:</span>
                  <span className="text-neutral-200 font-medium text-[11px] truncate max-w-[220px]">{selectedDocs}</span>
                </div>
                <div className="flex justify-between items-center border-b border-neutral-800/80 pb-1.5">
                  <span className="text-neutral-400 text-[11px]">Nível de Urgência:</span>
                  <span className="text-amber-400 font-semibold text-[11px]">{selectedUrgency}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-neutral-400 text-[11px]">Região no Ceará:</span>
                  <span className="text-white font-medium text-[11px]">{selectedLocation}</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto">
                <a
                  href={getWhatsAppUrl(generatedWhatsAppMsg)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2.5 px-6 py-3 rounded-xl text-xs font-bold uppercase tracking-wider text-black bg-gold-metallic hover:opacity-95 shadow-xl shadow-gold-500/25 transition-all group"
                >
                  <WhatsAppIcon className="w-4 h-4 fill-black/80" />
                  <span>Enviar Diagnóstico para as Advogadas</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </a>

                <button
                  onClick={handleReset}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-4 py-3 rounded-xl text-xs font-semibold text-neutral-400 hover:text-white bg-[#181820] border border-neutral-800 transition-colors shrink-0"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Refazer</span>
                </button>
              </div>

              <p className="text-[10px] text-neutral-500 mt-3 flex items-center justify-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-gold-500" />
                <span>Sigilo profissional garantido pelo Código de Ética da OAB e LGPD.</span>
              </p>
            </div>
          )}

        </div>

      </div>
    </section>
  );
};
