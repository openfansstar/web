'use client'

import { useState } from 'react'
import { useLang } from '@/i18n/useLanguage'

declare global {
  interface Window {
    ethereum?: { request: (args: { method: string }) => Promise<string[]> }
  }
}

export default function LoginPage() {
  const [mode, setMode] = useState<'login' | 'register'>('login')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [wallet, setWallet] = useState<string | null>(null)
  const { t } = useLang()

  const connectWallet = async () => {
    if (typeof window !== 'undefined' && (window as any).ethereum) {
      try {
        const accounts = await (window as any).ethereum.request({ method: 'eth_requestAccounts' })
        setWallet(accounts[0])
      } catch {
        alert(t('login.rejected'))
      }
    } else {
      alert(t('login.installWallet'))
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert(mode === 'login' ? t('login.success') : t('login.registerSuccess'))
  }

  return (
    <main className="pt-24 px-4 min-h-screen flex items-center justify-center">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <img src="/logo.png" alt="Openfans logo" className="w-20 h-20 rounded-full mx-auto mb-4" />
          <h1 className="text-3xl font-bold bg-gradient-to-r from-[#e94e9f] to-[#6c5ce7] bg-clip-text text-transparent">
            {mode === 'login' ? t('login.title') : t('login.titleRegister')}
          </h1>
          <p className="text-secondary mt-2">
            {mode === 'login' ? t('login.subtitle') : t('login.subtitleRegister')}
          </p>
        </div>

        <div className="flex p-1 rounded-xl bg-card mb-8">
          {(['login', 'register'] as const).map((m) => (
            <button
              key={m}
              onClick={() => setMode(m)}
              className={`flex-1 py-2 rounded-lg text-sm font-medium transition-all ${
                mode === m ? 'bg-[#e94e9f]/30 text-white' : 'text-muted'
              }`}
            >
              {m === 'login' ? t('login.login') : t('login.register')}
            </button>
          ))}
        </div>

        <button
          onClick={connectWallet}
          className="w-full p-4 mb-6 rounded-xl border-theme bg-card transition-all flex items-center justify-center gap-3 group" style={{ borderColor: 'var(--border-color)' }}
          onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--bg-card-hover)'}
          onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'var(--bg-card)'}
        >
          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
            <rect x="2" y="4" width="20" height="16" rx="2" stroke="currentColor" strokeWidth="1.5" className="text-[#e94e9f] group-hover:text-[#6c5ce7] transition-colors"/>
            <path d="M16 12a2 2 0 100-4 2 2 0 000 4z" fill="currentColor" className="text-[#6c5ce7]"/>
          </svg>
          <span className="text-sm font-medium">
            {wallet ? `${wallet.slice(0, 6)}...${wallet.slice(-4)}` : t('login.connectWallet')}
          </span>
        </button>

        <div className="flex items-center gap-3 mb-6">
          <div className="flex-1 h-px" style={{ backgroundColor: 'var(--border-color)' }} />
          <span className="text-xs text-muted">{t('login.orEmail')}</span>
          <div className="flex-1 h-px" style={{ backgroundColor: 'var(--border-color)' }} />
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder={t('login.email')}
            required
            className="w-full px-4 py-3 rounded-xl bg-card border-theme focus:outline-none" style={{ color: 'var(--text-primary)' }}
            onFocus={(e) => e.currentTarget.style.borderColor = 'rgba(233,78,159,0.5)'}
            onBlur={(e) => e.currentTarget.style.borderColor = 'var(--border-color)'}
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder={t('login.password')}
            required
            minLength={6}
            className="w-full px-4 py-3 rounded-xl bg-card border-theme focus:outline-none" style={{ color: 'var(--text-primary)' }}
            onFocus={(e) => e.currentTarget.style.borderColor = 'rgba(233,78,159,0.5)'}
            onBlur={(e) => e.currentTarget.style.borderColor = 'var(--border-color)'}
          />

          {mode === 'register' && (
            <input
              type="text"
              placeholder={t('login.nickname')}
              className="w-full px-4 py-3 rounded-xl bg-card border-theme focus:outline-none" style={{ color: 'var(--text-primary)' }}
              onFocus={(e) => e.currentTarget.style.borderColor = 'rgba(233,78,159,0.5)'}
              onBlur={(e) => e.currentTarget.style.borderColor = 'var(--border-color)'}
            />
          )}

          <button
            type="submit"
            className="w-full py-3 rounded-xl bg-gradient-to-r from-[#e94e9f] to-[#6c5ce7] text-white font-semibold hover:opacity-90 transition-opacity"
          >
            {mode === 'login' ? t('login.login') : t('login.createAccount')}
          </button>
        </form>

        <p className="text-center text-xs text-muted mt-6">
          {t('login.terms')}{' '}
          <a href="#" className="text-[#6c5ce7] hover:underline">{t('login.termsLink')}</a>
          {' '}{t('login.and')}{' '}
          <a href="#" className="text-[#6c5ce7] hover:underline">{t('login.privacyLink')}</a>
        </p>
      </div>
    </main>
  )
}
