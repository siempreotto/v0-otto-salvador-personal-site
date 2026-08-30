"use client"

import Link from "next/link"
import type { ReactNode } from "react"
import { useState } from "react"
import {
  ArrowLeft,
  ArrowRight,
  BarChart3,
  BookOpen,
  KeyRound,
  Linkedin,
  Lock,
  Mail,
  MessageCircle,
} from "lucide-react"

type FlowStep = {
  id: number
  name: string
  where: "in" | "out"
  detail: string
  note: string
}

type DataPoint = {
  n: string
  l: string
  so: string
}

const FLOW: FlowStep[] = [
  {
    id: 1,
    name: "La conversación",
    where: "in",
    detail:
      "Escribes en WhatsApp que quieres enviar dinero. Es el único paso que ocurre donde el usuario ya estaba, y es la parte que Zapp hace mejor que nadie: no hay descarga, no hay registro previo, no hay curva de aprendizaje.",
    note: "Aquí está el activo.",
  },
  {
    id: 2,
    name: "El salto",
    where: "out",
    detail:
      "El flujo entrega un enlace y al abrirlo cambia la aplicación: sales de WhatsApp al navegador. Cambia el contexto, cambia la sesión y cambia la confianza visual. El usuario dejó la marca que conocía y llegó a una que no.",
    note: "Primer punto de abandono.",
  },
  {
    id: 3,
    name: "Identidad",
    where: "out",
    detail:
      "Registro y verificación del remitente en el entorno web. Es un requisito regulatorio, no un defecto de diseño: la pregunta de producto no es si pedirlo, es cuántas pantallas cuesta pedirlo.",
    note: "Obligatorio, pero costoso.",
  },
  {
    id: 4,
    name: "El formulario, por partes",
    where: "out",
    detail:
      "Monto, beneficiario, destino y método no viven en una sola vista: están repartidos en varias páginas del formulario. Cada avance de página es una decisión que el usuario puede posponer, y posponer en remesas significa cerrar la pestaña.",
    note: "Varias páginas encadenadas.",
  },
  {
    id: 5,
    name: "Fondeo",
    where: "out",
    detail:
      "El pago con tarjeta o cuenta ocurre fuera del chat. Además del abandono, aquí hay una consecuencia fiscal: desde el 1 de enero de 2026 el impuesto federal del 1 % grava el fondeo en efectivo, money order y cashier’s check, y exime ACH, cuenta bancaria y tarjeta.",
    note: "Donde se decide el margen.",
  },
  {
    id: 6,
    name: "El regreso",
    where: "in",
    detail:
      "La confirmación devuelve al usuario al chat. La transacción terminó, pero el recorrido cruzó dos aplicaciones para hacer algo que empezó dentro de una sola.",
    note: "Cierra donde debió ocurrir todo.",
  },
]

const DATOS: DataPoint[] = [
  {
    n: "US$52.000 M",
    l: "Corredor EE. UU. -> Centroamérica, anual",
    so: "En récord y creciendo a doble dígito. El volumen no es el problema: la captura del valor lo es.",
  },
  {
    n: "+80 %",
    l: "De los cobros de remesas en la región siguen en efectivo",
    so: "El envío se digitaliza y el cobro no. Quien exija cuenta bancaria del receptor pierde a cuatro de cada cinco familias.",
  },
  {
    n: "5",
    l: "Competidores ya envían por WhatsApp desde EE. UU.",
    so: "Ria, Remitly, Intermex, Félix y más. Ninguno completa la transacción dentro del chat: todos redirigen a un checkout web, igual que Zapp.",
  },
  {
    n: "30+",
    l: "Remesadoras con convenio en MICOOPE",
    so: "24 cooperativas, ~3 millones de asociados, 1.042 puntos de servicio, y ningún canal de originación propio en Estados Unidos.",
  },
  {
    n: "1,54 M",
    l: "Operaciones de remesas de FEDECACES en 2025",
    so: "+14,55 % contra el año anterior, con 13 convenios con ETDs. Cada convenio es la misma carencia repetida.",
  },
  {
    n: "+62 %",
    l: "Sesiones únicas de Remitly, Q1-2026 vs Q4-2025",
    so: "Tras lanzar WhatsApp Send. El canal funciona, está probado por el competidor, y ya no diferencia a nadie.",
  },
]

