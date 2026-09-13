"use client";

import React from "react";

export function ProblemSection() {
  return (
    <section
      className="py-20 md:py-28 bg-[#29352C] text-[#F7F4EC] relative overflow-hidden"
      id="problema"
      aria-labelledby="problem-title"
    >
      {/* Subtle background ambient warm glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 rounded-full bg-[#B79B68]/5 blur-3xl pointer-events-none" />

      <div className="mana-container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Left Column: Heading */}
          <div className="lg:col-span-6">
            <div className="inline-flex items-center gap-2 text-[#B79B68] text-[11px] font-semibold tracking-widest uppercase mb-4">
              <span>✦</span>
              <span>O Ritmo do Mundo</span>
            </div>

            <h2
              id="problem-title"
              className="font-serif text-[38px] sm:text-[48px] md:text-[56px] leading-[1.1] font-normal tracking-tight"
            >
              O dia começa antes
              <br />
              mesmo de você
              <br />
              <em className="italic text-[#EAD8C2]">perceber.</em>
            </h2>
          </div>

          {/* Right Column: Empathic Narrative */}
          <div className="lg:col-span-6 space-y-6 text-[#D5D8D0] text-base sm:text-lg font-light leading-relaxed">
            <p>
              Notificações, mensagens acumuladas, compromissos e a lista de
              tarefas começam a disputar sua atenção logo no primeiro toque do
              despertador.
            </p>
            <p>
              Sem que a gente note, o dia ganha pressa antes mesmo do café. E
              aquele momento de oração e silêncio acaba ficando para depois —
              quando a mente já está cansada.
            </p>

            <div className="pt-4 border-t border-[#445343]">
              <p className="font-serif italic text-xl sm:text-2xl text-[#FFFDF8] font-normal leading-snug">
                “E se os primeiros minutos do seu dia fossem diferentes? Um
                espaço de paz antes de o barulho começar.”
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
