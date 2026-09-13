import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Exclusão de Dados | Maná Diário",
  description: "Cancele mensagens ou solicite a eliminação dos dados associados ao seu número.",
};

export default function ExclusaoDeDadosPage() {
  return (
    <main className="legal-page">
      <nav className="marketing-nav shell" aria-label="Navegação principal">
        <a className="brand" aria-label="Maná Diário, página inicial" href="/">
          <span className="brand-mark">
            <svg aria-hidden="true" viewBox="0 0 64 64">
              <path d="M32 7v7M15 13l5 6M49 13l-5 6M7 28h8M57 28h-8" />
              <path d="M19 30c1-8 6-13 13-13s12 5 13 13" />
              <path d="M8 35c9-1 17 1 24 6 7-5 15-7 24-6v15c-9-1-17 1-24 6-7-5-15-7-24-6V35Z" />
              <path d="M12 43c7 0 14 2 20 6 6-4 13-6 20-6" />
            </svg>
          </span>
          <span>
            Maná <em>Diário</em>
          </span>
        </a>
        <a className="button button-ghost" href="/">
          Voltar ao início
        </a>
      </nav>

      <article className="legal-document shell">
        <header>
          <span className="eyebrow">Transparência e confiança</span>
          <h1>Exclusão de Dados</h1>
          <p>Cancele mensagens ou solicite a eliminação dos dados associados ao seu número.</p>
          <small>Última atualização: 14 de agosto de 2026</small>
        </header>

        <section>
          <h2>Como solicitar</h2>
          <p>
            Você não precisa acessar um painel ou fornecer senha. Faça a solicitação pelo mesmo canal usado no serviço.
          </p>
          <ul>
            <li>Envie SAIR ou PARAR para +55 16 95782-5810 para interromper imediatamente novas mensagens.</li>
            <li>Para excluir o cadastro e os dados associados, envie EXCLUIR DADOS para o mesmo número.</li>
            <li>
              Informe o número de telefone usado no cadastro. Poderemos responder pelo próprio WhatsApp para confirmar que a solicitação foi feita pelo titular.
            </li>
            <li>
              Após a confirmação, concluiremos a solicitação ou explicaremos eventual retenção legal em até 15 dias.
            </li>
          </ul>
        </section>

        <aside className="legal-contact">
          <h2>Iniciar solicitação</h2>
          <p>O prazo de resposta é de até 15 dias após a confirmação da identidade.</p>
          <a
            className="button button-primary"
            href="https://wa.me/5516957825810?text=Solicita%C3%A7%C3%A3o%20de%20privacidade%20-%20Man%C3%A1%20Di%C3%A1rio"
            target="_blank"
            rel="noopener noreferrer"
          >
            Solicitar pelo WhatsApp
          </a>
        </aside>
      </article>

      <footer className="legal-footer shell">
        <a className="brand" aria-label="Maná Diário, página inicial" href="/">
          <span className="brand-mark">
            <svg aria-hidden="true" viewBox="0 0 64 64">
              <path d="M32 7v7M15 13l5 6M49 13l-5 6M7 28h8M57 28h-8" />
              <path d="M19 30c1-8 6-13 13-13s12 5 13 13" />
              <path d="M8 35c9-1 17 1 24 6 7-5 15-7 24-6v15c-9-1-17 1-24 6-7-5-15-7-24-6V35Z" />
              <path d="M12 43c7 0 14 2 20 6 6-4 13-6 20-6" />
            </svg>
          </span>
          <span>
            Maná <em>Diário</em>
          </span>
        </a>
        <nav aria-label="Documentos legais">
          <a href="/privacidade">Privacidade</a>
          <a href="/termos">Termos</a>
          <a href="/exclusao-de-dados">Exclusão de dados</a>
        </nav>
      </footer>
    </main>
  );
}
