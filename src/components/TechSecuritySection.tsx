import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, Cpu, Wrench, Shield, FileCheck2 } from 'lucide-react';
import techImg from '../assets/images/solar_tech_inspection_1785356643941.jpg';
import { TechGridPattern, SolarCellGridPattern } from './SolarGraphics';

export const TechSecuritySection: React.FC = () => {
  const points = [
    {
      icon: Cpu,
      title: 'Módulos e Inversores de Alta Eficiência',
      description: 'Seleção de componentes de ponta com curva de eficiência e durabilidade compatíveis com o alto índice de radiação do Oeste Baiano.',
    },
    {
      icon: Shield,
      title: 'Proteção Elétrica Completa',
      description: 'Sistemas equipados com String Box dedicadas, chaves seccionadoras e Dispositivos de Proteção contra Surtos (DPS).',
    },
    {
      icon: Wrench,
      title: 'Suporte Técnico e Orientação Presencial',
      description: 'Treinamento sobre o funcionamento do sistema e canal direto com nossos especialistas locais em Barreiras.',
    },
    {
      icon: FileCheck2,
      title: 'Responsabilidade Técnica & ART',
      description: 'Projetos elétricos submetidos com Anotação de Responsabilidade Técnica (ART) por engenheiros credenciados.',
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-[#061D2C] text-white relative overflow-hidden">
      {/* Background Tech & Grid Overlay */}
      <TechGridPattern opacity={0.08} className="text-[#38BDF8]" />
      <SolarCellGridPattern opacity={0.03} className="text-[#A6CD40]" />
      
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-[#1686C2]/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Tech Image Column (5 cols) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative rounded-3xl overflow-hidden border border-white/20 shadow-2xl">
              <img
                src={techImg}
                alt="Equipamentos técnicos e proteção de energia solar"
                className="w-full h-[420px] object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#061D2C] via-transparent to-transparent opacity-80" />

              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-[#073B60]/90 backdrop-blur-md border border-white/20">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#A6CD40] flex items-center justify-center text-[#061D2C]">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-white uppercase">
                      Segurança Elétrica Garantida
                    </p>
                    <p className="text-xs text-slate-300">
                      Conformidade com normas ABNT e concessionária
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Content Column (7 cols) */}
          <div className="lg:col-span-7">
            <span className="text-xs font-bold text-[#A6CD40] uppercase tracking-wider bg-white/10 px-3.5 py-1.5 rounded-full border border-white/15 inline-block mb-3">
              Rigor e Engenharia
            </span>
            
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
              Tecnologia aplicada com responsabilidade
            </h2>

            <p className="text-base text-slate-300 mb-8 leading-relaxed">
              A segurança de uma instalação solar reside no dimensionamento e na qualidade das conexões elétricas. A Solar Planet segue critérios rígidos de engenharia.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
              {points.map((p, idx) => {
                const Icon = p.icon;
                const number = String(idx + 1).padStart(2, '0');
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: idx * 0.08 }}
                    className="bg-gradient-to-br from-[#073B60]/90 via-[#073B60]/70 to-[#0A2E47]/90 backdrop-blur-xl rounded-2xl p-5 sm:p-6 border border-white/15 hover:border-[#A6CD40]/60 transition-all duration-300 group flex flex-col justify-between shadow-xl relative overflow-hidden active:scale-[0.99]"
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

                      <h3 className="font-extrabold text-white text-base sm:text-lg mb-2 group-hover:text-[#A6CD40] transition-colors">
                        {p.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                        {p.description}
                      </p>
                    </div>

                    {/* Subtle Bottom Accent Indicator */}
                    <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-[11px] text-slate-400">
                      <span className="font-semibold text-[#38BDF8] group-hover:text-[#A6CD40] transition-colors">
                        Padrão Técnico Solar
                      </span>
                      <span className="w-1.5 h-1.5 rounded-full bg-[#A6CD40] opacity-60 group-hover:opacity-100 group-hover:scale-125 transition-all" />
                    </div>
                  </motion.div>
                );
              })}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};


