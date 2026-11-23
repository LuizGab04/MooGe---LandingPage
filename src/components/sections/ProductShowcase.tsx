/**
 * ============================================================
 *  SEÇÃO "A PLATAFORMA" — o painel web, com prints reais
 * ============================================================
 *  As imagens são capturas REAIS do sistema (src/assets/screens).
 *  Os textos ao lado só descrevem o que aparece nelas — se uma
 *  tela mudar, troque a print e revise o texto correspondente.
 */

import { useState, type KeyboardEvent } from 'react'
import { Container } from '@/components/ui/Container'
import { Icon } from '@/components/ui/Icon'
import { Reveal } from '@/components/ui/Reveal'
import { ScreenFrame } from '@/components/ui/ScreenFrame'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { SCREENS } from '@/config/assets'
import { cn } from '@/lib/cn'

/* ------------------------------------------------------------------ *
 * Conteúdo
 * ------------------------------------------------------------------ */

type Ponto = { icon: string; titulo: string; texto: string }

const TABS = [
  {
    id: 'inicio',
    label: 'Visão geral',
    icon: 'dashboard',
    tela: SCREENS.inicio,
    tituloJanela: 'Início',
    pontos: [
      {
        icon: 'show_chart',
        titulo: 'Evolução do rebanho',
        texto: 'Cabeças ativas no fim de cada mês e o saldo de entradas e saídas.',
      },
      {
        icon: 'donut_large',
        titulo: 'Fase de vida',
        texto: 'Bezerros, garrotes, bois, bezerras, novilhas e vacas, em número e proporção.',
      },
      {
        icon: 'grid_on',
        titulo: 'Lotação dos piquetes',
        texto: 'Carga em UA (peso vivo ÷ 450 kg) contra a capacidade de cada piquete.',
      },
      {
        icon: 'notifications_active',
        titulo: 'Pendências',
        texto: 'Vacinas atrasadas e animais sem pesagem há mais de 90 dias, com GMD desatualizado.',
      },
    ],
  },
  {
    id: 'saude',
    label: 'Saúde do rebanho',
    icon: 'monitor_heart',
    tela: SCREENS.saude,
    tituloJanela: 'Saúde',
    pontos: [
      {
        icon: 'event_busy',
        titulo: 'Atrasadas, hoje e 7 dias',
        texto: 'Vacinas e etapas de protocolo organizadas pelo prazo, do que está vencido ao que vem.',
      },
      {
        icon: 'medical_services',
        titulo: 'Tratamento por etapa',
        texto: 'Cada tratamento mostra a etapa atual, o animal, o lote e o piquete onde ele está.',
      },
      {
        icon: 'block',
        titulo: 'Carência travada',
        texto: 'Animal medicado entra em carência: venda e abate ficam bloqueados até o fim do prazo.',
      },
      {
        icon: 'search',
        titulo: 'Busca por chip',
        texto: 'Filtre por tipo, piquete e protocolo, ache o animal pelo chip e exporte a lista.',
      },
    ],
  },
] as const satisfies readonly {
  id: string
  label: string
  icon: string
  tela: (typeof SCREENS)[keyof typeof SCREENS]
  tituloJanela: string
  pontos: readonly Ponto[]
}[]

type TabId = (typeof TABS)[number]['id']

/** Módulos — exatamente os grupos do menu lateral do sistema. */
const MODULOS = [
  {
    grupo: 'Rebanho',
    icon: 'pets',
    itens: ['Animais', 'Piquetes', 'Saúde', 'Nutrição', 'Lotes de entrada'],
  },
  {
    grupo: 'Financeiro',
    icon: 'account_balance_wallet',
    itens: ['Aprovações', 'Lançamentos', 'Contas a pagar e receber', 'Fechamento de caixa'],
  },
  {
    grupo: 'Cadastros',
    icon: 'folder_shared',
    itens: ['Propriedades rurais', 'Parceiros', 'Produtos'],
  },
  {
    grupo: 'Sistema',
    icon: 'settings',
    itens: ['Configurações', 'Importar dados'],
  },
] as const

/* ------------------------------------------------------------------ *
 * Seção
 * ------------------------------------------------------------------ */

