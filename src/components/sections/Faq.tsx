/**
 * ============================================================
 *  SEÇÃO FAQ — PERGUNTAS FREQUENTES
 * ============================================================
 *  ATENÇÃO: todo o conteúdo desta seção (perguntas, respostas,
 *  prazos de implantação, SLA de atendimento e integrações
 *  citadas) é PLACEHOLDER ilustrativo. Antes de publicar,
 *  valide cada resposta com os times de produto, jurídico e
 *  suporte e substitua os números pelos dados reais.
 */

import { useState } from 'react'
import { BRAND } from '@/config/brand'
import { cn } from '@/lib/cn'
import { Button } from '@/components/ui/Button'
import { Container } from '@/components/ui/Container'
import { Icon } from '@/components/ui/Icon'
import { Reveal } from '@/components/ui/Reveal'
import { SectionHeading } from '@/components/ui/SectionHeading'

type FaqItem = {
  /** Identificador estável — controla qual item está aberto. */
  id: string
  question: string
  answer: string
}

const FAQ_ITEMS: readonly FaqItem[] = [
  {
    id: 'conectividade',
    question: 'Preciso de internet no curral para usar a plataforma?',
    answer:
      'Não. O aplicativo de campo funciona offline: o manejo é registrado no celular mesmo sem sinal — pesagem, aplicação de vermífugo, leitura de brinco eletrônico — e sincroniza sozinho assim que o aparelho reencontra rede ou Wi-Fi na sede. Só o painel web, usado no escritório, exige conexão ativa.',
  },
  {
    id: 'veterinario',
    question: 'Funciona com o veterinário que já atende a minha fazenda?',
    answer:
      'Sim, e essa é a ideia. Você convida o responsável técnico como usuário externo, com acesso apenas aos lotes e protocolos sanitários que interessam a ele. O veterinário prescreve, ajusta doses e assina o protocolo dentro da plataforma; você continua dono do cadastro. Não há exigência de contratar um profissional nosso.',
  },
  {
    id: 'importacao',
    question: 'Como importo o rebanho que já tenho hoje?',
    answer:
      'Pela planilha que você já usa. Aceitamos XLSX e CSV com as colunas mapeadas na importação assistida — número de brinco, sexo, categoria, data de nascimento, lote e peso da última pesagem. Quem já usa brinco eletrônico pode subir a leitura direto do bastão. Rebanhos em caderno são digitados pela nossa equipe no onboarding, sem custo adicional. A migração da base histórica completa (anos anteriores) faz parte do plano Corporativo.',
  },
  {
    id: 'rastreabilidade',
    question: 'Atende à exigência de rastreabilidade para exportação?',
    answer:
      'A plataforma mantém o histórico individual exigido: identificação, movimentações, GTA vinculada, protocolos aplicados e controle de carência de cada medicamento, com relatórios prontos para auditoria e para o formato do SISBOV. A certificação em si é emitida pela certificadora credenciada — nós entregamos a documentação organizada para a vistoria, não substituímos o órgão.',
  },
  {
    id: 'implantacao',
    question: 'Quanto tempo leva a implantação?',
    answer:
      'Quatro semanas, no cronograma padrão. Rebanhos grandes ou com cadastro desorganizado podem chegar a seis; uma fazenda de até 3.000 cabeças com planilha organizada costuma operar em duas. O que mais alonga o prazo é a conferência do inventário farmacológico e o acerto de lotes divergentes — etapa que fazemos junto com o seu time, não no lugar dele.',
  },
  {
    id: 'propriedade-dados',
    question: 'Os dados do meu rebanho são meus?',
    answer:
      'São. Você é o controlador dos dados e pode exportar tudo em CSV a qualquer momento, inclusive ao encerrar o contrato — sem taxa de saída e sem fidelidade. Não vendemos, não repassamos e não usamos informação identificável da sua propriedade para terceiros. O tratamento segue a LGPD e está descrito em contrato.',
  },
  {
    id: 'sistemas-de-producao',
    question: 'Funciona para confinamento e também para cria e recria?',
    answer:
      'Sim, os dois. No confinamento o foco é conversão alimentar, GMD e custo por arroba produzida por lote. Na cria e recria a plataforma acompanha estação de monta, IATF, diagnóstico de gestação e rodízio de piquetes no pasto rotacionado. Propriedades em ciclo completo operam os dois modos no mesmo cadastro, sem duplicar animais.',
  },
]

