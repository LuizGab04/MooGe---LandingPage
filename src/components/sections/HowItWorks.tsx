/**
 * Seção “Como funciona” — cronograma de implantação em 4 semanas.
 *
 * ATENÇÃO: todos os prazos, números e descrições abaixo são PLACEHOLDERS
 * ilustrativos. Substituir pelos dados reais de onboarding quando o processo
 * comercial estiver definido.
 */

import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'
import { Icon } from '@/components/ui/Icon'
import { Reveal } from '@/components/ui/Reveal'
import { BRAND, CTA } from '@/config/brand'

const STEPS = [
  {
    number: '01',
    week: 'Semana 1',
    icon: 'qr_code_scanner',
    title: 'Cadastro do rebanho',
    text: 'Importamos sua planilha de lotes ou lemos os brincos eletrônicos direto no curral. Cada animal entra com categoria, peso de entrada e histórico já vinculados.',
  },
  {
    number: '02',
    week: 'Semana 2',
    icon: 'vaccines',
    title: 'Protocolos configurados',
    text: 'Seu veterinário monta os protocolos sanitários e reprodutivos na plataforma — vermifugação, clostridiose, IATF — com carência de medicamento calculada automaticamente por lote.',
  },
  {
    number: '03',
    week: 'Semana 3',
    icon: 'groups',
    title: 'Equipe treinada',
    text: 'Treinamento prático com o time de campo e o app no celular do curral. Funciona sem sinal: os lançamentos sincronizam assim que a conexão volta.',
  },
  {
    number: '04',
    week: 'Semana 4',
    icon: 'insights',
    title: 'Indicadores rodando',
    text: 'GMD por lote, custo por arroba produzida e rastreabilidade completa no painel. A trilha de auditoria fica pronta para conformidade e para o frigorífico.',
  },
]

export function HowItWorks() {
  return (
    <section
      id="como-funciona"
      aria-labelledby="como-funciona-titulo"
      className="relative overflow-hidden bg-brand py-20 text-on-brand md:py-28"
    >
      {/* Textura e halo decorativos */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 grid-paper opacity-5" />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 right-0 h-96 w-96 rounded-full bg-primary-fixed/10 blur-3xl"
      />

      <Container className="relative">
        <Reveal className="mx-auto flex max-w-3xl flex-col items-center gap-4 text-center">
          <span className="inline-flex w-fit items-center gap-2 rounded-full border border-on-brand/30 bg-on-brand/10 px-3 py-1.5 font-label-caps text-label-caps text-on-brand uppercase">
            <Icon name="schedule" size={16} />
            Implantação em 4 semanas
          </span>

          <h2
            id="como-funciona-titulo"
            className="font-headline-lg text-headline-lg text-on-brand text-balance md:font-display-lg md:text-display-lg"
          >
            Do primeiro cadastro ao indicador auditável
          </h2>

          <p className="font-body-lg text-body-lg opacity-90 text-pretty">
            Nada de projeto de seis meses. A equipe de implantação fica ao lado do seu time até o
            rebanho inteiro estar na plataforma e os números baterem com o que acontece no curral.
          </p>
        </Reveal>

        {/* Trilha de passos */}
        <div className="relative mt-14 md:mt-16">
          {/* Conector horizontal (md+) */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 top-6 hidden h-px bg-on-brand/25 md:block"
          />
          {/* Conector vertical (mobile) */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute top-6 bottom-6 left-6 w-px bg-on-brand/25 md:hidden"
          />

          <ol className="grid list-none grid-cols-1 gap-10 md:grid-cols-4 md:gap-8">
            {STEPS.map((step, i) => (
              <Reveal
                as="li"
                key={step.number}
                delay={i * 70}
                className="relative flex gap-5 md:block"
              >
                <span className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary-fixed font-data-metric text-data-metric text-on-primary-fixed">
                  {step.number}
                </span>

                <div className="min-w-0 md:mt-6">
                  <span className="font-label-caps text-label-caps uppercase opacity-80">
                    {step.week}
                  </span>

                  <h3 className="mt-2 flex items-center gap-2 font-headline-sm text-headline-sm text-on-brand">
                    <Icon name={step.icon} size={20} className="shrink-0 opacity-80" />
                    {step.title}
                  </h3>

                  <p className="mt-2 font-body-md text-body-md opacity-90 text-pretty">
                    {step.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>

        {/* Faixa de fechamento */}
        <Reveal delay={120} className="mt-14 md:mt-20">
          <div className="flex flex-col gap-6 rounded-xl bg-primary-fixed p-6 text-on-primary-fixed md:flex-row md:items-center md:justify-between md:p-8">
            <div className="max-w-2xl">
              <p className="font-headline-sm text-headline-sm">
                No 30º dia o seu rebanho já está rastreado, protocolado e medido.
              </p>
              <p className="mt-2 font-body-md text-body-md">
                A implantação é conduzida pelo time da {BRAND.name}, sem custo adicional e sem
                parar a rotina do confinamento ou do pasto rotacionado.
              </p>
            </div>

            {/* A faixa usa tokens “fixed” (idênticos nos dois temas), por isso o botão
                também fixa fundo e texto: bg-primary ficaria claro sobre claro no tema escuro. */}
            <Button
              variant="filled"
              size="lg"
              href={CTA.primary.href}
              className="w-full shrink-0 bg-on-primary-fixed text-primary-fixed hover:bg-on-primary-fixed-variant md:w-auto"
            >
              {CTA.primary.label}
              <Icon name="arrow_forward" size={20} />
            </Button>
          </div>
        </Reveal>
      </Container>
    </section>
  )
}
