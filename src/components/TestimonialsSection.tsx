import React, { useState } from 'react';
import { Star, MapPin, Quote, CheckCircle2, MessageSquare, ArrowRight } from 'lucide-react';
import { TESTIMONIALS, Testimonial } from '@/data/testimonials';
import { getWhatsAppUrl } from '@/lib/utils';

export const TestimonialsSection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('todos');

  const filteredTestimonials = activeFilter === 'todos' 
    ? TESTIMONIALS 
    : TESTIMONIALS.filter(t => t.area.toLowerCase().includes(activeFilter.toLowerCase()) || t.city.toLowerCase().includes(activeFilter.toLowerCase()));

  return (
    <section id="depoimentos" className="py-24 bg-[#09090B] relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-gold-500/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-gold-600/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gold-500/10 border border-gold-500/30 text-gold-400 text-[10px] font-semibold uppercase tracking-wider mb-3">
            <MessageSquare className="w-3 h-3" />
            <span>Vozes de Quem Conquistou a Justiça</span>
          </div>

          <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-white leading-tight mb-4">
            Histórias Reais de 6 Cidades do Ceará: <br className="hidden sm:inline" />
            <span className="text-gold-metallic">O Impacto do Nosso Trabalho</span>
          </h2>

          <p className="text-neutral-300 text-xs sm:text-sm font-light leading-relaxed">
            De Fortaleza aos cantos mais distantes do sertão cearense, conheça quem confiou na Dra. Samara Selly e na Dra. Mariana Souza para transformar injustiças em vitórias.
          </p>
        </div>

        {/* 6 Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
          {TESTIMONIALS.map((dep) => (
            <div 
              key={dep.id}
              className="card-luxury p-5 rounded-xl flex flex-col justify-between group relative overflow-hidden"
            >
              {/* Subtle top indicator */}
              <div className="absolute top-0 left-5 right-5 h-[2px] bg-gradient-to-r from-transparent via-gold-500/40 to-transparent group-hover:via-gold-400 transition-all" />

              <div>
                {/* Header: Stars & Date */}
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-0.5 text-gold-400">
                    {[...Array(dep.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-gold-400" />
                    ))}
                  </div>
                  <span className="text-[10px] text-neutral-400">{dep.date}</span>
                </div>

                {/* Case highlight badge */}
                <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-gold-500/10 border border-gold-500/20 text-gold-300 text-[11px] font-semibold mb-3">
                  <CheckCircle2 className="w-3 h-3 text-gold-400 shrink-0" />
                  <span className="truncate">{dep.highlight}</span>
                </div>

                {/* Quote */}
                <p className="text-xs text-neutral-300 leading-relaxed font-light mb-5 italic">
                  "{dep.comment}"
                </p>
              </div>

              {/* Author & City footer */}
              <div className="pt-3 border-t border-neutral-800/80 flex items-center justify-between gap-2.5">
                <div className="flex items-center gap-2.5">
                  <img
                    src={dep.avatarUrl}
                    alt={dep.name}
                    className="w-9 h-9 rounded-full object-cover border border-gold-500/40"
                  />
                  <div>
                    <h4 className="text-xs font-bold text-white leading-tight">
                      {dep.name}
                    </h4>
                    <p className="text-[10px] text-neutral-400 truncate max-w-[130px]">
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
        <div className="rounded-2xl bg-gradient-to-r from-[#171720] via-[#121217] to-[#171720] border border-gold-500/30 p-6 sm:p-8 text-center max-w-3xl mx-auto shadow-xl">
          <h3 className="font-serif text-lg sm:text-xl font-bold text-white mb-2">
            Sua história também merece um final de vitória e dignidade.
          </h3>
          <p className="text-neutral-400 text-xs max-w-lg mx-auto mb-5 font-light">
            Não enfrente órgãos burocráticos ou empresas sozinho. Deixe que duas advogadas combativas e com 8 anos de experiência cuidem de tudo para você.
          </p>
          <a
            href={getWhatsAppUrl("Olá! Li os depoimentos de clientes do Ceará no site de vocês e gostaria de contar a minha situação.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-xs font-bold uppercase tracking-wider text-black bg-gold-metallic hover:opacity-95 shadow-md shadow-gold-500/20 transition-all"
          >
            <span>Quero Uma Avaliação do Meu Caso</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>
    </section>
  );
};
