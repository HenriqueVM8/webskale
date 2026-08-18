"use client"

import { Reveal } from "@/components/reveal"

export function SectionHeader({
  label,
  title,
  subtitle,
  align = "left",
}: {
  label: string
  title: string
  subtitle?: string
  align?: "left" | "center"
}) {
  return (
    <div className={align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      <Reveal>
        <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
          {label}
        </span>
      </Reveal>
      <Reveal delay={1}>
        <h2 className="mt-4 text-balance text-3xl font-medium tracking-tight sm:text-4xl lg:text-5xl">
          {title}
        </h2>
      </Reveal>
      {subtitle && (
        <Reveal delay={2}>
          <p className="mt-4 text-pretty text-base leading-relaxed text-muted-foreground">
            {subtitle}
          </p>
        </Reveal>
      )}
    </div>
  )
}
