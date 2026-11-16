import { cn } from '@/lib/cn'
import { BRAND } from '@/config/brand'
import { BRAND_IMAGES } from '@/config/assets'

type LogoProps = {
  /** `wordmark` = só pino + nome (navbar); `full` = com a frase da marca (rodapé). */
  variant?: 'wordmark' | 'full'
  /** Classe de altura, ex.: "h-9". A largura acompanha a proporção. */
  className?: string
}

/**
 * Logo oficial em duas versões de cor: a clara (verde + terracota) e a escura
 * (creme + terracota). A troca é só por CSS, seguindo a classe `.dark` do <html>.
 */
export function Logo({ variant = 'wordmark', className }: LogoProps) {
  const img = variant === 'full' ? BRAND_IMAGES.logo : BRAND_IMAGES.wordmark
  const alt = variant === 'full' ? `${BRAND.name} — ${BRAND.tagline}` : BRAND.name
  const base = cn('w-auto select-none', className)

  return (
    <>
      <img
        src={img.light}
        width={img.width}
        height={img.height}
        alt={alt}
        className={cn(base, 'dark:hidden')}
        draggable={false}
      />
      <img
        src={img.dark}
        width={img.width}
        height={img.height}
        alt=""
        aria-hidden="true"
        className={cn(base, 'hidden dark:block')}
        draggable={false}
      />
    </>
  )
}
