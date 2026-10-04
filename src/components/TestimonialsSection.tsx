import React from 'react';
import { Star, MapPin, CheckCircle2, MessageSquare, ArrowRight } from 'lucide-react';
import { WhatsAppIcon } from './WhatsAppIcon';
import { TESTIMONIALS } from '@/data/testimonials';
import { getWhatsAppUrl } from '@/lib/utils';

export const TestimonialsSection: React.FC = () => {
  return (
    <section id="depoimentos" className="py-16 bg-[#09090B] relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-gold-500/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-gold-600/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gold-500/10 border border-gold-500/30 text-gold-400 text-[10px] font-semibold uppercase tracking-wider mb-2.5">
            <MessageSquare className="w-3 h-3" />
            <span>Vozes de Quem Conquistou a Justiça</span>
          </div>

          <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-white leading-tight mb-3">
            Histórias Reais de 6 Cidades do Ceará: <br className="hidden sm:inline" />
            <span className="text-gold-metallic">O Impacto do Nosso Trabalho</span>
          </h2>

          <p className="text-neutral-300 text-xs sm:text-sm font-light leading-relaxed">
            De Fortaleza aos cantos mais distantes do sertão cearense, conheça quem confiou na Dra. Samara Selly e na Dra. Mariana Souza para transformar injustiças em vitórias.
          </p>
        </div>

        {/* 6 Testimonials Grid: Wide Rectangular Landscape Cards */}
        <div className="grid md:grid-cols-2 gap-4 sm:gap-5 mb-10">
          {TESTIMONIALS.map((dep) => (
            <div 
              key={dep.id}
              className="card-luxury p-4 sm:p-5 rounded-xl flex flex-col justify-between group relative overflow-hidden transition-all duration-300 hover:border-gold-500/50"
            >
              {/* Subtle top indicator */}
              <div className="absolute top-0 left-4 right-4 h-[1px] bg-gradient-to-r from-transparent via-gold-500/40 to-transparent group-hover:via-gold-400 transition-all" />

              <div>
                {/* Header: Stars & Highlight Badge in one row */}
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2.5">
                  <div className="flex items-center gap-2">
                    <div className="flex items-center gap-0.5 text-gold-400">
                      {[...Array(dep.rating)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-gold-400" />
                      ))}
                    </div>
                    <span className="text-[10px] text-neutral-400">• {dep.date}</span>
                  </div>

                  <div className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-gold-500/10 border border-gold-500/20 text-gold-300 text-[10px] font-semibold">
                    <CheckCircle2 className="w-3 h-3 text-gold-400 shrink-0" />
                    <span className="truncate max-w-[220px]">{dep.highlight}</span>
                  </div>
                </div>

                {/* Quote */}
                <p className="text-xs text-neutral-300 leading-relaxed font-light mb-3.5 italic">
                  "{dep.comment}"
                </p>
              </div>

              {/* Author & City footer */}
              <div className="pt-2.5 border-t border-neutral-800/80 flex items-center justify-between gap-2">
                <div className="flex items-center gap-2.5 min-w-0">
                  <img
                    src={dep.avatarUrl}
                    alt={dep.name}
                    className="w-8 h-8 rounded-full object-cover border border-gold-500/40 shrink-0"
                  />
                  <div className="min-w-0">
                    <h4 className="text-xs font-bold text-white leading-tight truncate">
                      {dep.name}
                    </h4>
                    <p className="text-[10px] text-neutral-400 truncate">
                      {dep.caseSummary}
                    </p>
                  </div>
                </div>

                {/* City Pill */}
                <div className="flex items-center gap-1 px-2 py-0.5 rounded-md bg-[#181822] border border-neutral-800 text-[10px] font-semibold text-gold-400 shrink-0">
                  <MapPin className="w-2.5 h-2.5 text-gold-500" />
                  <span>{dep.city}, {dep.state}</span>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Confidence CTA Banner */}
        <div className="rounded-2xl bg-gradient-to-r from-[#171720] via-[#121217] to-[#171720] border border-gold-500/30 p-5 sm:p-7 text-center max-w-2xl mx-auto shadow-xl">
          <h3 className="font-serif text-base sm:text-lg font-bold text-white mb-1.5">
            Sua história também merece um final de vitória e dignidade.
          </h3>
          <p className="text-neutral-400 text-xs max-w-lg mx-auto mb-4 font-light">
            Não enfrente órgãos burocráticos ou empresas sozinho. Deixe que duas advogadas combativas e com 8 anos de experiência cuidem de tudo para você.
          </p>
          <a
            href={getWhatsAppUrl("Olá! Li os depoimentos de clientes do Ceará no site de vocês e gostaria de contar a minha situação.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider text-black bg-gold-metallic hover:opacity-95 shadow-md shadow-gold-500/20 transition-all"
          >
            <WhatsAppIcon className="w-3.5 h-3.5 fill-black/80" />
            <span>Quero Uma Avaliação do Meu Caso</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>
    </section>
  );
};
