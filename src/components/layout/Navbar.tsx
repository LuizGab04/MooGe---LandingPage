/**
 * Navbar — cabeçalho fixo da landing page.
 *
 * DADOS PLACEHOLDER: o nome da marca vem de `BRAND.name` (ainda provisório) e os
 * links vêm de `NAV_LINKS`. O link "Entrar" aponta para a seção de contato até que
 * exista uma aplicação com autenticação real — substituir pela URL do app quando houver.
 * O monograma é um desenho geométrico sem letras, justamente por o nome não estar definido.
 */

import { useEffect, useState } from 'react'
import { Button } from '@/components/ui/Button'
import { Container } from '@/components/ui/Container'
import { Icon } from '@/components/ui/Icon'
import { useTheme } from '@/hooks/useTheme'
import { cn } from '@/lib/cn'
import { BRAND, CTA, NAV_LINKS } from '@/config/brand'

/** Monograma geométrico: folha/escudo estilizado com nervura e ramificações. */
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

export function Navbar() {
  const { theme, toggleTheme } = useTheme()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  /* Borda + sombra aparecem assim que a página sai do topo. */
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 8)

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  /* Menu do celular: trava o scroll do body, fecha no Escape e ao chegar em lg. */
  useEffect(() => {
    if (!menuOpen) return

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setMenuOpen(false)
    }

    /* Precisa casar com o breakpoint `lg` usado no JSX abaixo. */
    const desktopQuery = window.matchMedia('(min-width: 1024px)')
    const handleBreakpoint = () => {
      if (desktopQuery.matches) setMenuOpen(false)
    }

    document.addEventListener('keydown', handleKeyDown)
    desktopQuery.addEventListener('change', handleBreakpoint)

    return () => {
      document.body.style.overflow = previousOverflow
      document.removeEventListener('keydown', handleKeyDown)
      desktopQuery.removeEventListener('change', handleBreakpoint)
    }
  }, [menuOpen])

  const themeLabel =
    theme === 'dark' ? 'Ativar tema claro do site' : 'Ativar tema escuro do site'

  return (
    <header
      className={cn(
        'sticky top-0 z-50 w-full glass-nav bg-surface/80',
        'border-b transition-[border-color,box-shadow] duration-300',
        scrolled ? 'border-outline-variant shadow-sm' : 'border-transparent',
      )}
    >
      <Container>
        <div className="flex h-16 items-center justify-between gap-2 sm:gap-4 lg:h-18">
          {/* Marca — `min-w-0` + `truncate` evitam estouro lateral em telas estreitas. */}
          <a
            href="#"
            aria-label={`${BRAND.name} — voltar ao topo da página`}
            className="flex min-w-0 items-center gap-inline-gap rounded-sm"
          >
            <Monogram />
            <span className="truncate font-headline-sm text-headline-sm tracking-tight text-primary sm:font-headline-md sm:text-headline-md">
              {BRAND.name}
            </span>
          </a>

          {/* Navegação principal */}
          <nav aria-label="Navegação principal" className="hidden shrink-0 lg:block">
            <ul className="flex items-center gap-1">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="group block rounded-sm px-2 py-2 font-body-md text-body-md whitespace-nowrap text-on-surface-variant transition-colors hover:text-primary xl:px-3"
                  >
                    <span className="relative inline-block">
                      {link.label}
                      <span
                        aria-hidden="true"
                        className="absolute -bottom-1 left-0 h-0.5 w-0 bg-primary transition-all duration-300 group-hover:w-full"
                      />
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Ações */}
          <div className="flex shrink-0 items-center gap-1 sm:gap-inline-gap">
            <button
              type="button"
              onClick={toggleTheme}
              aria-label={themeLabel}
              title={themeLabel}
              className="flex size-11 items-center justify-center rounded-full text-on-surface-variant transition-colors hover:bg-surface-container hover:text-primary"
            >
              <Icon name={theme === 'dark' ? 'light_mode' : 'dark_mode'} size={20} />
            </button>

            <Button href="#contato" variant="text" size="sm" className="hidden md:inline-flex">
              Entrar
            </Button>

            <Button href={CTA.primary.href} size="sm" className="hidden md:inline-flex">
              {CTA.primary.label}
            </Button>

            <button
              type="button"
              onClick={() => setMenuOpen((open) => !open)}
              aria-label={menuOpen ? 'Fechar menu de navegação' : 'Abrir menu de navegação'}
              aria-expanded={menuOpen}
              aria-controls="menu-mobile"
              className="flex size-11 items-center justify-center rounded-full text-on-surface-variant transition-colors hover:bg-surface-container hover:text-primary lg:hidden"
            >
              <Icon name={menuOpen ? 'close' : 'menu'} size={24} />
            </button>
          </div>
        </div>
      </Container>

      {/* Painel do celular — desliza abaixo da barra, sem cobrir a tela inteira */}
      <div
        id="menu-mobile"
        className={cn(
          'overflow-hidden border-outline-variant bg-surface/95 glass-nav transition-all duration-300 lg:hidden',
          menuOpen
            ? 'visible max-h-128 border-t opacity-100'
            : 'invisible max-h-0 border-t-0 opacity-0',
        )}
      >
        <Container>
          <nav aria-label="Navegação principal (menu do celular)" className="py-4">
            <ul className="flex flex-col">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="flex h-12 items-center rounded-sm px-3 font-body-md text-body-md text-on-surface-variant transition-colors hover:bg-surface-container hover:text-primary"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>

            <div className="mt-stack-gap flex flex-col gap-inline-gap border-t border-outline-variant pt-stack-gap">
              <Button
                href={CTA.primary.href}
                size="md"
                className="w-full"
                onClick={() => setMenuOpen(false)}
              >
                {CTA.primary.label}
              </Button>
              <Button
                href="#contato"
                variant="outlined"
                size="md"
                className="w-full"
                onClick={() => setMenuOpen(false)}
              >
                Entrar
              </Button>
            </div>
          </nav>
        </Container>
      </div>
    </header>
  )
}
