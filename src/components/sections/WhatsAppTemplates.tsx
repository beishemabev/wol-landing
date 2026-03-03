"use client"

import { useMemo, useState } from "react"
import { motion } from "framer-motion"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { whatsappTemplates } from "@/lib/content"

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.04,
    },
  },
}

const lineVariants = {
  hidden: { opacity: 0, y: 4 },
  visible: { opacity: 1, y: 0 },
}

function TemplateText({ text }: { text: string }) {
  const lines = text.split("\n")

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="space-y-1.5 text-sm font-mono leading-relaxed"
    >
      {lines.map((line, index) => (
        <motion.div key={`${index}-${line}`} variants={lineVariants}>
          {line}
        </motion.div>
      ))}
    </motion.div>
  )
}

export function WhatsAppTemplates() {
  const defaultKey = whatsappTemplates.tabs[0]?.key ?? "A"
  const [activeKey, setActiveKey] = useState<string>(defaultKey)

  const activeText = useMemo(() => {
    return whatsappTemplates.tabs.find((t) => t.key === activeKey)?.text ?? ""
  }, [activeKey])

  async function copyActive() {
    try {
      await navigator.clipboard.writeText(activeText)
      // можно добавить toast позже; минимализм — без лишних всплывашек
    } catch {
      // fallback: ничего, но можно добавить alert позже
    }
  }

  return (
    <motion.section
      id={whatsappTemplates.id}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="pb-16 sm:pb-20"
    >
      <div className="mx-auto max-w-5xl px-4">
        <div className="mb-8 max-w-3xl space-y-3">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            {whatsappTemplates.title}
          </h2>
          <p className="text-sm text-muted-foreground sm:text-base">
            {whatsappTemplates.subtitle}
          </p>
        </div>

        <Tabs
          value={activeKey}
          onValueChange={setActiveKey}
          className="rounded-2xl border bg-card p-4 sm:p-6"
        >
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <TabsList variant="default" className="w-full sm:w-auto">
              {whatsappTemplates.tabs.map((tab) => (
                <TabsTrigger key={tab.key} value={tab.key}>
                  {tab.label}
                </TabsTrigger>
              ))}
            </TabsList>

            <Button
              variant="outline"
              size="sm"
              className="rounded-full"
              onClick={copyActive}
            >
              Скопировать текст
            </Button>
          </div>

          <Separator className="my-4" />

          {whatsappTemplates.tabs.map((tab) => (
            <TabsContent key={tab.key} value={tab.key} className="m-0">
              <Card className="border bg-secondary/35">
                <CardContent className="py-4 text-left sm:py-6">
                  <TemplateText text={tab.text} />
                </CardContent>
              </Card>
            </TabsContent>
          ))}
        </Tabs>

        <p className="mt-4 text-xs text-muted-foreground sm:text-sm">
          {whatsappTemplates.note}
        </p>
      </div>
    </motion.section>
  )
}