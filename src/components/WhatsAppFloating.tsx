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
        <div className="mb-2.5 max-w-[260px] p-3 rounded-xl bg-[#141419] border border-gold-500/40 shadow-xl backdrop-blur-md animate-fade-in-up relative text-left">
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
            <MessageCircle className="w-3 h-3 fill-black/20" />
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
        className="relative group flex items-center justify-center w-12 h-12 sm:w-13 sm:h-13 rounded-full bg-gradient-to-tr from-[#1E824C] to-[#2ECC71] text-white shadow-xl shadow-emerald-500/25 hover:scale-105 active:scale-95 transition-all duration-300 border border-emerald-400/50"
      >
        {/* Pulsing ring */}
        <span className="absolute -inset-1 rounded-full bg-emerald-500/30 animate-ping opacity-75 pointer-events-none" />

        {/* WhatsApp Icon */}
        <MessageCircle className="w-6 h-6 fill-white" />

        {/* Unread notification badge */}
        <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-red-600 text-white text-[9px] font-extrabold flex items-center justify-center border border-[#09090B] shadow">
          1
        </span>
      </a>

    </div>
  );
};
