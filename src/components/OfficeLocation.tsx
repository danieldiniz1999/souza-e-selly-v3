import React from 'react';
import { MapPin, Clock, Phone, Mail, Navigation, Car, Shield, ExternalLink } from 'lucide-react';
import { OFFICE_INFO, getWhatsAppUrl } from '@/lib/utils';

export const OfficeLocation: React.FC = () => {
  return (
    <section id="localizacao" className="py-24 bg-[#0B0B0E] border-t border-neutral-800/80 relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 right-10 w-96 h-96 bg-gold-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold-500/10 border border-gold-500/30 text-gold-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <MapPin className="w-3.5 h-3.5" />
            <span>Sede Física & Atendimento Presencial</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
            Onde Nos Encontrar: <br className="hidden sm:inline" />
            <span className="text-gold-metallic">Sede Própria na Parquelândia</span>
          </h2>

          <p className="text-neutral-300 text-base font-light leading-relaxed">
            Localização estratégica em Fortaleza para receber você com privacidade e conforto, além do nosso atendimento em viagens por todo o Ceará.
          </p>
        </div>

        {/* Content Box */}
        <div className="grid lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left: Office Details */}
          <div className="lg:col-span-5 rounded-3xl bg-[#121217] border border-gold-500/30 p-8 flex flex-col justify-between shadow-xl">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gold-500/10 border border-gold-500/30 flex items-center justify-center text-gold-400">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-serif text-xl font-bold text-white">Sede Fortaleza</h3>
                  <p className="text-xs text-gold-400 font-medium">Bairro Parquelândia</p>
                </div>
              </div>

              {/* Information Cards */}
              <div className="space-y-4 mb-8">
                
                {/* Address */}
                <div className="p-4 rounded-xl bg-[#171720] border border-neutral-800">
                  <div className="flex items-start gap-3">
                    <Navigation className="w-4 h-4 text-gold-400 mt-1 shrink-0" />
                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-300 mb-1">
                        Endereço Completo:
                      </h4>
                      <p className="text-xs text-neutral-200 font-medium leading-relaxed">
                        {OFFICE_INFO.address}
                      </p>
                      <p className="text-xs text-neutral-400">
                        {OFFICE_INFO.cityStateZip}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Hours */}
                <div className="p-4 rounded-xl bg-[#171720] border border-neutral-800">
                  <div className="flex items-start gap-3">
                    <Clock className="w-4 h-4 text-gold-400 mt-1 shrink-0" />
                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-300 mb-1">
                        Horário de Atendimento:
                      </h4>
                      <p className="text-xs text-neutral-200 font-medium">
                        {OFFICE_INFO.hours}
                      </p>
                      <p className="text-[11px] text-neutral-400 mt-0.5">
                        Agendamento prévio para atendimento presencial reservado.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Interior reminder */}
                <div className="p-4 rounded-xl bg-gold-500/10 border border-gold-500/30">
                  <div className="flex items-start gap-3">
                    <Car className="w-4 h-4 text-gold-400 mt-1 shrink-0" />
                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-wider text-gold-300 mb-1">
                        Você mora no interior do Ceará?
                      </h4>
                      <p className="text-xs text-neutral-300 leading-relaxed">
                        Não precisa se deslocar até Fortaleza caso tenha dificuldades! Agende uma visita com as advogadas na sua região.
                      </p>
                    </div>
                  </div>
                </div>

              </div>
            </div>

            {/* Google Maps External Action */}
            <div className="space-y-3 pt-4 border-t border-neutral-800">
              <a
                href={OFFICE_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl text-xs font-bold uppercase tracking-wider text-neutral-200 bg-[#1D1D26] hover:bg-[#252530] border border-neutral-700 hover:border-gold-500/50 transition-all"
              >
                <ExternalLink className="w-4 h-4 text-gold-400" />
                <span>Traçar Rota no Google Maps</span>
              </a>

              <a
                href={getWhatsAppUrl("Olá! Gostaria de agendar um horário para atendimento presencial na sede da Parquelândia.")}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl text-xs font-bold uppercase tracking-wider text-black bg-gold-metallic hover:opacity-95 shadow-md shadow-gold-500/20 transition-all"
              >
                <span>Agendar Horário na Sede</span>
              </a>
            </div>

          </div>

          {/* Right: Embedded Interactive Stylized Map */}
          <div className="lg:col-span-7 rounded-3xl bg-[#121217] border border-gold-500/30 overflow-hidden shadow-xl min-h-[400px] flex flex-col relative">
            {/* Map Top Bar */}
            <div className="p-4 bg-[#181820] border-b border-neutral-800 flex items-center justify-between text-xs text-neutral-300">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                <span className="font-semibold text-white">Sede Souza & Selly</span>
                <span className="text-neutral-500">|</span>
                <span>Parquelândia, Fortaleza</span>
              </div>
              <span className="text-[11px] text-gold-400 font-medium">CEP 60455-410</span>
            </div>

            {/* Embedded Google Map iframe */}
            <div className="flex-1 w-full h-full min-h-[360px] relative bg-neutral-900">
              <iframe
                title="Localização do Escritório Souza & Selly Advocacia"
                src="https://maps.google.com/maps?q=Av.+Jovita+Feitosa,+3072+-+Parquel%C3%A2ndia,+Fortaleza+-+CE,+60455-410&t=&z=16&ie=UTF8&iwloc=&output=embed"
                className="w-full h-full absolute inset-0 border-0 filter invert-[90%] hue-rotate-180 contrast-[88%]"
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              
              {/* Overlay Badge */}
              <div className="absolute bottom-4 left-4 bg-black/85 backdrop-blur-md border border-gold-500/50 px-4 py-2.5 rounded-xl shadow-lg pointer-events-none">
                <p className="text-xs font-bold text-white flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-gold-400" />
                  Av. Jovita Feitosa, 3072 - Parquelândia
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
