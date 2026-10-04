/**
 * ============================================================
 *  SEÇÃO DE PLANOS — DADOS ILUSTRATIVOS (PLACEHOLDER)
 * ============================================================
 *  Valores, limites de rebanho, itens inclusos e SLA abaixo são
 *  exemplos para diagramação e DEVEM ser substituídos pela
 *  tabela comercial definitiva antes de qualquer publicação.
 */

import { useState } from 'react'
import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Reveal } from '@/components/ui/Reveal'
import { Button } from '@/components/ui/Button'
import { Icon } from '@/components/ui/Icon'
import { CTA } from '@/config/brand'
import { cn } from '@/lib/cn'

type Cycle = 'monthly' | 'yearly'

/** `null` = preço sob consulta (renderiza sem o sufixo por cabeça). */
type PlanPrice = { monthly: string; yearly: string } | null

type Plan = {
  id: string
  name: string
  audience: string
  price: PlanPrice
  /** Texto do botão de conversão do card. */
  ctaLabel: string
  highlighted: boolean
  features: string[]
}

const PLANS: Plan[] = [
  {
    id: 'campo',
    name: 'Campo',
    audience: 'Até 500 cabeças · propriedade única',
    price: { monthly: 'R$ 2,90', yearly: 'R$ 2,40' },
    ctaLabel: 'Começar pelo Campo',
    highlighted: false,
    features: [
      'Cadastro individual por brinco eletrônico e leitura por bastão',
      'Protocolos sanitários e reprodutivos ilimitados: vermifugação, clostridiose, IATF',
      'App de campo offline — sincroniza sozinho quando o sinal volta',
      'Inventário farmacológico com baixa automática a cada aplicação',
      'Controle de carência de medicamento por animal antes do embarque',
      'Relatório de GMD e curva de peso por lote',
      'Suporte por e-mail em horário comercial',
    ],
  },
  {
    id: 'fazenda',
    name: 'Fazenda',
    audience: 'Rebanho sem limite · confinamento e pasto rotacionado',
    price: { monthly: 'R$ 4,90', yearly: 'R$ 4,10' },
    ctaLabel: CTA.primary.label,
    highlighted: true,
    features: [
      'Tudo do plano Campo, sem teto de cabeças monitoradas',
      'Inventário com alerta de validade, estoque mínimo e reposição',
      'Rastreabilidade individual do bezerro ao embarque',
      'Exportação fiscal e de conformidade pronta para auditoria',
      'Custo por arroba, margem por lote e projeção de abate',
      'Integração com balança, bastão e planilhas de campo',
      'Suporte prioritário com resposta em até 4 horas úteis',
    ],
  },
  {
    id: 'corporativo',
    name: 'Corporativo',
    audience: 'Múltiplas unidades · grupos e integradoras',
    price: null,
    ctaLabel: 'Falar com vendas',
    highlighted: false,
    features: [
      'Várias fazendas e centros de custo em um único painel',
      'SSO corporativo e permissões por função de equipe',
      'API REST e webhooks para integrar ao ERP da operação',
      'Gerente de conta dedicado e revisão trimestral de indicadores',
      'SLA contratual de 99,9% com suporte 24/7',
      'Migração da base histórica e treinamento presencial das equipes',
      'Trilha de auditoria exportável por período e por usuário',
    ],
  },
]

const CYCLE_OPTIONS: { value: Cycle; label: string }[] = [
  { value: 'monthly', label: 'Mensal' },
  { value: 'yearly', label: 'Anual' },
]

