"use client";

import React from "react";
import { useCheckout, PlanType } from "./CheckoutContext";

export function Pricing() {
  const { openCheckout } = useCheckout();

  const handleSelectPlan = (plan: PlanType) => {
    openCheckout(plan);
  };

  return (
    <section
      className="py-20 md:py-28 bg-[#F7F4EC] border-b border-[#E2DBD0]"
      id="planos"
      aria-labelledby="pricing-title"
    >
      <div className="mana-container">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EFE9DC] text-[#445343] text-[11px] font-semibold tracking-wider uppercase mb-4">
            <span className="text-[#B79B68]">✦</span>
            <span>Planos e Assinatura</span>
          </div>

          <h2
            id="pricing-title"
            className="font-serif text-[38px] sm:text-[46px] md:text-[52px] leading-[1.12] text-[#292A24] font-normal tracking-tight mb-4"
          >
            Um hábito que custa
            <br />
            <em className="italic text-[#445343]">menos que um café.</em>
          </h2>

          <p className="text-base text-[#6F7067] font-light leading-relaxed">
            Escolha o período ideal para cultivar sua jornada de fé. Todos os
            planos contam com entrega diária e cancelamento a qualquer hora.
          </p>
        </div>

        {/* 3 Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-5xl mx-auto items-stretch">
          {/* Plano Mensal */}
          <div className="bg-[#FFFDF8] border border-[#E2DBD0] rounded-2xl p-7 flex flex-col justify-between transition-all duration-200 hover:border-[#B79B68]/60">
            <div>
              <div className="flex justify-between items-baseline mb-4">
                <h3 className="font-serif text-2xl font-medium text-[#292A24]">
                  Mensal
                </h3>
                <span className="text-xs text-[#8E8F86]">Recorrente</span>
              </div>

              <div className="mb-6 pb-6 border-b border-[#F0EBE0]">
                <div className="flex items-baseline gap-1">
                  <span className="text-sm font-medium text-[#292A24]">R$</span>
                  <span className="font-serif text-4xl sm:text-5xl font-normal text-[#292A24] tracking-tight">
                    29,90
                  </span>
                  <span className="text-xs text-[#6F7067]">/mês</span>
                </div>
                <p className="text-xs text-[#8E8F86] mt-2">
                  Cobrança mensal no cartão ou PIX
                </p>
              </div>

              <ul className="space-y-3 text-xs text-[#6F7067] mb-8 font-light">
                <li className="flex items-start gap-2.5">
                  <span className="text-[#445343] font-bold">✓</span>
                  <span>Envio diário às 06h pelo WhatsApp</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-[#445343] font-bold">✓</span>
                  <span>Leitura, reflexão, oração e prática</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-[#445343] font-bold">✓</span>
                  <span>Sem grupo e 100% confidencial</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-[#445343] font-bold">✓</span>
                  <span>Cancele quando quiser</span>
                </li>
              </ul>
            </div>

            <button
              type="button"
              onClick={() => handleSelectPlan("monthly")}
              className="w-full py-3.5 px-4 rounded-full border border-[#29352C] text-[#29352C] hover:bg-[#29352C] hover:text-[#FFFDF8] font-medium text-sm transition-colors duration-200 cursor-pointer"
            >
              Começar plano Mensal
            </button>
          </div>

          {/* Plano Semestral (DESTAQUE) */}
          <div className="bg-[#FFFDF8] border-2 border-[#B79B68] rounded-2xl p-7 sm:p-8 flex flex-col justify-between shadow-xl relative -translate-y-2">
            {/* Best Choice Badge */}
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#B79B68] text-[#FFFDF8] text-[10px] font-semibold tracking-wider uppercase px-4 py-1 rounded-full shadow-xs">
              ✦ Melhor Escolha · Economia Máxima
            </div>

            <div>
              <div className="flex justify-between items-baseline mb-4 mt-2">
                <h3 className="font-serif text-2xl font-semibold text-[#292A24]">
                  Semestral
                </h3>
                <span className="text-xs font-semibold text-[#B79B68]">
                  6 meses
                </span>
              </div>

              <div className="mb-6 pb-6 border-b border-[#F0EBE0]">
                <div className="flex items-baseline gap-1">
                  <span className="text-sm font-medium text-[#292A24]">R$</span>
                  <span className="font-serif text-5xl sm:text-6xl font-normal text-[#292A24] tracking-tight">
                    24,98
                  </span>
                  <span className="text-xs text-[#6F7067]">/mês</span>
                </div>
                <p className="text-xs text-[#445343] font-medium mt-2">
                  R$ 149,90 à vista via PIX (pagamento único)
                </p>
              </div>

              <ul className="space-y-3 text-xs text-[#6F7067] mb-8 font-light">
                <li className="flex items-start gap-2.5">
                  <span className="text-[#445343] font-bold">✓</span>
                  <span>
                    <strong className="text-[#292A24]">Menor valor diário:</strong> menos de R$ 0,83/dia
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-[#445343] font-bold">✓</span>
                  <span>Envio diário às 06h por 180 dias</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-[#445343] font-bold">✓</span>
                  <span>Sem cobranças surpresa no cartão</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-[#445343] font-bold">✓</span>
                  <span>Suporte prioritário via WhatsApp</span>
                </li>
              </ul>
            </div>

            <button
              type="button"
              onClick={() => handleSelectPlan("semiannual")}
              className="w-full py-4 px-4 rounded-full bg-[#29352C] hover:bg-[#445343] text-[#FFFDF8] font-medium text-sm transition-all duration-200 shadow-md hover:shadow-lg cursor-pointer"
            >
              Começar plano Semestral →
            </button>
          </div>

          {/* Plano Trimestral */}
          <div className="bg-[#FFFDF8] border border-[#E2DBD0] rounded-2xl p-7 flex flex-col justify-between transition-all duration-200 hover:border-[#B79B68]/60">
            <div>
              <div className="flex justify-between items-baseline mb-4">
                <h3 className="font-serif text-2xl font-medium text-[#292A24]">
                  Trimestral
                </h3>
                <span className="text-xs text-[#8E8F86]">3 meses</span>
              </div>

              <div className="mb-6 pb-6 border-b border-[#F0EBE0]">
                <div className="flex items-baseline gap-1">
                  <span className="text-sm font-medium text-[#292A24]">R$</span>
                  <span className="font-serif text-4xl sm:text-5xl font-normal text-[#292A24] tracking-tight">
                    26,63
                  </span>
                  <span className="text-xs text-[#6F7067]">/mês</span>
                </div>
                <p className="text-xs text-[#8E8F86] mt-2">
                  R$ 79,90 à vista via PIX (pagamento único)
                </p>
              </div>

              <ul className="space-y-3 text-xs text-[#6F7067] mb-8 font-light">
                <li className="flex items-start gap-2.5">
                  <span className="text-[#445343] font-bold">✓</span>
                  <span>Envio diário às 06h por 90 dias</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-[#445343] font-bold">✓</span>
                  <span>Leitura, reflexão, oração e prática</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-[#445343] font-bold">✓</span>
                  <span>Sem aplicativo adicional</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-[#445343] font-bold">✓</span>
                  <span>Economia em relação ao mensal</span>
                </li>
              </ul>
            </div>

            <button
              type="button"
              onClick={() => handleSelectPlan("quarterly")}
              className="w-full py-3.5 px-4 rounded-full border border-[#29352C] text-[#29352C] hover:bg-[#29352C] hover:text-[#FFFDF8] font-medium text-sm transition-colors duration-200 cursor-pointer"
            >
              Começar plano Trimestral
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
