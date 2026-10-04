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
        className={`rounded-xl border transition-all duration-200 overflow-hidden ${
          isOpen
            ? 'bg-[#14141A] border-gold-500/40 shadow-sm shadow-gold-500/5 ring-1 ring-gold-500/20'
            : 'bg-[#101014] border-neutral-800/80 hover:border-neutral-700/80'
        }`}
      >
        <button
          onClick={() => setOpenId(isOpen ? null : faq.id)}
          className="w-full py-2.5 sm:py-3 px-3.5 sm:px-4 text-left flex items-start justify-between gap-2.5 transition-colors group"
        >
          <div className="flex flex-col gap-1 pr-1">
            <div className="flex items-center gap-1.5">
              <span className="text-[9px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded bg-gold-500/10 text-gold-400 border border-gold-500/20 shrink-0">
                {faq.category}
              </span>
            </div>
            <span className="font-serif text-xs sm:text-[13px] font-semibold text-white leading-snug group-hover:text-gold-200 transition-colors">
              {faq.question}
            </span>
          </div>

          <div
            className={`p-1 rounded-full border border-neutral-800 text-gold-400 shrink-0 mt-0.5 transition-transform duration-200 ${
              isOpen ? 'rotate-180 bg-gold-500/10 border-gold-500/40' : 'group-hover:border-neutral-700'
            }`}
          >
            <ChevronDown className="w-3.5 h-3.5" />
          </div>
        </button>

        {isOpen && (
          <div className="px-3.5 sm:px-4 pb-3.5 pt-2 text-[11px] sm:text-xs text-neutral-300 font-light leading-relaxed border-t border-neutral-800/60 animate-fade-in-up">
            {faq.answer}
          </div>
        )}
      </div>
    );
  };

  return (
    <section id="faq" className="py-12 sm:py-16 bg-[#09090B] relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute bottom-10 left-10 w-72 h-72 bg-gold-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Header Compact */}
        <div className="text-center mb-6 sm:mb-8">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-gold-500/10 border border-gold-500/30 text-gold-400 text-[10px] font-semibold uppercase tracking-wider mb-2">
            <HelpCircle className="w-3 h-3" />
            <span>Tire Suas Dúvidas</span>
          </div>

          <h2 className="font-serif text-xl sm:text-2xl lg:text-3xl font-bold text-white leading-tight mb-2">
            Perguntas Frequentes & <span className="text-gold-metallic">Respostas Claras</span>
          </h2>

          <p className="text-neutral-400 text-xs sm:text-sm font-light leading-relaxed max-w-lg mx-auto mb-4">
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
                    className={`px-2.5 py-1 rounded-lg text-[11px] font-medium whitespace-nowrap transition-all ${
                      isActive
                        ? 'bg-gold-metallic text-black font-semibold shadow-sm shadow-gold-500/20'
                        : 'bg-[#121217] text-neutral-400 hover:text-white border border-neutral-800 hover:border-neutral-700'
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

        {/* Still Have Questions Box Compact */}
        <div className="p-3.5 sm:p-4.5 rounded-xl bg-[#121216] border border-gold-500/20 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
          <div>
            <h4 className="font-serif text-xs sm:text-sm font-bold text-white mb-0.5">
              Ainda ficou com alguma dúvida sobre o seu caso?
            </h4>
            <p className="text-[11px] text-neutral-400 font-light">
              Nossa equipe responde diretamente no WhatsApp, de forma gratuita e sem compromisso.
            </p>
          </div>

          <a
            href={getWhatsAppUrl("Olá! Estava lendo o FAQ no site e tenho uma dúvida específica sobre meu processo.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-[11px] font-bold uppercase tracking-wider text-black bg-gold-metallic hover:opacity-95 shadow-sm shadow-gold-500/20 transition-all shrink-0"
          >
            <WhatsAppIcon className="w-3.5 h-3.5 fill-black/85" />
            <span>Falar no WhatsApp</span>
          </a>
        </div>

      </div>
    </section>
  );
};
