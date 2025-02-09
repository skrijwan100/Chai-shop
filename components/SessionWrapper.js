"use client"
import { SessionProvider } from "next-auth/react"

export default function App({children}) {
  return (
    <SessionProvider>
      {children}
    </SessionProvider>
  )
}