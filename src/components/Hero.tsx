import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { ArrowRight, ShieldCheck, MapPin, Zap, CheckCircle2 } from 'lucide-react';
import { WhatsAppIcon } from './WhatsAppIcon';
import { SolarCellGridPattern, TechGridPattern, SolarArcGraphic, PerspectiveSolarPanels } from './SolarGraphics';

interface HeroProps {
  whatsappUrl: string;
}

export const Hero: React.FC<HeroProps> = ({ whatsappUrl }) => {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const arcY = useTransform(scrollYProgress, [0, 1], [0, 70]);
  const panelY = useTransform(scrollYProgress, [0, 1], [0, -40]);
  const lightGlowOpacity = useTransform(scrollYProgress, [0, 0.8], [0.6, 0.2]);

  return (
    <section ref={containerRef} className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden bg-[#061D2C] text-white">
      {/* LAYER 0: Rich Gradient Base */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#061D2C] via-[#073B60] to-[#0A283E] pointer-events-none" />

      {/* LAYER 1: Tech Blueprint & Photovoltaic Cell Grid Patterns */}
      <TechGridPattern opacity={0.06} className="text-sky-300" />
      <SolarCellGridPattern opacity={0.04} className="text-[#A6CD40]" />

      {/* LAYER 2: Solar Arc & Orbital Rings with Scroll Parallax */}
      <motion.div
        style={{ y: arcY, opacity: lightGlowOpacity }}
        className="absolute -top-24 -right-24 md:top-[-100px] md:right-[-80px] pointer-events-none"
      >
        <SolarArcGraphic size={720} />
      </motion.div>

      {/* Radial Solar Glow Spotlight */}
      <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-[#F3B62B]/10 rounded-full blur-[120px] pointer-events-none solar-glow" />
      <div className="absolute bottom-0 left-10 w-96 h-96 bg-[#1686C2]/20 rounded-full blur-[100px] pointer-events-none" />

      {/* LAYER 3: Perspective Photovoltaic Module Vector Art (Parallax) */}
      <motion.div
        style={{ y: panelY }}
        className="absolute bottom-6 -left-12 w-80 md:w-96 opacity-30 pointer-events-none hidden sm:block"
      >
        <PerspectiveSolarPanels />
      </motion.div>

      {/* Energy Circulation Trace Lines */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20" xmlns="http://www.w3.org/2000/svg">
        <path d="M 0 180 Q 300 240 600 120 T 1200 280" fill="none" stroke="#A8C936" strokeWidth="1.5" strokeDasharray="6 6" className="animate-energy-flow" />
        <path d="M 100 450 Q 500 350 900 500" fill="none" stroke="#1686C2" strokeWidth="1.5" strokeDasharray="8 8" className="animate-energy-flow" />
      </svg>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Copywriting & Actions */}
          <div className="lg:col-span-7 flex flex-col items-start">
            
            {/* Regional Badge */}
            <div className="inline-flex items-center gap-2 bg-[#1686C2]/15 border border-[#1686C2]/40 backdrop-blur-md px-3.5 py-1.5 rounded-full mb-6">
              <span className="flex h-2.5 w-2.5 rounded-full bg-[#A6CD40] animate-pulse" />
              <span className="text-xs font-bold text-[#A6CD40] tracking-wide uppercase">
                Energia solar para o Oeste da Bahia
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-[1.15] tracking-tight mb-6">
              Energia solar planejada para reduzir seus custos{' '}
              <span className="relative inline-block text-[#38BDF8]">
                com segurança.
                <svg className="absolute -bottom-1 left-0 w-full h-2 text-[#A6CD40]" viewBox="0 0 100 20" preserveAspectRatio="none">
                  <path d="M0,15 Q50,5 100,15" stroke="currentColor" strokeWidth="6" fill="none" strokeLinecap="round" />
                </svg>
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-8 max-w-2xl font-normal">
              A <strong className="text-white font-semibold">Solar Planet</strong> desenvolve soluções customizadas para residências, empresas e propriedades rurais, acompanhando cada etapa da análise à instalação.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mb-10">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#128C7E] text-white font-bold text-base px-7 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5 group"
              >
                <WhatsAppIcon className="w-6 h-6 shrink-0" />
                <span>Solicitar análise pelo WhatsApp</span>
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1 shrink-0" />
              </a>

              <a
                href="#como-funciona"
                className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/15 text-white font-semibold text-base px-6 py-4 rounded-xl border border-white/20 hover:border-white/40 transition-all duration-200 backdrop-blur-sm"
              >
                <span>Conhecer o processo</span>
              </a>
            </div>

            {/* Institutional Indicators (No fake numbers) */}
            <div className="pt-6 border-t border-white/15 w-full grid grid-cols-2 sm:grid-cols-3 gap-4">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-[#1686C2]/20 border border-[#1686C2]/40 flex items-center justify-center text-[#38BDF8] shrink-0">
                  <MapPin className="w-4 h-4 text-[#38BDF8]" />
                </div>
                <div>
                  <div className="text-xs text-slate-400 font-medium">Sede Própria</div>
                  <div className="text-sm font-bold text-white">Barreiras – BA</div>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-[#A6CD40]/20 border border-[#A6CD40]/40 flex items-center justify-center text-[#A6CD40] shrink-0">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs text-slate-400 font-medium">Projetos</div>
                  <div className="text-sm font-bold text-white">Homologados</div>
                </div>
              </div>

              <div className="flex items-center gap-2.5 col-span-2 sm:col-span-1">
                <div className="w-8 h-8 rounded-lg bg-[#F3B62B]/20 border border-[#F3B62B]/40 flex items-center justify-center text-[#F3B62B] shrink-0">
                  <Zap className="w-4 h-4 text-[#F3B62B]" />
                </div>
                <div>
                  <div className="text-xs text-slate-400 font-medium">Atendimento</div>
                  <div className="text-sm font-bold text-white">Oeste da Bahia</div>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Premium Visual Composition */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Backing Frame */}
              <div className="absolute -inset-3 bg-gradient-to-tr from-[#073B60] via-[#1686C2] to-[#A6CD40] rounded-3xl opacity-30 blur-xl transform rotate-1" />
              
              {/* Main Image Card */}
              <div className="relative rounded-2xl overflow-hidden border-2 border-white/20 shadow-2xl bg-[#061D2C]">
                <img
                  src="/media/hero.webp"
                  alt="Instalação de energia solar no Oeste da Bahia"
                  className="w-full h-[380px] sm:h-[440px] object-cover hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#061D2C]/90 via-transparent to-transparent pointer-events-none" />
                
                {/* Floating Glassmorphism Badge Bottom Right */}
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-[#073B60]/90 backdrop-blur-md border border-white/20 text-white shadow-lg">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-[#A6CD40] flex items-center justify-center text-[#073B60] font-bold shrink-0">
                        <CheckCircle2 className="w-6 h-6" />
                      </div>
                      <div>
                        <div className="text-xs text-slate-300 font-medium">Dimensionamento Seguro</div>
                        <div className="text-sm font-bold text-white">Engenharia e Acompanhamento</div>
                      </div>
                    </div>
                    <span className="text-[11px] font-semibold bg-[#1686C2] text-white px-2.5 py-1 rounded-md shrink-0">
                      Regional
                    </span>
                  </div>
                </div>
              </div>

              {/* Floating Top Card */}
              <div className="absolute -top-5 -left-5 bg-[#073B60]/95 backdrop-blur-md p-3.5 rounded-xl border border-white/20 shadow-xl flex items-center gap-3 hidden sm:flex text-white">
                <div className="w-9 h-9 rounded-lg bg-[#A6CD40]/20 flex items-center justify-center text-[#A6CD40] shrink-0">
                  <Zap className="w-5 h-5 text-[#38BDF8]" />
                </div>
                <div>
                  <p className="text-xs font-bold text-white">Análise Técnica</p>
                  <p className="text-[11px] text-slate-300">Perfil de consumo real</p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
