import { AsIsToBe } from "@/components/sections/AsIsToBe"
import { Faq } from "@/components/sections/Faq"
import { FinalCta } from "@/components/sections/FinalCta"
import { Footer } from "@/components/sections/Footer"
import { Header } from "@/components/sections/Header"
import { Hero } from "@/components/sections/Hero"
import { HowItWorks } from "@/components/sections/HowItWorks"
import { MinMultipleDemo } from "@/components/sections/MinMultipleDemo"
import { MvpScreens } from "@/components/sections/MvpScreens"
import { Pilot } from "@/components/sections/Pilot"
import { Pricing } from "@/components/sections/Pricing"
import { Problem } from "@/components/sections/Problem"
import { RoiCalculator } from "@/components/sections/RoiCalculator"
import { WhatsAppTemplates } from "@/components/sections/WhatsAppTemplates"
import { WhyNow } from "@/components/sections/WhyNow"

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="mx-auto w-full max-w-5xl px-4 pb-20">
        {/* Hero — отдельным “экраном”, чтобы сразу продавал */}
        <Hero />

        {/* Остальные секции — ровный ритм, минималистично */}
        <div className="flex flex-col gap-14 pb-4 sm:gap-16 md:gap-20">
          <WhyNow />
          <AsIsToBe />
          <Problem />
          <HowItWorks />
          <WhatsAppTemplates />
          <MinMultipleDemo />
          <RoiCalculator />
          <MvpScreens />
          <Pricing />
          <Pilot />
          <Faq />
          <FinalCta />
        </div>
      </main>
      <Footer />
    </div>
  )
}