const PLAN = {
  ahora: {
    label: "Ahora",
    intro: "Tres cosas que haría en las primeras semanas, ninguna requiere ingeniería nueva.",
    items: [
      [
        "Instrumentar el funnel conversacional",
        "Chat -> cotización -> KYC -> fondeo -> payout, con tasa por paso y causa de abandono. Hoy el único activo diferenciado de Zapp no está cuantificado, y sin ese número el material de venta B2B abre con una lista de funcionalidades en lugar de con un dato.",
      ],
      [
        "Resolver el alcance del acuerdo con Spectrum",
        "Zapp opera como agente autorizado de Spectrum Global Payment Solutions (NMLS 937914). Si ese paraguas no admite anidar programas white-label de terceros, el segmento recomendado se cae. Es una revisión de contrato de días, y bloquea todo lo demás.",
      ],
      [
        "Ejecutar el flujo del competidor de punta a punta",
        "Enviar dinero con Ria y con Remitly como usuario, documentando dónde rompen. Dos semanas, cero ingeniería, y produce la única comparación que un comité de inversión de una institución va a mirar.",
      ],
    ],
  },
  despues: {
    label: "Después",
    intro: "Lo que se decide una vez que existen los datos anteriores.",
    items: [
      [
        "Un piloto, no cinco",
        "Una sola federación, con payout dentro de su propia red, sobre rails de terceros. Guatemala (MICOOPE) u Honduras (FACACH) antes que El Salvador: ahí es donde el incumbente ha avanzado menos.",
      ],
      [
        "La consola de configuración de partner",
        "Es la oportunidad de producto más importante del análisis, porque es la que convierte cada venta en producto en lugar de en proyecto. La métrica que la gobierna: porcentaje de lanzamientos sin ingeniería a medida.",
      ],
      [
        "Framework de adaptadores de payout",
        "Cada institución difícil debe dejar una capacidad reutilizable, no una rama del código. Es la diferencia entre una plataforma y una consultora con diez forks.",
      ],
    ],
  },
  preguntas: {
    label: "Preguntas",
    intro: "Tres preguntas cuya respuesta cambia el roadmap completo. Las hago antes de proponer, no después.",
    items: [
      [
        "¿El acuerdo con Spectrum permite programas white-label de terceros?",
        "Si la respuesta es no, hay que reconstruir la tesis alrededor de socios que traen su propio marco regulado: MTOs medianos, credit unions y CDFIs hispanas en Estados Unidos.",
      ],
      [
        "¿Dónde queda la frontera de plataforma?",
        "De la respuesta depende contra quién compite Zapp, cuánto capital necesita, qué regulación asume y qué equipo contrata. No es posicionamiento: es arquitectura con consecuencias financieras.",
      ],
      [
        "¿Cuál es hoy la conversión real de conversación a payout exitoso?",
        "Es el único activo diferenciado y hoy no está medido. Si no es mejor que la de un checkout web, el argumento de venta B2B es otro.",
      ],
    ],
  },
} as const

type PlanKey = keyof typeof PLAN

