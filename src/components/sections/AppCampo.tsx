/**
 * ============================================================
 *  SEÇÃO "APP DE CAMPO" — dispositivos da fazenda + fila offline
 * ============================================================
 *  Ainda não há prints do app, então o lado direito é um DIAGRAMA
 *  do fluxo (dispositivo → app → fila → painel), não uma tela.
 *  Os itens da fila são só tipos de registro, sem dados inventados.
 *  Quando houver capturas do app, troque o diagrama por elas.
 */

import { Container } from '@/components/ui/Container'
import { Icon } from '@/components/ui/Icon'
import { Reveal } from '@/components/ui/Reveal'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { BRAND } from '@/config/brand'
import { BRAND_IMAGES } from '@/config/assets'
import { cn } from '@/lib/cn'

const PASSOS = [
  {
    icon: 'contactless',
    titulo: 'Leia o chip com o bastão',
    texto: 'O bastão leitor identifica o animal e a ficha dele abre no app — sem procurar número em caderno.',
  },
  {
    icon: 'scale',
    titulo: 'O peso vem da balança',
    texto: 'Com a balança conectada, a pesagem entra direto no registro do animal. Ninguém digita, ninguém erra o dígito.',
  },
  {
    icon: 'cloud_off',
    titulo: 'Sem internet, vai para a fila',
    texto: 'Cada pesagem, vacina ou tratamento fica guardado numa fila offline no próprio aparelho. O trabalho no curral não para.',
  },
  {
    icon: 'cloud_sync',
    titulo: 'Sinal voltou, tudo sincroniza',
    texto: 'Assim que o celular reencontra a rede, a fila sobe sozinha e o painel web do gestor se atualiza.',
  },
] as const

const DISPOSITIVOS = [
  { icon: 'contactless', nome: 'Bastão leitor', apoio: 'chip / brinco eletrônico' },
  { icon: 'scale', nome: 'Balança', apoio: 'peso direto no animal' },
] as const

/** Tipos de registro que passam pela fila — ilustrativo, sem dados. */
const FILA = [
  { icon: 'scale', tipo: 'Pesagem', estado: 'fila' },
  { icon: 'contactless', tipo: 'Leitura de chip', estado: 'fila' },
  { icon: 'vaccines', tipo: 'Vacina', estado: 'fila' },
  { icon: 'medical_services', tipo: 'Tratamento', estado: 'enviado' },
] as const

function Conector({ rotulo }: { rotulo?: string }) {
  return (
    <div className="flex items-center justify-center gap-2 py-2 text-on-surface-variant">
      <Icon name="south" size={20} />
      {rotulo && <span className="font-label-caps text-label-caps uppercase">{rotulo}</span>}
    </div>
  )
}

