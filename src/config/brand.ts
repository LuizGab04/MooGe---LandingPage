/**
 * ============================================================
 *  IDENTIDADE DA MARCA — ÚNICO LUGAR PARA TROCAR NOME E CONTATO
 * ============================================================
 *  Nenhum outro arquivo do projeto tem o nome escrito à mão.
 *  Logo, ícone do app e prints do sistema ficam em
 *  `src/assets/brand` e `src/assets/screens` (ver src/config/assets.ts).
 *
 *  PENDENTE: razão social, domínio e redes sociais ainda são
 *  placeholders — trocar pelos dados reais.
 */

export const BRAND = {
  /** Nome da empresa exibido na navbar, hero, rodapé e <title>. */
  name: 'MooGe',
  /** Usado em assinaturas e copyright. TODO: trocar pela razão social registrada. */
  legalName: 'MooGe',
  /** Frase de posicionamento — a mesma da logo. */
  tagline: 'Tecnologia para todos os animais',
  /** Descrição de uma linha usada em SEO e no rodapé. */
  description:
    'Gestão de rebanho na web e app de campo conectado à balança e ao bastão leitor — com fila offline para quem trabalha longe do sinal.',
  domain: 'suaempresa.com.br',
  email: 'mooge.tecnologia@gmail.com',
  /** Número de contato — atende por WhatsApp. */
  phone: '+55 (61) 9 9111-7168',
  phoneHref: 'tel:+5561991117168',
  whatsapp: 'https://wa.me/5561991117168',
  founded: 2026,
  social: {
    instagram: 'https://instagram.com/',
    linkedin: 'https://linkedin.com/',
    youtube: 'https://youtube.com/',
  },
} as const

/** Links da navegação principal — usados na navbar e no rodapé. */
export const NAV_LINKS = [
  { label: 'Plataforma', href: '#plataforma' },
  { label: 'App de campo', href: '#app' },
  { label: 'Recursos', href: '#recursos' },
  { label: 'Como funciona', href: '#como-funciona' },
  { label: 'Planos', href: '#planos' },
  { label: 'Dúvidas', href: '#faq' },
] as const

/** Rótulos das chamadas para ação, reaproveitados em várias seções. */
export const CTA = {
  primary: { label: 'Agendar demonstração', href: '#contato' },
  secondary: { label: 'Ver a plataforma', href: '#plataforma' },
} as const