export function ProductShowcase() {
  const [abaAtiva, setAbaAtiva] = useState<TabId>('inicio')
  const aba = TABS.find((tab) => tab.id === abaAtiva) ?? TABS[0]

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
          eyebrow="O PAINEL WEB"
          eyebrowIcon="dashboard"
          title="O rebanho inteiro em uma tela só"
          description="Estas são telas reais do sistema. O que a equipe registra no curral pelo app aparece aqui para o gestor: rebanho, piquetes, saúde e financeiro da fazenda."
        />

        <Reveal className="mt-10" delay={80}>
          <div
            role="tablist"
            aria-label="Telas da plataforma"
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
                  className={cn(
                    'inline-flex h-11 shrink-0 items-center gap-2 rounded-sm px-5 font-body-md text-body-md transition-colors',
                    ativa
                      ? 'bg-primary text-on-primary'
                      : 'text-on-surface-variant hover:bg-surface-container',
                  )}
                >
                  <Icon name={tab.icon} size={20} />
                  {tab.label}
                </button>
              )
            })}
          </div>
        </Reveal>

        <Reveal className="mt-6" delay={140}>
          <div
            role="tabpanel"
            id="painel-plataforma"
            aria-labelledby={`aba-${abaAtiva}`}
            tabIndex={0}
            className="rounded-xl"
          >
            <ScreenFrame title={aba.tituloJanela}>
              <img
                key={aba.id}
                src={aba.tela.src}
                width={aba.tela.width}
                height={aba.tela.height}
                alt={aba.tela.alt}
                loading="lazy"
                className="block h-auto w-full"
              />
            </ScreenFrame>

            <ul className="mt-6 grid gap-inline-gap sm:grid-cols-2 lg:grid-cols-4">
              {aba.pontos.map((ponto) => (
                <li
                  key={ponto.titulo}
                  className="tonal-card flex h-full items-start gap-3 rounded-lg bg-surface-container-lowest p-4"
                >
                  <Icon name={ponto.icon} size={22} className="mt-0.5 shrink-0 text-primary" />
                  <span>
                    <span className="block font-body-md text-body-md font-semibold text-on-surface">
                      {ponto.titulo}
                    </span>
                    <span className="mt-1 block font-body-sm text-body-sm text-on-surface-variant text-pretty">
                      {ponto.texto}
                    </span>
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        {/* ---------------- Módulos (menu lateral real) ---------------- */}
        <div className="mt-20 grid items-center gap-12 md:mt-28 lg:grid-cols-12">
          <Reveal className="flex justify-center lg:col-span-4">
            <ScreenFrame title="Menu" className="w-full max-w-60">
              <img
                src={SCREENS.modulos.src}
                width={SCREENS.modulos.width}
                height={SCREENS.modulos.height}
                alt={SCREENS.modulos.alt}
                loading="lazy"
                className="block h-auto w-full"
              />
            </ScreenFrame>
          </Reveal>

          <div className="lg:col-span-8">
            <SectionHeading
              eyebrow="MÓDULOS"
              eyebrowIcon="apps"
              title="Do curral ao fechamento de caixa"
              description="Troque de fazenda pelo seletor no topo do menu e acesse cada área conforme o seu perfil. Os módulos são os mesmos da barra lateral ao lado."
            />

            <ul className="mt-8 grid gap-inline-gap sm:grid-cols-2">
              {MODULOS.map((modulo, i) => (
                <Reveal as="li" key={modulo.grupo} delay={i * 70}>
                  <div className="tonal-card h-full rounded-lg bg-surface-container-lowest p-5">
                    <div className="flex items-center gap-3">
                      <span className="flex size-9 items-center justify-center rounded-lg bg-primary-fixed text-on-primary-fixed-variant">
                        <Icon name={modulo.icon} size={20} />
                      </span>
                      <h3 className="font-headline-sm text-headline-sm text-primary">
                        {modulo.grupo}
                      </h3>
                    </div>
                    <ul className="mt-4 flex flex-wrap gap-2">
                      {modulo.itens.map((item) => (
                        <li
                          key={item}
                          className="rounded-full border border-outline-variant px-3 py-1 font-body-sm text-body-sm text-on-surface-variant"
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  )
}
