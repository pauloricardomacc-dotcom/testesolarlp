import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2 } from 'lucide-react';
import { WhatsAppIcon } from './WhatsAppIcon';
import { TopographicLinesPattern, TechGridPattern } from './SolarGraphics';

interface AboutSectionProps {
  whatsappUrl: string;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ whatsappUrl }) => {
  return (
    <section id="sobre" className="py-16 md:py-24 bg-[#F5F8FA] border-b border-[#DCE5EA] relative overflow-hidden">
      {/* Regional Topographic & Grid Layer */}
      <TopographicLinesPattern opacity={0.05} className="text-[#073B60]" />
      <TechGridPattern opacity={0.04} className="text-[#1A79B9]" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-xs font-bold text-[#1A79B9] uppercase tracking-wider bg-white px-3.5 py-1.5 rounded-full border border-[#DCE5EA] shadow-xs inline-block mb-4">
            Identidade & Presença
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#073B60] tracking-tight mb-6">
            Energia solar com presença no Oeste da Bahia
          </h2>

          <p className="text-base sm:text-lg lg:text-xl text-[#536370] leading-relaxed mb-8 max-w-3xl mx-auto font-normal">
            A <strong className="text-[#073B60] font-semibold">Solar Planet</strong> tem sua matriz em Barreiras e atua oferecendo soluções em energia solar para diferentes necessidades da região. Nosso trabalho começa pela compreensão do consumo e continua com um processo organizado, próximo e transparente.
          </p>

          <div className="bg-white/80 backdrop-blur-md rounded-2xl p-6 sm:p-8 border border-[#DCE5EA] shadow-sm max-w-2xl mx-auto mb-8 text-left space-y-3.5">
            <div className="flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-[#A6CD40] shrink-0" />
              <span className="text-sm sm:text-base font-semibold text-[#073B60]">
                Sede física estruturada no Bairro Boa Sorte em Barreiras – BA
              </span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-[#A6CD40] shrink-0" />
              <span className="text-sm sm:text-base font-semibold text-[#073B60]">
                Atendimento para residências, comércios, indústrias e agronegócio
              </span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-[#A6CD40] shrink-0" />
              <span className="text-sm sm:text-base font-semibold text-[#073B60]">
                Compromisso com clareza, prazos reais e suporte local
              </span>
            </div>
          </div>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 bg-[#25D366] hover:bg-[#128C7E] text-white font-bold text-base px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all group hover:scale-[1.02]"
          >
            <WhatsAppIcon className="w-6 h-6 shrink-0" />
            <span>Falar com a equipe</span>
          </a>
        </motion.div>

      </div>
    </section>
  );
};

