"use client"

import { motion } from "framer-motion"

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { mvp } from "@/lib/content"

export function MvpScreens() {
  return (
    <motion.section
      id="mvp"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="pb-16 sm:pb-20"
    >
      <div className="mx-auto max-w-5xl px-4">
        <div className="mb-8 max-w-3xl space-y-3">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            {mvp.title}
          </h2>
          <p className="text-sm text-muted-foreground sm:text-base">
            {mvp.subtitle}
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {mvp.screens.map((screen) => (
            <motion.div
              key={screen.title}
              whileHover={{ y: -4, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 260, damping: 20 }}
            >
              <Card className="h-full">
                <CardHeader className="gap-2">
                  <CardTitle className="text-base font-medium">
                    {screen.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-1.5 text-sm text-muted-foreground">
                  <ul className="space-y-1.5">
                    {screen.bullets.map((bullet) => (
                      <li key={bullet} className="leading-relaxed">
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <p className="mt-4 text-xs text-muted-foreground sm:text-sm">
          {mvp.note}
        </p>
      </div>
    </motion.section>
  )
}

