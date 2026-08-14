import type { Metadata } from "next"
import Link from "next/link"
import {
  ArrowLeft,
  ArrowRight,
  Github,
  Key,
  Command,
  Mic,
  ClipboardPaste,
  Focus,
  Sliders,
  Lock,
  Clipboard,
  BarChart2,
  Code2,
} from "lucide-react"

export const metadata: Metadata = {
  title: "Open Wisp by Otto — Otto Salvador",
  description:
    "Dictado de escritorio para macOS: Option + Space para grabar, HUD sin robar foco, transcripción con OpenAI u OpenRouter, y texto listo en el portapapeles.",
}

const steps = [
  {
    number: "01",
    icon: Key,
    title: "Pega tu API key",
    description:
      "OpenAI u OpenRouter. Se guarda cifrada en macOS Keychain y nunca vuelve completa a la interfaz.",
  },
  {
    number: "02",
    icon: Command,
    title: "Presiona Option + Space",
    description:
      "La app inicia el micrófono y muestra un HUD flotante con waveform, sin traer Open Wisp al frente.",
  },
  {
    number: "03",
    icon: Mic,
    title: "Habla y detén",
    description:
      "Al presionar Option + Space otra vez, Rust finaliza el audio, lo optimiza a WAV mono 16 kHz y lo envía al proveedor activo.",
  },
  {
    number: "04",
    icon: ClipboardPaste,
    title: "Pega manualmente",
    description:
      "El texto transcrito se copia al portapapeles. Tú decides dónde pegarlo con Command + V.",
  },
]

const features = [
  {
    icon: Focus,
    title: "HUD sin robar foco",
    description:
      "Ventana transparente, always-on-top y no focusable para mantener el contexto de trabajo.",
  },
  {
    icon: Sliders,
    title: "OpenAI u OpenRouter",
    description:
      "Selector de proveedor y modelo editable. Las keys se guardan por separado en Keychain.",
  },
  {
    icon: Lock,
    title: "Privacidad por diseño",
    description:
      "No guarda audio ni transcripciones por defecto. No hay backend, login, cloud sync ni telemetría.",
  },
  {
    icon: Clipboard,
    title: "Portapapeles manual",
    description:
      "Copia texto al clipboard y evita permisos de Accessibility o simulación de teclado.",
  },
  {
    icon: BarChart2,
    title: "Consumo mensual",
    description:
      "Registra metadata local: proveedor, modelo, duración, tokens y costo estimado o reportado. Se reinicia al cambiar de mes.",
  },
  {
    icon: Code2,
    title: "Código abierto",
    description:
      "Repositorio MIT preparado para personalizar nombre, logo, estilo, modelos y proveedores.",
  },
]

const stackItems = [
  { label: "Tauri 2", category: "Runtime" },
  { label: "Rust", category: "Native services" },
  { label: "React", category: "UI" },
  { label: "TypeScript", category: "Language" },
  { label: "Vite", category: "Build" },
  { label: "cpal", category: "Microphone" },
  { label: "hound", category: "WAV" },
  { label: "reqwest", category: "Provider calls" },
  { label: "macOS Keychain", category: "Secrets" },
]

