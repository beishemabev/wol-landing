"use client"

import * as React from "react"
import { animate } from "framer-motion"

import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { roi } from "@/lib/content"

type RoiValues = Record<string, number>

function formatNumber(value: number) {
  return Math.round(value).toLocaleString("ru-RU")
}

export function RoiCalculator() {
  const [values, setValues] = React.useState<RoiValues>(() =>
    Object.fromEntries(roi.fields.map((f) => [f.key, f.defaultValue ?? 0]))
  )

  const [displayTotal, setDisplayTotal] = React.useState(0)

  const A = values["A"] ?? 0
  const B = values["B"] ?? 0
  const C = values["C"] ?? 0
  const D = values["D"] ?? 0
  const E = values["E"] ?? 0
  const F = values["F"] ?? 0
  const P = values["P"] ?? 0

  const timeSaving = A * (B - C) * 22 * (D / 60)
  const errorSaving = E * F * (P / 100)
  const total = Math.max(0, timeSaving + errorSaving)

  React.useEffect(() => {
    const controls = animate(displayTotal, total, {
      duration: 0.55,
      onUpdate: (v) => setDisplayTotal(v),
    })
    return () => controls.stop()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [total])

  function handleChange(key: string, raw: string) {
    const numeric = Number(raw.replace(/\s/g, "").replace(",", "."))
    setValues((prev) => ({
      ...prev,
      [key]: Number.isFinite(numeric) ? numeric : 0,
    }))
  }

  return (
    <section id={roi.id} className="pb-16 sm:pb-20">
      <div className="mx-auto max-w-5xl px-4">
        <div className="mb-8 max-w-3xl space-y-3">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            {roi.title}
          </h2>
          <p className="text-sm text-muted-foreground sm:text-base">
            {roi.subtitle}
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[minmax(0,2fr)_minmax(0,1.2fr)]">
          {/* Ввод */}
          <Card className="rounded-2xl">
            <CardHeader className="pb-0" />
            <CardContent className="grid gap-4 sm:grid-cols-2">
              {roi.fields.map((field) => (
                <div key={field.key} className="space-y-1.5">
                  <label className="block text-xs font-medium text-muted-foreground">
                    {field.label}
                  </label>
                  <Input
                    inputMode="decimal"
                    value={String(values[field.key] ?? 0)}
                    onChange={(e) => handleChange(field.key, e.target.value)}
                  />
                  {field.hint ? (
                    <p className="text-[11px] leading-snug text-muted-foreground">
                      {field.hint}
                    </p>
                  ) : null}
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Результат */}
          <div className="space-y-4">
            <Card className="rounded-2xl border-primary/30 bg-primary text-primary-foreground">
              <CardContent className="space-y-3 py-6">
                <div className="text-xs font-medium text-primary-foreground/80">
                  Экономия примерно
                </div>
                <div className="text-3xl font-semibold tabular-nums">
                  {formatNumber(displayTotal)} сом/мес
                </div>

                <div className="grid gap-2 pt-1 text-xs text-primary-foreground/80">
                  <div className="flex items-center justify-between gap-3">
                    <span>по времени менеджеров</span>
                    <span className="font-semibold text-primary-foreground">
                      {formatNumber(timeSaving)}
                    </span>
                  </div>
                  <div className="flex items-center justify-between gap-3">
                    <span>на ошибках и возвратах</span>
                    <span className="font-semibold text-primary-foreground">
                      {formatNumber(errorSaving)}
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="rounded-2xl">
              <CardContent className="space-y-2 py-4 text-xs text-muted-foreground">
                <div className="font-medium text-foreground">Формулы</div>
                <div className="space-y-1.5 font-mono text-[11px] leading-snug">
                  {roi.formulasHelp.map((line) => (
                    <div key={line}>{line}</div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}