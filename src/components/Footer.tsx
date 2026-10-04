import React from 'react';
import { Scale, MapPin, Phone, Clock, Mail, Shield, ArrowUp } from 'lucide-react';
import { OFFICE_INFO, getWhatsAppUrl } from '@/lib/utils';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#070709] border-t border-neutral-800 text-neutral-400 text-xs relative overflow-hidden">
      {/* Top golden accent line */}
      <div className="h-[2px] bg-gradient-to-r from-transparent via-gold-500/60 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          
          {/* Brand Info */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-[#15151A] border border-gold-500/50 flex items-center justify-center text-gold-400">
                <span className="font-serif font-bold text-lg text-gold-metallic">S&S</span>
              </div>
              <div>
                <h3 className="font-serif text-lg font-bold text-white">Souza & Selly</h3>
                <p className="text-[10px] tracking-widest uppercase font-semibold text-gold-400">
                  Advocacia Especializada
                </p>
              </div>
            </div>

            <p className="text-neutral-400 text-xs leading-relaxed font-light">
              8 anos de compromisso com a justiça, dignidade e respeito. Especialistas em Direito Previdenciário, Trabalhista e Cível, com sede em Fortaleza e atuação próxima em todo o estado do Ceará.
            </p>

            <div className="pt-2 text-neutral-300 space-y-1">
              <p className="font-semibold text-white">Sócias Fundadoras:</p>
              <p>• Dra. Samara Selly – Pós-graduada em Previdenciário e Trabalho</p>
              <p>• Dra. Mariana Souza – Pós-graduada em Previdenciário e Tributário</p>
            </div>
          </div>

          {/* Quick Nav Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-serif text-sm font-bold text-white uppercase tracking-wider">
              Navegação
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#inicio" className="hover:text-gold-400 transition-colors">Início</a>
              </li>
              <li>
                <a href="#diferencial" className="hover:text-gold-400 transition-colors">Diferencial Interior</a>
              </li>
              <li>
                <a href="#areas" className="hover:text-gold-400 transition-colors">Áreas de Atuação</a>
              </li>
              <li>
                <a href="#advogadas" className="hover:text-gold-400 transition-colors">Dra. Samara & Mariana</a>
              </li>
              <li>
                <a href="#depoimentos" className="hover:text-gold-400 transition-colors">Depoimentos do CE</a>
              </li>
              <li>
                <a href="#localizacao" className="hover:text-gold-400 transition-colors">Sede em Fortaleza</a>
              </li>
              <li>
                <a href="#faq" className="hover:text-gold-400 transition-colors">Dúvidas Frequentes</a>
              </li>
            </ul>
          </div>

          {/* Practice Areas */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-serif text-sm font-bold text-white uppercase tracking-wider">
              Áreas de Atuação
            </h4>
            <ul className="space-y-2 text-xs">
              <li>• Aposentadoria Rural e Urbana (INSS)</li>
              <li>• BPC / LOAS (Idosos e PCD / Autismo)</li>
              <li>• Auxílio-Doença e Aposentadoria por Invalidez</li>
              <li>• Reversão de Negativas do INSS com Retroativos</li>
              <li>• Rescisão Trabalhista e Acidentes de Trabalho</li>
              <li>• Horas Extras e Dano Moral Ocupacional</li>
              <li>• Direito Cível, Família, Divórcio e Inventários</li>
            </ul>
          </div>

          {/* Contact and Sede */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-serif text-sm font-bold text-white uppercase tracking-wider">
              Sede & Contato
            </h4>
            
            <div className="space-y-2.5 text-xs">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-gold-400 shrink-0 mt-0.5" />
                <span>{OFFICE_INFO.fullAddress}</span>
              </div>

              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-gold-400 shrink-0" />
                <span>{OFFICE_INFO.hours}</span>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-gold-400 shrink-0" />
                <a href={getWhatsAppUrl()} className="hover:text-gold-400 transition-colors">
                  {OFFICE_INFO.phone}
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-gold-400 shrink-0" />
                <span>{OFFICE_INFO.email}</span>
              </div>
            </div>

            <div className="pt-3">
              <a
                href={getWhatsAppUrl("Olá! Gostaria de falar com as advogadas.")}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider text-black bg-gold-metallic hover:opacity-95 transition-all"
              >
                <span>Falar no WhatsApp</span>
              </a>
            </div>
          </div>

        </div>

        {/* Legal Disclaimer & Ethics Note */}
        <div className="mt-12 pt-8 border-t border-neutral-900 text-[11px] text-neutral-400 space-y-3 leading-relaxed">
          <p>
            <strong>Aviso Legal & Ética Profissional:</strong> Este site tem finalidade exclusivamente informativa e institucional, em rigorosa consonância com o Código de Ética e Disciplina da OAB (Provimento 205/2021 do CFOAB). Nenhuma informação veiculada substitui a consulta jurídica formal individualizada. Não realizamos promessas de ganho de causa ou captação indevida de clientela.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 text-neutral-400">
            <p>
              © {new Date().getFullYear()} Souza & Selly Advocacia. Todos os direitos reservados.
            </p>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 hover:text-gold-400 transition-colors text-neutral-400"
            >
              <span>Voltar ao topo</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
