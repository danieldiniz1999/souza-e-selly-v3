import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { WhatsAppIcon } from './WhatsAppIcon';
import { getWhatsAppUrl } from '@/lib/utils';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('inicio');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Section scrollspy
      const sections = ['inicio', 'diferencial', 'areas', 'advogadas', 'numeros', 'depoimentos', 'localizacao', 'faq'];
      const scrollPosition = window.scrollY + 120;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Início', shortLabel: 'Início', href: '#inicio' },
    { label: 'Diferencial Ceará', shortLabel: 'Diferencial', href: '#diferencial' },
    { label: 'Áreas de Atuação', shortLabel: 'Áreas', href: '#areas' },
    { label: 'As Advogadas', shortLabel: 'Advogadas', href: '#advogadas' },
    { label: 'Resultados', shortLabel: 'Resultados', href: '#numeros' },
    { label: 'Depoimentos', shortLabel: 'Depoimentos', href: '#depoimentos' },
    { label: 'Localização', shortLabel: 'Localização', href: '#localizacao' },
    { label: 'Dúvidas', shortLabel: 'Dúvidas', href: '#faq' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Main Bar */}
      <nav 
        className={`px-3.5 sm:px-6 lg:px-8 transition-all duration-300 ${
          isScrolled 
            ? 'bg-[#09090B]/90 backdrop-blur-xl py-2.5 sm:py-3 shadow-2xl shadow-black/80 border-b border-gold-500/25' 
            : 'bg-gradient-to-b from-black/90 via-black/40 to-transparent py-3.5 sm:py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Brand Logo & Status */}
          <div className="flex items-center gap-3 shrink-0 mr-4 lg:mr-6 xl:mr-8">
            <a href="#inicio" className="flex items-center gap-2.5 sm:gap-3 group">
              <div className="relative">
                <img 
                  src="/logo.jpg" 
                  alt="Souza & Selly Advocacia" 
                  className="w-9 h-9 sm:w-10 sm:h-10 rounded-full object-cover border-2 border-gold-400/60 shadow-lg shadow-gold-500/20 group-hover:border-gold-300 group-hover:scale-105 group-hover:shadow-[0_0_20px_rgba(197,160,89,0.4)] transition-all duration-300" 
                />
                <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-emerald-500 border-2 border-[#09090B] ring-1 ring-emerald-400/50" />
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-sm sm:text-base lg:text-lg font-bold tracking-tight text-white group-hover:text-gold-300 transition-colors leading-tight whitespace-nowrap">
                  Souza & Selly
                </span>
                <span className="text-[9px] sm:text-[10px] tracking-widest uppercase font-semibold text-gold-400 whitespace-nowrap">
                  Advocacia Especializada
                </span>
              </div>
            </a>

            {/* Plantão status pill for wider screens */}
            <div className="hidden 2xl:inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-[10px] font-semibold text-emerald-300/90">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>Plantão CE Ativo</span>
            </div>
          </div>

          {/* Desktop Navigation Links - Centered with balanced margins on both sides */}
          <div className="hidden lg:flex items-center justify-center gap-1.5 lg:gap-2.5 xl:gap-5 2xl:gap-6 flex-1 px-4 lg:px-6 xl:px-8">
            {navLinks.map((link) => {
              const linkSection = link.href.replace('#', '');
              const isActive = activeSection === linkSection;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  className={`text-xs xl:text-sm font-medium transition-all relative py-1 px-1.5 whitespace-nowrap ${
                    isActive
                      ? 'text-gold-300 font-semibold'
                      : 'text-neutral-300 hover:text-gold-400'
                  }`}
                >
                  <span className="hidden xl:inline">{link.label}</span>
                  <span className="xl:hidden">{link.shortLabel}</span>
                  {/* Active indicator dot or underline */}
                  <span
                    className={`absolute bottom-0 left-1 right-1 h-[2px] rounded-full transition-all duration-300 ${
                      isActive 
                        ? 'bg-gradient-to-r from-gold-400 to-amber-200 shadow-[0_0_8px_rgba(197,160,89,0.8)] opacity-100' 
                        : 'bg-transparent opacity-0'
                    }`}
                  />
                </a>
              );
            })}
          </div>

          {/* Desktop CTA Button with protected left margin */}
          <div className="hidden sm:flex items-center shrink-0 ml-4 lg:ml-6 xl:ml-8">
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold relative inline-flex items-center justify-center gap-2 px-3.5 xl:px-5 py-2 sm:py-2.5 rounded-full text-xs font-bold uppercase tracking-wider text-black group shrink-0"
            >
              <WhatsAppIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-black/80 group-hover:scale-110 transition-transform duration-200" />
              <span className="hidden xl:inline">Consulta no WhatsApp</span>
              <span className="xl:hidden">WhatsApp</span>
            </a>
          </div>

          {/* Mobile/Tablet Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-neutral-300 hover:text-gold-400 hover:bg-neutral-900 border border-neutral-800 hover:border-gold-500/50 hover:scale-105 active:scale-95 transition-all min-h-[44px] min-w-[44px] flex items-center justify-center shrink-0"
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
                {navLinks.map((link) => {
                  const linkSection = link.href.replace('#', '');
                  const isActive = activeSection === linkSection;
                  return (
                    <a
                      key={link.href}
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`min-h-[44px] flex items-center justify-between text-xs sm:text-sm font-medium py-2 px-3 rounded-lg border-b border-neutral-800/50 sm:border-b-0 transition-colors ${
                        isActive
                          ? 'bg-gold-500/15 text-gold-300 font-semibold border-l-2 border-l-gold-400'
                          : 'text-neutral-300 hover:text-gold-400 hover:bg-neutral-900/60'
                      }`}
                    >
                      <span>{link.label}</span>
                      {isActive && <span className="w-1.5 h-1.5 rounded-full bg-gold-400 animate-pulse" />}
                    </a>
                  );
                })}
              </div>
              <div className="pt-3 border-t border-neutral-800/80">
                <a
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMobileMenuOpen(false)}
                  className="btn-gold w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-xs font-bold uppercase tracking-wider text-black group"
                >
                  <WhatsAppIcon className="w-4 h-4 fill-black/80 group-hover:scale-110 transition-transform duration-200" />
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
