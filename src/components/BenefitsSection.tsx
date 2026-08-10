import React from 'react';
import { motion } from 'motion/react';
import { TrendingDown, ShieldCheck, Maximize2, Landmark, Wrench, BarChart3 } from 'lucide-react';
import { WhatsAppIcon } from './WhatsAppIcon';
import { SolarCellGridPattern, SolarArcGraphic, TechGridPattern } from './SolarGraphics';

interface BenefitsSectionProps {
  whatsappUrl: string;
}

export const BenefitsSection: React.FC<BenefitsSectionProps> = ({ whatsappUrl }) => {
  const benefits = [
    {
      icon: TrendingDown,
      title: 'Redução de Custos Recorrentes',
      description: 'Amortize parcelas expressivas do custo com faturas de energia, canalizando capital para o crescimento e melhorias do seu imóvel ou negócio.',
      accent: 'text-[#1A79B9]',
      bgAccent: 'bg-[#1A79B9]/10',
    },
    {
      icon: BarChart3,
      title: 'Previsibilidade Financeira',
      description: 'Proteja seu orçamento contra constantes reajustes e aumentos nas tarifas de energia elétrica no Oeste da Bahia.',
      accent: 'text-[#A6CD40]',
      bgAccent: 'bg-[#A6CD40]/15',
    },
    {
      icon: Maximize2,
      title: 'Aproveitamento de Espaço',
      description: 'Otimize a área útil de telhados residenciais, galpões comerciais ou solo rural transformando espaço ocioso em geração ativa.',
      accent: 'text-[#A6CD40]',
      bgAccent: 'bg-[#A6CD40]/15',
    },
    {
      icon: Landmark,
      title: 'Valorização do Patrimônio',
      description: 'Imóveis com sistema de energia solar instalado possuem maior atratividade de mercado e valorização estrutural imediata.',
      accent: 'text-[#073B60]',
      bgAccent: 'bg-[#073B60]/10',
    },
    {
      icon: Wrench,
      title: 'Dimensionamento Adequado',
      description: 'Projetos calculados com rigor técnico conforme o histórico e sazonalidade do seu consumo, evitando sub dimensionamentos.',
      accent: 'text-[#1A79B9]',
      bgAccent: 'bg-[#1A79B9]/10',
    },
    {
      icon: ShieldCheck,
      title: 'Acompanhamento Técnico',
      description: 'Supervisão técnica presencial, suporte na homologação e orientações transparentes em cada etapa da contratação.',
      accent: 'text-[#A6CD40]',
      bgAccent: 'bg-[#A6CD40]/15',
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-[#F5F8FA] border-y border-[#DCE5EA] relative overflow-hidden">
      {/* Background Solar & Tech Patterns */}
      <SolarCellGridPattern opacity={0.04} className="text-[#073B60]" />
      <TechGridPattern opacity={0.05} className="text-[#1A79B9]" />
      
      {/* Solar Arc Graphic Accent */}
      <SolarArcGraphic className="absolute -top-32 -right-32 w-[600px] h-[600px] text-[#A6CD40] opacity-15 pointer-events-none" />
      <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-[#A6CD40]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-xs font-bold text-[#1A79B9] uppercase tracking-wider bg-white px-3.5 py-1.5 rounded-full border border-[#DCE5EA] inline-block mb-3 shadow-xs">
            Decisão Estratégica
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#073B60] tracking-tight">
            Energia solar como uma decisão estratégica
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#536370]">
            Mais do que uma mudança de fornecimento, um projeto bem dimensionado traz segurança patrimonial e eficiência financeira contínua.
          </p>
        </div>

        {/* Asymmetrical Layout: Main Image Feature + 6 Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Main Visual Frame (4 cols) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-4 flex flex-col justify-between bg-[#073B60] text-white p-8 rounded-3xl relative overflow-hidden shadow-xl min-h-[380px]"
          >
            <img
              src="/media/hero.webp"
              alt="Instalação de painéis solares"
              className="absolute inset-0 w-full h-full object-cover opacity-25 mix-blend-overlay"
              referrerPolicy="no-referrer"
            />
            
            <div className="relative z-10">
              <span className="text-xs font-bold text-[#A6CD40] uppercase tracking-widest bg-white/10 backdrop-blur-sm px-3 py-1 rounded-md border border-white/10">
                Análise de Viabilidade
              </span>
              <h3 className="text-2xl font-extrabold text-white mt-4 leading-snug">
                Planejamento técnico sem promessas exageradas.
              </h3>
              <p className="text-sm text-slate-200 mt-3 font-normal leading-relaxed">
                Apresentamos propostas realistas e alinhadas às diretrizes da distribuidora local do Oeste da Bahia.
              </p>
            </div>

            <div className="relative z-10 pt-6 border-t border-white/20 mt-6">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2.5 bg-[#25D366] hover:bg-[#128C7E] text-white font-bold text-sm px-5 py-3.5 rounded-xl transition-all shadow-md group"
              >
                <WhatsAppIcon className="w-6 h-6 shrink-0" />
                <span>Analisar meu consumo</span>
              </a>
            </div>
          </motion.div>

          {/* Grid of 6 Benefits Cards (8 cols) */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-5">
            {benefits.map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.08 }}
                  className="bg-white p-6 rounded-2xl border border-[#DCE5EA] hover:border-[#1A79B9] shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    <div className={`w-12 h-12 rounded-xl ${item.bgAccent} flex items-center justify-center ${item.accent} mb-4 group-hover:scale-110 transition-transform`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="font-bold text-[#073B60] text-lg mb-2">
                      {item.title}
                    </h3>
                    <p className="text-sm text-[#536370] leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};


