"use client";

import React, { useEffect, useState } from "react";
import { useCheckout } from "./CheckoutContext";

export function StickyMobileCTA() {
  const [visible, setVisible] = useState(false);
  const { isCheckoutOpen, openCheckout } = useCheckout();

  useEffect(() => {
    const handleScroll = () => {
      // Show sticky bar after scrolling past 450px (beyond hero fold)
      setVisible(window.scrollY > 450);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!visible || isCheckoutOpen) return null;

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-30 p-3 bg-[#FFFDF8]/95 backdrop-blur-md border-t border-[#E2DBD0] shadow-xl animate-fade-in">
      <div className="flex items-center justify-between gap-3">
        <div className="flex flex-col">
          <div className="flex items-center gap-1">
            <span className="text-[#B79B68] text-xs">✦</span>
            <span className="font-serif font-semibold text-sm text-[#292A24]">
              Maná Diário
            </span>
          </div>
          <span className="text-[11px] text-[#6F7067]">
            Às 06h no seu WhatsApp
          </span>
        </div>

        <button
          type="button"
          onClick={() => openCheckout("semiannual")}
          className="bg-[#29352C] hover:bg-[#445343] text-[#FFFDF8] text-xs font-semibold px-4 py-2.5 rounded-full transition-all duration-200 shadow-md cursor-pointer whitespace-nowrap"
        >
          Quero receber meu Maná Diário
        </button>
      </div>
    </div>
  );
}
