import React, { useState, useEffect } from 'react';
import { Cookie, Check } from 'lucide-react';

interface CookieBannerProps {
  onOpenPrivacyModal: () => void;
}

export const CookieBanner: React.FC<CookieBannerProps> = ({ onOpenPrivacyModal }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('solar_planet_cookie_consent');
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('solar_planet_cookie_consent', 'accepted');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-20 sm:bottom-6 left-4 right-4 sm:left-6 sm:right-auto sm:max-w-md z-40 bg-[#073B60] text-white p-5 rounded-2xl shadow-2xl border border-white/20 animate-in slide-in-from-bottom duration-300">
      <div className="flex items-start gap-3">
        <div className="p-2 bg-[#1686C2]/30 rounded-lg text-[#F3B62B] shrink-0">
          <Cookie className="w-5 h-5" />
        </div>
        <div className="space-y-2 text-xs">
          <p className="text-slate-200 leading-relaxed">
            Utilizamos cookies essenciais para garantir uma experiência de navegação eficiente e segura em nosso site.
          </p>
          <div className="flex items-center gap-3 pt-1">
            <button
              type="button"
              onClick={handleAccept}
              className="bg-[#1686C2] hover:bg-[#A8C936] hover:text-[#061D2C] text-white px-4 py-1.5 rounded-lg font-bold transition-colors flex items-center gap-1.5"
            >
              <Check className="w-3.5 h-3.5" />
              Aceitar
            </button>
            <button
              type="button"
              onClick={onOpenPrivacyModal}
              className="text-slate-300 hover:text-white underline"
            >
              Saiba mais
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
