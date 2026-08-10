import React, { useState, useEffect } from 'react';
import { Logo } from './Logo';
import { WhatsAppIcon } from './WhatsAppIcon';
import { Menu, X, MapPin } from 'lucide-react';

interface HeaderProps {
  whatsappUrl: string;
}

export const Header: React.FC<HeaderProps> = ({ whatsappUrl }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      if (currentScroll > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const progress = Math.min(100, Math.max(0, (currentScroll / totalHeight) * 100));
        setScrollProgress(progress);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Soluções', href: '#solucoes' },
    { name: 'Depoimentos', href: '#depoimentos' },
    { name: 'Simulador', href: '#simulador' },
    { name: 'Como Funciona', href: '#como-funciona' },
    { name: 'Sobre', href: '#sobre' },
    { name: 'Dúvidas', href: '#faq' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-[#DCE5EA]/80 py-2 sm:py-2.5'
          : 'bg-transparent py-3 sm:py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center group focus:outline-none focus:ring-2 focus:ring-[#1A79B9] rounded-lg">
            <Logo size="md" variant={isScrolled ? 'full-color' : 'light'} />
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 bg-white/80 backdrop-blur-sm border border-[#DCE5EA] px-4 py-1.5 rounded-full shadow-xs">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3.5 py-1.5 text-xs xl:text-sm font-medium text-[#536370] hover:text-[#1A79B9] transition-colors rounded-full hover:bg-[#F5F8FA]"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Header Action */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#128C7E] text-white font-bold text-xs xl:text-sm px-4.5 py-2.5 rounded-full shadow-sm hover:shadow-md transition-all duration-200 group"
            >
              <WhatsAppIcon className="w-5 h-5 shrink-0" />
              <span>Solicitar análise</span>
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2.5 rounded-xl bg-white border border-[#DCE5EA] text-[#073B60] hover:bg-[#F5F8FA] focus:outline-none"
            aria-label={isMobileMenuOpen ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Aesthetic Reading Progress Bar */}
      <div className="w-full bg-slate-100/50 h-1 absolute bottom-0 left-0 overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-[#1A79B9] via-[#A6CD40] to-[#25D366] transition-all duration-150 ease-out"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[72px] sm:top-[80px] bg-white border-b border-[#DCE5EA] shadow-xl p-6 transition-all animate-in slide-in-from-top duration-200 z-50">
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2.5 text-xs font-semibold text-[#1A79B9] bg-[#F5F8FA] p-3 rounded-lg border border-[#DCE5EA] mb-1">
              <MapPin className="w-5 h-5 shrink-0" />
              <span>Solar Planet • Matriz em Barreiras – BA</span>
            </div>
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-base font-semibold text-[#073B60] hover:text-[#1A79B9] py-2 border-b border-[#F5F8FA] transition-colors"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-3 mt-1 flex flex-col gap-3">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full inline-flex items-center justify-center gap-2.5 bg-[#25D366] hover:bg-[#128C7E] text-white font-bold text-sm py-3.5 rounded-xl shadow-md"
              >
                <WhatsAppIcon className="w-6 h-6 shrink-0" />
                <span>Solicitar Análise pelo WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

