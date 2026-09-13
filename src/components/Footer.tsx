"use client";

import React from "react";

export function Footer() {
  return (
    <footer className="bg-[#F7F4EC] border-t border-[#E2DBD0] py-14 text-xs text-[#6F7067]">
      <div className="mana-container">
        {/* Top row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start mb-12">
          <div className="md:col-span-5">
            <a
              href="/"
              className="inline-flex items-center gap-2 text-[#292A24] mb-3 group"
            >
              <span className="text-[#B79B68] text-base group-hover:scale-110 transition-transform">
                ✦
              </span>
              <span className="font-serif tracking-tight text-xl font-semibold">
                Maná <em className="font-normal italic text-[#445343]">Diário</em>
              </span>
            </a>
            <p className="text-xs text-[#6F7067] max-w-sm leading-relaxed font-light">
              Um ritual diário de fé para começar melhor todas as manhãs.
              Mensagens matinais formatadas e enviadas diretamente para o seu
              WhatsApp.
            </p>
          </div>

          {/* Links navigation */}
          <div className="md:col-span-7 flex flex-wrap gap-x-8 gap-y-4 md:justify-end text-[13px]">
            <a
              href="#problema"
              className="hover:text-[#292A24] transition-colors"
            >
              A Proposta
            </a>
            <a
              href="#mensagem"
              className="hover:text-[#292A24] transition-colors"
            >
              A Mensagem
            </a>
            <a
              href="#como-funciona"
              className="hover:text-[#292A24] transition-colors"
            >
              Como Funciona
            </a>
            <a
              href="#planos"
              className="hover:text-[#292A24] transition-colors"
            >
              Planos
            </a>
            <a
              href="#duvidas"
              className="hover:text-[#292A24] transition-colors"
            >
              Dúvidas
            </a>
            <a
              href="/termos"
              className="hover:text-[#292A24] transition-colors underline underline-offset-2"
            >
              Termos de Uso
            </a>
            <a
              href="/privacidade"
              className="hover:text-[#292A24] transition-colors underline underline-offset-2"
            >
              Privacidade
            </a>
            <a
              href="/exclusao-de-dados"
              className="hover:text-[#292A24] transition-colors underline underline-offset-2"
            >
              Exclusão de Dados
            </a>
          </div>
        </div>

        {/* Bottom row */}
        <div className="pt-8 border-t border-[#E2DBD0] flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-[#8E8F86]">
          <p>
            © {new Date().getFullYear()} Maná Diário. Todos os direitos reservados.
          </p>

          <p className="flex items-center gap-2">
            <span>Para cancelar sua assinatura, basta enviar</span>
            <code className="bg-[#EFE9DC] px-1.5 py-0.5 rounded text-[#292A24] font-mono font-medium">
              SAIR
            </code>
            <span>no WhatsApp.</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
