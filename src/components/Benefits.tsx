"use client";

import React from "react";

export function Benefits() {
  const benefits = [
    {
      title: "Constância sem sobrecarga",
      desc: "Não cobramos horas de estudo teológico nem leituras cansativas. Bastam 5 a 7 minutos de silêncio para cultivar uma fé diária real e inabalável.",
      tag: "Hábito Sustentável",
    },
    {
      title: "Onde você já está",
      desc: "Você não precisa abrir uma loja de aplicativos, lembrar de login ou navegar em interfaces complexas. O devocional chega naturalmente na sua tela.",
      tag: "Zero Fricção",
    },
    {
      title: "Profundidade e serenidade",
      desc: "Textos livres de polêmicas, julgamentos ou sensacionalismo. Apenas a Palavra de Deus em sua pureza, com acolhimento genuíno para o seu coração.",
      tag: "Paz Real",
    },
    {
      title: "100% Privado e Seguro",
      desc: "Sem grupos abertos onde pessoas desconhecidas enviam correntes ou têm acesso ao seu número. A conversa é direta, confidencial e respeitosa.",
      tag: "Privacidade Total",
    },
  ];

  return (
    <section
      className="py-20 md:py-28 bg-[#F7F4EC] border-b border-[#E2DBD0]"
      id="beneficios"
      aria-labelledby="benefits-title"
    >
      <div className="mana-container">
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EFE9DC] text-[#445343] text-[11px] font-semibold tracking-wider uppercase mb-4">
            <span className="text-[#B79B68]">✦</span>
            <span>Por Que Funciona</span>
          </div>

          <h2
            id="benefits-title"
            className="font-serif text-[38px] sm:text-[46px] md:text-[52px] leading-[1.12] text-[#292A24] font-normal tracking-tight mb-4"
          >
            A fé cabe na vida
            <br />
            <em className="italic text-[#445343]">que você tem hoje.</em>
          </h2>

          <p className="text-base text-[#6F7067] font-light leading-relaxed">
            Criado com carinho para quem tem rotinas exigentes, trabalho e família,
            mas deseja manter a chama espiritual sempre acesa.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {benefits.map((b) => (
            <div
              key={b.title}
              className="bg-[#FFFDF8] border border-[#E2DBD0] rounded-2xl p-8 transition-all duration-200 hover:border-[#B79B68]/60 hover:shadow-sm"
            >
              <span className="text-[10px] uppercase font-bold tracking-widest text-[#B79B68] block mb-3">
                ✦ {b.tag}
              </span>

              <h3 className="font-serif text-2xl text-[#292A24] font-medium mb-3 tracking-tight">
                {b.title}
              </h3>

              <p className="text-sm text-[#6F7067] font-light leading-relaxed">
                {b.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
