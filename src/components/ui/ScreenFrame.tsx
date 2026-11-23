import type { ReactNode } from 'react'
import { cn } from '@/lib/cn'
import { BRAND } from '@/config/brand'
import { BRAND_IMAGES } from '@/config/assets'

type ScreenFrameProps = {
  /** Texto da barra de título, ex.: "Início". */
  title: string
  className?: string
  children: ReactNode
}

/**
 * Moldura de janela para as prints reais do sistema. As capturas são do tema
 * escuro do app, então a moldura usa tons neutros escuros fixos nos dois
 * temas do site — assim a print não parece "colada" num fundo claro.
 */
export function ScreenFrame({ title, className, children }: ScreenFrameProps) {
  return (
    <div
      className={cn(
        'overflow-hidden rounded-xl border border-hairline bg-screen shadow-2xl',
        className,
      )}
    >
      <div
        aria-hidden="true"
        className="flex h-9 items-center gap-3 border-b border-white/10 bg-screen-bar px-4"
      >
        <span className="flex items-center gap-1.5">
          <span className="block size-2.5 rounded-full bg-white/20" />
          <span className="block size-2.5 rounded-full bg-white/20" />
          <span className="block size-2.5 rounded-full bg-white/20" />
        </span>
        <span className="flex min-w-0 items-center gap-2 font-body-sm text-body-sm text-white/60">
          <img src={BRAND_IMAGES.mark} alt="" width={16} height={16} className="size-4 rounded-[4px]" />
          <span className="truncate">
            {BRAND.name} · {title}
          </span>
        </span>
      </div>
      {children}
    </div>
  )
}
