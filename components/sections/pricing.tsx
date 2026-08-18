"use client"

import { Check } from "lucide-react"
import { Reveal } from "@/components/reveal"
import { useLanguage } from "@/components/language-provider"
import { SectionHeader } from "@/components/section-header"

export function Pricing() {
  const { t } = useLanguage()

  return (
    <section id="pricing" className="border-b border-border bg-muted">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <SectionHeader
          label={t.pricing.label}
          title={t.pricing.title}
          subtitle={t.pricing.subtitle}
        />

        <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {t.pricing.plans.map((plan, i) => {
            const featured = i === 1
            return (
              <Reveal key={plan.name} delay={i}>
                <div
                  className={`relative flex h-full flex-col border p-8 transition-colors ${
                    featured
                      ? "border-foreground bg-foreground text-background"
                      : "border-border bg-background"
                  }`}
                >
                  {featured && (
                    <span className="absolute -top-3 left-8 border border-foreground bg-background px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-foreground">
                      {t.pricing.popular}
                    </span>
                  )}
                  <h3 className="font-mono text-sm uppercase tracking-wider">
                    {plan.name}
                  </h3>
                  <div className="mt-5 flex items-baseline gap-2">
                    <span className="text-4xl font-medium tracking-tight">
                      {plan.price}
                    </span>
                    <span
                      className={`font-mono text-xs ${
                        featured ? "text-background/60" : "text-muted-foreground"
                      }`}
                    >
                      {t.pricing.period}
                    </span>
                  </div>
                  <p
                    className={`mt-3 text-sm leading-relaxed ${
                      featured ? "text-background/70" : "text-muted-foreground"
                    }`}
                  >
                    {plan.desc}
                  </p>

                  <ul className="mt-8 flex-1 space-y-3">
                    {plan.features.map((f) => (
                      <li key={f} className="flex items-start gap-3 text-sm">
                        <Check
                          className={`mt-0.5 h-4 w-4 shrink-0 ${
                            featured ? "text-background" : "text-foreground"
                          }`}
                        />
                        <span className={featured ? "" : "text-foreground"}>
                          {f}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <a
                    href="#contact"
                    className={`mt-8 flex items-center justify-center border py-3 font-mono text-xs uppercase tracking-wider transition-opacity hover:opacity-80 ${
                      featured
                        ? "border-background bg-background text-foreground"
                        : "border-foreground bg-foreground text-background"
                    }`}
                  >
                    {t.pricing.cta}
                  </a>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
