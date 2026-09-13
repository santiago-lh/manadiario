"use client";

import React from "react";

export function TrustSection() {
  const trustPoints = [
    {
      title: "Pagamento 100% Seguro",
      desc: "Processamento criptografado de ponta a ponta via Stripe e chaves oficiais do Banco Central para PIX.",
    },
    {
      title: "Cancelamento Imediato",
      desc: "Sem ligações chatas ou burocracia. Basta enviar a palavra SAIR no WhatsApp a qualquer momento.",
    },
    {
      title: "Sem Aplicativo Adicional",
      desc: "Você não gasta memória do celular nem precisa gerenciar mais um aplicativo com notificações irritantes.",
    },
    {
      title: "Sem Grupos Barulhentos",
      desc: "Ninguém vê o seu número. A mensagem chega de forma privada, individual e discreta na sua conversa.",
    },
    {
      title: "Curadoria Bíblica Séria",
      desc: "Todas as passagens são fundamentadas nas Escrituras Sagradas, com foco em edificação, fé e prática de vida.",
    },
    {
      title: "Suporte Humano no WhatsApp",
      desc: "Se precisar trocar de número, tirar dúvidas ou alterar sua forma de pagamento, nossa equipe está a uma mensagem de distância.",
    },
  ];

  return (
    <section
      className="py-16 md:py-24 bg-[#EFE9DC]/30 border-b border-[#E2DBD0]"
      id="confianca"
      aria-labelledby="trust-title"
    >
      <div className="mana-container">
        {/* Header */}
        <div className="max-w-2xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E2DBD0] text-[#445343] text-[11px] font-semibold tracking-wider uppercase mb-3">
            <span className="text-[#B79B68]">✦</span>
            <span>Garantias e Transparência</span>
          </div>

          <h2
            id="trust-title"
            className="font-serif text-[34px] sm:text-[42px] leading-[1.12] text-[#292A24] font-normal tracking-tight mb-3"
          >
            Assine com tranquilidade
            <br />
            <em className="italic text-[#445343]">e total segurança.</em>
          </h2>

          <p className="text-sm sm:text-base text-[#6F7067] font-light leading-relaxed">
            Seu tempo e sua privacidade são sagrados. Desenvolvemos o Maná Diário
            para ser uma experiência limpa do início ao fim.
          </p>
        </div>

        {/* 6 Trust Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {trustPoints.map((item, idx) => (
            <div
              key={idx}
              className="bg-[#FFFDF8] border border-[#E2DBD0] rounded-xl p-5 shadow-xs flex items-start gap-3.5"
            >
              <div className="w-7 h-7 rounded-full bg-[#E8F0E8] text-[#29352C] flex items-center justify-center font-bold text-xs flex-shrink-0 mt-0.5">
                ✓
              </div>
              <div>
                <h3 className="font-serif text-lg text-[#292A24] font-medium mb-1">
                  {item.title}
                </h3>
                <p className="text-xs text-[#6F7067] font-light leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Editorial Transparency Note */}
        <div className="p-6 rounded-2xl bg-[#F4EFE6] border border-[#DDD5C5] text-xs text-[#6F7067] leading-relaxed max-w-4xl mx-auto flex flex-col sm:flex-row items-center sm:items-start gap-4">
          <span className="text-[#B79B68] text-2xl flex-shrink-0">✦</span>
          <div>
            <strong className="text-[#292A24] block mb-1 font-medium">
              Nota sobre nossa preparação editorial
            </strong>
            <p className="font-light">
              Cada reflexão parte de uma passagem bíblica selecionada e passa por um
              processo estruturado de preparação e revisão editorial. Ferramentas
              de tecnologia moderna auxiliam esse processo para garantir consistência,
              pontualidade e qualidade em cada manhã.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
