import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, Zap, MapPin, Building, Tractor, Home, TrendingDown, PiggyBank, Calendar, Info } from 'lucide-react';
import { WhatsAppIcon } from './WhatsAppIcon';
import { SolarCellGridPattern, TechGridPattern, SolarArcGraphic } from './SolarGraphics';

export const SimulatorSection: React.FC = () => {
  const [propertyType, setPropertyType] = useState<'empresarial' | 'rural' | 'residencial'>('empresarial');
  const [city, setCity] = useState<string>('Barreiras');
  const [monthlyBill, setMonthlyBill] = useState<number>(1500);

  // Consumption calculation base: 1 W = 0,13242 kWh/mês (specified base)
  const tariff = 0.95; // Average tariff R$ 0,95 / kWh in Western Bahia
  const kwhPerWatt = 0.13242; // Base: 1W generates 0,13242 kWh/month (or 1 kWp generates 132,42 kWh/month)

  const approxKwh = Math.round(monthlyBill / tariff);
  const requiredWatts = Math.round(approxKwh / kwhPerWatt);
  const approxKwp = (requiredWatts / 1000).toFixed(1);

  // 80% Estimated Savings Calculation
  const savingsRate = 0.80;
  const monthlySavings = monthlyBill * savingsRate;
  const yearlySavings = monthlySavings * 12;
  const estimatedNewBill = monthlyBill * (1 - savingsRate);

  const citiesList = [
    'Barreiras',
    'Luís Eduardo Magalhães',
    'São Desidério',
    'Formosa do Rio Preto',
    'Riachão das Neves',
    'Bom Jesus da Lapa',
    'Santa Maria da Vitória',
    'Outra cidade no Oeste Baiano',
  ];

  const handleSendToWhatsapp = () => {
    const propLabels = {
      empresarial: 'Empresarial / Comercial',
      rural: 'Agronegócio / Rural',
      residencial: 'Residencial',
    };

    const formattedMonthlySavings = monthlySavings.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
    const formattedYearlySavings = yearlySavings.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
    const formattedNewBill = estimatedNewBill.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
    const formattedBill = monthlyBill.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });

    const message = `Olá! Fiz uma simulação pelo site da Solar Planet:
• Tipo de Imóvel: ${propLabels[propertyType]}
• Cidade: ${city} - BA
• Valor atual da fatura: R$ ${formattedBill} / mês

💰 PRÉVIA ESTIMADA DE ECONOMIA (80%):
• Economia no Mês: R$ ${formattedMonthlySavings} / mês
• Economia no Ano: R$ ${formattedYearlySavings} / ano
• Nova fatura estimada com Solar: ~R$ ${formattedNewBill} / mês

⚡ DADOS TÉCNICOS ESTIMADOS (Base 1W = 0,13242 kWh/mês):
• Consumo estimado: ~${approxKwh.toLocaleString('pt-BR')} kWh/mês
• Potência estimada: ~${approxKwp} kWp (${requiredWatts.toLocaleString('pt-BR')} W)

Gostaria de agendar uma análise técnica detalhada com a equipe!`;

    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/5577999087260?text=${encoded}`, '_blank');
  };

  return (
    <section id="simulador" className="py-20 md:py-28 bg-[#F5F8FA] relative overflow-hidden">
      <SolarCellGridPattern opacity={0.04} className="text-[#073B60]" />
      <TechGridPattern opacity={0.05} className="text-[#1A79B9]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold text-[#1A79B9] uppercase tracking-wider bg-white px-3.5 py-1.5 rounded-full border border-[#DCE5EA] shadow-xs inline-block mb-3">
            Ferramenta Interativa
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#073B60] tracking-tight">
            Simule a Economia do seu Imóvel ou Negócio
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#536370]">
            Veja quanto você pode economizar por mês e por ano com energia solar no Oeste da Bahia (estimativa baseada em 80% de economia).
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-[#073B60] text-white rounded-3xl p-6 sm:p-10 shadow-2xl border border-white/10 max-w-5xl mx-auto relative overflow-hidden"
        >
          {/* Solar background graphics */}
          <SolarCellGridPattern opacity={0.05} className="text-[#A6CD40]" />
          <SolarArcGraphic className="absolute -top-32 -right-32 w-96 h-96 text-[#A6CD40] opacity-20 pointer-events-none" />
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#A6CD40]/15 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch relative z-10">
            
            {/* Input Controls (6 cols) */}
            <div className="lg:col-span-6 space-y-6 flex flex-col justify-between">
              
              <div className="space-y-6">
                {/* 1. Property Type */}
                <div>
                  <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                    1. Perfil do Imóvel
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    <button
                      type="button"
                      onClick={() => setPropertyType('empresarial')}
                      className={`flex flex-col items-center justify-center p-3 rounded-xl border text-xs font-bold transition-all cursor-pointer ${
                        propertyType === 'empresarial'
                          ? 'bg-[#1686C2] border-[#38BDF8] text-white shadow-md ring-2 ring-[#A6CD40]'
                          : 'bg-white/5 border-white/10 text-slate-300 hover:bg-white/10'
                      }`}
                    >
                      <Building className="w-5 h-5 mb-1 text-[#A6CD40]" />
                      <span>Empresa</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => setPropertyType('rural')}
                      className={`flex flex-col items-center justify-center p-3 rounded-xl border text-xs font-bold transition-all cursor-pointer ${
                        propertyType === 'rural'
                          ? 'bg-[#1686C2] border-[#38BDF8] text-white shadow-md ring-2 ring-[#A6CD40]'
                          : 'bg-white/5 border-white/10 text-slate-300 hover:bg-white/10'
                      }`}
                    >
                      <Tractor className="w-5 h-5 mb-1 text-[#A6CD40]" />
                      <span>Rural</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => setPropertyType('residencial')}
                      className={`flex flex-col items-center justify-center p-3 rounded-xl border text-xs font-bold transition-all cursor-pointer ${
                        propertyType === 'residencial'
                          ? 'bg-[#1686C2] border-[#38BDF8] text-white shadow-md ring-2 ring-[#A6CD40]'
                          : 'bg-white/5 border-white/10 text-slate-300 hover:bg-white/10'
                      }`}
                    >
                      <Home className="w-5 h-5 mb-1 text-white" />
                      <span>Residencial</span>
                    </button>
                  </div>
                </div>

                {/* 2. Select City */}
                <div>
                  <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                    <MapPin className="w-4 h-4 text-[#38BDF8] shrink-0" />
                    2. Localização no Oeste Baiano
                  </label>
                  <select
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#38BDF8] focus:bg-[#061D2C] cursor-pointer"
                  >
                    {citiesList.map((c) => (
                      <option key={c} value={c} className="bg-[#061D2C] text-white">
                        {c} – BA
                      </option>
                    ))}
                  </select>
                </div>

                {/* 3. Monthly Bill Input & Slider */}
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <label className="text-xs font-bold text-slate-300 uppercase tracking-wider">
                      3. Valor Médio da Conta Mensal
                    </label>
                    <div className="flex items-center gap-1.5 bg-white/10 px-3 py-1 rounded-lg border border-white/20">
                      <span className="text-xs text-slate-300 font-bold">R$</span>
                      <input
                        type="number"
                        min="400"
                        max="100000"
                        value={monthlyBill}
                        onChange={(e) => setMonthlyBill(Math.max(0, Number(e.target.value)))}
                        className="w-24 bg-transparent text-right text-base font-extrabold text-[#A6CD40] focus:outline-none"
                      />
                    </div>
                  </div>
                  <input
                    type="range"
                    min="400"
                    max="25000"
                    step="100"
                    value={monthlyBill}
                    onChange={(e) => setMonthlyBill(Number(e.target.value))}
                    className="w-full h-2.5 bg-white/20 rounded-lg appearance-none cursor-pointer accent-[#A6CD40]"
                  />
                  <div className="flex justify-between text-[11px] text-slate-400 mt-1">
                    <span>R$ 400</span>
                    <span>R$ 10.000</span>
                    <span>R$ 25.000+</span>
                  </div>

                  {/* Preset Buttons */}
                  <div className="flex flex-wrap gap-2 mt-3">
                    {[500, 1500, 3000, 5000, 10000].map((preset) => (
                      <button
                        key={preset}
                        type="button"
                        onClick={() => setMonthlyBill(preset)}
                        className={`text-xs px-2.5 py-1 rounded-lg border transition-all cursor-pointer ${
                          monthlyBill === preset
                            ? 'bg-[#A6CD40] text-[#073B60] font-bold border-[#A6CD40]'
                            : 'bg-white/5 border-white/15 text-slate-300 hover:bg-white/10'
                        }`}
                      >
                        R$ {preset.toLocaleString('pt-BR')}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Base formula information note */}
              <div className="p-3.5 bg-white/5 border border-white/10 rounded-xl text-xs text-slate-300 flex items-start gap-2.5">
                <Info className="w-4 h-4 text-[#38BDF8] shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-white">Parâmetro de Cálculo: </span>
                  Utiliza base de geração de <strong className="text-[#A6CD40]">1 W = 0,13242 kWh/mês</strong> e prévia estimada de <strong className="text-[#A6CD40]">80% de economia</strong>.
                </div>
              </div>

            </div>

            {/* Savings & Technical Preview Card (6 cols) */}
            <div className="lg:col-span-6 bg-[#061D2C]/90 backdrop-blur-md rounded-2xl border border-white/20 p-6 sm:p-7 flex flex-col justify-between shadow-xl relative overflow-hidden">
              
              <div className="space-y-5">
                
                {/* Card Title */}
                <div className="flex items-center justify-between pb-3 border-b border-white/10">
                  <div className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-[#A6CD40]">
                    <PiggyBank className="w-4 h-4" />
                    <span>Prévia Estimada de Economia</span>
                  </div>
                  <span className="bg-[#A6CD40]/20 text-[#A6CD40] border border-[#A6CD40]/30 text-[11px] font-bold px-2.5 py-0.5 rounded-full">
                    80% de Economia
                  </span>
                </div>

                {/* 80% Savings Highlights */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  
                  {/* Monthly Savings */}
                  <div className="bg-gradient-to-br from-[#1686C2]/30 to-[#073B60] p-4 rounded-xl border border-[#38BDF8]/30">
                    <div className="flex items-center gap-1.5 text-xs text-slate-300 mb-1">
                      <TrendingDown className="w-3.5 h-3.5 text-[#25D366]" />
                      <span>Economia no Mês</span>
                    </div>
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={monthlySavings}
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0 }}
                        className="text-2xl font-black text-[#25D366]"
                      >
                        R$ {monthlySavings.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                      </motion.div>
                    </AnimatePresence>
                    <div className="text-[11px] text-slate-400 mt-1">
                      Economia mensal estimada
                    </div>
                  </div>

                  {/* Yearly Savings */}
                  <div className="bg-gradient-to-br from-[#A6CD40]/20 to-[#073B60] p-4 rounded-xl border border-[#A6CD40]/40">
                    <div className="flex items-center gap-1.5 text-xs text-slate-300 mb-1">
                      <Calendar className="w-3.5 h-3.5 text-[#A6CD40]" />
                      <span>Economia no Ano</span>
                    </div>
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={yearlySavings}
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0 }}
                        className="text-2xl font-black text-[#A6CD40]"
                      >
                        R$ {yearlySavings.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                      </motion.div>
                    </AnimatePresence>
                    <div className="text-[11px] text-slate-400 mt-1">
                      Em 12 meses acumulados
                    </div>
                  </div>

                </div>

                {/* Bill comparison line */}
                <div className="bg-white/5 p-3 rounded-xl border border-white/10 text-xs flex items-center justify-between text-slate-300">
                  <span>Sua fatura cai de: <strong className="text-white line-through">R$ {monthlyBill.toLocaleString('pt-BR')}</strong></span>
                  <ArrowRight className="w-4 h-4 text-[#A6CD40]" />
                  <span>Para: <strong className="text-[#A6CD40] font-bold">~R$ {estimatedNewBill.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}/mês</strong></span>
                </div>

                {/* Technical Specs breakdown */}
                <div className="space-y-3 pt-2">
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                    <Zap className="w-3.5 h-3.5 text-[#38BDF8]" />
                    <span>Dados Técnicos do Projeto</span>
                  </div>

                  <div className="grid grid-cols-2 gap-3 text-xs">
                    <div className="bg-white/5 p-3 rounded-xl border border-white/10">
                      <div className="text-slate-400 text-[11px]">Consumo Estimado</div>
                      <div className="text-base font-extrabold text-white mt-0.5">
                        ~ {approxKwh.toLocaleString('pt-BR')} <span className="text-xs font-normal text-slate-300">kWh/mês</span>
                      </div>
                    </div>

                    <div className="bg-white/5 p-3 rounded-xl border border-white/10">
                      <div className="text-slate-400 text-[11px]">Potência Estimada</div>
                      <div className="text-base font-extrabold text-[#38BDF8] mt-0.5">
                        ~ {approxKwp} <span className="text-xs font-normal text-slate-300">kWp</span>
                      </div>
                      <div className="text-[10px] text-slate-400 mt-0.5">({requiredWatts.toLocaleString('pt-BR')} W)</div>
                    </div>
                  </div>

                  <div className="text-[11px] text-slate-400 leading-relaxed italic">
                    *Cálculo preliminar baseado na taxa de 1W = 0,13242 kWh/mês para a região de {city}.
                  </div>
                </div>

              </div>

              {/* Action Button */}
              <div className="mt-6 pt-4 border-t border-white/10">
                <button
                  type="button"
                  onClick={handleSendToWhatsapp}
                  className="w-full inline-flex items-center justify-center gap-2.5 bg-[#25D366] hover:bg-[#128C7E] active:bg-[#128C7E] text-white font-extrabold text-sm py-3.5 px-4 rounded-xl shadow-lg hover:shadow-xl transition-all cursor-pointer"
                >
                  <WhatsAppIcon className="w-6 h-6 shrink-0" />
                  <span>Solicitar Projeto com essa Economia</span>
                  <ArrowRight className="w-4 h-4 shrink-0" />
                </button>
              </div>

            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
};
