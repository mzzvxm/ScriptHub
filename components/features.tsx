"use client"

import { Zap, Shield, Wrench } from "lucide-react"

const features = [
  {
    icon: Zap,
    title: "Rápido e Eficiente",
    description: "Scripts otimizados para máxima performance e velocidade de execução.",
  },
  {
    icon: Shield,
    title: "Código Aberto",
    description: "Totalmente open source. Revise, modifique e contribua com o código.",
  },
  {
    icon: Wrench,
    title: "Fácil de Usar",
    description: "Instalação simples e interface intuitiva. Comece a usar em minutos.",
  },
]

export function Features() {
  return (
    <section id="features" className="relative py-20">
      <div className="container mx-auto px-4">
        <div className="grid gap-8 md:grid-cols-3">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div key={index} className="text-center">
                <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-500/20 to-purple-500/20 backdrop-blur-sm">
                  <Icon className="h-8 w-8 text-indigo-400" />
                </div>
                <h3 className="mb-2 text-xl font-bold text-white">{feature.title}</h3>
                <p className="leading-relaxed text-gray-400">{feature.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
