/**
 * Footer — rodapé institucional da landing page.
 *
 * DADOS PLACEHOLDER: nome, e-mail, telefone, endereço e redes sociais vêm de
 * `BRAND` (ainda provisórios). Os links das colunas "Empresa" e da barra legal
 * apontam para "#" até que as páginas existam — trocar pelas rotas reais.
 * O formulário de newsletter não tem backend: ver o TODO em `handleSubmit`.
 */

import { useState } from 'react'
import type { FormEvent } from 'react'
import { Button } from '@/components/ui/Button'
import { Container } from '@/components/ui/Container'
import { Icon } from '@/components/ui/Icon'
import { BRAND, NAV_LINKS } from '@/config/brand'

/** Mesmo monograma da navbar: folha/escudo com nervura e ramificações. */
function Monogram() {
  return (
    <span className="flex size-8 shrink-0 items-center justify-center rounded-sm bg-primary text-on-primary">
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.8}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="size-5"
        aria-hidden="true"
        focusable="false"
      >
        <path d="M12 3.2c4.4 2.6 6.8 6.1 6.8 10.1a6.8 6.8 0 0 1-13.6 0c0-4 2.4-7.5 6.8-10.1Z" />
        <path d="M12 8.6v11" />
        <path d="m12 13.4 3.1-2.4" />
        <path d="m12 16.6-3.1-2.4" />
      </svg>
    </span>
  )
}

/* Logos de marca não existem no Material Symbols — desenhos genéricos em currentColor. */
function LinkedInGlyph() {
  return (
    <svg viewBox="0 0 24 24" className="size-5" aria-hidden="true" focusable="false">
      <rect
        x="3"
        y="3"
        width="18"
        height="18"
        rx="4"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.6}
      />
      <circle cx="8.2" cy="8.4" r="1.2" fill="currentColor" />
      <rect x="7.4" y="10.8" width="1.7" height="6" rx="0.6" fill="currentColor" />
      <path
        d="M11.6 16.8v-6m0 2.2c0-1.2.9-2.2 2.1-2.2s2.1 1 2.1 2.2v4"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.6}
        strokeLinecap="round"
      />
    </svg>
  )
}

function InstagramGlyph() {
  return (
    <svg viewBox="0 0 24 24" className="size-5" aria-hidden="true" focusable="false">
      <rect
        x="3.5"
        y="3.5"
        width="17"
        height="17"
        rx="5"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.6}
      />
      <circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" strokeWidth={1.6} />
      <circle cx="16.8" cy="7.2" r="1.1" fill="currentColor" />
    </svg>
  )
}

function YouTubeGlyph() {
  return (
    <svg viewBox="0 0 24 24" className="size-5" aria-hidden="true" focusable="false">
      <rect
        x="2.5"
        y="5"
        width="19"
        height="14"
        rx="4.5"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.6}
      />
      <path d="M10.4 9.2 15 12l-4.6 2.8V9.2Z" fill="currentColor" />
    </svg>
  )
}

const SOCIAL_LINKS = [
  { label: 'LinkedIn', href: BRAND.social.linkedin, Glyph: LinkedInGlyph },
  { label: 'Instagram', href: BRAND.social.instagram, Glyph: InstagramGlyph },
  { label: 'YouTube', href: BRAND.social.youtube, Glyph: YouTubeGlyph },
]

const COMPANY_LINKS = [
  { label: 'Sobre', href: '#' },
  { label: 'Carreiras', href: '#' },
  { label: 'Blog', href: '#' },
  { label: 'Imprensa', href: '#' },
]

const LEGAL_LINKS = [
  { label: 'Privacidade', href: '#' },
  { label: 'Termos', href: '#' },
  { label: 'Cookies', href: '#' },
]

const columnTitle = 'font-label-caps text-label-caps uppercase text-on-surface-variant mb-4'
const footerLink =
  'block py-1.5 font-body-sm text-body-sm text-on-surface-variant transition-colors hover:text-primary'

