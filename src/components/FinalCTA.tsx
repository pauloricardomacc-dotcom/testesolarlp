import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, MapPin, Zap } from 'lucide-react';
import { WhatsAppIcon } from './WhatsAppIcon';
import { TechGridPattern, SolarArcGraphic, SolarCellGridPattern, AnimatedEnergyLine } from './SolarGraphics';

interface FinalCTAProps {
  whatsappUrl: string;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ whatsappUrl }) => {
  return (
    <section className="py-20 md:py-28 bg-[#061D2C] text-white relative overflow-hidden">
      {/* Background Solar & Tech Patterns */}
      <TechGridPattern opacity={0.08} className="text-[#38BDF8]" />
      <SolarCellGridPattern opacity={0.04} className="text-[#A6CD40]" />
      <SolarArcGraphic className="absolute -top-32 -right-32 w-[600px] h-[600px] text-[#1686C2] opacity-25 pointer-events-none" />

      {/* Background Solar Flare Glow */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-[#1686C2]/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-[#A6CD40]/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        {/* Glassmorphic Container Card */}
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-[#073B60]/80 backdrop-blur-2xl rounded-3xl p-8 sm:p-14 pb-12 sm:pb-16 border border-white/20 shadow-2xl relative overflow-hidden"
        >
          {/* Animated energy line positioned absolutely at the bottom edge */}
          <AnimatedEnergyLine className="absolute bottom-0 left-0 right-0 h-1.5 z-0 opacity-80" />

          <div className="inline-flex items-center gap-2 bg-[#A6CD40]/20 border border-[#A6CD40]/40 px-4 py-1.5 rounded-full mb-6 relative z-10">
            <Zap className="w-4 h-4 text-[#A6CD40] fill-current" />
            <span className="text-xs font-extrabold text-[#A6CD40] uppercase tracking-wider">
              Análise Técnica de Consumo
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-6 relative z-10">
            Descubra qual solução faz sentido para o seu consumo.
          </h2>

          <p className="text-base sm:text-xl text-slate-200 max-w-2xl mx-auto leading-relaxed mb-10 relative z-10">
            Envie sua conta de energia e converse com a Solar Planet para receber uma análise inicial estruturada e transparente.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10 relative z-10">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#128C7E] text-white font-extrabold text-base px-8 py-4 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-0.5 group"
            >
              <WhatsAppIcon className="w-6 h-6 shrink-0" />
              <span>Solicitar análise pelo WhatsApp</span>
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1 shrink-0" />
            </a>
          </div>

          {/* Elevated text box pill with spacing from the bottom looping line */}
          <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-100 bg-[#061D2C]/95 border border-white/25 px-5 py-2.5 rounded-full relative z-10 shadow-2xl mb-4">
            <MapPin className="w-4.5 h-4.5 text-[#A6CD40] shrink-0" />
            <span>Atendimento para Barreiras e outras cidades do Oeste da Bahia.</span>
          </div>

        </motion.div>

      </div>
    </section>
  );
};


