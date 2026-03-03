"use client"

import { motion } from "framer-motion"

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { howItWorks } from "@/lib/content"

export function HowItWorks() {
  return (
    <motion.section
      id={howItWorks.id}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="pb-16 sm:pb-20"
    >
      <div className="mx-auto max-w-5xl px-4">
        <div className="mb-8 max-w-2xl space-y-3">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            {howItWorks.title}
          </h2>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {howItWorks.steps.map((step) => (
            <motion.div
              key={step.title}
              whileHover={{ y: -4, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 260, damping: 20 }}
            >
              <Card className="h-full">
                <CardHeader className="gap-2">
                  <CardTitle className="text-base font-medium">
                    {step.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground">
                  {step.text}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}

