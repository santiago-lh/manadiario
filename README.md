# ✦ Maná Diário (manadiario.cloud)

> **“Antes de o dia ganhar pressa, um momento com Deus.”**  
> Redesign completo da plataforma Maná Diário, reposicionando o produto de um simples serviço de mensagens para um ritual matinal premium de fé, silêncio e conexão com Deus.

---

## 🎨 Identidade & Direção Criativa

- **Conceito:** Calma da manhã + espiritualidade contemporânea + editorial minimalista.
- **Símbolo de Identidade:** `✦`
- **Tipografia:** `Newsreader` (serifa editorial elegante) + `Manrope` (sans-serif moderna e limpa).
- **Paleta de Cores:**
  - Principal: `#F7F4EC` (creme natural)
  - Suave: `#EFE9DC` (areia clara)
  - Superfícies: `#FFFDF8` (branco quente)
  - Texto Principal: `#292A24` (carvão quente)
  - Texto Apoio: `#6F7067` (mineral suave)
  - Verde Acento: `#445343` (musgo elegante)
  - Verde Botões: `#29352C` (verde floresta escuro)
  - Dourado Suave: `#B79B68` (detalhes e selos)

---

## 🏛️ Estrutura do Projeto

Construído com **Next.js 16 (App Router)**, **React 19**, **TypeScript** e **Tailwind CSS v4**:

```
src/
├── app/
│   ├── layout.tsx              # Fontes Google, SEO, metatags OpenGraph
│   ├── page.tsx                # Homepage modular com 14 seções
│   ├── globals.css             # Design tokens e variáveis de cor
│   ├── global-error.tsx        # Fallback de erro global
│   ├── privacidade/page.tsx    # Política de Privacidade
│   ├── termos/page.tsx         # Termos de Uso
│   └── exclusao-de-dados/page.tsx # Exclusão de Dados
└── components/
    ├── Header.tsx              # Topbar com frosted glass e âncoras
    ├── Hero.tsx                # Headline, CTA e cena matinal em arco
    ├── ProblemSection.tsx      # A pressa matinal vs. silêncio com Deus
    ├── SolutionSection.tsx     # Os 4 pilares acolhedores
    ├── WhatsAppPreview.tsx     # Simulação interativa do WhatsApp (01 Ler, 02 Refletir, 03 Orar, 04 Praticar)
    ├── DailyMoments.tsx        # Progressão editorial diária
    ├── HowItWorks.tsx          # 3 passos rápidos (Sem aplicativo)
    ├── Benefits.tsx            # 4 fundamentos do hábito matinal
    ├── Testimonials.tsx        # Prova social e histórias de rotina
    ├── Pricing.tsx             # Planos Mensal, Trimestral e Semestral (Melhor Escolha)
    ├── TrustSection.tsx        # Garantias Stripe, cancelamento por WhatsApp e nota editorial
    ├── FAQ.tsx                 # Perguntas frequentes em acordeão minimalista
    ├── FinalCTA.tsx            # Chamada final emocional
    ├── Footer.tsx              # Rodapé com links legais e cancelamento
    ├── StickyMobileCTA.tsx     # Barra fixa inferior mobile
    └── CheckoutModal.tsx       # Checkout interativo e tela pós-compra ("Tudo pronto 🌤")
```

---

## 🚀 Como Executar Localmente

1. Instale as dependências:
   ```bash
   npm install
   ```

2. Execute o servidor de desenvolvimento:
   ```bash
   npm run dev
   ```

3. Acesse `http://localhost:3000` no navegador.

---

## 📦 Build e Verificação

- **Verificação de Tipagem:**
  ```bash
  npm run typecheck
  ```
- **Build de Produção:**
  ```bash
  npm run build
  ```

---

## 🌐 Deploy na Vercel

1. Importe este repositório diretamente no [dashboard da Vercel](https://vercel.com/new).
2. Framework Preset: **Next.js** (detectado automaticamente).
3. Clique em **Deploy**.
