/**
 * ============================================================
 *  HERO — primeira dobra da landing page
 * ============================================================
 *  ATENÇÃO: todos os números, lotes, métricas e rótulos do
 *  painel ilustrativo abaixo são PLACEHOLDERS de demonstração.
 *  Substituir por dados reais (ou por uma captura do produto)
 *  antes de publicar. Nenhum nome de empresa é escrito à mão
 *  aqui: quando for preciso citá-lo, use {BRAND.name}.
 */

import { Button } from '@/components/ui/Button'
import { Container } from '@/components/ui/Container'
import { Icon } from '@/components/ui/Icon'
import { Reveal } from '@/components/ui/Reveal'
import { CTA } from '@/config/brand'

/**
 * Máscara que dissolve a grade técnica nas bordas da seção.
 * Só usa palavras-chave de cor (é um recorte de opacidade, não
 * uma cor de interface), então não depende de nenhum token.
 */
const MASCARA_GRADE =
  'radial-gradient(120% 90% at 50% 0%, black 0%, color-mix(in oklab, black 55%, transparent) 45%, transparent 78%)'

/**
 * Barras do mini-gráfico (altura em % do trilho) — dados ilustrativos.
 * A curva é decrescente de propósito: o rótulo ao lado anuncia queda
 * de incidência, então subir as barras contradiria o número.
 */
const BARRAS = [
  { mes: 'Abr', altura: 88, destaque: false },
  { mes: 'Mai', altura: 80, destaque: false },
  { mes: 'Jun', altura: 72, destaque: false },
  { mes: 'Jul', altura: 66, destaque: false },
  { mes: 'Ago', altura: 61, destaque: true },
  { mes: 'Set', altura: 58, destaque: true },
] as const

/** Indicadores do painel flutuante — dados ilustrativos. */
const KPIS = [
  { rotulo: 'Aderência ao protocolo', valor: '98,2%' },
  { rotulo: 'Protocolos ativos', valor: '24' },
] as const

/** Garantias exibidas logo abaixo dos CTAs. */
const GARANTIAS = [
  'Demonstração de 30 min, sem compromisso',
  'Implantação em 4 semanas',
  'Funciona offline no curral',
] as const

/** Cartões satélite que flutuam ao redor do painel — dados ilustrativos. */
const SATELITES = [
  {
    id: 'doses',
    icone: 'vaccines',
    valor: '42 doses',
    rotulo: 'aplicadas hoje',
    posicao: 'lg:-top-6 lg:-right-6',
    atraso: '0s',
  },
  {
    id: 'gmd',
    icone: 'trending_up',
    valor: 'GMD 1,24 kg/dia',
    rotulo: 'média do lote',
    posicao: 'lg:-bottom-12 lg:-left-8',
    atraso: '1.8s',
  },
] as const

