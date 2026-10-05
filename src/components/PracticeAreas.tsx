import React, { useState } from 'react';
import { ShieldCheck, Briefcase, Scale, AlertTriangle, CheckCircle, ArrowRight } from 'lucide-react';
import { WhatsAppIcon } from './WhatsAppIcon';
import { PRACTICE_AREAS, PracticeArea } from '@/data/practiceAreas';
import { getWhatsAppUrl } from '@/lib/utils';

export const PracticeAreas: React.FC = () => {
  const [activeAreaId, setActiveAreaId] = useState<string>(PRACTICE_AREAS[0].id);

  const activeArea = PRACTICE_AREAS.find((a) => a.id === activeAreaId) || PRACTICE_AREAS[0];

  const getIcon = (iconName: string, sizeClass = "w-4 h-4") => {
    switch (iconName) {
      case 'ShieldCheck':
        return <ShieldCheck className={`${sizeClass} text-gold-400`} />;
      case 'Briefcase':
        return <Briefcase className={`${sizeClass} text-gold-400`} />;
      case 'Scale':
        return <Scale className={`${sizeClass} text-gold-400`} />;
      default:
        return <ShieldCheck className={`${sizeClass} text-gold-400`} />;
    }
  };

  return (
    <section id="areas" className="section-perf py-16 bg-[#09090B] relative overflow-hidden">
      {/* Background accents & luxury spotlight */}
      <div className="ambient-gold-spotlight top-1/3 right-1/4 w-[600px] h-[350px]" />
      <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-[radial-gradient(circle,rgba(197,160,89,0.06)_0%,transparent_70%)] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-3.5 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-6 sm:mb-8">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gold-500/10 border border-gold-500/30 text-gold-400 text-[10px] font-semibold uppercase tracking-wider mb-2.5">
            <Scale className="w-3 h-3 text-gold-400" />
            <span>Áreas de Atuação Especializada</span>
          </div>

          <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-white leading-tight mb-2.5 sm:mb-3">
            Especialistas no que mais importa: <br className="hidden sm:inline" />
            <span className="text-gold-metallic">Previdenciário, Trabalhista e Cível</span>
          </h2>

          <p className="text-neutral-300 text-xs sm:text-sm font-light leading-relaxed">
            Não atuamos com fórmulas genéricas. Cada caso recebe estudo aprofundado pelas sócias fundadoras para garantir a máxima probabilidade de êxito e ressarcimento integral.
          </p>
        </div>

        {/* Areas Interactive Selector Tabs */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-2.5 mb-6 sm:mb-8">
          {PRACTICE_AREAS.map((area) => {
            const isSelected = area.id === activeAreaId;
            return (
              <button
                key={area.id}
                onClick={() => setActiveAreaId(area.id)}
                className={`group/tab relative overflow-hidden flex items-center gap-2.5 px-3.5 sm:px-4 py-2.5 rounded-xl text-xs font-semibold transition-all duration-300 border cursor-pointer ${
                  isSelected
                    ? 'bg-gradient-to-r from-[#221f18] to-[#16161d] text-white border-gold-400 shadow-lg shadow-gold-500/20 ring-1 ring-gold-400/50 -translate-y-0.5'
                    : 'bg-[#121216] text-neutral-400 border-neutral-800/90 hover:border-gold-500/60 hover:text-neutral-100 hover:bg-[#181822] hover:-translate-y-1 hover:shadow-md hover:shadow-black/50'
                }`}
              >
                {/* Subtle shine sweep on tab hover */}
                <div className="pointer-events-none absolute inset-0 -translate-x-full group-hover/tab:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />

                <div className={`p-1.5 rounded-lg transition-all duration-300 relative z-10 ${
                  isSelected 
                    ? 'bg-gold-500/25 text-gold-300 ring-1 ring-gold-500/40' 
                    : 'bg-neutral-800/80 text-neutral-400 group-hover/tab:bg-gold-500/15 group-hover/tab:text-gold-400 group-hover/tab:scale-110'
                }`}>
                  {getIcon(area.iconName, "w-3.5 h-3.5 sm:w-4 sm:h-4")}
                </div>
                <div className="text-left relative z-10">
                  <div className="text-xs font-bold leading-tight group-hover/tab:text-gold-200 transition-colors">{area.title}</div>
                  <div className="text-[10px] font-normal text-neutral-400 hidden sm:block">
                    {area.id === 'previdenciario' && 'INSS & Aposentadorias'}
                    {area.id === 'trabalhista' && 'Direitos & Rescisões'}
                    {area.id === 'civel' && 'Família & Contratos'}
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected Area Deep Dive Showcase */}
        <div className="card-radiant-gold p-4 sm:p-5 lg:p-6 hover:border-gold-400/80 shadow-2xl relative overflow-hidden transition-all duration-500">
          
          <div className="grid lg:grid-cols-12 gap-5 sm:gap-6 items-start">
            
            {/* Left Col: Overview, Urgency Warning & CTA */}
            <div className="lg:col-span-5 flex flex-col justify-between h-full">
              <div>
                <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-md bg-gold-500/10 text-gold-400 text-[10px] font-semibold uppercase mb-2 border border-gold-500/20">
                  {getIcon(activeArea.iconName, "w-3 h-3")}
                  <span>Foco Estratégico</span>
                </div>

                <h3 className="font-serif text-lg sm:text-xl font-bold text-white mb-1 leading-snug">
                  {activeArea.title}
                </h3>
                
                <p className="text-gold-300 text-xs font-medium mb-2 sm:mb-2.5">
                  {activeArea.subtitle}
                </p>

                <p className="text-neutral-300 text-xs leading-relaxed mb-3 sm:mb-3.5 font-light">
                  {activeArea.description}
                </p>

                {/* Urgency Callout */}
                <div className="p-2.5 rounded-lg bg-amber-500/10 border-l-2 border-amber-500 mb-4 flex items-start gap-2">
                  <AlertTriangle className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                  <p className="text-[11px] text-amber-200/90 leading-relaxed font-light">
                    {activeArea.urgencyWarning}
                  </p>
                </div>
              </div>

              {/* Direct Action for this Area */}
              <div className="pt-2 border-t border-neutral-800/80">
                <a
                  href={getWhatsAppUrl(`Olá, advogadas! Gostaria de conversar com vocês sobre um caso de ${activeArea.title}.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-gold w-full inline-flex items-center justify-center gap-1.5 sm:gap-2 px-3.5 sm:px-4 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider text-black group"
                >
                  <WhatsAppIcon className="w-3.5 h-3.5 fill-black/80 group-hover:scale-110 transition-transform shrink-0" />
                  <span className="truncate">Consultar {activeArea.title}</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1.5 transition-transform shrink-0" />
                </a>
                <p className="text-[10px] text-center text-neutral-400 mt-1">
                  Atendimento sigiloso direto com a equipe jurídica especializada
                </p>
              </div>

            </div>

            {/* Right Col: 3 Specific Pillar Items */}
            <div className="lg:col-span-7 space-y-2 sm:space-y-2.5">
              {activeArea.items.map((item, idx) => (
                <div 
                  key={idx} 
                  className="group/item p-3 sm:p-3.5 rounded-xl bg-[#15151B] border border-neutral-800/80 hover:border-gold-500/50 hover:bg-[#1a1a23] hover:translate-x-1 hover:shadow-md transition-all duration-300 cursor-pointer"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-1">
                    <h4 className="font-serif text-xs sm:text-sm font-bold text-white flex items-center gap-1.5 group-hover/item:text-gold-200 transition-colors">
                      <span className="w-1.5 h-1.5 rounded-full bg-gold-400 shrink-0 group-hover/item:scale-125 transition-transform" />
                      {item.title}
                    </h4>
                    <span className="inline-flex items-center gap-1 text-[10px] font-semibold text-gold-300 bg-gold-500/10 px-2 py-0.5 rounded-md border border-gold-500/20 w-fit shrink-0 group-hover/item:border-gold-500/40 transition-colors">
                      <CheckCircle className="w-2.5 h-2.5 text-gold-400 shrink-0" />
                      <span>{item.benefit}</span>
                    </span>
                  </div>
                  <p className="text-[11px] text-neutral-300 group-hover/item:text-neutral-200 leading-relaxed font-light pl-3 sm:pl-0 transition-colors">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>

          </div>

          {/* Bottom Strip: Typical Cases Pills across full width */}
          <div className="mt-4 pt-3.5 border-t border-neutral-800/80 flex flex-col md:flex-row md:items-center gap-2">
            <span className="text-[10px] font-bold uppercase tracking-wider text-neutral-400 shrink-0 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-gold-500" />
              Casos Frequentes no CE:
            </span>
            <div className="flex flex-wrap gap-1 sm:gap-1.5">
              {activeArea.typicalCases.map((c, i) => (
                <a 
                  key={i}
                  href={getWhatsAppUrl(`Olá, advogadas! Gostaria de orientações sobre: ${c}.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-2 py-0.5 rounded-md bg-[#16161C] border border-neutral-800/80 text-neutral-300 text-[10px] hover:border-gold-500/60 hover:text-gold-200 hover:bg-gold-500/10 hover:scale-105 active:scale-95 transition-all cursor-pointer"
                  title={`Consultar caso: ${c}`}
                >
                  {c}
                </a>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
