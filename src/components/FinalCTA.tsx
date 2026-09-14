"use client";

import React from "react";
import { useCheckout } from "./CheckoutContext";

export function FinalCTA() {
  const { openCheckout } = useCheckout();

  return (
    <section
      className="py-24 md:py-32 bg-[#29352C] text-[#F7F4EC] relative overflow-hidden"
      id="comecar"
      aria-labelledby="final-cta-title"
    >
      <div className="mana-container relative z-10 text-center max-w-2xl mx-auto">
        {/* Subtle Mark */}
        <span className="text-[#B79B68] text-xl block mb-4">✦</span>

        {/* Headline */}
        <h2
          id="final-cta-title"
          className="font-serif text-[38px] sm:text-[48px] md:text-[56px] leading-[1.1] font-normal tracking-tight mb-4"
        >
          Amanhã pode começar
          <br />
          <em className="italic text-[#EAD8C2]">
            com alguns minutos para Deus.
          </em>
        </h2>

        {/* Subtext */}
        <p className="text-base sm:text-lg text-[#D5D8D0] font-light leading-relaxed mb-8 max-w-md mx-auto">
          Uma mensagem simples, enviada direto para o seu WhatsApp.
        </p>

        {/* CTA Button */}
        <div>
          <button
            type="button"
            onClick={() => openCheckout("semiannual")}
            className="inline-flex items-center justify-center gap-3 bg-[#F7F4EC] hover:bg-[#FFFDF8] text-[#29352C] font-semibold text-[15px] px-9 py-4 rounded-full transition-all duration-200 shadow-sm hover:shadow-md cursor-pointer"
          >
            <span>Quero receber meu Maná Diário</span>
            <span className="text-base text-[#B79B68]">→</span>
          </button>
        </div>
      </div>
    </section>
  );
}
