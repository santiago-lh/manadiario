import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Termos de Uso | Maná Diário",
  description: "Estas condições regulam o uso do site e do serviço de mensagens do Maná Diário.",
};

export default function TermosPage() {
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
          <h1>Termos de Uso</h1>
          <p>Estas condições regulam o uso do site e do serviço de mensagens do Maná Diário.</p>
          <small>Última atualização: 14 de agosto de 2026</small>
        </header>

        <section>
          <h2>1. Serviço</h2>
          <p>
            O Maná Diário oferece conteúdo devocional e motivacional por meio do site e do WhatsApp. O conteúdo tem finalidade informativa e espiritual e não substitui orientação médica, psicológica, jurídica ou de emergência.
          </p>
        </section>

        <section>
          <h2>2. Cadastro e consentimento</h2>
          <p>
            O usuário declara fornecer dados verdadeiros, ter capacidade legal para contratar e controlar o número informado. O envio de mensagens depende de solicitação ou consentimento válido, que pode ser revogado a qualquer momento com SAIR ou PARAR.
          </p>
        </section>

        <section>
          <h2>3. Uso adequado</h2>
          <p>
            Não é permitido usar o serviço para fraude, violação de direitos, tentativa de acesso indevido, automação abusiva ou qualquer finalidade ilícita. Podemos limitar acessos que representem risco à plataforma ou a terceiros.
          </p>
        </section>

        <section>
          <h2>4. Disponibilidade e integrações</h2>
          <p>
            A entrega depende de internet, WhatsApp, Meta e outros fornecedores. Podemos realizar manutenção, corrigir falhas ou alterar funcionalidades. Não garantimos entrega ininterrupta quando houver indisponibilidade externa ou bloqueios do próprio usuário.
          </p>
        </section>

        <section>
          <h2>5. Assinaturas e cancelamento</h2>
          <p>
            Preço, periodicidade e condições de pagamento serão apresentados antes de qualquer contratação. O usuário poderá cancelar mensagens a qualquer momento. Regras de cobrança, renovação e reembolso serão informadas com destaque quando a modalidade paga for disponibilizada.
          </p>
        </section>

        <section>
          <h2>6. Propriedade intelectual</h2>
          <p>
            A marca, a identidade visual e os textos próprios do Maná Diário são protegidos. É permitida a leitura e o compartilhamento pessoal das mensagens, sem exploração comercial, remoção de autoria ou criação de serviço concorrente com o conteúdo.
          </p>
        </section>

        <section>
          <h2>7. Privacidade</h2>
          <p>
            O tratamento de dados pessoais segue a Política de Privacidade publicada neste site e a legislação brasileira aplicável.
          </p>
        </section>

        <section>
          <h2>8. Lei aplicável e contato</h2>
          <p>
            Estes Termos seguem as leis da República Federativa do Brasil. Dúvidas e solicitações podem ser enviadas pelo WhatsApp +55 16 95782-5810.
          </p>
        </section>
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
