/**
 * ============================================================
 *  DEPOIMENTOS — CONTEÚDO FICTÍCIO DE EXEMPLO
 * ============================================================
 *  Todos os depoimentos, nomes de pessoas, cargos e métricas
 *  desta seção são PLACEHOLDERS ilustrativos, criados apenas
 *  para demonstrar o layout. Nenhuma pessoa, fazenda ou empresa
 *  real é citada. Substitua por depoimentos reais (com
 *  autorização de uso) antes de publicar.
 */

import { Container } from '@/components/ui/Container'
import { Reveal } from '@/components/ui/Reveal'
import { SectionHeading } from '@/components/ui/SectionHeading'

type CardTone = 'default' | 'accent'

type ToneClasses = {
  card: string
  mark: string
  quote: string
  metricValue: string
  metricLabel: string
  divider: string
  name: string
  role: string
}

/**
 * Cores por tom do card. O card em destaque fica sobre
 * `primary-container` (superfície escura nos dois temas), então todo
 * texto dele usa tokens da família primary — nunca `on-surface`.
 */
const TONE: Record<CardTone, ToneClasses> = {
  default: {
    card: 'bg-surface-container-lowest',
    mark: 'text-outline-variant',
    quote: 'text-on-surface',
    metricValue: 'text-primary',
    metricLabel: 'text-on-surface-variant',
    divider: 'border-hairline',
    name: 'text-on-surface',
    role: 'text-on-surface-variant',
  },
  accent: {
    card: 'bg-primary-container',
    mark: 'text-primary-fixed-dim',
    quote: 'text-on-primary-container',
    metricValue: 'text-primary-fixed',
    metricLabel: 'text-primary-fixed-dim',
    divider: 'border-on-primary-container/30',
    name: 'text-primary-fixed',
    role: 'text-primary-fixed-dim',
  },
}

type Testimonial = {
  /** Chave estável da lista — não depende da ordem do array. */
  id: string
  /** Citação — cada uma aponta um ganho concreto e diferente. */
  quote: string
  /** Iniciais usadas no avatar circular (sem imagem externa). */
  initials: string
  name: string
  /** Cargo · tipo de operação (fictícios, sem nome de propriedade). */
  role: string
  /** Número do indicador, exibido em fonte monoespaçada. */
  metricValue: string
  /** Complemento do indicador, em corpo de texto menor. */
  metricLabel: string
  tone: CardTone
}

const TESTIMONIALS: readonly Testimonial[] = [
  {
    id: 'manejo',
    quote:
      '“Antes a gente refazia manejo porque ninguém sabia ao certo qual lote já tinha recebido a dose de clostridiose. Agora o protocolo sai pronto no celular do curral, o brinco eletrônico é lido na hora da aplicação e o lote fecha sem repasse no dia seguinte.”',
    initials: 'AR',
    name: 'Ana Paula Ribeiro',
    role: 'Gerente de pecuária · fazenda de cria (MS)',
    metricValue: '−31%',
    metricLabel: 'de retrabalho de manejo',
    tone: 'default',
  },
  {
    id: 'custo',
    quote:
      '“O inventário mostrou o que ninguém enxergava na planilha: comprávamos vermífugo duas vezes no mesmo trimestre e perdíamos frasco aberto na geladeira. Em três meses o custo por cabeça caiu sem mexer em uma linha do protocolo sanitário.”',
    initials: 'MT',
    name: 'Marcelo Tavares',
    role: 'Sócio-proprietário · recria e engorda (GO)',
    metricValue: '−R$ 11,50',
    metricLabel: 'no custo por cabeça',
    tone: 'accent',
  },
  {
    id: 'rastreabilidade',
    quote:
      '“A auditoria do frigorífico pediu rastreabilidade de dois anos e a carência de cada medicamento aplicado. Exportei o relatório completo em uma tarde, com receituário e nota fiscal anexados a cada aplicação. Passamos sem nenhuma correria de última hora.”',
    initials: 'JM',
    name: 'Juliana Mendes',
    role: 'Coordenadora de conformidade · confinamento (MT)',
    metricValue: '100%',
    metricLabel: 'dos lotes rastreados',
    tone: 'default',
  },
]

export function Testimonials() {
  return (
    <section
      id="depoimentos"
      aria-label="Depoimentos de clientes"
      className="relative overflow-hidden bg-surface-container-low py-20 md:py-28"
    >
      <Container>
        <SectionHeading
          align="center"
          eyebrow="QUEM JÁ USA"
          eyebrowIcon="groups"
          title="Quem toca o rebanho todo dia conta o que mudou"
          description="Relatos de gestores de fazendas de cria, recria e confinamento que trocaram a planilha de curral por um único registro do protocolo ao caixa."
        />

        <ul className="mt-12 grid list-none grid-cols-1 gap-inline-gap md:grid-cols-3">
          {TESTIMONIALS.map((item, i) => {
            const tone = TONE[item.tone]

            return (
              <li key={item.id} className="h-full">
                <Reveal delay={i * 80} className="h-full">
                  <figure
                    className={`tonal-card flex h-full flex-col gap-5 rounded-lg p-6 ${tone.card}`}
                  >
                    {/* Aspas decorativas — puramente visuais */}
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      viewBox="0 0 48 32"
                      className={`h-7 w-11 shrink-0 ${tone.mark}`}
                    >
                      <path
                        fill="currentColor"
                        d="M18.4 0v10.2h-4.1c-2.6 0-4 1.4-4 4.1v1.4h8.1V32H1.6V16.3C1.6 5.9 6.3 0 16.2 0Zm28 0v10.2h-4.1c-2.6 0-4 1.4-4 4.1v1.4h8.1V32H29.6V16.3C29.6 5.9 34.3 0 44.2 0Z"
                      />
                    </svg>

                    <blockquote className={`font-body-lg text-body-lg text-pretty ${tone.quote}`}>
                      {item.quote}
                    </blockquote>

                    <p className="mt-auto flex flex-wrap items-baseline gap-x-2 gap-y-1">
                      <span className={`font-data-metric text-data-metric ${tone.metricValue}`}>
                        {item.metricValue}
                      </span>
                      <span className={`font-body-sm text-body-sm ${tone.metricLabel}`}>
                        {item.metricLabel}
                      </span>
                    </p>

                    <figcaption className={`flex items-center gap-3 border-t pt-5 ${tone.divider}`}>
                      <span
                        aria-hidden="true"
                        className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary-fixed font-headline-sm text-headline-sm text-on-primary-fixed"
                      >
                        {item.initials}
                      </span>

                      <span className="flex min-w-0 flex-col">
                        <cite
                          className={`font-body-md text-body-md font-semibold not-italic ${tone.name}`}
                        >
                          {item.name}
                        </cite>
                        <span className={`font-body-sm text-body-sm text-pretty ${tone.role}`}>
                          {item.role}
                        </span>
                      </span>
                    </figcaption>
                  </figure>
                </Reveal>
              </li>
            )
          })}
        </ul>

        <Reveal delay={260}>
          <p className="mt-10 text-center font-body-sm text-body-sm text-on-surface-variant">
            Depoimentos, nomes e indicadores ilustrativos — exemplos de layout que serão
            substituídos pelos casos reais antes da publicação.
          </p>
        </Reveal>
      </Container>
    </section>
  )
}
