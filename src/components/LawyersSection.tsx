import React from 'react';
import { Award, GraduationCap, CheckCircle2, MessageCircle, Scale, Shield } from 'lucide-react';
import { LAWYERS } from '@/data/lawyers';
import { getWhatsAppUrl } from '@/lib/utils';

export const LawyersSection: React.FC = () => {
  return (
    <section id="advogadas" className="py-24 bg-[#09090B] relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-1/2 right-10 w-96 h-96 bg-gold-500/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-gold-600/5 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold-500/10 border border-gold-500/30 text-gold-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <Award className="w-3.5 h-3.5" />
            <span>Sócias Fundadoras</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
            Quem Luta Pelos Seus Direitos: <br className="hidden sm:inline" />
            <span className="text-gold-metallic">Dra. Samara Selly e Dra. Mariana Souza</span>
          </h2>

          <p className="text-neutral-300 text-base sm:text-lg font-light leading-relaxed">
            União de excelência técnica acadêmica com a sensibilidade prática de 8 anos dedicados a famílias e trabalhadores cearenses.
          </p>
        </div>

        {/* Lawyers Grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-10">
          {LAWYERS.map((lawyer) => (
            <div 
              key={lawyer.id}
              className="rounded-3xl bg-[#111116] border border-gold-500/30 overflow-hidden shadow-2xl flex flex-col justify-between group hover:border-gold-500/60 transition-all duration-300"
            >
              <div>
                {/* Photo and Badges Header */}
                <div className="relative h-80 sm:h-96 w-full overflow-hidden bg-neutral-900">
                  <img
                    src={lawyer.imageUrl}
                    alt={lawyer.name}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700 brightness-95 contrast-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#111116] via-[#111116]/40 to-transparent" />
                  
                  {/* Floating OAB & Experience badges */}
                  <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                    <span className="px-3.5 py-1 rounded-full bg-black/80 backdrop-blur-md border border-gold-500/50 text-gold-300 text-xs font-bold uppercase tracking-wider">
                      {lawyer.oab}
                    </span>
                    <span className="px-3 py-1 rounded-full bg-black/80 backdrop-blur-md border border-neutral-700 text-neutral-200 text-xs font-medium">
                      {lawyer.experience}
                    </span>
                  </div>

                  {/* Name overlay */}
                  <div className="absolute bottom-4 left-6 right-6">
                    <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white mb-1">
                      {lawyer.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-gold-400 font-medium">
                      {lawyer.title}
                    </p>
                  </div>
                </div>

                {/* Content Details */}
                <div className="p-6 sm:p-8 space-y-6">
                  
                  {/* Academic Credentials Box */}
                  <div className="p-4 rounded-2xl bg-[#171720] border border-neutral-800">
                    <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-gold-400 mb-3">
                      <GraduationCap className="w-4 h-4" />
                      <span>Especializações Acadêmicas</span>
                    </div>
                    <ul className="space-y-2">
                      {lawyer.postGraduations.map((post, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 text-xs text-neutral-200">
                          <CheckCircle2 className="w-4 h-4 text-gold-400 shrink-0 mt-0.5" />
                          <span>{post}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Bio */}
                  <p className="text-sm text-neutral-300 leading-relaxed font-light">
                    {lawyer.bio}
                  </p>

                  {/* Specialties Pills */}
                  <div>
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-3">
                      Atuação Prioritária:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {lawyer.specialties.map((spec, i) => (
                        <span 
                          key={i}
                          className="px-3 py-1 rounded-lg bg-[#181822] border border-neutral-800 text-xs text-neutral-300"
                        >
                          {spec}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Inspiring Quote */}
                  <div className="p-4 rounded-xl bg-gold-500/5 border-l-2 border-gold-500 text-xs italic text-neutral-300 leading-relaxed">
                    "{lawyer.quote}"
                  </div>

                </div>
              </div>

              {/* Action Button at bottom */}
              <div className="p-6 sm:p-8 pt-0">
                <a
                  href={getWhatsAppUrl(`Olá! Gostaria de falar especificamente com a ${lawyer.name} sobre meu caso.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-xs font-bold uppercase tracking-wider text-neutral-200 bg-[#1A1A22] hover:bg-gold-500 hover:text-black border border-gold-500/40 hover:border-gold-500 transition-all duration-300 shadow-md"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Falar com {lawyer.name.split(' ')[0]} {lawyer.name.split(' ')[1]}</span>
                </a>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
