import React from 'react';
import { motion } from 'motion/react';
import { Building2, Compass, Layers, FileCheck2 } from 'lucide-react';
import { TechGridPattern } from './SolarGraphics';

export const CredibilityBar: React.FC = () => {
  const items = [
    {
      icon: Building2,
      title: 'Matriz em Barreiras',
      subtitle: 'Estrutura própria e física',
    },
    {
      icon: Compass,
      title: 'Oeste da Bahia',
      subtitle: 'Atendimento e suporte regional',
    },
    {
      icon: Layers,
      title: 'Residencial, Comercial e Rural',
      subtitle: 'Projetos sob medida',
    },
    {
      icon: FileCheck2,
      title: 'Acompanhamento do Projeto',
      subtitle: 'Da análise à homologação',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  };

  return (
    <div className="relative z-20 -mt-10 sm:-mt-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-50px' }}
        variants={containerVariants}
        className="bg-gradient-to-br from-[#073B60]/95 via-[#073B60]/90 to-[#0A2E47]/95 backdrop-blur-xl rounded-2xl sm:rounded-3xl p-5 sm:p-6 lg:p-7 border border-white/20 shadow-2xl relative overflow-hidden"
      >
        {/* Tech Grid Background Pattern & Glow Accent */}
        <TechGridPattern opacity={0.05} className="text-sky-300" />
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#A6CD40]/10 rounded-full blur-3xl pointer-events-none" />

        {/* Consolidated Single Container Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6 divide-y sm:divide-y-0 divide-white/15 relative z-10">
          {items.map((item, idx) => {
            const Icon = item.icon;
            const number = String(idx + 1).padStart(2, '0');
            return (
              <motion.div
                key={idx}
                variants={itemVariants}
                className={`flex flex-col gap-2.5 ${
                  idx !== 0 ? 'pt-4 sm:pt-0 sm:pl-4 lg:pl-6 sm:border-l sm:border-white/15' : ''
                } group`}
              >
                {/* Top-Left Number Badge */}
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-black text-[#A6CD40] bg-[#A6CD40]/10 border border-[#A6CD40]/25 px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                    {number}
                  </span>
                </div>

                {/* Content with Icon and Text */}
                <div className="flex items-start gap-3 sm:gap-3.5">
                  {/* Icon Box */}
                  <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-2xl bg-[#A6CD40]/15 border border-[#A6CD40]/30 flex items-center justify-center text-[#A6CD40] shrink-0 group-hover:scale-110 group-hover:bg-[#A6CD40]/25 group-hover:border-[#A6CD40]/60 transition-all duration-300 shadow-md">
                    <Icon className="w-5 h-5 text-[#A6CD40]" />
                  </div>

                  <div className="flex-1 min-w-0">
                    <h3 className="font-extrabold text-white text-sm sm:text-base group-hover:text-[#A6CD40] transition-colors leading-snug mb-1">
                      {item.title}
                    </h3>
                    <p className="text-xs text-slate-300 leading-relaxed font-normal">
                      {item.subtitle}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </div>
  );
};


