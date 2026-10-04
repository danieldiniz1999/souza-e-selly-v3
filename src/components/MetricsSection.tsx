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
    <section id="numeros" className="py-14 bg-[#0C0C0F] border-y border-neutral-800/80 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-5xl h-56 bg-gold-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 lg:px-8 relative z-10">
        
        {/* Title */}
        <div className="text-center max-w-xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gold-500/10 border border-gold-500/30 text-gold-400 text-[10px] font-semibold uppercase tracking-wider mb-2.5">
            <TrendingUp className="w-3 h-3" />
            <span>Autoridade Comprovada</span>
          </div>
          <h2 className="font-serif text-xl sm:text-3xl font-bold text-white">
            Resultados que traduzem nosso <span className="text-gold-metallic">Compromisso</span>
          </h2>
        </div>

        {/* 4 Cards Responsive Grid: 2x2 on mobile/tablet, 4 across on desktop */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-4 lg:gap-5">
          {metrics.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div 
                key={idx}
                className="card-luxury p-3.5 sm:p-5 rounded-xl flex flex-col justify-between group text-center sm:text-left relative overflow-hidden"
              >
                {/* Accent top border */}
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-gold-500/50 to-transparent group-hover:via-gold-400 transition-all" />

                <div>
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-gold-500/10 border border-gold-500/30 flex items-center justify-center text-gold-400 mb-2.5 sm:mb-4 mx-auto sm:mx-0 group-hover:scale-105 transition-transform">
                    <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>

                  <div className="font-serif text-xl sm:text-2xl lg:text-3xl font-extrabold text-white tracking-tight mb-0.5">
                    <span className="text-gold-metallic">{item.value}</span>
                  </div>

                  <div className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-gold-400 mb-1">
                    {item.label}
                  </div>

                  <p className="text-[11px] sm:text-xs text-neutral-400 leading-relaxed font-light">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-3 sm:mt-4 pt-2.5 sm:pt-3 border-t border-neutral-800/80 text-[9px] sm:text-[10px] text-neutral-400">
                  Dados verificados do escritório
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
