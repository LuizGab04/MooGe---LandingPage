/**
 * ============================================================
 *  SEÇÃO DE RECURSOS — grade bento assimétrica
 * ============================================================
 *  ATENÇÃO: todo o conteúdo abaixo (títulos de lotes, códigos de
 *  brinco, datas, quantidades de animais e doses) é PLACEHOLDER
 *  ilustrativo. Substituir pelos dados reais do produto antes de
 *  publicar. O nome da empresa nunca é escrito à mão: quando a
 *  seção precisar dele, use `BRAND.name` (ver src/config/brand.ts).
 */

import { Container } from '@/components/ui/Container'
import { Icon } from '@/components/ui/Icon'
import { Reveal } from '@/components/ui/Reveal'
import { SectionHeading } from '@/components/ui/SectionHeading'

type CardTone = 'default' | 'accent'
type CardVisual = 'stepper' | 'eartag' | 'none'

type FeatureCard = {
  id: string
  icon: string
  title: string
  description: string
  /** Classe de span no bento (aplicada só a partir de md). */
  span: string
  tone: CardTone
  visual: CardVisual
}

type ToneClasses = {
  card: string
  iconBox: string
  title: string
  body: string
}

/**
 * Os tokens `*-fixed` valem para os dois temas (não são redefinidos em
 * `.dark`), então tudo que senta sobre `bg-primary-fixed` precisa usar
 * um `on-primary-fixed*` — `text-primary` viraria verde claro sobre
 * verde claro no tema escuro.
 */
const TONE: Record<CardTone, ToneClasses> = {
  default: {
    card: 'bg-surface-container-lowest',
    iconBox: 'bg-primary-fixed text-on-primary-fixed-variant',
    title: 'text-primary',
    body: 'text-on-surface-variant',
  },
  accent: {
    card: 'bg-primary-container',
    iconBox: 'bg-primary-fixed text-on-primary-fixed',
    title: 'text-on-primary-container',
    body: 'text-on-primary-container',
  },
}

const FEATURES: readonly FeatureCard[] = [
  {
    id: 'protocolos',
    icon: 'vaccines',
    title: 'Protocolos que se cobram sozinhos',
    description:
      'Monte o calendário sanitário e reprodutivo do lote — vermifugação, clostridioses, IATF — uma única vez. A plataforma abre a tarefa na data certa, registra quem aplicou e dá baixa no inventário farmacológico no mesmo lançamento.',
    span: 'md:col-span-2',
    tone: 'default',
    visual: 'stepper',
  },
  {
    id: 'rastreabilidade',
    icon: 'qr_code_scanner',
    title: 'Rastreabilidade individual',
    description:
      'Cada brinco eletrônico carrega a ficha completa do animal: pesagens, GMD, tratamentos aplicados, movimentações entre pasto rotacionado e confinamento, e a arroba projetada no embarque.',
    span: 'md:row-span-2',
    tone: 'default',
    visual: 'eartag',
  },
  {
    id: 'offline',
    icon: 'cloud_off',
    title: 'Funciona sem sinal',
    description:
      'Curral raramente tem 4G. Os lançamentos ficam salvos no aparelho e sobem sozinhos quando a equipe reencontra a rede — ninguém digita a mesma pesagem duas vezes.',
    span: '',
    tone: 'default',
    visual: 'none',
  },
  {
    id: 'carencia',
    icon: 'schedule',
    title: 'Alertas de carência',
    description:
      'Todo medicamento aplicado trava a data de abate do animal até o fim da carência. Reduz o risco de resíduo na carcaça e de lote barrado na inspeção do frigorífico.',
    span: '',
    tone: 'accent',
    visual: 'none',
  },
  {
    id: 'conformidade',
    icon: 'description',
    title: 'Conformidade e auditoria',
    description:
      'Receituário, nota de compra e aplicação ficam amarrados ao animal. O dossiê da vistoria sai em PDF ou planilha, já no formato que o auditor pede.',
    span: '',
    tone: 'default',
    visual: 'none',
  },
  {
    id: 'equipe',
    icon: 'groups',
    title: 'A equipe inteira no mesmo dado',
    description:
      'Capataz, veterinário e escritório trabalham sobre o mesmo cadastro, com permissões por função: quem aplica registra no campo pelo celular, quem decide acompanha custo por arroba e GMD do lote no painel.',
    span: 'md:col-span-2',
    tone: 'default',
    visual: 'none',
  },
]

type StepState = 'done' | 'active' | 'todo'

type ProtocolStep = {
  label: string
  meta: string
  state: StepState
}

/** Passos ilustrativos de um protocolo sanitário de um lote. */
const PROTOCOL_STEPS: readonly ProtocolStep[] = [
  {
    label: 'Pesagem e leitura dos brincos',
    meta: 'Lote 24 · 186 animais conferidos',
    state: 'done',
  },
  {
    label: 'Vermifugação — D0',
    meta: 'Aplicada por 2 operadores · baixa automática no estoque',
    state: 'done',
  },
  {
    label: 'Reforço de clostridiose — D+21',
    meta: 'Amanhã · 186 doses já reservadas',
    state: 'active',
  },
  {
    label: 'Fim da carência · liberado para abate',
    meta: 'Embarque bloqueado até a data',
    state: 'todo',
  },
]