export default function OpenWispPage() {
  return (
    <main className="min-h-screen bg-background font-mono">
      {/* Section guide line */}
      <div className="relative w-full pt-6 pb-4">
        <div className="absolute top-1/2 left-0 right-0 h-px bg-border" />
        <div className="relative flex justify-center">
          <span className="bg-background px-3 text-[11px] tracking-[0.08em] text-cyan-600/70">
            #portfolio / open-wisp-by-otto
          </span>
        </div>
      </div>

      {/* Back button */}
      <div className="absolute top-5 right-5 md:right-8">
        <Link
          href="/portfolio"
          className="inline-flex items-center gap-1.5 bg-white hover:bg-gray-50 border border-border px-3 py-1.5 text-[12px] tracking-[0.04em] text-foreground transition-colors"
        >
          <ArrowLeft className="w-3 h-3 text-accent" strokeWidth={2.5} />
          Portfolio
        </Link>
      </div>

      <div className="mx-auto max-w-6xl px-5 md:px-6 lg:px-8 pt-8 pb-20 space-y-20">

        {/* ── Hero ── */}
        <section className="space-y-5">
          <div className="flex flex-wrap items-center gap-3">
            <span className="text-[11px] font-medium tracking-[0.1em] uppercase bg-muted text-muted-foreground px-2.5 py-1">
              Open source · MIT
            </span>
            <span className="text-[11px] font-medium tracking-[0.1em] uppercase bg-muted text-muted-foreground px-2.5 py-1">
              macOS app
            </span>
            <span className="text-[11px] font-medium tracking-[0.1em] uppercase bg-muted text-muted-foreground px-2.5 py-1">
              Tauri 2
            </span>
          </div>

          <h1 className="text-[clamp(36px,5.5vw,60px)] font-bold text-foreground tracking-[0.02em] text-balance">
            Open Wisp by Otto
          </h1>
          <p className="text-[17px] md:text-[19px] text-foreground-muted leading-[1.75] max-w-2xl text-balance">
            Dictado de escritorio para macOS: Option + Space para grabar, HUD sin robar foco,
            transcripción con OpenAI u OpenRouter, y texto listo en el portapapeles.
          </p>

          {/* Hero mockup panel */}
          <div className="border border-border border-dashed bg-muted/30 flex flex-col items-center justify-center gap-8 py-12 md:py-16 mt-6 px-4">
            <div className="flex flex-col md:flex-row items-center gap-8 w-full max-w-xl justify-center">
              {/* HUD pill mockup */}
              <div className="flex items-center gap-2.5 bg-[#1a1a1a] rounded-full px-4 py-2.5 shadow-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-red-400" />
                <div className="flex items-end gap-[3px] h-4">
                  {[6, 12, 8, 16, 10, 14, 7, 11].map((h, i) => (
                    <span
                      key={i}
                      className="w-[2.5px] bg-white/70 rounded-full"
                      style={{ height: `${h}px` }}
                    />
                  ))}
                </div>
                <span className="text-[10px] text-white/60 tracking-[0.06em] pl-1">
                  Opt + Space
                </span>
              </div>

              {/* Settings panel mockup */}
              <div className="w-full max-w-[220px] bg-white border border-border text-left">
                <div className="border-b border-border px-3 py-2">
                  <span className="text-[10px] font-semibold tracking-[0.08em] uppercase text-foreground">
                    Ajustes
                  </span>
                </div>
                <div className="p-3 space-y-2.5">
                  <div className="space-y-1">
                    <span className="text-[9px] tracking-[0.06em] uppercase text-muted-foreground">
                      Proveedor
                    </span>
                    <div className="flex gap-1.5">
                      <span className="text-[10px] px-2 py-1 bg-foreground text-background">
                        OpenAI
                      </span>
                      <span className="text-[10px] px-2 py-1 border border-border text-muted-foreground">
                        OpenRouter
                      </span>
                    </div>
                  </div>
                  <div className="space-y-1">
                    <span className="text-[9px] tracking-[0.06em] uppercase text-muted-foreground">
                      API key
                    </span>
                    <div className="text-[10px] px-2 py-1 border border-border text-muted-foreground tracking-[0.08em]">
                      sk-••••••••••••
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-10 h-10 border border-dashed border-muted-foreground/40 flex items-center justify-center">
              <span className="text-[20px] text-muted-foreground/40">▭</span>
            </div>
            <p className="text-[12px] tracking-[0.06em] text-muted-foreground/60 uppercase text-center max-w-xs leading-relaxed">
              Placeholder — screenshot del HUD y ajustes
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
              Dictar texto en macOS suele romper el flujo
            </h2>
            <p className="text-[15px] md:text-[16px] text-foreground-muted leading-[1.85]">
              Muchas herramientas de dictado requieren permisos invasivos, extensiones,
              servicios en la nube, o pegan texto automáticamente en la app activa. Open Wisp
              reduce el contrato: escucha, transcribe, copia al portapapeles y deja que tú
              pegues manualmente.
            </p>
          </div>

          <div className="space-y-4">
            <span className="text-[11px] tracking-[0.1em] uppercase text-accent font-medium">
              La solución
            </span>
            <h2 className="text-[22px] md:text-[26px] font-bold text-foreground tracking-[0.02em] text-balance">
              Una app de barra de menú que hace una sola cosa bien
            </h2>
            <p className="text-[15px] md:text-[16px] text-foreground-muted leading-[1.85]">
              Open Wisp vive en macOS, se activa con Option + Space, muestra un HUD que no
              roba foco y usa el proveedor de transcripción que tú configures. Sin
              Accessibility, sin auto-paste, sin backend propio, sin historial de
              transcripciones.
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
              Lo que hace diferente a Open Wisp
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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

        {/* ── Privacidad y BYO-key ── */}
        <section className="space-y-4 max-w-2xl">
          <span className="text-[11px] tracking-[0.1em] uppercase text-accent font-medium">
            Privacidad y BYO-key
          </span>
          <h2 className="text-[22px] md:text-[26px] font-bold text-foreground tracking-[0.02em] text-balance">
            No hay backend propio, ni cuenta, ni servidor
          </h2>
          <p className="text-[15px] md:text-[16px] text-foreground-muted leading-[1.85]">
            Open Wisp es una app local de un solo usuario. La API key nunca se expone completa
            a la interfaz. Las llamadas salen directo desde el proceso nativo hacia OpenAI u
            OpenRouter. El único servicio externo que recibe audio es el proveedor que eliges
            y controlas.
          </p>
        </section>

        <hr className="border-border" />

        {/* ── CTA ── */}
        <section className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <a
            href="https://github.com/siempreotto/open-wisp-by-otto"
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
