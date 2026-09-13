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
      {/* Soft warm light effect */}
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#B79B68]/15 rounded-full blur-[100px] pointer-events-none" />

      <div className="mana-container relative z-10 text-center max-w-2xl mx-auto">
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#374636] border border-[#445343] text-[#B79B68] text-[11px] font-semibold tracking-wider uppercase mb-6">
          <span>✦</span>
          <span>O Próximo Passo</span>
        </div>

        {/* Headline */}
        <h2
          id="final-cta-title"
          className="font-serif text-[42px] sm:text-[54px] md:text-[62px] leading-[1.08] font-normal tracking-tight mb-6"
        >
          Amanhã pode começar
          <br />
          <em className="italic text-[#EAD8C2]">diferente.</em>
        </h2>

        {/* Text */}
        <p className="text-base sm:text-lg text-[#D5D8D0] font-light leading-relaxed mb-10 max-w-lg mx-auto">
          Reserve alguns minutos para começar o seu dia com fé, reflexão e propósito.
          Sua mente e seu coração agradecem.
        </p>

        {/* CTA Button */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
          <button
            type="button"
            onClick={() => openCheckout("semiannual")}
            className="inline-flex items-center justify-center gap-3 bg-[#F7F4EC] hover:bg-[#FFFDF8] text-[#29352C] font-semibold text-[15px] px-9 py-4 rounded-full transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
          >
            <span>Quero receber meu Maná</span>
            <span className="text-base text-[#B79B68]">→</span>
          </button>
        </div>

        {/* Reassurance */}
        <p className="text-xs text-[#A8B0A5] font-light flex items-center justify-center gap-2">
          <span>A partir de R$ 24,98/mês</span>
          <span>·</span>
          <span>Sem fidelidade</span>
          <span>·</span>
          <span>Cancele quando quiser</span>
        </p>
      </div>
    </section>
  );
}
