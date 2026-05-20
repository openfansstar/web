'use client'

import { useState } from 'react'

type Personality = { name: string; desc: string; active: boolean; color: string }
type Memory = { time: string; content: string; type: 'short' | 'long' }
type SpecTab = 'overview' | 'sensory' | 'brain' | 'body' | 'privacy'

export default function ConsolePage() {
  const [activeTab, setActiveTab] = useState<'status' | 'personality' | 'memory' | 'settings' | 'specs'>('status')
  const [specTab, setSpecTab] = useState<SpecTab>('overview')
  const [battery, setBattery] = useState(87)
  const [personalities, setPersonalities] = useState<Personality[]>([
    { name: '温柔陪伴', desc: '温暖体贴，如春日微风', active: true, color: '#e94e9f' },
    { name: '知性对话', desc: '博学多识，深度交流', active: false, color: '#6c5ce7' },
    { name: '活力伙伴', desc: '元气满满，一起嗨', active: false, color: '#00cec9' },
    { name: '治愈系', desc: '安静倾听，温柔抚慰', active: false, color: '#00b894' },
  ])
  const [memories] = useState<Memory[]>([
    { time: '今天 09:15', content: '用户今天有一个重要的会议', type: 'short' },
    { time: '今天 07:30', content: '用户的睡眠质量评分 82分，比昨天好', type: 'short' },
    { time: '3天前', content: '用户喜欢吃辣，但胃不太好', type: 'long' },
    { time: '1周前', content: '用户最近在学钢琴', type: 'long' },
    { time: '2周前', content: '用户的生日是 8月15日', type: 'long' },
  ])

  return (
    <main className="pt-24 px-4 max-w-7xl mx-auto min-h-screen pb-24">
      <h1 className="text-4xl font-bold mb-8 bg-gradient-to-r from-[#6c5ce7] to-[#00cec9] bg-clip-text text-transparent">
        Eve 控制台
      </h1>

      {/* 设备状态卡片 */}
      <div className="relative p-6 mb-8 rounded-2xl overflow-hidden border border-white/10">
        <div className="absolute inset-0 bg-gradient-to-br from-[#6c5ce7]/20 via-transparent to-[#00cec9]/10" />
        <div className="relative flex items-center gap-6">
          <div className="w-24 h-24 rounded-full bg-gradient-to-br from-[#e94e9f] to-[#6c5ce7] flex items-center justify-center text-4xl shrink-0 animate-float">
            E
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-3 mb-1">
              <h2 className="text-2xl font-bold">Eve #001</h2>
              <span className="text-xs px-2 py-0.5 rounded-full bg-green-500/20 text-green-300">在线</span>
            </div>
            <p className="text-sm text-white/50 mb-3">固件 v2.1.0 · 已连接 2h 34min</p>
            <div className="flex items-center gap-4 text-sm">
              <div className="flex items-center gap-1.5">
                <div className="w-16 h-1.5 rounded-full bg-white/10 overflow-hidden">
                  <div className="h-full rounded-full bg-gradient-to-r from-green-400 to-yellow-400" style={{ width: `${battery}%` }} />
                </div>
                <span className="text-white/60">{battery}%</span>
              </div>
              <span className="text-white/30">|</span>
              <span className="text-white/60">体温 36.8°C</span>
              <span className="text-white/30">|</span>
              <span className="text-white/60">呼吸 16/min</span>
            </div>
          </div>
        </div>
      </div>

      {/* Tab 导航 */}
      <div className="flex gap-1 mb-8 p-1 rounded-xl bg-white/5 overflow-x-auto scrollbar-none">
        {(['status', 'personality', 'memory', 'settings', 'specs'] as const).map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`flex-1 py-2 rounded-lg text-sm font-medium transition-all whitespace-nowrap ${
              activeTab === tab ? 'bg-[#6c5ce7]/30 text-white' : 'text-white/40 hover:text-white/70'
            }`}
          >
            {{ status: '实时状态', personality: '人格模型', memory: '记忆', settings: '设置', specs: '规格' }[tab]}
          </button>
        ))}
      </div>

      {/* 实时状态 */}
      {activeTab === 'status' && (
        <div className="grid md:grid-cols-2 gap-4">
          {[
            { label: 'CPU', value: '23%', bar: 23, color: 'from-green-400 to-cyan-400' },
            { label: '内存', value: '1.2/4GB', bar: 30, color: 'from-purple-400 to-pink-400' },
            { label: '存储', value: '6.8/32GB', bar: 21, color: 'from-blue-400 to-indigo-400' },
            { label: '温度', value: '36.8°C', bar: 45, color: 'from-orange-400 to-red-400' },
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

      {/* 人格模型 */}
      {activeTab === 'personality' && (
        <div className="grid md:grid-cols-2 gap-4">
          {personalities.map((p) => (
            <div
              key={p.name}
              onClick={() => setPersonalities(personalities.map((x) => ({ ...x, active: x.name === p.name })))}
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
                {p.active && <span className="text-xs px-2 py-0.5 rounded-full bg-[#6c5ce7]/30 text-[#b8a9ff]">使用中</span>}
              </div>
              <p className="text-sm text-white/50">{p.desc}</p>
            </div>
          ))}
        </div>
      )}

      {/* 记忆 */}
      {activeTab === 'memory' && (
        <div>
          <div className="flex gap-4 mb-4">
            <span className="text-sm font-medium text-white/80">近期记忆</span>
            <span className="text-sm text-white/30">长期记忆</span>
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
                    {m.type === 'short' ? '短期' : '长期'}
                  </span>
                  <span className="text-xs text-white/30">{m.time}</span>
                </div>
                <p className="text-sm text-white/70">{m.content}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 设置 */}
      {activeTab === 'settings' && (
        <div className="space-y-3">
          {[
            { label: '语音唤醒', desc: '说出"Eve"即可唤醒', on: true },
            { label: '自动学习', desc: '分析对话习惯优化人格', on: true },
            { label: '隐私模式', desc: '本地处理所有数据', on: false },
            { label: '勿扰时段', desc: '23:00 - 07:00 静音', on: true },
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
      {/* 规格介绍 */}
      {activeTab === 'specs' && (
        <div>
          <p className="text-sm text-white/40 mb-6">Eve 的核心理念是「有温度的智能体」—— 一个能感知、响应并成长的具身智能生命体。</p>

          {/* 子 Tab */}
          <div className="flex gap-1 mb-6 p-0.5 rounded-lg bg-white/5 overflow-x-auto scrollbar-none">
            {(['overview', 'sensory', 'brain', 'body', 'privacy'] as const).map((t) => (
              <button key={t} onClick={() => setSpecTab(t)}
                className={`px-3 py-1.5 rounded-md text-xs font-medium whitespace-nowrap transition-all ${
                  specTab === t ? 'bg-[#6c5ce7]/30 text-white' : 'text-white/40 hover:text-white/70'
                }`}
              >
                {{ overview: '概览', sensory: '感官', brain: '大脑', body: '身体', privacy: '隐私' }[t]}
              </button>
            ))}
          </div>

          {specTab === 'overview' && (
            <div className="grid md:grid-cols-3 gap-4">
              <div className="p-5 rounded-2xl bg-gradient-to-br from-[#e94e9f]/10 to-[#6c5ce7]/10 border border-white/10 text-center">
                <div className="text-3xl mb-2">🤖</div>
                <div className="text-2xl font-bold">Eve</div>
                <div className="text-xs text-white/40 mt-1">具身智能硅胶陪伴机器人</div>
                <div className="mt-4 grid grid-cols-2 gap-2 text-left">
                  {[
                    ['处理器', 'AI 芯片 12TOPS'],
                    ['自由度', '标准 15 / Pro 25'],
                    ['续航', '标准 8h / Pro 16h'],
                    ['皮肤', '医用级自修复硅胶'],
                    ['连接', 'WiFi 6 / BLE 5.3'],
                    ['重量', '标准 3.2kg / Pro 5.8kg'],
                    ['高度', '标准 42cm / Pro 68cm'],
                    ['传感器', '触觉·视觉·听觉·红外'],
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
                    <span className="w-2 h-2 rounded-full bg-[#e94e9f]" /> 核心价值
                  </h3>
                  <div className="grid sm:grid-cols-3 gap-3">
                    {[
                      { icon: '💗', title: '情感共鸣', desc: '感知情绪，自然回应，像朋友一样理解你' },
                      { icon: '🎭', title: '人格化交互', desc: '多人格模型切换，千人千面的陪伴体验' },
                      { icon: '✨', title: '无感化服务', desc: '主动关怀，融入日常，无需刻意操作' },
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
                    <span className="w-2 h-2 rounded-full bg-[#00cec9]" /> 四大核心系统
                  </h3>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {[
                      { title: '具身感知层', desc: '触觉皮肤、听觉系统、视觉系统 — 她的感官', color: '#e94e9f' },
                      { title: '智能中枢', desc: '多模态大模型、具身执行模型、动态记忆系统', color: '#6c5ce7' },
                      { title: '仿生执行层', desc: '表情系统、呼吸与体温、动作骨架 — 她的身体', color: '#00cec9' },
                      { title: '安全与隐私基座', desc: '本地优先处理、物理休眠开关、数据脱敏', color: '#00b894' },
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
                  title: '触觉皮肤',
                  icon: '🤚',
                  color: '#e94e9f',
                  layers: [
                    '外层：亲肤自修复硅胶',
                    '中层：多点压力/温度传感器',
                    '内层：分布式柔性气囊模拟肌肉张力',
                  ],
                  ability: '感知触碰力度与温度，识别抚摸、抓握，在拥抱时给予柔软回应',
                },
                {
                  title: '听觉系统',
                  icon: '👂',
                  color: '#6c5ce7',
                  layers: [
                    '麦克风阵列：声源定位 + 降噪',
                    '激光测微仪：捕捉声带微振动',
                    '非语言情感识别算法',
                  ],
                  ability: '即使你沉默，也能感知呼吸和心跳的细微变化',
                },
                {
                  title: '视觉系统',
                  icon: '👁️',
                  color: '#00cec9',
                  layers: [
                    '眼部摄像头：环境、表情识别',
                    '手势与行为识别',
                    '隐私优先：所有视觉数据本地脱敏',
                  ],
                  ability: '理解你的表情和动作，数据绝不上传云端',
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
                    <div className="text-xs text-white/30 mb-0.5">能力</div>
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
                  title: '多模态大语言模型',
                  icon: '🧠',
                  color: '#6c5ce7',
                  items: [
                    '认知与推理核心引擎',
                    '理解言语、表情、历史背景',
                    '生成连贯、有记忆的对话',
                    '能探讨哲学，也能记住你的会议',
                  ],
                },
                {
                  title: '具身执行模型',
                  icon: '🔄',
                  color: '#e94e9f',
                  items: [
                    '将意图指令转化为身体动作',
                    '微表情、呼吸节奏、体温协同控制',
                    '形成情绪化的肢体语言',
                    '表达安慰、喜悦、关心等情感',
                  ],
                },
                {
                  title: '动态记忆系统',
                  icon: '📖',
                  color: '#00cec9',
                  items: [
                    '短期记忆：维持对话上下文',
                    '长期记忆：存储关键经历和偏好',
                    '情感模式学习：越来越懂你',
                    '像一本与你共同书写的书',
                  ],
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
                  title: '表情系统',
                  icon: '😊',
                  color: '#e94e9f',
                  items: [
                    '高分辨率柔性屏眼部，模拟微表情',
                    '颈部与口部微型伺服电机驱动',
                    '能做出噘嘴、微笑等细腻动作',
                    '表达丰富的情绪语言',
                  ],
                },
                {
                  title: '呼吸与体温',
                  icon: '🌡️',
                  color: '#00cec9',
                  items: [
                    '微型静音气泵模拟均匀呼吸起伏',
                    '内置加热元件保持 37°C 恒温体感',
                    '呼吸频率可随场景变化',
                    '拥抱时体感温暖自然',
                  ],
                },
                {
                  title: '动作骨架',
                  icon: '🦾',
                  color: '#6c5ce7',
                  items: [
                    '轻量合金骨架，兼顾强度与重量',
                    '柔性关节，动作安全柔顺',
                    '可完成拥抱、转头、手势等动作',
                    '所有动作经过力控安全校准',
                  ],
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
                  本地优先，云端脱敏
                </h3>
                <p className="text-sm text-white/60">所有数据处理遵循「本地优先，云端脱敏」原则。生物特征等敏感数据绝不上传云端。</p>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  { icon: '🔒', title: '端到端加密', desc: '所有通信链路采用端到端加密，第三方无法窃听' },
                  { icon: '📴', title: '物理休眠开关', desc: '一键切断所有感知模块，从物理层面确保隐私' },
                  { icon: '🏠', title: '本地推理', desc: 'AI 推理在本地边缘计算模块完成，不依赖云端' },
                  { icon: '🔄', title: '数据脱敏', desc: '需要上传的数据先脱敏，移除所有个人标识信息' },
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
                  <p className="text-sm text-white/60">
                    Eve 的设计，本质上是对未来人机关系的一次探索。它的真正价值，在于帮助人更好地与自己相处，最终获得拥抱真实生活的勇气与力量。
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </main>
  )
}
