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
import { problem } from "@/lib/content"

export function Problem() {
  return (
    <motion.section
      id={problem.id}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="pb-16 sm:pb-20"
    >
      <div className="mx-auto max-w-5xl px-4">
        <div className="mb-8 max-w-3xl space-y-3">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            {problem.title}
          </h2>
          <p className="text-pretty text-sm text-muted-foreground sm:text-base">
            {problem.lead}
          </p>
        </div>

        <div className="mb-8 space-y-4">
          <div className="text-sm font-medium text-muted-foreground">
            {problem.dailyFailuresTitle}
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {problem.dailyFailures.map((item) => (
              <motion.div
                key={item.title}
                whileHover={{ y: -4, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
              >
                <Card className="h-full">
                  <CardHeader className="gap-2">
                    <CardTitle className="text-sm font-semibold">
                      {item.title}
                    </CardTitle>
                    <CardDescription>{item.text}</CardDescription>
                  </CardHeader>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        <Separator className="my-6" />

        <div className="space-y-3">
          <div className="text-sm font-medium text-muted-foreground">
            {problem.moneyTitle}
          </div>
          <ul className="space-y-2 text-sm text-muted-foreground">
            {problem.money.map((line) => (
              <li key={line} className="leading-relaxed">
                {line}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.section>
  )
}

