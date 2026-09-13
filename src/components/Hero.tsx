"use client";

import React from "react";
import { useCheckout } from "./CheckoutContext";

export function Hero() {
  const { openCheckout } = useCheckout();

  return (
    <section
      className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden bg-gradient-to-b from-[#F7F4EC] to-[#EFE9DC]/50"
      id="inicio"
      aria-labelledby="hero-title"
    >
      <div className="mana-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Editorial Copy */}
          <div className="lg:col-span-7 flex flex-col items-start text-left z-10">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EFE9DC] border border-[#E2DBD0] text-[#445343] text-[11px] font-semibold tracking-wider uppercase mb-6">
              <span className="text-[#B79B68] text-xs">✦</span>
              <span>Ritual Diário de Fé · via WhatsApp</span>
            </div>

            {/* Headline */}
            <h1
              id="hero-title"
              className="font-serif text-[42px] leading-[1.08] sm:text-[56px] md:text-[66px] tracking-tight text-[#292A24] font-normal mb-6"
            >
              Antes de o dia
              <br className="hidden sm:inline" /> ganhar pressa,
              <br />
              <em className="italic font-normal text-[#445343]">
                um momento com Deus.
              </em>
            </h1>

            {/* Description */}
            <p className="text-base sm:text-lg text-[#6F7067] leading-relaxed max-w-xl mb-8 font-light">
              Receba todas as manhãs pelo WhatsApp uma leitura, reflexão e oração
              para começar o seu dia com silêncio, clareza e propósito.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mb-6">
              <button
                type="button"
                onClick={() => openCheckout("semiannual")}
                className="inline-flex items-center justify-center gap-3 bg-[#29352C] hover:bg-[#445343] text-[#FFFDF8] font-medium text-[15px] px-8 py-4 rounded-full transition-all duration-200 shadow-sm hover:shadow-md hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
              >
                <span>Quero começar minhas manhãs</span>
                <span className="text-base font-light text-[#B79B68]">→</span>
              </button>

              <a
                href="#mensagem"
                className="inline-flex items-center justify-center gap-2 text-[#445343] hover:text-[#292A24] text-[14px] font-medium py-3 px-4 transition-colors group"
              >
                <span>Conhecer a mensagem</span>
                <span className="text-xs group-hover:translate-y-0.5 transition-transform">
                  ↓
                </span>
              </a>
            </div>

            {/* Price Note */}
            <p className="text-xs sm:text-sm text-[#6F7067] mb-8 flex items-center gap-2">
              <strong className="font-semibold text-[#292A24]">
                A partir de R$ 24,98/mês
              </strong>
              <span className="text-[#B79B68]">·</span>
              <span>Menos de R$ 1 por dia</span>
            </p>

            {/* Trust Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-6 border-t border-[#E2DBD0] w-full max-w-xl text-[12px] text-[#6F7067]">
              <div className="flex items-center gap-2">
                <span className="text-[#445343] font-bold">✓</span>
                <span>Direto no WhatsApp</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[#445343] font-bold">✓</span>
                <span>Sem aplicativo novo</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[#445343] font-bold">✓</span>
                <span>Cancele quando quiser</span>
              </div>
            </div>
          </div>

          {/* Right Column: Realistic Morning Scene & WhatsApp Notification */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            <div className="relative w-full max-w-[440px]">
              {/* Arched Morning Window Illustration */}
              <div className="relative rounded-[28px] overflow-hidden bg-gradient-to-b from-[#F2E8DC] via-[#E8DFD0] to-[#DFD5C4] border border-[#D9CEBF] p-6 shadow-xl shadow-[#29352C]/5">
                {/* SVG Window and Sunlight */}
                <div className="relative aspect-[4/5] w-full rounded-[20px] overflow-hidden bg-[#FBF8F2] flex items-center justify-center">
                  <svg
                    viewBox="0 0 400 500"
                    fill="none"
                    className="w-full h-full object-cover"
                    aria-hidden="true"
                  >
                    <defs>
                      <linearGradient
                        id="heroSky"
                        x1="200"
                        y1="0"
                        x2="200"
                        y2="500"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#F6E7D2" />
                        <stop offset="0.5" stopColor="#EAD8C2" />
                        <stop offset="1" stopColor="#D8C8B0" />
                      </linearGradient>
                      <linearGradient
                        id="sunRays"
                        x1="50"
                        y1="0"
                        x2="350"
                        y2="500"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#FFFDF8" stopOpacity="0.45" />
                        <stop offset="1" stopColor="#FFFDF8" stopOpacity="0" />
                      </linearGradient>
                    </defs>

                    {/* Window Arch Background */}
                    <rect width="400" height="500" fill="url(#heroSky)" />

                    {/* Soft Morning Sun */}
                    <circle cx="210" cy="190" r="75" fill="#FFFBF2" />
                    <circle
                      cx="210"
                      cy="190"
                      r="95"
                      stroke="#FFF7E2"
                      strokeWidth="1.5"
                      strokeOpacity="0.6"
                    />

                    {/* Distant Hills / Horizon */}
                    <path
                      d="M-20 370 C90 320, 180 340, 260 300 C320 270, 380 310, 440 290 L440 500 L-20 500 Z"
                      fill="#C8C0AC"
                      opacity="0.75"
                    />
                    <path
                      d="M-20 400 C110 350, 220 380, 420 330 L420 500 L-20 500 Z"
                      fill="#A4A895"
                      opacity="0.85"
                    />

                    {/* Window Frame Lines */}
                    <line
                      x1="200"
                      y1="0"
                      x2="200"
                      y2="500"
                      stroke="#FFFDF8"
                      strokeWidth="5"
                      strokeOpacity="0.9"
                    />
                    <line
                      x1="0"
                      y1="240"
                      x2="400"
                      y2="240"
                      stroke="#FFFDF8"
                      strokeWidth="5"
                      strokeOpacity="0.9"
                    />

                    {/* Window Sill */}
                    <rect x="0" y="440" width="400" height="60" fill="#CEC1AD" />
                    <line
                      x1="0"
                      y1="440"
                      x2="400"
                      y2="440"
                      stroke="#B8A892"
                      strokeWidth="2"
                    />

                    {/* Sunlight Beam */}
                    <polygon
                      points="120,0 280,0 420,500 20,500"
                      fill="url(#sunRays)"
                    />

                    {/* Morning Coffee Cup & Open Book on Sill */}
                    <g transform="translate(185, 375)">
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
                        rx="28"
                        ry="9"
                        fill="#29352C"
                        opacity="0.12"
                      />
                      <path
                        d="M82 35 C82 58, 118 58, 118 35 Z"
                        fill="#F7F4EC"
                        stroke="#B8A892"
                        strokeWidth="1.5"
                      />
                      <ellipse cx="100" cy="35" rx="18" ry="6" fill="#8C6544" />
                      {/* Steam */}
                      <path
                        d="M96 25 Q92 15 97 7"
                        stroke="#FFFDF8"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        fill="none"
                        opacity="0.8"
                      />
                      <path
                        d="M104 23 Q108 13 103 5"
                        stroke="#FFFDF8"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        fill="none"
                        opacity="0.8"
                      />
                    </g>
                  </svg>

                  {/* Gentle Floating Notification Badge */}
                  <div className="absolute top-4 right-4 bg-[#FFFDF8]/90 backdrop-blur-sm border border-[#E2DBD0] rounded-full px-3 py-1 text-[11px] text-[#445343] font-medium flex items-center gap-1.5 shadow-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#445343] animate-pulse" />
                    <span>06:00 da manhã</span>
                  </div>
                </div>

                {/* WhatsApp Notification Card Preview (Overlaid Realistically) */}
                <div className="mt-4 bg-[#FFFDF8] border border-[#E2DBD0] rounded-2xl p-4 shadow-lg shadow-[#29352C]/5 transition-transform hover:-translate-y-0.5 duration-200">
                  <div className="flex items-center justify-between text-[11px] text-[#6F7067] mb-2 pb-2 border-b border-[#F2EFE8]">
                    <div className="flex items-center gap-2">
                      <span className="w-5 h-5 rounded-full bg-[#E8F0E8] text-[#29352C] flex items-center justify-center font-serif text-xs font-bold">
                        ✦
                      </span>
                      <span className="font-semibold text-[#292A24] tracking-tight">
                        Maná Diário
                      </span>
                    </div>
                    <span>Agora</span>
                  </div>

                  <p className="text-[13px] font-serif font-medium text-[#292A24] leading-snug mb-1">
                    “Bom dia. Vamos com calma? ☀️”
                  </p>
                  <p className="text-[12px] text-[#6F7067] leading-relaxed mb-3">
                    Antes de cuidar de todas as tarefas, separe alguns minutos
                    para quem cuida de você.
                  </p>

                  <div className="flex items-center justify-between text-[10px] text-[#B79B68] font-medium pt-1 border-t border-[#F7F4EC]">
                    <span>01 Ler · 02 Refletir · 03 Orar · 04 Praticar</span>
                    <span className="text-[#445343]">06:00 ✓✓</span>
                  </div>
                </div>
              </div>

              {/* Decorative Subtle Note */}
              <div className="text-center mt-3">
                <span className="text-[11px] text-[#8E8F86] font-light">
                  ✦ Seu ritual pessoal de fé. Todos os dias no WhatsApp.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
