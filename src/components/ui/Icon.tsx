import type { CSSProperties } from 'react'
import { cn } from '@/lib/cn'

type IconProps = {
  /** Nome do ícone no Material Symbols Outlined, ex.: "monitor_heart". */
  name: string
  /** Tamanho em px (padrão 24). */
  size?: number
  /** Ícone preenchido (FILL 1). */
  filled?: boolean
  /** Peso do traço (100–700, padrão 400). */
  weight?: number
  className?: string
}

/**
 * Wrapper do Material Symbols Outlined — mesma família de ícones do design
 * de referência. Sempre aria-hidden: o rótulo acessível vem do texto ao lado.
 */
export function Icon({ name, size = 24, filled = false, weight = 400, className }: IconProps) {
  const style: CSSProperties = {
    fontSize: `${size}px`,
    lineHeight: 1,
    width: `${size}px`,
    fontVariationSettings: `'FILL' ${filled ? 1 : 0}, 'wght' ${weight}, 'GRAD' 0, 'opsz' ${size}`,
  }

  return (
    <span aria-hidden="true" className={cn('material-symbols-outlined', className)} style={style}>
      {name}
    </span>
  )
}
