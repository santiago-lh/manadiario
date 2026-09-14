"use client";

import React from "react";

export function DailyContent() {
  const elements = [
    {
      title: "Palavra",
      description: "Uma passagem bíblica para começar o dia com fundamento.",
    },
    {
      title: "Reflexão",
      description: "Alguns minutos para compreender e aplicar à vida real.",
    },
    {
      title: "Oração",
      description: "Um espaço sereno para falar com Deus antes do barulho.",
    },
    {
      title: "Aplicação",
      description: "Uma ideia ou atitude simples para carregar pelo dia.",
    },
  ];

  return (
    <section
      className="py-20 md:py-28 bg-[#F7F4EC] border-b border-[#E2DBD0]"
      id="conteudo-diario"
      aria-labelledby="daily-content-title"
    >
      <div className="mana-container">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 text-[#445343] text-xs font-semibold tracking-wider uppercase mb-3">
            <span className="text-[#B79B68]">✦</span>
            <span>A Cada Manhã</span>
          </div>

          <h2
            id="daily-content-title"
            className="font-serif text-[34px] sm:text-[44px] md:text-[50px] leading-[1.12] text-[#292A24] font-normal tracking-tight mb-3"
          >
            O que chega todos os dias
          </h2>

          <p className="text-base text-[#6F7067] font-light leading-relaxed">
            Quatro momentos simples para nutrir a sua fé sem sobrecarregar sua rotina.
          </p>
        </div>

        {/* 4 Pillars Clean Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
          {elements.map((elem, idx) => (
            <div
              key={idx}
              className="border-t border-[#E2DBD0] pt-6 flex flex-col items-start"
            >
              <span className="text-[11px] uppercase tracking-widest text-[#B79B68] font-semibold mb-2">
                0{idx + 1}
              </span>
              <h3 className="font-serif text-2xl text-[#292A24] font-medium mb-2 tracking-tight">
                {elem.title}
              </h3>
              <p className="text-sm text-[#6F7067] font-light leading-relaxed">
                {elem.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
