import type React from "react"
import type { Metadata } from "next"

import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { PageTransition } from "@/components/page-transition"

import { Plus_Jakarta_Sans, Geist as V0_Font_Geist, Geist_Mono as V0_Font_Geist_Mono, Source_Serif_4 as V0_Font_Source_Serif_4 } from 'next/font/google'

// Initialize fonts
const _geist = V0_Font_Geist({ subsets: ['latin'], weight: ["100","200","300","400","500","600","700","800","900"] })
const _geistMono = V0_Font_Geist_Mono({ subsets: ['latin'], weight: ["100","200","300","400","500","600","700","800","900"] })
const _sourceSerif_4 = V0_Font_Source_Serif_4({ subsets: ['latin'], weight: ["200","300","400","500","600","700","800","900"] })

const plusJakartaSans = Plus_Jakarta_Sans({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Script Hub - Scripts Educacionais",
  description:
    "Os melhores scripts para automatizar suas plataformas educacionais. Khan Academy, Leia Paraná, Quizizz e Alura.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className="dark scroll-smooth">
      <body className={`${plusJakartaSans.className} antialiased`}>
        <PageTransition>{children}</PageTransition>
        <Analytics />
      </body>
    </html>
  )
}
