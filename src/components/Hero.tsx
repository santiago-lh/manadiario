"use client";

import React from "react";
import Image from "next/image";
import { useCheckout } from "./CheckoutContext";

export function Hero() {
  const { openCheckout } = useCheckout();

  return (
    <section
      className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-gradient-to-b from-[#F7F4EC] via-[#F7F4EC] to-[#EFE9DC]/40"
      id="inicio"
      aria-labelledby="hero-title"
    >
      <div className="mana-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Left Column: Contemplative & Direct Copy */}
          <div className="lg:col-span-6 flex flex-col items-start text-left z-10">
            {/* Small Subtle Eyebrow */}
            <div className="inline-flex items-center gap-2 text-[#445343] text-xs font-semibold tracking-wider uppercase mb-5">
              <span className="text-[#B79B68]">✦</span>
              <span>Ritual Diário de Fé</span>
            </div>

            {/* Headline */}
            <h1
              id="hero-title"
              className="font-serif text-[44px] leading-[1.06] sm:text-[58px] md:text-[68px] tracking-tight text-[#292A24] font-normal mb-6"
            >
              Antes de o dia
              <br className="hidden sm:inline" /> ganhar pressa,
              <br />
              <em className="italic font-normal text-[#445343]">
                um momento com Deus.
              </em>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-[#6F7067] leading-relaxed max-w-xl mb-8 font-light">
              Receba todas as manhãs uma breve leitura bíblica, reflexão e oração
              diretamente no seu WhatsApp.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mb-5">
              <button
                type="button"
                onClick={() => openCheckout("semiannual")}
                className="inline-flex items-center justify-center gap-3 bg-[#29352C] hover:bg-[#445343] text-[#FFFDF8] font-medium text-[15px] px-8 py-4 rounded-full transition-all duration-200 shadow-xs hover:shadow-md cursor-pointer"
              >
                <span>Quero receber meu Maná Diário</span>
                <span className="text-base font-light text-[#B79B68]">→</span>
              </button>

              <a
                href="#demonstracao"
                className="inline-flex items-center justify-center gap-2 text-[#445343] hover:text-[#292A24] text-[14px] font-medium py-3 px-4 transition-colors group"
              >
                <span>Ver uma mensagem primeiro</span>
                <span className="text-xs group-hover:translate-y-0.5 transition-transform">
                  ↓
                </span>
              </a>
            </div>

            {/* Micro-info essencial (sem poluição) */}
            <p className="text-xs text-[#6F7067] font-light flex items-center gap-2 flex-wrap">
              <span>Todos os dias às 06h</span>
              <span className="text-[#B79B68]">•</span>
              <span>direto no WhatsApp</span>
              <span className="text-[#B79B68]">•</span>
              <span>cancele quando quiser</span>
            </p>
          </div>

          {/* Right Column: Premium High-Converting Product Hero Visual */}
          <div className="lg:col-span-6 relative flex flex-col items-center justify-center w-full">
            {/* Ambient Morning Light Flare Glow */}
            <div
              className="absolute -inset-4 sm:-inset-10 bg-gradient-to-tr from-[#E6D4BE]/50 via-[#F7ECE1]/60 to-[#FFFDF8]/0 rounded-[48px] blur-3xl -z-10 pointer-events-none"
              aria-hidden="true"
            />

            <div className="relative w-full max-w-[530px]">
              {/* Luxury Device & Ritual Showcase Frame */}
              <div className="relative rounded-[28px] overflow-hidden bg-gradient-to-b from-[#FFFDF8] via-[#FAF6EE] to-[#EFE8DC] border border-[#E2DBD0] p-2.5 sm:p-3 shadow-2xl shadow-[#29352C]/10 transition-all duration-300 hover:shadow-3xl hover:border-[#D6CAB8]">
                {/* 4:3 Aspect container with high-res photograph */}
                <div className="relative aspect-[4/3] w-full rounded-[20px] overflow-hidden bg-[#FAF6EE]">
                  <Image
                    src="/images/hero-mana-diario.jpg"
                    alt="Smartphone moderno exibindo o aplicativo Maná Diário em um devocional matinal com Bíblia aberta e café ao amanhecer"
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 530px"
                    className="object-cover object-center"
                  />

                  {/* Gentle warm ambient lighting gradient overlay */}
                  <div
                    className="absolute inset-0 bg-gradient-to-t from-[#29352C]/20 via-transparent to-transparent pointer-events-none"
                    aria-hidden="true"
                  />
                </div>

                {/* Floating Badge: Daily Streak & Timing */}
                <div className="absolute top-4 right-4 sm:top-5 sm:right-5 bg-[#FFFDF8]/95 backdrop-blur-md border border-[#E2DBD0] rounded-full py-1.5 px-3.5 sm:px-4 text-[11px] sm:text-xs text-[#292A24] font-medium flex items-center gap-2 shadow-lg shadow-[#29352C]/10">
                  <span className="w-2 h-2 rounded-full bg-[#445343] animate-pulse" />
                  <span className="text-[#445343] font-semibold">06h00</span>
                  <span className="text-[#B79B68]">•</span>
                  <span>112 dias seguidos</span>
                  <span className="text-xs">🕊️</span>
                </div>

                {/* Floating Card: Habit & Reflection preview */}
                <div className="absolute bottom-4 left-4 sm:bottom-5 sm:left-5 bg-[#FFFDF8]/95 backdrop-blur-md border border-[#E2DBD0] rounded-2xl p-3 sm:p-3.5 shadow-xl shadow-[#29352C]/12 max-w-[270px] sm:max-w-[290px] flex flex-col gap-1 text-left">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] uppercase tracking-wider text-[#B79B68] font-bold">
                      Ritual Matinal
                    </span>
                    <span className="text-[10px] text-[#445343] font-medium bg-[#E8F0E8] px-2 py-0.5 rounded-full">
                      3 min de leitura
                    </span>
                  </div>
                  <p className="text-[12px] font-serif italic text-[#292A24] leading-snug line-clamp-1">
                    “O Senhor é o meu pastor; de nada terei falta.”
                  </p>
                  <span className="text-[10px] text-[#6F7067] font-light">
                    Salmos 23:1 · Sua pausa da manhã no WhatsApp
                  </span>
                </div>
              </div>

              {/* Minimalist Micro-benefits beneath the showcase */}
              <div className="mt-4 flex items-center justify-center gap-4 sm:gap-6 text-[11px] sm:text-xs text-[#6F7067] font-light">
                <span className="flex items-center gap-1.5">
                  <span className="text-[#B79B68]">✦</span>
                  Leitura diária guiada
                </span>
                <span className="text-[#D0C6B8]">•</span>
                <span className="flex items-center gap-1.5">
                  <span className="text-[#445343]">✓</span>
                  Sem distrações ou anúncios
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
