"use client";

import React from "react";
import { useCheckout, PlanType } from "./CheckoutContext";

export function Pricing() {
  const { openCheckout } = useCheckout();

  return (
    <section
      className="py-20 md:py-28 bg-[#EFE9DC]/30 border-b border-[#E2DBD0]"
      id="planos"
      aria-labelledby="pricing-title"
    >
      <div className="mana-container">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-[#445343] text-xs font-semibold tracking-wider uppercase mb-3">
            <span className="text-[#B79B68]">✦</span>
            <span>Planos de Assinatura</span>
          </div>

          <h2
            id="pricing-title"
            className="font-serif text-[34px] sm:text-[44px] md:text-[50px] leading-[1.12] text-[#292A24] font-normal tracking-tight mb-3"
          >
            Escolha o seu plano
          </h2>

          <p className="text-base text-[#6F7067] font-light leading-relaxed">
            Uma assinatura serena para nutrir sua fé todos os dias. Cancele quando
            quiser diretamente pelo WhatsApp.
          </p>
        </div>

        {/* 3 Clean, Serene Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-5xl mx-auto items-stretch">
          {/* Mensal: Para começar */}
          <div className="bg-[#FFFDF8] border border-[#E2DBD0] rounded-2xl p-7 flex flex-col justify-between transition-all duration-200 hover:border-[#B79B68]/60">
            <div>
              <div className="flex justify-between items-baseline mb-4">
                <div>
                  <span className="text-[11px] text-[#6F7067] uppercase tracking-wider block">
                    Para começar
                  </span>
                  <h3 className="font-serif text-2xl font-medium text-[#292A24] mt-0.5">
                    Mensal
                  </h3>
                </div>
                <span className="text-xs text-[#8E8F86]">Cobrança mensal</span>
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
                  Total de R$ 29,90 cobrados a cada mês
                </p>
              </div>

              <ul className="space-y-3 text-xs text-[#6F7067] mb-8 font-light">
                <li className="flex items-start gap-2.5">
                  <span className="text-[#445343]">✓</span>
                  <span>Envio pontual às 06h no WhatsApp</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-[#445343]">✓</span>
                  <span>Palavra, reflexão, oração e aplicação</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-[#445343]">✓</span>
                  <span>Sem grupos e 100% individual</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-[#445343]">✓</span>
                  <span>Cancele a qualquer momento</span>
                </li>
              </ul>
            </div>

            <button
              type="button"
              onClick={() => openCheckout("monthly")}
              className="w-full py-3.5 px-4 rounded-full border border-[#29352C] text-[#29352C] hover:bg-[#29352C] hover:text-[#FFFDF8] font-medium text-xs transition-colors duration-200 cursor-pointer"
            >
              Começar com este plano
            </button>
          </div>

          {/* Semestral: Mais escolhido */}
          <div className="bg-[#FFFDF8] border-2 border-[#B79B68] rounded-2xl p-7 sm:p-8 flex flex-col justify-between shadow-sm relative lg:-translate-y-2">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#445343] text-[#FFFDF8] text-[10px] font-medium tracking-wider uppercase px-4 py-0.5 rounded-full">
              ✦ Mais escolhido
            </div>

            <div>
              <div className="flex justify-between items-baseline mb-4 mt-1">
                <div>
                  <span className="text-[11px] text-[#B79B68] uppercase tracking-wider font-semibold block">
                    Semestral
                  </span>
                  <h3 className="font-serif text-2xl font-semibold text-[#292A24] mt-0.5">
                    6 Meses
                  </h3>
                </div>
                <span className="text-xs text-[#445343] font-medium">
                  Maior constância
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
                  R$ 149,90 em pagamento único para 6 meses
                </p>
              </div>

              <ul className="space-y-3 text-xs text-[#6F7067] mb-8 font-light">
                <li className="flex items-start gap-2.5">
                  <span className="text-[#445343] font-bold">✓</span>
                  <span>Envio diário garantido por 180 dias</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-[#445343] font-bold">✓</span>
                  <span>Equivalente a menos de R$ 0,83 por dia</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-[#445343] font-bold">✓</span>
                  <span>Sem cobranças mensais repetidas</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-[#445343] font-bold">✓</span>
                  <span>Suporte prioritário via WhatsApp</span>
                </li>
              </ul>
            </div>

            <button
              type="button"
              onClick={() => openCheckout("semiannual")}
              className="w-full py-4 px-4 rounded-full bg-[#29352C] hover:bg-[#445343] text-[#FFFDF8] font-medium text-xs transition-all duration-200 cursor-pointer shadow-xs"
            >
              Quero receber meu Maná Diário →
            </button>
          </div>

          {/* Trimestral: Para criar constância */}
          <div className="bg-[#FFFDF8] border border-[#E2DBD0] rounded-2xl p-7 flex flex-col justify-between transition-all duration-200 hover:border-[#B79B68]/60">
            <div>
              <div className="flex justify-between items-baseline mb-4">
                <div>
                  <span className="text-[11px] text-[#6F7067] uppercase tracking-wider block">
                    Para criar constância
                  </span>
                  <h3 className="font-serif text-2xl font-medium text-[#292A24] mt-0.5">
                    Trimestral
                  </h3>
                </div>
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
                  R$ 79,90 em pagamento único para 3 meses
                </p>
              </div>

              <ul className="space-y-3 text-xs text-[#6F7067] mb-8 font-light">
                <li className="flex items-start gap-2.5">
                  <span className="text-[#445343]">✓</span>
                  <span>Envio diário às 06h por 90 dias</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-[#445343]">✓</span>
                  <span>Palavra, reflexão, oração e aplicação</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-[#445343]">✓</span>
                  <span>Sem aplicativo adicional</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-[#445343]">✓</span>
                  <span>Economia em relação ao mensal</span>
                </li>
              </ul>
            </div>

            <button
              type="button"
              onClick={() => openCheckout("quarterly")}
              className="w-full py-3.5 px-4 rounded-full border border-[#29352C] text-[#29352C] hover:bg-[#29352C] hover:text-[#FFFDF8] font-medium text-xs transition-colors duration-200 cursor-pointer"
            >
              Começar com este plano
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
