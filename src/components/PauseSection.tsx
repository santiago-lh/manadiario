import React from "react";

export function PauseSection() {
  return (
    <section className="md-pause" id="uma-pausa" aria-labelledby="md-pause-title">
      <div className="md-container md-pause-grid">
        <div data-reveal="left">
          <span className="md-eyebrow">A GENTE SABE COMO É</span>
          <h2 id="md-pause-title">
            Você acorda.
            <br />
            O mundo já está
            <br />
            <em>chamando.</em>
          </h2>
          <div className="md-drawn-line" aria-hidden="true">
            <svg viewBox="0 0 250 18">
              <path
                d="M3 13C58 1 175 2 246 8M18 17c76-7 163-6 218-5"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
              />
            </svg>
          </div>
        </div>
        <div className="md-pause-text" data-reveal="right">
          <p>
            Você pega o celular para ver as horas e já encontra assuntos esperando resposta. O café, o trabalho, a casa, alguém que precisa de você.
          </p>
          <p>
            Talvez você queira ler a Bíblia com mais frequência. Mas esse momento vai ficando para depois.
          </p>
          <p className="md-pause-resolution">
            Seu momento com Deus
            <br />
            <em>pode começar pequeno.</em>
          </p>
          <p>
            O Maná Diário chega onde você já está. Para ler enquanto o café passa, antes de sair ou quando encontrar alguns minutos de silêncio.
          </p>
          <span className="md-pause-foot">SEM TAREFA PARA ENTREGAR. NO SEU TEMPO.</span>
        </div>
      </div>
      <div className="md-slow-word" aria-hidden="true">
        respire. leia. ore.
      </div>
    </section>
  );
}
