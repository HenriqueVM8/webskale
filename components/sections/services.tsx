"use client"

import { Reveal } from "@/components/reveal"
import { useLanguage } from "@/components/language-provider"
import { SectionHeader } from "@/components/section-header"

export function Services() {
  const { t } = useLanguage()

  return (
    <section id="services" className="border-b border-border">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <SectionHeader
          label={t.services.label}
          title={t.services.title}
          subtitle={t.services.subtitle}
        />

        <div className="mt-14 grid grid-cols-1 gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {t.services.items.map((item, i) => (
            <Reveal key={item.id} delay={i}>
              <div className="group relative h-full bg-background p-8 transition-colors hover:bg-muted">
                <div className="flex items-start justify-between">
                  <span className="font-mono text-xs text-muted-foreground">
                    {item.id}
                  </span>
                  <span className="h-2 w-2 border border-muted-foreground transition-colors group-hover:border-foreground group-hover:bg-foreground" />
                </div>
                <h3 className="mt-8 text-xl font-medium tracking-tight">
                  {item.title}
                </h3>
                <p className="mt-3 text-pretty text-sm leading-relaxed text-muted-foreground">
                  {item.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
