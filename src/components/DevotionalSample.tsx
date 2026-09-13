"use client";

import React, { useState } from "react";

type TabId = "verse" | "reflection" | "prayer" | "practice";

export function DevotionalSample() {
  const [activeTab, setActiveTab] = useState<TabId>("verse");

  return (
    <section className="md-sample md-container" id="mensagem" aria-label="Conheça o seu devocional">
      <div className="md-sample-grid">
        <div className="md-sample-intro" data-reveal="left">
          <span className="md-eyebrow">UM POUCO DO QUE CHEGA ATÉ VOCÊ</span>
          <h2>
            Uma mensagem.
            <br />
            <em>
              Mais de um jeito
              <br />
              de fazer sentido.
            </em>
          </h2>
          <p>
            Antes de assinar, conheça o tom da conversa. Toque em cada parte para explorar este exemplo.
          </p>
          <div className="md-moments" aria-label="Explore as partes do devocional">
            <button
              type="button"
              className={activeTab === "verse" ? "is-selected" : ""}
              aria-pressed={activeTab === "verse"}
              aria-controls="sample-verse"
              onClick={() => setActiveTab("verse")}
            >
              <span className="md-moment-index">01</span>
              <span>
                <strong>Ler</strong>
                <span>Um versículo da Bíblia para ler com atenção, mesmo numa manhã corrida.</span>
              </span>
              <span className="md-moment-arrow" aria-hidden="true">
                ↗
              </span>
            </button>

            <button
              type="button"
              className={activeTab === "reflection" ? "is-selected" : ""}
              aria-pressed={activeTab === "reflection"}
              aria-controls="sample-reflection"
              onClick={() => setActiveTab("reflection")}
            >
              <span className="md-moment-index">02</span>
              <span>
                <strong>Refletir</strong>
                <span>Uma reflexão sobre o que a gente vive: responsabilidades, escolhas, recomeços e pequenos cuidados.</span>
              </span>
              <span className="md-moment-arrow" aria-hidden="true">
                ↗
              </span>
            </button>

            <button
              type="button"
              className={activeTab === "prayer" ? "is-selected" : ""}
              aria-pressed={activeTab === "prayer"}
              aria-controls="sample-prayer"
              onClick={() => setActiveTab("prayer")}
            >
              <span className="md-moment-index">03</span>
              <span>
                <strong>Orar</strong>
                <span>Uma oração para acompanhar a leitura. Você pode fazê-la sua, no seu tempo.</span>
              </span>
              <span className="md-moment-arrow" aria-hidden="true">
                ↗
              </span>
            </button>

            <button
              type="button"
              className={activeTab === "practice" ? "is-selected" : ""}
              aria-pressed={activeTab === "practice"}
              aria-controls="sample-practice"
              onClick={() => setActiveTab("practice")}
            >
              <span className="md-moment-index">04</span>
              <span>
                <strong>Levar com você</strong>
                <span>Uma sugestão simples para a reflexão continuar depois que você fechar o WhatsApp.</span>
              </span>
              <span className="md-moment-arrow" aria-hidden="true">
                ↗
              </span>
            </button>
          </div>
        </div>

        <div className="md-message-wrap" data-reveal="right">
          <div className="md-example-note">
            <span aria-hidden="true">↓</span> exemplo ilustrativo do conteúdo
          </div>
          <article className="md-message" aria-label="Exemplo de devocional: Um cuidado de cada vez">
            <header>
              <span className="md-message-avatar" aria-hidden="true">
                m.
              </span>
              <div>
                <strong>Maná Diário</strong>
                <span>Seu devocional da manhã</span>
              </div>
              <span className="md-message-time">06:00</span>
            </header>
            <div className="md-message-body">
              <p className="md-message-hello">Bom dia. Vamos com calma? ☀</p>
              <h3>Um cuidado de cada vez.</h3>

              <section id="sample-verse" className={activeTab === "verse" ? "is-selected" : ""}>
                <span className="md-message-label">PARA LER · SALMOS 23:1</span>
                <blockquote>“O Senhor é o meu pastor; nada me faltará.”</blockquote>
              </section>

              <section id="sample-reflection" className={activeTab === "reflection" ? "is-selected" : ""}>
                <span className="md-message-label">PARA REFLETIR</span>
                <p>
                  Antes mesmo do café, talvez você já esteja pensando na conta que vence, na conversa difícil ou em alguém que precisa de você.
                </p>
                <p>
                  Este salmo nos convida à confiança no cuidado de Deus. Você pode colocar suas preocupações em oração e cuidar, com atenção, do próximo passo possível.
                </p>
              </section>

              <section id="sample-prayer" className={activeTab === "prayer" ? "is-selected" : ""}>
                <span className="md-message-label">PARA ORAR</span>
                <p>
                  Senhor, tu conheces o que ocupa meus pensamentos hoje. Dá-me sabedoria para cuidar das minhas responsabilidades e reconhecer quando preciso de ajuda. Que eu encontre espaço para te ouvir no meio deste dia. Amém.
                </p>
              </section>

              <section id="sample-practice" className={activeTab === "practice" ? "is-selected" : ""}>
                <span className="md-message-label">PARA LEVAR COM VOCÊ</span>
                <p>
                  Escolha uma preocupação e transforme-a em uma oração simples. Depois, identifique uma pequena atitude que está ao seu alcance.
                </p>
              </section>

              <footer>
                <span>Uma manhã de cada vez.</span>
                <span aria-hidden="true">06:00 ✓✓</span>
              </footer>
            </div>
          </article>
          <p className="md-example-caption">
            O conteúdo muda a cada dia. O convite para parar um pouco permanece.
          </p>
        </div>
      </div>
    </section>
  );
}
