import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/react"
import "./globals.css"

export const metadata = {
  title: "Yombly",
  description: "Yombly",
  generator: "Yombly",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body className="font-sans">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
