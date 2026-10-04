import { cn } from '@/lib/cn'
import { Icon } from '@/components/ui/Icon'
import { Reveal } from '@/components/ui/Reveal'

type SectionHeadingProps = {
  /** Rótulo pequeno em caixa alta acima do título. */
  eyebrow?: string
  /** Ícone opcional ao lado do eyebrow (Material Symbols). */
  eyebrowIcon?: string
  title: string
  description?: string
  align?: 'left' | 'center'
  className?: string
}

/** Cabeçalho padrão de seção: eyebrow + título + descrição. */
export function SectionHeading({
  eyebrow,
  eyebrowIcon,
  title,
  description,
  align = 'left',
  className,
}: SectionHeadingProps) {
  return (
    <Reveal
      className={cn(
        'flex flex-col gap-4',
        align === 'center' && 'items-center text-center',
        className,
      )}
    >
      {eyebrow && (
        <span className="inline-flex w-fit items-center gap-2 rounded-full border border-outline-variant bg-surface-container-lowest px-3 py-1.5 font-label-caps text-label-caps text-on-surface-variant uppercase">
          {eyebrowIcon && <Icon name={eyebrowIcon} size={16} className="text-primary" />}
          {eyebrow}
        </span>
      )}

      <h2
        className={cn(
          'font-headline-lg text-headline-lg text-primary text-balance',
          'md:text-display-lg md:font-display-lg',
        )}
      >
        {title}
      </h2>

      {description && (
        <p
          className={cn(
            'font-body-lg text-body-lg text-on-surface-variant text-pretty',
            align === 'center' ? 'max-w-2xl' : 'max-w-xl',
          )}
        >
          {description}
        </p>
      )}
    </Reveal>
  )
}
