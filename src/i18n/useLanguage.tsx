'use client'

import { createContext, useContext, useState, useCallback, type ReactNode } from 'react'
import en from './en.json'
import zh from './zh.json'

type Lang = 'zh' | 'en'
const messages: Record<Lang, Record<string, string>> = { zh, en }

type Ctx = { lang: Lang; t: (key: string) => string; toggle: () => void }
const Ctx = createContext<Ctx>({ lang: 'zh', t: (k) => k, toggle: () => {} })

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>('zh')
  const toggle = useCallback(() => setLang((l) => (l === 'zh' ? 'en' : 'zh')), [])
  const t = useCallback((key: string) => messages[lang][key] ?? key, [lang])
  return <Ctx.Provider value={{ lang, t, toggle }}>{children}</Ctx.Provider>
}

export const useLang = () => useContext(Ctx)
