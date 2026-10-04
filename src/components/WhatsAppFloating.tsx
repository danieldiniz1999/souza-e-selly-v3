import React, { useState, useEffect } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { getWhatsAppUrl, OFFICE_INFO } from '@/lib/utils';

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
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      
      {/* Friendly Bubble Tooltip */}
      {showPopup && (
        <div className="mb-3 max-w-xs p-4 rounded-2xl bg-[#141419] border border-gold-500/40 shadow-2xl backdrop-blur-md animate-fade-in-up relative text-left">
          <button
            onClick={handleDismiss}
            className="absolute top-2.5 right-2.5 text-neutral-400 hover:text-white p-1"
            aria-label="Fechar mensagem"
          >
            <X className="w-3.5 h-3.5" />
          </button>

          <div className="flex items-center gap-2 mb-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-[11px] font-bold uppercase tracking-wider text-gold-400">
              Souza & Selly Advocacia
            </span>
          </div>

          <p className="text-xs text-neutral-200 leading-relaxed mb-3">
            Olá! Está com dúvidas sobre o INSS, aposentadoria, rescisão ou processo cível? Estamos de plantão para te orientar!
          </p>

          <a
            href={getWhatsAppUrl("Olá, advogadas! Vi o aviso no site e gostaria de tirar uma dúvida sobre meus direitos.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-1.5 w-full py-2 px-3 rounded-lg text-xs font-bold uppercase tracking-wider text-black bg-gold-metallic hover:opacity-95 shadow transition-all"
          >
            <MessageCircle className="w-3.5 h-3.5 fill-black/20" />
            <span>Falar Agora no WhatsApp</span>
          </a>
        </div>
      )}

      {/* Floating Button with Badge & Glow */}
      <a
        href={getWhatsAppUrl()}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar no WhatsApp com as advogadas"
        className="relative group flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-tr from-[#1E824C] to-[#2ECC71] text-white shadow-2xl shadow-emerald-500/30 hover:scale-105 active:scale-95 transition-all duration-300 border-2 border-emerald-400/50"
      >
        {/* Pulsing ring */}
        <span className="absolute -inset-1 rounded-full bg-emerald-500/30 animate-ping opacity-75 pointer-events-none" />

        {/* WhatsApp Icon */}
        <MessageCircle className="w-7 h-7 sm:w-8 sm:h-8 fill-white" />

        {/* Unread notification badge */}
        <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-red-600 text-white text-[10px] font-extrabold flex items-center justify-center border-2 border-[#09090B] shadow">
          1
        </span>
      </a>

    </div>
  );
};
