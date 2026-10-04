import React from 'react';
import { MessageSquareText, FolderCheck, Scale, Banknote, ArrowRight } from 'lucide-react';
import { getWhatsAppUrl } from '@/lib/utils';

export const ProcessTimeline: React.FC = () => {
  const steps = [
    {
      step: "01",
      title: "Triagem & Conversa Inicial Sem Custo",
      desc: "Você nos conta a sua situação pelo WhatsApp, telefone ou presencialmente. Nossas advogadas avaliam a viabilidade jurídica do seu caso sem você pagar nada pela análise.",
      icon: MessageSquareText,
      pill: "100% Gratuito"
    },
    {
      step: "02",
      title: "Coleta de Documentos Sem Estresse",
      desc: "Orientamos exatamente o que precisa. Se você mora no interior do Ceará e tiver dificuldade, recolhemos os documentos durante nossas visitas regionais ou por fotos no WhatsApp.",
      icon: FolderCheck,
      pill: "Apoio no Interior"
    },
    {
      step: "03",
      title: "Ação Rápida & Combate Judicial",
      desc: "Ingressamos com a ação adequada no INSS ou na Justiça (Estadual, Federal ou do Trabalho) buscando tutelas de urgência (liminares) para agilizar seu benefício.",
      icon: Scale,
      pill: "Máxima Agilidade"
    },
    {
      step: "04",
      title: "Seu Direito na Conta & Conquista",
      desc: "Acompanhamos até a liberação final dos valores e retroativos. Prestação de contas transparente e honorários contratuais pagos no êxito da causa.",
      icon: Banknote,
      pill: "Segurança e Vitória"
    }
  ];

  return (
    <section className="py-12 sm:py-16 bg-[#0C0C0F] border-t border-neutral-800/80 relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-1/2 right-1/4 w-80 h-80 bg-gold-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-3.5 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gold-500/10 border border-gold-500/30 text-gold-400 text-[10px] font-semibold uppercase tracking-wider mb-2.5 sm:mb-3">
            <span>Passo a Passo Transparente</span>
          </div>

          <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-white leading-tight mb-3 sm:mb-4">
            Como Funciona Seu Atendimento: <br className="hidden sm:inline" />
            <span className="text-gold-metallic">Simples, Humano e Seguro</span>
          </h2>

          <p className="text-neutral-300 text-xs sm:text-sm font-light leading-relaxed">
            Eliminamos todo o medo de burocracias. Você não precisa entender de leis difíceis: cuidamos de cada detalhe com rigor e carinho.
          </p>
        </div>

        {/* Steps Grid: 1 col on mobile, 2 cols on tablet, 4 cols on desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-4 lg:gap-5 mb-8 sm:mb-12">
          {steps.map((s, idx) => {
            const Icon = s.icon;
            return (
              <div 
                key={idx}
                className="card-luxury p-4 sm:p-5 rounded-xl flex flex-col justify-between group relative overflow-hidden"
              >
                <div>
                  {/* Top Step Number and Badge */}
                  <div className="flex items-center justify-between mb-3.5 sm:mb-4">
                    <span className="font-serif text-2xl font-extrabold text-gold-500/40 group-hover:text-gold-400 transition-colors">
                      {s.step}
                    </span>
                    <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-[#1B1B24] border border-neutral-800 text-gold-300">
                      {s.pill}
                    </span>
                  </div>

                  {/* Icon */}
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-gold-500/10 border border-gold-500/30 flex items-center justify-center text-gold-400 mb-3 sm:mb-3.5 group-hover:scale-105 transition-transform">
                    <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>

                  {/* Title */}
                  <h3 className="font-serif text-sm sm:text-base font-bold text-white mb-1.5 sm:mb-2">
                    {s.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs text-neutral-400 leading-relaxed font-light">
                    {s.desc}
                  </p>
                </div>

                <div className="mt-3.5 sm:mt-4 pt-2.5 sm:pt-3 border-t border-neutral-800/80 text-[10px] text-gold-400/80 font-medium flex items-center gap-1">
                  <span>Etapa {s.step} de 04</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Action Button */}
        <div className="text-center">
          <a
            href={getWhatsAppUrl("Olá! Gostaria de dar o primeiro passo e enviar meu caso para avaliação.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-3 rounded-xl text-xs font-bold uppercase tracking-wider text-black bg-gold-metallic hover:opacity-95 shadow-md shadow-gold-500/20 transition-all w-full sm:w-auto"
          >
            <span>Dar o Primeiro Passo Agora</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>
    </section>
  );
};
