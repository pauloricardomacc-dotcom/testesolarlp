import React from 'react';
import { motion } from 'motion/react';
import { MapPin, UserCheck, Search, ShieldCheck, FileCheck, Layers } from 'lucide-react';
import { TechGridPattern, SolarArcGraphic, SolarCellGridPattern } from './SolarGraphics';

export const DiferenciaisSection: React.FC = () => {
  const diferenciais = [
    {
      icon: MapPin,
      title: 'Presença e Sede Regional',
      description: 'Matriz física situada em Barreiras – BA. Atendimento presencial e suporte ágil diretamente no Oeste Baiano.',
    },
    {
      icon: UserCheck,
      title: 'Atendimento Próximo',
      description: 'Diálogo direto com profissionais de engenharia e consultores que conhecem a realidade energética local.',
    },
    {
      icon: Search,
      title: 'Análise Individualizada',
      description: 'Sem soluções genéricas de prateleira. Cada proposta nasce do estudo do histórico de consumo do imóvel.',
    },
    {
      icon: ShieldCheck,
      title: 'Acompanhamento Técnico',
      description: 'Responsabilidade técnica do projeto executivo à montagem e homologação com a distribuidora.',
    },
    {
      icon: FileCheck,
      title: 'Clareza na Contratação',
      description: 'Apresentação detalhada de custos, cronograma e especificações técnicas, garantindo total transparência.',
    },
    {
      icon: Layers,
      title: 'Processo Estruturado',
      description: 'Condução completa dos procedimentos burocráticos e técnicos para você ter tranquilidade do início ao fim.',
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-[#061D2C] text-white relative overflow-hidden">
      {/* Background Solar Arc & Tech Patterns */}
      <TechGridPattern opacity={0.06} className="text-[#38BDF8]" />
      <SolarCellGridPattern opacity={0.03} className="text-[#A6CD40]" />
      
      <SolarArcGraphic className="absolute -bottom-40 -left-40 w-[600px] h-[600px] text-[#1686C2] opacity-20 pointer-events-none" />

      {/* Glow Effects */}
      <div className="absolute top-10 right-10 w-96 h-96 bg-[#1686C2]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-[#A6CD40]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold text-[#A6CD40] uppercase tracking-wider bg-white/10 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/15 inline-block mb-3">
            Compromisso e Confiança
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Por que escolher a Solar Planet?
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300">
            A combinação entre engenharia técnica, proximidade regional no Oeste da Bahia e clareza durante todas as fases do projeto.
          </p>
        </div>

        {/* Diferenciais Grid with Glassmorphism */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {diferenciais.map((item, idx) => {
            const Icon = item.icon;
            const number = String(idx + 1).padStart(2, '0');
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="bg-gradient-to-br from-[#073B60]/90 via-[#073B60]/70 to-[#0A2E47]/90 backdrop-blur-xl rounded-2xl p-5 sm:p-7 border border-white/15 hover:border-[#A6CD40]/60 transition-all duration-300 group flex flex-col justify-between shadow-xl relative overflow-hidden active:scale-[0.99]"
              >
                {/* Subtle Brand Green Glow Accent on top right */}
                <div className="absolute top-0 right-0 w-28 h-28 bg-[#A6CD40]/10 rounded-full blur-2xl pointer-events-none group-hover:bg-[#A6CD40]/20 transition-all" />

                <div>
                  <div className="flex items-center justify-between mb-4">
                    {/* Icon Box with Green Icon */}
                    <div className="w-12 h-12 rounded-2xl bg-[#A6CD40]/15 border border-[#A6CD40]/30 flex items-center justify-center text-[#A6CD40] group-hover:scale-110 group-hover:bg-[#A6CD40]/25 group-hover:border-[#A6CD40]/60 transition-all duration-300 shadow-md">
                      <Icon className="w-6 h-6 text-[#A6CD40]" />
                    </div>

                    {/* Number Badge */}
                    <span className="text-xs font-black text-[#A6CD40] bg-[#A6CD40]/10 border border-[#A6CD40]/20 px-2.5 py-1 rounded-full uppercase tracking-widest">
                      {number}
                    </span>
                  </div>

                  <h3 className="font-extrabold text-white text-lg sm:text-xl mb-2.5 group-hover:text-[#A6CD40] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                    {item.description}
                  </p>
                </div>

                {/* Subtle Bottom Accent Indicator */}
                <div className="mt-5 pt-3 border-t border-white/10 flex items-center justify-between text-[11px] text-slate-400">
                  <span className="font-semibold text-[#38BDF8] group-hover:text-[#A6CD40] transition-colors">
                    Diferencial Solar Planet
                  </span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#A6CD40] opacity-60 group-hover:opacity-100 group-hover:scale-125 transition-all" />
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};


