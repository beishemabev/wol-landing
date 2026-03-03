"use client"

import { motion } from "framer-motion"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { pricing } from "@/lib/content"

export function Pricing() {
  return (
    <motion.section
      id={pricing.id}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="pb-16 sm:pb-20"
    >
      <div className="mx-auto max-w-5xl px-4">
        <div className="mb-8 max-w-3xl space-y-3">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            {pricing.title}
          </h2>
          <p className="text-sm text-muted-foreground sm:text-base">
            {pricing.subtitle}
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {pricing.plans.map((plan) => (
            <motion.div
              key={plan.name}
              whileHover={{ y: -3 }}
              transition={{ duration: 0.18, ease: "easeOut" }}
              className="h-full"
            >
              <Card className="h-full rounded-2xl">
                <CardHeader className="gap-3">
                  <div className="flex items-start justify-between gap-3">
                    <div className="space-y-1">
                      <CardTitle className="text-base font-semibold">
                        {plan.name}
                      </CardTitle>
                      <div className="text-xs text-muted-foreground">
                        {plan.tag}
                      </div>
                    </div>

                    <div className="text-right">
                      <div className="text-lg font-semibold">{plan.price}</div>
                      <Badge variant="secondary" className="mt-2 text-[11px]">
                        {plan.tag}
                      </Badge>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="space-y-3 text-xs text-muted-foreground">
                  <div className="space-y-1.5">
                    <div className="text-[11px] font-medium uppercase tracking-wide text-foreground/70">
                      Лимиты
                    </div>
                    <ul className="space-y-1.5">
                      {plan.limits.map((line) => (
                        <li key={line} className="leading-relaxed">
                          {line}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Separator />

                  <div className="space-y-1.5">
                    <div className="text-[11px] font-medium uppercase tracking-wide text-foreground/70">
                      Включено
                    </div>
                    <ul className="space-y-1.5">
                      {plan.includes.map((line) => (
                        <li key={line} className="leading-relaxed">
                          {line}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-[minmax(0,1.5fr)_minmax(0,2fr)]">
          <Card className="rounded-2xl">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">
                {pricing.onboarding.title}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-xs text-muted-foreground">
              <ul className="space-y-1.5">
                {pricing.onboarding.items.map((item) => (
                  <li key={item} className="leading-relaxed">
                    {item}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card className="rounded-2xl">
            <CardContent className="py-4 text-xs text-muted-foreground">
              {pricing.onboarding.note}
            </CardContent>
          </Card>
        </div>
      </div>
    </motion.section>
  )
}