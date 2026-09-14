"use client";

import React from "react";

export function EditorialTransparency() {
  return (
    <section
      className="py-16 md:py-24 bg-[#F7F4EC] border-b border-[#E2DBD0]"
      id="editorial"
      aria-labelledby="transparency-title"
    >
      <div className="mana-container">
        <div className="max-w-3xl mx-auto border-t border-[#E2DBD0] pt-10">
          <div className="inline-flex items-center gap-2 text-[#445343] text-xs font-semibold tracking-wider uppercase mb-3">
            <span className="text-[#B79B68]">✦</span>
            <span>Critério e Cuidado</span>
          </div>

          <h2
            id="transparency-title"
            className="font-serif text-[28px] sm:text-[36px] leading-[1.15] text-[#292A24] font-normal tracking-tight mb-4"
          >
            Como cada Maná é preparado
          </h2>

          <div className="space-y-3.5 text-sm sm:text-base text-[#6F7067] font-light leading-relaxed">
            <p>
              Cada devocional parte exclusivamente de uma passagem das
              Escrituras Sagradas e segue uma estrutura editorial própria,
              planejada para trazer clareza e paz para o cotidiano real.
            </p>
            <p>
              Ferramentas de tecnologia e inteligência artificial auxiliam na
              organização temática, pesquisa de contexto e revisão do texto,
              assegurando que a mensagem chegue pontualmente às 06h em todos os
              dias do ano com consistência e sensibilidade.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
