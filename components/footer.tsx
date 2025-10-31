"use client"

import { Github, Heart } from "lucide-react"

export function Footer() {
  return (
    <footer id="about" className="relative border-t border-white/5 py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <div className="flex items-center gap-2 text-gray-400">
            <span>Feito com</span>
            <Heart className="h-4 w-4 fill-red-500 text-red-500" />
            <span>por</span>
            <a
              href="https://github.com/mzzvxm"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-white transition-colors hover:text-indigo-400"
            >
              mzzvxm
            </a>
          </div>

          <div className="flex items-center gap-6">
            <a
              href="https://github.com/mzzvxm"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 transition-colors hover:text-white"
            >
              <Github className="h-5 w-5" />
            </a>
          </div>
        </div>

        <div className="mt-8 text-center text-sm text-gray-500">
          <p>Todos os scripts são de código aberto e disponíveis no GitHub</p>
        </div>
      </div>
    </footer>
  )
}
