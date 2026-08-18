"use client"

import { Reveal } from "@/components/reveal"
import { useLanguage } from "@/components/language-provider"
import { SectionHeader } from "@/components/section-header"

export function Process() {
  const { t } = useLanguage()

  return (
    <section id="process" className="border-b border-border bg-muted">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <SectionHeader
          label={t.process.label}
          title={t.process.title}
          subtitle={t.process.subtitle}
        />

        <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {t.process.steps.map((step, i) => (
            <Reveal key={step.id} delay={i}>
              <div className="relative border-t border-foreground pt-6">
                <span className="font-mono text-4xl font-medium tracking-tight text-foreground">
                  {step.id}
                </span>
                <h3 className="mt-6 text-lg font-medium tracking-tight">
                  {step.title}
                </h3>
                <p className="mt-2 text-pretty text-sm leading-relaxed text-muted-foreground">
                  {step.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
