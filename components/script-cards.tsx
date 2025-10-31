"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, BookOpen, GraduationCap, Brain, Code, Copy, Check } from "lucide-react"
import { useState } from "react"

const scripts = [
  {
    name: "Khan Academy Bypass",
    description: "Automatize suas atividades na Khan Academy com facilidade e eficiência.",
    icon: GraduationCap,
    color: "from-emerald-500 to-teal-600",
    github: "https://github.com/mzzvxm/KhanBypass",
    bookmarklet:
      'javascript:fetch("https://cdn.jsdelivr.net/gh/mzzvxm/KhanBypass@latest/Script.js").then(r=>r.text()).then(eval);',
  },
  {
    name: "Leia Paraná Bypass",
    description: "Script para a plataforma Leia Paraná (Odilo). Facilite sua leitura digital.",
    icon: BookOpen,
    color: "from-blue-500 to-cyan-600",
    github: "https://github.com/mzzvxm/LeiaPRBypass",
    bookmarklet:
      "javascript:(function(){fetch('https://cdn.jsdelivr.net/gh/mzzvxm/LeiaPRBypass@latest/script.js').then(r=>r.text()).then(eval);})();",
  },
  {
    name: "Wayground XGen",
    description: "Ferramenta poderosa para Quizizz via Wayground. Maximize seus resultados.",
    icon: Brain,
    color: "from-purple-500 to-pink-600",
    website: "https://waygroundx.vercel.app/",
    github: "https://github.com/mzzvxm/WaygroundXGen",
  },
  {
    name: "Alura Bypass",
    description: "Otimize sua experiência de aprendizado na plataforma Alura.",
    icon: Code,
    color: "from-orange-500 to-red-600",
    github: "https://github.com/mzzvxm/AluraBypass",
    bookmarklet:
      'javascript:fetch("https://cdn.jsdelivr.net/gh/mzzvxm/AluraBypass@latest/script.js").then(res=>res.text()).then(eval);',
  },
]

export function ScriptCards() {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null)

  const copyBookmarklet = async (bookmarklet: string, index: number) => {
    try {
      await navigator.clipboard.writeText(bookmarklet)
      setCopiedIndex(index)
      setTimeout(() => setCopiedIndex(null), 2000)
    } catch (err) {
      console.error("Failed to copy:", err)
    }
  }

  return (
    <section id="scripts" className="relative py-20">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-4xl font-bold text-white md:text-5xl">Scripts Disponíveis</h2>
          <p className="text-lg text-gray-400">Escolha o script ideal para sua plataforma educacional</p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:gap-8">
          {scripts.map((script, index) => {
            const Icon = script.icon
            return (
              <Card
                key={index}
                className="group relative overflow-hidden border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] p-6 backdrop-blur-sm transition-all hover:border-white/20 hover:shadow-2xl hover:shadow-indigo-500/10"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/0 to-purple-500/0 opacity-0 transition-opacity group-hover:opacity-10" />

                <div className="relative">
                  <div
                    className={`mb-4 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br ${script.color}`}
                  >
                    <Icon className="h-7 w-7 text-white" />
                  </div>

                  <h3 className="mb-3 text-2xl font-bold text-white">{script.name}</h3>

                  <p className="mb-6 leading-relaxed text-gray-400">{script.description}</p>

                  <div className="flex gap-3">
                    {script.bookmarklet ? (
                      <>
                        <Button
                          className="flex-1 bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:from-indigo-700 hover:to-purple-700"
                          onClick={() => copyBookmarklet(script.bookmarklet!, index)}
                        >
                          {copiedIndex === index ? (
                            <>
                              <Check className="mr-2 h-4 w-4" />
                              Copiado!
                            </>
                          ) : (
                            <>
                              <Copy className="mr-2 h-4 w-4" />
                              Copiar Bookmarklet
                            </>
                          )}
                        </Button>
                        <Button
                          variant="outline"
                          className="border-white/10 bg-white/5 text-white hover:bg-white/10"
                          asChild
                        >
                          <a href={script.github} target="_blank" rel="noopener noreferrer">
                            <Github className="h-4 w-4" />
                          </a>
                        </Button>
                      </>
                    ) : (
                      <>
                        <Button
                          className="flex-1 bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:from-indigo-700 hover:to-purple-700"
                          asChild
                        >
                          <a href={script.website} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="mr-2 h-4 w-4" />
                            Acessar Site
                          </a>
                        </Button>
                        <Button
                          variant="outline"
                          className="border-white/10 bg-white/5 text-white hover:bg-white/10"
                          asChild
                        >
                          <a href={script.github} target="_blank" rel="noopener noreferrer">
                            <Github className="h-4 w-4" />
                          </a>
                        </Button>
                      </>
                    )}
                  </div>
                </div>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
