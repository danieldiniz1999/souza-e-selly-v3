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
    <section id="diferencial" className="py-24 bg-[#0C0C0F] border-y border-neutral-800/80 relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-gold-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gold-600/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold-500/10 border border-gold-500/30 text-gold-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <Car className="w-3.5 h-3.5" />
            <span>Nosso Diferencial Mais Humano</span>
          </div>
          
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
            A justiça não tem fronteiras: <br className="hidden sm:inline" />
            <span className="text-gold-metallic">Nós vamos até você no interior do Ceará.</span>
          </h2>
          
          <p className="text-neutral-300 text-base sm:text-lg font-light leading-relaxed">
            Sabemos que quem mora no interior muitas vezes não tem condições físicas ou financeiras de viajar até a capital para lutar por seus direitos. Por isso, a <strong className="text-white">Dra. Samara Selly</strong> e a <strong className="text-white">Dra. Mariana Souza</strong> viajam pelo estado para ouvir cada história de perto.
          </p>
        </div>

        {/* 3 Pillars of Humanized Law */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          
          {/* Card 1 */}
          <div className="card-luxury p-8 rounded-2xl flex flex-col justify-between group">
            <div>
              <div className="w-14 h-14 rounded-xl bg-gold-500/10 border border-gold-500/30 flex items-center justify-center text-gold-400 mb-6 group-hover:scale-110 transition-transform">
                <Car className="w-7 h-7" />
              </div>
              <h3 className="font-serif text-xl font-bold text-white mb-3">
                Visitas Presenciais no Interior
              </h3>
              <p className="text-neutral-400 text-sm leading-relaxed mb-4">
                Não deixamos a distância ser um obstáculo. Realizamos roteiros periódicos pelo interior cearense para coletar documentos, conversar com os clientes e entender a realidade de cada família.
              </p>
            </div>
            <div className="pt-4 border-t border-neutral-800/80 flex items-center gap-2 text-xs text-gold-300 font-medium">
              <CheckCircle2 className="w-4 h-4 text-gold-500" />
              <span>Acolhimento no seu município</span>
            </div>
          </div>

          {/* Card 2 */}
          <div className="card-luxury p-8 rounded-2xl flex flex-col justify-between group border-gold-500/40 shadow-xl shadow-gold-500/5">
            <div>
              <div className="w-14 h-14 rounded-xl bg-gold-500/10 border border-gold-500/30 flex items-center justify-center text-gold-400 mb-6 group-hover:scale-110 transition-transform">
                <HeartHandshake className="w-7 h-7" />
              </div>
              <h3 className="font-serif text-xl font-bold text-white mb-3">
                Escuta Sem "Juridiquês"
              </h3>
              <p className="text-neutral-400 text-sm leading-relaxed mb-4">
                Nada de termos difíceis ou promessas vazias. Explicamos cada etapa do processo de maneira transparente e carinhosa, para que você entenda exatamente o que está acontecendo com sua causa.
              </p>
            </div>
            <div className="pt-4 border-t border-neutral-800/80 flex items-center gap-2 text-xs text-gold-300 font-medium">
              <CheckCircle2 className="w-4 h-4 text-gold-500" />
              <span>Transparência do início ao fim</span>
            </div>
          </div>

          {/* Card 3 */}
          <div className="card-luxury p-8 rounded-2xl flex flex-col justify-between group">
            <div>
              <div className="w-14 h-14 rounded-xl bg-gold-500/10 border border-gold-500/30 flex items-center justify-center text-gold-400 mb-6 group-hover:scale-110 transition-transform">
                <Users2 className="w-7 h-7" />
              </div>
              <h3 className="font-serif text-xl font-bold text-white mb-3">
                Busca Ativa de Provas
              </h3>
              <p className="text-neutral-400 text-sm leading-relaxed mb-4">
                Aposentadoria rural, BPC/LOAS ou horas extras exigem provas robustas. Nós ajudamos você a localizar certidões antigas, contratos, testemunhas e laudos médicos necessários.
              </p>
            </div>
            <div className="pt-4 border-t border-neutral-800/80 flex items-center gap-2 text-xs text-gold-300 font-medium">
              <CheckCircle2 className="w-4 h-4 text-gold-500" />
              <span>Construção de prova sólida</span>
            </div>
          </div>

        </div>

        {/* Regions Grid Showcase */}
        <div className="rounded-3xl bg-[#141418] border border-gold-500/25 p-8 lg:p-12 relative overflow-hidden">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 mb-8 pb-8 border-b border-neutral-800">
            <div>
              <span className="text-xs uppercase tracking-widest text-gold-400 font-semibold">Presença em Todo o Território Cearense</span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white mt-1">
                Onde você estiver no Ceará, estamos prontos para atuar
              </h3>
            </div>
            
            <a
              href={getWhatsAppUrl("Olá! Moro no interior do Ceará e gostaria de saber quando as advogadas estarão na minha região.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-xs font-bold uppercase tracking-wider text-black bg-gold-metallic hover:opacity-95 shadow-lg shadow-gold-500/20 transition-all shrink-0"
            >
              <span>Consultar Agenda no Interior</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {regions.map((reg, idx) => (
              <div key={idx} className="p-4 rounded-xl bg-[#1B1B22]/70 border border-neutral-800 hover:border-gold-500/40 transition-colors">
                <div className="flex items-center gap-2 mb-2">
                  <MapPin className="w-4 h-4 text-gold-500 shrink-0" />
                  <h4 className="text-sm font-bold text-white">{reg.name}</h4>
                </div>
                <p className="text-xs text-neutral-400 leading-relaxed pl-6">
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
