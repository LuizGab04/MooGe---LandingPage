/**
 * ============================================================
 *  LogoCloud — prova social discreta logo abaixo do hero.
 * ============================================================
 *  ATENÇÃO: todas as marcas, fazendas, cooperativas e frigoríficos
 *  citados aqui são FICTÍCIOS e servem apenas como placeholder
 *  visual. Os números de credibilidade também são ILUSTRATIVOS.
 *  Substitua `LOGOS` e `STATS` por clientes e métricas reais
 *  antes de publicar — e só use logotipos com autorização.
 */

import type { CSSProperties } from 'react'
import { Container } from '@/components/ui/Container'
import { Reveal } from '@/components/ui/Reveal'
import { cn } from '@/lib/cn'

type LogoMark = {
  /** Nome fictício exibido como wordmark. */
  name: string
  /** Path do símbolo, desenhado na viewBox 24x24. */
  d: string
  /** true = símbolo preenchido; padrão = contorno. */
  filled?: boolean
}

/** Marcas fictícias — trocar por clientes reais. */
const LOGOS: LogoMark[] = [
  {
    name: 'Fazenda Santa Luzia',
    d: 'M12 4.2 3.2 19.6h17.6L12 4.2Zm0 6.4-3.7 9',
  },
  {
    name: 'Agropecuária Rio Verde',
    d: 'M3 8.8c3-2.6 6 2.6 9 0s6-2.6 9 0M3 14.2c3-2.6 6 2.6 9 0s6-2.6 9 0M3 19.6c3-2.6 6 2.6 9 0s6-2.6 9 0',
  },
  {
    name: 'Cooperativa Boi Dourado',
    d: 'M3.6 6.1c0 6.4 3.8 10.6 8.4 10.6s8.4-4.2 8.4-10.6c-2.2 1.8-4.6 2.5-8.4 2.5S5.8 7.9 3.6 6.1Z',
    filled: true,
  },
  {
    name: 'Frigorífico Serra Azul',
    d: 'M2.4 18.8 8.2 8.4l3.9 6.1 3.1-4.4 6.4 8.7H2.4Z',
  },
  {
    name: 'Grãos do Cerrado',
    d: 'M12 21.2V7.4m0 5.8c-3 0-4.6-2-4.6-4.6C10.4 8.6 12 10.6 12 13.2Zm0 0c3 0 4.6-2 4.6-4.6C13.6 8.6 12 10.6 12 13.2Zm0-5.2c-2.4 0-3.6-1.6-3.6-3.7C10.8 4.3 12 5.9 12 8Zm0 0c2.4 0 3.6-1.6 3.6-3.7C13.2 4.3 12 5.9 12 8Z',
  },
  {
    name: 'Fazenda Três Barras',
    d: 'M5.2 6.6v11.8M12 3.8v16.4M18.8 8.4v8.6',
  },
  {
    name: 'Pecuária Ipê Amarelo',
    d: 'M20.2 3.8c0 8.2-5 12.4-11.2 12.4H4.6c0-8.2 5-12.4 11.2-12.4h4.4ZM4.6 20.2c2-6.2 6.1-9.6 11.2-11.6',
  },
  {
    name: 'Confinamento Água Limpa',
    d: 'M12 3.4c3.6 4.1 5.6 6.8 5.6 9.4a5.6 5.6 0 0 1-11.2 0c0-2.6 2-5.3 5.6-9.4Z',
  },
  {
    name: 'Leilões Ponta Norte',
    d: 'M12 3.2 19.6 7.6v8.8L12 20.8 4.4 16.4V7.6L12 3.2Zm-2.6 12V9.2l5.2 5.2V8.8',
  },
]

/** Números ilustrativos — substituir por dados auditados. */
const STATS: { value: string; label: string }[] = [
  { value: '120 mil', label: 'cabeças monitoradas' },
  { value: '38', label: 'municípios atendidos' },
  { value: '4,2 mil', label: 'aplicações registradas por mês' },
]

/**
 * Máscara lateral: o carrossel some suavemente nas pontas.
 * A máscara usa só o canal alfa do gradiente — `currentColor` entra apenas
 * como cor opaca, então nenhuma cor crua precisa ser escrita aqui.
 */
const FADE_MASK_GRADIENT =
  'linear-gradient(to right, transparent 0%, currentColor 10%, currentColor 90%, transparent 100%)'

const fadeMask: CSSProperties = {
  maskImage: FADE_MASK_GRADIENT,
  WebkitMaskImage: FADE_MASK_GRADIENT,
}

export function LogoCloud() {
  return (
    <section
      id="clientes"
      aria-labelledby="clientes-titulo"
      className="relative overflow-hidden border-y border-outline-variant bg-surface-container-low py-12 md:py-16"
    >
      <Container>
        <Reveal>
          <h2
            id="clientes-titulo"
            className="text-center font-label-caps text-label-caps text-on-surface-variant uppercase"
          >
            Operações que já rodam na plataforma
          </h2>
        </Reveal>

        <Reveal delay={80}>
          {/*
            Sem animação (prefers-reduced-motion) a faixa para de rolar sozinha:
            liberamos o scroll lateral da própria faixa e escondemos a cópia
            duplicada, para que nenhum nome fique inalcançável.
          */}
          <div
            className="relative mt-8 overflow-hidden motion-reduce:overflow-x-auto md:mt-10"
            style={fadeMask}
          >
            <div className="flex w-max animate-marquee items-center hover:[animation-play-state:paused]">
              {[0, 1].map((copy) => (
                <ul
                  key={copy}
                  className={cn(
                    'flex shrink-0 items-center',
                    copy === 1 && 'motion-reduce:hidden',
                  )}
                  aria-label={copy === 0 ? 'Produtores e cooperativas atendidos' : undefined}
                  aria-hidden={copy === 1 ? true : undefined}
                >
                  {LOGOS.map((logo) => (
                    <li
                      key={logo.name}
                      className="flex shrink-0 items-center gap-3 px-6 py-2 text-on-surface-variant/80 transition-colors duration-300 hover:text-primary md:px-9"
                    >
                      <svg
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                        focusable="false"
                        className="h-7 w-7 shrink-0"
                      >
                        <path
                          d={logo.d}
                          fill={logo.filled ? 'currentColor' : 'none'}
                          stroke={logo.filled ? 'none' : 'currentColor'}
                          strokeWidth={1.5}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <span className="whitespace-nowrap font-body-lg text-body-lg font-semibold">
                        {logo.name}
                      </span>
                    </li>
                  ))}
                </ul>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal delay={160}>
          <ul className="mx-auto mt-10 grid max-w-3xl grid-cols-1 divide-y divide-outline-variant sm:grid-cols-3 sm:divide-x sm:divide-y-0 md:mt-12">
            {STATS.map((stat) => (
              <li
                key={stat.label}
                className="flex flex-col items-center gap-1 px-6 py-4 text-center"
              >
                <span className="font-data-metric text-data-metric text-primary">{stat.value}</span>
                <span className="font-body-sm text-body-sm text-on-surface-variant text-balance">
                  {stat.label}
                </span>
              </li>
            ))}
          </ul>
        </Reveal>
      </Container>
    </section>
  )
}
