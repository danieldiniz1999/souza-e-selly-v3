import React from 'react';
import { MapPin, Clock, Phone, Mail, Navigation, Car, Shield, ExternalLink } from 'lucide-react';
import { OFFICE_INFO, getWhatsAppUrl } from '@/lib/utils';

export const OfficeLocation: React.FC = () => {
  return (
    <section id="localizacao" className="py-12 sm:py-16 bg-[#0B0B0E] border-t border-neutral-800/80 relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 right-10 w-80 h-80 bg-gold-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-3.5 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gold-500/10 border border-gold-500/30 text-gold-400 text-[10px] font-semibold uppercase tracking-wider mb-2.5 sm:mb-3">
            <MapPin className="w-3 h-3" />
            <span>Sede Física & Atendimento Presencial</span>
          </div>

          <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-white leading-tight mb-3 sm:mb-4">
            Onde Nos Encontrar: <br className="hidden sm:inline" />
            <span className="text-gold-metallic">Sede Própria na Parquelândia</span>
          </h2>

          <p className="text-neutral-300 text-xs sm:text-sm font-light leading-relaxed">
            Localização estratégica em Fortaleza para receber você com privacidade e conforto, além do nosso atendimento em viagens por todo o Ceará.
          </p>
        </div>

        {/* Content Box */}
        <div className="grid lg:grid-cols-12 gap-5 sm:gap-6 items-stretch">
          
          {/* Left: Office Details */}
          <div className="lg:col-span-5 rounded-2xl bg-[#121217] border border-gold-500/30 p-4 sm:p-6 flex flex-col justify-between shadow-xl">
            <div>
              <div className="flex items-center gap-2.5 sm:gap-3 mb-4 sm:mb-5">
                <img
                  src="/logo.jpg"
                  alt="Souza & Selly Advocacia"
                  className="w-10 h-10 sm:w-11 sm:h-11 rounded-full object-cover border border-gold-500/50 shadow-md shadow-gold-500/10 shrink-0"
                />
                <div>
                  <h3 className="font-serif text-sm sm:text-base font-bold text-white">Sede Fortaleza</h3>
                  <p className="text-[11px] text-gold-400 font-medium">Bairro Parquelândia</p>
                </div>
              </div>

              {/* Information Cards */}
              <div className="space-y-2.5 sm:space-y-3 mb-5 sm:mb-6">
                
                {/* Address */}
                <div className="p-3 sm:p-3.5 rounded-xl bg-[#171720] border border-neutral-800">
                  <div className="flex items-start gap-2.5">
                    <Navigation className="w-3.5 h-3.5 text-gold-400 mt-0.5 shrink-0" />
                    <div>
                      <h4 className="text-[11px] font-bold uppercase tracking-wider text-neutral-300 mb-0.5">
                        Endereço Completo:
                      </h4>
                      <p className="text-xs text-neutral-200 font-medium leading-relaxed">
                        {OFFICE_INFO.address}
                      </p>
                      <p className="text-[11px] text-neutral-400">
                        {OFFICE_INFO.cityStateZip}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Hours */}
                <div className="p-3 sm:p-3.5 rounded-xl bg-[#171720] border border-neutral-800">
                  <div className="flex items-start gap-2.5">
                    <Clock className="w-3.5 h-3.5 text-gold-400 mt-0.5 shrink-0" />
                    <div>
                      <h4 className="text-[11px] font-bold uppercase tracking-wider text-neutral-300 mb-0.5">
                        Horário de Atendimento:
                      </h4>
                      <p className="text-xs text-neutral-200 font-medium">
                        {OFFICE_INFO.hours}
                      </p>
                      <p className="text-[10px] text-neutral-400 mt-0.5">
                        Agendamento prévio para atendimento presencial reservado.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Interior reminder */}
                <div className="p-3 sm:p-3.5 rounded-xl bg-gold-500/10 border border-gold-500/30">
                  <div className="flex items-start gap-2.5">
                    <Car className="w-3.5 h-3.5 text-gold-400 mt-0.5 shrink-0" />
                    <div>
                      <h4 className="text-[11px] font-bold uppercase tracking-wider text-gold-300 mb-0.5">
                        Você mora no interior do Ceará?
                      </h4>
                      <p className="text-[11px] text-neutral-300 leading-relaxed font-light">
                        Não precisa se deslocar até Fortaleza caso tenha dificuldades! Agende uma visita com as advogadas na sua região.
                      </p>
                    </div>
                  </div>
                </div>

              </div>
            </div>

            {/* Google Maps External Action */}
            <div className="space-y-2 pt-3 border-t border-neutral-800">
              <a
                href={OFFICE_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 sm:py-3 rounded-xl text-xs font-bold uppercase tracking-wider text-neutral-200 bg-[#1D1D26] hover:bg-[#252530] border border-neutral-700 hover:border-gold-500/50 transition-all"
              >
                <ExternalLink className="w-3.5 h-3.5 text-gold-400" />
                <span>Traçar Rota no Google Maps</span>
              </a>

              <a
                href={getWhatsAppUrl("Olá! Gostaria de agendar um horário para atendimento presencial na sede da Parquelândia.")}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 sm:py-3 rounded-xl text-xs font-bold uppercase tracking-wider text-black bg-gold-metallic hover:opacity-95 shadow-md shadow-gold-500/20 transition-all"
              >
                <span>Agendar Horário na Sede</span>
              </a>
            </div>

          </div>

          {/* Right: Embedded Interactive Stylized Map */}
          <div className="lg:col-span-7 rounded-2xl bg-[#121217] border border-gold-500/30 overflow-hidden shadow-xl min-h-[300px] sm:min-h-[360px] flex flex-col relative">
            {/* Map Top Bar */}
            <div className="p-3 sm:p-3.5 bg-[#181820] border-b border-neutral-800 flex items-center justify-between text-xs text-neutral-300">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="font-semibold text-white text-xs">Sede Souza & Selly</span>
                <span className="text-neutral-500 text-xs hidden sm:inline">|</span>
                <span className="text-xs hidden sm:inline">Parquelândia, Fortaleza</span>
              </div>
              <span className="text-[10px] text-gold-400 font-medium">CEP 60455-410</span>
            </div>

            {/* Embedded Google Map iframe */}
            <div className="flex-1 w-full h-full min-h-[260px] sm:min-h-[320px] relative bg-neutral-900">
              <iframe
                title="Localização do Escritório Souza & Selly Advocacia"
                src="https://maps.google.com/maps?q=Av.+Jovita+Feitosa,+3072+-+Parquel%C3%A2ndia,+Fortaleza+-+CE,+60455-410&t=&z=16&ie=UTF8&iwloc=&output=embed"
                className="w-full h-full absolute inset-0 border-0 filter invert-[90%] hue-rotate-180 contrast-[88%]"
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              
              {/* Overlay Badge - Safe for narrow screens */}
              <div className="absolute bottom-2.5 left-2.5 right-2.5 sm:right-auto sm:max-w-xs bg-black/90 backdrop-blur-md border border-gold-500/50 px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-xl shadow-lg pointer-events-none">
                <p className="text-xs font-bold text-white flex items-center gap-1.5">
                  <MapPin className="w-3 h-3 text-gold-400 shrink-0" />
                  <span>Av. Jovita Feitosa, 3072 - Parquelândia</span>
                </p>
                <p className="text-[10px] text-neutral-400">Próximo aos principais polos da Parquelândia</p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