export function Pricing() {
  const [cycle, setCycle] = useState<Cycle>('monthly')
  const isYearly = cycle === 'yearly'

  return (
    <section
      id="planos"
      aria-label="Planos e preços"
      className="relative overflow-hidden bg-surface py-20 md:py-28"
    >
      <Container>
        <SectionHeading
          align="center"
          eyebrow="PLANOS"
          eyebrowIcon="payments"
          title="Você paga por cabeça monitorada, não por licença de usuário"
          description="A cobrança acompanha o rebanho ativo no mês: entrou animal, entra no cálculo; saiu para o frigorífico, sai da conta. Usuários, celulares e currais são ilimitados em todos os planos."
        />

        <Reveal className="mt-10 flex flex-col items-center gap-inline-gap">
          <div
            role="group"
            aria-label="Escolher periodicidade da cobrança"
            className="inline-flex rounded-full bg-surface-container p-1"
          >
            {CYCLE_OPTIONS.map((option) => {
              const active = cycle === option.value
              return (
                <button
                  key={option.value}
                  type="button"
                  aria-pressed={active}
                  onClick={() => setCycle(option.value)}
                  className={cn(
                    'h-11 rounded-full px-6 font-body-md text-body-md transition-all duration-200',
                    active
                      ? 'bg-surface-container-lowest text-primary shadow-sm'
                      : 'text-on-surface-variant hover:text-on-surface',
                  )}
                >
                  {option.label}
                </button>
              )
            })}
          </div>

          {isYearly && (
            <span className="inline-flex items-center gap-2 rounded-full bg-primary-fixed px-3 py-1.5 font-label-caps text-label-caps text-on-primary-fixed uppercase">
              <Icon name="bolt" size={16} filled />2 meses grátis
            </span>
          )}
        </Reveal>

        <div className="mt-12 grid items-start gap-6 md:grid-cols-3">
          {PLANS.map((plan, i) => {
            const quoteOnly = plan.price === null
            const priceLabel = plan.price
              ? isYearly
                ? plan.price.yearly
                : plan.price.monthly
              : 'Sob consulta'

            return (
              <Reveal
                key={plan.id}
                delay={i * 80}
                className={plan.highlighted ? 'mt-4 md:mt-0' : undefined}
              >
                <article
                  className={cn(
                    'relative flex h-full flex-col rounded-lg p-6 md:p-8',
                    plan.highlighted
                      ? 'tonal-card border-primary-container bg-primary-container text-primary-fixed shadow-lg hover:shadow-xl md:scale-[1.03]'
                      : 'tonal-card bg-surface-container-lowest',
                  )}
                >
                  {plan.highlighted && (
                    <span className="absolute -top-3 left-1/2 inline-flex -translate-x-1/2 items-center rounded-full bg-primary-fixed px-3 py-1.5 font-label-caps text-label-caps text-on-primary-fixed uppercase">
                      Mais escolhido
                    </span>
                  )}

                  <h3
                    className={cn(
                      'font-headline-sm text-headline-sm',
                      plan.highlighted ? 'text-primary-fixed' : 'text-primary',
                    )}
                  >
                    {plan.name}
                  </h3>

                  <p
                    className={cn(
                      'mt-1 font-body-sm text-body-sm',
                      plan.highlighted ? 'text-primary-fixed/80' : 'text-on-surface-variant',
                    )}
                  >
                    {plan.audience}
                  </p>

                  <div className="mt-6 flex min-h-11 flex-wrap items-baseline gap-x-2 gap-y-1">
                    <span
                      className={cn(
                        'font-data-metric',
                        quoteOnly ? 'text-data-metric' : 'text-data-metric-lg',
                        plan.highlighted ? 'text-primary-fixed' : 'text-on-surface',
                      )}
                    >
                      {priceLabel}
                    </span>
                    {!quoteOnly && (
                      <span
                        className={cn(
                          'font-body-sm text-body-sm',
                          plan.highlighted ? 'text-primary-fixed/80' : 'text-on-surface-variant',
                        )}
                      >
                        /cabeça/mês
                      </span>
                    )}
                  </div>

                  <p
                    className={cn(
                      'mt-2 font-body-sm text-body-sm',
                      plan.highlighted ? 'text-primary-fixed/80' : 'text-on-surface-variant',
                    )}
                  >
                    {quoteOnly
                      ? 'Proposta desenhada por unidade e volume de rebanho'
                      : isYearly
                        ? 'Cobrado anualmente, com 2 meses de bonificação'
                        : 'Cobrado mensalmente, sem fidelidade'}
                  </p>

                  <Button
                    href={CTA.primary.href}
                    variant={plan.highlighted ? 'inverse' : 'outlined'}
                    className="mt-6 w-full"
                  >
                    {plan.ctaLabel}
                  </Button>

                  <div
                    className={cn(
                      'my-6 h-px w-full',
                      plan.highlighted ? 'bg-primary-fixed/20' : 'bg-hairline',
                    )}
                  />

                  <ul className="flex flex-col gap-3">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2">
                        <Icon
                          name="check_circle"
                          size={18}
                          filled
                          className={cn(
                            'mt-0.5 shrink-0',
                            plan.highlighted ? 'text-primary-fixed' : 'text-primary',
                          )}
                        />
                        <span
                          className={cn(
                            'font-body-sm text-body-sm',
                            plan.highlighted ? 'text-primary-fixed/90' : 'text-on-surface-variant',
                          )}
                        >
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            )
          })}
        </div>

        <Reveal delay={120}>
          <p className="mt-10 text-center font-body-sm text-body-sm text-on-surface-variant text-balance">
            Preços em reais, ilustrativos. Implantação e treinamento inclusos.{' '}
            <a
              href={CTA.primary.href}
              className="inline-flex items-center gap-1 font-semibold text-primary underline underline-offset-4 hover:no-underline"
            >
              Fale com um especialista
              <Icon name="arrow_forward" size={16} />
            </a>
          </p>
        </Reveal>
      </Container>
    </section>
  )
}
