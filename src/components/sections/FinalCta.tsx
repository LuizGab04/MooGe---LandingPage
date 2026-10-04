/**
 * ============================================================
 *  SEÇÃO: Chamada final + contato
 * ============================================================
 *  ATENÇÃO: e-mail, telefone, endereço e prazos de resposta vêm
 *  de `@/config/brand` e são PLACEHOLDERS ILUSTRATIVOS.
 *  Substituir pelos dados reais da empresa antes de publicar.
 */

import { BRAND, CTA } from '@/config/brand'
import { Button } from '@/components/ui/Button'
import { Container } from '@/components/ui/Container'
import { Icon } from '@/components/ui/Icon'
import { Reveal } from '@/components/ui/Reveal'

type ContactRow = {
  /** Ícone do Material Symbols exibido à esquerda da linha. */
  icon: string
  /** Rótulo curto em caixa alta. */
  label: string
  /** Valor exibido — sempre vindo de BRAND. */
  value: string
  /** Quando presente, a linha vira link. */
  href?: string
}

const CONTACTS: ContactRow[] = [
  { icon: 'mail', label: 'E-mail', value: BRAND.email, href: `mailto:${BRAND.email}` },
  { icon: 'call', label: 'Telefone', value: BRAND.phone, href: BRAND.phoneHref },
  { icon: 'place', label: 'Endereço', value: BRAND.address },
]

/**
 * Classes do botão secundário — escritas à mão de propósito.
 * O variant `outlined` do `Button` usa `text-on-surface` + `border-outline`,
 * que somem sobre o cartão `bg-brand`.
 */
const outlinedOnDark =
  'inline-flex h-13 items-center justify-center gap-2 rounded-sm border border-on-brand/40 ' +
  'px-8 font-body-md text-body-md font-semibold text-on-brand whitespace-nowrap ' +
  'transition-all duration-200 hover:bg-on-brand/10 active:scale-[0.97] ' +
  'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-on-brand'

export function FinalCta() {
  return (
    <section
      id="contato"
      aria-labelledby="contato-titulo"
      className="relative overflow-hidden bg-surface py-20 md:py-28"
    >
      <Container>
        <Reveal>
          <div className="relative overflow-hidden rounded-xl bg-brand p-8 text-on-brand md:p-14">
            {/* Decoração: textura de grade + halo radial */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 grid-paper opacity-5"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -top-32 -right-24 h-96 w-96 rounded-full bg-primary-fixed/10 blur-3xl animate-float-slow"
            />

            <div className="relative grid grid-cols-1 items-center gap-10 lg:grid-cols-[1.15fr_1fr] lg:gap-16">
              {/* Coluna da esquerda — argumento e ações */}
              <div className="flex flex-col gap-5">
                <span className="inline-flex w-fit items-center gap-2 rounded-full border border-on-brand/30 bg-on-brand/10 px-3 py-1.5 font-label-caps text-label-caps text-on-brand uppercase">
                  <Icon name="handshake" size={16} />
                  Vamos conversar
                </span>

                <h2
                  id="contato-titulo"
                  className="font-headline-lg text-headline-lg text-on-brand text-balance md:font-display-lg md:text-display-lg lg:text-display-xl"
                >
                  Coloque o próximo lote sob protocolo já no primeiro mês
                </h2>

                <p className="max-w-xl font-body-lg text-body-lg text-on-brand text-pretty opacity-90">
                  Mostramos a plataforma com o seu cenário: brincos eletrônicos do rebanho,
                  calendário de vermifugação e clostridiose, carência de medicamento por lote e o
                  custo por arroba chegando ao fechamento. Sem planilha paralela.
                </p>

                <div className="mt-2 flex flex-col gap-inline-gap sm:flex-row sm:items-center">
                  {/*
                    `CTA.primary.href` aponta para `#contato` — que é esta própria seção.
                    Aqui o botão precisa de um destino real, então abre o e-mail.
                    O anel de foco padrão (`outline-primary`) sumiria sobre o cartão
                    `bg-brand`, por isso é trocado por `outline-on-brand`.
                  */}
                  <Button
                    variant="inverse"
                    size="lg"
                    href={`mailto:${BRAND.email}`}
                    className="focus-visible:outline-on-brand"
                  >
                    {CTA.primary.label}
                    <Icon name="arrow_forward" size={20} />
                  </Button>

                  <a
                    className={outlinedOnDark}
                    href={BRAND.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Icon name="support_agent" size={20} />
                    Falar no WhatsApp
                  </a>
                </div>
              </div>

              {/* Coluna da direita — cartão de contato */}
              <div className="rounded-lg bg-on-brand/10 p-6 backdrop-blur">
                <p className="font-label-caps text-label-caps text-on-brand uppercase opacity-90">
                  Canais diretos
                </p>

                <ul className="mt-4 flex flex-col gap-stack-gap">
                  {CONTACTS.map((contact) => (
                    <li key={contact.label} className="flex items-center gap-4">
                      <span className="inline-flex shrink-0 items-center justify-center rounded-sm bg-on-brand/10 p-2 text-on-brand">
                        <Icon name={contact.icon} size={20} />
                      </span>

                      <span className="flex min-w-0 flex-col">
                        <span className="font-label-caps text-label-caps text-on-brand uppercase opacity-90">
                          {contact.label}
                        </span>

                        {contact.href ? (
                          <a
                            className="inline-flex min-h-11 items-center font-body-md text-body-md text-on-brand wrap-anywhere hover:underline"
                            href={contact.href}
                          >
                            {contact.value}
                          </a>
                        ) : (
                          <span className="inline-flex min-h-11 items-center font-body-md text-body-md text-on-brand wrap-anywhere">
                            {contact.value}
                          </span>
                        )}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <p className="mt-6 text-center font-body-sm text-body-sm text-on-surface-variant text-pretty">
            Resposta em até 1 dia útil · Demonstração de 30 minutos, sem compromisso.
          </p>
        </Reveal>
      </Container>
    </section>
  )
}
