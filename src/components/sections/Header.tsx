"use client"

import * as React from "react"
import { motion } from "framer-motion"

import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { site } from "@/lib/content"

function scrollToSection(id: string) {
  if (typeof document === "undefined") return
  const el = document.getElementById(id)
  if (!el) return

  const headerOffset = 72
  const rect = el.getBoundingClientRect()
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop

  window.scrollTo({
    top: rect.top + scrollTop - headerOffset,
    behavior: "smooth",
  })
}

// Минимализм: показываем не весь nav, а ключевые пункты
const MAX_DESKTOP_ITEMS = 6

export function Header() {
  const [open, setOpen] = React.useState(false)
  const desktopItems = site.nav.slice(0, MAX_DESKTOP_ITEMS)

  return (
    <motion.header
      initial={{ opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
      className="sticky top-0 z-50 border-b bg-background/80 backdrop-blur"
    >
      <div className="mx-auto flex max-w-5xl items-center justify-between gap-3 px-4 py-3">
        <button
          type="button"
          onClick={() => scrollToSection("hero")}
          className="flex items-center gap-3"
          aria-label="На верх"
        >
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-xs font-semibold tracking-tight text-primary-foreground">
            WOL
          </div>
          <span className="hidden text-sm font-medium sm:inline">
            WhatsApp Order Link
          </span>
        </button>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 md:flex">
          {desktopItems.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => scrollToSection(item.id)}
              className="rounded-full px-3 py-1.5 text-xs font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
            >
              {item.label}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          {/* Desktop CTA */}
          <Button
            asChild
            size="sm"
            className="hidden rounded-full px-4 text-xs font-medium md:inline-flex"
          >
            <a href={site.whatsappLink} target="_blank" rel="noreferrer">
              {site.primaryCta}
            </a>
          </Button>

          {/* Mobile menu */}
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button
                size="icon"
                variant="outline"
                className="inline-flex rounded-full md:hidden"
                aria-label="Открыть меню"
              >
                ☰
              </Button>
            </SheetTrigger>

            <SheetContent side="right" className="w-[320px] sm:w-[360px]">
              <SheetHeader>
                <SheetTitle className="text-sm">WOL</SheetTitle>
              </SheetHeader>

              <div className="mt-6 space-y-2">
                {site.nav.map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => {
                      setOpen(false)
                      scrollToSection(item.id)
                    }}
                    className="w-full rounded-xl px-3 py-2 text-left text-sm text-foreground transition-colors hover:bg-accent"
                  >
                    {item.label}
                  </button>
                ))}
              </div>

              <div className="mt-6 space-y-3">
                <Button asChild className="w-full rounded-full">
                  <a href={site.whatsappLink} target="_blank" rel="noreferrer">
                    {site.primaryCta}
                  </a>
                </Button>

                <Button
                  variant="outline"
                  className="w-full rounded-full"
                  onClick={() => {
                    setOpen(false)
                    scrollToSection(site.whatsappSectionId ?? "whatsapp")
                  }}
                >
                  {site.secondaryCta ?? "Показать демо заказа"}
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.header>
  )
}