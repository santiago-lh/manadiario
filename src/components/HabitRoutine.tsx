"use client";

import React from "react";

export function HabitRoutine() {
  const steps = [
    {
      time: "06:00",
      title: "O Maná chega",
      desc: "Uma notificação discreta aguarda por você quando acordar.",
    },
    {
      time: "06:03",
      title: "Você lê com calma",
      desc: "Uma leitura rápida e profunda enquanto toma sua xícara de café.",
    },
    {
      time: "06:07",
      title: "Sua manhã continua",
      desc: "Você inicia suas tarefas com a mente desacelerada e o coração alinhado.",
    },
    {
      time: "Durante o dia",
      title: "Uma ideia permanece",
      desc: "A reflexão e a oração te acompanham nas decisões e desafios diários.",
    },
  ];

  return (
    <section
      className="py-20 md:py-28 bg-[#EFE9DC]/30 border-b border-[#E2DBD0]"
      id="rotina"
      aria-labelledby="habit-routine-title"
    >
      <div className="mana-container">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 text-[#445343] text-xs font-semibold tracking-wider uppercase mb-3">
            <span className="text-[#B79B68]">✦</span>
            <span>O Ritual na Prática</span>
          </div>

          <h2
            id="habit-routine-title"
            className="font-serif text-[34px] sm:text-[44px] md:text-[50px] leading-[1.12] text-[#292A24] font-normal tracking-tight mb-3"
          >
            Como o Maná entra na sua manhã
          </h2>

          <p className="text-base text-[#6F7067] font-light leading-relaxed">
            Não é preciso mudar toda a sua agenda. Menos de dez minutos são
            suficientes para cultivar um hábito duradouro.
          </p>
        </div>

        {/* Timeline Visual */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-5xl mx-auto relative">
          {steps.map((item, idx) => (
            <div
              key={idx}
              className="flex flex-col border-t border-[#E2DBD0] pt-6 relative"
            >
              <span className="font-serif italic text-2xl text-[#B79B68] block mb-2 font-normal">
                {item.time}
              </span>
              <h3 className="font-serif text-xl text-[#292A24] font-medium mb-1.5 tracking-tight">
                {item.title}
              </h3>
              <p className="text-xs sm:text-[13px] text-[#6F7067] font-light leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
