/**
 * Imagens reais da marca e do sistema.
 *
 * Os arquivos originais (na raiz do projeto) foram recortados e otimizados:
 *  - logo-light / logo-dark: logo com fundo transparente; a versão `dark`
 *    troca o verde por creme para ler bem sobre o tema escuro.
 *  - wordmark-*: a mesma logo sem a frase, para a navbar.
 *  - app-icon: ícone do aplicativo; mark: recorte só do pino (favicon/marca pequena).
 *  - screens/*: capturas reais do painel web (ainda não há prints do app de celular).
 *  - photos/pasto.jpg: foto de pasto usada no fundo da chamada final.
 * Para trocar uma print, substitua o PNG mantendo o nome.
 */

import logoLight from '@/assets/brand/logo-light.png'
import logoDark from '@/assets/brand/logo-dark.png'
import wordmarkLight from '@/assets/brand/wordmark-light.png'
import wordmarkDark from '@/assets/brand/wordmark-dark.png'
import appIcon from '@/assets/brand/app-icon.png'
import mark from '@/assets/brand/mark.png'
import painelInicio from '@/assets/screens/painel-inicio.png'
import painelSaude from '@/assets/screens/painel-saude.png'
import menuModulos from '@/assets/screens/menu-modulos.png'
import pasto from '@/assets/photos/pasto.jpg'

export const BRAND_IMAGES = {
  logo: { light: logoLight, dark: logoDark, width: 783, height: 251 },
  wordmark: { light: wordmarkLight, dark: wordmarkDark, width: 374, height: 120 },
  appIcon,
  mark,
} as const

export const SCREENS = {
  inicio: {
    src: painelInicio,
    width: 1400,
    height: 712,
    alt: 'Tela inicial do painel MooGe: gráficos de evolução do rebanho e de entradas e saídas, distribuição por fase de vida, lotação dos piquetes em UA e lista de pendências.',
  },
  saude: {
    src: painelSaude,
    width: 1397,
    height: 392,
    alt: 'Tela de saúde do rebanho: contadores de tarefas atrasadas, para hoje, próximos 7 dias, animais em tratamento e em carência, filtros por piquete e protocolo e a lista do que fazer.',
  },
  modulos: {
    src: menuModulos,
    width: 254,
    height: 948,
    alt: 'Menu lateral do MooGe com seletor de fazenda e os módulos Rebanho, Financeiro, Cadastros e Sistema.',
  },
} as const

export const PHOTOS = {
  pasto: {
    src: pasto,
    width: 1920,
    height: 720,
  },
} as const
