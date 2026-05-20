'use client'

import { useState } from 'react'
import { useLang } from '@/i18n/useLanguage'

const tabs = ['overview', 'devices', 'activity', 'settings'] as const
type Tab = typeof tabs[number]

export default function ProfilePage() {
  const [tab, setTab] = useState<Tab>('overview')
  const { t, lang } = useLang()

  const mockDevices = [
    { id: 'EVE-001', name: 'Eve Standard', status: 'online' as const, battery: 87, lastSync: '2 min ago' },
    { id: 'EVE-002', name: 'Eve Pro', status: 'online' as const, battery: 92, lastSync: 'Just now' },
    { id: 'EVE-003', name: 'Eve Mini', status: 'offline' as const, battery: 0, lastSync: '3 days ago' },
  ]

  const mockActivities = lang === 'zh' ? [
    { type: 'connection', user: 'Luna_star', action: 'connected', time: '2 hours ago' },
    { type: 'personality', user: 'Eve', action: 'updated personality to 知性', time: '5 hours ago' },
    { type: 'subscription', user: 'System', action: 'renewal completed', time: '1 day ago' },
    { type: 'memory', user: 'Eve', action: 'memory consolidated: 47 new memories', time: '2 days ago' },
  ] : [
    { type: 'connection', user: 'Luna_star', action: 'connected', time: '2 hours ago' },
    { type: 'personality', user: 'Eve', action: 'updated personality to Intellectual', time: '5 hours ago' },
    { type: 'subscription', user: 'System', action: 'renewal completed', time: '1 day ago' },
    { type: 'memory', user: 'Eve', action: 'memory consolidated: 47 new memories', time: '2 days ago' },
  ]

  return (
    <main className="pt-24 px-4 max-w-5xl mx-auto min-h-screen pb-24">
      <h1 className="text-4xl font-bold mb-8 bg-gradient-to-r from-[#00cec9] to-[#6c5ce7] bg-clip-text text-transparent">
        {t('profile.title')}
      </h1>

      <div className="p-6 mb-8 rounded-2xl bg-white/5 border border-white/10 flex items-center gap-6">
        <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#e94e9f] to-[#6c5ce7] flex items-center justify-center text-3xl font-bold">U</div>
        <div className="flex-1">
          <h2 className="text-2xl font-semibold">User_0x7a3f</h2>
          <p className="text-sm text-white/40">0x7a3f...c9d2</p>
          <p className="text-sm mt-1">
            <span className="text-[#00cec9]">{t('profile.subscription')}:</span> Eve Pro
            {' '}<span className="text-white/30">| {t('profile.expires')}: 2026-12-31</span>
          </p>
        </div>
        <button className="px-4 py-2 rounded-xl bg-white/10 text-sm hover:bg-white/20 transition-colors">{t('profile.edit')}</button>
      </div>

      <div className="flex gap-1 p-1 rounded-xl bg-white/5 mb-8">
        {tabs.map((tName) => (
          <button
            key={tName}
            onClick={() => setTab(tName)}
            className={`flex-1 py-2 rounded-lg text-sm font-medium transition-all ${
              tab === tName ? 'bg-white/10 text-white' : 'text-white/40'
            }`}
          >
            {t(`profile.${tName}` as any)}
          </button>
        ))}
      </div>

      {tab === 'overview' && (
        <div className="grid sm:grid-cols-2 gap-6">
          <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
            <h3 className="font-semibold mb-2">{t('profile.subscription')}</h3>
            <p className="text-3xl font-bold text-[#00cec9]">Eve Pro</p>
            <p className="text-sm text-white/40 mt-1">{t('profile.expires')}: 2026-12-31</p>
          </div>
          <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
            <h3 className="font-semibold mb-2">{t('profile.usage')}</h3>
            <p className="text-3xl font-bold text-[#6c5ce7]">12.5 {t('profile.hours')}</p>
            <p className="text-sm text-white/40 mt-1">/ 30 {t('profile.hours')}</p>
          </div>
          <div className="p-6 rounded-2xl bg-white/5 border border-white/10 col-span-full">
            <h3 className="font-semibold mb-4">{t('profile.devices')}</h3>
            {mockDevices.map((d) => (
              <div key={d.id} className="flex items-center justify-between py-2 border-b border-white/5 last:border-0">
                <div className="flex items-center gap-3">
                  <div className={`w-2 h-2 rounded-full ${d.status === 'online' ? 'bg-[#00cec9]' : 'bg-white/20'}`} />
                  <div>
                    <p className="font-medium text-sm">{d.name}</p>
                    <p className="text-xs text-white/40">{d.id}</p>
                  </div>
                </div>
                <span className="text-xs text-white/40">{t('profile.control')}</span>
              </div>
            ))}
            <button className="mt-4 text-sm text-[#6c5ce7] hover:underline">{t('profile.bindDevice')}</button>
          </div>
        </div>
      )}

      {tab === 'devices' && (
        <div className="space-y-3">
          {mockDevices.map((d) => (
            <div key={d.id} className="p-5 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className={`w-3 h-3 rounded-full ${d.status === 'online' ? 'bg-[#00cec9]' : 'bg-white/20'}`} />
                <div>
                  <p className="font-semibold">{d.name}</p>
                  <p className="text-sm text-white/40">{d.id} · {t('profile.battery')}: {d.battery}% · {d.lastSync}</p>
                </div>
              </div>
              <button className="px-3 py-1.5 rounded-lg bg-red-500/10 text-red-400 text-sm hover:bg-red-500/20 transition-colors">{t('profile.unbind')}</button>
            </div>
          ))}
          <button className="w-full py-3 rounded-2xl border border-dashed border-white/10 text-white/40 hover:border-[#6c5ce7]/50 hover:text-[#6c5ce7] transition-all">
            {t('profile.bindDevice')}
          </button>
        </div>
      )}

      {tab === 'activity' && (
        <div className="space-y-2">
          {mockActivities.map((a, i) => (
            <div key={i} className="p-4 rounded-xl bg-white/5 border border-white/10 flex items-center gap-4">
              <div className="w-2 h-2 rounded-full bg-[#6c5ce7]" />
              <div className="flex-1">
                <p className="text-sm"><span className="font-medium">{a.user}</span> {a.action}</p>
                <p className="text-xs text-white/30 mt-0.5">{a.time}</p>
              </div>
            </div>
          ))}
        </div>
      )}

      {tab === 'settings' && (
        <div className="space-y-3">
          {[
            { label: t('profile.privacyMode'), desc: t('profile.privacyDesc') },
            { label: t('profile.notification'), desc: t('profile.notificationDesc') },
            { label: t('profile.autoUpdate'), desc: t('profile.autoUpdateDesc') },
          ].map((s) => (
            <div key={s.label} className="p-4 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between">
              <div>
                <p className="font-medium text-sm">{s.label}</p>
                <p className="text-xs text-white/40">{s.desc}</p>
              </div>
              <div className="w-10 h-5 rounded-full bg-[#6c5ce7]/50 relative cursor-pointer">
                <div className="w-4 h-4 rounded-full bg-white absolute top-0.5 right-0.5" />
              </div>
            </div>
          ))}
          <button className="w-full py-3 rounded-2xl border border-red-500/20 text-red-400 text-sm hover:bg-red-500/5 transition-colors mt-6">
            {t('profile.deleteAccount')}
          </button>
        </div>
      )}
    </main>
  )
}