export function ZappExperience() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="mx-auto w-full max-w-[1100px] px-5 py-10 md:px-10 md:py-16 lg:py-18">
        <div className="mb-12">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.14em] text-foreground-muted transition-colors hover:text-brand"
          >
            <ArrowLeft className="size-3.5" strokeWidth={2} />
            OTTOSALVADOR.COM
          </Link>
        </div>

        <header>
          <p className="mb-4 text-[11px] font-medium uppercase tracking-[0.14em] text-brand">
            Candidato · Rol de producto en Zapp
          </p>
          <h1 className="mb-6 max-w-[24ch] text-[34px] font-semibold leading-[1.18] tracking-normal text-foreground md:text-[44px] lg:text-[50px]">
            Probé Zapp por WhatsApp. Esto es el producto que construiría.
          </h1>
          <p className="max-w-[78ch] text-[16px] leading-[1.9] text-foreground-muted md:text-[17px]">
            Zapp está en el lugar correcto: LATAM se comunica por WhatsApp y
            ahí es donde empieza el envío. Probé el flujo de punta a punta, y
            el recorrido sale del chat hacia una página externa con un
            formulario repartido en varias páginas. Ese salto es la oportunidad,
            y es también lo que hace vendible un white-label: lo que Zapp ya
            hace con su marca, puesto en manos de bancos e instituciones que
            quieren liquidar remesas y quedarse con la fidelidad de ese cliente.
          </p>

          <div className="mt-10 grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
            {[
              ["Base de evidencia", "4 investigaciones + prueba propia del producto"],
              ["Alcance", "EE. UU. -> México y Centroamérica"],
              ["Audiencia", "Liderazgo de Zapp"],
              ["Fecha", "27 de agosto de 2026"],
            ].map(([label, value]) => (
              <div key={label} className="bg-card p-4">
                <dt className="mb-2 text-[10px] uppercase tracking-[0.12em] text-muted-foreground">
                  {label}
                </dt>
                <dd className="text-[13px] leading-[1.6] text-foreground">
                  {value}
                </dd>
              </div>
            ))}
          </div>

          <div className="mt-7 flex flex-wrap gap-2">
            <PrimaryLink href="/zapp/reporte" icon={<BookOpen className="size-4" />}>
              Leer el reporte completo
            </PrimaryLink>
            <SecondaryLink href="#prueba">
              Ver la prueba
            </SecondaryLink>
          </div>
        </header>

        <Section id="prueba" anchor="#prueba" eyebrow="La prueba" title="Cómo probé el producto">
          <p className="mt-4 max-w-[74ch] text-[15px] leading-[1.85] text-foreground-muted">
            Envié dinero desde WhatsApp con Zapp y grabé el recorrido completo,
            sin cortes de conveniencia. Lo que sigue es mi lectura de producto
            sobre ese recorrido.
          </p>

          <div className="mt-6">
            <div className="relative aspect-video border border-border bg-[#1a1a1a]">
              <iframe
                className="absolute inset-0 h-full w-full"
                src="https://www.youtube-nocookie.com/embed/w2KPnbTN-7o?rel=0"
                title="Prueba del producto de Zapp por WhatsApp"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            <p className="mt-3 text-[12px] leading-[1.7] text-muted-foreground">
              Prueba grabada por Otto Salvador ·{" "}
              <a
                className="text-brand transition-colors hover:text-foreground"
                href="https://youtu.be/w2KPnbTN-7o"
                target="_blank"
                rel="noopener noreferrer"
              >
                Abrir en YouTube
              </a>
            </p>
          </div>

          <div className="mt-7 max-w-[76ch] border border-border border-l-brand bg-card p-6">
            <p className="mb-3 text-[10px] uppercase tracking-[0.13em] text-muted-foreground">
              Mi veredicto
            </p>
            <p className="text-[18px] leading-[1.75] text-foreground">
              “El producto es intuitivo, porque está en donde hoy en día LATAM
              se comunica, pero creo que hay bastante fricción al sacar una
              página externa y que el formulario tiene diferentes páginas.”
            </p>
          </div>

          <h3 className="mt-10 text-[16px] font-semibold tracking-[0.04em]">
            El recorrido, paso por paso
          </h3>
          <FlowRail />
        </Section>

        <Section
          id="mercado"
          anchor="#mercado"
          eyebrow="Lo que encontré alrededor"
          title="Seis datos que cambian cómo se plantea el producto"
        >
          <p className="mt-4 max-w-[74ch] text-[15px] leading-[1.85] text-foreground-muted">
            Pasa el cursor sobre cada dato para ver por qué importa. Ninguno es
            una proyección mía: todos vienen de la evidencia citada en el
            reporte completo.
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {DATOS.map((dato) => (
              <DatoCard key={`${dato.n}-${dato.l}`} dato={dato} />
            ))}
          </div>
        </Section>

        <Section id="producto" anchor="#producto" eyebrow="La tesis" title="El white-label es el producto; WhatsApp es el wedge">
          <p className="mt-4 max-w-[76ch] text-[15px] leading-[1.85] text-foreground-muted">
            Cinco competidores ya están en el canal, así que la presencia en
            WhatsApp dejó de ser el diferenciador. Lo que sigue abierto es la
            transacción completa dentro de la conversación, y lo que ninguna
            remesadora extranjera le da a una cooperativa o a un banco regional
            es la relación con el remitente en Estados Unidos ni sus datos.
            Ese es el producto vendible: originación estadounidense como
            servicio, con la marca del socio.
          </p>
          <div className="mt-7 grid gap-4 md:grid-cols-2">
            <FeatureCard icon={<MessageCircle className="size-5" />} title="Lo que Zapp debería construir">
              Canal conversacional, motor de conversación determinista, máquina
              de estados transaccional, routing, consola de configuración
              multi-tenant y analytics. Es la capa donde la ventaja es
              acumulable.
            </FeatureCard>
            <FeatureCard icon={<Lock className="size-5" />} title="Lo que no debería construir">
              Licencias propias, redes de payout, rails de stablecoins y
              tesorería propia. Se orquestan. Es además la única opción
              compatible con su estructura de licencia actual.
            </FeatureCard>
            <FeatureCard icon={<KeyRound className="size-5" />} title="Por qué el socio compra">
              La institución ya tiene la confianza del asociado, la liquidez
              local, el efectivo y el cumplimiento del último kilómetro.
              Externaliza exactamente lo que Zapp sabe hacer, y hoy lo
              externaliza treinta veces.
            </FeatureCard>
            <FeatureCard icon={<BarChart3 className="size-5" />} title="La métrica que gobierna todo">
              Porcentaje de lanzamientos sin ingeniería a medida. Si baja, Zapp
              deja de ser plataforma y se vuelve una consultora con diez forks
              del código y márgenes negativos.
            </FeatureCard>
          </div>
          <div className="mt-7 max-w-[80ch] border border-border border-l-foreground bg-card p-6">
            <p className="mb-3 text-[10px] uppercase tracking-[0.13em] text-muted-foreground">
              La pregunta que hay que responder primero
            </p>
            <p className="text-[18px] leading-[1.7] text-foreground">
              ¿Zapp quiere ser el mejor canal digital de remesas, o la capa de
              orquestación que permite a cualquier institución lanzar remesas
              digitales?
            </p>
            <p className="mt-4 text-[14px] leading-[1.8] text-foreground-muted">
              De la respuesta depende contra quién compite, cuánto capital
              necesita, qué regulación asume y qué equipo contrata.
            </p>
          </div>
        </Section>

        <Section id="accionables" anchor="#accionables" eyebrow="Accionables" title="Qué haría, en qué orden, y qué preguntaría antes">
          <PlanTabs />
        </Section>

        <Section id="reporte" anchor="#reporte" eyebrow="El documento" title="El análisis completo, para leer e imprimir">
          <p className="mt-4 max-w-[78ch] text-[15px] leading-[1.85] text-foreground-muted">
            Esta página es la síntesis. El reporte completo tiene el desarrollo:
            la lectura inicial en siete observaciones, la tesis con su nivel de
            confianza declarado, la frontera de plataforma, el ICP, la
            comparación entre bancos y cooperativas, los rails financieros, el
            papel real de las stablecoins, el panorama competitivo por capa, el
            modelo de negocio, el árbol de métricas, los riesgos, los
            contraargumentos y el plan de los primeros 90 días.
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            <PrimaryLink href="/zapp/reporte" icon={<BookOpen className="size-4" />}>
              Leer el reporte completo
            </PrimaryLink>
          </div>
          <div className="mt-5 flex flex-wrap gap-2">
            {[
              "Formato de lectura",
              "Listo para imprimir",
              "Fuentes citadas",
              "Confianza declarada",
            ].map((tag) => (
              <span
                key={tag}
                className="border border-border bg-card px-2 py-1 text-[10px] uppercase tracking-[0.08em] text-muted-foreground"
              >
                {tag}
              </span>
            ))}
          </div>
        </Section>

        <Section id="contacto" anchor="#contacto" eyebrow="Contacto" title="Hablemos del producto, no del currículum">
          <p className="mt-4 max-w-[76ch] text-[15px] leading-[1.85] text-foreground-muted">
            Escribí esto antes de cualquier conversación porque así trabajo:
            separo lo que la evidencia demuestra de lo que yo interpreto, y digo
            en voz alta qué pregunta invalidaría mi propia recomendación. Si el
            equipo de Zapp quiere discutir cualquiera de las tres preguntas de
            arriba, estoy disponible.
          </p>
          <div className="mt-7 flex flex-wrap gap-2">
            <PrimaryLink href="mailto:otto@ottosalvador.com?subject=Zapp%20-%20producto%20B2B" icon={<Mail className="size-4" />}>
              Escribirme
            </PrimaryLink>
            <SecondaryLink href="https://www.linkedin.com/in/ottosalvador/">
              <Linkedin className="size-4" />
              LinkedIn
            </SecondaryLink>
          </div>
          <p className="mt-9 border-t border-border pt-5 text-[12px] leading-[1.7] text-muted-foreground">
            Otto Salvador · ottosalvador.com/zapp · Documento de iniciativa
            propia. No es un documento de Zapp ni contiene información
            confidencial de la empresa.
          </p>
        </Section>
      </div>
    </main>
  )
}

