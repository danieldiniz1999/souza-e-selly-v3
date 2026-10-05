import React, { useState } from 'react';
import { ArrowRight, MapPin, CheckCircle2, Scale } from 'lucide-react';
import { WhatsAppIcon } from './WhatsAppIcon';
import { getWhatsAppUrl } from '@/lib/utils';

export const Hero: React.FC = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [rotate, setRotate] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setMousePos({ x, y });

    // Subtle 3D tilt calculation (-4 to +4 degrees)
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotX = ((y - centerY) / centerY) * -4.5;
    const rotY = ((x - centerX) / centerX) * 4.5;
    setRotate({ x: rotX, y: rotY });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setRotate({ x: 0, y: 0 });
  };

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

      <div className="max-w-6xl mx-auto px-3.5 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          
          {/* Left Column: Headlines & Call to Actions */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Top Authority Pill */}
            <div className="inline-flex items-center gap-2 px-2.5 sm:px-3 py-1 rounded-full bg-[#18181D] border border-gold-500/35 shadow-md shadow-gold-500/5 mb-4 sm:mb-5 max-w-full">
              <img src="/logo.jpg" alt="Souza & Selly" className="w-4 h-4 rounded-full object-cover border border-gold-500/50 shrink-0" />
              <span className="text-[10px] sm:text-[11px] font-semibold text-neutral-200 tracking-wide leading-tight truncate sm:whitespace-normal">
                8 Anos de Excelência Jurídica • Atendimento em Todo o Ceará
              </span>
            </div>

            {/* Main Title */}
            <h1 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-white leading-[1.2] tracking-tight mb-4 sm:mb-5">
              O seu direito não pode esperar. Nossa dedicação{' '}
              <span className="text-gold-metallic">vai até você.</span>
            </h1>

            {/* Subtitle with core message */}
            <p className="text-xs sm:text-sm lg:text-base text-neutral-300 leading-relaxed mb-5 sm:mb-6 max-w-xl font-light">
              Com sede em Fortaleza e atuação próxima em todo o interior do Ceará, a{' '}
              <strong className="text-white font-semibold">Dra. Samara Selly</strong> e a{' '}
              <strong className="text-white font-semibold">Dra. Mariana Souza</strong>{' '}
              lutam incansavelmente por quem teve seu benefício do INSS negado, sofreu injustiça no trabalho ou necessita de defesa cível segura.
            </p>

            {/* Human Touch Highlight Callout */}
            <div className="w-full p-3 sm:p-3.5 rounded-xl bg-gradient-to-r from-[#17171C] to-[#121215] border-l-4 border-l-gold-500 border border-neutral-800/80 mb-5 sm:mb-6 flex items-start gap-2.5 sm:gap-3">
              <div className="p-1.5 rounded-lg bg-gold-500/10 text-gold-400 shrink-0">
                <MapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </div>
              <p className="text-[11px] sm:text-xs text-neutral-300 leading-relaxed">
                <strong className="text-gold-300 font-semibold">Nosso diferencial de coração:</strong> Não atendemos você como mais um número. Viajamos regularmente pelo interior do estado para visitar clientes e coletar documentos pessoalmente.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-3 w-full sm:w-auto mb-6 sm:mb-8">
              <a
                href={getWhatsAppUrl("Olá! Gostaria de uma avaliação gratuita do meu caso com a Dra. Samara e Dra. Mariana.")}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold inline-flex items-center justify-center gap-2 px-4 sm:px-6 py-3 sm:py-3.5 rounded-xl text-xs font-bold uppercase tracking-wider text-black group"
              >
                <WhatsAppIcon className="w-4 h-4 fill-black/80 group-hover:scale-110 transition-transform shrink-0" />
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
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 sm:gap-4 pt-4 border-t border-neutral-800/80 w-full text-[11px] sm:text-xs text-neutral-400">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-gold-400 shrink-0" />
                <span>Análise Inicial Sem Custo</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-gold-400 shrink-0" />
                <span>Honorários no Êxito</span>
              </div>
              <div className="flex items-center gap-2 col-span-2 sm:col-span-1">
                <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-gold-400 shrink-0" />
                <span>Sigilo e Ética OAB</span>
              </div>
            </div>

          </div>

          {/* Right Column: Visual Prestige Card & Founders Showcase */}
          <div className="lg:col-span-5 relative w-full mt-4 lg:mt-0" style={{ perspective: '1200px' }}>
            <div
              className="relative mx-auto max-w-md md:max-w-lg lg:max-w-none group cursor-default"
              onMouseMove={handleMouseMove}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              
              {/* Decorative Frame Glow Halo behind Card */}
              <div 
                className={`absolute -inset-1.5 rounded-3xl bg-gradient-to-b from-gold-500/40 via-gold-600/25 to-gold-700/10 transition-all duration-500 ease-out pointer-events-none ${
                  isHovered ? 'opacity-100 blur-2xl scale-[1.03]' : 'opacity-65 blur-lg scale-100'
                }`} 
              />

              {/* Main Visual Container with 3D Tilt & Floating Elevation */}
              <div 
                className="relative rounded-2xl bg-[#101014] border border-gold-500/30 group-hover:border-gold-400/80 p-4 sm:p-5 lg:p-6 shadow-2xl group-hover:shadow-[0_25px_60px_-12px_rgba(197,160,89,0.32)] overflow-hidden"
                style={{
                  transform: isHovered
                    ? `rotateX(${rotate.x.toFixed(2)}deg) rotateY(${rotate.y.toFixed(2)}deg) translateY(-8px) scale(1.015)`
                    : 'rotateX(0deg) rotateY(0deg) translateY(0px) scale(1)',
                  transition: isHovered
                    ? 'transform 0.12s ease-out, border-color 0.4s ease-out, box-shadow 0.4s ease-out'
                    : 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.5s ease-out, box-shadow 0.5s ease-out',
                  transformStyle: 'preserve-3d',
                }}
              >

                {/* Spotlight follower directly under the mouse pointer */}
                <div
                  className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0"
                  style={{
                    background: isHovered
                      ? `radial-gradient(380px circle at ${mousePos.x}px ${mousePos.y}px, rgba(197, 160, 89, 0.18), transparent 70%)`
                      : 'none',
                  }}
                />

                {/* Luxury Shimmer Light Beam sweep on hover */}
                <div className="pointer-events-none absolute -inset-full top-0 block -skew-x-12 bg-gradient-to-r from-transparent via-white/[0.08] to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-shimmer transition-opacity duration-700 z-0" />

                {/* Content with z-10 positioning */}
                <div className="relative z-10">
                  
                  {/* Header of the Card */}
                  <div className="flex items-center justify-between pb-3.5 sm:pb-4 border-b border-neutral-800">
                    <div className="flex items-center gap-2 sm:gap-2.5">
                      <img
                        src="/logo.jpg"
                        alt="Logo Souza & Selly Advocacia"
                        className="w-10 h-10 rounded-full object-cover border border-gold-500/60 shadow-md shadow-gold-500/10 group-hover:scale-105 group-hover:border-gold-400 group-hover:shadow-[0_0_20px_rgba(197,160,89,0.4)] transition-all duration-300"
                      />
                      <div>
                        <h3 className="font-serif text-base font-bold text-white group-hover:text-gold-200 transition-colors duration-300">Souza & Selly</h3>
                        <p className="text-[11px] text-gold-400 font-medium">Banca Jurídica Especializada</p>
                      </div>
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-gold-500/15 text-gold-300 border border-gold-500/30 group-hover:bg-gold-500/25 group-hover:border-gold-400/80 group-hover:text-gold-200 transition-all duration-300 shadow-sm">
                      OAB / CE
                    </span>
                  </div>

                  {/* Partners Mini Profile Preview */}
                  <div className="py-4 space-y-3">
                    {/* Dra Samara */}
                    <div className="group/subcard p-3 rounded-xl bg-[#17171C] border border-neutral-800/80 hover:border-gold-500/60 hover:bg-[#1a1a23] hover:translate-x-1.5 hover:shadow-lg hover:shadow-black/50 transition-all duration-300 flex items-center gap-3 cursor-pointer">
                      <img
                        src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=120&q=80"
                        alt="Dra. Samara Selly"
                        className="w-11 h-11 rounded-lg object-cover border border-gold-500/40 group-hover/subcard:border-gold-400 group-hover/subcard:scale-105 shrink-0 transition-all duration-300 shadow-sm"
                      />
                      <div className="flex-1 min-w-0">
                        <h4 className="text-xs font-bold text-white group-hover/subcard:text-gold-300 transition-colors duration-200 truncate">Dra. Samara Selly</h4>
                        <p className="text-[11px] text-gold-400 truncate">Pós em Previdenciário & Trabalho</p>
                        <p className="text-[10px] text-neutral-400">8 anos de atuação combativa</p>
                      </div>
                    </div>

                    {/* Dra Mariana */}
                    <div className="group/subcard p-3 rounded-xl bg-[#17171C] border border-neutral-800/80 hover:border-gold-500/60 hover:bg-[#1a1a23] hover:translate-x-1.5 hover:shadow-lg hover:shadow-black/50 transition-all duration-300 flex items-center gap-3 cursor-pointer">
                      <img
                        src="https://images.unsplash.com/photo-1580894732444-8ecded7900cd?auto=format&fit=crop&w=120&q=80"
                        alt="Dra. Mariana Souza"
                        className="w-11 h-11 rounded-lg object-cover border border-gold-500/40 group-hover/subcard:border-gold-400 group-hover/subcard:scale-105 shrink-0 transition-all duration-300 shadow-sm"
                      />
                      <div className="flex-1 min-w-0">
                        <h4 className="text-xs font-bold text-white group-hover/subcard:text-gold-300 transition-colors duration-200 truncate">Dra. Mariana Souza</h4>
                        <p className="text-[11px] text-gold-400 truncate">Pós em Previdenciário & Tributário</p>
                        <p className="text-[10px] text-neutral-400">Estratégia jurídica e patrimonial</p>
                      </div>
                    </div>
                  </div>

                  {/* Direct Help Prompt */}
                  <div className="pt-3 border-t border-neutral-800/90 text-center">
                    <a
                      href={getWhatsAppUrl("Olá! Gostaria de agendar uma conversa com as advogadas.")}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/btn w-full inline-flex items-center justify-center gap-2 px-3 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider text-neutral-200 bg-[#212128] hover:bg-gold-500 hover:text-black border border-gold-500/30 hover:border-gold-400 hover:shadow-[0_0_25px_rgba(197,160,89,0.45)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
                    >
                      <WhatsAppIcon className="w-3.5 h-3.5 fill-current group-hover/btn:scale-110 transition-transform duration-200" />
                      <span>Iniciar Atendimento Humanizado</span>
                    </a>
                  </div>

                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

