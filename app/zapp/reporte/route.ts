import { readFile } from "node:fs/promises"
import { join } from "node:path"
import { NextRequest, NextResponse } from "next/server"
import { hasZappAccess } from "../auth"

export const dynamic = "force-dynamic"

export async function GET(request: NextRequest) {
  if (!(await hasZappAccess())) {
    return NextResponse.redirect(new URL("/zapp", request.url))
  }

  const reportPath = join(process.cwd(), "content/zapp/reporte-completo-zapp.html")
  const sourceHtml = await readFile(reportPath, "utf8")
  const html = sourceHtml
    .replaceAll('href="_ds/', 'href="/zapp-assets/_ds/')
    .replaceAll('src="doc-page.js"', 'src="/zapp-assets/doc-page.js"')
    .replaceAll('href="Zapp.html"', 'href="/zapp"')

  return new NextResponse(html, {
    headers: {
      "Cache-Control": "private, no-store",
      "Content-Type": "text/html; charset=utf-8",
    },
  })
}
