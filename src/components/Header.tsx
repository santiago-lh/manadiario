"use client";

import React, { useEffect, useState } from "react";
import { useCheckout } from "./CheckoutContext";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const { openCheckout } = useCheckout();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? "bg-[#F7F4EC]/95 backdrop-blur-md border-b border-[#E2DBD0] shadow-sm py-3.5"
          : "bg-transparent py-5"
      }`}
    >
      <div className="mana-container flex items-center justify-between">
        {/* Brand Logo */}
        <a
          href="/"
          className="flex items-center gap-2 group text-[#292A24] focus:outline-none focus:ring-2 focus:ring-[#B79B68]/40 rounded-md"
          aria-label="Maná Diário, página inicial"
        >
          <span className="text-[#B79B68] text-base group-hover:scale-110 transition-transform duration-200">
            ✦
          </span>
          <span className="font-serif tracking-tight text-xl sm:text-2xl font-semibold">
            Maná <em className="font-normal italic text-[#445343]">Diário</em>
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav
          className="hidden md:flex items-center gap-8 text-[13px] text-[#6F7067] font-medium"
          aria-label="Navegação principal"
        >
          <a
            href="#problema"
            className="hover:text-[#292A24] transition-colors py-1 hover:underline underline-offset-4 decoration-[#B79B68]"
          >
            A proposta
          </a>
          <a
            href="#mensagem"
            className="hover:text-[#292A24] transition-colors py-1 hover:underline underline-offset-4 decoration-[#B79B68]"
          >
            A mensagem
          </a>
          <a
            href="#como-funciona"
            className="hover:text-[#292A24] transition-colors py-1 hover:underline underline-offset-4 decoration-[#B79B68]"
          >
            Como funciona
          </a>
          <a
            href="#depoimentos"
            className="hover:text-[#292A24] transition-colors py-1 hover:underline underline-offset-4 decoration-[#B79B68]"
          >
            Depoimentos
          </a>
          <a
            href="#planos"
            className="hover:text-[#292A24] transition-colors py-1 hover:underline underline-offset-4 decoration-[#B79B68]"
          >
            Planos
          </a>
          <a
            href="#duvidas"
            className="hover:text-[#292A24] transition-colors py-1 hover:underline underline-offset-4 decoration-[#B79B68]"
          >
            Dúvidas
          </a>
        </nav>

        {/* Action Button */}
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => openCheckout("semiannual")}
            className="bg-[#29352C] hover:bg-[#445343] text-[#FFFDF8] text-[13px] font-medium px-5 py-2.5 rounded-full transition-all duration-200 hover:shadow-md hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
          >
            Começar
          </button>
        </div>
      </div>
    </header>
  );
}