/** Seção de perguntas frequentes: acordeão controlado, um item aberto por vez. */
export function Faq() {
  const [openId, setOpenId] = useState<string | null>('conectividade')

  const toggle = (id: string) => {
    setOpenId((current) => (current === id ? null : id))
  }

  return (
    <section
      id="faq"
      aria-label="Perguntas frequentes"
      className="relative overflow-hidden bg-surface-container-low py-20 md:py-28"
    >
      {/* Ornamento decorativo — não interativo, não altera o fluxo. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 -right-32 h-80 w-80 rounded-full bg-primary-fixed/30 blur-3xl animate-float-slow"
      />

      <Container className="relative">
        <div className="grid gap-12 lg:grid-cols-12">
          {/* ---------- Coluna esquerda: título + canal de contato ---------- */}
          <div className="lg:col-span-5">
            <div className="flex flex-col gap-8 lg:sticky lg:top-28">
              <SectionHeading
                align="left"
                eyebrow="DÚVIDAS"
                eyebrowIcon="support_agent"
                title="As perguntas que chegam antes da primeira visita"
                description="Conectividade no campo, migração do cadastro, conformidade e prazo de implantação — respondidos do jeito que a gente responderia no telefone."
              />

              <Reveal delay={120}>
                <div className="tonal-card rounded-lg bg-surface-container-lowest p-6">
                  <div className="flex items-start gap-3">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary-fixed text-on-primary-fixed">
                      <Icon name="support_agent" size={20} />
                    </span>
                    <div className="flex flex-col gap-1">
                      <h3 className="font-headline-sm text-headline-sm text-primary">
                        Não achou sua dúvida?
                      </h3>
                      <p className="font-body-sm text-body-sm text-on-surface-variant text-pretty">
                        Fale com alguém que entende de curral, não com um robô de triagem. Resposta
                        em até 1 dia útil.
                      </p>
                    </div>
                  </div>

                  <Button
                    href={BRAND.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="outlined"
                    className="mt-5 w-full"
                  >
                    Falar com um especialista
                    <Icon name="arrow_forward" size={18} />
                  </Button>

                  <p className="mt-4 font-body-sm text-body-sm text-on-surface-variant">
                    Ou escreva para{' '}
                    <a
                      href={`mailto:${BRAND.email}`}
                      className="text-primary underline underline-offset-4 hover:opacity-80"
                    >
                      {BRAND.email}
                    </a>
                  </p>
                </div>
              </Reveal>
            </div>
          </div>

          {/* ---------- Coluna direita: acordeão ---------- */}
          <div className="lg:col-span-7">
            <ul className="flex flex-col gap-3">
              {FAQ_ITEMS.map((item, index) => {
                const isOpen = openId === item.id
                const panelId = `faq-panel-${item.id}`
                const buttonId = `faq-button-${item.id}`

                return (
                  <Reveal as="li" key={item.id} delay={index * 70}>
                    <div
                      className={cn(
                        'tonal-card overflow-hidden rounded-lg bg-surface-container-lowest transition-colors duration-300',
                        isOpen && 'bg-surface-container-low',
                      )}
                    >
                      <h3>
                        <button
                          type="button"
                          id={buttonId}
                          aria-expanded={isOpen}
                          aria-controls={panelId}
                          onClick={() => toggle(item.id)}
                          className="flex w-full items-start gap-4 p-5 text-left"
                        >
                          <span className="mt-1.5 hidden font-label-caps text-label-caps text-on-surface-variant tabular-nums sm:inline">
                            {String(index + 1).padStart(2, '0')}
                          </span>

                          <span className="flex-1 font-headline-sm text-headline-sm text-primary text-balance">
                            {item.question}
                          </span>

                          <Icon
                            name="expand_more"
                            size={24}
                            className={cn(
                              'mt-0.5 shrink-0 text-primary transition-transform duration-300 motion-reduce:transition-none',
                              isOpen && 'rotate-180',
                            )}
                          />
                        </button>
                      </h3>

                      <div
                        id={panelId}
                        role="region"
                        aria-labelledby={buttonId}
                        className={cn(
                          'grid transition-[grid-template-rows] duration-300 ease-out motion-reduce:transition-none',
                          isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]',
                        )}
                      >
                        {/* `inert` tira o texto recolhido da leitura de tela e da ordem de foco. */}
                        <div className="overflow-hidden" inert={!isOpen}>
                          <p className="px-5 pb-5 font-body-md text-body-md text-on-surface-variant text-pretty sm:pl-14">
                            {item.answer}
                          </p>
                        </div>
                      </div>
                    </div>
                  </Reveal>
                )
              })}
            </ul>

            <Reveal delay={FAQ_ITEMS.length * 70}>
              <p className="mt-8 flex items-center gap-2 font-body-sm text-body-sm text-on-surface-variant">
                <Icon name="verified_user" size={18} className="shrink-0 text-primary" />
                Contrato sem fidelidade mínima, importação assistida do rebanho atual na entrada e exportação completa na saída.
              </p>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  )
}
