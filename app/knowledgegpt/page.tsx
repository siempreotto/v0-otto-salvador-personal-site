import type { Metadata } from "next"
import Link from "next/link"
import {
  ArrowLeft,
  ArrowRight,
  Github,
  Key,
  FileText,
  Search,
  Quote,
  Lock,
  BarChart2,
  Activity,
  Code2,
} from "lucide-react"

export const metadata: Metadata = {
  title: "Knowledge GPT — Otto Salvador",
  description:
    "Chat de escritorio local y privado que responde preguntas basándose únicamente en tus propios PDFs, con citas verificables a la página exacta de origen.",
}

const steps = [
  {
    number: "01",
    icon: Key,
    title: "Pega tu API key",
    description:
      "OpenRouter u OpenAI, intercambiable. Se guarda cifrada en el keychain de tu sistema operativo — nunca en texto plano.",
  },
  {
    number: "02",
    icon: FileText,
    title: "Sube tus PDFs",
    description:
      "La app extrae texto por página, divide en fragmentos, genera embeddings y los guarda localmente. Todo en tu máquina.",
  },
  {
    number: "03",
    icon: Search,
    title: "Pregunta algo",
    description:
      "La app busca por similitud semántica los fragmentos más relevantes de tus documentos.",
  },
  {
    number: "04",
    icon: Quote,
    title: "Respuesta con citas",
    description:
      "El modelo responde citando exactamente de dónde salió cada afirmación. Haz clic en una cita y se abre el fragmento y la página exacta.",
  },
]

const features = [
  {
    icon: Lock,
    title: "100% local",
    description:
      "App de escritorio (Tauri), no un servicio web. Tus documentos, embeddings y conversaciones viven en SQLite en tu máquina — nunca salen de ahí.",
  },
  {
    icon: Key,
    title: "Trae tu propia API key",
    description:
      "OpenRouter u OpenAI, intercambiable. No hay suscripción del producto: pagas directo a tu proveedor al costo real de tus consultas.",
  },
  {
    icon: Quote,
    title: "Respuestas ancladas (RAG)",
    description:
      "El modelo responde solo con base en los fragmentos recuperados, marcados como [S1], [S2], etc. Las citas inventadas se rechazan automáticamente.",
  },
  {
    icon: BarChart2,
    title: "Panel de uso y capacidad",
    description:
      "Tokens por documento, corpus completo y conversación activa, con % de la ventana de contexto usada y recomendaciones de escalado.",
  },
  {
    icon: Activity,
    title: "Calidad de retrieval",
    description:
      "La app mide qué % de los fragmentos recuperados terminan citados, como señal continua de si el buscador está trayendo lo relevante.",
  },
  {
    icon: Code2,
    title: "Código abierto (MIT)",
    description:
      "Pensado para que cualquiera lo compile y use tal cual, o lo adapte a sus necesidades.",
  },
]

const stackItems = [
  { label: "Tauri 2", category: "Runtime" },
  { label: "React", category: "UI" },
  { label: "TypeScript", category: "Language" },
  { label: "Rust", category: "Backend" },
  { label: "SQLite", category: "Storage" },
  { label: "pdfjs-dist", category: "PDF parsing" },
  { label: "shadcn/ui", category: "Components" },
  { label: "Tailwind CSS", category: "Styling" },
]

