"use client"

import { finalCta, pricing, site } from "@/lib/content"

export function Footer() {
  return (
    <footer className="border-t bg-background/80">
      <div className="mx-auto max-w-5xl px-4 py-6">
        <div className="flex flex-col gap-3 text-xs text-muted-foreground sm:flex-row sm:items-start sm:justify-between sm:text-sm">
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-foreground">
              <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-primary text-[11px] font-semibold text-primary-foreground">
                WOL
              </div>
              <span className="text-sm font-medium">WhatsApp Order Link</span>
            </div>
            <div className="max-w-xl text-[11px] leading-snug text-muted-foreground sm:text-xs">
              {finalCta.footnote}
            </div>
          </div>

          <div className="space-y-2 sm:text-right">
            <div className="text-[11px] leading-snug text-muted-foreground sm:text-xs">
              {pricing.subtitle}
            </div>

            <a
              href={site.whatsappLink}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-start gap-2 rounded-full border px-3 py-1 text-[11px] text-foreground transition-colors hover:bg-accent sm:justify-end sm:text-xs"
            >
              Написать в WhatsApp
              <span className="text-muted-foreground">996 706 807 836</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}