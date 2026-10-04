import React from 'react';
import { ArrowRight, MapPin, CheckCircle2, Scale, Clock } from 'lucide-react';
import { WhatsAppIcon } from './WhatsAppIcon';
import { getWhatsAppUrl, OFFICE_INFO } from '@/lib/utils';

export const Hero: React.FC = () => {
  return (
    <section id="inicio" className="relative min-h-[85vh] flex items-center pt-28 pb-16 overflow-hidden bg-mesh-dark">
      {/* Background Glows & Accent Gradients */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gold-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-10 right-10 w-72 h-72 bg-amber-600/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-gold-500/5 rounded-full blur-[130px] pointer-events-none" />

      {/* Grid Pattern overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #C5A059 1px, transparent 0)`,
          backgroundSize: '36px 36px',
        }}
      />

      <div className="max-w-6xl mx-auto px-4 lg:px-8 relative z-10 w-full">
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: Headlines & Call to Actions */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Top Authority Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#18181D] border border-gold-500/35 shadow-md shadow-gold-500/5 mb-5">
              <img src="/logo.jpg" alt="Souza & Selly" className="w-4 h-4 rounded-full object-cover border border-gold-500/50 shrink-0" />
              <span className="text-[11px] font-semibold text-neutral-200 tracking-wide">
                8 Anos de Excelência Jurídica • Atendimento em Todo o Ceará
              </span>
            </div>

            {/* Main Title */}
            <h1 className="font-serif text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-[1.2] tracking-tight mb-5">
              O seu direito não pode esperar. Nossa dedicação{' '}
              <span className="text-gold-metallic">vai até você.</span>
            </h1>

            {/* Subtitle with core message */}
            <p className="text-sm sm:text-base text-neutral-300 leading-relaxed mb-6 max-w-xl font-light">
              Com sede em Fortaleza e atuação próxima em todo o interior do Ceará, a{' '}
              <strong className="text-white font-semibold">Dra. Samara Selly</strong> e a{' '}
              <strong className="text-white font-semibold">Dra. Mariana Souza</strong>{' '}
              lutam incansavelmente por quem teve seu benefício do INSS negado, sofreu injustiça no trabalho ou necessita de defesa cível segura.
            </p>

            {/* Human Touch Highlight Callout */}
            <div className="w-full p-3.5 rounded-xl bg-gradient-to-r from-[#17171C] to-[#121215] border-l-4 border-l-gold-500 border border-neutral-800/80 mb-6 flex items-start gap-3">
              <div className="p-1.5 rounded-lg bg-gold-500/10 text-gold-400 shrink-0">
                <MapPin className="w-4 h-4" />
              </div>
              <p className="text-xs text-neutral-300 leading-relaxed">
                <strong className="text-gold-300 font-semibold">Nosso diferencial de coração:</strong> Não atendemos você como mais um número. Viajamos regularmente pelo interior do estado para visitar clientes e coletar documentos pessoalmente.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto mb-8">
              <a
                href={getWhatsAppUrl("Olá! Gostaria de uma avaliação gratuita do meu caso com a Dra. Samara e Dra. Mariana.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl text-xs font-bold uppercase tracking-wider text-black bg-gold-metallic shadow-lg shadow-gold-500/20 hover:shadow-gold-500/35 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 group"
              >
                <WhatsAppIcon className="w-4 h-4 fill-black/80 group-hover:scale-110 transition-transform" />
                <span>Avaliar Meu Caso no WhatsApp</span>
                <ArrowRight className="w-3.5 h-3.5 ml-0.5 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#triagem"
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl text-xs font-semibold text-neutral-200 bg-[#16161A] hover:bg-[#202026] border border-gold-500/30 hover:border-gold-500/50 transition-all duration-300"
              >
                <Scale className="w-3.5 h-3.5 text-gold-400" />
                <span>Simular Meu Direito Online</span>
              </a>
            </div>

            {/* Micro Trust Seals */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-4 border-t border-neutral-800/80 w-full text-xs text-neutral-400">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-gold-400 shrink-0" />
                <span>Análise Inicial Sem Custo</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-gold-400 shrink-0" />
                <span>Honorários no Êxito</span>
              </div>
              <div className="flex items-center gap-2 col-span-2 sm:col-span-1">
                <CheckCircle2 className="w-4 h-4 text-gold-400 shrink-0" />
                <span>Sigilo e Ética OAB</span>
              </div>
            </div>

          </div>

          {/* Right Column: Visual Prestige Card & Founders Showcase */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Decorative Frame Glow */}
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-b from-gold-500/40 via-gold-700/20 to-transparent blur-lg opacity-70" />

              {/* Main Visual Container */}
              <div className="relative rounded-2xl bg-[#101014] border border-gold-500/30 p-5 sm:p-6 shadow-2xl overflow-hidden">
                
                {/* Header of the Card */}
                <div className="flex items-center justify-between pb-4 border-b border-neutral-800">
                  <div className="flex items-center gap-2.5">
                    <img
                      src="/logo.jpg"
                      alt="Logo Souza & Selly Advocacia"
                      className="w-10 h-10 rounded-full object-cover border border-gold-500/60 shadow-md shadow-gold-500/10"
                    />
                    <div>
                      <h3 className="font-serif text-base font-bold text-white">Souza & Selly</h3>
                      <p className="text-[11px] text-gold-400 font-medium">Banca Jurídica Especializada</p>
                    </div>
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-gold-500/15 text-gold-300 border border-gold-500/30">
                    OAB / CE
                  </span>
                </div>

                {/* Partners Mini Profile Preview */}
                <div className="py-4 space-y-3">
                  {/* Dra Samara */}
                  <div className="p-3 rounded-xl bg-[#17171C] border border-neutral-800/80 hover:border-gold-500/40 transition-colors flex items-center gap-3">
                    <img
                      src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=120&q=80"
                      alt="Dra. Samara Selly"
                      className="w-11 h-11 rounded-lg object-cover border border-gold-500/40 shrink-0"
                    />
                    <div className="flex-1 min-w-0">
                      <h4 className="text-xs font-bold text-white truncate">Dra. Samara Selly</h4>
                      <p className="text-[11px] text-gold-400 truncate">Pós em Previdenciário & Trabalho</p>
                      <p className="text-[10px] text-neutral-400">8 anos de atuação combativa</p>
                    </div>
                  </div>

                  {/* Dra Mariana */}
                  <div className="p-3 rounded-xl bg-[#17171C] border border-neutral-800/80 hover:border-gold-500/40 transition-colors flex items-center gap-3">
                    <img
                      src="https://images.unsplash.com/photo-1580894732444-8ecded7900cd?auto=format&fit=crop&w=120&q=80"
                      alt="Dra. Mariana Souza"
                      className="w-11 h-11 rounded-lg object-cover border border-gold-500/40 shrink-0"
                    />
                    <div className="flex-1 min-w-0">
                      <h4 className="text-xs font-bold text-white truncate">Dra. Mariana Souza</h4>
                      <p className="text-[11px] text-gold-400 truncate">Pós em Previdenciário & Tributário</p>
                      <p className="text-[10px] text-neutral-400">Estratégia jurídica e patrimonial</p>
                    </div>
                  </div>
                </div>

                {/* Direct Help Prompt */}
                <div className="pt-3 border-t border-neutral-800/90 text-center">
                  <div className="flex items-center justify-center gap-1.5 text-[11px] text-neutral-300 mb-3">
                    <Clock className="w-3 h-3 text-gold-400" />
                    <span>Horário: 09:00 às 17:00 • Retorno Rápido</span>
                  </div>

                  <a
                    href={getWhatsAppUrl("Olá! Gostaria de agendar uma conversa com as advogadas.")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 px-3 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider text-neutral-200 bg-[#212128] hover:bg-gold-500 hover:text-black border border-gold-500/30 transition-all duration-300"
                  >
                    <WhatsAppIcon className="w-3.5 h-3.5 fill-current" />
                    <span>Iniciar Atendimento Humanizado</span>
                  </a>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
