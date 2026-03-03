"use client"

import { motion } from "framer-motion"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { minMultipleDemo } from "@/lib/content"

export function MinMultipleDemo() {
  return (
    <motion.section
      id="min-multiple"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="pb-16 sm:pb-20"
    >
      <div className="mx-auto max-w-5xl px-4">
        <div className="mb-8 max-w-3xl space-y-3">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            {minMultipleDemo.title}
          </h2>
          <p className="text-sm text-muted-foreground sm:text-base">
            {minMultipleDemo.subtitle}
          </p>
        </div>

        <motion.div
          whileHover={{ y: -4, scale: 1.02 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
        >
          <Card className="overflow-hidden">
            <CardHeader className="flex flex-row items-start justify-between gap-4">
              <div className="space-y-1.5">
                <CardTitle className="text-base font-semibold">
                  {minMultipleDemo.example.productName}
                </CardTitle>
                <Badge variant="secondary">
                  {minMultipleDemo.example.multiple}
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-2 text-sm text-muted-foreground">
              <p>{minMultipleDemo.example.helper}</p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </motion.section>
  )
}