const STEP_MARKER: Record<StepState, string> = {
  done: 'bg-primary text-on-primary',
  active: 'border-2 border-primary bg-surface-container-low',
  todo: 'border border-outline-variant bg-surface-container-low',
}

/** Mini-visualização: stepper vertical do protocolo de um lote. */
function ProtocolStepper() {
  return (
    <div className="mt-1 rounded-lg bg-surface-container-low p-5">
      <p className="mb-4 font-label-caps text-label-caps text-on-surface-variant uppercase">
        Lote 24 · protocolo de entrada
      </p>

      <div className="relative">
        <span
          aria-hidden="true"
          className="absolute top-3 bottom-3 left-3.5 w-px -translate-x-1/2 bg-outline-variant"
        />

        <ol role="list" className="relative flex flex-col gap-5">
          {PROTOCOL_STEPS.map((step) => {
            /* Passo futuro fica discreto pelo marcador e por um token mais
               suave — opacidade no texto derrubaria o contraste abaixo do AA. */
            const pending = step.state === 'todo'

            return (
              <li key={step.label} className="flex items-start gap-3">
                <span
                  className={`relative grid h-7 w-7 shrink-0 place-items-center rounded-full ${STEP_MARKER[step.state]} ${pending ? 'opacity-60' : ''}`}
                >
                  {step.state === 'done' && <Icon name="check" size={16} filled weight={600} />}
                  {step.state === 'active' && (
                    <span className="h-2 w-2 animate-pulse rounded-full bg-primary" />
                  )}
                </span>

                <span className="flex flex-col gap-0.5">
                  <span
                    className={`font-body-md text-body-md ${pending ? 'text-on-surface-variant' : 'text-on-surface'}`}
                  >
                    {step.label}
                  </span>
                  <span className="font-body-sm text-body-sm text-on-surface-variant">
                    {step.meta}
                  </span>
                </span>
              </li>
            )
          })}
        </ol>
      </div>
    </div>
  )
}

/** Ilustração do brinco eletrônico com o código de identificação. */
function EarTagVisual() {
  return (
    <div className="relative mt-auto overflow-hidden rounded-lg bg-primary-fixed px-4 pt-5 pb-6">
      <svg
        viewBox="0 0 160 124"
        fill="none"
        aria-hidden="true"
        className="mx-auto block h-36 w-full text-on-primary-fixed-variant"
      >
        <circle cx="80" cy="16" r="9" stroke="currentColor" strokeWidth="3" />
        <path d="M80 25v11" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
        <rect x="22" y="36" width="116" height="74" rx="14" stroke="currentColor" strokeWidth="3" />
        <path
          d="M42 98h76"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          opacity="0.4"
        />
        <path
          d="M42 50h24M74 50h10M92 50h26"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          opacity="0.4"
        />
      </svg>

      <div className="pointer-events-none absolute inset-x-0 top-1/2 flex flex-col items-center gap-1">
        <span className="font-label-caps text-label-caps text-on-primary-fixed-variant uppercase">
          Brinco eletrônico · lote 24
        </span>
        <span className="font-data-metric text-data-metric text-on-primary-fixed">076 4412 9</span>
      </div>
    </div>
  )
}

/** Grade bento de recursos da plataforma. */
export function Features() {
  return (
    <section
      id="recursos"
      aria-label="Recursos da plataforma"
      className="relative overflow-hidden bg-surface py-20 md:py-28"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 animate-float-slow rounded-full bg-primary-fixed opacity-30 blur-3xl"
      />

      <Container className="relative">
        <SectionHeading
          align="center"
          eyebrow="RECURSOS"
          eyebrowIcon="bolt"
          title="Tudo o que acontece no curral vira dado no painel"
          description="Do brinco à nota fiscal: a operação de campo alimenta os indicadores sanitários e financeiros do rebanho sem planilha paralela e sem retrabalho no escritório."
          className="mx-auto"
        />

        <ul role="list" className="mt-12 grid gap-inline-gap md:grid-cols-3">
          {FEATURES.map((card, i) => {
            const tone = TONE[card.tone]

            return (
              <Reveal
                as="li"
                key={card.id}
                delay={i * 60}
                className={card.span ? `h-full ${card.span}` : 'h-full'}
              >
                <article
                  className={`tonal-card flex h-full flex-col gap-3 rounded-lg p-6 ${tone.card}`}
                >
                  <span className={`inline-flex w-fit rounded-sm p-2 ${tone.iconBox}`}>
                    <Icon name={card.icon} size={22} />
                  </span>

                  <h3 className={`font-headline-sm text-headline-sm text-balance ${tone.title}`}>
                    {card.title}
                  </h3>

                  <p className={`font-body-md text-body-md text-pretty ${tone.body}`}>
                    {card.description}
                  </p>

                  {card.visual === 'stepper' && <ProtocolStepper />}
                  {card.visual === 'eartag' && <EarTagVisual />}
                </article>
              </Reveal>
            )
          })}
        </ul>
      </Container>
    </section>
  )
}
