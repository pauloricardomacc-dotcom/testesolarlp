import React from 'react';
import { Logo } from './Logo';
import { WhatsAppIcon } from './WhatsAppIcon';
import { MapPin, Phone, ShieldCheck, Instagram } from 'lucide-react';

interface FooterProps {
  whatsappUrl: string;
  onOpenPrivacyModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ whatsappUrl, onOpenPrivacyModal }) => {
  return (
    <footer className="bg-[#061D2C] text-slate-300 pt-16 pb-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          
          {/* Brand Info (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <Logo variant="light" size="lg" />
            <p className="text-xs text-slate-300 leading-relaxed font-normal pt-2">
              Empresa especializada em soluções e projetos de energia solar para residências, empresas e agronegócio no Oeste da Bahia.
            </p>

            <div className="pt-2 text-xs text-slate-400">
              <span className="font-semibold text-white">Solar Planet</span> • Energia Solar Planejada
            </div>
          </div>

          {/* Location & Contact (4 cols) */}
          <div className="lg:col-span-4 space-y-3">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-4 border-l-2 border-[#1A79B9] pl-2">
              Matriz & Contato
            </h3>

            <div className="flex items-start gap-3 text-xs sm:text-sm text-slate-300">
              <MapPin className="w-5 h-5 text-[#A6CD40] shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-white">Rua Canadá, 134, Sala 01</p>
                <p>Bairro Boa Sorte</p>
                <p>Barreiras – Bahia | CEP 47807-183</p>
              </div>
            </div>

            <div className="flex items-start gap-3 text-xs sm:text-sm text-slate-300 pt-1">
              <WhatsAppIcon className="w-5 h-5 text-[#25D366] shrink-0 mt-0.5" />
              <div className="space-y-1">
                <div>
                  <span className="text-slate-400">WhatsApp: </span>
                  <a
                    href="https://wa.me/5577999087260?text=Ol%C3%A1%21%20Conheci%20a%20Solar%20Planet%20pelo%20site%20e%20gostaria%20de%20solicitar%20uma%20an%C3%A1lise."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-bold text-[#25D366] hover:underline"
                  >
                    77 99908-7260
                  </a>
                </div>
                <div>
                  <span className="text-slate-400">WhatsApp: </span>
                  <a
                    href="https://wa.me/5577988288437?text=Ol%C3%A1%21%20Conheci%20a%20Solar%20Planet%20pelo%20site%20e%20gostaria%20de%20solicitar%20uma%20an%C3%A1lise."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-bold text-[#25D366] hover:underline"
                  >
                    77 98828-8437
                  </a>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3 text-xs sm:text-sm text-slate-300 pt-1">
              <Instagram className="w-5 h-5 text-[#E1306C] shrink-0" />
              <div className="flex items-center gap-2">
                <span className="text-slate-400">Instagram: </span>
                <a
                  href="https://www.instagram.com/solarplanet.uv/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-white hover:text-[#E1306C] transition-colors hover:underline"
                >
                  @solarplanet.uv
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links (4 cols) */}
          <div className="lg:col-span-4 space-y-3">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-4 border-l-2 border-[#1A79B9] pl-2">
              Navegação
            </h3>

            <ul className="grid grid-cols-2 gap-2 text-xs">
              <li>
                <a href="#solucoes" className="hover:text-white transition-colors">
                  Soluções
                </a>
              </li>
              <li>
                <a href="#depoimentos" className="hover:text-white transition-colors">
                  Depoimentos
                </a>
              </li>
              <li>
                <a href="#simulador" className="hover:text-white transition-colors">
                  Simulador
                </a>
              </li>
              <li>
                <a href="#como-funciona" className="hover:text-white transition-colors">
                  Como funciona
                </a>
              </li>
              <li>
                <a href="#projetos" className="hover:text-white transition-colors">
                  Projetos
                </a>
              </li>
              <li>
                <a href="#sobre" className="hover:text-white transition-colors">
                  Sobre a Solar Planet
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-white transition-colors">
                  Dúvidas Frequentes
                </a>
              </li>
              <li>
                <button
                  type="button"
                  onClick={onOpenPrivacyModal}
                  className="text-left text-[#1A79B9] hover:underline flex items-center gap-1 font-semibold cursor-pointer"
                >
                  <ShieldCheck className="w-3.5 h-3.5" />
                  Política de Privacidade
                </button>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Rights */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            © {new Date().getFullYear()} Solar Planet. Todos os direitos reservados.
          </div>
          <div className="flex items-center gap-4">
            <span>Barreiras e Oeste da Bahia</span>
            <span>•</span>
            <button
              type="button"
              onClick={onOpenPrivacyModal}
              className="hover:text-white underline cursor-pointer"
            >
              Termos & Privacidade (LGPD)
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};

