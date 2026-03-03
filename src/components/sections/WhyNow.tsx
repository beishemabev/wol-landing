"use client"

import { motion } from "framer-motion"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { value } from "@/lib/content"

export function WhyNow() {
  return (
    <motion.section
      id="why-now"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="pb-16 sm:pb-20"
    >
      <div className="mx-auto max-w-5xl px-4">
        <div className="mb-8 max-w-2xl space-y-3">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            {value.title}
          </h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {value.points.map((point) => (
            <motion.div
              key={point.title}
              whileHover={{ y: -4, scale: 1.01 }}
              transition={{ type: "spring", stiffness: 260, damping: 18 }}
            >
              <Card className="h-full">
                <CardHeader className="gap-1">
                  <CardTitle className="text-base font-medium">
                    {point.title}
                  </CardTitle>
                  <CardDescription>{point.text}</CardDescription>
                </CardHeader>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}

