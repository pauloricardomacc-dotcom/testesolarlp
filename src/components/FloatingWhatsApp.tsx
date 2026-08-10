import React from 'react';
import { WhatsAppIcon } from './WhatsAppIcon';

interface FloatingWhatsAppProps {
  whatsappUrl: string;
}

export const FloatingWhatsApp: React.FC<FloatingWhatsAppProps> = ({ whatsappUrl }) => {
  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40">
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2.5 bg-[#25D366] hover:bg-[#128C7E] active:bg-[#128C7E] text-white font-extrabold text-xs sm:text-sm py-2.5 px-4 sm:py-3 sm:px-5 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border border-white/40"
        aria-label="Entrar em contato pelo WhatsApp"
      >
        <WhatsAppIcon className="w-5 h-5 sm:w-5.5 sm:h-5.5 text-white shrink-0" />
        <span className="tracking-tight whitespace-nowrap">Entrar em contato</span>
      </a>
    </div>
  );
};