export default function KnowledgeGPTPage() {
  return (
    <main className="min-h-screen bg-background font-mono">
      {/* Section guide line */}
      <div className="relative w-full pt-6 pb-4">
        <div className="absolute top-1/2 left-0 right-0 h-px bg-border" />
        <div className="relative flex justify-center">
          <span className="bg-background px-3 text-[11px] tracking-[0.08em] text-cyan-600/70">
            #proyectos / knowledge-gpt
          </span>
        </div>
      </div>

      {/* Back button */}
      <div className="absolute top-5 right-5 md:right-8">
        <Link
          href="/proyectos"
          className="inline-flex items-center gap-1.5 bg-white hover:bg-gray-50 border border-border px-3 py-1.5 text-[12px] tracking-[0.04em] text-foreground transition-colors"
        >
          <ArrowLeft className="w-3 h-3 text-accent" strokeWidth={2.5} />
          Proyectos
        </Link>
      </div>

      <div className="mx-auto max-w-[1100px] px-5 md:px-6 lg:px-8 pt-8 pb-20 space-y-20">

        {/* ── Hero ── */}
        <section className="space-y-5">
          <div className="flex flex-wrap items-center gap-3">
            <span className="text-[11px] font-medium tracking-[0.1em] uppercase bg-muted text-muted-foreground px-2.5 py-1">
              Open source · MIT
            </span>
            <span className="text-[11px] font-medium tracking-[0.1em] uppercase bg-muted text-muted-foreground px-2.5 py-1">
              Desktop app
            </span>
          </div>

          <h1 className="text-[clamp(36px,5.5vw,60px)] font-bold text-foreground tracking-[0.02em] text-balance">
            Knowledge GPT
          </h1>
          <p className="text-[17px] md:text-[19px] text-foreground-muted leading-[1.75] max-w-2xl text-balance">
            Chat de escritorio, local y privado, que responde preguntas basándose únicamente
            en tus propios PDFs, con citas verificables a la página exacta de origen.
          </p>

          {/* Screenshot placeholder */}
          <div className="border border-border border-dashed bg-muted/30 flex flex-col items-center justify-center gap-3 py-16 mt-6">
            <div className="w-10 h-10 border border-dashed border-muted-foreground/40 flex items-center justify-center">
              <span className="text-[20px] text-muted-foreground/40">▭</span>
            </div>
            <p className="text-[12px] tracking-[0.06em] text-muted-foreground/60 uppercase text-center max-w-xs leading-relaxed">
              Placeholder — screenshot del chat con citas pendiente
              <br />
              <span className="normal-case text-[11px]">
                (requiere correr la app nativa con una API key y un PDF de prueba)
              </span>
            </p>
          </div>
        </section>

        <hr className="border-border" />

        {/* ── Problema / Solución ── */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
          <div className="space-y-4">
            <span className="text-[11px] tracking-[0.1em] uppercase text-accent font-medium">
              El problema
            </span>
            <h2 className="text-[22px] md:text-[26px] font-bold text-foreground tracking-[0.02em] text-balance">
              Las herramientas de "chat con tus documentos" suelen ser servicios en la nube
            </h2>
            <p className="text-[15px] md:text-[16px] text-foreground-muted leading-[1.85]">
              Subes tus PDFs a un tercero, pagas una suscripción aparte del costo del modelo,
              y confías en que el modelo no "alucine" respuestas que no están realmente en tus
              documentos. Knowledge GPT ataca las tres cosas a la vez.
            </p>
          </div>

          <div className="space-y-4">
            <span className="text-[11px] tracking-[0.1em] uppercase text-accent font-medium">
              La solución
            </span>
            <h2 className="text-[22px] md:text-[26px] font-bold text-foreground tracking-[0.02em] text-balance">
              Una app de escritorio que no te pide que confíes en nadie
            </h2>
            <p className="text-[15px] md:text-[16px] text-foreground-muted leading-[1.85]">
              Pensada para quien quiere hacer preguntas sobre sus propios documentos —
              manuales, papers, contratos, apuntes — sin subirlos a un servicio de terceros
              más allá del proveedor de modelo que ya elige y controla, y sin pagar una
              suscripción aparte por la herramienta.
            </p>
          </div>
        </section>

        <hr className="border-border" />

        {/* ── Cómo funciona ── */}
        <section className="space-y-10">
          <div className="space-y-2">
            <span className="text-[11px] tracking-[0.1em] uppercase text-accent font-medium">
              Cómo funciona
            </span>
            <h2 className="text-[22px] md:text-[28px] font-bold text-foreground tracking-[0.02em]">
              Cuatro pasos, todo en tu máquina
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {steps.map((step) => {
              const Icon = step.icon
              return (
                <div
                  key={step.number}
                  className="flex gap-4 p-5 bg-card border border-border"
                >
                  <div className="flex-shrink-0 flex flex-col items-center gap-2 pt-0.5">
                    <span className="text-[11px] font-semibold tracking-[0.1em] text-accent">
                      {step.number}
                    </span>
                    <Icon className="w-4 h-4 text-muted-foreground" strokeWidth={1.75} />
                  </div>
                  <div className="space-y-1.5">
                    <h3 className="text-[14px] font-semibold text-foreground tracking-[0.03em]">
                      {step.title}
                    </h3>
                    <p className="text-[13px] text-foreground-muted leading-[1.7]">
                      {step.description}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </section>

        <hr className="border-border" />

        {/* ── Features ── */}
        <section className="space-y-10">
          <div className="space-y-2">
            <span className="text-[11px] tracking-[0.1em] uppercase text-accent font-medium">
              Features
            </span>
            <h2 className="text-[22px] md:text-[28px] font-bold text-foreground tracking-[0.02em]">
              Lo que hace diferente a Knowledge GPT
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {features.map((feature) => {
              const Icon = feature.icon
              return (
                <div
                  key={feature.title}
                  className="flex flex-col gap-3 p-5 bg-card border border-border"
                >
                  <Icon className="w-5 h-5 text-accent flex-shrink-0" strokeWidth={1.75} />
                  <h3 className="text-[14px] font-semibold text-foreground tracking-[0.03em]">
                    {feature.title}
                  </h3>
                  <p className="text-[13px] text-foreground-muted leading-[1.7]">
                    {feature.description}
                  </p>
                </div>
              )
            })}
          </div>
        </section>

        <hr className="border-border" />

        {/* ── Stack técnico ── */}
        <section className="space-y-8">
          <div className="space-y-2">
            <span className="text-[11px] tracking-[0.1em] uppercase text-accent font-medium">
              Stack técnico
            </span>
            <h2 className="text-[22px] md:text-[28px] font-bold text-foreground tracking-[0.02em]">
              Construido con
            </h2>
          </div>

          <div className="flex flex-wrap gap-3">
            {stackItems.map((item) => (
              <div
                key={item.label}
                className="flex flex-col gap-0.5 bg-card border border-border px-4 py-3"
              >
                <span className="text-[14px] font-semibold text-foreground tracking-[0.03em]">
                  {item.label}
                </span>
                <span className="text-[11px] tracking-[0.06em] uppercase text-muted-foreground">
                  {item.category}
                </span>
              </div>
            ))}
          </div>
        </section>

        <hr className="border-border" />

        {/* ── Nota de privacidad ── */}
        <section className="space-y-4 max-w-2xl">
          <span className="text-[11px] tracking-[0.1em] uppercase text-accent font-medium">
            Privacidad y BYO-key
          </span>
          <h2 className="text-[22px] md:text-[26px] font-bold text-foreground tracking-[0.02em] text-balance">
            No hay backend propio, ni cuenta, ni servidor
          </h2>
          <p className="text-[15px] md:text-[16px] text-foreground-muted leading-[1.85]">
            Es una app de escritorio de un solo usuario. La API key nunca se expone completa a
            la interfaz — solo una versión enmascarada — y las llamadas al proveedor salen
            directo desde el proceso nativo de la app, no desde la interfaz. El único
            servicio externo que recibe tus datos es el proveedor de modelo que tú eliges y
            controlas: OpenRouter u OpenAI.
          </p>
        </section>

        <hr className="border-border" />

        {/* ── CTA ── */}
        <section className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <a
            href="https://github.com/siempreotto/knowledge-gpt"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-foreground text-background px-5 py-3 text-[13px] font-semibold tracking-[0.06em] uppercase transition-opacity hover:opacity-80"
          >
            <Github className="w-4 h-4" strokeWidth={2} />
            Ver en GitHub
            <ArrowRight className="w-3.5 h-3.5" strokeWidth={2.5} />
          </a>

          <span className="text-[12px] text-muted-foreground tracking-[0.05em]">
            Licencia MIT · Corre{" "}
            <code className="bg-muted px-1.5 py-0.5 text-foreground text-[11px]">
              npm run tauri dev
            </code>{" "}
            para empezar
          </span>
        </section>

      </div>
    </main>
  )
}
