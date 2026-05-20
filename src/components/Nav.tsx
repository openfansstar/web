'use client'

import Link from 'next/link'
import { useState } from 'react'

const links = [
  { href: '/', label: '首页' },
  { href: '/discover', label: '发现' },
  { href: '/console', label: 'Eve' },
  { href: '/shop', label: '商城' },
  { href: '/readme', label: '介绍' },
  { href: '/profile', label: '我的' },
]

export default function Nav() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0f0f1a]/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <img src="/logo.jpg" alt="Openfans" className="w-8 h-8 rounded-full" />
          <span className="font-bold text-lg bg-gradient-to-r from-[#e94e9f] to-[#6c5ce7] bg-clip-text text-transparent">
            Openfans
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-sm text-white/60 hover:text-white transition-colors"
            >
              {l.label}
            </Link>
          ))}
          <Link href="/login" className="px-4 py-1.5 rounded-full bg-gradient-to-r from-[#e94e9f] to-[#6c5ce7] text-white text-sm font-medium">
            登录
          </Link>
        </div>

        <button onClick={() => setOpen(!open)} className="md:hidden text-white">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d={open ? "M18 6L6 18M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>
      </div>

      <div className={`md:hidden transition-all duration-300 overflow-hidden ${
        open ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
      }`}>
        <div className="bg-[#1a1a2e]/95 backdrop-blur-md border-t border-white/10 px-4 py-4 flex flex-col gap-4">
          {links.map((l) => (
            <Link key={l.href} href={l.href} onClick={() => setOpen(false)} className="text-white/70 py-1">
              {l.label}
            </Link>
          ))}
          <Link href="/login" onClick={() => setOpen(false)} className="block px-4 py-2 rounded-full bg-gradient-to-r from-[#e94e9f] to-[#6c5ce7] text-white text-sm text-center">
            登录
          </Link>
        </div>
      </div>
    </nav>
  )
}
