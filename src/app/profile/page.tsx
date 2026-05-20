'use client'

import { useState } from 'react'

const mockDevices = [
  { name: 'Eve Pro', id: 'EV-2026-001', status: 'online', battery: 87, lastSync: '2 分钟前', personality: '温柔女友' },
  { name: 'Eve 标准版', id: 'EV-2026-002', status: 'sleep', battery: 34, lastSync: '3 小时前', personality: '元气少女' },
]

const mockActivities = [
  { type: '对话', detail: '与 Eve (温柔女友) 对话 45 分钟', time: '2 小时前' },
  { type: '升级', detail: 'Eve Pro 人格模型 v3.2 更新完成', time: '昨天' },
  { type: '健康', detail: '今日健康报告已生成 — 心率正常', time: '今天 08:00' },
  { type: '购买', detail: '已订阅「高级」套餐', time: '3 天前' },
  { type: '连接', detail: 'Eve 标准版 已绑定到你的账户', time: '1 周前' },
]

export default function ProfilePage() {
  const [tab, setTab] = useState<'overview' | 'devices' | 'activity' | 'settings'>('overview')
  const [user] = useState({ name: 'OpenFans 用户', email: 'user@openfans.ai', type: '高级订阅', expire: '2026-08-15' })

  return (
    <main className="pt-24 px-4 max-w-7xl mx-auto min-h-screen pb-24">
      {/* 用户信息头 */}
      <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 mb-8 p-6 rounded-2xl bg-white/5 border border-white/10">
        <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#e94e9f] to-[#6c5ce7] flex items-center justify-center text-3xl shrink-0">U</div>
        <div className="flex-1 text-center sm:text-left">
          <h1 className="text-2xl font-bold">{user.name}</h1>
          <p className="text-sm text-white/40">{user.email}</p>
          <div className="flex flex-wrap gap-2 mt-3 justify-center sm:justify-start">
            <span className="text-xs px-2 py-0.5 rounded-full bg-[#00cec9]/20 text-[#00cec9]">{user.type}</span>
            <span className="text-xs px-2 py-0.5 rounded-full bg-white/10 text-white/50">到期 {user.expire}</span>
          </div>
        </div>
        <button className="px-4 py-2 rounded-full bg-white/10 text-sm hover:bg-white/20 transition-colors">编辑资料</button>
      </div>

      {/* Tab 导航 */}
      <div className="flex gap-1 mb-8 p-1 rounded-xl bg-white/5 overflow-x-auto">
        {(['overview', 'devices', 'activity', 'settings'] as const).map((t) => (
          <button key={t} onClick={() => setTab(t)}
            className={`flex-1 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-all ${
              tab === t ? 'bg-[#6c5ce7]/30 text-white' : 'text-white/40 hover:text-white/70'
            }`}
          >
            {{ overview: '概览', devices: '设备', activity: '动态', settings: '设置' }[t]}
          </button>
        ))}
      </div>

      {tab === 'overview' && (
        <div className="grid md:grid-cols-3 gap-6">
          {/* 订阅卡片 */}
          <div className="p-5 rounded-2xl bg-gradient-to-br from-[#6c5ce7]/20 to-[#00cec9]/10 border border-white/10">
            <h3 className="text-sm text-white/40 mb-1">当前订阅</h3>
            <p className="text-2xl font-bold">高级</p>
            <p className="text-xs text-white/40 mt-1">¥199/月 · 到期 {user.expire}</p>
            <div className="mt-4 h-2 rounded-full bg-white/10 overflow-hidden">
              <div className="h-full w-3/4 rounded-full bg-gradient-to-r from-[#e94e9f] to-[#6c5ce7]" />
            </div>
            <p className="text-xs text-white/30 mt-1">本月已使用 75%</p>
          </div>
          {/* 设备统计 */}
          <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
            <h3 className="text-sm text-white/40 mb-1">绑定设备</h3>
            <p className="text-2xl font-bold">2</p>
            <p className="text-xs text-white/40 mt-1">1 台在线 · 1 台休眠</p>
            <div className="mt-4 flex gap-1">
              <div className="w-3 h-3 rounded-full bg-[#00cec9]" title="在线" />
              <div className="w-3 h-3 rounded-full bg-yellow-400/50" title="休眠" />
            </div>
          </div>
          {/* 使用统计 */}
          <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
            <h3 className="text-sm text-white/40 mb-1">本月用量</h3>
            <p className="text-2xl font-bold">23h</p>
            <p className="text-xs text-white/40 mt-1">对话时长 · 较上月 +12%</p>
            <div className="mt-4 flex gap-1 items-end h-8">
              {[40, 55, 30, 70, 60, 80, 45].map((h, i) => (
                <div key={i} className="flex-1 rounded-sm bg-[#00cec9]/40" style={{ height: `${h}%` }} />
              ))}
            </div>
          </div>
        </div>
      )}

      {tab === 'devices' && (
        <div className="space-y-4">
          <button className="w-full p-4 rounded-2xl border-2 border-dashed border-white/10 text-white/30 hover:border-white/30 hover:text-white/50 transition-all text-sm text-center">
            + 绑定新设备
          </button>
          {mockDevices.map((d) => (
            <div key={d.id} className="p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 transition-all">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h3 className="font-semibold">{d.name}</h3>
                  <p className="text-xs text-white/30">{d.id}</p>
                </div>
                <span className={`text-xs px-2 py-0.5 rounded-full ${
                  d.status === 'online' ? 'bg-[#00cec9]/20 text-[#00cec9]' : 'bg-yellow-400/10 text-yellow-400/60'
                }`}>
                  {d.status === 'online' ? '在线' : '休眠'}
                </span>
              </div>
              <div className="grid grid-cols-3 gap-3 text-sm">
                <div>
                  <span className="text-white/30 text-xs">电量</span>
                  <div className="flex items-center gap-1">
                    <div className="flex-1 h-1.5 rounded-full bg-white/10 overflow-hidden">
                      <div className={`h-full rounded-full ${d.battery > 50 ? 'bg-[#00cec9]' : 'bg-yellow-400'}`} style={{ width: `${d.battery}%` }} />
                    </div>
                    <span className="text-xs w-6">{d.battery}%</span>
                  </div>
                </div>
                <div>
                  <span className="text-white/30 text-xs">人格</span>
                  <p className="text-sm">{d.personality}</p>
                </div>
                <div className="text-right">
                  <span className="text-white/30 text-xs">同步</span>
                  <p className="text-sm text-white/60">{d.lastSync}</p>
                </div>
              </div>
              <div className="flex gap-2 mt-4 pt-3 border-t border-white/5">
                <button className="flex-1 py-1.5 rounded-lg bg-[#00cec9]/10 text-[#00cec9] text-xs">控制</button>
                <button className="flex-1 py-1.5 rounded-lg bg-white/5 text-white/50 text-xs">解绑</button>
              </div>
            </div>
          ))}
        </div>
      )}

      {tab === 'activity' && (
        <div className="relative">
          {/* 时间轴线条 */}
          <div className="absolute left-[7px] top-2 bottom-2 w-0.5 bg-white/5" />
          <div className="space-y-0">
            {mockActivities.map((a, i) => (
              <div key={i} className="flex gap-4 pb-6 relative">
                <div className={`w-4 h-4 rounded-full mt-0.5 shrink-0 relative z-10 ${
                  a.type === '对话' ? 'bg-[#00cec9]' :
                  a.type === '升级' ? 'bg-[#6c5ce7]' :
                  a.type === '健康' ? 'bg-green-400' :
                  a.type === '购买' ? 'bg-[#e94e9f]' : 'bg-white/30'
                }`} />
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-0.5">
                    <span className="text-xs font-medium">{a.type}</span>
                    <span className="text-xs text-white/30">{a.time}</span>
                  </div>
                  <p className="text-sm text-white/60">{a.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {tab === 'settings' && (
        <div className="max-w-lg space-y-4">
          {[
            { label: '通知', desc: '对话提醒、更新通知', on: true },
            { label: '自动同步', desc: '设备数据自动上传云端', on: true },
            { label: '健康数据共享', desc: '允许 Eve 收集健康数据', on: false },
            { label: '人格自动更新', desc: '有新版本时自动更新人格模型', on: true },
            { label: '夜间模式', desc: '22:00-07:00 降低设备音量', on: false },
          ].map((s) => (
            <div key={s.label} className="flex items-center justify-between p-4 rounded-2xl bg-white/5 border border-white/10">
              <div>
                <p className="text-sm font-medium">{s.label}</p>
                <p className="text-xs text-white/40">{s.desc}</p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" defaultChecked={s.on} className="sr-only peer" />
                <div className="w-9 h-5 rounded-full bg-white/10 peer-checked:bg-[#00cec9] transition-colors after:content-[''] after:absolute after:top-0.5 after:left-0.5 after:w-4 after:h-4 after:rounded-full after:bg-white after:transition-all peer-checked:after:translate-x-4" />
              </label>
            </div>
          ))}
          <button className="w-full py-3 rounded-2xl bg-white/5 border border-white/10 text-red-400 text-sm hover:bg-red-400/5 transition-colors">
            注销账户
          </button>
        </div>
      )}
    </main>
  )
}
