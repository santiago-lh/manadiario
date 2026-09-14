"use client";

import React from "react";

export function IdentificationSection() {
  return (
    <section
      className="py-20 md:py-28 bg-[#F7F4EC] border-b border-[#E2DBD0]"
      id="identificacao"
      aria-labelledby="id-title"
    >
      <div className="mana-container">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center gap-2 text-[#445343] text-xs font-semibold tracking-wider uppercase mb-2">
            <span className="text-[#B79B68]">✦</span>
            <span>Uma pausa na rotina</span>
          </div>

          <h2
            id="id-title"
            className="font-serif text-[34px] sm:text-[44px] md:text-[50px] leading-[1.14] text-[#292A24] font-normal tracking-tight"
          >
            Talvez não falte fé.
            <br />
            <em className="italic text-[#445343]">
              Talvez falte espaço na rotina.
            </em>
          </h2>

          <div className="space-y-4 text-base sm:text-lg text-[#6F7067] font-light leading-relaxed pt-2">
            <p>
              O despertador toca, as notificações chegam, o trabalho começa e a
              casa pede atenção. Na pressa de cuidar de tudo, aquele momento de
              oração e silêncio acaba sendo empurrado para o final do dia —
              quando a mente já está exausta.
            </p>
            <p>
              O Maná Diário não foi feito para cobrar mais uma obrigação na sua
              agenda. Ele nasceu para caber na vida que você tem hoje, com o tempo
              que for possível.
            </p>
          </div>

          <div className="pt-6">
            <div className="inline-block p-4 sm:p-5 rounded-2xl bg-[#EFE9DC]/60 border border-[#E2DBD0] text-sm text-[#445343] font-serif italic max-w-xl">
              “Sem culpa, sem cobranças. Apenas um momento de paz com Deus antes
              de o mundo pedir a sua atenção.”
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
