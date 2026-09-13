"use client";

import React, { useEffect, useState } from "react";

export function MobileCTA() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const offerElement = document.getElementById("assinatura");
    if (!offerElement) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setVisible(!entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    observer.observe(offerElement);
    return () => observer.disconnect();
  }, []);

  if (!visible) return null;

  return (
    <div className="md-mobile-cta">
      <div>
        <strong>Seu Maná Diário</strong>
        <span>R$ 29,90 / mês</span>
      </div>
      <a href="#assinatura">
        Quero receber <span aria-hidden="true">↗</span>
      </a>
    </div>
  );
}
