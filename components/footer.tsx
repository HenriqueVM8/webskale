"use client"

import Image from "next/image"
import { useLanguage } from "@/components/language-provider"

export function Footer() {
  const { t } = useLanguage()
  const year = new Date().getFullYear()

  const nav = [
    { href: "#services", label: t.nav.services },
    { href: "#process", label: t.nav.process },
    { href: "#work", label: t.nav.work },
    { href: "#pricing", label: t.nav.pricing },
    { href: "#contact", label: t.nav.contact },
  ]

  const social = [
    { href: "https://instagram.com/webskale", label: "Instagram" },
    { href: "https://linkedin.com", label: "LinkedIn" },
    { href: "mailto:ola@webskale.pt", label: "Email" },
  ]

  return (
    <footer className="bg-background">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-[2fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-2.5">
              <span className="flex h-8 w-8 items-center justify-center border border-border">
                <Image
                  src="/logo.png"
                  alt="WebSkale"
                  width={20}
                  height={20}
                  className="invert dark:invert-0"
                />
              </span>
              <span className="font-mono text-sm font-medium">WebSkale</span>
            </div>
            <p className="mt-4 max-w-xs text-pretty text-sm leading-relaxed text-muted-foreground">
              {t.footer.tagline}
            </p>
          </div>

          <div>
            <h3 className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
              {t.footer.nav}
            </h3>
            <ul className="mt-4 space-y-2">
              {nav.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-sm text-foreground transition-colors hover:text-muted-foreground"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
              {t.footer.social}
            </h3>
            <ul className="mt-4 space-y-2">
              {social.map((item) => (
                <li key={item.label}>
                  <a
                    target="_blank"
                    href={item.href}
                    className="text-sm text-foreground transition-colors hover:text-muted-foreground"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-2 border-t border-border pt-6 font-mono text-xs uppercase tracking-wider text-muted-foreground sm:flex-row sm:items-center">
          <span>© {year} WebSkale. {t.footer.rights}</span>
          <span>Lisboa - Portugal</span>
        </div>
      </div>
    </footer>
  )
}