function Diagrama() {
  return (
    <div
      role="img"
      aria-label={`Fluxo do app de campo: o bastão leitor e a balança enviam dados para o app ${BRAND.name} no celular; sem internet, os registros ficam numa fila offline e são sincronizados com o painel web quando o sinal volta.`}
      className="rounded-xl border border-hairline bg-surface-container-lowest p-5 shadow-2xl md:p-6"
    >
      <div aria-hidden="true">
        {/* Dispositivos */}
        <div className="grid grid-cols-2 gap-3">
          {DISPOSITIVOS.map((d) => (
            <div
              key={d.nome}
              className="flex items-center gap-3 rounded-lg border border-hairline bg-surface-container-low p-3"
            >
              <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-secondary-fixed text-on-secondary-fixed">
                <Icon name={d.icon} size={20} />
              </span>
              <span className="min-w-0">
                <span className="block font-body-md text-body-md font-semibold text-on-surface">
                  {d.nome}
                </span>
                <span className="block truncate font-body-sm text-body-sm text-on-surface-variant">
                  {d.apoio}
                </span>
              </span>
            </div>
          ))}
        </div>

        <Conector rotulo="conectados" />

        {/* App + fila */}
        <div className="rounded-lg border border-hairline bg-surface-container-low p-4">
          <div className="flex items-center gap-3">
            <img
              src={BRAND_IMAGES.appIcon}
              alt=""
              width={48}
              height={48}
              className="size-12 rounded-lg"
            />
            <span className="min-w-0 flex-1">
              <span className="block font-body-md text-body-md font-semibold text-on-surface">
                App {BRAND.name}
              </span>
              <span className="block font-body-sm text-body-sm text-on-surface-variant">
                no celular, no curral
              </span>
            </span>
            <span className="inline-flex items-center gap-1 rounded-full bg-surface-container-high px-2.5 py-1 font-label-caps text-label-caps text-on-surface-variant uppercase">
              <Icon name="cloud_off" size={14} />
              Offline
            </span>
          </div>

          <p className="mt-4 font-label-caps text-label-caps text-on-surface-variant uppercase">
            Fila offline
          </p>
          <ul className="mt-2 flex flex-col gap-2">
            {FILA.map((item) => (
              <li
                key={item.tipo}
                className="flex items-center gap-3 rounded-sm bg-surface-container-lowest px-3 py-2"
              >
                <Icon name={item.icon} size={18} className="shrink-0 text-primary" />
                <span className="flex-1 font-body-sm text-body-sm text-on-surface">
                  {item.tipo}
                </span>
                <span
                  className={cn(
                    'inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 font-label-caps text-label-caps uppercase',
                    item.estado === 'fila'
                      ? 'bg-secondary-fixed text-on-secondary-fixed-variant'
                      : 'bg-primary-fixed text-on-primary-fixed-variant',
                  )}
                >
                  <Icon name={item.estado === 'fila' ? 'schedule' : 'check'} size={14} />
                  {item.estado === 'fila' ? 'Na fila' : 'Enviado'}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <Conector rotulo="sinal voltou · sincroniza" />

        {/* Painel web */}
        <div className="flex items-center gap-3 rounded-lg bg-brand p-4 text-on-brand">
          <Icon name="dashboard" size={24} className="shrink-0" />
          <span>
            <span className="block font-body-md text-body-md font-semibold">Painel web</span>
            <span className="block font-body-sm text-body-sm opacity-85">
              rebanho, saúde e financeiro atualizados
            </span>
          </span>
        </div>
      </div>
    </div>
  )
}

export function AppCampo() {
  return (
    <section id="app" aria-label="App de campo" className="bg-surface py-20 md:py-28">
      <Container>
        <div className="grid items-center gap-14 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-6">
            <div className="flex items-center gap-4">
              <img
                src={BRAND_IMAGES.appIcon}
                alt={`Ícone do app ${BRAND.name}`}
                width={72}
                height={72}
                className="size-16 rounded-xl shadow-lg md:size-18"
              />
              <span className="font-label-caps text-label-caps text-on-surface-variant uppercase">
                Junto com o site,
                <br />o app de campo
              </span>
            </div>

            <SectionHeading
              className="mt-6"
              title="O curral não espera o sinal"
              description={`O app ${BRAND.name} conversa com os dispositivos da fazenda — balança e bastão leitor de chip — e guarda tudo numa fila offline quando não há internet. Feito para pasto, curral e tronco, onde o 4G não chega.`}
            />

            <ol className="mt-10 flex flex-col gap-6">
              {PASSOS.map((passo, i) => (
                <Reveal as="li" key={passo.titulo} delay={i * 70} className="flex gap-4">
                  <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-primary-fixed text-on-primary-fixed-variant">
                    <Icon name={passo.icon} size={22} />
                  </span>
                  <span>
                    <span className="block font-headline-sm text-headline-sm text-primary">
                      {passo.titulo}
                    </span>
                    <span className="mt-1 block font-body-md text-body-md text-on-surface-variant text-pretty">
                      {passo.texto}
                    </span>
                  </span>
                </Reveal>
              ))}
            </ol>
          </div>

          <Reveal delay={120} className="lg:col-span-6">
            <Diagrama />
          </Reveal>
        </div>
      </Container>
    </section>
  )
}
