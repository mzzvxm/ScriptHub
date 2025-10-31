"use client"

import { Home, BookOpen, Heart } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"

export function Header() {
  const pathname = usePathname()

  return (
    <header className="fixed top-6 left-1/2 z-50 -translate-x-1/2">
      <nav className="flex items-center gap-1 rounded-full border border-white/10 bg-[#0f1117]/90 px-2 py-2 backdrop-blur-xl shadow-2xl transition-all duration-300 hover:border-white/20 hover:shadow-indigo-500/20">
        <Link
          href="/"
          className={`flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition-all duration-300 hover:scale-105 ${
            pathname === "/"
              ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg shadow-indigo-500/50"
              : "text-gray-300 hover:bg-white/5 hover:text-white"
          }`}
        >
          <Home className="h-4 w-4" />
          <span>Menu</span>
        </Link>
        <Link
          href="/scripts"
          className={`flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition-all duration-300 hover:scale-105 ${
            pathname === "/scripts"
              ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg shadow-indigo-500/50"
              : "text-gray-300 hover:bg-white/5 hover:text-white"
          }`}
        >
          <BookOpen className="h-4 w-4" />
          <span>Scripts</span>
        </Link>
        <a
          href="#donate"
          className="flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium text-gray-300 transition-all duration-300 hover:scale-105 hover:bg-white/5 hover:text-white"
        >
          <Heart className="h-4 w-4" />
          <span>Doar</span>
        </a>
      </nav>
    </header>
  )
}
