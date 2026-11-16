/**
 * ============================================================
 *  HERO — primeira dobra da landing page
 * ============================================================
 *  O visual é a print REAL da tela inicial do painel MooGe
 *  (src/assets/screens/painel-inicio.png) e o ícone real do app.
 *  Os cartões flutuantes descrevem recursos, não exibem dados.
 */

import { Button } from '@/components/ui/Button'
import { Container } from '@/components/ui/Container'
import { Icon } from '@/components/ui/Icon'
import { Reveal } from '@/components/ui/Reveal'
import { ScreenFrame } from '@/components/ui/ScreenFrame'
import { BRAND, CTA } from '@/config/brand'
import { BRAND_IMAGES, SCREENS } from '@/config/assets'

/**
 * Máscara que dissolve a grade técnica nas bordas da seção.
 * Só usa palavras-chave de cor (é um recorte de opacidade, não
 * uma cor de interface), então não depende de nenhum token.
 */
const MASCARA_GRADE =
  'radial-gradient(120% 90% at 50% 0%, black 0%, color-mix(in oklab, black 55%, transparent) 45%, transparent 78%)'

/** Garantias exibidas logo abaixo dos CTAs. */
const GARANTIAS = [
  'Demonstração de 30 min, sem compromisso',
  'Implantação em 4 semanas',
  'Funciona offline no curral',
] as const

/** Cartões que flutuam ao redor da print — recursos reais, sem números. */
const SATELITES = [
  {
    id: 'carencia',
    icone: 'block',
    valor: 'Carência controlada',
    rotulo: 'venda e abate bloqueados',
    posicao: 'lg:-top-7 lg:-right-5',
    atraso: '0s',
  },
  {
    id: 'offline',
    icone: 'cloud_sync',
    valor: 'Fila offline',
    rotulo: 'sincroniza quando o sinal volta',
    posicao: 'lg:top-1/2 lg:-right-10',
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
                Novo · App de campo com balança, bastão e modo offline
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
                O {BRAND.name} junta o painel web da fazenda e um app de campo que conversa com a
                balança e o bastão leitor de chip. Pesagens, vacinas e tratamentos entram direto do
                curral — e, sem internet, ficam numa fila no aparelho até o sinal voltar.
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
            <ScreenFrame
              title="Início"
              className="transition-transform duration-500 lg:-rotate-1 lg:hover:rotate-0"
            >
              <img
                src={SCREENS.inicio.src}
                width={SCREENS.inicio.width}
                height={SCREENS.inicio.height}
                alt={SCREENS.inicio.alt}
                fetchPriority="high"
                className="block h-auto w-full"
              />
            </ScreenFrame>

            {/* Ícone do app — encosta no canto da print */}
            <div className="absolute -bottom-6 -left-3 flex items-center gap-3 rounded-xl border border-hairline bg-surface-container-lowest p-2 pr-4 shadow-xl sm:-left-6 lg:-bottom-10 lg:-left-8">
              <img
                src={BRAND_IMAGES.appIcon}
                width={56}
                height={56}
                alt=""
                className="size-12 rounded-lg sm:size-14"
              />
              <span className="flex flex-col">
                <span className="font-label-caps text-label-caps text-on-surface-variant uppercase">
                  App de campo
                </span>
                <span className="font-body-md text-body-md font-semibold text-primary">
                  Balança · bastão · offline
                </span>
              </span>
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
                  <span className="font-body-md text-body-md font-semibold text-primary">
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
