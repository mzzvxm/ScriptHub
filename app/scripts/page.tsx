import { Header } from "@/components/header"
import { ScriptCards } from "@/components/script-cards"
import { Footer } from "@/components/footer"

export default function ScriptsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0a0b0f] via-[#0f1117] to-[#0a0b0f]">
      <Header />

      {/* Hero Section for Scripts Page */}
      <section className="relative overflow-hidden pt-40 pb-20">
        <div className="absolute top-20 left-1/4 h-96 w-96 rounded-full bg-indigo-600/20 blur-[120px]" />
        <div className="absolute top-40 right-1/4 h-96 w-96 rounded-full bg-purple-600/20 blur-[120px]" />

        <div className="container relative mx-auto px-4">
          <div className="mx-auto max-w-4xl text-center mb-16">
            <h1 className="mb-6 text-5xl font-bold leading-tight text-white text-balance md:text-6xl">
              Explore os{" "}
              <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Scripts
              </span>
            </h1>
            <p className="text-lg leading-relaxed text-gray-400 text-pretty md:text-xl">
              Escolha o script ideal para sua plataforma educacional e comece a automatizar suas tarefas.
            </p>
          </div>
        </div>
      </section>

      <ScriptCards />
      <Footer />
    </div>
  )
}
