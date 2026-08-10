import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { CredibilityBar } from './components/CredibilityBar';
import { SegmentSection } from './components/SegmentSection';
import { BenefitsSection } from './components/BenefitsSection';
import { SimulatorSection } from './components/SimulatorSection';
import { ProcessSection } from './components/ProcessSection';
import { DiferenciaisSection } from './components/DiferenciaisSection';
import { VideoTestimonialsSection } from './components/VideoTestimonialsSection';
import { TechSecuritySection } from './components/TechSecuritySection';
import { AboutSection } from './components/AboutSection';
import { FAQSection } from './components/FAQSection';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { PrivacyModal } from './components/PrivacyModal';
import { CookieBanner } from './components/CookieBanner';

export default function App() {
  const [isPrivacyModalOpen, setIsPrivacyModalOpen] = useState(false);

  const defaultWhatsappUrl =
    'https://wa.me/5577999087260?text=Ol%C3%A1%21%20Conheci%20a%20Solar%20Planet%20pelo%20site%20e%20gostaria%20de%20solicitar%20uma%20an%C3%A1lise%20para%20energia%20solar.';

  return (
    <div className="min-h-screen bg-[#F5F8FA] text-[#536370] flex flex-col font-sans selection:bg-[#1686C2] selection:text-white">
      {/* Navigation Header */}
      <Header whatsappUrl={defaultWhatsappUrl} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 1. Hero Section */}
        <Hero whatsappUrl={defaultWhatsappUrl} />

        {/* 2. Credibility Bar */}
        <CredibilityBar />

        {/* 3. Segment Identification (Residencial, Empresarial, Rural) */}
        <SegmentSection whatsappUrl={defaultWhatsappUrl} />

        {/* 4. Video Testimonials & Authority Elements */}
        <VideoTestimonialsSection whatsappUrl={defaultWhatsappUrl} />

        {/* 5. Strategic Benefits */}
        <BenefitsSection whatsappUrl={defaultWhatsappUrl} />


        {/* 5. Interactive Solar Simulator & Consumption Analysis */}
        <SimulatorSection />

        {/* 6. Como Funciona (6-Step Process Flow) */}
        <ProcessSection />

        {/* 7. Diferenciais Solar Planet */}
        <DiferenciaisSection />

        {/* 9. Tecnologia, Qualidade & Segurança */}
        <TechSecuritySection />

        {/* 10. Sobre a Solar Planet & Matriz Barreiras */}
        <AboutSection whatsappUrl={defaultWhatsappUrl} />

        {/* 11. FAQ - Dúvidas Frequentes */}
        <FAQSection />

        {/* 12. Final CTA */}
        <FinalCTA whatsappUrl={defaultWhatsappUrl} />
      </main>

      {/* Institutional Footer */}
      <Footer
        whatsappUrl={defaultWhatsappUrl}
        onOpenPrivacyModal={() => setIsPrivacyModalOpen(true)}
      />

      {/* Floating WhatsApp Action */}
      <FloatingWhatsApp whatsappUrl={defaultWhatsappUrl} />

      {/* Privacy Policy Modal */}
      <PrivacyModal
        isOpen={isPrivacyModalOpen}
        onClose={() => setIsPrivacyModalOpen(false)}
      />

      {/* Cookie Agreement Banner (LGPD) */}
      <CookieBanner onOpenPrivacyModal={() => setIsPrivacyModalOpen(true)} />
    </div>
  );
}
