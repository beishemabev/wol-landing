"use client"

import { motion } from "framer-motion"

import { Button } from "@/components/ui/button"
import { finalCta, site } from "@/lib/content"



export function FinalCta() {
  return (
    <motion.section
      id="final-cta"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="pb-20 pt-4"
    >
      <div className="mx-auto max-w-5xl rounded-2xl border bg-card px-4 py-8 sm:px-8 sm:py-10">
        <div className="space-y-6">
          <div className="space-y-3">
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
              {finalCta.title}
            </h2>
            <p className="max-w-2xl text-sm text-muted-foreground sm:text-base">
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
            >
              {finalCta.secondary}
            </Button>
          </div>

          <p className="max-w-xl text-xs text-muted-foreground sm:text-sm">
            {finalCta.footnote}
          </p>
        </div>
      </div>
    </motion.section>
  )
}

