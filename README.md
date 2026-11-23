# MooGe — landing page

Site do **MooGe** (painel web de gestão de rebanho + app de campo conectado à balança e ao
bastão leitor, com fila offline).

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

## Marca, contato e textos

Nome (`MooGe`), tagline, descrição, e-mail (`mooge.tecnologia@gmail.com`), WhatsApp e redes sociais ficam em:

```
src/config/brand.ts
```

Todos os componentes leem desse arquivo. O `<title>` e as metatags ficam em `index.html`
(HTML estático, atualizado à mão). **Ainda são placeholders:** razão social, domínio e redes sociais.

## Imagens (logo, ícone do app e prints)

Os arquivos originais ficam na raiz do projeto (`Logo.png`, `Icone mooge logo2.png`,
`Painel dos animais.png`, `Dashboards e avisos.png`, `Barra lateral Completa.png`). As versões
usadas pelo site foram recortadas e otimizadas e são importadas por `src/config/assets.ts`:

| Arquivo                               | Uso                                                       |
| ------------------------------------- | --------------------------------------------------------- |
| `src/assets/brand/logo-{light,dark}`  | logo com frase, fundo transparente — rodapé               |
| `src/assets/brand/wordmark-{light,dark}` | logo sem a frase — navbar                            |
| `src/assets/brand/app-icon.png`       | ícone do app — hero e seção "App de campo"                |
| `src/assets/brand/mark.png`           | só o pino — barra de título das prints                    |
| `src/assets/screens/*.png`            | prints reais do painel — hero e seção "Plataforma"        |
| `src/assets/photos/pasto.jpg`         | foto de pasto — fundo da chamada final (contato)          |
| `public/favicon.png`, `apple-touch-icon.png`, `og-image.png` | favicon e prévia de compartilhamento |

A versão `dark` da logo troca o verde por creme para ler bem no tema escuro; o componente
`<Logo />` alterna entre as duas pela classe `.dark`. Para atualizar uma print, substitua o PNG em
`src/assets/screens` mantendo o nome (e ajuste `width`/`height` em `assets.ts` se mudar a proporção).

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
├─ config/assets.ts           ← logo, ícone do app e prints do sistema
├─ assets/brand, assets/screens
├─ lib/cn.ts                  merge de classes (clsx + tailwind-merge)
├─ hooks/useTheme.ts
└─ components/
   ├─ ui/                     Button, Icon, Container, Reveal, SectionHeading, Logo, ScreenFrame
   ├─ layout/                 Navbar, Footer
   └─ sections/               Hero, LogoCloud, Metrics, ProductShowcase, AppCampo, Features,
                              HowItWorks, Testimonials, Pricing, Faq, FinalCta
```

Ícones vêm do **Material Symbols Outlined** (mesma família do mock), carregado por fonte e
encapsulado em `<Icon name="monitor_heart" />`.

## Conteúdo é placeholder

As telas do produto (hero e "Plataforma") são **prints reais**. O app de celular ainda não tem
prints: a seção "App de campo" usa um diagrama do fluxo. Já números, depoimentos, nomes de fazendas, logotipos de clientes e preços são **ilustrativos** e
estão marcados com comentário no topo de cada arquivo. Substitua antes de publicar.

O formulário de newsletter no rodapé não tem backend — há um `TODO` no arquivo indicando onde
plugar a API.
