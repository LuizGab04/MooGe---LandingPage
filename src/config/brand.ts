/**
 * ============================================================
 *  IDENTIDADE DA MARCA — ÚNICO LUGAR PARA TROCAR O NOME
 * ============================================================
 *  `NOME_PROVISORIO` é um placeholder. Quando o nome definitivo
 *  da empresa for decidido, troque apenas os campos abaixo:
 *  nenhum outro arquivo do projeto tem o nome escrito à mão.
 */

export const BRAND = {
  /** Nome da empresa exibido na navbar, hero, rodapé e <title>. */
  name: 'NOME_PROVISORIO',
  /** Sufixo curto usado em assinaturas e copyright. */
  legalName: 'NOME_PROVISORIO Agrotecnologia Ltda.',
  /** Frase de posicionamento (2 a 6 palavras). */
  tagline: 'Pecuária de precisão, do curral ao caixa',
  /** Descrição de uma linha usada em SEO e no rodapé. */
  description:
    'Plataforma de gestão de rebanho que unifica protocolos sanitários, inventário e indicadores financeiros em um só painel.',
  domain: 'suaempresa.com.br',
  email: 'contato@suaempresa.com.br',
  phone: '+55 (67) 3000-0000',
  phoneHref: 'tel:+556730000000',
  whatsapp: 'https://wa.me/556730000000',
  address: 'Campo Grande · Mato Grosso do Sul · Brasil',
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
