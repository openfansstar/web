'use client'

import { createContext, useContext, useState, useCallback, useEffect, type ReactNode } from 'react'

type Theme = 'dark' | 'light'
type Ctx = { theme: Theme; toggle: () => void }
const Ctx = createContext<Ctx>({ theme: 'dark', toggle: () => {} })

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>('dark')

  useEffect(() => {
    const saved = localStorage.getItem('theme') as Theme | null
    if (saved === 'light' || saved === 'dark') {
      setTheme(saved)
    }
  }, [])

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark')
    document.documentElement.classList.toggle('light', theme === 'light')
    localStorage.setItem('theme', theme)
  }, [theme])

  const toggle = useCallback(() => setTheme((t) => (t === 'dark' ? 'light' : 'dark')), [])

  return <Ctx.Provider value={{ theme, toggle }}>{children}</Ctx.Provider>
}

export const useTheme = () => useContext(Ctx)