export function Footer() {
  const [subscribed, setSubscribed] = useState(false)

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    // TODO: plugar aqui a chamada real da API de newsletter (POST /api/newsletter)
    // e tratar erro/carregamento. Hoje o estado é apenas otimista, sem backend.
    setSubscribed(true)
  }

  return (
    <footer className="border-t border-outline-variant bg-surface-container-low pt-16 pb-8">
      <h2 className="sr-only">Rodapé do site</h2>

      <Container>
        <div className="grid gap-10 md:grid-cols-12">
          {/* Marca */}
          <div className="md:col-span-4">
            <div className="flex items-center gap-inline-gap">
              <Monogram />
              <span className="font-headline-md text-headline-md tracking-tight text-primary">
                {BRAND.name}
              </span>
            </div>

            <p className="mt-stack-gap max-w-xs font-body-sm text-body-sm text-on-surface-variant">
              {BRAND.description}
            </p>

            <ul className="mt-6 flex items-center gap-inline-gap">
              {SOCIAL_LINKS.map(({ label, href, Glyph }) => (
                <li key={label}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${BRAND.name} no ${label}`}
                    className="flex size-11 items-center justify-center rounded-full border border-outline-variant p-2 text-on-surface-variant transition-colors hover:bg-surface-container hover:text-primary"
                  >
                    <Glyph />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Navegação */}
          <nav aria-labelledby="rodape-navegacao" className="md:col-span-2">
            <h3 id="rodape-navegacao" className={columnTitle}>
              Navegação
            </h3>
            <ul>
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className={footerLink}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Empresa */}
          <nav aria-labelledby="rodape-empresa" className="md:col-span-2">
            <h3 id="rodape-empresa" className={columnTitle}>
              Empresa
            </h3>
            <ul>
              {COMPANY_LINKS.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className={footerLink}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contato + newsletter */}
          <div className="md:col-span-4">
            <h3 className={columnTitle}>Contato</h3>

            <ul className="flex flex-col gap-1">
              <li>
                <a
                  href={`mailto:${BRAND.email}`}
                  className="flex items-center gap-inline-gap py-1.5 font-body-sm text-body-sm text-on-surface-variant transition-colors hover:text-primary"
                >
                  <Icon name="mail" size={18} className="shrink-0 text-primary" />
                  <span className="min-w-0 break-words">{BRAND.email}</span>
                </a>
              </li>
              <li>
                <a
                  href={BRAND.phoneHref}
                  className="flex items-center gap-inline-gap py-1.5 font-body-sm text-body-sm text-on-surface-variant transition-colors hover:text-primary"
                >
                  <Icon name="call" size={18} className="shrink-0 text-primary" />
                  {BRAND.phone}
                </a>
              </li>
              <li className="flex items-start gap-inline-gap py-1.5 font-body-sm text-body-sm text-on-surface-variant">
                <Icon name="location_on" size={18} className="shrink-0 text-primary" />
                {BRAND.address}
              </li>
            </ul>

            <form onSubmit={handleSubmit} className="mt-6">
              <label htmlFor="newsletter-email" className="sr-only">
                Seu e-mail para receber as novidades
              </label>

              <div className="flex flex-col gap-inline-gap sm:flex-row">
                <input
                  id="newsletter-email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  aria-describedby="newsletter-descricao"
                  placeholder="voce@fazenda.com.br"
                  className="h-11 w-full rounded-sm border border-outline-variant bg-surface-container-lowest px-4 font-body-md text-body-md text-on-surface placeholder:text-on-surface-variant"
                />
                <Button type="submit" size="md" className="shrink-0">
                  Assinar
                </Button>
              </div>

              <p
                id="newsletter-descricao"
                className="mt-2 font-body-sm text-body-sm text-on-surface-variant"
              >
                Boletim mensal sobre sanidade de rebanho, rastreabilidade e conformidade.
              </p>

              <p role="status" className="mt-2 min-h-5 font-body-sm text-body-sm text-primary">
                {subscribed ? 'Inscrição registrada. Obrigado!' : ''}
              </p>
            </form>
          </div>
        </div>

        {/* Barra inferior */}
        <div className="mt-12 flex flex-col gap-4 border-t border-outline-variant pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-body-sm text-body-sm text-on-surface-variant">
            © {BRAND.founded} {BRAND.legalName}. Todos os direitos reservados.
          </p>

          <ul className="flex flex-wrap items-center gap-x-6">
            {LEGAL_LINKS.map((link) => (
              <li key={link.label}>
                <a href={link.href} className={footerLink}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </footer>
  )
}
