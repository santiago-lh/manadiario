import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de Privacidade | Maná Diário",
  description:
    "Esta Política explica como o Maná Diário trata dados pessoais no site e no serviço de mensagens devocionais pelo WhatsApp.",
};

export default function PrivacidadePage() {
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
          <h1>Política de Privacidade</h1>
          <p>
            Esta Política explica como o Maná Diário trata dados pessoais no site e no serviço de mensagens devocionais pelo WhatsApp.
          </p>
          <small>Última atualização: 14 de agosto de 2026</small>
        </header>

        <section>
          <h2>1. Quem controla os dados</h2>
          <p>
            O Maná Diário é o controlador dos dados pessoais utilizados para oferecer o cadastro e o envio de mensagens devocionais. Solicitações sobre privacidade podem ser feitas pelo WhatsApp +55 16 95782-5810.
          </p>
        </section>

        <section>
          <h2>2. Dados que podemos coletar</h2>
          <p>
            Coletamos somente dados relacionados à operação do serviço, fornecidos diretamente por você, gerados durante o uso ou recebidos dos nossos prestadores.
          </p>
          <ul>
            <li>Nome e número de telefone;</li>
            <li>E-mail, caso seja informado;</li>
            <li>Registros de consentimento, aceite, cancelamento e origem do cadastro;</li>
            <li>Preferência de horário, fuso horário e situação da assinatura;</li>
            <li>Identificadores e estados técnicos das mensagens, como enviado, entregue, lido ou falhou;</li>
            <li>Mensagens e solicitações que você enviar ao nosso número de atendimento;</li>
            <li>Dados técnicos mínimos, como endereço IP, navegador, data, hora e registros de segurança;</li>
            <li>Dados de cobrança e referência de pagamento, quando a assinatura paga estiver disponível. Não armazenamos o número completo do cartão.</li>
          </ul>
        </section>

        <section>
          <h2>3. Dados potencialmente sensíveis</h2>
          <p>
            O serviço tem conteúdo religioso, mas não exige declaração de crença e não cria perfil sobre convicção religiosa. Uma interação voluntária pode, incidentalmente, revelar informação dessa natureza. Quando aplicável, tratamos esse conteúdo somente para atender à própria solicitação do titular e com o consentimento específico correspondente.
          </p>
        </section>

        <section>
          <h2>4. Para que usamos os dados e bases legais</h2>
          <p>
            Usamos os dados para registrar o pedido de participação, entregar o conteúdo solicitado, personalizar o horário, responder ao atendimento, administrar a futura assinatura, prevenir abuso, manter a segurança, comprovar o consentimento e cumprir obrigações legais.
          </p>
          <p>
            As bases legais podem incluir consentimento, execução de contrato ou procedimentos solicitados pelo titular, cumprimento de obrigação legal, exercício regular de direitos e legítimo interesse para segurança e prevenção a fraude, sempre observados os direitos e liberdades do titular.
          </p>
        </section>

        <section>
          <h2>5. WhatsApp, Meta e outros operadores</h2>
          <p>
            Para entregar e acompanhar mensagens, compartilhamos o número do destinatário, o conteúdo da mensagem e dados técnicos de entrega com a Meta Platforms e o WhatsApp Business Platform. O tratamento realizado pela Meta também segue os termos e políticas próprios dessas empresas.
          </p>
          <p>
            Também podemos contratar infraestrutura de hospedagem, banco de dados, monitoramento, atendimento e processamento de pagamentos. Esses fornecedores recebem apenas os dados necessários à sua função e ficam sujeitos a obrigações de segurança e confidencialidade.
          </p>
          <p>
            Ferramentas de inteligência artificial podem auxiliar na criação de rascunhos editoriais, mas não enviaremos nome, telefone ou conversas de assinantes para gerar os devocionais.
          </p>
        </section>

        <section>
          <h2>6. Transferência internacional</h2>
          <p>
            O uso do WhatsApp Business Platform e de fornecedores globais pode envolver transferência internacional de dados, inclusive para países onde Meta e seus prestadores mantêm infraestrutura. Adotamos contratos, controles de acesso e medidas compatíveis com a LGPD para proteger os dados nessas operações.
          </p>
        </section>

        <section>
          <h2>7. Retenção e eliminação</h2>
          <p>
            Mantemos os dados cadastrais enquanto o serviço estiver ativo e pelo período necessário para atender solicitações, cumprir obrigações ou exercer direitos. Registros operacionais de entrega podem ser mantidos por até 12 meses; registros técnicos de segurança, em regra, por até 6 meses; registros de consentimento e cancelamento podem ser conservados por até 5 anos para comprovação de conformidade. Documentos financeiros seguem os prazos legais aplicáveis.
          </p>
          <p>
            Backups operacionais são protegidos e seguem ciclo de substituição de até 14 dias. Ao término do prazo aplicável, os dados são eliminados ou anonimizados, ressalvada a conservação permitida ou exigida por lei.
          </p>
        </section>

        <section>
          <h2>8. Seus direitos pela LGPD</h2>
          <p>
            Você pode solicitar confirmação e acesso, correção, anonimização, bloqueio ou eliminação, portabilidade quando regulamentada, informação sobre compartilhamentos, revisão de decisões automatizadas, oposição, revogação do consentimento e informação sobre as consequências de não consentir.
          </p>
          <p>
            Para cancelar mensagens, envie SAIR ou PARAR no WhatsApp. Para uma solicitação completa de eliminação, consulte a página de Exclusão de Dados. Podemos pedir informações mínimas para confirmar a identidade e evitar fraude.
          </p>
        </section>

        <section>
          <h2>9. Segurança e incidentes</h2>
          <p>
            Aplicamos controle de acesso, criptografia em trânsito, credenciais protegidas, registros de auditoria, backups e atualizações de segurança. Nenhuma operação é totalmente isenta de risco. Incidentes relevantes serão tratados e comunicados aos titulares e à autoridade quando exigido.
          </p>
        </section>

        <section>
          <h2>10. Crianças e adolescentes</h2>
          <p>
            O cadastro autônomo é destinado a maiores de 18 anos. Dados de crianças ou adolescentes somente devem ser fornecidos pelo responsável legal e quando isso atender ao melhor interesse do menor.
          </p>
        </section>

        <section>
          <h2>11. Alterações desta Política</h2>
          <p>
            Podemos atualizar esta Política para refletir mudanças legais ou operacionais. A versão vigente e a data de atualização permanecerão publicadas nesta página. Mudanças relevantes de finalidade serão informadas antes de entrarem em vigor quando a lei exigir.
          </p>
        </section>

        <aside className="legal-contact">
          <h2>Canal de privacidade</h2>
          <p>Para exercer seus direitos ou tirar dúvidas, fale conosco pelo número +55 16 95782-5810.</p>
          <a
            className="button button-primary"
            href="https://wa.me/5516957825810?text=Solicita%C3%A7%C3%A3o%20de%20privacidade%20-%20Man%C3%A1%20Di%C3%A1rio"
            target="_blank"
            rel="noopener noreferrer"
          >
            Falar sobre privacidade
          </a>
          <p>
            <a href="/exclusao-de-dados">Ver instruções de exclusão de dados</a>
          </p>
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
