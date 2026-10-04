import { useEffect, useRef, useState, type ElementType, type ReactNode } from 'react'
import { cn } from '@/lib/cn'

type RevealProps = {
  as?: ElementType
  /** Atraso da entrada em ms — use para escalonar itens de uma grade. */
  delay?: number
  className?: string
  children: ReactNode
}

/**
 * Revela o conteúdo quando ele entra na viewport.
 * Respeita `prefers-reduced-motion` via CSS (ver index.css).
 */
export function Reveal({ as: Tag = 'div', delay = 0, className, children }: RevealProps) {
  const ref = useRef<HTMLElement>(null)
  // Sem IntersectionObserver (navegador muito antigo), já nasce visível.
  const [visible, setVisible] = useState(() => typeof IntersectionObserver === 'undefined')

  useEffect(() => {
    const node = ref.current
    if (!node || visible) return

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setVisible(true)
            observer.disconnect()
          }
        }
      },
      { rootMargin: '0px 0px -12% 0px', threshold: 0.08 },
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [visible])

  return (
    <Tag
      ref={ref}
      className={cn('reveal', visible && 'is-visible', className)}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </Tag>
  )
}