export function Hero() {
  return (
    <section
      id="inicio"
      aria-labelledby="hero-titulo"
      className="relative overflow-hidden bg-surface pt-28 pb-20 md:pt-36 md:pb-28"
    >
      {/* Decoração: grade técnica dissolvida nas bordas + halo de cor */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className="absolute inset-0 grid-paper opacity-40"
          style={{ maskImage: MASCARA_GRADE, WebkitMaskImage: MASCARA_GRADE }}
        />
        <div className="absolute -top-48 -right-40 h-[34rem] w-[34rem] rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute -bottom-56 -left-48 h-[30rem] w-[30rem] rounded-full bg-secondary/5 blur-3xl" />
      </div>

      <Container className="relative">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-12 lg:gap-12">
          {/* ---------------- Coluna de texto ---------------- */}
          <div className="lg:col-span-6">
            <Reveal>
              <span className="inline-flex items-center gap-2 rounded-full border border-outline-variant bg-surface-container-lowest px-3 py-1.5 font-label-caps text-label-caps text-on-surface-variant uppercase">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-pulse rounded-full bg-primary motion-reduce:animate-none" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
                </span>
                Novo · Rastreabilidade individual por brinco
              </span>
            </Reveal>

            <Reveal delay={70}>
              <h1
                id="hero-titulo"
                className="mt-6 font-display-lg text-display-lg text-primary text-balance md:text-display-xl lg:text-display-2xl"
              >
                O manejo do rebanho vira{' '}
                <span className="relative inline-block text-secondary">
                  decisão baseada em dados
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 220 10"
                    fill="none"
                    preserveAspectRatio="none"
                    className="absolute -bottom-1 left-0 h-2 w-full text-secondary md:-bottom-2 md:h-2.5"
                  >
                    <path
                      d="M3 7.4C46 3.1 92 1.9 137 3.6c27 1 54 2.4 80 1.5"
                      stroke="currentColor"
                      strokeWidth="3.5"
                      strokeLinecap="round"
                      opacity="0.55"
                    />
                  </svg>
                </span>
              </h1>
            </Reveal>

            <Reveal delay={140}>
              <p className="mt-8 max-w-xl font-body-lg text-body-lg text-on-surface-variant text-pretty">
                Protocolos sanitários, inventário farmacológico e rastreabilidade individual em um só
                painel. Cada aplicação registrada no curral atualiza carência de medicamento, GMD e
                custo por arroba do lote — com ou sem sinal de internet.
              </p>
            </Reveal>

            <Reveal delay={210}>
              <div className="mt-10 flex flex-col gap-inline-gap sm:flex-row sm:items-center">
                <Button href={CTA.primary.href} size="lg" className="w-full sm:w-auto">
                  {CTA.primary.label}
                  <Icon name="arrow_forward" size={18} />
                </Button>
                <Button
                  href={CTA.secondary.href}
                  variant="outlined"
                  size="lg"
                  className="w-full sm:w-auto"
                >
                  {CTA.secondary.label}
                </Button>
              </div>
            </Reveal>

            <Reveal delay={280}>
              <ul className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-x-6 sm:gap-y-2">
                {GARANTIAS.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-2 font-body-sm text-body-sm text-on-surface-variant"
                  >
                    <Icon name="check_circle" size={16} className="text-primary" />
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          {/* ---------------- Coluna visual ---------------- */}
          <Reveal delay={180} className="relative lg:col-span-6">
            {/* Painel do produto (ilustrativo) */}
            <div
              role="img"
              aria-label="Prévia do painel de gestão de rebanho com indicadores ilustrativos do lote 2026-Norte."
              className="relative rounded-xl border border-hairline bg-surface-container-lowest p-5 shadow-2xl transition-transform duration-500 lg:-rotate-1 lg:hover:rotate-0"
            >
              <div aria-hidden="true">
                {/* Barra superior falsa */}
                <div className="flex items-center gap-3 border-b border-hairline pb-4">
                  <div className="flex items-center gap-1.5">
                    <span className="h-2.5 w-2.5 rounded-full bg-error" />
                    <span className="h-2.5 w-2.5 rounded-full bg-tertiary-fixed-dim" />
                    <span className="h-2.5 w-2.5 rounded-full bg-primary-fixed-dim" />
                  </div>
                  <div className="flex min-w-0 flex-1 items-center gap-2 rounded-sm bg-surface-container px-3 py-1.5">
                    <Icon name="qr_code_scanner" size={16} className="text-on-surface-variant" />
                    <span className="truncate font-body-sm text-body-sm text-on-surface-variant">
                      Lote #2026-Norte
                    </span>
                  </div>
                  <Icon name="dashboard" size={18} className="text-on-surface-variant" />
                </div>

                {/* KPIs */}
                <div className="mt-5 grid grid-cols-2 gap-3">
                  {KPIS.map((kpi) => (
                    <div
                      key={kpi.rotulo}
                      className="rounded-lg border border-hairline bg-surface-container-low p-4"
                    >
                      <p className="font-label-caps text-label-caps text-on-surface-variant uppercase">
                        {kpi.rotulo}
                      </p>
                      <p className="mt-2 font-data-metric text-data-metric text-primary">
                        {kpi.valor}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Mini-gráfico de barras */}
                <div className="mt-3 rounded-lg border border-hairline bg-surface-container-low p-4">
                  <div className="flex items-baseline justify-between gap-3">
                    <p className="font-label-caps text-label-caps text-on-surface-variant uppercase">
                      Incidência respiratória
                    </p>
                    <span className="font-data-metric text-data-metric text-primary">−34%</span>
                  </div>
                  <div className="mt-4 flex h-24 items-end gap-2">
                    {BARRAS.map((barra) => (
                      <div
                        key={barra.mes}
                        style={{ height: `${barra.altura}%` }}
                        className={
                          barra.destaque
                            ? 'flex-1 rounded-t-sm bg-primary'
                            : 'flex-1 rounded-t-sm bg-primary/25'
                        }
                      />
                    ))}
                  </div>
                  <div className="mt-2 flex justify-between font-body-sm text-body-sm text-on-surface-variant">
                    <span>{BARRAS[0].mes}</span>
                    <span>{BARRAS[BARRAS.length - 1].mes}</span>
                  </div>
                </div>

                {/* Alerta de protocolo atrasado */}
                <div className="mt-3 flex items-center gap-3 rounded-lg border border-hairline bg-error-container px-4 py-3">
                  <span className="h-2 w-2 shrink-0 rounded-full bg-error" />
                  <p className="font-body-sm text-body-sm text-on-error-container">
                    Controle de carrapatos · 2 dias de atraso
                  </p>
                </div>
              </div>
            </div>

            {/* Cartões satélite — escondidos no mobile para não quebrar o layout */}
            {SATELITES.map((satelite) => (
              <div
                key={satelite.id}
                aria-hidden="true"
                style={{ animationDelay: satelite.atraso }}
                className={`absolute hidden animate-float-slow border border-hairline items-center gap-3 rounded-lg bg-surface-container-lowest px-4 py-3 shadow-xl lg:flex ${satelite.posicao}`}
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-primary-fixed text-on-primary-fixed">
                  <Icon name={satelite.icone} size={18} />
                </span>
                <span className="flex flex-col">
                  <span className="font-data-metric text-data-metric text-primary">
                    {satelite.valor}
                  </span>
                  <span className="font-body-sm text-body-sm text-on-surface-variant">
                    {satelite.rotulo}
                  </span>
                </span>
              </div>
            ))}
          </Reveal>
        </div>
      </Container>
    </section>
  )
}
