import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Play, Star, ShieldCheck, MapPin, Quote } from 'lucide-react';
import { WhatsAppIcon } from './WhatsAppIcon';
import { SolarCellGridPattern, TechGridPattern } from './SolarGraphics';

interface VideoTestimonialsSectionProps {
  whatsappUrl: string;
}

interface Testimonial {
  id: string;
  clientName: string;
  role: string;
  location: string;
  segment: string;
  poster: string;
  videoUrl: string;
  quote: string;
}

export const VideoTestimonialsSection: React.FC<VideoTestimonialsSectionProps> = ({ whatsappUrl }) => {
  const [playingId, setPlayingId] = useState<string | null>(null);

  const testimonials: Testimonial[] = [
    {
      id: 'vando',
      clientName: 'Vando',
      role: 'Investidor de Imóveis',
      location: 'Barreiras & Região – BA',
      segment: 'Investimento Solar',
      poster: '/media/vando.webp',
      videoUrl: '/media/vando.mp4',
      quote: 'Atualmente estou indo para a nona usina com a Solar Planet. Só tem o que falar bem, é uma ótima empresa',
    },
    {
      id: 'peixoto',
      clientName: 'Agnaldo',
      role: 'Grupo Peixoto',
      location: 'Barreiras – BA',
      segment: 'Empresarial',
      poster: '/media/peixoto.webp',
      videoUrl: '/media/peixoto.mp4',
      quote: 'Conhecemos a Solar Planet. A empresa ofereceu uma negociação boa, cumpriu prazos e atendeu todas as expectativas',
    },
    {
      id: 'romilson',
      clientName: 'Romilson S. Cerqueira',
      role: 'Cliente Solar Planet',
      location: 'Oeste Baiano – BA',
      segment: 'Climatização & Igreja',
      poster: '/media/romilson.webp',
      videoUrl: '/media/romilson.mp4',
      quote: 'Nós temos dois projetos com a Solar Planet, e hoje os créditos gerados em energia estão sobrando pra investir em mais climatização para a igreja.',
    },
  ];

  return (
    <section id="depoimentos" className="py-20 md:py-28 bg-[#061D2C] text-white border-y border-[#073B60] relative overflow-hidden">
      {/* Background Multi-Layer Solar Accents */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#061D2C] via-[#073B60] to-[#061D2C] pointer-events-none" />
      <TechGridPattern opacity={0.06} className="text-sky-300" />
      <SolarCellGridPattern opacity={0.03} className="text-[#A6CD40]" />

      <div className="absolute top-0 right-1/4 w-80 h-80 bg-[#1686C2]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-[#A6CD40]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold text-[#38BDF8] uppercase tracking-wider bg-[#1686C2]/20 border border-[#1686C2]/40 px-3.5 py-1.5 rounded-full inline-block mb-3">
            Depoimentos em Vídeo
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Quem confia na Solar Planet no Oeste da Bahia
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300">
            Confira a experiência real de quem investe em energia solar no Oeste Baiano.
          </p>
        </div>

        {/* Testimonial Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-14">
          {testimonials.map((item, idx) => {
            const isPlaying = playingId === item.id;

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className="bg-[#073B60]/80 backdrop-blur-md rounded-2xl border border-white/15 shadow-2xl hover:border-[#1686C2] transition-all duration-300 overflow-hidden flex flex-col group"
              >
                {/* Video Player Box - Vertical Reel Format (9:16) */}
                <div className="relative aspect-[9/16] w-full max-h-[480px] overflow-hidden bg-slate-950 rounded-t-2xl flex items-center justify-center">
                  {isPlaying ? (
                    <video
                      controls
                      autoPlay
                      playsInline
                      preload="metadata"
                      poster={item.poster}
                      className="w-full h-full object-cover bg-black"
                    >
                      <source src={item.videoUrl} type="video/mp4" />
                      Seu navegador não suporta a exibição deste vídeo.
                    </video>
                  ) : (
                    <div
                      className="relative w-full h-full cursor-pointer group/thumb flex items-center justify-center overflow-hidden"
                      onClick={() => setPlayingId(item.id)}
                    >
                      <img
                        src={item.poster}
                        alt={`Depoimento ${item.clientName}`}
                        className="w-full h-full object-cover group-hover/thumb:scale-105 transition-transform duration-500 opacity-90"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#061D2C] via-black/30 to-transparent" />

                      {/* Play Button Overlay */}
                      <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center z-10">
                        <div className="w-16 h-16 rounded-full bg-[#A6CD40] text-[#073B60] flex items-center justify-center shadow-2xl group-hover/thumb:scale-110 transition-transform duration-300 mb-3">
                          <Play className="w-7 h-7 fill-current ml-1" />
                        </div>
                        <span className="text-xs font-semibold text-white/90 bg-black/60 px-3.5 py-1.5 rounded-full border border-white/15 backdrop-blur-md shadow-lg">
                          Assistir Depoimento
                        </span>
                      </div>

                      {/* Top Segment Tag */}
                      <div className="absolute top-3 left-3 flex items-center gap-2 text-xs text-white z-10">
                        <span className="bg-[#061D2C]/90 backdrop-blur-md px-2.5 py-1 rounded-md font-semibold border border-white/20">
                          {item.segment}
                        </span>
                      </div>

                      {/* Location Badge */}
                      <div className="absolute bottom-3 left-3 text-white text-xs font-semibold flex items-center gap-1.5 z-10">
                        <MapPin className="w-3.5 h-3.5 text-[#38BDF8]" />
                        <span>{item.location}</span>
                      </div>
                    </div>
                  )}
                </div>

                {/* Testimonial Quote & Info */}
                <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Rating */}
                    <div className="flex items-center gap-1 text-amber-400 mb-3">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4.5 h-4.5 fill-current" />
                      ))}
                    </div>

                    {/* Quote */}
                    <div className="relative pl-4 border-l-2 border-[#1686C2] mb-6">
                      <Quote className="w-5 h-5 text-[#A6CD40] mb-1.5 opacity-80" />
                      <p className="text-sm sm:text-base text-slate-100 italic font-medium leading-relaxed">
                        "{item.quote}"
                      </p>
                    </div>
                  </div>

                  {/* Customer Footer Info */}
                  <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                    <div>
                      <h3 className="text-lg font-extrabold text-white">{item.clientName}</h3>
                      <span className="text-xs text-[#38BDF8] font-semibold">{item.role}</span>
                    </div>

                    {!isPlaying && (
                      <button
                        type="button"
                        onClick={() => setPlayingId(item.id)}
                        className="text-xs font-bold text-[#A6CD40] hover:text-white flex items-center gap-1.5 cursor-pointer bg-[#A6CD40]/10 hover:bg-[#A6CD40]/20 px-3.5 py-2 rounded-lg border border-[#A6CD40]/30 transition-all"
                      >
                        <Play className="w-3.5 h-3.5 fill-current" />
                        <span>Assistir</span>
                      </button>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Regional Trust Statement */}
        <div className="bg-[#073B60]/90 backdrop-blur-xl rounded-2xl border border-white/20 p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-[#1686C2]/20 text-[#38BDF8] flex items-center justify-center shrink-0 border border-[#1686C2]/40">
              <ShieldCheck className="w-7 h-7 text-[#A6CD40]" />
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-bold text-white">
                Proximidade real no Oeste da Bahia
              </h3>
              <p className="text-xs sm:text-sm text-slate-300">
                Visite nossa matriz em Barreiras ou agende um atendimento técnico sem compromisso na sua propriedade.
              </p>
            </div>
          </div>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 bg-[#25D366] hover:bg-[#128C7E] text-white font-bold text-xs sm:text-sm px-5 py-3.5 rounded-xl shadow-md transition-all shrink-0"
          >
            <WhatsAppIcon className="w-5.5 h-5.5 shrink-0" />
            <span>Falar com o time de Barreiras</span>
          </a>
        </div>

      </div>
    </section>
  );
};
