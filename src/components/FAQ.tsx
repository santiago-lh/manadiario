"use client";

import React, { useState } from "react";

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "Como funciona a assinatura do Maná Diário?",
      a: "Após confirmar seu plano e cadastrar seu WhatsApp, nosso sistema registra seu número. A partir da manhã seguinte, você passa a receber pontualmente às 06:00 o seu devocional diário contendo um versículo, reflexão prática, oração guiada e aplicação para o dia.",
    },
    {
      q: "Quando recebo minha primeira mensagem?",
      a: "Se você assinar até as 23h59 de hoje, sua primeira mensagem chegará amanhã pontualmente às 06:00. O envio acontece todos os dias, de domingo a domingo.",
    },
    {
      q: "Preciso instalar algum aplicativo no celular?",
      a: "Não. Essa é uma das principais vantagens do Maná Diário. Você recebe tudo direto no aplicativo do WhatsApp, onde já conversa com sua família e amigos todos os dias.",
    },
    {
      q: "É um grupo ou uma mensagem individual e privada?",
      a: "É 100% individual e privada. Ninguém terá acesso ao seu número de telefone, não há notificações de pessoas estranhas e nem conversas paralelas. É apenas você e o seu momento com Deus.",
    },
    {
      q: "Posso cancelar quando quiser? Como funciona?",
      a: "Sim, com total liberdade e sem multas. Nos planos recorrentes, basta enviar a palavra SAIR no WhatsApp ou entrar em contato com nosso suporte para suspender as cobranças futuras imediatamente.",
    },
    {
      q: "Quais são as formas de pagamento disponíveis?",
      a: "Aceitamos cartão de crédito (com renovação automática mensal) e PIX à vista para todos os períodos (mensal, trimestral ou semestral com desconto exclusivo).",
    },
    {
      q: "O conteúdo é sempre diferente todos os dias?",
      a: "Sim. Cada manhã traz uma passagem bíblica inédita, com uma reflexão direcionada e uma nova oração, mantendo o hábito vivo, renovado e inspirador durante todo o ano.",
    },
  ];

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section
      className="py-20 md:py-28 bg-[#F7F4EC] border-b border-[#E2DBD0]"
      id="duvidas"
      aria-labelledby="faq-title"
    >
      <div className="mana-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start max-w-5xl mx-auto">
          {/* Left Column: Title & Note */}
          <div className="lg:col-span-5 lg:sticky lg:top-28">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EFE9DC] text-[#445343] text-[11px] font-semibold tracking-wider uppercase mb-4">
              <span className="text-[#B79B68]">✦</span>
              <span>Dúvidas Frequentes</span>
            </div>

            <h2
              id="faq-title"
              className="font-serif text-[38px] sm:text-[46px] leading-[1.12] text-[#292A24] font-normal tracking-tight mb-4"
            >
              Perguntas que
              <br />
              <em className="italic text-[#445343]">costumam nos fazer.</em>
            </h2>

            <p className="text-sm sm:text-base text-[#6F7067] font-light leading-relaxed mb-6">
              Transparência é fundamental para nós. Se ainda restar qualquer dúvida,
              fale com nosso atendimento no WhatsApp.
            </p>

            <a
              href="https://wa.me/5511999999999?text=Ol%C3%A1%2C%20tenho%20uma%20d%C3%BAvida%20sobre%20o%20Man%C3%A1%20Di%C3%A1rio"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-xs font-medium text-[#29352C] hover:text-[#445343] underline underline-offset-4"
            >
              <span>Conversar com o suporte no WhatsApp</span>
              <span>↗</span>
            </a>
          </div>

          {/* Right Column: Minimalist Accordion */}
          <div className="lg:col-span-7 border-t border-[#E2DBD0]">
            {faqs.map((item, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div key={idx} className="border-b border-[#E2DBD0]">
                  <button
                    type="button"
                    onClick={() => toggle(idx)}
                    className="w-full py-5 text-left flex items-center justify-between gap-4 group cursor-pointer"
                    aria-expanded={isOpen}
                  >
                    <span className="font-serif text-lg sm:text-xl text-[#292A24] group-hover:text-[#445343] transition-colors font-medium">
                      {item.q}
                    </span>
                    <span
                      className={`font-serif text-2xl text-[#B79B68] transition-transform duration-200 flex-shrink-0 ${
                        isOpen ? "rotate-45" : ""
                      }`}
                    >
                      +
                    </span>
                  </button>

                  {isOpen && (
                    <div className="pb-6 pr-4 text-sm text-[#6F7067] font-light leading-relaxed animate-fade-in">
                      {item.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
