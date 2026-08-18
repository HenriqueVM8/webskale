"use client"

import { Reveal } from "@/components/reveal"
import { useLanguage } from "@/components/language-provider"
import { SectionHeader } from "@/components/section-header"

export function Testimonials() {
  const { t } = useLanguage()

  return (
    <section className="border-b border-border">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <SectionHeader label={t.testimonials.label} title={t.testimonials.title} />

        <div className="mt-14 grid grid-cols-1 gap-px border border-border bg-border lg:grid-cols-3">
          {t.testimonials.items.map((item, i) => (
            <Reveal key={item.name} delay={i}>
              <figure className="flex h-full flex-col justify-between bg-background p-8">
                <blockquote className="text-pretty text-lg leading-relaxed tracking-tight">
                  <span className="mr-1 font-mono text-muted-foreground">&ldquo;</span>
                  {item.quote}
                </blockquote>
                <figcaption className="mt-8 border-t border-border pt-5">
                  <div className="text-sm font-medium">{item.name}</div>
                  <div className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
                    {item.role}
                  </div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
