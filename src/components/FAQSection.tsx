import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { SolarCellGridPattern, TechGridPattern } from './SolarGraphics';

interface FAQItemData {
  question: string;
  answer: string;
}

export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs: FAQItemData[] = [
    {
      question: 'A energia solar elimina completamente a conta de energia?',
      answer: 'Não elimina a totalidade da fatura porque as concessionárias mantêm a taxa de disponibilidade do padrão de entrada (ou custo de disponibilidade da rede) e iluminação pública. No entanto, o sistema bem dimensionado reduz significativamente a parcela referente ao consumo ativo de energia.',
    },
    {
      question: 'O sistema funciona em dias nublados ou com chuva?',
      answer: 'Sim, o sistema continua gerando energia mesmo sob nuvens ou chuva, pois capta a radiação solar difusa. O nível de geração diminui em relação a um dia ensolarado pleno, mas a média mensal do Oeste Baiano possui altos índices de radiação que compensam variações climáticas pontuais.',
    },
    {
      question: 'O que acontece durante a noite quando não há sol?',
      answer: 'Durante a noite, o imóvel utiliza a energia proveniente da rede pública da concessionária. A energia excedente gerada durante o dia e injetada na rede é convertida em créditos que compensam o consumo noturno ou em períodos de menor geração.',
    },
    {
      question: 'Como saber qual sistema é o mais adequado para meu consumo?',
      answer: 'A Solar Planet avalia o histórico das suas últimas faturas de energia, a potência dos equipamentos instalados, a orientação solar do imóvel e a disponibilidade de área (telhado ou solo) para dimensionar o número exato de módulos e inversores.',
    },
    {
      question: 'Quanto tempo leva o processo completo?',
      answer: 'O cronograma varia de acordo com o porte do projeto e os prazos da distribuidora local para vistoria e parecer de acesso. Em média, projetos residenciais e comerciais de pequeno porte levam poucas semanas entre a aprovação do projeto e a ativação.',
    },
    {
      question: 'Como funciona a homologação junto à distribuidora?',
      answer: 'Toda a parte burocrática e documental é conduzida pela engenharia da Solar Planet. Cadastramos o projeto, emitimos a ART e acompanhamos a vistoria da concessionária até a troca do medidor por um modelo bidirecional.',
    },
    {
      question: 'O sistema pode ser usado em residências, empresas e propriedades rurais?',
      answer: 'Sim. A tecnologia solar fotovoltaica atende perfeitamente desde residências urbanas de elevado consumo até comércios, indústrias e propriedades agrícolas no Oeste da Bahia.',
    },
    {
      question: 'É possível solicitar uma análise inicial sem compromisso?',
      answer: 'Com certeza. Você pode enviar sua fatura recente de energia pelo nosso WhatsApp. Nossa equipe realizará uma análise inicial sem qualquer custo ou exigência de contratação.',
    },
    {
      question: 'Como funciona o acompanhamento após a instalação?',
      answer: 'Após a ativação do sistema, orientamos você detalhadamente sobre o funcionamento e a leitura de faturas. Além disso, nossa matriz física em Barreiras e nossa equipe permanecem à disposição para suporte técnico presencial e orientações.',
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 md:py-28 bg-[#F5F8FA] relative overflow-hidden">
      <SolarCellGridPattern opacity={0.04} className="text-[#073B60]" />
      <TechGridPattern opacity={0.05} className="text-[#1A79B9]" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-xs font-bold text-[#1A79B9] uppercase tracking-wider bg-white px-3.5 py-1.5 rounded-full border border-[#DCE5EA] shadow-xs inline-block mb-3">
            Esclarecimentos Práticos
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#073B60] tracking-tight">
            Dúvidas frequentes sobre energia solar
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#536370]">
            Respostas claras e objetivas para ajudar você a entender o funcionamento e o processo de contratação.
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: idx * 0.05 }}
                className="bg-white rounded-2xl border border-[#DCE5EA] overflow-hidden transition-all shadow-xs hover:border-[#1A79B9]"
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(idx)}
                  aria-expanded={isOpen}
                  className="w-full text-left p-6 flex items-center justify-between gap-4 font-bold text-base sm:text-lg text-[#073B60] hover:text-[#1A79B9] transition-colors focus:outline-none cursor-pointer"
                >
                  <span className="flex items-center gap-3">
                    <HelpCircle className="w-5 h-5 text-[#1A79B9] shrink-0" />
                    <span>{faq.question}</span>
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-[#1A79B9] shrink-0 transition-transform duration-300 ${
                      isOpen ? 'transform rotate-180 text-[#A6CD40]' : ''
                    }`}
                  />
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 pt-0 text-sm sm:text-base text-[#536370] leading-relaxed border-t border-[#F5F8FA]">
                        <p className="pt-4">{faq.answer}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

