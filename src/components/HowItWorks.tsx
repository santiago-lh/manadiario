"use client";

import React from "react";
import { useCheckout } from "./CheckoutContext";

export function HowItWorks() {
  const { openCheckout } = useCheckout();

  const steps = [
    {
      num: "01",
      title: "Escolha seu plano",
      text: "Opções flexíveis a partir de R$ 24,98 por mês. Sem fidelidade forçada, com cancelamento imediato a qualquer hora.",
    },
    {
      num: "02",
      title: "Informe seu WhatsApp",
      text: "Cadastre com segurança o número onde deseja receber sua leitura matinal. Não criamos grupos nem enviamos anúncios.",
    },
    {
      num: "03",
      title: "Seu Maná chega às 06h",
      text: "Todas as manhãs, uma mensagem pontual espera por você. Abra no seu tempo, com a sua xícara de café.",
    },
  ];

  return (
    <section
      className="py-20 md:py-28 bg-[#EFE9DC]/40 border-b border-[#E2DBD0]"
      id="como-funciona"
      aria-labelledby="how-title"
    >
      <div className="mana-container">
        {/* Header */}
        <div className="max-w-2xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E2DBD0] text-[#445343] text-[11px] font-semibold tracking-wider uppercase mb-4">
            <span className="text-[#B79B68]">✦</span>
            <span>Simplicidade Absoluta</span>
          </div>

          <h2
            id="how-title"
            className="font-serif text-[38px] sm:text-[46px] md:text-[52px] leading-[1.12] text-[#292A24] font-normal tracking-tight mb-4"
          >
            Como começar
            <br />
            <em className="italic text-[#445343]">o seu novo ritual.</em>
          </h2>

          <p className="text-base text-[#6F7067] font-light leading-relaxed">
            Sem cadastro longo, sem senhas esquecidas e{" "}
            <strong className="text-[#292A24] font-medium">
              sem precisar baixar nenhum aplicativo.
            </strong>
          </p>
        </div>

        {/* 3 Simple Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {steps.map((s) => (
            <div
              key={s.num}
              className="bg-[#FFFDF8] border border-[#E2DBD0] rounded-2xl p-7 shadow-xs relative flex flex-col justify-between"
            >
              <div>
                <span className="font-serif italic text-4xl text-[#B79B68] block mb-4 font-normal">
                  {s.num}
                </span>
                <h3 className="font-serif text-2xl text-[#292A24] font-medium mb-2 tracking-tight">
                  {s.title}
                </h3>
                <p className="text-sm text-[#6F7067] font-light leading-relaxed">
                  {s.text}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#F0EBE0] flex items-center gap-2 text-[11px] text-[#8E8F86]">
                <span className="text-[#445343]">✓</span>
                <span>Prático e rápido</span>
              </div>
            </div>
          ))}
        </div>

        {/* Action strip */}
        <div className="bg-[#FFFDF8] border border-[#E2DBD0] rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xs">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-[#E8F0E8] text-[#29352C] flex items-center justify-center font-serif text-xl font-bold flex-shrink-0">
              ✦
            </div>
            <div>
              <h4 className="font-serif text-lg text-[#292A24] font-medium">
                Pronto para transformar suas manhãs?
              </h4>
              <p className="text-xs text-[#6F7067] font-light">
                Leva menos de 1 minuto para cadastrar seu número e começar.
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={() => openCheckout("semiannual")}
            className="bg-[#29352C] hover:bg-[#445343] text-[#FFFDF8] font-medium text-sm px-7 py-3.5 rounded-full transition-all duration-200 whitespace-nowrap shadow-sm hover:shadow-md cursor-pointer"
          >
            Quero começar agora →
          </button>
        </div>
      </div>
    </section>
  );
}
