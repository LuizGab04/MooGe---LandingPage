import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react'
import { cn } from '@/lib/cn'

type Variant = 'filled' | 'tonal' | 'outlined' | 'text' | 'inverse'
type Size = 'sm' | 'md' | 'lg'

const base =
  'inline-flex items-center justify-center gap-2 rounded-sm font-body-md whitespace-nowrap ' +
  'transition-all duration-200 active:scale-[0.97] disabled:pointer-events-none disabled:opacity-50 ' +
  'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary'

const variants: Record<Variant, string> = {
  filled: 'bg-primary text-on-primary hover:opacity-90 shadow-sm hover:shadow-md',
  tonal: 'bg-primary-fixed text-on-primary-fixed hover:bg-primary-fixed-dim',
  outlined: 'border border-outline text-on-surface hover:bg-surface-container',
  text: 'text-primary hover:bg-surface-container',
  inverse:
    'bg-primary-fixed text-on-primary-fixed hover:bg-surface-container-lowest hover:text-primary',
}

const sizes: Record<Size, string> = {
  sm: 'h-9 px-4 text-body-sm',
  md: 'h-11 px-6 text-body-md',
  lg: 'h-13 px-8 text-body-md font-semibold',
}

type CommonProps = {
  variant?: Variant
  size?: Size
  className?: string
  children: ReactNode
}

type ButtonAsButton = CommonProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, keyof CommonProps> & { href?: undefined }

type ButtonAsLink = CommonProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof CommonProps> & { href: string }

export type ButtonProps = ButtonAsButton | ButtonAsLink

/** Botão do design system — renderiza <a> quando recebe `href`. */
export function Button({
  variant = 'filled',
  size = 'md',
  className,
  children,
  ...props
}: ButtonProps) {
  const classes = cn(base, variants[variant], sizes[size], className)

  if ('href' in props && props.href !== undefined) {
    return (
      <a className={classes} {...(props as AnchorHTMLAttributes<HTMLAnchorElement>)}>
        {children}
      </a>
    )
  }

  return (
    <button className={classes} {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}>
      {children}
    </button>
  )
}
