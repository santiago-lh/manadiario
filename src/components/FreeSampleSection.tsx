"use client";

import React, { useState } from "react";

export function FreeSampleSection() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/\D/g, "");
    if (value.length > 11) value = value.slice(0, 11);

    if (value.length > 6) {
      value = `(${value.slice(0, 2)}) ${value.slice(2, 7)}-${value.slice(7)}`;
    } else if (value.length > 2) {
      value = `(${value.slice(0, 2)}) ${value.slice(2)}`;
    } else if (value.length > 0) {
      value = `(${value}`;
    }
    setPhone(value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone) return;

    // [PONTO DE INTEGRAÇÃO BACKEND]:
    // Conectar aqui com o webhook/endpoint de captura de lead (ex.: /api/leads/free-sample)
    // Exemplo: await fetch('/api/leads/free-sample', { method: 'POST', body: JSON.stringify({ name, phone }) });

    setSubmitted(true);
  };

  return (
    <section
      className="py-16 md:py-24 bg-[#EFE9DC]/40 border-b border-[#E2DBD0]"
      id="amostra"
      aria-labelledby="sample-title"
    >
      <div className="mana-container">
        <div className="max-w-xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 text-[#445343] text-xs font-semibold tracking-wider uppercase mb-2">
            <span className="text-[#B79B68]">✦</span>
            <span>Experimente Primeiro</span>
          </div>

          <h2
            id="sample-title"
            className="font-serif text-[30px] sm:text-[38px] leading-[1.15] text-[#292A24] font-normal tracking-tight mb-3"
          >
            Receba gratuitamente
            <br />
            <em className="italic text-[#445343]">o Maná de amanhã.</em>
          </h2>

          <p className="text-sm text-[#6F7067] font-light leading-relaxed mb-8">
            Conheça o formato na prática. Informe seu nome e WhatsApp para
            receber a próxima mensagem matinal de cortesia.
          </p>

          {submitted ? (
            <div className="p-6 rounded-2xl bg-[#FFFDF8] border border-[#E2DBD0] text-center space-y-2 animate-fade-in">
              <span className="text-xl text-[#445343]">✓</span>
              <h3 className="font-serif text-lg text-[#292A24] font-medium">
                Tudo pronto, {name}!
              </h3>
              <p className="text-xs text-[#6F7067] font-light">
                Amanhã pontualmente às 06:00 você receberá o Maná demonstrativo
                no número {phone}.
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto"
            >
              <input
                type="text"
                required
                placeholder="Seu nome"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="flex-1 px-4 py-3 rounded-full border border-[#E2DBD0] bg-[#FFFDF8] text-xs sm:text-sm text-[#292A24] focus:outline-none focus:border-[#B79B68]"
              />
              <input
                type="tel"
                required
                inputMode="tel"
                placeholder="(00) 00000-0000"
                value={phone}
                onChange={handlePhoneChange}
                className="flex-1 px-4 py-3 rounded-full border border-[#E2DBD0] bg-[#FFFDF8] text-xs sm:text-sm text-[#292A24] focus:outline-none focus:border-[#B79B68]"
              />
              <button
                type="submit"
                className="px-6 py-3 rounded-full bg-[#29352C] hover:bg-[#445343] text-[#FFFDF8] text-xs font-medium whitespace-nowrap transition-colors cursor-pointer"
              >
                Quero receber
              </button>
            </form>
          )}

          <p className="text-[11px] text-[#8E8F86] font-light mt-4">
            Zero spam. Seu número não é adicionado em grupos nem compartilhado.
          </p>
        </div>
      </div>
    </section>
  );
}
