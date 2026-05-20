'use client'

import { useState } from 'react'
import { useLang } from '@/i18n/useLanguage'

type Personality = { name: string; desc: string; active: boolean; color: string }
type Memory = { time: string; content: string; type: 'short' | 'long' }
type SpecTab = 'overview' | 'sensory' | 'brain' | 'body' | 'privacy'

export default function ConsolePage() {
  const [activeTab, setActiveTab] = useState<'status' | 'personality' | 'memory' | 'settings' | 'specs'>('status')
  const [specTab, setSpecTab] = useState<SpecTab>('overview')
  const [battery, setBattery] = useState(87)
  const [activePersonality, setActivePersonality] = useState(0)
  const { t } = useLang()

  const personalities: Personality[] = [
    { name: t('console.personality1'), desc: t('console.personality1Desc'), active: false, color: '#e94e9f' },
    { name: t('console.personality2'), desc: t('console.personality2Desc'), active: false, color: '#6c5ce7' },
    { name: t('console.personality3'), desc: t('console.personality3Desc'), active: false, color: '#00cec9' },
    { name: t('console.personality4'), desc: t('console.personality4Desc'), active: false, color: '#00b894' },
  ].map((p, i) => ({ ...p, active: i === activePersonality }))

  const memories: Memory[] = [
    { time: t('console.today'), content: t('console.memory1'), type: 'short' as const },
    { time: t('console.today'), content: t('console.memory2'), type: 'short' as const },
    { time: t('console.daysAgo'), content: t('console.memory3'), type: 'long' as const },
    { time: t('console.weekAgo'), content: t('console.memory4'), type: 'long' as const },
    { time: t('console.twoWeeksAgo'), content: t('console.memory5'), type: 'long' as const },
  ]

  return (
    <main className="pt-24 px-4 max-w-7xl mx-auto min-h-screen pb-24">
      <h1 className="text-4xl font-bold mb-8 bg-gradient-to-r from-[#6c5ce7] to-[#00cec9] bg-clip-text text-transparent">
        {t('console.title')}
      </h1>

      <div className="relative p-6 mb-8 rounded-2xl overflow-hidden border border-white/10">
        <div className="absolute inset-0 bg-gradient-to-br from-[#6c5ce7]/20 via-transparent to-[#00cec9]/10" />
        <div className="relative flex items-center gap-6">
          <div className="w-24 h-24 rounded-full bg-gradient-to-br from-[#e94e9f] to-[#6c5ce7] flex items-center justify-center text-4xl shrink-0 animate-float">
            E
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-3 mb-1">
              <h2 className="text-2xl font-bold">Eve #001</h2>
              <span className="text-xs px-2 py-0.5 rounded-full bg-green-500/20 text-green-300">{t('console.online')}</span>
            </div>
            <p className="text-sm text-white/50 mb-3">{t('console.firmware')} v2.1.0 · {t('console.connected')} 2h 34min</p>
            <div className="flex items-center gap-4 text-sm">
              <div className="flex items-center gap-1.5">
                <div className="w-16 h-1.5 rounded-full bg-white/10 overflow-hidden">
                  <div className="h-full rounded-full bg-gradient-to-r from-green-400 to-yellow-400" style={{ width: `${battery}%` }} />
                </div>
                <span className="text-white/60">{battery}%</span>
              </div>
              <span className="text-white/30">|</span>
              <span className="text-white/60">{t('console.temp')} 36.8°C</span>
              <span className="text-white/30">|</span>
              <span className="text-white/60">{t('console.breath')} 16/min</span>
            </div>
          </div>
        </div>
      </div>

      <div className="flex gap-1 mb-8 p-1 rounded-xl bg-white/5 overflow-x-auto scrollbar-none">
        {(['status', 'personality', 'memory', 'settings', 'specs'] as const).map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`flex-1 py-2 rounded-lg text-sm font-medium transition-all whitespace-nowrap ${
              activeTab === tab ? 'bg-[#6c5ce7]/30 text-white' : 'text-white/40 hover:text-white/70'
            }`}
          >
            {{ status: t('console.status'), personality: t('console.personality'), memory: t('console.memory'), settings: t('console.settings'), specs: t('console.specs') }[tab]}
          </button>
        ))}
      </div>

      {activeTab === 'status' && (
        <div className="grid md:grid-cols-2 gap-4">
          {[
            { label: t('console.cpu'), value: '23%', bar: 23, color: 'from-green-400 to-cyan-400' },
            { label: t('console.memoryLabel'), value: '1.2/4GB', bar: 30, color: 'from-purple-400 to-pink-400' },
            { label: t('console.storage'), value: '6.8/32GB', bar: 21, color: 'from-blue-400 to-indigo-400' },
            { label: t('console.temp'), value: '36.8°C', bar: 45, color: 'from-orange-400 to-red-400' },
          ].map((s) => (
            <div key={s.label} className="p-4 rounded-xl bg-white/5 border border-white/10">
              <div className="flex justify-between mb-2">
                <span className="text-sm text-white/60">{s.label}</span>
                <span className="text-sm font-medium">{s.value}</span>
              </div>
              <div className="h-1.5 rounded-full bg-white/10 overflow-hidden">
                <div className={`h-full rounded-full bg-gradient-to-r ${s.color}`} style={{ width: `${s.bar}%` }} />
              </div>
            </div>
          ))}
        </div>
      )}

      {activeTab === 'personality' && (
        <div className="grid md:grid-cols-2 gap-4">
          {personalities.map((p, i) => (
            <div
              key={p.name}
              onClick={() => setActivePersonality(i)}
              className={`p-5 rounded-xl border cursor-pointer transition-all ${
                p.active
                  ? 'border-transparent bg-gradient-to-br from-[#6c5ce7]/30 to-[#00cec9]/10 shadow-lg shadow-[#6c5ce7]/20'
                  : 'bg-white/5 border-white/10 hover:bg-white/10'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: p.color }} />
                  <h3 className="font-semibold">{p.name}</h3>
                </div>
                {p.active && <span className="text-xs px-2 py-0.5 rounded-full bg-[#6c5ce7]/30 text-[#b8a9ff]">{t('console.active')}</span>}
              </div>
              <p className="text-sm text-white/50">{p.desc}</p>
            </div>
          ))}
        </div>
      )}

      {activeTab === 'memory' && (
        <div>
          <div className="flex gap-4 mb-4">
            <span className="text-sm font-medium text-white/80">{t('console.shortTerm')}</span>
            <span className="text-sm text-white/30">{t('console.longTerm')}</span>
          </div>
          <div className="space-y-2">
            {memories.map((m, i) => (
              <div
                key={i}
                className={`p-4 rounded-xl border ${
                  m.type === 'short'
                    ? 'bg-white/5 border-white/10'
                    : 'bg-purple-500/5 border-purple-500/20'
                }`}
              >
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs px-1.5 py-0.5 rounded bg-white/10 text-white/40">
                    {m.type === 'short' ? t('console.shortTerm') : t('console.longTerm')}
                  </span>
                  <span className="text-xs text-white/30">{m.time}</span>
                </div>
                <p className="text-sm text-white/70">{m.content}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {activeTab === 'settings' && (
        <div className="space-y-3">
          {[
            { label: t('console.wakeUp'), desc: t('console.wakeUpDesc'), on: true },
            { label: t('console.autoLearn'), desc: t('console.autoLearnDesc'), on: true },
            { label: t('console.privacy'), desc: t('console.privacyDesc'), on: false },
            { label: t('console.dnd'), desc: t('console.dndDesc'), on: true },
          ].map((s) => (
            <div key={s.label} className="flex items-center justify-between p-4 rounded-xl bg-white/5 border border-white/10">
              <div>
                <div className="font-medium text-sm">{s.label}</div>
                <div className="text-xs text-white/40">{s.desc}</div>
              </div>
              <div className={`w-10 h-5 rounded-full transition-colors relative ${s.on ? 'bg-[#6c5ce7]' : 'bg-white/20'}`}>
                <div className={`w-3.5 h-3.5 rounded-full bg-white absolute top-0.5 transition-all ${s.on ? 'right-0.5' : 'left-0.5'}`} />
              </div>
            </div>
          ))}
        </div>
      )}

      {activeTab === 'specs' && (
        <div>
          <p className="text-sm text-white/40 mb-6">{t('console.specsTagline')}</p>

          <div className="flex gap-1 mb-6 p-0.5 rounded-lg bg-white/5 overflow-x-auto scrollbar-none">
            {(['overview', 'sensory', 'brain', 'body', 'privacy'] as const).map((tName) => (
              <button key={tName} onClick={() => setSpecTab(tName)}
                className={`px-3 py-1.5 rounded-md text-xs font-medium whitespace-nowrap transition-all ${
                  specTab === tName ? 'bg-[#6c5ce7]/30 text-white' : 'text-white/40 hover:text-white/70'
                }`}
              >
                {{ overview: t('console.specs.overview'), sensory: t('console.specs.sensory'), brain: t('console.specs.brain'), body: t('console.specs.body'), privacy: t('console.specs.privacy') }[tName]}
              </button>
            ))}
          </div>

          {specTab === 'overview' && (
            <div className="grid md:grid-cols-3 gap-4">
              <div className="p-5 rounded-2xl bg-gradient-to-br from-[#e94e9f]/10 to-[#6c5ce7]/10 border border-white/10 text-center">
                <div className="text-3xl mb-2">🤖</div>
                <div className="text-2xl font-bold">Eve</div>
                <div className="text-xs text-white/40 mt-1">{t('console.specs.robot')}</div>
                <div className="mt-4 grid grid-cols-2 gap-2 text-left">
                  {[
                    [t('console.specs.processor'), t('about.specProcessor') + ' 12TOPS'],
                    [t('about.specDOF'), t('about.specDOFVal')],
                    [t('about.specBattery'), t('about.specBatteryVal')],
                    [t('about.specSkin'), t('about.specSkinVal')],
                    [t('console.specs.connectivity'), 'WiFi 6 / BLE 5.3'],
                    [t('about.specWeight'), 'Standard 3.2kg / Pro 5.8kg'],
                    [t('console.specs.height'), 'Standard 42cm / Pro 68cm'],
                    [t('console.specs.sensors'), t('about.specSensorsVal')],
                  ].map(([k, v]) => (
                    <div key={k}>
                      <div className="text-xs text-white/30">{k}</div>
                      <div className="text-sm font-medium">{v}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="md:col-span-2 space-y-4">
                <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
                  <h3 className="font-semibold mb-3 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#e94e9f]" /> {t('specs.coreValues')}
                  </h3>
                  <div className="grid sm:grid-cols-3 gap-3">
                    {[
                      { icon: '💗', title: t('specs.empathy'), desc: t('specs.empathyDesc') },
                      { icon: '🎭', title: t('specs.personality'), desc: t('specs.personalityDesc') },
                      { icon: '✨', title: t('specs.seamless'), desc: t('specs.seamlessDesc') },
                    ].map((v) => (
                      <div key={v.title} className="p-3 rounded-xl bg-white/5 text-center">
                        <div className="text-2xl mb-1">{v.icon}</div>
                        <div className="text-sm font-medium mb-0.5">{v.title}</div>
                        <div className="text-xs text-white/40">{v.desc}</div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="p-5 rounded-2xl bg-gradient-to-br from-[#00cec9]/5 to-[#6c5ce7]/10 border border-white/10">
                  <h3 className="font-semibold mb-3 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#00cec9]" /> {t('specs.fourSystems')}
                  </h3>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {[
                      { title: t('specs.system1'), desc: t('specs.system1Desc'), color: '#e94e9f' },
                      { title: t('specs.system2'), desc: t('specs.system2Desc'), color: '#6c5ce7' },
                      { title: t('specs.system3'), desc: t('specs.system3Desc'), color: '#00cec9' },
                      { title: t('specs.system4'), desc: t('specs.system4Desc'), color: '#00b894' },
                    ].map((s) => (
                      <div key={s.title} className="p-3 rounded-xl bg-white/5">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="w-2 h-2 rounded-full" style={{ backgroundColor: s.color }} />
                          <span className="text-sm font-medium">{s.title}</span>
                        </div>
                        <p className="text-xs text-white/50">{s.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {specTab === 'sensory' && (
            <div className="grid md:grid-cols-3 gap-4">
              {[
                {
                  title: t('specs.touch'),
                  icon: '🤚',
                  color: '#e94e9f',
                  layers: [
                    t('specs.touch1'),
                    t('specs.touch2'),
                    t('specs.touch3'),
                  ],
                  ability: t('specs.touchAbility'),
                },
                {
                  title: t('specs.hearing'),
                  icon: '👂',
                  color: '#6c5ce7',
                  layers: [
                    t('specs.hearing1'),
                    t('specs.hearing2'),
                    t('specs.hearing3'),
                  ],
                  ability: t('specs.hearingAbility'),
                },
                {
                  title: t('specs.vision'),
                  icon: '👁️',
                  color: '#00cec9',
                  layers: [
                    t('specs.vision1'),
                    t('specs.vision2'),
                    t('specs.vision3'),
                  ],
                  ability: t('specs.visionAbility'),
                },
              ].map((s) => (
                <div key={s.title} className="p-5 rounded-2xl bg-white/5 border border-white/10">
                  <div className="text-3xl mb-3">{s.icon}</div>
                  <h3 className="font-semibold mb-2" style={{ color: s.color }}>{s.title}</h3>
                  <ul className="space-y-1 mb-3">
                    {s.layers.map((l) => (
                      <li key={l} className="text-sm text-white/60 flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full mt-1.5 shrink-0" style={{ backgroundColor: s.color }} />
                        {l}
                      </li>
                    ))}
                  </ul>
                  <div className="p-3 rounded-xl bg-white/5">
                    <div className="text-xs text-white/30 mb-0.5">{t('specs.ability')}</div>
                    <p className="text-sm text-white/70">{s.ability}</p>
                  </div>
                </div>
              ))}
            </div>
          )}

          {specTab === 'brain' && (
            <div className="grid md:grid-cols-3 gap-4">
              {[
                {
                  title: t('specs.brain1'),
                  icon: '🧠',
                  color: '#6c5ce7',
                  items: [t('specs.brain1a'), t('specs.brain1b'), t('specs.brain1c'), t('specs.brain1d')],
                },
                {
                  title: t('specs.brain2'),
                  icon: '🔄',
                  color: '#e94e9f',
                  items: [t('specs.brain2a'), t('specs.brain2b'), t('specs.brain2c'), t('specs.brain2d')],
                },
                {
                  title: t('specs.brain3'),
                  icon: '📖',
                  color: '#00cec9',
                  items: [t('specs.brain3a'), t('specs.brain3b'), t('specs.brain3c'), t('specs.brain3d')],
                },
              ].map((b) => (
                <div key={b.title} className="p-5 rounded-2xl bg-white/5 border border-white/10">
                  <div className="text-3xl mb-3">{b.icon}</div>
                  <h3 className="font-semibold mb-3" style={{ color: b.color }}>{b.title}</h3>
                  <ul className="space-y-2">
                    {b.items.map((item) => (
                      <li key={item} className="text-sm text-white/60 flex items-start gap-2">
                        <svg className="w-4 h-4 mt-0.5 shrink-0" style={{ color: b.color }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M5 12l5 5L20 5" />
                        </svg>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          )}

          {specTab === 'body' && (
            <div className="grid md:grid-cols-3 gap-4">
              {[
                {
                  title: t('specs.body1'),
                  icon: '😊',
                  color: '#e94e9f',
                  items: [t('specs.body1a'), t('specs.body1b'), t('specs.body1c'), t('specs.body1d')],
                },
                {
                  title: t('specs.body2'),
                  icon: '🌡️',
                  color: '#00cec9',
                  items: [t('specs.body2a'), t('specs.body2b'), t('specs.body2c'), t('specs.body2d')],
                },
                {
                  title: t('specs.body3'),
                  icon: '🦾',
                  color: '#6c5ce7',
                  items: [t('specs.body3a'), t('specs.body3b'), t('specs.body3c'), t('specs.body3d')],
                },
              ].map((b) => (
                <div key={b.title} className="p-5 rounded-2xl bg-white/5 border border-white/10">
                  <div className="text-3xl mb-3">{b.icon}</div>
                  <h3 className="font-semibold mb-3" style={{ color: b.color }}>{b.title}</h3>
                  <ul className="space-y-2">
                    {b.items.map((item) => (
                      <li key={item} className="text-sm text-white/60 flex items-start gap-2">
                        <svg className="w-4 h-4 mt-0.5 shrink-0" style={{ color: b.color }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <circle cx="12" cy="12" r="10" />
                          <path d="M12 6v6l4 2" />
                        </svg>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          )}

          {specTab === 'privacy' && (
            <div className="max-w-2xl space-y-4">
              <div className="p-5 rounded-2xl bg-green-500/5 border border-green-500/20">
                <h3 className="font-semibold mb-2 flex items-center gap-2">
                  <svg className="w-5 h-5 text-green-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  </svg>
                  {t('specs.privacyTitle')}
                </h3>
                <p className="text-sm text-white/60">{t('specs.privacyDesc2')}</p>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  { icon: '🔒', title: t('specs.privacy1'), desc: t('specs.privacy1Desc') },
                  { icon: '📴', title: t('specs.privacy2'), desc: t('specs.privacy2Desc') },
                  { icon: '🏠', title: t('specs.privacy3'), desc: t('specs.privacy3Desc') },
                  { icon: '🔄', title: t('specs.privacy4'), desc: t('specs.privacy4Desc') },
                ].map((p) => (
                  <div key={p.title} className="p-4 rounded-xl bg-white/5 border border-white/10">
                    <div className="text-2xl mb-2">{p.icon}</div>
                    <h4 className="font-medium text-sm mb-0.5">{p.title}</h4>
                    <p className="text-xs text-white/50">{p.desc}</p>
                  </div>
                ))}
              </div>

              <div className="p-4 rounded-xl bg-yellow-500/5 border border-yellow-500/10">
                <div className="flex items-start gap-3">
                  <span className="text-xl shrink-0">⚡</span>
                  <p className="text-sm text-white/60">{t('specs.closingRemark')}</p>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </main>
  )
}
