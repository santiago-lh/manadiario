"use client";

import React from "react";

export function AudienceSection() {
  const forWhom = [
    "Quer voltar a ter constância e proximidade com Deus;",
    "Acorda com a mente cheia de notificações e preocupações;",
    "Gostaria de ler a Bíblia com mais frequência no dia a dia;",
    "Tem pouco tempo livre durante a semana;",
    "Deseja começar a manhã em silêncio antes da correria;",
    "Prefere um formato simples, acolhedor e sem complicações.",
  ];

  const notForWhom = [
    "Sua leitura pessoal e aprofundada das Escrituras;",
    "O aconselhamento pessoal do seu pastor ou conselheiro;",
    "Sua igreja local e a comunhão com sua comunidade de fé;",
    "Estudos teológicos formais ou debates acadêmicos.",
  ];

  return (
    <section
      className="py-20 md:py-28 bg-[#F7F4EC] border-b border-[#E2DBD0]"
      id="para-quem"
      aria-labelledby="audience-title"
    >
      <div className="mana-container">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 text-[#445343] text-xs font-semibold tracking-wider uppercase mb-3">
            <span className="text-[#B79B68]">✦</span>
            <span>Alinhamento e Transparência</span>
          </div>

          <h2
            id="audience-title"
            className="font-serif text-[34px] sm:text-[44px] md:text-[50px] leading-[1.12] text-[#292A24] font-normal tracking-tight mb-3"
          >
            Para quem é o Maná?
          </h2>

          <p className="text-base text-[#6F7067] font-light leading-relaxed">
            Uma proposta sincera para apoiar a sua fé real, no meio das suas obrigações.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Para Quem É */}
          <div className="border-t border-[#E2DBD0] pt-6">
            <span className="text-xs uppercase tracking-widest text-[#445343] font-semibold block mb-4">
              ✦ Pode fazer sentido para você se…
            </span>
            <ul className="space-y-3.5 text-sm text-[#4A4B45] font-light">
              {forWhom.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="text-[#445343] font-medium">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Para Quem Não É / Transparência */}
          <div className="border-t border-[#E2DBD0] pt-6">
            <span className="text-xs uppercase tracking-widest text-[#8E8F86] font-semibold block mb-4">
              ✦ O que o Maná não pretende substituir
            </span>
            <ul className="space-y-3.5 text-sm text-[#6F7067] font-light">
              {notForWhom.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="text-[#B79B68]">✕</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-xs text-[#8E8F86] font-light mt-6 pt-4 border-t border-[#EFE9DC]">
              O Maná é um companheiro matinal para inspirar sua oração diária, não
              um substituto da sua vida com a igreja.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
