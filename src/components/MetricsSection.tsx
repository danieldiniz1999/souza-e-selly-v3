import React from 'react';
import { Award, Users, Scale, MapPin, TrendingUp, ShieldCheck } from 'lucide-react';

export const MetricsSection: React.FC = () => {
  const metrics = [
    {
      value: "8+",
      unit: "Anos",
      label: "De Atuação Ininterrupta",
      desc: "Histórico consolidado de combate a injustiças no Ceará.",
      icon: Award
    },
    {
      value: "+3.000",
      unit: "Famílias",
      label: "Famílias Atendidas",
      desc: "Vidas transformadas com benefícios e indenizações justas.",
      icon: Users
    },
    {
      value: "+65",
      unit: "Municípios",
      label: "Cidades Alcançadas",
      desc: "Presença ativa da capital ao sertão e litoral cearense.",
      icon: MapPin
    },
    {
      value: "98.7%",
      unit: "Índice",
      label: "De Satisfação",
      desc: "Avaliações máximas por acolhimento, agilidade e transparência.",
      icon: ShieldCheck
    }
  ];

  return (
    <section id="numeros" className="py-14 bg-[#0B0B0E] border-y border-neutral-800/80 relative overflow-hidden">
      {/* Background glow & luxury spotlight */}
      <div className="ambient-gold-spotlight top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[300px]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-5xl h-56 bg-gold-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 lg:px-8 relative z-10">
        
        {/* Title */}
        <div className="text-center max-w-xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gold-500/10 border border-gold-500/30 text-gold-400 text-[10px] font-semibold uppercase tracking-wider mb-2.5">
            <TrendingUp className="w-3 h-3 text-gold-400" />
            <span>Autoridade Comprovada</span>
          </div>
          <h2 className="font-serif text-xl sm:text-3xl font-bold text-white tracking-tight">
            Resultados que traduzem nosso <span className="text-gold-metallic">Compromisso</span>
          </h2>
        </div>

        {/* 4 Cards Responsive Grid: 2x2 on mobile/tablet, 4 across on desktop */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-4 lg:gap-5">
          {metrics.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div 
                key={idx}
                className="card-radiant-gold p-4 sm:p-5 flex flex-col justify-between group text-center sm:text-left relative overflow-hidden hover:border-gold-400/90 hover:-translate-y-1 hover:shadow-[0_15px_35px_-10px_rgba(197,160,89,0.25)] transition-all duration-300"
              >
                {/* Number Aura Glow */}
                <div className="absolute -right-6 -bottom-6 w-28 h-28 bg-gold-500/10 rounded-full blur-2xl group-hover:bg-gold-500/25 transition-all duration-500 pointer-events-none" />

                <div>
                  <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-gradient-to-br from-gold-500/20 via-gold-600/15 to-transparent border border-gold-500/30 flex items-center justify-center text-gold-300 mb-3 sm:mb-4 mx-auto sm:mx-0 group-hover:scale-110 group-hover:border-gold-400 group-hover:shadow-[0_0_20px_rgba(197,160,89,0.35)] transition-all duration-300">
                    <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-gold-400" />
                  </div>

                  <div className="font-serif text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight mb-1">
                    <span className="text-gold-metallic drop-shadow-sm">{item.value}</span>
                  </div>

                  <div className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-gold-300 mb-1.5">
                    {item.label}
                  </div>

                  <p className="text-[11px] sm:text-xs text-neutral-300 leading-relaxed font-light">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-3.5 sm:mt-4 pt-2.5 sm:pt-3 border-t border-neutral-800/80 text-[10px] text-neutral-400 font-medium flex items-center justify-center sm:justify-start gap-1">
                  <span className="text-gold-400">✓</span>
                  <span>Dados verificados do escritório</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
