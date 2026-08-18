"use client"

import { createContext, useContext, useEffect, useState } from "react"
import { dictionary, type Dictionary, type Locale } from "@/lib/i18n"

type LanguageContextValue = {
  locale: Locale
  setLocale: (locale: Locale) => void
  t: Dictionary
}

const LanguageContext = createContext<LanguageContextValue | null>(null)

const STORAGE_KEY = "webskale-locale"

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  // Default locale is Portuguese (Portugal), per requirement.
  const [locale, setLocaleState] = useState<Locale>("pt")

  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY) as Locale | null
    if (stored === "pt" || stored === "en") {
      setLocaleState(stored)
    }
  }, [])

  const setLocale = (next: Locale) => {
    setLocaleState(next)
    window.localStorage.setItem(STORAGE_KEY, next)
    document.documentElement.lang = next === "pt" ? "pt-PT" : "en"
  }

  useEffect(() => {
    document.documentElement.lang = locale === "pt" ? "pt-PT" : "en"
  }, [locale])

  return (
    <LanguageContext.Provider value={{ locale, setLocale, t: dictionary[locale] }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider")
  return ctx
}
