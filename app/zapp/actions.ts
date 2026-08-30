"use server"

import { cookies } from "next/headers"
import { redirect } from "next/navigation"
import { getZappAccessToken, getZappPassword, ZAPP_COOKIE_NAME } from "./auth"

export async function unlockZapp(formData: FormData) {
  const password = String(formData.get("password") ?? "").trim()

  if (password !== getZappPassword()) {
    redirect("/zapp?error=1")
  }

  const cookieStore = await cookies()
  cookieStore.set({
    name: ZAPP_COOKIE_NAME,
    value: getZappAccessToken(),
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/zapp",
    maxAge: 60 * 60 * 24 * 14,
  })

  redirect("/zapp")
}
