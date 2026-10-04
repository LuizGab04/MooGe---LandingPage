/**
 * ============================================================
 *  SEÇÃO "A PLATAFORMA" — demonstração do produto
 * ============================================================
 *  ATENÇÃO: todo o conteúdo de dados deste arquivo (protocolos,
 *  lotes, medicamentos, doses, níveis de estoque, custos e
 *  métricas) é PLACEHOLDER ILUSTRATIVO, criado apenas para
 *  compor o mockup da interface. Os medicamentos são descritos
 *  por categoria genérica de propósito — nenhuma marca comercial
 *  real é citada. Substitua por dados reais — ou por capturas
 *  reais do produto — antes de publicar.
 */

import { useState, type KeyboardEvent } from 'react'
import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'
import { Icon } from '@/components/ui/Icon'
import { Reveal } from '@/components/ui/Reveal'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { cn } from '@/lib/cn'

/* ------------------------------------------------------------------ *
 * Dados do mockup (placeholders)
 * ------------------------------------------------------------------ */

const TABS = [
  { id: 'saude', label: 'Saúde', icon: 'monitor_heart' },
  { id: 'inventario', label: 'Inventário', icon: 'inventory_2' },
  { id: 'financeiro', label: 'Financeiro', icon: 'payments' },
] as const

type TabId = (typeof TABS)[number]['id']

const SIDEBAR = [
  { icon: 'dashboard', label: 'Painel geral', tab: null },
  { icon: 'inventory_2', label: 'Inventário', tab: 'inventario' },
  { icon: 'monitor_heart', label: 'Protocolos', tab: 'saude' },
  { icon: 'payments', label: 'Custos', tab: 'financeiro' },
  { icon: 'person', label: 'Equipe', tab: null },
] as const

const STATUS_CHIP = {
  andamento: 'bg-primary-fixed text-on-primary-fixed',
  critico: 'bg-error text-on-error',
  pendente: 'bg-surface-container-high text-on-surface-variant',
  concluido: 'bg-primary-container text-on-primary-container',
} as const

const PROTOCOLOS = [
  {
    protocolo: 'Vacinação BVD (Reforço)',
    lote: 'Lote #2026-Norte',
    medicamento: 'Vacina viral polivalente',
    dose: '2,0 mL / SC',
    agenda: '24 set 2026',
    status: 'Em andamento',
    tone: 'andamento',
  },
  {
    protocolo: 'Controle estratégico de carrapatos',
    lote: 'Lote #2025-Reprodução',
    medicamento: 'Carrapaticida pour-on',
    dose: '10 mL / 100 kg',
    agenda: '22 set 2026',
    status: 'Crítico',
    tone: 'critico',
  },
  {
    protocolo: 'Clostridiose 8 vias',
    lote: 'Lote #2026-Bezerros-A',
    medicamento: 'Vacina clostridial 8 vias',
    dose: '5,0 mL / SC',
    agenda: '30 set 2026',
    status: 'Pendente',
    tone: 'pendente',
  },
  {
    protocolo: 'Programa de vermifugação',
    lote: 'Lote #2025-Pasto-C',
    medicamento: 'Endectocida injetável LA',
    dose: '1 mL / 50 kg',
    agenda: '15 set 2026',
    status: 'Concluído',
    tone: 'concluido',
  },
] as const

const ESTOQUE = [
  {
    item: 'Vacina viral polivalente',
    detalhe: 'frasco 50 doses',
    quantidade: '118 un',
    pct: 82,
    baixo: false,
  },
  {
    item: 'Vacina clostridial 8 vias',
    detalhe: 'frasco 250 mL',
    quantidade: '64 un',
    pct: 58,
    baixo: false,
  },
  {
    item: 'Endectocida injetável LA',
    detalhe: 'frasco 500 mL',
    quantidade: '9 un',
    pct: 12,
    baixo: true,
  },
  {
    item: 'Carrapaticida pour-on',
    detalhe: 'galão 5 L',
    quantidade: '27 un',
    pct: 44,
    baixo: false,
  },
] as const

const CUSTOS = [
  { mes: 'Mar', altura: 'h-20', destaque: false },
  { mes: 'Abr', altura: 'h-28', destaque: false },
  { mes: 'Mai', altura: 'h-16', destaque: false },
  { mes: 'Jun', altura: 'h-32', destaque: false },
  { mes: 'Jul', altura: 'h-24', destaque: false },
  { mes: 'Ago', altura: 'h-40', destaque: false },
  { mes: 'Set', altura: 'h-36', destaque: true },
] as const

