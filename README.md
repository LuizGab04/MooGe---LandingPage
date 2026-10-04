# Landing page — agrotecnologia / pecuária de precisão

Landing page em **React 19 + TypeScript + Tailwind CSS v4**, construída sobre o design system
Material 3 do mock de referência (paleta verde `#17341d` + terracota `#805533`,
tipografia Hanken Grotesk / Inter / JetBrains Mono).

## Rodar

```bash
npm run dev
```

Abre em `http://localhost:5173`.

| Comando           | O que faz                                |
| ----------------- | ---------------------------------------- |
| `npm run dev`     | servidor de desenvolvimento com HMR      |
| `npm run build`   | typecheck (`tsc -b`) + build de produção |
| `npm run preview` | serve o build de produção localmente     |
| `npm run lint`    | oxlint                                   |

## Trocar o nome da empresa

O nome ainda é um placeholder (`NOME_PROVISORIO`) e **não está escrito à mão em nenhum
componente**. Para definir o nome real, edite apenas:

```
src/config/brand.ts
```

Lá ficam nome, razão social, tagline, descrição, e-mail, telefone, WhatsApp, endereço e redes
sociais. Todos os componentes leem desse arquivo. O `<title>` e as metatags ficam em
`index.html` (esses sim precisam ser atualizados à mão, porque são HTML estático).

O monograma do logo é um SVG inline sem letras — repetido na `Navbar` e no `Footer` — então
funciona com qualquer nome. O favicon fica em `public/favicon.svg`.

## Design system

Tudo vive em `src/index.css`, em três blocos:

1. **`:root` / `.dark`** — a paleta Material 3 em variáveis `--m3-*`. É o único lugar com
   valores hexadecimais. Para reajustar a cor da marca, mude aqui.
2. **`@theme inline`** — mapeia cada `--m3-*` para um token de cor do Tailwind, o que gera as
   classes `bg-primary`, `text-on-surface-variant`, `border-outline-variant` etc. Como o mapa é
   `inline`, as cores resolvem no elemento e o tema escuro funciona sem `dark:` espalhado pelo
   código.
3. **`@theme`** — tipografia, espaçamentos nomeados e animações.

Regras seguidas pelos componentes:

- Cor **sempre** por token semântico (`bg-primary`, `text-on-primary`). Nenhum hex cru nem cor
  nativa do Tailwind (`green-600`, `slate-100`) no JSX.
- Fundo base das seções é `bg-surface`, alternando com `bg-surface-container-low`.
- Faixas e cartões verdes grandes usam `bg-brand` / `text-on-brand` (e não `bg-primary`): no
  claro é exatamente o `primary` do mock; no escuro vira verde profundo, porque o `primary` do
  tema escuro é verde claro e ofuscaria uma faixa inteira.
- Tipografia sempre em par: `font-body-md text-body-md`, `font-display-lg text-display-xl`.
- Raios: `rounded-sm` (4px) em botões, `rounded-lg` (8px) em cards, `rounded-xl` (12px) em
  superfícies grandes, `rounded-full` em pílulas e avatares.
- Utilitários próprios: `glass-nav`, `grid-paper`, `animate-marquee`, `animate-float-slow`,
  `.reveal`. O `tonal-card` fica em `@layer components` de propósito — qualquer utilitário o
  sobrescreve (`border-primary-container`, `shadow-2xl`).

> **Ao criar um tamanho de fonte novo** (`--text-*` no `index.css`), acrescente o nome também
> na lista de `src/lib/cn.ts`. Sem isso o `tailwind-merge` confunde o tamanho com uma cor de
> texto e descarta uma das duas classes.

### Tema claro/escuro

A classe `.dark` no `<html>` é aplicada antes da primeira pintura por um script inline em
`index.html` (evita flash). O toggle da navbar usa `src/hooks/useTheme.ts` e persiste a escolha
em `localStorage`.

## Estrutura

```
src/
├─ App.tsx                    ordem das seções da página
├─ index.css                  design tokens + utilitários
├─ config/brand.ts            ← nome, contato, links de navegação e CTAs
├─ lib/cn.ts                  merge de classes (clsx + tailwind-merge)
├─ hooks/useTheme.ts
└─ components/
   ├─ ui/                     Button, Icon, Container, Reveal, SectionHeading
   ├─ layout/                 Navbar, Footer
   └─ sections/               Hero, LogoCloud, Metrics, ProductShowcase, Features,
                              HowItWorks, Testimonials, Pricing, Faq, FinalCta
```

Ícones vêm do **Material Symbols Outlined** (mesma família do mock), carregado por fonte e
encapsulado em `<Icon name="monitor_heart" />`.

## Conteúdo é placeholder

Números, depoimentos, nomes de fazendas, logotipos de clientes e preços são **ilustrativos** e
estão marcados com comentário no topo de cada arquivo. Substitua antes de publicar.

O formulário de newsletter no rodapé não tem backend — há um `TODO` no arquivo indicando onde
plugar a API.

## Imagens

A página não depende de nenhuma imagem externa: todo o visual (mockup do painel, gráficos,
logos, avatares, texturas) é feito com CSS e SVG inline. Isso mantém o carregamento rápido e
evita links quebrados.
