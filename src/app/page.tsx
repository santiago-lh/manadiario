import React from "react";
import { CheckoutProvider } from "@/components/CheckoutContext";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { WhatsAppPreview } from "@/components/WhatsAppPreview";
import { IdentificationSection } from "@/components/IdentificationSection";
import { HowItWorks } from "@/components/HowItWorks";
import { DailyContent } from "@/components/DailyContent";
import { HabitRoutine } from "@/components/HabitRoutine";
import { AudienceSection } from "@/components/AudienceSection";
import { FreeSampleSection } from "@/components/FreeSampleSection";
import { Testimonials } from "@/components/Testimonials";
import { Pricing } from "@/components/Pricing";
import { EditorialTransparency } from "@/components/EditorialTransparency";
import { PrivacySection } from "@/components/PrivacySection";
import { FAQ } from "@/components/FAQ";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";
import { StickyMobileCTA } from "@/components/StickyMobileCTA";
import { CheckoutModal } from "@/components/CheckoutModal";

export default function HomePage() {
  return (
    <CheckoutProvider>
      <main className="min-h-screen bg-[#F7F4EC] text-[#292A24] font-sans antialiased selection:bg-[#B79B68]/25 selection:text-[#29352C]">
        {/* 1. Header / Navegação */}
        <Header />

        {/* 2. Hero Section (Sem badges de preço precoces, foco no ritual matinal) */}
        <Hero />

        {/* 3. Demonstração Imediata do WhatsApp (Veja o que pode chegar amanhã às 06h) */}
        <WhatsAppPreview />

        {/* 4. Identificação com a Rotina Real (Talvez não falte fé. Talvez falte espaço na rotina.) */}
        <IdentificationSection />

        {/* 5. Como Funciona (3 passos simples e fluidos) */}
        <HowItWorks />

        {/* 6. O Conteúdo de Cada Manhã (Palavra, Reflexão, Oração, Aplicação) */}
        <DailyContent />

        {/* 7. Como o Hábito se Constrói no Dia a Dia (Timeline visual 06:00 -> Durante o dia) */}
        <HabitRoutine />

        {/* 8. Para Quem É / Para Quem Não É (Filtro claro de expectativas e compromisso) */}
        <AudienceSection />

        {/* 9. Degustação / Amostra Gratuita (Ponto de contato para indecisos) */}
        <FreeSampleSection />

        {/* 10. Prova Social e Histórias Reais (Depoimentos editoriais com tempo de uso) */}
        <Testimonials />

        {/* 11. Planos e Assinatura (Para começar, Para criar constância, Mais escolhido) */}
        <Pricing />

        {/* 12. Transparência Editorial (Curadoria bíblica + uso ético de tecnologia/IA) */}
        <EditorialTransparency />

        {/* 13. Privacidade e Segurança (AXION Pay, sem grupos expostos, cancelamento simples) */}
        <PrivacySection />

        {/* 14. Perguntas Frequentes (FAQ direto e sem evasivas) */}
        <FAQ />

        {/* 15. Fechamento e Chamada Final (Amanhã pode começar com alguns minutos para Deus.) */}
        <FinalCTA />

        {/* 16. Rodapé Institucional */}
        <Footer />

        {/* Barra fixa mobile com CTA padronizado */}
        <StickyMobileCTA />

        {/* Modal de Pagamento Seguro AXION Pay (PIX e Cartão) */}
        <CheckoutModal />
      </main>
    </CheckoutProvider>
  );
}
