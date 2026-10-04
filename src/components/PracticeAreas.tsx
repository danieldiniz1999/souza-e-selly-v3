import React, { useState } from 'react';
import { ShieldCheck, Briefcase, Scale, AlertTriangle, CheckCircle, ArrowRight } from 'lucide-react';
import { WhatsAppIcon } from './WhatsAppIcon';
import { PRACTICE_AREAS, PracticeArea } from '@/data/practiceAreas';
import { getWhatsAppUrl } from '@/lib/utils';

export const PracticeAreas: React.FC = () => {
  const [activeAreaId, setActiveAreaId] = useState<string>(PRACTICE_AREAS[0].id);

  const activeArea = PRACTICE_AREAS.find((a) => a.id === activeAreaId) || PRACTICE_AREAS[0];

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'ShieldCheck':
        return <ShieldCheck className="w-6 h-6 text-gold-400" />;
      case 'Briefcase':
        return <Briefcase className="w-6 h-6 text-gold-400" />;
      case 'Scale':
        return <Scale className="w-6 h-6 text-gold-400" />;
      default:
        return <ShieldCheck className="w-6 h-6 text-gold-400" />;
    }
  };

  return (
    <section id="areas" className="py-16 bg-[#09090B] relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-gold-500/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gold-500/10 border border-gold-500/30 text-gold-400 text-[10px] font-semibold uppercase tracking-wider mb-3">
            <Scale className="w-3 h-3" />
            <span>Áreas de Atuação Especializada</span>
          </div>

          <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-white leading-tight mb-4">
            Especialistas no que mais importa: <br className="hidden sm:inline" />
            <span className="text-gold-metallic">Previdenciário, Trabalhista e Cível</span>
          </h2>

          <p className="text-neutral-300 text-xs sm:text-sm font-light leading-relaxed">
            Não atuamos com fórmulas genéricas. Cada caso recebe estudo aprofundado pelas sócias fundadoras para garantir a máxima probabilidade de êxito e ressarcimento integral.
          </p>
        </div>

        {/* Areas Interactive Selector Tabs */}
        <div className="flex flex-wrap justify-center gap-2.5 mb-10">
          {PRACTICE_AREAS.map((area) => {
            const isSelected = area.id === activeAreaId;
            return (
              <button
                key={area.id}
                onClick={() => setActiveAreaId(area.id)}
                className={`flex items-center gap-2.5 px-4 py-2.5 rounded-xl text-xs font-bold transition-all duration-300 border ${
                  isSelected
                    ? 'bg-gradient-to-r from-[#1E1C16] to-[#141418] text-white border-gold-500 shadow-md shadow-gold-500/15 ring-1 ring-gold-500/30'
                    : 'bg-[#121215] text-neutral-400 border-neutral-800 hover:border-gold-500/40 hover:text-neutral-200'
                }`}
              >
                <div className={`p-1.5 rounded-lg ${isSelected ? 'bg-gold-500/20 text-gold-400' : 'bg-neutral-800/80 text-neutral-400'}`}>
                  {getIcon(area.iconName)}
                </div>
                <div className="text-left">
                  <div className="text-xs font-bold">{area.title}</div>
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
        <div className="rounded-2xl bg-[#111116] border border-gold-500/30 p-6 sm:p-8 shadow-xl relative overflow-hidden transition-all duration-500">
          
          <div className="grid lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Col: Overview, Urgency Warning & CTA */}
            <div className="lg:col-span-5 flex flex-col justify-between h-full">
              <div>
                <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md bg-gold-500/10 text-gold-400 text-[10px] font-semibold uppercase mb-3">
                  {getIcon(activeArea.iconName)}
                  <span>Foco Estratégico</span>
                </div>

                <h3 className="font-serif text-xl sm:text-2xl font-bold text-white mb-2">
                  {activeArea.title}
                </h3>
                
                <p className="text-gold-300 text-xs font-medium mb-3">
                  {activeArea.subtitle}
                </p>

                <p className="text-neutral-300 text-xs leading-relaxed mb-5 font-light">
                  {activeArea.description}
                </p>

                {/* Urgency Box */}
                <div className="p-3.5 rounded-xl bg-amber-950/20 border border-amber-600/30 mb-6 flex items-start gap-2.5">
                  <AlertTriangle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <p className="text-[11px] text-amber-200/90 leading-relaxed font-light">
                    {activeArea.urgencyWarning}
                  </p>
                </div>
              </div>

              {/* Direct Action for this Area */}
              <div className="pt-3 border-t border-neutral-800">
                <a
                  href={getWhatsAppUrl(`Olá, advogadas! Gostaria de conversar com vocês sobre um caso de ${activeArea.title}.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-xs font-bold uppercase tracking-wider text-black bg-gold-metallic hover:opacity-95 shadow-md shadow-gold-500/20 transition-all group"
                >
                  <WhatsAppIcon className="w-3.5 h-3.5 fill-black/80" />
                  <span>Consultar Meu Caso em {activeArea.title}</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </a>
                <p className="text-[10px] text-center text-neutral-400 mt-1.5">
                  Atendimento sigiloso direto com a equipe jurídica especializada
                </p>
              </div>

            </div>

            {/* Right Col: Specific Items & Most Common Cases */}
            <div className="lg:col-span-7 space-y-4">
              
              {/* Pillar Items */}
              <div className="grid gap-3">
                {activeArea.items.map((item, idx) => (
                  <div key={idx} className="p-4 rounded-xl bg-[#17171E] border border-neutral-800 hover:border-gold-500/30 transition-all">
                    <div className="flex items-start justify-between gap-4 mb-1.5">
                      <h4 className="font-serif text-sm font-bold text-white flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-gold-500" />
                        {item.title}
                      </h4>
                    </div>
                    <p className="text-xs text-neutral-300 leading-relaxed mb-2 font-light">
                      {item.description}
                    </p>
                    <div className="inline-flex items-center gap-1.5 text-[11px] text-gold-300 font-medium">
                      <CheckCircle className="w-3 h-3 text-gold-400" />
                      <span>{item.benefit}</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Typical Cases Pill Badges */}
              <div className="p-4 rounded-xl bg-[#0D0D10] border border-neutral-800/80">
                <h4 className="text-[10px] font-semibold uppercase tracking-wider text-neutral-400 mb-2">
                  Casos Mais Frequentes Atendidos no Ceará:
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {activeArea.typicalCases.map((c, i) => (
                    <span 
                      key={i}
                      className="px-2.5 py-1 rounded-md bg-[#1A1A22] border border-neutral-800 text-neutral-200 text-[11px] hover:border-gold-500/30 hover:text-gold-200 transition-colors"
                    >
                      {c}
                    </span>
                  ))}
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
