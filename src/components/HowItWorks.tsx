"use client";

import React from "react";
import { useCheckout } from "./CheckoutContext";

export function HowItWorks() {
  const { openCheckout } = useCheckout();

  const steps = [
    {
      step: "01",
      title: "Escolha seu plano",
      text: "Defina a periodicidade que melhor se adapta à sua rotina (mensal, trimestral ou semestral). Cancele quando quiser.",
    },
    {
      step: "02",
      title: "Informe seu WhatsApp",
      text: "Cadastre com segurança o número onde deseja receber sua mensagem matinal. Sem grupos e sem anúncios.",
    },
    {
      step: "03",
      title: "Receba todas as manhãs",
      text: "Pontualmente às 06h, uma leitura com reflexão e oração espera por você no aplicativo que você já usa todos os dias.",
    },
  ];

  return (
    <section
      className="py-20 md:py-28 bg-[#EFE9DC]/30 border-b border-[#E2DBD0]"
      id="como-funciona"
      aria-labelledby="how-title"
    >
      <div className="mana-container">
        {/* Header */}
        <div className="max-w-2xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 text-[#445343] text-xs font-semibold tracking-wider uppercase mb-3">
            <span className="text-[#B79B68]">✦</span>
            <span>Simplicidade</span>
          </div>

          <h2
            id="how-title"
            className="font-serif text-[34px] sm:text-[44px] md:text-[50px] leading-[1.12] text-[#292A24] font-normal tracking-tight mb-3"
          >
            Como funciona
          </h2>

          <p className="text-base text-[#6F7067] font-light leading-relaxed">
            Sem senhas extras e sem precisar instalar nenhum aplicativo novo.
          </p>
        </div>

        {/* 3 Steps Horizontal Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-14">
          {steps.map((s) => (
            <div key={s.step} className="flex flex-col text-left">
              <span className="font-serif italic text-3xl text-[#B79B68] block mb-3 font-normal">
                {s.step}
              </span>
              <h3 className="font-serif text-xl text-[#292A24] font-medium mb-2 tracking-tight">
                {s.title}
              </h3>
              <p className="text-sm text-[#6F7067] font-light leading-relaxed">
                {s.text}
              </p>
            </div>
          ))}
        </div>

        {/* Standard CTA */}
        <div className="text-center">
          <button
            type="button"
            onClick={() => openCheckout("semiannual")}
            className="inline-flex items-center justify-center gap-3 bg-[#29352C] hover:bg-[#445343] text-[#FFFDF8] font-medium text-sm px-8 py-3.5 rounded-full transition-all duration-200 cursor-pointer shadow-xs"
          >
            <span>Quero receber meu Maná Diário</span>
            <span className="text-sm text-[#B79B68]">→</span>
          </button>
        </div>
      </div>
    </section>
  );
}
