import { clsx, type ClassValue } from 'clsx'
import { extendTailwindMerge } from 'tailwind-merge'

/**
 * O tailwind-merge não conhece os tamanhos de fonte próprios do design system
 * (`text-body-md`, `text-label-caps`...). Sem registrá-los, ele os trata como
 * COR de texto e descarta `text-on-primary` ao lado de `text-body-md`.
 * Mantenha esta lista em sincronia com os `--text-*` de src/index.css.
 */
const twMerge = extendTailwindMerge({
  extend: {
    theme: {
      text: [
        'body-sm',
        'body-md',
        'body-lg',
        'label-caps',
        'headline-sm',
        'headline-md',
        'headline-lg',
        'display-lg',
        'display-xl',
        'display-2xl',
        'data-metric',
        'data-metric-lg',
      ],
    },
  },
})

/** Junta classes condicionais e resolve conflitos de utilitários Tailwind. */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
