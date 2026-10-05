import React, { useState, useMemo } from 'react';
import { HelpCircle, ChevronDown, Search } from 'lucide-react';
import { WhatsAppIcon } from './WhatsAppIcon';
import { FAQS } from '@/data/faq';
import { getWhatsAppUrl } from '@/lib/utils';

type CategoryFilter = 'todos' | 'previdenciario' | 'trabalhista' | 'civel' | 'atendimento';

interface CategoryOption {
  key: CategoryFilter;
  label: string;
}

const CATEGORIES: CategoryOption[] = [
  { key: 'todos', label: 'Todas (12)' },
  { key: 'previdenciario', label: 'Previdenciário & INSS' },
  { key: 'trabalhista', label: 'Trabalhista' },
  { key: 'civel', label: 'Cível & Família' },
  { key: 'atendimento', label: 'Interior CE & Honorários' },
];

export const FaqSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<CategoryFilter>('todos');
  const [searchTerm, setSearchTerm] = useState('');
  const [openId, setOpenId] = useState<string | null>(FAQS[0].id);

  const filteredFaqs = useMemo(() => {
    return FAQS.filter((item) => {
      const matchesCategory = activeCategory === 'todos' || item.categoryKey === activeCategory;
      const term = searchTerm.toLowerCase().trim();
      if (!term) return matchesCategory;
      const matchesSearch =
        item.question.toLowerCase().includes(term) ||
        item.answer.toLowerCase().includes(term) ||
        item.category.toLowerCase().includes(term);
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchTerm]);

  // Split into 2 columns for a compact masonry layout without vertical whitespace
  const col1 = useMemo(() => filteredFaqs.filter((_, idx) => idx % 2 === 0), [filteredFaqs]);
  const col2 = useMemo(() => filteredFaqs.filter((_, idx) => idx % 2 === 1), [filteredFaqs]);

  const renderFaqCard = (faq: typeof FAQS[0]) => {
    const isOpen = openId === faq.id;
    return (
      <div
        key={faq.id}
        className={`group/faq relative overflow-hidden rounded-xl border transition-all duration-300 ease-out cursor-pointer ${
          isOpen
            ? 'bg-[#15151D] border-gold-500/60 shadow-lg shadow-gold-500/10 ring-1 ring-gold-500/30 -translate-y-0.5'
            : 'bg-[#101014] border-neutral-800/80 hover:border-gold-500/60 hover:bg-[#161622] hover:-translate-y-1 hover:shadow-lg hover:shadow-black/50'
        }`}
      >
        {/* Subtle shimmer ray sweep on card hover */}
        <div className="pointer-events-none absolute inset-0 -translate-x-full group-hover/faq:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/[0.04] to-transparent z-0" />

        <button
          onClick={() => setOpenId(isOpen ? null : faq.id)}
          className="w-full py-2.5 sm:py-3 px-3.5 sm:px-4 text-left flex items-start justify-between gap-2.5 transition-colors relative z-10"
        >
          <div className="flex flex-col gap-1 pr-1">
            <div className="flex items-center gap-1.5">
              <span className="text-[9px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded bg-gold-500/10 text-gold-400 border border-gold-500/20 group-hover/faq:border-gold-400/50 group-hover/faq:bg-gold-500/20 group-hover/faq:text-gold-300 transition-all shrink-0">
                {faq.category}
              </span>
            </div>
            <span className="font-serif text-xs sm:text-[13px] font-semibold text-white leading-snug group-hover/faq:text-gold-200 transition-colors">
              {faq.question}
            </span>
          </div>

          <div
            className={`p-1 rounded-full border text-gold-400 shrink-0 mt-0.5 transition-all duration-300 ${
              isOpen 
                ? 'rotate-180 bg-gold-500/20 border-gold-500/60 text-gold-300 scale-110' 
                : 'border-neutral-800 group-hover/faq:border-gold-500/50 group-hover/faq:bg-gold-500/10 group-hover/faq:scale-110'
            }`}
          >
            <ChevronDown className="w-3.5 h-3.5" />
          </div>
        </button>

        {isOpen && (
          <div className="px-3.5 sm:px-4 pb-3.5 pt-2 text-[11px] sm:text-xs text-neutral-300 font-light leading-relaxed border-t border-neutral-800/80 animate-fade-in-up relative z-10">
            {faq.answer}
          </div>
        )}
      </div>
    );
  };

  return (
    <section id="faq" className="section-perf py-12 sm:py-16 bg-[#09090B] relative overflow-hidden">
      {/* Background accents & luxury spotlight */}
      <div className="ambient-gold-spotlight bottom-10 left-10 w-[600px] h-[350px]" />
      <div className="absolute bottom-10 left-10 w-72 h-72 bg-[radial-gradient(circle,rgba(197,160,89,0.05)_0%,transparent_70%)] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Header Compact */}
        <div className="text-center mb-6 sm:mb-8">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gold-500/10 border border-gold-500/30 text-gold-400 text-[10px] font-semibold uppercase tracking-wider mb-2">
            <HelpCircle className="w-3 h-3 text-gold-400" />
            <span>Tire Suas Dúvidas</span>
          </div>

          <h2 className="font-serif text-xl sm:text-2xl lg:text-3xl font-bold text-white leading-tight mb-2">
            Perguntas Frequentes & <span className="text-gold-metallic">Respostas Claras</span>
          </h2>

          <p className="text-neutral-300 text-xs sm:text-sm font-light leading-relaxed max-w-lg mx-auto mb-4">
            Respostas diretas sobre o INSS, ações trabalhistas, inventários e atendimento no Ceará.
          </p>

          {/* Category Tabs & Quick Search */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-2.5 max-w-2xl mx-auto">
            <div className="flex items-center gap-1 sm:gap-1.5 overflow-x-auto max-w-full pb-1 sm:pb-0 scrollbar-none">
              {CATEGORIES.map((cat) => {
                const isActive = activeCategory === cat.key;
                return (
                  <button
                    key={cat.key}
                    onClick={() => setActiveCategory(cat.key)}
                    className={`px-2.5 py-1 rounded-lg text-[11px] font-medium whitespace-nowrap transition-all duration-200 ${
                      isActive
                        ? 'bg-gold-metallic text-black font-semibold shadow-sm shadow-gold-500/20 scale-105'
                        : 'bg-[#121217] text-neutral-400 hover:text-white border border-neutral-800 hover:border-gold-500/40 hover:scale-105 active:scale-95'
                    }`}
                  >
                    {cat.label}
                  </button>
                );
              })}
            </div>

            {/* Quick Search Input */}
            <div className="relative w-full sm:w-44 shrink-0">
              <Search className="w-3 h-3 text-neutral-400 absolute left-2.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Buscar dúvida..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-[#121217] border border-neutral-800 rounded-lg pl-7 pr-2.5 py-1 text-[11px] text-white placeholder-neutral-500 focus:outline-none focus:border-gold-500 transition-colors"
              />
            </div>
          </div>
        </div>

        {/* 2-Column Accordion Layout (Compacts vertical height by ~60%) */}
        {filteredFaqs.length > 0 ? (
          <div className="grid md:grid-cols-2 gap-2.5 sm:gap-3 items-start mb-6 sm:mb-8">
            <div className="flex flex-col gap-2.5 sm:gap-3">
              {col1.map(renderFaqCard)}
            </div>
            <div className="flex flex-col gap-2.5 sm:gap-3">
              {col2.map(renderFaqCard)}
            </div>
          </div>
        ) : (
          <div className="text-center py-8 text-neutral-500 text-xs bg-[#101014] rounded-xl border border-neutral-800 mb-6">
            Nenhuma pergunta encontrada com o termo "{searchTerm}".
          </div>
        )}

        {/* Still Have Questions Box Compact with Hover Animation */}
        <div className="group/faqcta relative p-4 sm:p-5 rounded-2xl bg-[#121217] border border-gold-500/30 hover:border-gold-400/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left shadow-xl hover:shadow-[0_20px_50px_-10px_rgba(197,160,89,0.25)] hover:-translate-y-1.5 transition-all duration-500 ease-out overflow-hidden">
          {/* Subtle luxury shimmer sweep on hover */}
          <div className="pointer-events-none absolute -inset-full top-0 block -skew-x-12 bg-gradient-to-r from-transparent via-white/[0.06] to-transparent opacity-0 group-hover/faqcta:opacity-100 group-hover/faqcta:animate-shimmer transition-opacity duration-700 z-0" />

          <div className="relative z-10">
            <h4 className="font-serif text-xs sm:text-sm md:text-base font-bold text-white group-hover/faqcta:text-gold-200 transition-colors uppercase tracking-wide mb-1">
              Ainda ficou com alguma dúvida sobre o seu caso?
            </h4>
            <p className="text-[11px] sm:text-xs text-neutral-300 font-light">
              Nossa equipe responde diretamente no WhatsApp, de forma gratuita e sem compromisso.
            </p>
          </div>

          <a
            href={getWhatsAppUrl("Olá! Estava lendo o FAQ no site e tenho uma dúvida específica sobre meu processo.")}
            target="_blank"
            rel="noopener noreferrer"
            className="group/btn inline-flex items-center gap-2 px-5 py-2.5 sm:py-3 rounded-xl text-xs font-bold uppercase tracking-wider text-black bg-gold-metallic hover:scale-105 hover:shadow-[0_0_25px_rgba(197,160,89,0.5)] active:scale-95 transition-all duration-300 shrink-0 relative z-10"
          >
            <WhatsAppIcon className="w-4 h-4 fill-black/85 group-hover/btn:scale-110 transition-transform duration-200" />
            <span>Falar com as Doutoras</span>
          </a>
        </div>

      </div>
    </section>
  );
};
