"use client";

import React, { useState, useEffect } from "react";
import { useCheckout, PlanType } from "./CheckoutContext";
import { AxionChargeResponse } from "@/lib/axion-pay";

type CheckoutStep = "form" | "pix_payment" | "success";

export function CheckoutModal() {
  const { isCheckoutOpen, closeCheckout, selectedPlan, openCheckout } =
    useCheckout();

  const [step, setStep] = useState<CheckoutStep>("form");
  const [paymentMethod, setPaymentMethod] = useState<"cartao" | "pix">("pix");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [optIn, setOptIn] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [copiedPix, setCopiedPix] = useState(false);
  const [pixCharge, setPixCharge] = useState<AxionChargeResponse | null>(null);

  // Set default payment method when plan changes
  useEffect(() => {
    if (selectedPlan === "monthly") {
      setPaymentMethod("cartao");
    } else {
      setPaymentMethod("pix");
    }
  }, [selectedPlan]);

  // Prevent background scroll when modal is open
  useEffect(() => {
    if (isCheckoutOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isCheckoutOpen]);

  // Poll status if on pix_payment step
  useEffect(() => {
    if (step !== "pix_payment" || !pixCharge?.correlationId) return;

    const interval = setInterval(async () => {
      try {
        const res = await fetch(`/api/checkout/status/${pixCharge.correlationId}`);
        const data = await res.json();
        if (data.status === "PAID") {
          clearInterval(interval);
          setStep("success");
        }
      } catch (err) {
        // Silent poll error
      }
    }, 3500);

    return () => clearInterval(interval);
  }, [step, pixCharge]);

  if (!isCheckoutOpen) return null;

  // Mask Phone: (00) 00000-0000
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

  const planDetails = {
    monthly: {
      name: "Mensal",
      price: "R$ 29,90",
      period: "/mês",
      total: "R$ 29,90 por mês",
      badge: "Sem compromisso",
    },
    quarterly: {
      name: "Trimestral",
      price: "R$ 26,63",
      period: "/mês",
      total: "R$ 79,90 à vista",
      badge: "Economia de 11%",
    },
    semiannual: {
      name: "Semestral",
      price: "R$ 24,98",
      period: "/mês",
      total: "R$ 149,90 à vista",
      badge: "Melhor Escolha · 16% OFF",
    },
  };

  const currentPlan = planDetails[selectedPlan];

  const handleCopyPix = () => {
    if (!pixCharge?.brCode) return;
    navigator.clipboard.writeText(pixCharge.brCode);
    setCopiedPix(true);
    setTimeout(() => setCopiedPix(false), 3000);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !phone || !optIn) return;
    setLoading(true);
    setErrorMessage("");

    try {
      if (paymentMethod === "pix") {
        const res = await fetch("/api/checkout/pix", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            plan: selectedPlan,
            name,
            email,
            phone,
          }),
        });

        const data = await res.json();
        if (!res.ok || !data.success) {
          throw new Error(data.error || "Falha ao gerar cobrança PIX.");
        }

        setPixCharge(data.charge);
        setStep("pix_payment");
      } else {
        const res = await fetch("/api/checkout/card", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            plan: selectedPlan,
            name,
            email,
            phone,
          }),
        });

        const data = await res.json();
        if (!res.ok || !data.success) {
          throw new Error(data.error || "Falha ao processar assinatura.");
        }

        setStep("success");
      }
    } catch (err: any) {
      setErrorMessage(err.message || "Ocorreu um erro ao processar.");
    } finally {
      setLoading(false);
    }
  };

  const resetAndClose = () => {
    setStep("form");
    setPixCharge(null);
    setErrorMessage("");
    closeCheckout();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#29352C]/60 backdrop-blur-sm overflow-y-auto animate-fade-in"
      role="dialog"
      aria-modal="true"
      aria-labelledby="checkout-modal-title"
    >
      {/* Click outside backdrop to close */}
      <div
        className="fixed inset-0"
        onClick={resetAndClose}
        aria-hidden="true"
      />

      {/* Modal Container */}
      <div className="relative w-full max-w-xl bg-[#FFFDF8] border border-[#E2DBD0] rounded-3xl shadow-2xl z-10 overflow-hidden my-auto">
        {/* Modal Top Header */}
        <div className="bg-[#F7F4EC] border-b border-[#E2DBD0] px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-[#B79B68]">✦</span>
            <span className="font-serif text-lg font-medium text-[#292A24]">
              Maná Diário
            </span>
            <span className="text-[10px] text-[#6F7067] bg-[#EFE9DC] px-2 py-0.5 rounded-full border border-[#E2DBD0] ml-1">
              AXION Pay 🔒
            </span>
          </div>

          <button
            type="button"
            onClick={resetAndClose}
            className="w-8 h-8 rounded-full bg-[#EFE9DC] text-[#6F7067] hover:text-[#292A24] flex items-center justify-center text-sm font-semibold transition-colors cursor-pointer"
            aria-label="Fechar janela"
          >
            ✕
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 max-h-[85vh] overflow-y-auto">
          {/* STEP 1: PIX PAYMENT (QR CODE & COPIA E COLA) */}
          {step === "pix_payment" && pixCharge && (
            <div className="text-center py-4 space-y-6 animate-fade-in">
              <div>
                <span className="text-[11px] uppercase tracking-widest text-[#B79B68] font-semibold block mb-1">
                  ✦ Pagamento via PIX · AXION Pay
                </span>
                <h3
                  id="checkout-modal-title"
                  className="font-serif text-2xl sm:text-3xl text-[#292A24] font-normal tracking-tight"
                >
                  Pague com seu banco
                </h3>
                <p className="text-xs text-[#6F7067] mt-1 font-light">
                  Abra o aplicativo do seu banco e aponte a câmera ou copie o código.
                </p>
              </div>

              {/* QR Code Container */}
              <div className="bg-[#FFF] border-2 border-[#E2DBD0] p-4 rounded-2xl inline-block shadow-sm">
                {pixCharge.qrCodeUrl ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={pixCharge.qrCodeUrl}
                    alt="QR Code PIX AXION Pay"
                    className="w-48 h-48 mx-auto rounded-lg"
                  />
                ) : (
                  <div className="w-48 h-48 flex items-center justify-center bg-[#F7F4EC] text-xs text-[#6F7067]">
                    QR Code Gerado
                  </div>
                )}
                <span className="text-[11px] text-[#445343] font-semibold block mt-2">
                  Total: {currentPlan.total}
                </span>
              </div>

              {/* Pix Copia e Cola Field */}
              <div className="space-y-2 max-w-md mx-auto text-left">
                <label className="block text-xs font-medium text-[#292A24]">
                  Código PIX (Copia e Cola)
                </label>
                <div className="flex gap-2">
                  <input
                    type="text"
                    readOnly
                    value={pixCharge.brCode}
                    className="w-full px-3 py-2 text-xs font-mono bg-[#F7F4EC] border border-[#E2DBD0] rounded-xl text-[#292A24] focus:outline-none"
                  />
                  <button
                    type="button"
                    onClick={handleCopyPix}
                    className="px-4 py-2 bg-[#29352C] hover:bg-[#445343] text-[#FFFDF8] text-xs font-medium rounded-xl whitespace-nowrap transition-colors cursor-pointer"
                  >
                    {copiedPix ? "Copiado! ✓" : "Copiar"}
                  </button>
                </div>
              </div>

              {/* Status Polling Indicator */}
              <div className="flex items-center justify-center gap-2 text-xs text-[#6F7067] pt-2">
                <span className="w-2 h-2 rounded-full bg-[#B79B68] animate-ping" />
                <span>Aguardando confirmação do pagamento em tempo real...</span>
              </div>

              {/* Confirm / Simulate Button */}
              <div className="pt-2 flex flex-col sm:flex-row gap-3 justify-center">
                <button
                  type="button"
                  onClick={() => setStep("success")}
                  className="bg-[#29352C] hover:bg-[#445343] text-[#FFFDF8] font-medium text-xs px-6 py-3.5 rounded-full transition-colors shadow-md cursor-pointer"
                >
                  Já realizei o pagamento →
                </button>
                <button
                  type="button"
                  onClick={() => setStep("form")}
                  className="py-3 px-5 rounded-full border border-[#E2DBD0] text-xs text-[#6F7067] hover:text-[#292A24] transition-colors"
                >
                  Voltar e alterar dados
                </button>
              </div>
            </div>
          )}

          {/* STEP 2: SUCCESS CELEBRATION */}
          {step === "success" && (
            <div className="text-center py-6 space-y-6 animate-fade-in">
              <div className="w-16 h-16 rounded-full bg-[#E8F0E8] text-[#29352C] font-serif text-2xl font-bold flex items-center justify-center mx-auto shadow-sm">
                🌤
              </div>

              <div>
                <span className="text-xs uppercase tracking-widest text-[#B79B68] font-semibold block mb-1">
                  ✦ Assinatura Confirmada · AXION Pay
                </span>
                <h3
                  id="checkout-modal-title"
                  className="font-serif text-3xl sm:text-4xl text-[#292A24] font-normal tracking-tight"
                >
                  Tudo pronto.
                  <br />
                  <em className="italic text-[#445343]">
                    Amanhã começa uma nova manhã.
                  </em>
                </h3>
              </div>

              <div className="bg-[#F7F4EC] border border-[#E2DBD0] rounded-2xl p-5 text-left max-w-md mx-auto space-y-2.5 text-xs text-[#6F7067]">
                <div className="flex justify-between pb-2 border-b border-[#E8E2D5]">
                  <span>Destinatário:</span>
                  <strong className="text-[#292A24]">{name}</strong>
                </div>
                <div className="flex justify-between pb-2 border-b border-[#E8E2D5]">
                  <span>WhatsApp cadastrado:</span>
                  <strong className="text-[#292A24]">{phone}</strong>
                </div>
                <div className="flex justify-between pb-2 border-b border-[#E8E2D5]">
                  <span>Plano escolhido:</span>
                  <strong className="text-[#292A24]">
                    {currentPlan.name} ({currentPlan.total})
                  </strong>
                </div>
                <div className="flex justify-between pt-1">
                  <span>Primeiro envio:</span>
                  <strong className="text-[#445343]">Amanhã às 06:00</strong>
                </div>
              </div>

              <p className="text-xs text-[#6F7067] max-w-sm mx-auto font-light leading-relaxed">
                Você receberá uma mensagem de boas-vindas no número{" "}
                <strong className="text-[#292A24]">{phone}</strong>. Salve o
                contato do Maná Diário para garantir a entrega sem interrupções.
              </p>

              <div className="pt-2 flex flex-col sm:flex-row gap-3 justify-center">
                <a
                  href={`https://wa.me/5511999999999?text=Ol%C3%A1!%20Acabei%20de%20assinar%20o%20Man%C3%A1%20Di%C3%A1rio%20com%20o%20nome%20${encodeURIComponent(
                    name
                  )}.`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-[#29352C] hover:bg-[#445343] text-[#FFFDF8] font-medium text-sm px-6 py-3.5 rounded-full transition-colors shadow-md"
                >
                  <span>Abrir conversa no WhatsApp</span>
                  <span>↗</span>
                </a>

                <button
                  type="button"
                  onClick={resetAndClose}
                  className="py-3 px-5 rounded-full border border-[#E2DBD0] text-xs text-[#6F7067] hover:text-[#292A24] transition-colors"
                >
                  Concluir e voltar ao site
                </button>
              </div>
            </div>
          )}

          {/* STEP 3: INITIAL DATA ENTRY FORM */}
          {step === "form" && (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <span className="text-[11px] uppercase tracking-widest text-[#B79B68] font-semibold block mb-1">
                  Etapa 01 de 02
                </span>
                <h3
                  id="checkout-modal-title"
                  className="font-serif text-2xl sm:text-3xl text-[#292A24] font-normal tracking-tight"
                >
                  Confirme o seu plano
                </h3>
              </div>

              {errorMessage && (
                <div className="p-3.5 rounded-xl bg-red-50 border border-red-200 text-xs text-red-700">
                  {errorMessage}
                </div>
              )}

              {/* Plan Switcher Pills */}
              <div className="grid grid-cols-3 gap-2.5">
                {(["monthly", "quarterly", "semiannual"] as PlanType[]).map(
                  (planKey) => {
                    const isSelected = selectedPlan === planKey;
                    const p = planDetails[planKey];
                    return (
                      <button
                        key={planKey}
                        type="button"
                        onClick={() => openCheckout(planKey)}
                        className={`p-3 rounded-xl border text-left transition-all cursor-pointer flex flex-col justify-between ${
                          isSelected
                            ? "bg-[#F7F2E6] border-[#B79B68] ring-1 ring-[#B79B68] shadow-xs"
                            : "bg-[#FFFDF8] border-[#E2DBD0] hover:border-[#B79B68]/60"
                        }`}
                      >
                        <div>
                          <span
                            className={`block text-[11px] font-semibold ${
                              isSelected ? "text-[#B79B68]" : "text-[#8E8F86]"
                            }`}
                          >
                            {p.name}
                          </span>
                          <strong className="font-serif text-base text-[#292A24] block mt-0.5">
                            {p.price}
                          </strong>
                        </div>
                        <span className="text-[9px] text-[#6F7067] block mt-2 font-light">
                          {p.badge}
                        </span>
                      </button>
                    );
                  }
                )}
              </div>

              {/* Payment Method Selector */}
              <div className="space-y-2">
                <label className="text-[12px] font-medium text-[#292A24] block">
                  Forma de pagamento (Gateway AXION Pay)
                </label>
                <div className="grid grid-cols-2 gap-3">
                  {selectedPlan === "monthly" ? (
                    <>
                      <button
                        type="button"
                        onClick={() => setPaymentMethod("cartao")}
                        className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                          paymentMethod === "cartao"
                            ? "bg-[#F7F2E6] border-[#B79B68] ring-1 ring-[#B79B68]"
                            : "bg-[#FFFDF8] border-[#E2DBD0]"
                        }`}
                      >
                        <strong className="text-xs font-semibold text-[#292A24] block">
                          💳 Cartão de Crédito
                        </strong>
                        <span className="text-[10px] text-[#6F7067] font-light">
                          Assinatura mensal recorrente
                        </span>
                      </button>

                      <button
                        type="button"
                        onClick={() => setPaymentMethod("pix")}
                        className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                          paymentMethod === "pix"
                            ? "bg-[#F7F2E6] border-[#B79B68] ring-1 ring-[#B79B68]"
                            : "bg-[#FFFDF8] border-[#E2DBD0]"
                        }`}
                      >
                        <strong className="text-xs font-semibold text-[#292A24] block">
                          ⚡ PIX Imediato
                        </strong>
                        <span className="text-[10px] text-[#6F7067] font-light">
                          Pagamento a cada mês
                        </span>
                      </button>
                    </>
                  ) : (
                    <div className="col-span-2 p-3 rounded-xl border border-[#B79B68] bg-[#F7F2E6] flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="text-sm">⚡</span>
                        <div>
                          <strong className="text-xs font-semibold text-[#292A24] block">
                            PIX Instantâneo com Desconto Especial
                          </strong>
                          <span className="text-[10px] text-[#6F7067]">
                            QR Code gerado na hora via AXION Pay
                          </span>
                        </div>
                      </div>
                      <span className="text-[10px] font-bold text-[#445343] bg-[#E8F0E8] px-2 py-0.5 rounded-full">
                        Ativo
                      </span>
                    </div>
                  )}
                </div>
              </div>

              {/* Customer Information Inputs */}
              <div className="space-y-3.5 pt-2">
                <span className="text-[11px] uppercase tracking-widest text-[#B79B68] font-semibold block">
                  Etapa 02 de 02 · Seus Dados
                </span>

                <div>
                  <label className="block text-xs font-medium text-[#292A24] mb-1">
                    Nome Completo
                  </label>
                  <input
                    type="text"
                    required
                    autoComplete="name"
                    placeholder="Como podemos te chamar?"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#E2DBD0] bg-[#FFFDF8] text-sm text-[#292A24] focus:outline-none focus:border-[#B79B68] focus:ring-1 focus:ring-[#B79B68]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-[#292A24] mb-1">
                    Seu E-mail
                  </label>
                  <input
                    type="email"
                    required
                    autoComplete="email"
                    placeholder="voce@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#E2DBD0] bg-[#FFFDF8] text-sm text-[#292A24] focus:outline-none focus:border-[#B79B68] focus:ring-1 focus:ring-[#B79B68]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-[#292A24] mb-1">
                    WhatsApp com DDD
                  </label>
                  <input
                    type="tel"
                    required
                    inputMode="tel"
                    placeholder="(00) 00000-0000"
                    value={phone}
                    onChange={handlePhoneChange}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#E2DBD0] bg-[#FFFDF8] text-sm text-[#292A24] focus:outline-none focus:border-[#B79B68] focus:ring-1 focus:ring-[#B79B68]"
                  />
                  <span className="text-[10px] text-[#8E8F86] mt-1 block">
                    Confira o número — é onde você receberá seu devocional às 06h.
                  </span>
                </div>

                {/* Secure Card Notice if Cartao */}
                {paymentMethod === "cartao" && selectedPlan === "monthly" && (
                  <div className="p-3.5 rounded-xl border border-[#E2DBD0] bg-[#F7F4EC] space-y-1">
                    <span className="text-[11px] font-medium text-[#292A24] block">
                      Dados do Cartão (Processamento Seguro AXION Pay)
                    </span>
                    <div className="flex items-center gap-2 text-xs text-[#8E8F86] py-1">
                      <span>🔒</span>
                      <span>Tokenização e criptografia de ponta a ponta.</span>
                    </div>
                  </div>
                )}
              </div>

              {/* Consent and LGPD Checkbox */}
              <label className="flex items-start gap-2.5 cursor-pointer pt-1">
                <input
                  type="checkbox"
                  required
                  checked={optIn}
                  onChange={(e) => setOptIn(e.target.checked)}
                  className="mt-1 accent-[#445343] w-4 h-4 rounded cursor-pointer"
                />
                <span className="text-[11px] text-[#6F7067] leading-relaxed">
                  Concordo em receber meu devocional no WhatsApp e aceito os{" "}
                  <a
                    href="/termos"
                    target="_blank"
                    className="underline text-[#292A24]"
                  >
                    Termos de Uso
                  </a>{" "}
                  e a{" "}
                  <a
                    href="/privacidade"
                    target="_blank"
                    className="underline text-[#292A24]"
                  >
                    Política de Privacidade
                  </a>
                  .
                </span>
              </label>

              {/* Submit CTA */}
              <button
                type="submit"
                disabled={!optIn || !name || !email || !phone || loading}
                className="w-full py-4 rounded-full bg-[#29352C] hover:bg-[#445343] disabled:opacity-50 text-[#FFFDF8] font-medium text-sm transition-all duration-200 shadow-md hover:shadow-lg flex items-center justify-center gap-2 cursor-pointer disabled:cursor-not-allowed"
              >
                {loading ? (
                  <span>Processando na AXION Pay...</span>
                ) : (
                  <>
                    <span>
                      {selectedPlan === "monthly"
                        ? paymentMethod === "cartao"
                          ? "Assinar por R$ 29,90/mês"
                          : "Pagar R$ 29,90 via PIX"
                        : selectedPlan === "quarterly"
                        ? "Gerar PIX de R$ 79,90"
                        : "Gerar PIX de R$ 149,90"}
                    </span>
                    <span className="text-[#B79B68]">→</span>
                  </>
                )}
              </button>

              {/* Security reassurance */}
              <p className="text-center text-[10px] text-[#8E8F86] flex items-center justify-center gap-1.5 pt-1">
                <span>🔒</span>
                <span>
                  AXION Pay · Pagamento seguro e criptografado · Cancele enviando SAIR
                </span>
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
