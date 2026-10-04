import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { WhatsAppIcon } from './WhatsAppIcon';
import { getWhatsAppUrl } from '@/lib/utils';

export const WhatsAppFloating: React.FC = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [hasDismissed, setHasDismissed] = useState(false);

  useEffect(() => {
    // Show polite greeting popover after 3.5 seconds
    const timer = setTimeout(() => {
      if (!hasDismissed) {
        setShowPopup(true);
      }
    }, 3500);

    return () => clearTimeout(timer);
  }, [hasDismissed]);

  const handleDismiss = (e: React.MouseEvent) => {
    e.stopPropagation();
    setShowPopup(false);
    setHasDismissed(true);
  };

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 flex flex-col items-end pointer-events-none">
      
      {/* Friendly Bubble Tooltip */}
      {showPopup && (
        <div className="pointer-events-auto mb-2.5 max-w-[calc(100vw-32px)] sm:max-w-[270px] p-3 rounded-xl bg-[#141419]/95 border border-gold-500/40 shadow-xl backdrop-blur-md animate-fade-in-up relative text-left">
          <button
            onClick={handleDismiss}
            className="absolute top-2 right-2 text-neutral-400 hover:text-white p-0.5"
            aria-label="Fechar mensagem"
          >
            <X className="w-3 h-3" />
          </button>

          <div className="flex items-center gap-2 mb-2 pb-1.5 border-b border-neutral-800">
            <img 
              src="/logo.jpg" 
              alt="Logo Souza & Selly Advocacia" 
              className="w-7 h-7 rounded-full object-cover border border-gold-500/50 shadow-sm shrink-0" 
            />
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-[10px] font-bold uppercase tracking-wider text-gold-400 truncate">
                  Souza & Selly Advocacia
                </span>
              </div>
            </div>
          </div>

          <p className="text-[11px] text-neutral-200 leading-relaxed mb-2.5 font-light">
            Olá! Está com dúvidas sobre o INSS, aposentadoria, rescisão ou processo cível? Estamos de plantão para te orientar!
          </p>

          <a
            href={getWhatsAppUrl("Olá, advogadas! Vi o aviso no site e gostaria de tirar uma dúvida sobre meus direitos.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-1.5 w-full py-1.5 px-2.5 rounded-lg text-[11px] font-bold uppercase tracking-wider text-black bg-gold-metallic hover:opacity-95 shadow transition-all"
          >
            <WhatsAppIcon className="w-3.5 h-3.5 fill-black/80" />
            <span>Falar no WhatsApp</span>
          </a>
        </div>
      )}

      {/* Floating Button with Badge & Glow */}
      <a
        href={getWhatsAppUrl()}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar no WhatsApp com as advogadas"
        className="pointer-events-auto relative group flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white shadow-xl shadow-[#25D366]/40 hover:scale-105 active:scale-95 transition-all duration-300 border-2 border-white/20"
      >
        {/* Pulsing ring */}
        <span className="absolute -inset-1 rounded-full bg-[#25D366]/40 animate-ping opacity-75 pointer-events-none" />

        {/* Authentic WhatsApp Icon */}
        <WhatsAppIcon className="w-6 h-6 sm:w-7 sm:h-7 text-white fill-current" />

        {/* Unread notification badge */}
        <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-red-600 text-white text-[9px] font-extrabold flex items-center justify-center border-2 border-[#09090B] shadow">
          1
        </span>
      </a>

    </div>
  );
};
