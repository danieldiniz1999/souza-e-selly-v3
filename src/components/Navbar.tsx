import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { WhatsAppIcon } from './WhatsAppIcon';
import { getWhatsAppUrl } from '@/lib/utils';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
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
      {/* Main Bar */}
      <nav 
        className={`px-3.5 sm:px-6 lg:px-8 transition-all duration-300 ${
          isScrolled 
            ? 'bg-[#09090B]/95 backdrop-blur-md py-2.5 sm:py-3 shadow-xl shadow-black/50 border-b border-gold-500/20' 
            : 'bg-gradient-to-b from-black/85 to-transparent py-3.5 sm:py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-2">
          {/* Brand Logo */}
          <a href="#inicio" className="flex items-center gap-2 sm:gap-3 group shrink-0">
            <img 
              src="/logo.jpg" 
              alt="Souza & Selly Advocacia" 
              className="w-9 h-9 sm:w-10 sm:h-10 rounded-full object-cover border border-gold-500/50 shadow-md shadow-gold-500/10 group-hover:border-gold-400 group-hover:scale-105 transition-all" 
            />
            <div className="flex flex-col">
              <span className="font-serif text-sm sm:text-base lg:text-lg font-bold tracking-tight text-white group-hover:text-gold-300 transition-colors leading-tight">
                Souza & Selly
              </span>
              <span className="text-[9px] sm:text-[10px] tracking-widest uppercase font-semibold text-gold-500">
                Advocacia Especializada
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links (Large Screens) */}
          <div className="hidden lg:flex items-center gap-3.5 xl:gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-xs xl:text-sm font-medium text-neutral-300 hover:text-gold-400 transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-gold-500 hover:after:w-full after:transition-all after:duration-300 whitespace-nowrap"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Desktop CTA Button */}
          <div className="hidden sm:flex items-center gap-3 shrink-0">
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="relative inline-flex items-center justify-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider text-black bg-gold-metallic hover:opacity-95 transition-all duration-300 shadow-lg shadow-gold-500/20 hover:shadow-gold-500/40 hover:-translate-y-0.5 active:translate-y-0 overflow-hidden group"
            >
              <span className="absolute inset-0 w-1/2 h-full bg-white/20 skew-x-12 -translate-x-full group-hover:translate-x-[300%] transition-transform duration-1000 ease-out" />
              <WhatsAppIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-black/80" />
              <span className="hidden md:inline">Consulta no WhatsApp</span>
              <span className="md:hidden">WhatsApp</span>
            </a>
          </div>

          {/* Mobile/Tablet Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-neutral-300 hover:text-gold-400 hover:bg-neutral-900 border border-neutral-800 transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center"
            aria-label="Menu principal"
          >
            {mobileMenuOpen ? <X className="w-5 h-5 sm:w-6 sm:h-6" /> : <Menu className="w-5 h-5 sm:w-6 sm:h-6" />}
          </button>
        </div>

        {/* Mobile & Tablet Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-3 p-4 sm:p-6 rounded-2xl bg-[#0F0F12]/98 border border-gold-500/30 shadow-2xl backdrop-blur-xl animate-fade-in-up max-h-[calc(100vh-80px)] overflow-y-auto">
            <div className="flex flex-col gap-2">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-1 sm:gap-x-4">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="min-h-[44px] flex items-center text-xs sm:text-sm font-medium text-neutral-300 hover:text-gold-400 py-1.5 px-2 rounded-lg hover:bg-neutral-900/60 border-b border-neutral-800/50 sm:border-b-0 transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
              <div className="pt-3 border-t border-neutral-800/80">
                <a
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-xs font-semibold uppercase tracking-wider text-black bg-gold-metallic shadow-lg shadow-gold-500/20 active:scale-95 transition-transform"
                >
                  <WhatsAppIcon className="w-4 h-4 fill-black/80" />
                  <span>Falar com as Advogadas no WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
