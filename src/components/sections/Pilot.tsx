"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { pilot, site } from "@/lib/content"

export function Pilot() {
  return (
    <motion.section
      id={pilot.id}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="pb-16 sm:pb-20"
    >
      <div className="mx-auto max-w-5xl px-4">
        <div className="mb-8 max-w-3xl space-y-3">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            {pilot.title}
          </h2>
          <p className="text-sm text-muted-foreground sm:text-base">
            {pilot.subtitle}
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle className="text-sm font-medium">
                {pilot.format[0]}
              </CardTitle>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-sm font-medium">
                {pilot.format[1]}
              </CardTitle>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-sm font-medium">
                {pilot.format[2]}
              </CardTitle>
            </CardHeader>
          </Card>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          <Card>
            <CardHeader className="gap-2">
              <CardTitle className="text-sm font-semibold">
                {pilot.metricsTitle}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-1.5 text-sm text-muted-foreground">
              <ul className="space-y-1.5">
                {pilot.metrics.map((item) => (
                  <li key={item} className="leading-relaxed">
                    {item}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="gap-2">
              <CardTitle className="text-sm font-semibold">
                {pilot.successTitle}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-1.5 text-sm text-muted-foreground">
              <ul className="space-y-1.5">
                {pilot.success.map((item) => (
                  <li key={item} className="leading-relaxed">
                    {item}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>

        <div className="mt-8 text-sm text-muted-foreground">
          {pilot.closingQuestion}
        </div><div className="mt-6 flex flex-wrap items-center gap-3">
  <Button asChild size="lg" className="rounded-full px-6 text-sm">
    <a href={site.whatsappLink} target="_blank" rel="noreferrer">
      {site.primaryCta}
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
    Показать пример заказа
  </Button>
</div>
      </div>
    </motion.section>
  )
}

