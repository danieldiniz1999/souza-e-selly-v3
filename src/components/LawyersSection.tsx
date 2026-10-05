import React from 'react';
import { Award, GraduationCap, CheckCircle2 } from 'lucide-react';
import { WhatsAppIcon } from './WhatsAppIcon';
import { LAWYERS } from '@/data/lawyers';
import { getWhatsAppUrl } from '@/lib/utils';

export const LawyersSection: React.FC = () => {
  return (
    <section id="advogadas" className="py-12 sm:py-16 lg:py-20 bg-[#09090B] relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-1/2 right-10 w-80 h-80 bg-gold-500/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-72 h-72 bg-gold-600/5 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-3.5 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gold-500/10 border border-gold-500/30 text-gold-400 text-[10px] font-semibold uppercase tracking-wider mb-2.5">
            <Award className="w-3 h-3" />
            <span>Sócias Fundadoras</span>
          </div>

          <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-white leading-tight mb-2.5 sm:mb-3">
            Quem Luta Pelos Seus Direitos: <br className="hidden sm:inline" />
            <span className="text-gold-metallic">Dra. Samara Selly e Dra. Mariana Souza</span>
          </h2>

          <p className="text-neutral-300 text-xs sm:text-sm font-light leading-relaxed">
            União de excelência técnica acadêmica com a sensibilidade prática de 8 anos dedicados a famílias e trabalhadores cearenses.
          </p>
        </div>

        {/* Lawyers Grid: Horizontal Cards with Photo Left & Info Right */}
        <div className="grid lg:grid-cols-2 gap-5 sm:gap-6 items-stretch">
          {LAWYERS.map((lawyer) => (
            <div 
              key={lawyer.id}
              className="rounded-2xl bg-[#111116] border border-gold-500/30 overflow-hidden shadow-xl flex flex-col sm:flex-row group hover:border-gold-500/50 transition-all duration-300"
            >
              {/* Photo Column on Left */}
              <div className="relative w-full sm:w-44 md:w-52 lg:w-40 xl:w-48 shrink-0 overflow-hidden bg-neutral-900 h-64 sm:h-auto sm:min-h-full">
                <img
                  src={lawyer.imageUrl}
                  alt={lawyer.name}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700 brightness-95 contrast-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#111116]/80 via-transparent to-black/30 sm:bg-gradient-to-r sm:from-transparent sm:to-[#111116]/40" />
                
                {/* Floating OAB & Experience badges */}
                <div className="absolute top-2.5 left-2.5 flex flex-col gap-1 z-10">
                  <span className="px-2 py-0.5 rounded-full bg-black/85 backdrop-blur-md border border-gold-500/50 text-gold-300 text-[10px] font-bold uppercase tracking-wider w-fit">
                    {lawyer.oab}
                  </span>
                  <span className="px-2 py-0.5 rounded-full bg-black/85 backdrop-blur-md border border-neutral-700 text-neutral-200 text-[9px] font-medium w-fit">
                    {lawyer.experience}
                  </span>
                </div>
              </div>

              {/* Information Column on Right */}
              <div className="flex-1 p-3.5 sm:p-4.5 lg:p-5 flex flex-col justify-between space-y-2.5 sm:space-y-3">
                <div>
                  {/* Header */}
                  <div className="mb-2">
                    <h3 className="font-serif text-lg sm:text-xl font-bold text-white leading-tight">
                      {lawyer.name}
                    </h3>
                    <p className="text-[11px] text-gold-400 font-medium mt-0.5 leading-snug">
                      {lawyer.title}
                    </p>
                  </div>

                  {/* Academic Credentials */}
                  <div className="p-2.5 rounded-lg bg-[#16161E] border border-neutral-800/80 mb-2.5">
                    <div className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider text-gold-400 mb-1.5">
                      <GraduationCap className="w-3 h-3 text-gold-400" />
                      <span>Especializações Acadêmicas</span>
                    </div>
                    <ul className="space-y-1">
                      {lawyer.postGraduations.map((post, idx) => (
                        <li key={idx} className="flex items-start gap-1.5 text-[11px] text-neutral-200 leading-tight">
                          <CheckCircle2 className="w-3 h-3 text-gold-400 shrink-0 mt-0.5" />
                          <span>{post}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Bio */}
                  <p className="text-[11px] text-neutral-300 leading-relaxed font-light mb-2.5">
                    {lawyer.bio}
                  </p>

                  {/* Specialties Pills */}
                  <div className="mb-2.5">
                    <span className="text-[10px] font-semibold uppercase tracking-wider text-neutral-400 block mb-1">
                      Atuação Prioritária:
                    </span>
                    <div className="flex flex-wrap gap-1">
                      {lawyer.specialties.map((spec, i) => (
                        <span 
                          key={i}
                          className="px-2 py-0.5 rounded-md bg-[#181822] border border-neutral-800 text-[10px] text-neutral-300"
                        >
                          {spec}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Quote */}
                  <div className="p-2 rounded-lg bg-gold-500/5 border-l-2 border-gold-500 text-[10px] italic text-neutral-300 leading-relaxed mb-3">
                    "{lawyer.quote}"
                  </div>
                </div>

                {/* WhatsApp Action Button */}
                <div>
                  <a
                    href={getWhatsAppUrl(`Olá! Gostaria de falar especificamente com a ${lawyer.name} sobre meu caso.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-gold w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-xs font-bold uppercase tracking-wider text-black group"
                  >
                    <WhatsAppIcon className="w-3.5 h-3.5 fill-black/80 group-hover:scale-110 transition-transform duration-200" />
                    <span>Falar com {lawyer.name.split(' ')[0]} {lawyer.name.split(' ')[1]}</span>
                  </a>
                </div>

              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
