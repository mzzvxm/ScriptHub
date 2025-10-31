"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles } from "lucide-react"
import Link from "next/link"

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-40 pb-20">
      {/* Gradient orbs */}
      <div className="absolute top-20 left-1/4 h-96 w-96 rounded-full bg-indigo-600/20 blur-[120px]" />
      <div className="absolute top-40 right-1/4 h-96 w-96 rounded-full bg-purple-600/20 blur-[120px]" />

      <div className="container relative mx-auto px-4">
        <div className="mx-auto max-w-4xl text-center">
          {/* Badge */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-indigo-500/20 bg-indigo-500/10 px-4 py-1.5 text-sm text-indigo-300 backdrop-blur-sm">
            <Sparkles className="h-4 w-4" />
            <span>Scripts Educacionais</span>
          </div>

          {/* Main heading */}
          <h1 className="mb-6 text-5xl font-bold leading-tight text-white md:text-7xl">
            Os melhores scripts para{" "}
            <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              suas plataformas
            </span>
          </h1>

          {/* Subtitle */}
          <p className="mb-10 text-lg leading-relaxed text-gray-400 md:text-xl">
            Automatize suas tarefas educacionais com scripts poderosos e fáceis de usar. Suporte para Khan Academy, Leia
            Paraná, Quizizz e Alura.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button
              size="lg"
              className="group h-12 bg-gradient-to-r from-indigo-600 to-purple-600 px-8 text-base font-semibold text-white transition-all duration-300 hover:scale-105 hover:from-indigo-500 hover:to-purple-500 hover:shadow-xl hover:shadow-indigo-500/50"
              asChild
            >
              <Link href="/scripts">
                Explorar Scripts
                <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="h-12 border-white/10 bg-white/5 px-8 text-base font-semibold text-white transition-all duration-300 hover:scale-105 hover:border-white/20 hover:bg-white/10 hover:shadow-xl"
              asChild
            >
              <a href="https://github.com/mzzvxm" target="_blank" rel="noopener noreferrer">
                Ver no GitHub
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
