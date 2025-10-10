import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/react"
import YomblyChatbot from "../components/yombly-chatbot"
import "./globals.css"
import { Suspense } from "react"

export const metadata = {
  title: "Yombly",
  description: "Yombly",
  generator: "Yombly",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body className="font-sans">
        <Suspense fallback={<div>Loading...</div>}>
          {children}
          <YomblyChatbot />
        </Suspense>
        <Analytics />
      </body>
    </html>
  )
}
