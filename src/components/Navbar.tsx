import React, { useState, useEffect } from 'react';
import { Phone, MessageCircle, Menu, X, Shield, Clock, MapPin } from 'lucide-react';
import { OFFICE_INFO, getWhatsAppUrl } from '@/lib/utils';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isBusinessHours, setIsBusinessHours] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Check if current time is between 09:00 and 17:00 (Fortaleza / BRT timezone)
    const checkHours = () => {
      const now = new Date();
      const hours = now.getHours();
      const day = now.getDay();
      const isWeekday = day >= 1 && day <= 5;
      setIsBusinessHours(isWeekday && hours >= 9 && hours < 17);
    };
    checkHours();
    const interval = setInterval(checkHours, 60000);
    return () => clearInterval(interval);
  }, []);

  const navLinks = [
    { label: 'Início', href: '#inicio' },
    { label: 'Diferencial Ceará', href: '#diferencial' },
    { label: 'Áreas de Atuação', href: '#areas' },
    { label: 'As Advogadas', href: '#advogadas' },
    { label: 'Resultados', href: '#numeros' },
    { label: 'Depoimentos', href: '#depoimentos' },
    { label: 'Localização', href: '#localizacao' },
    { label: 'Dúvidas', href: '#faq' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Top Banner - Horário & Atendimento */}
      <div className="bg-[#0B0B0E] border-b border-[#23232A] text-xs py-1.5 px-4">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-2">
          <div className="flex items-center gap-4 text-neutral-400">
            <span className="flex items-center gap-1.5">
              <span className={`w-2 h-2 rounded-full ${isBusinessHours ? 'bg-emerald-500 animate-pulse' : 'bg-amber-500'}`} />
              <span className="font-medium text-neutral-200">
                {isBusinessHours ? 'Atendimento Online Aberto' : 'Plantão Digital Ativo'}
              </span>
              <span className="hidden sm:inline text-neutral-400">({OFFICE_INFO.hours})</span>
            </span>
            <span className="hidden md:flex items-center gap-1 text-neutral-400">
              <MapPin className="w-3.5 h-3.5 text-gold-500" />
              Parquelândia, Fortaleza - CE
            </span>
          </div>

          <div className="flex items-center gap-4 text-neutral-300 ml-auto">
            <a 
              href={getWhatsAppUrl("Olá! Gostaria de agendar uma consulta com as advogadas.")}
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-gold-400 transition-colors"
            >
              <MessageCircle className="w-3.5 h-3.5 text-gold-500" />
              <span>{OFFICE_INFO.phone}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Bar */}
      <nav 
        className={`px-4 lg:px-8 transition-all duration-300 ${
          isScrolled 
            ? 'bg-[#09090B]/95 backdrop-blur-md py-3 shadow-xl shadow-black/50 border-b border-gold-500/20' 
            : 'bg-gradient-to-b from-black/80 to-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Brand Logo */}
          <a href="#inicio" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#1C1A14] to-[#0A0A0C] border border-gold-500/50 flex items-center justify-center shadow-lg shadow-gold-500/10 group-hover:border-gold-400 transition-colors">
              <span className="font-serif font-bold text-lg text-gold-metallic tracking-wider">S&S</span>
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-lg font-bold tracking-tight text-white group-hover:text-gold-300 transition-colors">
                Souza & Selly
              </span>
              <span className="text-[10px] tracking-widest uppercase font-semibold text-gold-500">
                Advocacia Especializada
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-neutral-300 hover:text-gold-400 transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-gold-500 hover:after:w-full after:transition-all after:duration-300"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="relative inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider text-black bg-gold-metallic hover:opacity-95 transition-all duration-300 shadow-lg shadow-gold-500/20 hover:shadow-gold-500/40 hover:-translate-y-0.5 active:translate-y-0 overflow-hidden group"
            >
              <span className="absolute inset-0 w-1/2 h-full bg-white/20 skew-x-12 -translate-x-full group-hover:translate-x-[300%] transition-transform duration-1000 ease-out" />
              <MessageCircle className="w-4 h-4 fill-black/20" />
              <span>Consulta no WhatsApp</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-neutral-300 hover:text-gold-400 hover:bg-neutral-900 border border-neutral-800 transition-colors"
            aria-label="Abrir menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-3 p-5 rounded-2xl bg-[#0F0F12] border border-gold-500/30 shadow-2xl backdrop-blur-xl animate-fade-in-up">
            <div className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-sm font-medium text-neutral-300 hover:text-gold-400 py-2 border-b border-neutral-800/80 transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-2">
                <a
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-xs font-semibold uppercase tracking-wider text-black bg-gold-metallic shadow-lg shadow-gold-500/20"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Falar com as Advogadas</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
