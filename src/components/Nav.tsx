'use client'

import Link from 'next/link'
import { useState } from 'react'
import { useLang } from '@/i18n/useLanguage'

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
  const { t, lang, toggle } = useLang()

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0f0f1a]/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <img src="/logo.png" alt="Openfans logo" className="h-10 w-auto" />
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {linkKeys.map((l) => (
            <Link key={l.href} href={l.href} className="text-sm text-white/60 hover:text-white transition-colors">
              {t(l.labelKey)}
            </Link>
          ))}
          <button onClick={toggle} className="text-xs px-2 py-1 rounded border border-white/20 text-white/50 hover:text-white/80 transition-colors">
            {lang === 'zh' ? 'EN' : '中文'}
          </button>
          <Link href="/login" className="px-4 py-1.5 rounded-full bg-gradient-to-r from-[#e94e9f] to-[#6c5ce7] text-white text-sm font-medium">
            {t('nav.login')}
          </Link>
        </div>

        <button onClick={() => setOpen(!open)} className="md:hidden text-white">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d={open ? "M18 6L6 18M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>
      </div>

      <div className={`md:hidden transition-all duration-300 overflow-hidden ${open ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="bg-[#1a1a2e]/95 backdrop-blur-md border-t border-white/10 px-4 py-4 flex flex-col gap-4">
          {linkKeys.map((l) => (
            <Link key={l.href} href={l.href} onClick={() => setOpen(false)} className="text-white/70 py-1">
              {t(l.labelKey)}
            </Link>
          ))}
          <button onClick={toggle} className="text-xs px-2 py-1 rounded border border-white/20 text-white/50 self-start">
            {lang === 'zh' ? 'EN' : '中文'}
          </button>
          <Link href="/login" onClick={() => setOpen(false)} className="block px-4 py-2 rounded-full bg-gradient-to-r from-[#e94e9f] to-[#6c5ce7] text-white text-sm text-center">
            {t('nav.login')}
          </Link>
        </div>
      </div>
    </nav>
  )
}
