"use client"

import { useLanguage } from "@/components/language-provider"

export function Marquee() {
  const { t } = useLanguage()
  const items = [...t.marquee, ...t.marquee]

  return (
    <div className="border-y border-border bg-muted py-4 overflow-hidden">
      <div className="flex w-max animate-marquee items-center">
        {items.map((item, i) => (
          <span key={i} className="flex items-center">
            <span className="px-8 font-mono text-sm uppercase tracking-wider text-muted-foreground">
              {item}
            </span>
            <span className="text-foreground" aria-hidden="true">
              /
            </span>
          </span>
        ))}
      </div>
    </div>
  )
}
