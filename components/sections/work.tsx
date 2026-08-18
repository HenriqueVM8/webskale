"use client"

import Image from "next/image"
import { ArrowUpRight } from "lucide-react"
import { Reveal } from "@/components/reveal"
import { useLanguage } from "@/components/language-provider"
import { SectionHeader } from "@/components/section-header"

const images = [
  "/work-nova.png",
  "/work-atlas.png",
  "/work-verde.png",
  "/work-orbit.png",
]

export function Work() {
  const { t } = useLanguage()

  return (
    <section id="work" className="border-b border-border">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <SectionHeader
          label={t.work.label}
          title={t.work.title}
          subtitle={t.work.subtitle}
        />

        <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-2">
          {t.work.items.map((item, i) => (
            <Reveal key={item.title} delay={i % 2}>
              <a href="#contact" className="group block">
                <div className="relative aspect-[4/3] overflow-hidden border border-border bg-muted">
                  <Image
                    src={images[i] || "/placeholder.svg"}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center border border-background/40 bg-background/20 opacity-0 backdrop-blur-sm transition-opacity group-hover:opacity-100">
                    <ArrowUpRight className="h-4 w-4 text-background mix-blend-difference" />
                  </div>
                </div>
                <div className="mt-4 flex items-baseline justify-between border-t border-border pt-4">
                  <div>
                    <h3 className="text-lg font-medium tracking-tight">
                      {item.title}
                    </h3>
                    <p className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
                      {item.category}
                    </p>
                  </div>
                  <span className="font-mono text-xs text-muted-foreground">
                    {item.year}
                  </span>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
