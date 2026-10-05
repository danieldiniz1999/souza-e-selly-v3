import React from 'react';
import { ArrowRight, MapPin, CheckCircle2, Scale } from 'lucide-react';
import { WhatsAppIcon } from './WhatsAppIcon';
import { CearaMap } from './CearaMap';
import { getWhatsAppUrl } from '@/lib/utils';

export const Hero: React.FC = () => {
  return (
    <section id="inicio" className="relative min-h-[85vh] flex items-center pt-28 pb-16 overflow-hidden bg-mesh-dark">
      {/* Background Glows & Luxury Spotlights */}
      <div className="ambient-gold-spotlight -top-20 left-1/2 -translate-x-1/2 w-[750px] h-[500px]" />
      <div className="absolute top-1/4 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[450px] bg-gold-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-10 right-10 w-80 h-80 bg-amber-600/5 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-gold-500/5 rounded-full blur-[140px] pointer-events-none" />

      {/* Grid Pattern overlay */}
      <div 
        className="absolute inset-0 opacity-[0.035] pointer-events-none bg-grid-pattern"
      />

      <div className="max-w-6xl mx-auto px-3.5 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          
          {/* Left Column: Headlines & Call to Actions */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Top Authority Pill with Live Status */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-[#1F1B14] via-[#16161D] to-[#121216] border border-gold-500/40 shadow-lg shadow-gold-500/10 mb-4 sm:mb-5 max-w-full">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_10px_rgba(52,211,153,0.8)] shrink-0" />
              <img src="/logo.jpg" alt="Souza & Selly" className="w-4 h-4 rounded-full object-cover border border-gold-400/60 shrink-0" />
              <span className="text-[10px] sm:text-[11px] font-semibold text-neutral-200 tracking-wide leading-tight truncate sm:whitespace-normal">
                8 Anos de Atuação • Atendimento Presencial em Todo o Ceará
              </span>
            </div>

            {/* Main Title */}
            <h1 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-white leading-[1.18] tracking-tight mb-4 sm:mb-5">
              O seu direito não pode esperar. Nossa dedicação{' '}
              <span className="text-gold-metallic">vai até você em todo o Ceará.</span>
            </h1>

            {/* Subtitle with core message */}
            <p className="text-xs sm:text-sm lg:text-base text-neutral-300 leading-relaxed mb-5 sm:mb-6 max-w-xl font-light">
              Com sede em Fortaleza e atuação presencial em todo o interior cearense, a{' '}
              <strong className="text-white font-semibold">Dra. Samara Selly</strong> e a{' '}
              <strong className="text-white font-semibold">Dra. Maria Souza</strong>{' '}
              lutam incansavelmente por quem teve seu benefício do INSS negado, sofreu injustiça no trabalho ou necessita de defesa cível e familiar segura.
            </p>

            {/* Human Touch Highlight Callout */}
            <div className="w-full p-3.5 sm:p-4 rounded-xl bg-gradient-to-r from-[#171720] via-[#14141A] to-[#121216] border-l-4 border-l-gold-500 border border-neutral-800/80 mb-5 sm:mb-6 flex items-start gap-3 shadow-lg shadow-black/40 group hover:border-gold-500/40 transition-all duration-300">
              <div className="p-2 rounded-lg bg-gold-500/15 text-gold-400 shrink-0 group-hover:scale-110 group-hover:bg-gold-500/25 transition-all">
                <MapPin className="w-4 h-4 text-gold-400" />
              </div>
              <p className="text-xs sm:text-[13px] text-neutral-300 leading-relaxed">
                <strong className="text-gold-300 font-semibold">Nosso diferencial de coração:</strong> Não atendemos você como mais um número. Viajamos regularmente pelo interior do estado para visitar clientes, ouvir cada história de perto e coletar documentos pessoalmente.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto mb-6 sm:mb-8">
              <a
                href={getWhatsAppUrl("Olá! Gostaria de uma avaliação gratuita do meu caso com a Dra. Samara e Dra. Maria.")}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold inline-flex items-center justify-center gap-2.5 px-5 sm:px-6 py-3 sm:py-3.5 rounded-xl text-xs font-bold uppercase tracking-wider text-black group"
              >
                <WhatsAppIcon className="w-4 h-4 fill-black/85 group-hover:scale-110 transition-transform shrink-0" />
                <span>Avaliar Meu Caso no WhatsApp</span>
                <ArrowRight className="w-3.5 h-3.5 ml-0.5 group-hover:translate-x-1.5 transition-transform shrink-0" />
              </a>

              <a
                href="#triagem"
                className="btn-dark-luxury inline-flex items-center justify-center gap-2 px-4 sm:px-5 py-3 sm:py-3.5 rounded-xl text-xs font-semibold text-neutral-200 group"
              >
                <Scale className="w-3.5 h-3.5 text-gold-400 group-hover:scale-110 transition-transform shrink-0" />
                <span>Simular Meu Direito Online</span>
              </a>
            </div>

            {/* Micro Trust Seals */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-3 pt-4 border-t border-neutral-800/80 w-full text-[11px] sm:text-xs text-neutral-400">
              <div className="flex items-center gap-2 p-2.5 rounded-lg bg-[#14141A]/80 border border-neutral-800/80 hover:border-gold-500/40 hover:bg-[#181822] transition-colors">
                <CheckCircle2 className="w-3.5 h-3.5 text-gold-400 shrink-0" />
                <span className="text-neutral-200 font-medium">Análise Sem Custo</span>
              </div>
              <div className="flex items-center gap-2 p-2.5 rounded-lg bg-[#14141A]/80 border border-neutral-800/80 hover:border-gold-500/40 hover:bg-[#181822] transition-colors">
                <CheckCircle2 className="w-3.5 h-3.5 text-gold-400 shrink-0" />
                <span className="text-neutral-200 font-medium">Honorários no Êxito</span>
              </div>
              <div className="flex items-center gap-2 p-2.5 rounded-lg bg-[#14141A]/80 border border-neutral-800/80 hover:border-gold-500/40 hover:bg-[#181822] transition-colors col-span-2 sm:col-span-1">
                <CheckCircle2 className="w-3.5 h-3.5 text-gold-400 shrink-0" />
                <span className="text-neutral-200 font-medium">Sigilo e Ética OAB</span>
              </div>
            </div>

          </div>

          {/* Right Column: Animated Ceará Map */}
          <div className="lg:col-span-5 relative w-full mt-6 lg:mt-0 flex items-center justify-center">
            <CearaMap />
          </div>

        </div>
      </div>
    </section>
  );
};

