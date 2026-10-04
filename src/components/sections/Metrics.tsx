/**
 * ============================================================
 *  SEÇÃO: Resultados (bento de métricas)
 * ============================================================
 *  ATENÇÃO: todos os números, percentuais e variações abaixo são
 *  PLACEHOLDERS ILUSTRATIVOS. Substituir pelos dados reais de
 *  clientes-piloto (com a devida autorização) antes de publicar.
 */

import { Container } from '@/components/ui/Container'
import { Icon } from '@/components/ui/Icon'
import { Reveal } from '@/components/ui/Reveal'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { cn } from '@/lib/cn'

type Metric = {
  /** Ícone do Material Symbols exibido no quadrado de destaque. */
  icon: string
  /** Classes do quadrado do ícone (fundo + cor do traço). */
  iconClass: string
  /** Rótulo curto em caixa alta. */
  label: string
  /** Valor no formato brasileiro (vírgula decimal). */
  value: string
  /** Classe de cor do valor — ignorada no card em destaque. */
  valueClass: string
  /** Variação opcional exibida no canto superior direito. */
  delta?: string
  /** Card em destaque: fundo primary-container, todo texto em on-primary-container. */
  highlight?: boolean
}

const METRICS: Metric[] = [
  {
    icon: 'vaccines',
    iconClass: 'bg-primary-fixed text-on-primary-fixed-variant',
    label: 'Aderência ao protocolo',
    value: '98,2%',
    valueClass: 'text-primary',
    delta: '+12%',
  },
  {
    icon: 'payments',
    iconClass: 'bg-secondary-fixed text-on-secondary-fixed-variant',
    label: 'Custo sanitário por cabeça',
    value: '−23%',
    valueClass: 'text-secondary',
  },
  {
    icon: 'schedule',
    iconClass: 'bg-tertiary-fixed text-on-tertiary-fixed-variant',
    label: 'Horas de escritório por semana',
    value: '−11h',
    valueClass: 'text-tertiary',
  },
  {
    icon: 'verified_user',
    iconClass: 'bg-primary-fixed text-on-primary-fixed',
    label: 'Lotes com dossiê pronto para auditoria',
    value: '100%',
    valueClass: 'text-on-primary-container',
    highlight: true,
  },
]

export function Metrics() {
  return (
    <section
      id="resultados"
      aria-label="Resultados medidos no rebanho"
      className="relative overflow-hidden bg-surface py-20 md:py-28"
    >
      <Container>
        <SectionHeading
          align="center"
          eyebrow="RESULTADOS"
          eyebrowIcon="insights"
          title="O que muda no rebanho depois de 90 dias de operação"
          description="Vermifugação, clostridioses e carência de medicamento saem do caderno e viram indicadores. O efeito aparece no GMD, no custo por arroba e na auditoria."
        />

        <ul className="mt-12 grid list-none grid-cols-1 gap-inline-gap sm:grid-cols-2 lg:grid-cols-4">
          {METRICS.map((metric, i) => (
            <li key={metric.label} className="h-full">
              <Reveal delay={i * 70} className="h-full">
                <div
                  className={cn(
                    'flex h-full min-h-44 flex-col justify-between rounded-lg p-6',
                    metric.highlight
                      ? 'tonal-card border-primary-container bg-primary-container text-on-primary-container'
                      : 'tonal-card bg-surface-container-lowest',
                  )}
                >
                  <div className="flex items-start justify-between gap-3">
                    <span
                      className={cn(
                        'inline-flex items-center justify-center rounded-sm p-2',
                        metric.iconClass,
                      )}
                    >
                      <Icon name={metric.icon} size={20} />
                    </span>

                    {metric.delta && (
                      <span
                        className={cn(
                          'inline-flex items-center gap-1 font-body-sm text-body-sm',
                          metric.highlight ? 'text-on-primary-container' : 'text-primary',
                        )}
                      >
                        <Icon name="trending_up" size={16} />
                        <span className="sr-only">Variação de </span>
                        {metric.delta}
                      </span>
                    )}
                  </div>

                  <div className="mt-6 flex flex-col gap-1">
                    <p
                      className={cn(
                        'font-label-caps text-label-caps uppercase',
                        metric.highlight ? 'text-on-primary-container' : 'text-on-surface-variant',
                      )}
                    >
                      {metric.label}
                    </p>
                    <p
                      className={cn(
                        'font-data-metric text-data-metric-lg',
                        metric.highlight ? 'text-on-primary-container' : metric.valueClass,
                      )}
                    >
                      {metric.value}
                    </p>
                  </div>
                </div>
              </Reveal>
            </li>
          ))}
        </ul>

        <Reveal delay={320}>
          <p className="mt-8 text-center font-body-sm text-body-sm text-on-surface-variant text-pretty">
            Médias apuradas em fazendas de clientes-piloto entre 2025 e 2026 — dados ilustrativos,
            variam conforme lote, manejo e sistema (pasto rotacionado ou confinamento).
          </p>
        </Reveal>
      </Container>
    </section>
  )
}
