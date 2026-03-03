"use client"

import { motion } from "framer-motion"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { asIsToBe } from "@/lib/content"

export function AsIsToBe() {
  return (
    <motion.section
      id="as-is-to-be"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="pb-16 sm:pb-20"
    >
      <div className="mx-auto max-w-5xl px-4">
        <div className="mb-8 max-w-2xl space-y-3">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            {asIsToBe.title}
          </h2>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <Card className="h-full bg-muted/40">
            <CardHeader className="gap-2">
              <CardTitle className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
                {asIsToBe.asIs.title}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-sm">
              <ul className="space-y-2 text-muted-foreground">
                {asIsToBe.asIs.steps.map((step) => (
                  <li key={step} className="leading-relaxed">
                    {step}
                  </li>
                ))}
              </ul>
              <Separator className="my-2" />
              <CardDescription className="text-sm">
                {asIsToBe.asIs.pain}
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="h-full border-primary/20 bg-card">
            <CardHeader className="gap-2">
              <CardTitle className="text-sm font-semibold uppercase tracking-wide text-primary">
                {asIsToBe.toBe.title}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-sm">
              <ul className="space-y-2 text-muted-foreground">
                {asIsToBe.toBe.steps.map((step) => (
                  <li key={step} className="leading-relaxed">
                    {step}
                  </li>
                ))}
              </ul>
              <Separator className="my-2" />
              <CardDescription className="text-sm">
                {asIsToBe.toBe.note}
              </CardDescription>
            </CardContent>
          </Card>
        </div>
      </div>
    </motion.section>
  )
}

