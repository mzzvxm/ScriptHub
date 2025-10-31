import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Features } from "@/components/features"
import { Credits } from "@/components/credits"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0a0b0f] via-[#0f1117] to-[#0a0b0f]">
      <Header />
      <Hero />
      <Features />
      <Credits />
      <Footer />
    </div>
  )
}
