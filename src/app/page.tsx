import React from "react";
import { CheckoutProvider } from "@/components/CheckoutContext";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { ProblemSection } from "@/components/ProblemSection";
import { SolutionSection } from "@/components/SolutionSection";
import { WhatsAppPreview } from "@/components/WhatsAppPreview";
import { DailyMoments } from "@/components/DailyMoments";
import { HowItWorks } from "@/components/HowItWorks";
import { Benefits } from "@/components/Benefits";
import { Testimonials } from "@/components/Testimonials";
import { Pricing } from "@/components/Pricing";
import { TrustSection } from "@/components/TrustSection";
import { FAQ } from "@/components/FAQ";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";
import { StickyMobileCTA } from "@/components/StickyMobileCTA";
import { CheckoutModal } from "@/components/CheckoutModal";

export default function HomePage() {
  return (
    <CheckoutProvider>
      <main className="min-h-screen bg-[#F7F4EC] text-[#292A24] font-sans antialiased selection:bg-[#B79B68]/25 selection:text-[#29352C]">
        {/* Navigation */}
        <Header />

        {/* 1. Hero Section */}
        <Hero />

        {/* 2. O Problema (Transição emocional da pressa matinal) */}
        <ProblemSection />

        {/* 3. A Solução (Um pequeno espaço para Deus) */}
        <SolutionSection />

        {/* 4. Demonstração do WhatsApp (Simulação interativa) */}
        <WhatsAppPreview />

        {/* 5. O que chega diariamente (Progressão editorial) */}
        <DailyMoments />

        {/* 6. Como funciona (3 passos rápidos) */}
        <HowItWorks />

        {/* 7. Benefícios (Por que funciona) */}
        <Benefits />

        {/* 8. Prova Social (Depoimentos editoriais) */}
        <Testimonials />

        {/* 9. Planos e Assinatura */}
        <Pricing />

        {/* 10. Segurança e Confiança */}
        <TrustSection />

        {/* 11. Perguntas Frequentes (FAQ) */}
        <FAQ />

        {/* 12. Chamada Final Emocional */}
        <FinalCTA />

        {/* 13. Rodapé Institucional e Legal */}
        <Footer />

        {/* Mobile Sticky Bar */}
        <StickyMobileCTA />

        {/* Checkout Modal & Tela Pós-Compra */}
        <CheckoutModal />
      </main>
    </CheckoutProvider>
  );
}
