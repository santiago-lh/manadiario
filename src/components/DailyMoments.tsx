"use client";

import React from "react";

export function DailyMoments() {
  const steps = [
    {
      step: "01",
      title: "Ler",
      badge: "A Palavra",
      description:
        "Um versículo das Escrituras para ler com calma. Um lembrete de que Deus já estava trabalhando antes de o seu dia começar.",
    },
    {
      step: "02",
      title: "Refletir",
      badge: "O Sentido",
      description:
        "Uma reflexão pé no chão sobre a rotina real: trabalho, paciência, relacionamentos e as escolhas que você enfrentará hoje.",
    },
    {
      step: "03",
      title: "Orar",
      badge: "A Conexão",
      description:
        "Uma oração acolhedora para colocar sua mente e suas inquietações nas mãos de Deus, sem palavras difíceis ou repetições vazias.",
    },
    {
      step: "04",
      title: "Levar para o Dia",
      badge: "A Ação",
      description:
        "Um pensamento ou uma atitude prática para manter a paz viva na sua memória quando o expediente começar.",
    },
  ];

  return (
    <section
      className="py-20 md:py-28 bg-[#F7F4EC] border-b border-[#E2DBD0]"
      id="momentos"
      aria-labelledby="moments-title"
    >
      <div className="mana-container">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EFE9DC] text-[#445343] text-[11px] font-semibold tracking-wider uppercase mb-4">
            <span className="text-[#B79B68]">✦</span>
            <span>Estrutura do Conteúdo</span>
          </div>

          <h2
            id="moments-title"
            className="font-serif text-[38px] sm:text-[46px] md:text-[52px] leading-[1.12] text-[#292A24] font-normal tracking-tight mb-4"
          >
            O que chega diariamente
            <br />
            <em className="italic text-[#445343]">para alimentar sua fé.</em>
          </h2>

          <p className="text-base text-[#6F7067] font-light leading-relaxed">
            Uma estrutura editorial pensada para quem tem pouco tempo, mas não
            abre mão da profundidade.
          </p>
        </div>

        {/* Editorial Progressive Line */}
        <div className="relative border-t border-[#E2DBD0] pt-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((s) => (
              <div key={s.step} className="flex flex-col group">
                {/* Step indicator */}
                <div className="flex items-baseline justify-between border-b border-[#E2DBD0] pb-3 mb-4 group-hover:border-[#B79B68] transition-colors">
                  <span className="font-serif italic text-3xl text-[#B79B68]">
                    {s.step}
                  </span>
                  <span className="text-[10px] uppercase tracking-widest text-[#8E8F86] font-semibold">
                    {s.badge}
                  </span>
                </div>

                <h3 className="font-serif text-2xl text-[#292A24] font-medium mb-2 tracking-tight">
                  {s.title}
                </h3>

                <p className="text-sm text-[#6F7067] leading-relaxed font-light">
                  {s.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
