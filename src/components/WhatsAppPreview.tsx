"use client";

import React, { useState } from "react";
import { useCheckout } from "./CheckoutContext";

type MomentKey = "verse" | "reflection" | "prayer" | "practice";

export function WhatsAppPreview() {
  const [activeMoment, setActiveMoment] = useState<MomentKey>("verse");
  const { openCheckout } = useCheckout();

  const moments = [
    {
      id: "verse" as MomentKey,
      num: "01",
      name: "Ler",
      label: "LEITURA BÍBLICA",
      detail: "Salmos 23:1",
      content:
        "“O Senhor é o meu pastor; de nada terei falta. Ele me faz repousar em verdes pastos e me guia junto às águas tranquilas.”",
    },
    {
      id: "reflection" as MomentKey,
      num: "02",
      name: "Refletir",
      label: "REFLEXÃO",
      detail: "Um cuidado de cada vez",
      content:
        "Antes mesmo do café, é natural que a mente comece a listar as obrigações do dia, conversas difíceis ou prazos apertados. O salmista não nega os desafios, mas nos lembra onde repousa nossa confiança. O cuidado de Deus não anula o trabalho, mas nos dá serenidade para dar o próximo passo certo sem angústia.",
    },
    {
      id: "prayer" as MomentKey,
      num: "03",
      name: "Orar",
      label: "ORAÇÃO",
      detail: "Conversa com Deus",
      content:
        "“Senhor, entrego este início de manhã em tuas mãos. Antes de me envolver com tantas vozes e demandas, peço que a tua paz silencie as minhas inquietações. Guarda o meu coração na paciência e na clareza. Que onde houver pressa, eu escolha a confiança. Amém.”",
    },
    {
      id: "practice" as MomentKey,
      num: "04",
      name: "Levar para o dia",
      label: "APLICAÇÃO",
      detail: "Pequena atitude",
      content:
        "Escolha uma preocupação que insiste em roubar sua tranquilidade hoje e transforme-a numa oração de entrega. Em seguida, dê a atenção total àquilo que está ao seu alcance neste momento.",
    },
  ];

  return (
    <section
      className="py-20 md:py-28 bg-[#EFE9DC]/50 border-b border-[#E2DBD0]"
      id="demonstracao"
      aria-labelledby="preview-title"
    >
      <div className="mana-container">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 text-[#445343] text-xs font-semibold tracking-wider uppercase mb-3">
            <span className="text-[#B79B68]">✦</span>
            <span>A Mensagem</span>
          </div>

          <h2
            id="preview-title"
            className="font-serif text-[36px] sm:text-[46px] md:text-[52px] leading-[1.12] text-[#292A24] font-normal tracking-tight mb-4"
          >
            Veja o que pode chegar
            <br />
            <em className="italic text-[#445343]">amanhã às 06h.</em>
          </h2>

          <p className="text-base text-[#6F7067] font-light leading-relaxed">
            Uma mensagem completa dividida em quatro partes claras. Toque para
            explorar cada momento do devocional.
          </p>
        </div>

        {/* Interactive Phone & Tabs Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start max-w-5xl mx-auto">
          {/* Left Column: Interactive Moment Selector */}
          <div className="lg:col-span-5 flex flex-col gap-3">
            <span className="text-[11px] uppercase tracking-widest text-[#8E8F86] font-semibold px-2 mb-1">
              Estrutura do Devocional
            </span>

            {moments.map((m) => {
              const isSelected = activeMoment === m.id;
              return (
                <button
                  key={m.id}
                  type="button"
                  onClick={() => setActiveMoment(m.id)}
                  className={`text-left p-4 rounded-xl border transition-all duration-200 cursor-pointer flex items-center justify-between ${
                    isSelected
                      ? "bg-[#FFFDF8] border-[#B79B68] shadow-xs -translate-x-1"
                      : "bg-[#F7F4EC] border-[#E2DBD0] hover:border-[#B79B68]/40 hover:bg-[#FFFDF8]"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span
                      className={`font-serif italic text-lg ${
                        isSelected ? "text-[#445343] font-medium" : "text-[#8E8F86]"
                      }`}
                    >
                      {m.num}
                    </span>
                    <div>
                      <strong className="block text-[14px] text-[#292A24] font-medium">
                        {m.name}
                      </strong>
                      <span className="text-[12px] text-[#6F7067] font-light">
                        {m.detail}
                      </span>
                    </div>
                  </div>
                  <span
                    className={`text-sm transition-transform ${
                      isSelected ? "text-[#B79B68] translate-x-1" : "text-[#8E8F86]"
                    }`}
                  >
                    →
                  </span>
                </button>
              );
            })}

            <div className="p-4 rounded-xl bg-[#E8E4D8]/70 border border-[#DDD7C7] mt-3 text-[12px] text-[#6F7067] leading-relaxed">
              <span className="text-[#445343] font-medium block mb-1">
                ✦ No seu próprio ritmo
              </span>
              O texto é formatado com respiro para leitura rápida no café da
              manhã ou antes de sair de casa.
            </div>

            <button
              type="button"
              onClick={() => openCheckout("semiannual")}
              className="mt-2 w-full py-3 px-5 rounded-full bg-[#29352C] hover:bg-[#445343] text-[#FFFDF8] font-medium text-xs transition-colors cursor-pointer text-center"
            >
              Quero receber meu Maná Diário →
            </button>
          </div>

          {/* Right Column: Realistic WhatsApp Phone Viewport */}
          <div className="lg:col-span-7">
            <div className="rounded-[24px] overflow-hidden bg-[#E5DDD5] border-6 border-[#29352C] shadow-xl relative">
              {/* WhatsApp Chat Header */}
              <div className="bg-[#29352C] text-[#FFFDF8] px-4 py-3 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#EFE9DC] text-[#29352C] font-serif text-sm font-bold flex items-center justify-center">
                    ✦
                  </div>
                  <div>
                    <h3 className="text-[13px] font-semibold tracking-tight text-[#FFFDF8]">
                      Maná Diário
                    </h3>
                    <p className="text-[10px] text-[#C8D0C6]">
                      Online às 06:00
                    </p>
                  </div>
                </div>

                <span className="px-2 py-0.5 rounded-full bg-[#445343] text-[10px] text-[#C8D0C6]">
                  Oficial
                </span>
              </div>

              {/* WhatsApp Chat Wallpaper & Messages Body */}
              <div
                className="p-4 sm:p-6 space-y-4 min-h-[440px]"
                style={{
                  backgroundColor: "#EFEAE2",
                  backgroundImage:
                    "radial-gradient(#DDD5CA 1px, transparent 1px)",
                  backgroundSize: "20px 20px",
                }}
              >
                {/* Time Divider */}
                <div className="flex justify-center">
                  <span className="bg-[#E1D8CC]/90 text-[#6F7067] text-[10px] font-medium px-3 py-1 rounded-md">
                    Hoje · 06:00
                  </span>
                </div>

                {/* Main WhatsApp Message Bubble */}
                <article className="bg-[#FFFDF8] text-[#292A24] rounded-2xl rounded-tl-xs p-5 shadow-xs border border-[#E0D7C9] relative max-w-[96%] ml-auto sm:ml-2">
                  {/* Greeting */}
                  <div className="mb-3 pb-2 border-b border-[#F0EAE1]">
                    <span className="text-[12px] text-[#6F7067]">
                      Bom dia. Vamos com calma? ☀️
                    </span>
                    <h4 className="font-serif text-base sm:text-lg text-[#292A24] font-medium tracking-tight mt-0.5">
                      Antes de o dia ganhar pressa, vamos pausar com Deus?
                    </h4>
                  </div>

                  {/* Active Highlighted Moment Content */}
                  <div className="space-y-3.5">
                    {moments.map((m) => {
                      const isSelected = activeMoment === m.id;
                      return (
                        <div
                          key={m.id}
                          className={`p-3.5 rounded-xl transition-all duration-200 ${
                            isSelected
                              ? "bg-[#F7F2E6] border-l-3 border-[#B79B68]"
                              : "bg-transparent opacity-75"
                          }`}
                        >
                          <div className="flex items-center justify-between mb-1">
                            <span className="text-[10px] uppercase font-bold tracking-wider text-[#B79B68]">
                              {m.num} · {m.label}
                            </span>
                            <span className="text-[11px] text-[#6F7067] font-serif italic">
                              {m.detail}
                            </span>
                          </div>

                          <p
                            className={`text-[13px] leading-relaxed ${
                              m.id === "verse"
                                ? "font-serif italic text-base text-[#292A24]"
                                : "text-[#4A4B45] font-light"
                            }`}
                          >
                            {m.content}
                          </p>
                        </div>
                      );
                    })}
                  </div>

                  {/* Message Footer */}
                  <div className="flex items-center justify-between mt-4 pt-3 border-t border-[#F2EDE5] text-[11px] text-[#8E8F86]">
                    <span className="italic font-serif text-[#B79B68]">
                      Uma manhã de cada vez.
                    </span>
                    <div className="flex items-center gap-1 text-[#34B7F1] font-semibold">
                      <span className="text-[10px] text-[#6F7067]">06:00</span>
                      <span>✓✓</span>
                    </div>
                  </div>
                </article>

                <p className="text-center text-[11px] text-[#8E8F86] pt-1 font-light">
                  ✦ O conteúdo muda todos os dias. O momento de silêncio permanece.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
