import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  FileSearch,
  Compass,
  FileCheck,
  ShieldAlert,
  Wrench,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  Clock,
  Sparkles,
} from 'lucide-react';
import { TechGridPattern, SolarCellGridPattern, SolarArcGraphic } from './SolarGraphics';
import { WhatsAppIcon } from './WhatsAppIcon';

interface ProcessSectionProps {
  whatsappUrl?: string;
}

export const ProcessSection: React.FC<ProcessSectionProps> = ({
  whatsappUrl = 'https://wa.me/557799087260?text=Ol%C3%A1%21%20Conheci%20a%20Solar%20Planet%20pelo%20site%20e%20gostaria%20de%20solicitar%20uma%20an%C3%A1lise%20para%20energia%20solar.',
}) => {
  const [activeStep, setActiveStep] = useState<number>(0); // 0-indexed (0 to 5)
  const [direction, setDirection] = useState<number>(1); // 1 for next, -1 for prev
  const [isAutoplay, setIsAutoplay] = useState<boolean>(true);

  const steps = [
    {
      number: '01',
      title: 'Análise do Consumo',
      short: 'Avaliação Inicial',
      description:
        'A conta de energia e o histórico de uso são analisados em detalhe para compreender a necessidade real do cliente.',
      details:
        'Identificamos picos de consumo, sazonalidade e particularidades do imóvel ou operação agrícola.',
      duration: '1 a 2 dias úteis',
      icon: FileSearch,
      badge: 'Etapa 1 de 6',
    },
    {
      number: '02',
      title: 'Dimensionamento e Engenharia',
      short: 'Engenharia Solar',
      description:
        'O sistema é rigorosamente planejado considerando a incidência solar local do Oeste Baiano, inclinação do telhado/solo e estrutura disponível.',
      details:
        'Cálculo de módulos fotovoltaicos e inversores adequados para garantir estabilidade técnica sem sobrecarga.',
      duration: 'Engenharia Própria',
      icon: Compass,
      badge: 'Etapa 2 de 6',
    },
    {
      number: '03',
      title: 'Proposta Personalizada',
      short: 'Apresentação Clara',
      description:
        'O cliente recebe uma proposta transparente, organizada e de fácil compreensão, sem surpresas ou custos ocultos.',
      details:
        'Apresentação clara dos prazos, especificações técnicas dos equipamentos e estimativas sem promessas irrealistas.',
      duration: 'Transparência Total',
      icon: FileCheck,
      badge: 'Etapa 3 de 6',
    },
    {
      number: '04',
      title: 'Projeto e Homologação',
      short: 'Distribuidora',
      description:
        'Toda a documentação técnica, ART e procedimentos regulatórios junto à concessionária de energia (Neoenergia Coelba) são conduzidos pela Solar Planet.',
      details:
        'Elaboração de memorial descritivo e entrada nos processos de aprovação com total rigor normativo.',
      duration: 'Gestão Completa',
      icon: ShieldAlert,
      badge: 'Etapa 4 de 6',
    },
    {
      number: '05',
      title: 'Instalação Técnica',
      short: 'Execução e Segurança',
      description:
        'O sistema é instalado por nossa equipe própria seguindo elevados critérios de segurança elétrica, fixação estrutural e acabamento estético.',
      details:
        'Equipe treinada NR-10 e NR-35, uso de string boxes de proteção e alinhamento milimétrico das estruturas.',
      duration: 'Equipe Própria Especializada',
      icon: Wrench,
      badge: 'Etapa 5 de 6',
    },
    {
      number: '06',
      title: 'Ativação e Orientação',
      short: 'Entrega e Suporte',
      description:
        'Após a vistoria e troca do medidor pela concessionária, o sistema é energizado e o cliente é orientado a acompanhar a geração via aplicativo.',
      details:
        'Orientação técnica sobre operação do sistema, treinamento do app de monitoramento e suporte direto em Barreiras e região.',
      duration: 'Geração Conectada',
      icon: CheckCircle2,
      badge: 'Etapa 6 de 6',
    },
  ];

  const totalSteps = steps.length;

  const nextStep = useCallback(() => {
    setDirection(1);
    setActiveStep((prev) => (prev + 1) % totalSteps);
  }, [totalSteps]);

  const prevStep = useCallback(() => {
    setDirection(-1);
    setActiveStep((prev) => (prev - 1 + totalSteps) % totalSteps);
  }, [totalSteps]);

  const goToStep = (index: number) => {
    setDirection(index > activeStep ? 1 : -1);
    setActiveStep(index);
  };

  // Autoplay timer - set to 10 seconds per slide
  useEffect(() => {
    if (!isAutoplay) return;
    const interval = setInterval(() => {
      nextStep();
    }, 10000);
    return () => clearInterval(interval);
  }, [isAutoplay, nextStep]);

  const current = steps[activeStep];
  const CurrentIcon = current.icon;

  // Animation variants
  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 80 : -80,
      opacity: 0,
      scale: 0.96,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] },
    },
    exit: (dir: number) => ({
      x: dir > 0 ? -80 : 80,
      opacity: 0,
      scale: 0.96,
      transition: { duration: 0.35, ease: [0.7, 0, 0.84, 0] },
    }),
  };

  return (
    <section id="como-funciona" className="pt-16 pb-10 md:pt-20 md:pb-14 bg-[#061D2C] text-white relative overflow-hidden">
      {/* Background Graphic Grid Patterns */}
      <TechGridPattern opacity={0.08} className="text-[#38BDF8]" />
      <SolarCellGridPattern opacity={0.04} className="text-[#A6CD40]" />
      <SolarArcGraphic className="absolute -top-32 -right-32 w-[600px] h-[600px] text-[#1686C2] opacity-20 pointer-events-none" />

      {/* Subtle Radial Glows */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-[#1686C2]/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#A6CD40]/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10">
          <span className="text-xs font-bold text-[#A6CD40] uppercase tracking-wider bg-white/10 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/15 inline-flex items-center gap-2 mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#A6CD40]" />
            <span>Fluxo Organizado • Blueprint Solar</span>
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Da análise à instalação, você acompanha cada etapa
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-300 leading-relaxed">
            Nossos projetos seguem um roteiro técnico padronizado para garantir previsibilidade, segurança regulatória e máxima eficiência solar.
          </p>
        </div>

        {/* Minimalist Carousel Stage with Side Passage Controls */}
        <div
          className="max-w-4xl mx-auto relative px-3 sm:px-12"
          onMouseEnter={() => setIsAutoplay(false)}
          onMouseLeave={() => setIsAutoplay(true)}
        >
          {/* Side Lateral Arrow Buttons */}
          <button
            type="button"
            onClick={prevStep}
            className="absolute -left-1 sm:-left-5 top-1/2 -translate-y-1/2 z-20 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[#061D2C]/85 hover:bg-[#1686C2] text-slate-200 hover:text-white border border-white/20 hover:border-[#A6CD40]/60 shadow-md backdrop-blur-md flex items-center justify-center transition-all duration-200 hover:scale-110 active:scale-95 cursor-pointer group"
            aria-label="Etapa anterior"
            title="Etapa anterior"
          >
            <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 group-hover:-translate-x-0.5 transition-transform" />
          </button>

          <button
            type="button"
            onClick={nextStep}
            className="absolute -right-1 sm:-right-5 top-1/2 -translate-y-1/2 z-20 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[#061D2C]/85 hover:bg-[#1686C2] text-slate-200 hover:text-white border border-white/20 hover:border-[#A6CD40]/60 shadow-md backdrop-blur-md flex items-center justify-center transition-all duration-200 hover:scale-110 active:scale-95 cursor-pointer group"
            aria-label="Próxima etapa"
            title="Próxima etapa"
          >
            <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-0.5 transition-transform" />
          </button>

          {/* Active Centered Slide */}
          <div className="min-h-[360px] flex flex-col">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={activeStep}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                className="bg-gradient-to-br from-[#073B60] to-[#0B4B79] text-white rounded-3xl p-6 sm:p-10 border border-white/20 shadow-2xl relative overflow-hidden flex-1 flex flex-col justify-between"
              >
                {/* Background Solar Cell Accent */}
                <SolarCellGridPattern opacity={0.06} className="text-[#A6CD40]" />
                <div className="absolute top-0 right-0 w-80 h-80 bg-[#A6CD40]/10 rounded-full blur-3xl pointer-events-none" />

                {/* Big Background Step Number Watermark */}
                <div className="absolute -bottom-6 -right-4 text-[140px] sm:text-[180px] font-black text-white/5 select-none pointer-events-none leading-none">
                  {current.number}
                </div>

                <div>
                  {/* Top Header of Active Slide */}
                  <div className="flex flex-wrap items-center justify-between gap-3 mb-6 relative z-10">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-2xl bg-[#1686C2]/40 border border-[#38BDF8]/50 flex items-center justify-center text-[#A6CD40] shadow-md">
                        <CurrentIcon className="w-6 h-6" />
                      </div>
                      <div>
                        <span className="text-xs font-extrabold text-[#38BDF8] uppercase tracking-wider block">
                          Etapa {current.number} de {totalSteps} • {current.short}
                        </span>
                        <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                          {current.title}
                        </h3>
                      </div>
                    </div>

                    <div className="inline-flex items-center gap-1.5 bg-white/10 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/15 text-xs text-slate-200">
                      <Clock className="w-3.5 h-3.5 text-[#A6CD40]" />
                      <span>{current.duration}</span>
                    </div>
                  </div>

                  {/* Main Description Paragraph */}
                  <p className="text-base sm:text-lg text-slate-200 leading-relaxed mb-6 relative z-10 font-normal">
                    {current.description}
                  </p>

                  {/* Highlight Box / Details */}
                  <div className="bg-[#061D2C]/80 backdrop-blur-md rounded-2xl p-4 sm:p-5 border border-white/15 relative z-10 mb-6">
                    <div className="text-xs font-bold text-[#A6CD40] uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                      <CheckCircle2 className="w-4 h-4 text-[#A6CD40]" />
                      <span>Entregável & Controle Técnico</span>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                      {current.details}
                    </p>
                  </div>
                </div>

                {/* Bottom Navigation & Pagination Indicators */}
                <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-4 relative z-10">
                  {/* Dots Indicator */}
                  <div className="flex items-center gap-2">
                    {steps.map((_, idx) => (
                      <button
                        key={idx}
                        type="button"
                        onClick={() => goToStep(idx)}
                        className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                          activeStep === idx
                            ? 'w-8 bg-[#A6CD40] shadow-[0_0_8px_#A6CD40]'
                            : 'w-2.5 bg-white/20 hover:bg-white/40'
                        }`}
                        aria-label={`Ir para etapa ${idx + 1}`}
                        title={`Etapa ${idx + 1}`}
                      />
                    ))}
                  </div>

                  {/* Advance Button */}
                  {activeStep < totalSteps - 1 ? (
                    <button
                      type="button"
                      onClick={nextStep}
                      className="inline-flex items-center gap-2.5 bg-[#A6CD40] hover:bg-[#B8E048] text-[#061D2C] font-black text-sm px-6 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 cursor-pointer group hover:scale-[1.02]"
                    >
                      <span>Avançar para Etapa {steps[activeStep + 1].number}</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                  ) : (
                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2.5 bg-[#25D366] hover:bg-[#128C7E] text-white font-black text-sm px-6 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 group"
                    >
                      <WhatsAppIcon className="w-5 h-5" />
                      <span>Iniciar Análise Gratuita</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </a>
                  )}
                </div>

              </motion.div>
            </AnimatePresence>
          </div>
        </div>

      </div>
    </section>
  );
};
