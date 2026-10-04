import React, { useState } from 'react';
import { HelpCircle, CheckCircle2, ArrowRight, RotateCcw, MessageCircle, Sparkles, MapPin, Scale } from 'lucide-react';
import confetti from 'canvas-confetti';
import { getWhatsAppUrl } from '@/lib/utils';

export const InteractiveAssessment: React.FC = () => {
  const [step, setStep] = useState(1);
  const [selectedArea, setSelectedArea] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('');
  const [selectedStatus, setSelectedStatus] = useState('');

  const areas = [
    { id: 'INSS / Previdenciário', label: 'INSS negou benefício, Aposentadoria Rural/Urbana ou BPC/LOAS', icon: '🏛️' },
    { id: 'Direito do Trabalho', label: 'Fui demitido, sofri acidente de trabalho ou tenho verbas atrasadas', icon: '👷' },
    { id: 'Cível / Família / Indenização', label: 'Inventário, divórcio, contratos, cobrança abusiva ou danos morais', icon: '⚖️' },
    { id: 'Outro Caso Urgente', label: 'Outra questão que preciso de avaliação urgente das advogadas', icon: '⚡' }
  ];

  const locations = [
    'Fortaleza ou Região Metropolitana',
    'Sertão Central (Quixadá, Quixeramobim e região)',
    'Região do Cariri (Juazeiro do Norte, Crato, Barbalha)',
    'Região Norte (Sobral, Tianguá e municípios vizinhos)',
    'Sertão dos Crateús e Inhamuns',
    'Centro-Sul (Iguatu, Icó e região)',
    'Outro município no interior do Ceará'
  ];

  const statuses = [
    'Já dei entrada e o pedido foi negado ou cancelado',
    'Ainda não dei entrada e quero fazer tudo certo desde o início',
    'Sofri um prejuízo ou demissão recente e tenho prazo correndo',
    'Gostaria de uma visita presencial das advogadas no meu município'
  ];

  const handleNextStep1 = (area: string) => {
    setSelectedArea(area);
    setStep(2);
  };

  const handleNextStep2 = (loc: string) => {
    setSelectedLocation(loc);
    setStep(3);
  };

  const handleFinish = (status: string) => {
    setSelectedStatus(status);
    setStep(4);

    try {
      confetti({
        particleCount: 60,
        spread: 70,
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
    setSelectedLocation('');
    setSelectedStatus('');
  };

  const generatedWhatsAppMsg = `Olá, Dra. Samara e Dra. Mariana! Realizei a triagem no site oficial de vocês:
- Minha área de interesse: ${selectedArea}
- Minha localização: ${selectedLocation}
- Minha situação atual: ${selectedStatus}

Gostaria de agendar uma análise preliminar do meu caso.`;

  return (
    <section id="triagem" className="py-24 bg-[#0B0B0E] relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-gold-500/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold-500/10 border border-gold-500/30 text-gold-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Triagem Jurídica Rápida em 30 Segundos</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white mb-4">
            Descubra se o seu caso tem <span className="text-gold-metallic">Direito a Reparação</span>
          </h2>
          
          <p className="text-neutral-400 text-sm sm:text-base font-light max-w-xl mx-auto">
            Responda 3 perguntas simples e receba um direcionamento direto com a equipe de especialistas no WhatsApp.
          </p>
        </div>

        {/* Card Box */}
        <div className="rounded-3xl bg-[#121217] border border-gold-500/30 p-6 sm:p-10 shadow-2xl relative">
          
          {/* Progress Indicator */}
          {step < 4 && (
            <div className="mb-8">
              <div className="flex justify-between items-center text-xs text-neutral-400 mb-2">
                <span>Passo {step} de 3</span>
                <span className="text-gold-400 font-semibold">{step === 1 ? '33%' : step === 2 ? '66%' : '100%'} concluído</span>
              </div>
              <div className="w-full h-1.5 bg-neutral-800 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gold-metallic transition-all duration-500 ease-out"
                  style={{ width: `${(step / 3) * 100}%` }}
                />
              </div>
            </div>
          )}

          {/* Step 1: Area */}
          {step === 1 && (
            <div className="animate-fade-in-up">
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-white mb-2">
                1. Qual é o motivo principal da sua busca por justiça?
              </h3>
              <p className="text-neutral-400 text-xs sm:text-sm mb-6">
                Selecione a opção que melhor descreve o que você está vivenciando:
              </p>

              <div className="grid gap-3.5">
                {areas.map((a) => (
                  <button
                    key={a.id}
                    onClick={() => handleNextStep1(a.id)}
                    className="flex items-center gap-4 p-4 sm:p-5 rounded-2xl bg-[#181820] border border-neutral-800 hover:border-gold-500/50 hover:bg-[#1E1E28] transition-all text-left group"
                  >
                    <span className="text-2xl sm:text-3xl shrink-0">{a.icon}</span>
                    <div className="flex-1">
                      <h4 className="text-sm sm:text-base font-bold text-white group-hover:text-gold-300 transition-colors">
                        {a.id}
                      </h4>
                      <p className="text-xs text-neutral-400 mt-0.5">
                        {a.label}
                      </p>
                    </div>
                    <ArrowRight className="w-5 h-5 text-neutral-500 group-hover:text-gold-400 group-hover:translate-x-1 transition-all shrink-0" />
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Step 2: Location in Ceará */}
          {step === 2 && (
            <div className="animate-fade-in-up">
              <div className="flex items-center gap-2 mb-2">
                <button 
                  onClick={() => setStep(1)}
                  className="text-xs text-gold-400 hover:underline flex items-center gap-1"
                >
                  ← Voltar
                </button>
              </div>

              <h3 className="font-serif text-xl sm:text-2xl font-bold text-white mb-2">
                2. Onde você mora atualmente no Ceará?
              </h3>
              <p className="text-neutral-400 text-xs sm:text-sm mb-6">
                Isso nos ajuda a planejar se seu atendimento será na sede ou em nossas visitas no interior:
              </p>

              <div className="grid sm:grid-cols-2 gap-3">
                {locations.map((loc, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleNextStep2(loc)}
                    className="flex items-center gap-3 p-4 rounded-xl bg-[#181820] border border-neutral-800 hover:border-gold-500/50 hover:bg-[#1E1E28] transition-all text-left group"
                  >
                    <MapPin className="w-4 h-4 text-gold-400 shrink-0" />
                    <span className="text-xs sm:text-sm text-neutral-200 group-hover:text-white font-medium">
                      {loc}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Step 3: Status */}
          {step === 3 && (
            <div className="animate-fade-in-up">
              <div className="flex items-center gap-2 mb-2">
                <button 
                  onClick={() => setStep(2)}
                  className="text-xs text-gold-400 hover:underline flex items-center gap-1"
                >
                  ← Voltar
                </button>
              </div>

              <h3 className="font-serif text-xl sm:text-2xl font-bold text-white mb-2">
                3. Qual o momento do seu caso?
              </h3>
              <p className="text-neutral-400 text-xs sm:text-sm mb-6">
                Última pergunta para direcionar com prioridade à advogada responsável:
              </p>

              <div className="grid gap-3.5">
                {statuses.map((stat, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleFinish(stat)}
                    className="flex items-center justify-between p-4 sm:p-5 rounded-2xl bg-[#181820] border border-neutral-800 hover:border-gold-500/50 hover:bg-[#1E1E28] transition-all text-left group"
                  >
                    <span className="text-xs sm:text-sm text-neutral-200 group-hover:text-gold-200 font-medium">
                      {stat}
                    </span>
                    <ArrowRight className="w-4 h-4 text-neutral-500 group-hover:text-gold-400 group-hover:translate-x-1 transition-all shrink-0" />
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Step 4: Final Screen with Pre-filled WhatsApp CTA */}
          {step === 4 && (
            <div className="text-center animate-fade-in-up py-4">
              <div className="w-16 h-16 rounded-full bg-emerald-500/15 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 className="w-9 h-9" />
              </div>

              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white mb-2">
                Triagem Concluída com Sucesso!
              </h3>
              
              <p className="text-sm text-neutral-300 max-w-lg mx-auto mb-6">
                Identificamos que seu caso tem elementos importantes para análise imediata pela <strong className="text-white">Dra. Samara Selly</strong> e <strong className="text-white">Dra. Mariana Souza</strong>.
              </p>

              {/* Summary Pill Card */}
              <div className="p-4 rounded-2xl bg-[#181820] border border-neutral-800 text-left max-w-lg mx-auto mb-8 space-y-2 text-xs">
                <div className="flex justify-between border-b border-neutral-800/80 pb-2">
                  <span className="text-neutral-400">Área selecionada:</span>
                  <span className="text-gold-300 font-semibold">{selectedArea}</span>
                </div>
                <div className="flex justify-between border-b border-neutral-800/80 pb-2">
                  <span className="text-neutral-400">Região:</span>
                  <span className="text-white font-medium">{selectedLocation}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-neutral-400">Situação:</span>
                  <span className="text-neutral-200 font-medium truncate max-w-[220px]">{selectedStatus}</span>
                </div>
              </div>

              {/* Big Action CTA */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
                <a
                  href={getWhatsAppUrl(generatedWhatsAppMsg)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl text-sm font-bold uppercase tracking-wider text-black bg-gold-metallic hover:opacity-95 shadow-xl shadow-gold-500/30 transition-all"
                >
                  <MessageCircle className="w-5 h-5 fill-black/20" />
                  <span>Enviar Caso para as Advogadas</span>
                </a>

                <button
                  onClick={handleReset}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-4 rounded-xl text-xs font-semibold text-neutral-400 hover:text-white bg-[#181820] border border-neutral-800 transition-colors"
                >
                  <RotateCcw className="w-4 h-4" />
                  <span>Refazer</span>
                </button>
              </div>

              <p className="text-[11px] text-neutral-500 mt-4">
                🔒 Seus dados e informações são mantidos sob estrito sigilo profissional e LGPD.
              </p>
            </div>
          )}

        </div>

      </div>
    </section>
  );
};
