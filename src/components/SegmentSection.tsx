import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Building, Tractor, Home, CheckCircle2, MousePointerClick, ChevronDown, ChevronUp } from 'lucide-react';
import { WhatsAppIcon } from './WhatsAppIcon';
import { SolarCellGridPattern, TechGridPattern, TopographicContourLines } from './SolarGraphics';

interface SegmentSectionProps {
  whatsappUrl: string;
}

export const SegmentSection: React.FC<SegmentSectionProps> = () => {
  const [activeTab, setActiveTab] = useState<'empresarial' | 'rural' | 'residencial' | null>(null);

  const segments = [
    {
      id: 'empresarial' as const,
      icon: Building,
      title: 'Empresas & Comércios',
      badge: 'Redução de Custos Fixos',
      subtitle: 'Redução de despesas e maior previsibilidade para o negócio.',
      description: 'Empreendimentos comerciais e indústrias lidam com tarifas energéticas elevadas em horários de pico. A Solar Planet projeta sistemas dimensionados para amortizar custos operacionais recorrentes.',
      highlights: [
        'Aumento da margem operacional e previsibilidade de caixa',
        'Dimensionamento exato de acordo com a curva de carga da empresa',
        'Projeto executivo com mínima interferência na rotina operacional',
        'Aproveitamento inteligente de cobertura ou áreas técnicas',
      ],
      image: '/media/commercial_solar.webp',
      ctaMessage: 'Olá! Tenho uma empresa no Oeste da Bahia e gostaria de solicitar uma análise para energia solar empresarial.',
    },
    {
      id: 'rural' as const,
      icon: Tractor,
      title: 'Produtores Rurais',
      badge: 'Agronegócio no Oeste da Bahia',
      subtitle: 'Energia para apoiar produção, irrigação e infraestrutura.',
      description: 'Propriedades rurais e operações agrícolas exigem sistemas robustos para suportar pivôs de irrigação, secadores, galpões de maquinário e infraestrutura de suporte com máxima confiabilidade.',
      highlights: [
        'Autonomia e suporte para irrigação, armazenamento e bombeamento',
        'Estruturas preparadas para o clima e incidência solar do Oeste Baiano',
        'Projetos homologados com conformidade regulatória e de segurança',
        'Atendimento próximo e visitas técnicas na zona rural da região',
      ],
      image: '/media/rural_solar.webp',
      ctaMessage: 'Olá! Sou produtor rural no Oeste da Bahia e gostaria de solicitar uma análise para energia solar no agronegócio.',
    },
    {
      id: 'residencial' as const,
      icon: Home,
      title: 'Residências de Alto Consumo',
      badge: 'Patrimônio & Conforto',
      subtitle: 'Mais controle sobre os gastos da sua casa.',
      description: 'Para residências com múltiplos equipamentos de climatização, piscinas ou alto consumo mensal, a energia solar transforma uma despesa contínua em um investimento duradouro no imóvel.',
      highlights: [
        'Redução imediata no valor da fatura mensal de energia',
        'Valorização direta do imóvel e durabilidade do sistema',
        'Projeto estético integrado à arquitetura do telhado',
        'Inspeção e acompanhamento técnico contínuo pós-instalação',
      ],
      image: '/media/residential_solar.webp',
      ctaMessage: 'Olá! Gostaria de solicitar uma análise de energia solar para minha residência no Oeste da Bahia.',
    },
  ];

  const currentSegment = segments.find((s) => s.id === activeTab);

  const handleTabClick = (id: 'empresarial' | 'rural' | 'residencial') => {
    setActiveTab((prev) => (prev === id ? null : id));
  };

  return (
    <section id="solucoes" className="relative py-16 md:py-24 bg-[#F5F8FA] overflow-hidden">
      {/* Background Solar Accents */}
      <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-[#073B60]/10 via-transparent to-transparent pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-[#1686C2]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8">
          <span className="text-xs font-bold text-[#1A79B9] uppercase tracking-wider bg-[#1A79B9]/10 px-3.5 py-1.5 rounded-full inline-block mb-3 border border-[#1A79B9]/20">
            Soluções Sob Medida
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#073B60] tracking-tight">
            Uma solução pensada para a sua realidade
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[#536370]">
            Cada imóvel, empresa ou propriedade possui um perfil de consumo diferente. Clique abaixo na sua categoria para ver os detalhes.
          </p>
        </div>

        {/* Clear Click Indicator Prompt */}
        <div className="flex items-center justify-center mb-6">
          <div className="inline-flex items-center gap-2 bg-[#073B60]/5 border border-[#1A79B9]/30 text-[#073B60] px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold shadow-xs animate-pulse">
            <MousePointerClick className="w-4 h-4 text-[#A6CD40]" />
            <span>Clique na modalidade abaixo para expandir e ver mais detalhes 👇</span>
          </div>
        </div>

        {/* Tab Navigation with Connecting Line */}
        <div className="relative">
          {/* Thin connecting energy line */}
          <div className="absolute top-1/2 left-10 right-10 h-0.5 bg-[#DCE5EA] -translate-y-1/2 hidden md:block z-0" />

          <div className="relative z-10 flex flex-wrap justify-center gap-3 md:gap-5">
            {segments.map((seg) => {
              const Icon = seg.icon;
              const isActive = activeTab === seg.id;
              return (
                <button
                  key={seg.id}
                  type="button"
                  onClick={() => handleTabClick(seg.id)}
                  className={`flex items-center gap-2.5 px-6 py-3.5 rounded-2xl font-bold text-sm sm:text-base transition-all duration-300 cursor-pointer shadow-sm ${
                    isActive
                      ? 'bg-[#073B60] text-white shadow-xl shadow-[#073B60]/20 scale-[1.03] ring-2 ring-[#A6CD40]'
                      : 'bg-white text-[#073B60] hover:bg-[#1A79B9]/10 border border-[#DCE5EA] hover:border-[#1A79B9]/40'
                  }`}
                  aria-expanded={isActive}
                >
                  <Icon className={`w-5 h-5 ${isActive ? 'text-[#A6CD40]' : 'text-[#1A79B9]'}`} />
                  <span>{seg.title}</span>
                  {isActive ? (
                    <ChevronUp className="w-4 h-4 text-[#A6CD40] ml-1" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-slate-400 ml-1" />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Minimized / Expandable Content Layout Container */}
        <AnimatePresence>
          {activeTab && currentSegment && (
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, height: 0, marginTop: 0 }}
              animate={{ opacity: 1, height: 'auto', marginTop: 28 }}
              exit={{ opacity: 0, height: 0, marginTop: 0 }}
              transition={{ duration: 0.35, ease: 'easeInOut' }}
              className="overflow-hidden"
            >
              <div className="relative overflow-hidden bg-white rounded-3xl border border-[#DCE5EA] p-6 lg:p-10 shadow-xl">
                
                {/* Dynamic Category Specific Background Textures */}
                {activeTab === 'empresarial' && <TechGridPattern opacity={0.05} className="text-[#073B60]" />}
                {activeTab === 'rural' && <TopographicContourLines opacity={0.1} className="text-[#A6CD40]" />}
                {activeTab === 'residencial' && <SolarCellGridPattern opacity={0.04} className="text-[#1A79B9]" />}

                {/* Top Close Header */}
                <div className="flex items-center justify-between pb-4 mb-6 border-b border-[#DCE5EA] relative z-10">
                  <div className="inline-flex items-center gap-2 text-xs font-bold text-[#1A79B9] bg-[#F5F8FA] px-3.5 py-1.5 rounded-md border border-[#DCE5EA]">
                    <span className="w-2 h-2 rounded-full bg-[#A6CD40]" />
                    {currentSegment.badge}
                  </div>

                  <button
                    type="button"
                    onClick={() => setActiveTab(null)}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#536370] hover:text-[#073B60] bg-[#F5F8FA] hover:bg-[#EAEFF3] px-3.5 py-1.5 rounded-full border border-[#DCE5EA] transition-colors cursor-pointer"
                  >
                    <span>Minimizar</span>
                    <ChevronUp className="w-4 h-4 text-[#1A79B9]" />
                  </button>
                </div>

                {/* Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10">
                  
                  {/* Content Column */}
                  <div className="lg:col-span-6 flex flex-col justify-center">
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-[#073B60] mb-3">
                      {currentSegment.subtitle}
                    </h3>

                    <p className="text-base text-[#536370] leading-relaxed mb-6">
                      {currentSegment.description}
                    </p>

                    {/* Highlights List */}
                    <div className="space-y-3 mb-8">
                      {currentSegment.highlights.map((item, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-[#A6CD40] shrink-0 mt-0.5" />
                          <span className="text-sm font-medium text-[#073B60]">{item}</span>
                        </div>
                      ))}
                    </div>

                    {/* CTA for this segment */}
                    <div>
                      <a
                        href={`https://wa.me/557799087260?text=${encodeURIComponent(currentSegment.ctaMessage)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-3 bg-[#25D366] hover:bg-[#128C7E] text-white font-bold text-sm sm:text-base px-6 py-3.5 rounded-xl shadow-md transition-all group"
                      >
                        <WhatsAppIcon className="w-6 h-6 sm:w-6.5 sm:h-6.5 shrink-0" />
                        <span>Solicitar análise para {currentSegment.title}</span>
                      </a>
                    </div>
                  </div>

                  {/* Image Column */}
                  <div className="lg:col-span-6">
                    <div className="relative rounded-2xl overflow-hidden border border-[#DCE5EA] shadow-xl group">
                      <img
                        src={currentSegment.image}
                        alt={currentSegment.title}
                        className="w-full h-[280px] sm:h-[360px] object-cover group-hover:scale-105 transition-transform duration-700"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#061D2C]/85 via-transparent to-transparent" />
                      
                      <div className="absolute bottom-4 left-4 right-4 text-white">
                        <div className="text-xs font-medium text-slate-300">Engenharia Regional</div>
                        <div className="text-base font-bold">{currentSegment.title} • Barreiras & Região</div>
                      </div>
                    </div>
                  </div>

                </div>

              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
};



