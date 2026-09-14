"use client";

import React from "react";

export function PrivacySection() {
  const points = [
    {
      title: "Pagamento seguro",
      desc: "Suas transações são processadas de forma criptografada pelo gateway AXION Pay. Os dados de cartão não são armazenados pelo Maná Diário.",
    },
    {
      title: "Sem grupos no WhatsApp",
      desc: "Você recebe mensagens exclusivamente individuais e privadas. Ninguém terá acesso ao seu número de telefone ou ao seu momento de fé.",
    },
    {
      title: "Cancelamento simples",
      desc: "Você pode cancelar a qualquer momento sem burocracia ou taxas de rescisão, bastando enviar uma mensagem no WhatsApp.",
    },
    {
      title: "Respeito ao seu tempo",
      desc: "Seu número é utilizado apenas para a entrega do devocional e avisos essenciais da sua assinatura. Zero mensagens de spam ou publicidade.",
    },
  ];

  return (
    <section
      className="py-16 md:py-24 bg-[#EFE9DC]/30 border-b border-[#E2DBD0]"
      id="seguranca"
      aria-labelledby="privacy-title"
    >
      <div className="mana-container">
        <div className="max-w-3xl mx-auto border-t border-[#E2DBD0] pt-10">
          <div className="inline-flex items-center gap-2 text-[#445343] text-xs font-semibold tracking-wider uppercase mb-3">
            <span className="text-[#B79B68]">✦</span>
            <span>Tranquilidade</span>
          </div>

          <h2
            id="privacy-title"
            className="font-serif text-[28px] sm:text-[36px] leading-[1.15] text-[#292A24] font-normal tracking-tight mb-8"
          >
            Privacidade e segurança
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {points.map((p, idx) => (
              <div key={idx} className="flex flex-col">
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="text-[#445343] text-sm">✓</span>
                  <strong className="font-serif text-lg text-[#292A24] font-medium">
                    {p.title}
                  </strong>
                </div>
                <p className="text-xs sm:text-[13px] text-[#6F7067] font-light leading-relaxed">
                  {p.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
