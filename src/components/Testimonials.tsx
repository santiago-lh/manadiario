"use client";

import React from "react";

export function Testimonials() {
  const testimonials = [
    {
      quote:
        "Eu sempre dizia que não tinha tempo para fazer meu devocional pela manhã. Agora a mensagem chega antes de o trabalho começar e transformou o meu café em um momento sagrado de paz.",
      author: "Mariana S.",
      location: "São Paulo, SP",
      routine: "Leitora há 7 meses",
    },
    {
      quote:
        "A simplicidade de não precisar de outro app foi o que fez funcionar para mim. O devocional das 6h me dá clareza e paciência antes de abrir os e-mails e reuniões da empresa.",
      author: "Carlos E.",
      location: "Curitiba, PR",
      routine: "Leitor há 5 meses",
    },
    {
      quote:
        "As orações parecem escritas exatamente para o que estou enfrentando no dia. É um respiro de calma em meio à correria de acordar cedo e arrumar os filhos para a escola.",
      author: "Beatriz M.",
      location: "Belo Horizonte, MG",
      routine: "Leitora há 1 ano",
    },
    {
      quote:
        "Melhor assinatura que já fiz. Vale muito mais do que custa pela serenidade que traz para a minha mente antes de qualquer problema tentar me desestabilizar.",
      author: "Rodrigo T.",
      location: "Porto Alegre, RS",
      routine: "Leitor há 9 meses",
    },
  ];

  return (
    <section
      className="py-20 md:py-28 bg-[#EFE9DC]/50 border-b border-[#E2DBD0]"
      id="depoimentos"
      aria-labelledby="testimonials-title"
    >
      <div className="mana-container">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E2DBD0] text-[#445343] text-[11px] font-semibold tracking-wider uppercase mb-4">
            <span className="text-[#B79B68]">✦</span>
            <span>Histórias Reais</span>
          </div>

          <h2
            id="testimonials-title"
            className="font-serif text-[38px] sm:text-[46px] md:text-[52px] leading-[1.12] text-[#292A24] font-normal tracking-tight mb-4"
          >
            Alguns minutos que
            <br />
            <em className="italic text-[#445343]">mudaram muitas manhãs.</em>
          </h2>

          <p className="text-base text-[#6F7067] font-light leading-relaxed">
            Veja como pessoas comuns encontram paz e constância espiritual no dia
            a dia através do Maná Diário.
          </p>
        </div>

        {/* Editorial Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="bg-[#FFFDF8] border border-[#E2DBD0] rounded-2xl p-7 sm:p-8 flex flex-col justify-between shadow-xs"
            >
              <div>
                <div className="flex items-center gap-1 text-[#B79B68] text-xs mb-4">
                  <span>★</span>
                  <span>★</span>
                  <span>★</span>
                  <span>★</span>
                  <span>★</span>
                </div>

                <p className="font-serif italic text-lg sm:text-xl text-[#292A24] leading-relaxed mb-6 font-normal">
                  “{t.quote}”
                </p>
              </div>

              <div className="pt-4 border-t border-[#F0EBE0] flex items-center justify-between text-xs">
                <div>
                  <strong className="block text-[#292A24] font-medium text-sm">
                    {t.author}
                  </strong>
                  <span className="text-[#8E8F86]">{t.location}</span>
                </div>
                <span className="text-[11px] font-medium text-[#445343] bg-[#E8F0E8] px-2.5 py-1 rounded-full">
                  {t.routine}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
