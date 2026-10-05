import React from 'react';
import { MapPin, Phone, Clock, Mail, ArrowUp } from 'lucide-react';
import { WhatsAppIcon } from './WhatsAppIcon';
import { OFFICE_INFO, getWhatsAppUrl } from '@/lib/utils';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#070709] border-t border-neutral-800 text-neutral-400 text-xs relative overflow-hidden">
      {/* Top golden accent line */}
      <div className="h-[1px] bg-gradient-to-r from-transparent via-gold-500/50 to-transparent" />

      <div className="max-w-6xl mx-auto px-3.5 sm:px-6 lg:px-8 py-8 sm:py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-6 lg:gap-8">
          
          {/* Brand Info */}
          <div className="sm:col-span-2 lg:col-span-4 space-y-2.5">
            <div className="flex items-center gap-2.5">
              <img
                src="/logo.jpg"
                alt="Souza & Selly Advocacia"
                loading="lazy"
                decoding="async"
                className="w-8 h-8 rounded-full object-cover border border-gold-500/50 shadow-sm shadow-gold-500/10"
              />
              <div>
                <h3 className="font-serif text-sm font-bold text-white leading-tight">Souza & Selly</h3>
                <p className="text-[9px] tracking-wider uppercase font-semibold text-gold-400">
                  Advocacia Especializada
                </p>
              </div>
            </div>

            <p className="text-neutral-400 text-[11px] leading-relaxed font-light">
              8 anos de compromisso com a justiça, dignidade e respeito. Atuação em Direito Previdenciário, Trabalhista e Cível em todo o Ceará com atendimento presencial e humanizado.
            </p>

            <div className="pt-1 text-neutral-300 text-[11px] space-y-0.5">
              <p className="text-neutral-400 text-[10px] font-semibold uppercase tracking-wider">Sócias Fundadoras:</p>
              <p className="text-neutral-300">• Dra. Samara Selly – <span className="text-neutral-400">Previdenciário & Trabalho</span></p>
              <p className="text-neutral-300">• Dra. Maria Souza – <span className="text-neutral-400">Previdenciário & Tributário</span></p>
            </div>
          </div>

          {/* Quick Nav Links */}
          <div className="sm:col-span-1 lg:col-span-2 space-y-2">
            <h4 className="font-serif text-xs font-bold text-white uppercase tracking-wider">
              Navegação
            </h4>
            <ul className="space-y-1 text-[11px]">
              <li><a href="#inicio" className="hover:text-gold-400 transition-colors">Início</a></li>
              <li><a href="#diferencial" className="hover:text-gold-400 transition-colors">Diferencial Interior</a></li>
              <li><a href="#areas" className="hover:text-gold-400 transition-colors">Áreas de Atuação</a></li>
              <li><a href="#advogadas" className="hover:text-gold-400 transition-colors">Dra. Samara & Maria</a></li>
              <li><a href="#depoimentos" className="hover:text-gold-400 transition-colors">Depoimentos do CE</a></li>
              <li><a href="#localizacao" className="hover:text-gold-400 transition-colors">Sede em Fortaleza</a></li>
              <li><a href="#faq" className="hover:text-gold-400 transition-colors">Dúvidas Frequentes</a></li>
            </ul>
          </div>

          {/* Practice Areas */}
          <div className="sm:col-span-1 lg:col-span-3 space-y-2">
            <h4 className="font-serif text-xs font-bold text-white uppercase tracking-wider">
              Áreas de Atuação
            </h4>
            <ul className="space-y-1 text-[11px] text-neutral-300">
              <li>• Aposentadoria Rural e Urbana (INSS)</li>
              <li>• BPC / LOAS (Idosos e PCD)</li>
              <li>• Auxílio-Doença e Invalidez</li>
              <li>• Reversão de Negativas do INSS</li>
              <li>• Rescisão e Acidentes de Trabalho</li>
              <li>• Horas Extras e Dano Moral</li>
              <li>• Direito Cível, Família e Inventários</li>
            </ul>
          </div>

          {/* Contact and Sede */}
          <div className="sm:col-span-2 lg:col-span-3 space-y-2">
            <h4 className="font-serif text-xs font-bold text-white uppercase tracking-wider">
              Sede & Contato
            </h4>
            
            <div className="space-y-1.5 text-[11px]">
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-gold-400 shrink-0 mt-0.5" />
                <span className="leading-tight">{OFFICE_INFO.fullAddress}</span>
              </div>

              <div className="flex items-center gap-2">
                <Clock className="w-3.5 h-3.5 text-gold-400 shrink-0" />
                <span>{OFFICE_INFO.hours}</span>
              </div>

              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-gold-400 shrink-0" />
                <a href={getWhatsAppUrl()} className="hover:text-gold-400 transition-colors">
                  {OFFICE_INFO.phone}
                </a>
              </div>

              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-gold-400 shrink-0" />
                <span className="truncate">{OFFICE_INFO.email}</span>
              </div>
            </div>

            <div className="pt-1.5">
              <a
                href={getWhatsAppUrl("Olá! Gostaria de falar com as advogadas.")}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold w-full inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-lg text-[11px] font-bold uppercase tracking-wider text-black group"
              >
                <WhatsAppIcon className="w-3.5 h-3.5 fill-black/80 group-hover:scale-110 transition-transform duration-200" />
                <span>Falar no WhatsApp</span>
              </a>
            </div>
          </div>

        </div>

        {/* Legal Disclaimer & Ethics Note */}
        <div className="mt-6 pt-4 border-t border-neutral-900/90 text-[10px] text-neutral-400 space-y-2 leading-relaxed">
          <p>
            <strong>Aviso Legal & Ética OAB:</strong> Conteúdo informativo em conformidade com o Provimento 205/2021 do CFOAB. Não substitui consulta jurídica formal nem realiza promessas de resultado.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-2 pt-2 text-neutral-400 text-[10px]">
            <p>
              © {new Date().getFullYear()} Souza & Selly Advocacia. Todos os direitos reservados.
            </p>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 hover:text-gold-300 hover:-translate-y-0.5 active:translate-y-0 transition-all text-neutral-400 px-2.5 py-1 rounded-md hover:bg-neutral-900 group"
            >
              <span>Voltar ao topo</span>
              <ArrowUp className="w-3 h-3 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
