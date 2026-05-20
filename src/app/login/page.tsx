'use client'

import { useState } from 'react'

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

  const connectWallet = async () => {
    if (typeof window !== 'undefined' && (window as any).ethereum) {
      try {
        const accounts = await (window as any).ethereum.request({ method: 'eth_requestAccounts' })
        setWallet(accounts[0])
      } catch {
        alert('钱包连接被拒绝')
      }
    } else {
      alert('请安装 MetaMask 或 Rabby 钱包')
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert(mode === 'login' ? '登录成功（演示）' : '注册成功（演示）')
  }

  return (
    <main className="pt-24 px-4 min-h-screen flex items-center justify-center">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <img src="/logo.jpg" alt="Openfans" className="w-20 h-20 rounded-full mx-auto mb-4" />
          <h1 className="text-3xl font-bold bg-gradient-to-r from-[#e94e9f] to-[#6c5ce7] bg-clip-text text-transparent">
            {mode === 'login' ? '欢迎回来' : '加入 Openfans'}
          </h1>
          <p className="text-white/50 mt-2">
            {mode === 'login' ? '登录你的账号' : '创建你的专属账号'}
          </p>
        </div>

        {/* 模式切换 */}
        <div className="flex p-1 rounded-xl bg-white/5 mb-8">
          {(['login', 'register'] as const).map((m) => (
            <button
              key={m}
              onClick={() => setMode(m)}
              className={`flex-1 py-2 rounded-lg text-sm font-medium transition-all ${
                mode === m ? 'bg-[#e94e9f]/30 text-white' : 'text-white/40'
              }`}
            >
              {m === 'login' ? '登录' : '注册'}
            </button>
          ))}
        </div>

        {/* Web3 钱包 */}
        <button
          onClick={connectWallet}
          className="w-full p-4 mb-6 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition-all flex items-center justify-center gap-3 group"
        >
          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
            <rect x="2" y="4" width="20" height="16" rx="2" stroke="currentColor" strokeWidth="1.5" className="text-[#e94e9f] group-hover:text-[#6c5ce7] transition-colors"/>
            <path d="M16 12a2 2 0 100-4 2 2 0 000 4z" fill="currentColor" className="text-[#6c5ce7]"/>
          </svg>
          <span className="text-sm font-medium">
            {wallet ? `${wallet.slice(0, 6)}...${wallet.slice(-4)}` : '连接 Web3 钱包'}
          </span>
        </button>

        {/* 分隔 */}
        <div className="flex items-center gap-3 mb-6">
          <div className="flex-1 h-px bg-white/10" />
          <span className="text-xs text-white/30">或使用邮箱</span>
          <div className="flex-1 h-px bg-white/10" />
        </div>

        {/* 表单 */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="邮箱地址"
            required
            className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 focus:outline-none focus:border-[#e94e9f]/50"
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="密码"
            required
            minLength={6}
            className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 focus:outline-none focus:border-[#e94e9f]/50"
          />

          {mode === 'register' && (
            <input
              type="text"
              placeholder="昵称"
              className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 focus:outline-none focus:border-[#e94e9f]/50"
            />
          )}

          <button
            type="submit"
            className="w-full py-3 rounded-xl bg-gradient-to-r from-[#e94e9f] to-[#6c5ce7] text-white font-semibold hover:opacity-90 transition-opacity"
          >
            {mode === 'login' ? '登录' : '创建账号'}
          </button>
        </form>

        <p className="text-center text-xs text-white/30 mt-6">
          继续即表示同意{' '}
          <a href="#" className="text-[#6c5ce7] hover:underline">服务条款</a>
          {' '}和{' '}
          <a href="#" className="text-[#6c5ce7] hover:underline">隐私政策</a>
        </p>
      </div>
    </main>
  )
}
