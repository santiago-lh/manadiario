"use client";

import React, { useState } from "react";

type PlanType = "monthly" | "quarterly" | "semiannual";
type PaymentMethod = "cartao" | "pix";

export function CheckoutOffer() {
  const [plano, setPlano] = useState<PlanType>("monthly");
  const [meio, setMeio] = useState<PaymentMethod>("cartao");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [optIn, setOptIn] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // Phone input formatting (00) 00000-0000
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

  const handlePlanSelect = (selectedPlan: PlanType) => {
    setPlano(selectedPlan);
    if (selectedPlan !== "monthly") {
      setMeio("pix");
    }
  };

  const getButtonText = () => {
    if (plano === "monthly") {
      return meio === "cartao" ? "Assinar por R$ 29,90 por mês" : "Pagar R$ 29,90 via PIX";
    }
    if (plano === "quarterly") {
      return "Pagar R$ 79,90 via PIX";
    }
    return "Pagar R$ 149,90 via PIX";
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !phone || !optIn) return;
    setSubmitted(true);
  };

  return (
    <section className="md-offer" id="assinatura" aria-labelledby="md-offer-title" data-persist="true">
      <div className="md-container md-offer-grid">
        <div className="md-offer-copy" data-reveal="left">
          <span className="md-eyebrow">UM PEQUENO HÁBITO PARA CULTIVAR</span>
          <h2 id="md-offer-title">
            Um momento seu.
            <br />
            <em>Todas as manhãs.</em>
          </h2>
          <p>
            A fé também encontra lugar nos pequenos intervalos. Que o próximo comece com uma mensagem.
          </p>
          <div className="md-offer-price">
            <span>R$</span>
            <strong>
              {plano === "monthly" ? "29,90" : plano === "quarterly" ? "26,63" : "24,98"}
            </strong>
            <span>/ mês</span>
          </div>
          <p className="md-recurring">
            {plano === "monthly"
              ? "Assinatura mensal com cobrança recorrente."
              : plano === "quarterly"
              ? "Plano trimestral de R$ 79,90 (R$ 26,63/mês)."
              : "Plano semestral de R$ 149,90 (R$ 24,98/mês)."}
          </p>
          <ul className="md-included">
            <li>Um devocional por manhã, direto no WhatsApp</li>
            <li>Versículo, reflexão e oração para a sua leitura</li>
            <li>Uma sugestão simples para colocar em prática</li>
            <li>Sem aplicativo adicional e sem grupo</li>
          </ul>
          <p className="md-price-context">
            O valor remunera a preparação e o envio do conteúdo.
          </p>
        </div>

        <div className="md-signup" data-reveal="scale">
          <div className="md-signup-heading">
            <span className="md-form-index">VAMOS COMEÇAR?</span>
            <h3>
              Onde podemos enviar
              <br />
              seu devocional?
            </h3>
            <p>Preencha seus dados para seguir ao pagamento.</p>
          </div>

          {submitted ? (
            <div className="md-checkout-final">
              <div className="md-checkout-selo">✓</div>
              <h2>Cadastro realizado!</h2>
              <p className="md-checkout-sub">
                Agradecemos sua assinatura, {name}. Em breve você receberá os devocionais no número {phone}.
              </p>
              <button
                type="button"
                className="md-checkout-botao md-checkout-botao-claro"
                onClick={() => setSubmitted(false)}
              >
                Voltar
              </button>
            </div>
          ) : (
            <form className="md-checkout" aria-label="Assinar o Maná Diário" onSubmit={handleSubmit}>
              <fieldset className="md-checkout-planos">
                <legend className="md-checkout-etapa">Escolha o período</legend>
                <div className="md-checkout-grade">
                  <label className={`md-checkout-plano ${plano === "monthly" ? "escolhido" : ""}`}>
                    <input
                      type="radio"
                      name="plano"
                      checked={plano === "monthly"}
                      value="monthly"
                      onChange={() => handlePlanSelect("monthly")}
                    />
                    <span className="md-checkout-plano-nome">Mensal</span>
                    <strong className="md-checkout-plano-preco">R$&nbsp;29,90</strong>
                    <span className="md-checkout-plano-mes">por mês</span>
                    <span className="md-checkout-plano-meio">cartão ou PIX</span>
                  </label>

                  <label className={`md-checkout-plano ${plano === "quarterly" ? "escolhido" : ""}`}>
                    <input
                      type="radio"
                      name="plano"
                      checked={plano === "quarterly"}
                      value="quarterly"
                      onChange={() => handlePlanSelect("quarterly")}
                    />
                    <span className="md-checkout-plano-nome">Trimestral</span>
                    <strong className="md-checkout-plano-preco">R$&nbsp;79,90</strong>
                    <span className="md-checkout-plano-mes">R$&nbsp;26,63 por mês</span>
                    <span className="md-checkout-plano-meio">PIX, pagamento único</span>
                  </label>

                  <label className={`md-checkout-plano ${plano === "semiannual" ? "escolhido" : ""}`}>
                    <input
                      type="radio"
                      name="plano"
                      checked={plano === "semiannual"}
                      value="semiannual"
                      onChange={() => handlePlanSelect("semiannual")}
                    />
                    <span className="md-checkout-plano-nome">Semestral</span>
                    <strong className="md-checkout-plano-preco">R$&nbsp;149,90</strong>
                    <span className="md-checkout-plano-mes">R$&nbsp;24,98 por mês</span>
                    <span className="md-checkout-plano-meio">PIX, pagamento único</span>
                  </label>
                </div>
              </fieldset>

              <fieldset className="md-checkout-meios">
                <legend className="md-checkout-etapa">Como prefere pagar</legend>
                <div className="md-checkout-meios-grade">
                  {plano === "monthly" ? (
                    <>
                      <label className={`md-checkout-meio ${meio === "cartao" ? "escolhido" : ""}`}>
                        <input
                          type="radio"
                          name="meio"
                          checked={meio === "cartao"}
                          value="cartao"
                          onChange={() => setMeio("cartao")}
                        />
                        <strong>Cartão</strong>
                        <span>renova sozinho todo mês</span>
                      </label>
                      <label className={`md-checkout-meio ${meio === "pix" ? "escolhido" : ""}`}>
                        <input
                          type="radio"
                          name="meio"
                          checked={meio === "pix"}
                          value="pix"
                          onChange={() => setMeio("pix")}
                        />
                        <strong>PIX</strong>
                        <span>você paga a cada mês</span>
                      </label>
                    </>
                  ) : (
                    <label className="md-checkout-meio escolhido" style={{ gridColumn: "1/-1" }}>
                      <input type="radio" name="meio" checked readOnly value="pix" />
                      <strong>PIX</strong>
                      <span>pagamento único com chave gerada</span>
                    </label>
                  )}
                </div>
              </fieldset>

              <div className="md-checkout-campos">
                <p className="md-checkout-etapa">Seus dados</p>
                <label>
                  Nome
                  <input
                    autoComplete="name"
                    placeholder="Como podemos te chamar?"
                    minLength={2}
                    maxLength={120}
                    required
                    name="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </label>

                <label>
                  E-mail
                  <input
                    type="email"
                    autoComplete="email"
                    placeholder="voce@email.com"
                    required
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </label>

                <label>
                  WhatsApp
                  <input
                    type="tel"
                    minLength={10}
                    maxLength={24}
                    autoComplete="tel"
                    inputMode="tel"
                    placeholder="(00) 00000-0000"
                    required
                    name="phone"
                    value={phone}
                    onChange={handlePhoneChange}
                  />
                  <small>Confira o DDD — é neste número que a mensagem chega.</small>
                </label>

                {meio === "cartao" && plano === "monthly" && (
                  <label className="md-checkout-cartao">
                    Cartão de crédito
                    <div className="md-checkout-cartao-campo">
                      <span style={{ color: "#8d9a94", fontSize: "14px" }}>
                        💳 Dados do cartão protegidos via Stripe
                      </span>
                    </div>
                  </label>
                )}
              </div>

              <label className="md-checkout-consent">
                <input
                  type="checkbox"
                  required
                  name="whatsapp_opt_in"
                  checked={optIn}
                  onChange={(e) => setOptIn(e.target.checked)}
                />
                <span>
                  Concordo em receber mensagens pelo WhatsApp e li a{" "}
                  <a target="_blank" href="/privacidade" rel="noreferrer">
                    Política de Privacidade
                  </a>{" "}
                  e os{" "}
                  <a target="_blank" href="/termos" rel="noreferrer">
                    Termos de Uso
                  </a>
                  .
                </span>
              </label>

              <button className="md-checkout-botao" type="submit" disabled={!optIn || !name || !email || !phone}>
                {getButtonText()}
              </button>

              <p className="md-checkout-rodape">
                Os dados do cartão são digitados em campos da Stripe e não passam pelo nosso servidor. Para cancelar, envie SAIR no WhatsApp.
              </p>
              <input type="hidden" name="privacy_version" value="2026-08-14" />
            </form>
          )}

          <div className="md-checkout-note">
            <svg aria-hidden="true" width="16" height="18" viewBox="0 0 16 18" fill="none">
              <rect x="2" y="7" width="12" height="10" rx="2" stroke="currentColor" />
              <path d="M4 7V5a4 4 0 0 1 8 0v2m-4 5v2" stroke="currentColor" />
            </svg>
            <span>
              Pagamento seguro nesta mesma página.
              <br />
              Os dados do cartão são digitados em campos da Stripe.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
