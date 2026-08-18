"use client"

import { motion } from "framer-motion"
import { ArrowUpRight, ArrowDown } from "lucide-react"
import { useLanguage } from "@/components/language-provider"

export function Hero() {
  const { t } = useLanguage()

  const line = {
    hidden: { opacity: 0, y: 40 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, delay: 0.15 + i * 0.1, ease: [0.21, 0.47, 0.32, 0.98] as const },
    }),
  }

  return (
    <section id="top" className="relative overflow-hidden">
      <div className="grid-bg absolute inset-0" aria-hidden="true" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background" aria-hidden="true" />

      <div className="relative mx-auto max-w-7xl px-4 pb-16 pt-32 sm:px-6 sm:pt-40 lg:px-8 lg:pb-24 lg:pt-48">
        {/* Top technical bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="mb-10 flex flex-wrap items-center justify-between gap-3 border-b border-border pb-4 font-mono text-[11px] uppercase tracking-wider text-muted-foreground"
        >
          <span className="flex items-center gap-2">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-foreground opacity-75" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-foreground" />
            </span>
            {t.hero.status}
          </span>
          <span>{t.hero.est}</span>
        </motion.div>

        {/* Headline */}
        <h1 className="max-w-5xl text-balance text-5xl font-medium leading-[0.95] tracking-tight sm:text-7xl lg:text-8xl">
          {[t.hero.title1, t.hero.title2, t.hero.title3].map((l, i) => (
            <motion.span
              key={l}
              custom={i}
              variants={line}
              initial="hidden"
              animate="visible"
              className="block overflow-hidden"
            >
              {i === 2 ? (
                <span className="text-muted-foreground">{l}</span>
              ) : (
                l
              )}
            </motion.span>
          ))}
        </h1>

        <div className="mt-10 grid gap-8 lg:grid-cols-[1.2fr_1fr]">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="max-w-xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg"
          >
            {t.hero.subtitle}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.72 }}
            className="flex flex-col items-start gap-3 sm:flex-row lg:flex-col lg:items-end lg:justify-end"
          >
            <a
              href="#contact"
              className="group flex w-full items-center justify-center gap-2 border border-foreground bg-foreground px-6 py-3.5 font-mono text-xs uppercase tracking-wider text-background transition-opacity hover:opacity-80 sm:w-auto"
            >
              {t.hero.ctaPrimary}
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <a
              href="#work"
              className="flex w-full items-center justify-center gap-2 border border-border px-6 py-3.5 font-mono text-xs uppercase tracking-wider text-foreground transition-colors hover:bg-muted sm:w-auto"
            >
              {t.hero.ctaSecondary}
            </a>
          </motion.div>
        </div>

        {/* Metrics */}
        <motion.dl
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.85 }}
          className="mt-16 grid grid-cols-1 gap-px border border-border bg-border sm:grid-cols-3"
        >
          {[
            { v: t.hero.metric1v, l: t.hero.metric1 },
            { v: t.hero.metric2v, l: t.hero.metric2 },
            { v: t.hero.metric3v, l: t.hero.metric3 },
          ].map((m) => (
            <div key={m.l} className="bg-background p-6">
              <dt className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
                {m.l}
              </dt>
              <dd className="mt-2 text-3xl font-medium tracking-tight sm:text-4xl">
                {m.v}
              </dd>
            </div>
          ))}
        </motion.dl>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="mt-12 flex items-center gap-2 font-mono text-[11px] uppercase tracking-wider text-muted-foreground"
        >
          <ArrowDown className="h-3.5 w-3.5 animate-bounce" />
          Scroll
        </motion.div>
      </div>
    </section>
  )
}