function Section({
  id,
  anchor,
  eyebrow,
  title,
  children,
}: {
  id: string
  anchor: string
  eyebrow: string
  title: string
  children: ReactNode
}) {
  return (
    <section id={id} className="pt-14 md:pt-16">
      <div className="mb-7 flex items-center gap-3">
        <span className="h-px w-10 bg-border" />
        <span className="text-[10px] uppercase tracking-[0.12em] text-cyan-700/70">
          {anchor}
        </span>
      </div>
      <p className="mb-3 text-[11px] font-medium uppercase tracking-[0.14em] text-brand">
        {eyebrow}
      </p>
      <h2 className="max-w-[28ch] text-[25px] font-semibold leading-[1.35] tracking-normal text-foreground md:text-[30px]">
        {title}
      </h2>
      {children}
    </section>
  )
}

function FlowRail() {
  const [open, setOpen] = useState<number | null>(2)
  const [onlyOutside, setOnlyOutside] = useState(false)
  const shown = onlyOutside ? FLOW.filter((step) => step.where === "out") : FLOW

  return (
    <div className="mt-7">
      <div className="mb-4 flex flex-wrap items-center gap-3">
        <button
          type="button"
          onClick={() => setOnlyOutside((value) => !value)}
          className={
            onlyOutside
              ? "h-8 bg-primary px-3 text-[12px] font-medium text-primary-foreground transition-opacity hover:opacity-85"
              : "h-8 border border-border bg-card px-3 text-[12px] font-medium text-foreground transition-colors hover:border-brand hover:text-brand"
          }
        >
          {onlyOutside ? "Ver el recorrido completo" : "Ver solo los pasos fuera de WhatsApp"}
        </button>
        <span className="text-[12px] leading-[1.7] text-muted-foreground">
          {onlyOutside
            ? "4 de 6 pasos ocurren fuera del canal donde empezó la conversación."
            : "Toca un paso para ver la lectura de producto."}
        </span>
      </div>

      <div className="grid gap-px border border-border bg-border">
        {shown.map((step) => {
          const isOpen = open === step.id
          const isOutside = step.where === "out"

          return (
            <div key={step.id} className="bg-card">
              <button
                type="button"
                onClick={() => setOpen(isOpen ? null : step.id)}
                className={`grid w-full grid-cols-[24px_minmax(0,1fr)_auto_16px] items-center gap-3 px-4 py-4 text-left transition-colors hover:bg-secondary md:gap-4 md:px-5 ${
                  isOpen ? "bg-secondary" : "bg-transparent"
                }`}
              >
                <span className="text-[11px] tracking-[0.08em] text-muted-foreground">
                  0{step.id}
                </span>
                <span
                  className={`text-[15px] font-semibold tracking-[0.03em] ${
                    isOpen ? "text-brand" : "text-foreground"
                  }`}
                >
                  {step.name}
                </span>
                <span
                  className={`whitespace-nowrap border px-2 py-1 text-[10px] uppercase tracking-[0.1em] ${
                    isOutside
                      ? "border-brand text-brand"
                      : "border-border text-muted-foreground"
                  }`}
                >
                  {isOutside ? "Fuera" : "Chat"}
                </span>
                {isOpen ? (
                  <ArrowLeft className="size-3.5 text-muted-foreground" />
                ) : (
                  <ArrowRight className="size-3.5 text-muted-foreground" />
                )}
              </button>

              {isOpen ? (
                <div className="grid max-w-[78ch] gap-2 px-4 pb-5 pl-14 md:px-5 md:pl-[60px]">
                  <p className="text-[14px] leading-[1.8] text-foreground-muted">
                    {step.detail}
                  </p>
                  <p
                    className={`text-[12px] uppercase tracking-[0.07em] ${
                      isOutside ? "text-brand" : "text-muted-foreground"
                    }`}
                  >
                    {step.note}
                  </p>
                </div>
              ) : null}
            </div>
          )
        })}
      </div>
      <p className="mt-4 max-w-[78ch] text-[12px] leading-[1.7] text-muted-foreground">
        Lectura cualitativa de un recorrido, no una medición. No tengo acceso al
        funnel de Zapp, y ese es exactamente el primer accionable de esta página.
      </p>
    </div>
  )
}

