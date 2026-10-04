import React, { useState } from 'react';
import { HelpCircle, ChevronDown, MessageCircle, Search } from 'lucide-react';
import { FAQS } from '@/data/faq';
import { getWhatsAppUrl } from '@/lib/utils';

export const FaqSection: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>(FAQS[0].id);
  const [searchTerm, setSearchTerm] = useState('');

  const toggleAccordion = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  const filteredFaqs = FAQS.filter(
    (item) =>
      item.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section id="faq" className="py-16 bg-[#09090B] relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-gold-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-3xl mx-auto px-4 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gold-500/10 border border-gold-500/30 text-gold-400 text-[10px] font-semibold uppercase tracking-wider mb-3">
            <HelpCircle className="w-3 h-3" />
            <span>Tire Suas Dúvidas</span>
          </div>

          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white leading-tight mb-3">
            Perguntas Frequentes & <span className="text-gold-metallic">Respostas Claras</span>
          </h2>

          <p className="text-neutral-300 text-xs sm:text-sm font-light leading-relaxed mb-6 max-w-lg mx-auto">
            Transparência absoluta antes de qualquer contratação. Veja as dúvidas mais comuns de nossos clientes no Ceará.
          </p>

          {/* Quick Search Bar */}
          <div className="relative max-w-sm mx-auto">
            <Search className="w-3.5 h-3.5 text-neutral-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Buscar dúvida (ex: interior, inss, honorários)..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-[#121217] border border-neutral-800 rounded-xl pl-10 pr-3 py-2.5 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-gold-500 transition-colors"
            />
          </div>
        </div>

        {/* Accordion List */}
        <div className="space-y-3 mb-10">
          {filteredFaqs.length > 0 ? (
            filteredFaqs.map((faq) => {
              const isOpen = openId === faq.id;
              return (
                <div
                  key={faq.id}
                  className={`rounded-xl border transition-all duration-300 overflow-hidden ${
                    isOpen
                      ? 'bg-[#14141A] border-gold-500/40 shadow-md shadow-gold-500/5'
                      : 'bg-[#101014] border-neutral-800/80 hover:border-neutral-700'
                  }`}
                >
                  <button
                    onClick={() => toggleAccordion(faq.id)}
                    className="w-full p-4 sm:p-4.5 text-left flex items-center justify-between gap-3.5 transition-colors"
                  >
                    <div className="flex items-center gap-2.5">
                      <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-gold-500/10 text-gold-400 border border-gold-500/20 shrink-0 hidden sm:inline-block">
                        {faq.category}
                      </span>
                      <span className="font-serif text-xs sm:text-sm font-bold text-white leading-snug">
                        {faq.question}
                      </span>
                    </div>

                    <div
                      className={`p-1.5 rounded-full border border-neutral-700 text-gold-400 shrink-0 transition-transform duration-300 ${
                        isOpen ? 'rotate-180 bg-gold-500/10 border-gold-500/40' : ''
                      }`}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-5 sm:px-6 pb-6 pt-2 text-xs sm:text-sm text-neutral-300 font-light leading-relaxed border-t border-neutral-800/60 animate-fade-in-up">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })
          ) : (
            <div className="text-center py-10 text-neutral-500 text-sm">
              Nenhuma pergunta encontrada com o termo "{searchTerm}".
            </div>
          )}
        </div>

        {/* Still Have Questions Box */}
        <div className="p-6 sm:p-8 rounded-2xl bg-[#131317] border border-gold-500/20 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div>
            <h4 className="font-serif text-lg font-bold text-white mb-1">
              Ainda ficou com alguma dúvida sobre o seu caso?
            </h4>
            <p className="text-xs text-neutral-400">
              Nossa equipe responde diretamente no WhatsApp, de forma gratuita e sem compromisso.
            </p>
          </div>

          <a
            href={getWhatsAppUrl("Olá! Estava lendo o FAQ no site e tenho uma dúvida específica sobre meu processo.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-xs font-bold uppercase tracking-wider text-black bg-gold-metallic hover:opacity-95 shadow-md shadow-gold-500/20 transition-all shrink-0"
          >
            <MessageCircle className="w-4 h-4 fill-black/20" />
            <span>Falar com as Doutoras</span>
          </a>
        </div>

      </div>
    </section>
  );
};
