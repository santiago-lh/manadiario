"use client";

import React from "react";

export default function GlobalError({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="pt-BR">
      <body className="bg-[#F7F4EC] text-[#292A24] flex items-center justify-center min-h-screen p-6 font-sans">
        <div className="text-center max-w-md bg-[#FFFDF8] border border-[#E2DBD0] p-8 rounded-2xl shadow-sm">
          <span className="text-[#B79B68] text-2xl block mb-2">✦</span>
          <h2 className="font-serif text-2xl mb-2 font-medium">
            Algo inesperado aconteceu
          </h2>
          <p className="text-sm text-[#6F7067] mb-6 font-light">
            Não foi possível carregar esta página no momento.
          </p>
          <button
            type="button"
            onClick={() => reset()}
            className="px-6 py-2.5 rounded-full bg-[#29352C] text-[#FFFDF8] text-xs font-medium hover:bg-[#445343] transition-colors"
          >
            Tentar novamente
          </button>
        </div>
      </body>
    </html>
  );
}
