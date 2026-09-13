"use client";

import React from "react";

export function SolutionSection() {
  const pillars = [
    {
      num: "01",
      title: "Palavra Viva",
      desc: "Uma passagem bíblica cuidadosamente selecionada para ler com atenção e iluminar seus primeiros pensamentos.",
    },
    {
      num: "02",
      title: "Reflexão Cotidiana",
      desc: "Uma conversa sincera e aplicável sobre a vida real: trabalho, paciência, recomeços, escolhas e cuidados.",
    },
    {
      num: "03",
      title: "Oração Guiada",
      desc: "Uma oração para alinhar o coração com a paz de Deus. Você pode fazê-la sua, no silêncio do seu quarto ou no café.",
    },
    {
      num: "04",
      title: "Aplicação para o Dia",
      desc: "Uma sugestão simples de atitude para a mensagem não parar na leitura e te acompanhar ao longo de todo o dia.",
    },
  ];

  return (
    <section
      className="py-20 md:py-28 bg-[#F7F4EC] border-b border-[#E2DBD0]"
      id="solucao"
      aria-labelledby="solution-title"
    >
      <div className="mana-container">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EFE9DC] text-[#445343] text-[11px] font-semibold tracking-wider uppercase mb-4">
            <span className="text-[#B79B68]">✦</span>
            <span>A Proposta</span>
          </div>

          <h2
            id="solution-title"
            className="font-serif text-[38px] sm:text-[48px] md:text-[54px] leading-[1.12] text-[#292A24] font-normal tracking-tight mb-6"
          >
            Um pequeno espaço para Deus
            <br />
            <em className="italic text-[#445343]">
              antes de o mundo pedir sua atenção.
            </em>
          </h2>

          <p className="text-base sm:text-lg text-[#6F7067] font-light leading-relaxed">
            Todos os dias, às 06h da manhã, você recebe uma mensagem formatada
            diretamente no WhatsApp. Sem precisar baixar nenhum aplicativo novo,
            sem grupos barulhentos e sem sobrecarga. Apenas um momento de fé na
            medida exata para a sua rotina.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar) => (
            <div
              key={pillar.num}
              className="bg-[#FFFDF8] border border-[#E2DBD0] rounded-2xl p-6 transition-all duration-200 hover:-translate-y-1 hover:border-[#B79B68]/60 hover:shadow-md"
            >
              <span className="font-serif italic text-2xl text-[#B79B68] block mb-3 font-normal">
                {pillar.num}
              </span>
              <h3 className="font-serif text-xl font-medium text-[#292A24] mb-2 tracking-tight">
                {pillar.title}
              </h3>
              <p className="text-xs sm:text-[13px] text-[#6F7067] leading-relaxed font-light">
                {pillar.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
