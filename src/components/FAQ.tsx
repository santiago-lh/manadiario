"use client";

import React, { useState } from "react";

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "Que horas o Maná chega?",
      a: "O devocional é enviado todas as manhãs pontualmente às 06:00 (horário de Brasília). Se você assinar hoje, sua primeira mensagem chegará amanhã cedo.",
    },
    {
      q: "Preciso instalar algum aplicativo?",
      a: "Não. O Maná chega diretamente no seu aplicativo do WhatsApp, onde você já conversa com sua família e amigos.",
    },
    {
      q: "Como recebo as mensagens?",
      a: "A mensagem é enviada de forma 100% individual e privada. Você não entra em grupos nem recebe notificações de terceiros.",
    },
    {
      q: "Posso cancelar quando quiser?",
      a: "Sim, com total liberdade. Não há contrato de fidelidade nem multas. Basta enviar uma mensagem no próprio WhatsApp solicitando o cancelamento.",
    },
    {
      q: "O Maná substitui minha leitura da Bíblia?",
      a: "Não. O Maná é um facilitador para incentivar sua rotina com Deus antes da correria do dia. Ele apoia, mas não substitui seus momentos de estudo pessoal da Palavra.",
    },
    {
      q: "Meu número ficará visível para outras pessoas?",
      a: "Nunca. O envio é estritamente de um para um. Nenhum outro assinante tem acesso ao seu número ou aos seus dados.",
    },
    {
      q: "Como funciona o pagamento?",
      a: "O pagamento é processado com total segurança via AXION Pay por cartão de crédito ou PIX, dependendo do plano escolhido.",
    },
    {
      q: "O que acontece se eu trocar meu número?",
      a: "Basta entrar em contato com nosso suporte informando o número antigo e o novo para atualizarmos seu cadastro sem qualquer custo.",
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
          {/* Left Column */}
          <div className="lg:col-span-5 lg:sticky lg:top-28">
            <div className="inline-flex items-center gap-2 text-[#445343] text-xs font-semibold tracking-wider uppercase mb-3">
              <span className="text-[#B79B68]">✦</span>
              <span>Dúvidas Frequentes</span>
            </div>

            <h2
              id="faq-title"
              className="font-serif text-[34px] sm:text-[44px] leading-[1.12] text-[#292A24] font-normal tracking-tight mb-4"
            >
              Perguntas que
              <br />
              <em className="italic text-[#445343]">costumam nos fazer.</em>
            </h2>

            <p className="text-sm sm:text-base text-[#6F7067] font-light leading-relaxed mb-6">
              Transparência e clareza para você começar com tranquilidade. Se
              restar qualquer dúvida, fale conosco.
            </p>
          </div>

          {/* Right Column: Clean Minimalist Accordion */}
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
                    <span className="font-serif text-base sm:text-lg text-[#292A24] group-hover:text-[#445343] transition-colors font-medium">
                      {item.q}
                    </span>
                    <span
                      className={`font-serif text-xl text-[#B79B68] transition-transform duration-200 flex-shrink-0 ${
                        isOpen ? "rotate-45" : ""
                      }`}
                    >
                      +
                    </span>
                  </button>

                  {isOpen && (
                    <div className="pb-5 pr-4 text-xs sm:text-sm text-[#6F7067] font-light leading-relaxed animate-fade-in">
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
