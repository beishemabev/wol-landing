"use client"

import { motion } from "framer-motion"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { faq } from "@/lib/content"

export function Faq() {
  return (
    <motion.section
      id={faq.id}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="pb-16 sm:pb-20"
    >
      <div className="mx-auto max-w-5xl px-4">
        <div className="mb-6 max-w-2xl space-y-3">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            {faq.title}
          </h2>
        </div>

        <Accordion type="single" collapsible className="divide-y rounded-xl border bg-card px-2">
          {faq.items.map((item) => (
            <AccordionItem key={item.q} value={item.q}>
              <AccordionTrigger className="text-sm font-medium">
                {item.q}
              </AccordionTrigger>
              <AccordionContent className="text-sm text-muted-foreground">
                {item.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </motion.section>
  )
}