const RESUMO_FINANCEIRO = [
  { rotulo: 'Custo sanitário / arroba', valor: 'R$ 4,80', apoio: '−9,4% vs. agosto' },
  { rotulo: 'Custo sanitário / cabeça', valor: 'R$ 38,40', apoio: 'média dos 7 lotes ativos' },
] as const

const DESTAQUES = [
  {
    icon: 'scale',
    texto: 'Bastão de leitura e balança conectados — o peso entra sem digitação.',
  },
  {
    icon: 'medication',
    texto: 'Histórico de cada frasco: nota de compra, lote do fabricante e validade.',
  },
  {
    icon: 'query_stats',
    texto: 'Fechamento do lote em uma tela: entradas, mortalidade, arrobas e margem.',
  },
] as const

/* ------------------------------------------------------------------ *
 * Painéis
 * ------------------------------------------------------------------ */

function PainelSaude() {
  return (
    <div className="overflow-x-auto">
      <table className="w-full min-w-[680px] border-collapse text-left">
        <caption className="sr-only">
          Protocolos sanitários agendados por lote, com medicamento, dose, data e situação.
        </caption>
        <thead>
          <tr className="border-b border-outline-variant">
            <th
              scope="col"
              className="px-4 py-3 font-label-caps text-label-caps text-on-surface-variant uppercase"
            >
              Protocolo
            </th>
            <th
              scope="col"
              className="px-4 py-3 font-label-caps text-label-caps text-on-surface-variant uppercase"
            >
              Lote
            </th>
            <th
              scope="col"
              className="px-4 py-3 font-label-caps text-label-caps text-on-surface-variant uppercase"
            >
              Medicamento · Dose
            </th>
            <th
              scope="col"
              className="px-4 py-3 font-label-caps text-label-caps text-on-surface-variant uppercase"
            >
              Agenda
            </th>
            <th
              scope="col"
              className="px-4 py-3 font-label-caps text-label-caps text-on-surface-variant uppercase"
            >
              Status
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-outline-variant">
          {PROTOCOLOS.map((linha) => (
            <tr
              key={linha.protocolo}
              className={cn(
                'align-top transition-colors',
                linha.tone === 'critico' ? 'bg-error-container/20' : 'hover:bg-surface-container-low',
              )}
            >
              <th
                scope="row"
                className="px-4 py-4 font-body-md text-body-md font-semibold text-on-surface"
              >
                {linha.protocolo}
              </th>
              <td className="px-4 py-4 font-body-sm text-body-sm text-on-surface-variant">
                {linha.lote}
              </td>
              <td className="px-4 py-4">
                <span className="block font-body-sm text-body-sm text-on-surface">
                  {linha.medicamento}
                </span>
                <span className="mt-1 block font-data-metric text-body-sm text-on-surface-variant">
                  {linha.dose}
                </span>
              </td>
              <td
                className={
                  linha.tone === 'critico'
                    ? 'px-4 py-4 font-body-sm text-body-sm font-semibold text-error'
                    : 'px-4 py-4 font-body-sm text-body-sm text-on-surface-variant'
                }
              >
                {linha.agenda}
              </td>
              <td className="px-4 py-4">
                <span
                  className={`inline-flex items-center rounded-full px-3 py-1 font-label-caps text-label-caps uppercase ${STATUS_CHIP[linha.tone]}`}
                >
                  {linha.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

function PainelInventario() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-5">
        {ESTOQUE.map((produto) => (
          <div key={produto.item} className="flex flex-col gap-2">
            <div className="flex flex-wrap items-baseline justify-between gap-inline-gap">
              <span className="font-body-md text-body-md font-semibold text-on-surface">
                {produto.item}
                <span className="ml-2 font-body-sm text-body-sm font-normal text-on-surface-variant">
                  {produto.detalhe}
                </span>
              </span>

              <span className="flex items-center gap-2">
                {produto.baixo && (
                  <span className="inline-flex items-center rounded-full bg-error px-2.5 py-0.5 font-label-caps text-label-caps text-on-error uppercase">
                    Baixo
                  </span>
                )}
                <span className="font-data-metric text-body-md text-on-surface">
                  {produto.quantidade}
                </span>
              </span>
            </div>

            <div
              role="progressbar"
              aria-label={`Estoque de ${produto.item}`}
              aria-valuenow={produto.pct}
              aria-valuemin={0}
              aria-valuemax={100}
              className="h-2 w-full overflow-hidden rounded-full bg-surface-container"
            >
              <div
                className={cn('h-full rounded-full', produto.baixo ? 'bg-error' : 'bg-primary')}
                style={{ width: `${produto.pct}%` }}
              />
            </div>
          </div>
        ))}
      </div>

      <div className="flex flex-wrap items-center justify-between gap-inline-gap border-t border-outline-variant pt-5">
        <p className="font-body-sm text-body-sm text-on-surface-variant">
          Consumo projetado cobre 11 dias do calendário sanitário em aberto.
        </p>
        <Button type="button" variant="outlined" size="sm">
          <Icon name="inventory_2" size={18} />
          Reordenar suprimentos
        </Button>
      </div>
    </div>
  )
}

function PainelFinanceiro() {
  return (
    <div className="flex flex-col gap-8 lg:flex-row lg:items-stretch">
      <div className="flex-1">
        <p className="font-label-caps text-label-caps text-on-surface-variant uppercase">
          Custo sanitário por lote · últimos 7 meses
        </p>

        <div
          role="img"
          aria-label="Gráfico de barras do custo sanitário por lote nos últimos sete meses, com queda de 9,4% no último mês."
          className="mt-5 flex h-44 items-end gap-2"
        >
          {CUSTOS.map((barra) => (
            <div key={barra.mes} className="flex flex-1 flex-col items-center justify-end gap-2">
              <div
                className={cn(
                  'w-full rounded-sm',
                  barra.altura,
                  barra.destaque ? 'bg-primary' : 'bg-primary-fixed-dim',
                )}
              />
            </div>
          ))}
        </div>

        <div aria-hidden="true" className="mt-3 flex gap-2 border-t border-outline-variant pt-3">
          {CUSTOS.map((barra) => (
            <span
              key={barra.mes}
              className="flex-1 text-center font-body-sm text-body-sm text-on-surface-variant"
            >
              {barra.mes}
            </span>
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-4 lg:w-64 lg:shrink-0">
        {RESUMO_FINANCEIRO.map((metrica) => (
          <div
            key={metrica.rotulo}
            className="tonal-card rounded-lg bg-surface-container-low p-4"
          >
            <p className="font-label-caps text-label-caps text-on-surface-variant uppercase">
              {metrica.rotulo}
            </p>
            <p className="mt-2 font-data-metric text-data-metric text-primary">{metrica.valor}</p>
            <p className="mt-1 font-body-sm text-body-sm text-on-surface-variant">
              {metrica.apoio}
            </p>
          </div>
        ))}

        <p className="font-body-sm text-body-sm text-on-surface-variant">
          Cada dose baixada no curral vira custo no lote, sem digitação dupla.
        </p>
      </div>
    </div>
  )
}

/* ------------------------------------------------------------------ *
 * Seção
 * ------------------------------------------------------------------ */

export function ProductShowcase() {
  const [abaAtiva, setAbaAtiva] = useState<TabId>('saude')

  function aoNavegarPorTeclado(event: KeyboardEvent<HTMLDivElement>) {
    if (event.key !== 'ArrowRight' && event.key !== 'ArrowLeft') return

    event.preventDefault()
    const atual = TABS.findIndex((tab) => tab.id === abaAtiva)
    const passo = event.key === 'ArrowRight' ? 1 : -1
    const proxima = TABS[(atual + passo + TABS.length) % TABS.length]

    setAbaAtiva(proxima.id)
    document.getElementById(`aba-${proxima.id}`)?.focus()
  }

  return (
    <section
      id="plataforma"
      aria-label="A plataforma"
      className="relative overflow-hidden bg-surface-container-low py-20 md:py-28"
    >
      <Container>
        <SectionHeading
          align="center"
          eyebrow="A PLATAFORMA"
          eyebrowIcon="dashboard"
          title="O rebanho inteiro em uma tela só"
          description="Três visões da mesma operação: o que está agendado, o que tem em estoque e quanto isso custou por arroba. O que o vaqueiro registra no curral aparece no painel do gestor em segundos."
        />

        <Reveal className="mt-10" delay={80}>
          <div
            role="tablist"
            aria-label="Visões da plataforma"
            onKeyDown={aoNavegarPorTeclado}
            className="flex gap-2 overflow-x-auto pb-2 md:justify-center"
            style={{ scrollbarWidth: 'none' }}
          >
            {TABS.map((tab) => {
              const ativa = tab.id === abaAtiva
              return (
                <button
                  key={tab.id}
                  type="button"
                  role="tab"
                  id={`aba-${tab.id}`}
                  aria-selected={ativa}
                  aria-controls="painel-plataforma"
                  tabIndex={ativa ? 0 : -1}
                  onClick={() => setAbaAtiva(tab.id)}
                  className={`inline-flex h-11 shrink-0 items-center gap-2 rounded-sm px-5 font-body-md text-body-md transition-colors ${
                    ativa
                      ? 'bg-primary text-on-primary'
                      : 'text-on-surface-variant hover:bg-surface-container'
                  }`}
                >
                  <Icon name={tab.icon} size={20} />
                  {tab.label}
                </button>
              )
            })}
          </div>
        </Reveal>

        <Reveal className="mt-6" delay={140}>
          <div className="overflow-hidden rounded-xl border border-hairline bg-surface-container-lowest shadow-2xl">
            {/* Barra de título do aplicativo — decorativa */}
            <div
              aria-hidden="true"
              className="flex h-10 items-center gap-3 border-b border-hairline bg-surface-container-low px-4"
            >
              <span className="flex items-center gap-1.5">
                <span className="block size-3 rounded-full bg-error" />
                <span className="block size-3 rounded-full bg-tertiary-fixed-dim" />
                <span className="block size-3 rounded-full bg-primary-fixed-dim" />
              </span>

              <span className="flex h-6 w-full max-w-xs items-center gap-2 rounded-sm bg-surface-container px-2 font-body-sm text-body-sm text-on-surface-variant">
                <Icon name="search" size={14} />
                <span className="truncate">Buscar lote ou protocolo…</span>
              </span>
            </div>

            <div className="flex">
              {/* Navegação lateral do aplicativo — decorativa */}
              <nav
                aria-hidden="true"
                className="hidden w-56 shrink-0 flex-col gap-1 border-r border-hairline bg-surface-container-low p-3 md:flex"
              >
                {SIDEBAR.map((item) => {
                  const ativo = item.tab === abaAtiva
                  return (
                    <span
                      key={item.label}
                      className={`flex items-center gap-3 rounded-sm px-3 py-2.5 font-body-sm text-body-sm ${
                        ativo
                          ? 'bg-surface-container-highest font-bold text-primary'
                          : 'text-on-surface-variant'
                      }`}
                    >
                      <Icon name={item.icon} size={20} filled={ativo} />
                      {item.label}
                    </span>
                  )
                })}

                <span className="mt-auto flex items-center gap-3 rounded-sm bg-surface-container px-3 py-2.5 font-body-sm text-body-sm text-on-surface-variant">
                  <Icon name="cloud_off" size={20} />
                  Modo campo ativo
                </span>
              </nav>

              <div
                role="tabpanel"
                id="painel-plataforma"
                aria-labelledby={`aba-${abaAtiva}`}
                tabIndex={0}
                className="min-w-0 flex-1 p-4 md:p-6"
              >
                {abaAtiva === 'saude' && <PainelSaude />}
                {abaAtiva === 'inventario' && <PainelInventario />}
                {abaAtiva === 'financeiro' && <PainelFinanceiro />}
              </div>
            </div>
          </div>
        </Reveal>

        <ul className="mt-10 grid gap-inline-gap md:grid-cols-3">
          {DESTAQUES.map((destaque, i) => (
            <Reveal as="li" key={destaque.icon} delay={i * 70}>
              <div className="tonal-card flex h-full items-start gap-3 rounded-lg bg-surface-container-lowest p-4">
                <Icon name={destaque.icon} size={22} className="mt-0.5 shrink-0 text-primary" />
                <p className="font-body-sm text-body-sm text-on-surface-variant text-pretty">
                  {destaque.texto}
                </p>
              </div>
            </Reveal>
          ))}
        </ul>
      </Container>
    </section>
  )
}
