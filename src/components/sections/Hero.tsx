"use client"

import { motion } from "framer-motion"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { finalCta, pilot, roi, site } from "@/lib/content"

function handlePilotClick() {
  if (typeof document === "undefined") return
  const el = document.getElementById("pilot")
  if (!el) return
  const rect = el.getBoundingClientRect()
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop
  window.scrollTo({
    top: rect.top + scrollTop - 96,
    behavior: "smooth",
  })
}

export function Hero() {
  return (
    <motion.section
      id="hero"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="pt-24 pb-16 sm:pt-28 sm:pb-20"
    >
      <div className="mx-auto flex max-w-5xl flex-col gap-8 px-4">
        <div className="flex flex-col gap-4">
          <div className="flex flex-wrap items-center gap-2">
            <Badge variant="secondary">{roi.title}</Badge>
            <Badge variant="outline" className="text-xs font-normal">
              {pilot.subtitle}
            </Badge>
          </div>
          <h1 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
            {finalCta.title}
          </h1>
          <p className="max-w-2xl text-pretty text-base text-muted-foreground sm:text-lg">
            {finalCta.subtitle}
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3">
        <Button asChild size="lg" className="rounded-full px-6 text-sm">
  <a href={site.whatsappLink} target="_blank" rel="noreferrer">
    {finalCta.primary}
  </a>
</Button>
<Button
  size="lg"
  variant="outline"
  className="rounded-full px-6 text-sm"
  onClick={() => {
    const el = document.getElementById("whatsapp")
    if (!el) return
    const rect = el.getBoundingClientRect()
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop
    window.scrollTo({ top: rect.top + scrollTop - 96, behavior: "smooth" })
  }}
>
  {finalCta.secondary}
</Button>
        </div>

        <p className="max-w-xl text-sm text-muted-foreground">
          {finalCta.footnote}
        </p>
      </div>
    </motion.section>
  )
}

