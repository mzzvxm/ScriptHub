import { Github, Code2 } from "lucide-react"

export function Credits() {
  return (
    <section id="creditos" className="py-20 px-4 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-indigo-950/10 to-transparent" />

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 mb-6">
            <Code2 className="w-4 h-4 text-indigo-400" />
            <span className="text-sm text-indigo-300">Créditos</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Sobre o Desenvolvedor</h2>
        </div>

        <div className="bg-gradient-to-br from-slate-900/50 to-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 md:p-12">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex-shrink-0">
              <img
                src="https://github.com/mzzvxm.png"
                alt="mzzvxm"
                className="w-32 h-32 rounded-full border-4 border-indigo-500/30 shadow-lg shadow-indigo-500/20"
              />
            </div>

            <div className="flex-1 text-center md:text-left">
              <h3 className="text-2xl font-bold text-white mb-3">mzzvxm</h3>
              <p className="text-slate-300 text-lg leading-relaxed mb-6">
                Desenvolvedor de scripts educacionais para plataformas de ensino. Criador de ferramentas que facilitam o
                acesso ao conhecimento em plataformas como Khan Academy, Leia Paraná, Quizizz e Alura.
              </p>
              <p className="text-slate-400 mb-6">
                Todos os projetos são open-source e desenvolvidos com foco em auxiliar estudantes a otimizar seu tempo
                de estudo.
              </p>

              <a
                href="https://github.com/mzzvxm"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-semibold rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-indigo-500/50"
              >
                <Github className="w-5 h-5" />
                Ver GitHub
              </a>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4 mt-8 pt-8 border-t border-slate-700/50">
            <div className="text-center">
              <div className="text-3xl font-bold text-indigo-400 mb-1">4+</div>
              <div className="text-sm text-slate-400">Projetos</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-400 mb-1">100%</div>
              <div className="text-sm text-slate-400">Open Source</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-indigo-400 mb-1">∞</div>
              <div className="text-sm text-slate-400">Possibilidades</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
