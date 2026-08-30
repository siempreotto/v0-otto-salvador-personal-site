import { createHash } from "node:crypto"
import { cookies } from "next/headers"

export const ZAPP_COOKIE_NAME = "zapp_access"

export function getZappPassword() {
  return process.env.ZAPP_PASSWORD ?? "hire-otto"
}

export function getZappAccessToken() {
  const secret = process.env.ZAPP_AUTH_SECRET ?? "ottosalvador-zapp-access"

  return createHash("sha256")
    .update(`${getZappPassword()}:${secret}`)
    .digest("hex")
}

export async function hasZappAccess() {
  const cookieStore = await cookies()

  return cookieStore.get(ZAPP_COOKIE_NAME)?.value === getZappAccessToken()
}
