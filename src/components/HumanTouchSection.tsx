import React from 'react';
import { MapPin, HeartHandshake, Compass, Users2, Car, CheckCircle2, ArrowRight } from 'lucide-react';
import { getWhatsAppUrl } from '@/lib/utils';

export const HumanTouchSection: React.FC = () => {
  const regions = [
    { name: "Fortaleza & Região Metropolitana", desc: "Sede própria na Parquelândia e atendimento presencial com agendamento." },
    { name: "Sertão Central (Quixadá / Quixeramobim)", desc: "Forte atuação em aposentadorias rurais e BPC/LOAS com visitas periódicas." },
    { name: "Região do Cariri (Juazeiro / Crato / Barbalha)", desc: "Defesa de trabalhadores, acidentes de trabalho e causas previdenciárias." },
    { name: "Região Norte & Ibiapaba (Sobral / Tianguá)", desc: "Atuação constante em pensões por morte, auxílios e direitos cíveis." },
    { name: "Sertão dos Crateús & Inhamuns", desc: "Presença ativa para levar a lei a famílias afastadas dos grandes centros." },
    { name: "Centro-Sul (Iguatu / Icó)", desc: "Suporte especializado com perícias judiciais e reversão de indeferimentos." },
  ];

  return (
    <section id="diferencial" className="py-16 bg-[#0C0C0F] border-y border-neutral-800/80 relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-gold-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-gold-600/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-3.5 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gold-500/10 border border-gold-500/30 text-gold-400 text-[10px] font-semibold uppercase tracking-wider mb-2.5 sm:mb-3">
            <Car className="w-3 h-3" />
            <span>Nosso Diferencial Mais Humano</span>
          </div>
          
          <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-white leading-tight mb-3 sm:mb-4">
            A justiça não tem fronteiras: <br className="hidden sm:inline" />
            <span className="text-gold-metallic">Nós vamos até você no interior do Ceará.</span>
          </h2>
          
          <p className="text-neutral-300 text-xs sm:text-sm font-light leading-relaxed">
            Sabemos que quem mora no interior muitas vezes não tem condições físicas ou financeiras de viajar até a capital para lutar por seus direitos. Por isso, a <strong className="text-white">Dra. Samara Selly</strong> e a <strong className="text-white">Dra. Maria Souza</strong> viajam pelo estado para ouvir cada história de perto.
          </p>
        </div>

        {/* 3 Pillars of Humanized Law: 1 col on mobile, 3 cols on tablet/PC */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 sm:gap-4 lg:gap-5 mb-8 sm:mb-12">
          
          {/* Card 1 */}
          <div className="card-radiant-gold p-4 sm:p-5 lg:p-6 flex flex-col justify-between group hover:-translate-y-1.5 hover:border-gold-400/80 transition-all duration-300">
            <div>
              <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-gold-500/15 border border-gold-500/30 flex items-center justify-center text-gold-300 mb-3 sm:mb-4 group-hover:scale-110 group-hover:bg-gold-500/25 group-hover:border-gold-400/60 group-hover:shadow-[0_0_15px_rgba(197,160,89,0.3)] transition-all duration-300">
                <Car className="w-4 h-4 sm:w-5 sm:h-5 text-gold-400" />
              </div>
              <h3 className="font-serif text-sm sm:text-base font-bold text-white mb-1.5 sm:mb-2 group-hover:text-gold-200 transition-colors">
                Visitas Presenciais no Interior
              </h3>
              <p className="text-neutral-300 text-xs leading-relaxed mb-3 font-light">
                Não deixamos a distância ser um obstáculo. Realizamos roteiros periódicos pelo interior cearense para coletar documentos, conversar com os clientes e entender a realidade de cada família.
              </p>
            </div>
            <div className="pt-2.5 sm:pt-3 border-t border-neutral-800/80 flex items-center gap-1.5 text-[11px] text-gold-300 font-medium">
              <CheckCircle2 className="w-3.5 h-3.5 text-gold-400 shrink-0" />
              <span>Acolhimento no seu município</span>
            </div>
          </div>

          {/* Card 2 */}
          <div className="card-radiant-gold p-4 sm:p-5 lg:p-6 flex flex-col justify-between group hover:-translate-y-1.5 hover:border-gold-400/80 transition-all duration-300 ring-1 ring-gold-500/20">
            <div>
              <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-gold-500/15 border border-gold-500/30 flex items-center justify-center text-gold-300 mb-3 sm:mb-4 group-hover:scale-110 group-hover:bg-gold-500/25 group-hover:border-gold-400/60 group-hover:shadow-[0_0_15px_rgba(197,160,89,0.3)] transition-all duration-300">
                <HeartHandshake className="w-4 h-4 sm:w-5 sm:h-5 text-gold-400" />
              </div>
              <h3 className="font-serif text-sm sm:text-base font-bold text-white mb-1.5 sm:mb-2 group-hover:text-gold-200 transition-colors">
                Escuta Sem "Juridiquês"
              </h3>
              <p className="text-neutral-300 text-xs leading-relaxed mb-3 font-light">
                Nada de termos difíceis ou promessas vazias. Explicamos cada etapa do processo de maneira transparente e carinhosa, para que você entenda exatamente o que está acontecendo com sua causa.
              </p>
            </div>
            <div className="pt-2.5 sm:pt-3 border-t border-neutral-800/80 flex items-center gap-1.5 text-[11px] text-gold-300 font-medium">
              <CheckCircle2 className="w-3.5 h-3.5 text-gold-400 shrink-0" />
              <span>Transparência do início ao fim</span>
            </div>
          </div>

          {/* Card 3 */}
          <div className="card-radiant-gold p-4 sm:p-5 lg:p-6 flex flex-col justify-between group hover:-translate-y-1.5 hover:border-gold-400/80 transition-all duration-300">
            <div>
              <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-gold-500/15 border border-gold-500/30 flex items-center justify-center text-gold-300 mb-3 sm:mb-4 group-hover:scale-110 group-hover:bg-gold-500/25 group-hover:border-gold-400/60 group-hover:shadow-[0_0_15px_rgba(197,160,89,0.3)] transition-all duration-300">
                <Users2 className="w-4 h-4 sm:w-5 sm:h-5 text-gold-400" />
              </div>
              <h3 className="font-serif text-sm sm:text-base font-bold text-white mb-1.5 sm:mb-2 group-hover:text-gold-200 transition-colors">
                Busca Ativa de Provas
              </h3>
              <p className="text-neutral-300 text-xs leading-relaxed mb-3 font-light">
                Aposentadoria rural, BPC/LOAS ou horas extras exigem provas robustas. Nós ajudamos você a localizar certidões antigas, contratos, testemunhas e laudos médicos necessários.
              </p>
            </div>
            <div className="pt-2.5 sm:pt-3 border-t border-neutral-800/80 flex items-center gap-1.5 text-[11px] text-gold-300 font-medium">
              <CheckCircle2 className="w-3.5 h-3.5 text-gold-400 shrink-0" />
              <span>Construção de prova sólida</span>
            </div>
          </div>

        </div>

        {/* Regions Grid Showcase */}
        <div className="rounded-2xl bg-[#141418] border border-gold-500/25 hover:border-gold-500/40 p-4 sm:p-6 lg:p-8 relative overflow-hidden transition-all duration-300">
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 sm:gap-4 mb-4 sm:mb-6 pb-4 sm:pb-6 border-b border-neutral-800">
            <div>
              <span className="text-[10px] uppercase tracking-widest text-gold-400 font-semibold">Presença em Todo o Território Cearense</span>
              <h3 className="font-serif text-lg sm:text-xl lg:text-2xl font-bold text-white mt-0.5">
                Onde você estiver no Ceará, estamos prontos para atuar
              </h3>
            </div>
            
            <a
              href={getWhatsAppUrl("Olá! Moro no interior do Ceará e gostaria de saber quando as advogadas estarão na minha região.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-4 sm:px-5 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider text-black bg-gold-metallic hover:scale-105 hover:shadow-[0_0_20px_rgba(197,160,89,0.4)] active:scale-95 transition-all duration-300 shrink-0 w-full sm:w-auto"
            >
              <span>Consultar Agenda no Interior</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5 sm:gap-4">
            {regions.map((reg, idx) => (
              <div 
                key={idx} 
                onClick={() => {
                  const url = getWhatsAppUrl(`Olá! Sou de ${reg.name} e gostaria de agendar um atendimento com a Dra. Samara e Dra. Maria na minha região.`);
                  window.open(url, '_blank', 'noopener,noreferrer');
                }}
                className="group/reg relative overflow-hidden p-3.5 rounded-xl bg-[#1B1B22]/80 border border-neutral-800/90 hover:border-gold-500/70 hover:bg-[#20202c] hover:-translate-y-1 hover:shadow-lg hover:shadow-black/60 transition-all duration-300 ease-out cursor-pointer"
                title={`Clique para falar sobre atendimento em ${reg.name}`}
              >
                {/* Subtle shine ray sweep on hover */}
                <div className="pointer-events-none absolute inset-0 -translate-x-full group-hover/reg:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />

                <div className="flex items-center justify-between mb-1.5 relative z-10">
                  <div className="flex items-center gap-2">
                    <div className="p-1 rounded-md bg-gold-500/10 border border-gold-500/20 group-hover/reg:border-gold-400/50 group-hover/reg:bg-gold-500/20 transition-colors">
                      <MapPin className="w-3.5 h-3.5 text-gold-400 group-hover/reg:scale-110 transition-transform duration-300 shrink-0" />
                    </div>
                    <h4 className="text-xs font-bold text-white group-hover/reg:text-gold-200 transition-colors duration-200">{reg.name}</h4>
                  </div>
                  <ArrowRight className="w-3 h-3 text-neutral-500 group-hover/reg:text-gold-400 group-hover/reg:translate-x-1 transition-all shrink-0" />
                </div>
                <p className="text-[11px] text-neutral-400 group-hover/reg:text-neutral-300 leading-relaxed pl-7 font-light relative z-10 transition-colors duration-200">
                  {reg.desc}
                </p>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
