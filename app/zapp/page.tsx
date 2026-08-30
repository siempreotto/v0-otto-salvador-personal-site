import type { Metadata } from "next"
import Link from "next/link"
import { LockKeyhole } from "lucide-react"
import { unlockZapp } from "./actions"
import { hasZappAccess } from "./auth"
import { ZappExperience } from "./zapp-experience"

export const dynamic = "force-dynamic"

export const metadata: Metadata = {
  title: "Zapp - Otto Salvador",
  description:
    "Analisis de producto de Otto Salvador sobre Zapp, remesas por WhatsApp y la oportunidad B2B white-label.",
}

type ZappPageProps = {
  searchParams?: Promise<Record<string, string | string[] | undefined>>
}

export default async function ZappPage({ searchParams }: ZappPageProps) {
  const params = await searchParams
  const canView = await hasZappAccess()

  if (!canView) {
    const hasError = params?.error === "1"

    return <PasswordGate hasError={hasError} />
  }

  return <ZappExperience />
}

function PasswordGate({ hasError }: { hasError: boolean }) {
  return (
    <main className="min-h-screen bg-background px-5 py-10 text-foreground md:px-8">
      <section className="mx-auto flex min-h-[calc(100vh-5rem)] w-full max-w-[720px] flex-col justify-center">
        <Link
          href="/"
          className="mb-10 w-fit text-[11px] font-medium uppercase tracking-[0.14em] text-foreground-muted transition-colors hover:text-brand"
        >
          OTTOSALVADOR.COM
        </Link>

        <div className="border border-border bg-card p-6 md:p-8">
          <div className="mb-6 flex size-11 items-center justify-center border border-border bg-secondary text-brand">
            <LockKeyhole className="size-5" strokeWidth={2} />
          </div>

          <p className="mb-3 text-[11px] font-medium uppercase tracking-[0.14em] text-brand">
            Acceso privado
          </p>
          <h1 className="mb-5 max-w-[14ch] text-[34px] font-semibold leading-[1.1] tracking-normal text-foreground md:text-[44px]">
            Zapp product case
          </h1>
          <p className="mb-7 max-w-[62ch] text-[15px] leading-[1.8] text-foreground-muted">
            Esta pagina contiene una lectura de producto preparada por Otto
            Salvador. Ingresa la contrasena para abrir la version interactiva y
            el reporte completo.
          </p>

          <form action={unlockZapp} className="grid gap-3 sm:grid-cols-[1fr_auto]">
            <label className="sr-only" htmlFor="zapp-password">
              Contrasena
            </label>
            <input
              id="zapp-password"
              name="password"
              type="password"
              autoComplete="current-password"
              required
              className="h-11 border border-input bg-background px-3 text-[14px] text-foreground outline-none transition focus:border-ring focus:ring-3 focus:ring-ring/20"
              placeholder="Contrasena"
            />
            <button
              type="submit"
              className="h-11 bg-primary px-5 text-[12px] font-semibold uppercase tracking-[0.12em] text-primary-foreground transition-opacity hover:opacity-85"
            >
              Entrar
            </button>
          </form>

          {hasError ? (
            <p className="mt-4 text-[13px] leading-[1.7] text-brand">
              Contrasena incorrecta. Intentalo otra vez.
            </p>
          ) : null}
        </div>
      </section>
    </main>
  )
}
