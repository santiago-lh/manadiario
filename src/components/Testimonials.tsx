"use client";

import React from "react";

// Estrutura centralizada para facilitar a substituição por depoimentos reais
export const testimonialsData = [
  {
    name: "Mariana S.",
    city: "São Paulo, SP",
    timeUsing: "Recebe o Maná há 5 meses",
    quote:
      "Eu achava que precisava de uma hora inteira para orar de manhã e sempre desistia por falta de tempo. O Maná me mostrou que 5 minutos sinceros antes do trabalho mudam completamente a minha paciência ao longo do dia.",
  },
  {
    name: "Carlos E.",
    city: "Curitiba, PR",
    timeUsing: "Recebe o Maná há 8 meses",
    quote:
      "Comecei por curiosidade e acabou virando parte da minha manhã. A mensagem chega pontual e me ajuda a desacelerar a cabeça antes de abrir os e-mails da empresa.",
  },
  {
    name: "Beatriz M.",
    city: "Belo Horizonte, MG",
    timeUsing: "Recebe o Maná há 1 ano",
    quote:
      "O que mais gosto é que não tem grupos cheios de pessoas mandando mensagens paralelas. É só o devocional, no meu ritmo, enquanto preparo o café das crianças.",
  },
  {
    name: "Rodrigo T.",
    city: "Porto Alegre, RS",
    timeUsing: "Recebe o Maná há 3 meses",
    quote:
      "A reflexão é sempre prática. Não é teoria teológica distante, é aplicação direta para as conversas em família e as decisões que preciso tomar no trabalho.",
  },
];

export function Testimonials() {
  return (
    <section
      className="py-20 md:py-28 bg-[#F7F4EC] border-b border-[#E2DBD0]"
      id="depoimentos"
      aria-labelledby="testimonials-title"
    >
      <div className="mana-container">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-[#445343] text-xs font-semibold tracking-wider uppercase mb-3">
            <span className="text-[#B79B68]">✦</span>
            <span>Relatos Reais</span>
          </div>

          <h2
            id="testimonials-title"
            className="font-serif text-[34px] sm:text-[44px] md:text-[50px] leading-[1.12] text-[#292A24] font-normal tracking-tight mb-3"
          >
            Histórias de quem começou
            <br />
            <em className="italic text-[#445343]">suas manhãs com o Maná.</em>
          </h2>

          <p className="text-base text-[#6F7067] font-light leading-relaxed">
            Pessoas comuns compartilhando como alguns minutos de silêncio
            impactam o restante do dia.
          </p>
        </div>

        {/* Testimonials Grid (Editorial & Sincero) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {testimonialsData.map((item, idx) => (
            <div
              key={idx}
              className="border-t border-[#E2DBD0] pt-6 flex flex-col justify-between"
            >
              <p className="font-serif italic text-base sm:text-lg text-[#292A24] leading-relaxed mb-6 font-normal">
                “{item.quote}”
              </p>

              <div className="flex items-center justify-between text-xs pt-4 border-t border-[#F0EBE0]">
                <div>
                  <strong className="block text-[#292A24] font-medium text-sm">
                    {item.name}
                  </strong>
                  <span className="text-[#8E8F86]">{item.city}</span>
                </div>
                <span className="text-[11px] text-[#445343] font-medium bg-[#EFE9DC] px-2.5 py-1 rounded-full">
                  {item.timeUsing}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
