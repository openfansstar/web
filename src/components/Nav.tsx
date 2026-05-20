'use client'

import Link from 'next/link'
import { useState } from 'react'
import { useLang } from '@/i18n/useLanguage'
import { useTheme } from './ThemeProvider'

const linkKeys: { href: string; labelKey: string }[] = [
  { href: '/', labelKey: 'nav.home' },
  { href: '/discover', labelKey: 'nav.discover' },
  { href: '/console', labelKey: 'nav.eve' },
  { href: '/shop', labelKey: 'nav.shop' },
  { href: '/readme', labelKey: 'nav.about' },
  { href: '/profile', labelKey: 'nav.profile' },
]

export default function Nav() {
  const [open, setOpen] = useState(false)
  const { t, lang, toggle: toggleLang } = useLang()
  const { theme, toggle: toggleTheme } = useTheme()

  return (
    <nav className="fixed top-0 left-0 right-0 z-50" style={{ backgroundColor: 'var(--nav-bg)', borderBottom: '1px solid var(--border-color)', backdropFilter: 'blur(12px)' }}>
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <img src="/logo.png" alt="Openfans logo" className="h-10 w-auto" />
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {linkKeys.map((l) => (
            <Link key={l.href} href={l.href} className="text-sm transition-colors" style={{ color: 'var(--text-nav-link)' }}
              onMouseEnter={(e) => e.currentTarget.style.color = 'var(--text-primary)'}
              onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-nav-link)'}>
              {t(l.labelKey)}
            </Link>
          ))}
          <button onClick={toggleTheme} className="text-xs px-2 py-1 rounded border transition-colors" style={{ borderColor: 'var(--border-color)', color: 'var(--text-muted)' }}>
            {theme === 'dark' ? '☀' : '☾'}
          </button>
          <button onClick={toggleLang} className="text-xs px-2 py-1 rounded border transition-colors" style={{ borderColor: 'var(--border-color)', color: 'var(--text-muted)' }}>
            {lang === 'zh' ? 'EN' : '中文'}
          </button>
          <Link href="/login" className="px-4 py-1.5 rounded-full bg-gradient-to-r from-[#e94e9f] to-[#6c5ce7] text-white text-sm font-medium">
            {t('nav.login')}
          </Link>
        </div>

        <button onClick={() => setOpen(!open)} className="md:hidden" style={{ color: 'var(--text-primary)' }}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d={open ? "M18 6L6 18M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>
      </div>

      <div className={`md:hidden transition-all duration-300 overflow-hidden ${open ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="px-4 py-4 flex flex-col gap-4" style={{ backgroundColor: 'var(--bg-surface)', borderTop: '1px solid var(--border-color)' }}>
          {linkKeys.map((l) => (
            <Link key={l.href} href={l.href} onClick={() => setOpen(false)} className="py-1 transition-colors" style={{ color: 'var(--text-secondary)' }}>
              {t(l.labelKey)}
            </Link>
          ))}
          <div className="flex gap-2">
            <button onClick={toggleTheme} className="text-xs px-2 py-1 rounded border transition-colors" style={{ borderColor: 'var(--border-color)', color: 'var(--text-muted)' }}>
              {theme === 'dark' ? '☀' : '☾'}
            </button>
            <button onClick={toggleLang} className="text-xs px-2 py-1 rounded border transition-colors" style={{ borderColor: 'var(--border-color)', color: 'var(--text-muted)' }}>
              {lang === 'zh' ? 'EN' : '中文'}
            </button>
          </div>
          <Link href="/login" onClick={() => setOpen(false)} className="block px-4 py-2 rounded-full bg-gradient-to-r from-[#e94e9f] to-[#6c5ce7] text-white text-sm text-center">
            {t('nav.login')}
          </Link>
        </div>
      </div>
    </nav>
  )
}
