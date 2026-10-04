import type { ElementType, ReactNode } from 'react'
import { cn } from '@/lib/cn'

type ContainerProps = {
  as?: ElementType
  className?: string
  children: ReactNode
}

/** Largura máxima e respiro horizontal padrão de todas as seções. */
export function Container({ as: Tag = 'div', className, children }: ContainerProps) {
  return (
    <Tag className={cn('mx-auto w-full max-w-7xl px-container-padding md:px-8', className)}>
      {children}
    </Tag>
  )
}
