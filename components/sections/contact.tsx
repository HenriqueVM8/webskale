"use client"

import { useState } from "react"
import emailjs from "@emailjs/browser"
import { ArrowUpRight, Check } from "lucide-react"
import { Reveal } from "@/components/reveal"
import { useLanguage } from "@/components/language-provider"
import { SectionHeader } from "@/components/section-header"

export function Contact() {
  const { t } = useLanguage()
  const [sent, setSent] = useState(false)
  const [sending, setSending] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const form = e.currentTarget

    setSending(true)

    try {
      await emailjs.sendForm(
        "service_gnh6n2g",
        "template_3fo6btl",
        form,
        {
          publicKey: "1se1svJ3tHVANIXim",
        }
      )
      form.reset()
      setSent(true)
      
      setTimeout(() => {setSent(false)}, 4000)
    } catch (error) {
      console.error("Erro ao enviar o formulário:", error)
    } finally {
      setSending(false)
    }

  }

  const fieldClass =
    "w-full border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-foreground"

  return (
    <section id="contact" className="border-b border-border bg-muted">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <SectionHeader
              label={t.contact.label}
              title={t.contact.title}
              subtitle={t.contact.subtitle}
            />
            <Reveal delay={3}>
              <div className="mt-10 border-t border-border pt-6">
                <p className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
                  {t.contact.or}
                </p>
                <a
                  href="mailto:ola@webskale.pt"
                  className="mt-2 inline-flex items-center gap-2 text-lg font-medium tracking-tight transition-opacity hover:opacity-70"
                >
                  ola@webskale.pt
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
            </Reveal>
          </div>

          <Reveal delay={1}>
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-4 border border-border bg-background p-6 sm:p-8"
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="flex flex-col gap-2">
                  <span className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
                    {t.contact.name}
                  </span>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder={t.contact.namePlaceholder}
                    className={fieldClass}
                  />
                </label>
                <label className="flex flex-col gap-2">
                  <span className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
                    {t.contact.email}
                  </span>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder={t.contact.emailPlaceholder}
                    className={fieldClass}
                  />
                </label>
              </div>
              <label className="flex flex-col gap-2">
                <span className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
                  {t.contact.message}
                </span>
                <textarea
                  name="message"
                  required
                  rows={5}
                  placeholder={t.contact.messagePlaceholder}
                  className={`${fieldClass} resize-none`}
                />
              </label>
              <button
                type="submit"
                disabled={sent || sending}
                className="mt-2 flex items-center justify-center gap-2 border border-foreground bg-foreground px-6 py-3.5 font-mono text-xs uppercase tracking-wider text-background transition-opacity hover:opacity-80 disabled:opacity-60"
              >
                {sent ? (
                  <>
                    <Check className="h-4 w-4" />
                    {t.contact.sent}
                  </>
                ) : (
                  <>
                    {sending ? "A enviar..." : t.contact.send}
                    {!sending && <ArrowUpRight className="h-4 w-4" />}
                  </>
                )}
              </button>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
