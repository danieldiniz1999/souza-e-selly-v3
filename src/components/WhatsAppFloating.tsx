import React from 'react';
import { WhatsAppIcon } from './WhatsAppIcon';
import { getWhatsAppUrl } from '@/lib/utils';

export const WhatsAppFloating: React.FC = () => {
  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 pointer-events-none">
      {/* Clean Floating WhatsApp Button */}
      <a
        href={getWhatsAppUrl()}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar no WhatsApp com as advogadas"
        className="pointer-events-auto relative group flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white shadow-2xl shadow-[#25D366]/40 hover:scale-110 active:scale-95 hover:shadow-[0_0_35px_rgba(37,211,102,0.6)] transition-all duration-300 border-2 border-white/20"
      >
        {/* Pulsing ambient halo */}
        <span className="absolute -inset-1 rounded-full bg-[#25D366]/40 animate-ping opacity-75 pointer-events-none" />

        {/* Authentic WhatsApp Icon */}
        <WhatsAppIcon className="w-6 h-6 sm:w-7 sm:h-7 text-white fill-current group-hover:scale-110 transition-transform duration-200" />
      </a>
    </div>
  );
};