function DatoCard({ dato }: { dato: DataPoint }) {
  return (
    <article className="group flex min-h-[190px] flex-col gap-3 border border-border bg-card p-5 transition-colors hover:border-brand/60">
      <div className="text-[26px] font-bold tracking-normal text-foreground transition-colors group-hover:text-brand">
        {dato.n}
      </div>
      <p className="text-[12.5px] leading-[1.7] text-foreground">{dato.l}</p>
      <p className="mt-auto border-t border-border pt-3 text-[12.5px] leading-[1.75] text-muted-foreground opacity-65 transition-opacity group-hover:opacity-100">
        {dato.so}
      </p>
    </article>
  )
}

function FeatureCard({
  icon,
  title,
  children,
}: {
  icon: ReactNode
  title: string
  children: ReactNode
}) {
  return (
    <article className="border border-border bg-card p-5">
      <div className="mb-4 flex size-9 items-center justify-center border border-border bg-secondary text-brand">
        {icon}
      </div>
      <h3 className="mb-3 text-[16px] font-semibold tracking-[0.04em] text-foreground">
        {title}
      </h3>
      <p className="text-[14px] leading-[1.8] text-foreground-muted">
        {children}
      </p>
    </article>
  )
}

function PlanTabs() {
  const [tab, setTab] = useState<PlanKey>("ahora")
  const current = PLAN[tab]

  return (
    <div className="mt-7">
      <div className="flex flex-wrap gap-2">
        {Object.entries(PLAN).map(([key, value]) => (
          <button
            key={key}
            type="button"
            onClick={() => setTab(key as PlanKey)}
            className={
              tab === key
                ? "h-8 bg-primary px-3 text-[12px] font-medium text-primary-foreground transition-opacity hover:opacity-85"
                : "h-8 border border-border bg-card px-3 text-[12px] font-medium text-foreground transition-colors hover:border-brand hover:text-brand"
            }
          >
            {value.label}
          </button>
        ))}
      </div>
      <p className="my-5 max-w-[74ch] text-[15px] leading-[1.85] text-foreground-muted">
        {current.intro}
      </p>
      <div className="grid gap-px border border-border bg-border">
        {current.items.map(([title, body], index) => (
          <article
            key={title}
            className="grid grid-cols-[28px_minmax(0,1fr)] gap-4 bg-card p-5"
          >
            <span className="pt-1 text-[11px] tracking-[0.08em] text-brand">
              0{index + 1}
            </span>
            <div className="grid gap-2">
              <h3 className="text-[16px] font-semibold tracking-[0.04em] text-foreground">
                {title}
              </h3>
              <p className="max-w-[76ch] text-[14px] leading-[1.8] text-foreground-muted">
                {body}
              </p>
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}

function PrimaryLink({
  href,
  icon,
  children,
}: {
  href: string
  icon: ReactNode
  children: ReactNode
}) {
  return (
    <Link
      href={href}
      className="inline-flex h-9 items-center gap-2 bg-primary px-4 text-[12px] font-semibold uppercase tracking-[0.1em] text-primary-foreground transition-opacity hover:opacity-85"
    >
      {icon}
      {children}
    </Link>
  )
}

function SecondaryLink({
  href,
  children,
}: {
  href: string
  children: ReactNode
}) {
  return (
    <Link
      href={href}
      className="inline-flex h-9 items-center gap-2 border border-border bg-card px-4 text-[12px] font-semibold uppercase tracking-[0.1em] text-foreground transition-colors hover:border-brand hover:text-brand"
    >
      {children}
    </Link>
  )
}
