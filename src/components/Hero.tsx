"use client";

import React from "react";
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
          <div className="lg:col-span-7 flex flex-col items-start text-left z-10">
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

          {/* Right Column: Realistic Calm Morning Scene */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            <div className="relative w-full max-w-[420px]">
              {/* Arched Morning Frame with warm morning light */}
              <div className="relative rounded-[26px] overflow-hidden bg-gradient-to-b from-[#F3ECE2] to-[#E5DACB] border border-[#DDD3C4] p-5 shadow-lg shadow-[#29352C]/5">
                <div className="relative aspect-[4/5] w-full rounded-[20px] overflow-hidden bg-[#FAF6EE] flex items-center justify-center">
                  <svg
                    viewBox="0 0 400 500"
                    fill="none"
                    className="w-full h-full object-cover"
                    aria-hidden="true"
                  >
                    <defs>
                      <linearGradient
                        id="morningGlow"
                        x1="200"
                        y1="0"
                        x2="200"
                        y2="500"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#F9EFE2" />
                        <stop offset="0.6" stopColor="#EAD8C2" />
                        <stop offset="1" stopColor="#D5C4AC" />
                      </linearGradient>
                      <linearGradient
                        id="sunBeams"
                        x1="60"
                        y1="0"
                        x2="340"
                        y2="500"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#FFFDF8" stopOpacity="0.4" />
                        <stop offset="1" stopColor="#FFFDF8" stopOpacity="0" />
                      </linearGradient>
                    </defs>

                    {/* Window background */}
                    <rect width="400" height="500" fill="url(#morningGlow)" />

                    {/* Morning Sun */}
                    <circle cx="205" cy="180" r="70" fill="#FFFDF8" opacity="0.95" />
                    <circle
                      cx="205"
                      cy="180"
                      r="90"
                      stroke="#FFF7E2"
                      strokeWidth="1.5"
                      strokeOpacity="0.5"
                    />

                    {/* Distant Hills / Horizon */}
                    <path
                      d="M-20 370 C90 320, 180 340, 260 300 C320 270, 380 310, 440 290 L440 500 L-20 500 Z"
                      fill="#C8C0AC"
                      opacity="0.65"
                    />
                    <path
                      d="M-20 400 C110 350, 220 380, 420 330 L420 500 L-20 500 Z"
                      fill="#A8AD99"
                      opacity="0.75"
                    />

                    {/* Window Frame Lines */}
                    <line
                      x1="200"
                      y1="0"
                      x2="200"
                      y2="500"
                      stroke="#FFFDF8"
                      strokeWidth="4"
                      strokeOpacity="0.8"
                    />
                    <line
                      x1="0"
                      y1="235"
                      x2="400"
                      y2="235"
                      stroke="#FFFDF8"
                      strokeWidth="4"
                      strokeOpacity="0.8"
                    />

                    {/* Window Sill */}
                    <rect x="0" y="440" width="400" height="60" fill="#C9BDAA" />

                    {/* Sunlight Beam */}
                    <polygon
                      points="120,0 280,0 420,500 20,500"
                      fill="url(#sunBeams)"
                    />

                    {/* Open Bible & Morning Coffee on Sill */}
                    <g transform="translate(180, 375)">
                      {/* Open Bible Pages */}
                      <path
                        d="M-90 40 L-20 30 L-20 65 L-90 75 Z"
                        fill="#FAF6ED"
                        stroke="#B8A892"
                        strokeWidth="1"
                      />
                      <path
                        d="M-20 30 L50 40 L50 75 L-20 65 Z"
                        fill="#F3ECE0"
                        stroke="#B8A892"
                        strokeWidth="1"
                      />
                      <line
                        x1="-20"
                        y1="30"
                        x2="-20"
                        y2="65"
                        stroke="#9C8B74"
                        strokeWidth="1.5"
                      />
                      {/* Ribbon bookmark */}
                      <path
                        d="M-20 38 Q-10 65 -15 80"
                        stroke="#B79B68"
                        strokeWidth="2"
                        fill="none"
                      />

                      {/* Coffee Cup */}
                      <ellipse
                        cx="100"
                        cy="60"
                        rx="26"
                        ry="8"
                        fill="#29352C"
                        opacity="0.1"
                      />
                      <path
                        d="M84 37 C84 58, 116 58, 116 37 Z"
                        fill="#F7F4EC"
                        stroke="#B8A892"
                        strokeWidth="1.5"
                      />
                      <ellipse cx="100" cy="37" rx="16" ry="5" fill="#8C6544" />
                      {/* Steam */}
                      <path
                        d="M96 27 Q92 18 97 10"
                        stroke="#FFFDF8"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        fill="none"
                        opacity="0.75"
                      />
                      <path
                        d="M104 25 Q108 16 103 8"
                        stroke="#FFFDF8"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        fill="none"
                        opacity="0.75"
                      />
                    </g>
                  </svg>

                  {/* Gentle Floating Notification Badge */}
                  <div className="absolute top-4 right-4 bg-[#FFFDF8]/95 backdrop-blur-xs border border-[#E2DBD0] rounded-full px-3.5 py-1 text-[11px] text-[#445343] font-medium flex items-center gap-2 shadow-xs">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#445343]" />
                    <span>06:00 da manhã</span>
                  </div>
                </div>

                {/* Subtle card message */}
                <div className="mt-3.5 bg-[#FFFDF8] border border-[#E2DBD0] rounded-xl p-3.5 shadow-xs">
                  <p className="text-[12px] font-serif italic text-[#292A24] leading-snug">
                    “O Senhor é o meu pastor; de nada terei falta.”
                  </p>
                  <span className="text-[10px] text-[#6F7067] font-light mt-1 block">
                    Salmos 23:1 · Sua pausa da manhã no WhatsApp
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
