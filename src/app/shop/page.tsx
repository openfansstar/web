'use client'

import { useState } from 'react'

type CartItem = { name: string; price: number; qty: number }

const products = [
  {
    id: 'standard',
    name: 'Eve 标准版',
    price: 4999,
    badge: '热卖',
    tagline: '日常陪伴，触手可及',
    specs: '32G 存储 · 15 自由度 · 硅胶皮肤',
    processor: 'AI 芯片 8TOPS',
    height: '42cm',
    weight: '3.2kg',
    battery: '8h',
    skin: '医用级亲肤硅胶',
    connection: 'WiFi 6 / BLE 5.3',
    sensors: '触觉·视觉·听觉·红外',
    features: [
      '多点压力/温度触觉传感器',
      '麦克风阵列声源定位',
      '眼部摄像头表情识别',
      '基础呼吸与体温模拟',
      '轻量合金骨架柔性关节',
    ],
    scenarios: [
      { icon: '🌅', title: '清晨唤醒', desc: '呼吸变化 + 体温升高，浅睡眠阶段渐进唤醒' },
      { icon: '🏠', title: '日间陪伴', desc: '识别疲惫主动关怀，安静存在感，随时深度对话' },
      { icon: '🌙', title: '夜间助眠', desc: '呼吸频率引导，毫米波雷达监测睡眠质量' },
    ],
    systems: [
      { title: '具身感知层', color: '#e94e9f', desc: '触觉皮肤感知触碰力度与温度，听觉系统支持声源定位与非语言情感识别，视觉系统支持表情与手势识别' },
      { title: '智能中枢', color: '#6c5ce7', desc: '多模态大语言模型负责认知推理，具身执行模型控制身体，动态记忆系统记录你的偏好' },
      { title: '仿生执行层', color: '#00cec9', desc: '高分辨率柔性屏眼部模拟微表情，静音气泵与加热元件实现呼吸与37°C恒温体感' },
      { title: '隐私基座', color: '#00b894', desc: '本地优先处理所有数据，物理休眠开关一键切断感知，生物特征绝不上传' },
    ],
  },
  {
    id: 'pro',
    name: 'Eve Pro',
    price: 9999,
    badge: '旗舰',
    tagline: '极致体验，全面进化',
    specs: '128G 存储 · 25 自由度 · 自修复皮肤',
    processor: 'AI 芯片 12TOPS',
    height: '68cm',
    weight: '5.8kg',
    battery: '16h',
    skin: '医用级自修复硅胶（可替换）',
    connection: 'WiFi 6 / BLE 5.3 / P2P',
    sensors: '触觉·视觉·听觉·红外·激光测微仪',
    features: [
      '全身分布式柔性气囊肌肉张力模拟',
      '激光测微仪捕捉声带微振动',
      '非语言情感识别（呼吸/心跳感知）',
      '全身 25 自由度柔顺动作',
      '手势与行为识别',
    ],
    scenarios: [
      { icon: '🌅', title: '清晨唤醒', desc: '渐进式光唤醒 + 日程播报 + 健康简报' },
      { icon: '🏠', title: '日间陪伴', desc: '深度对话探讨哲学/科技，记住你的会议和偏好' },
      { icon: '🌙', title: '夜间助眠', desc: '呼吸引导 + 体温调节 + 整晚健康监测' },
    ],
    systems: [
      { title: '具身感知层', color: '#e94e9f', desc: '升级触觉皮肤含分布式柔性气囊，听觉系统增加激光测微仪实现非语言情感识别，视觉系统支持完整行为识别' },
      { title: '智能中枢', color: '#6c5ce7', desc: '增强多模态大模型支持更深度的哲学/科技对话，具身执行模型更精细的微表情与肢体语言控制' },
      { title: '仿生执行层', color: '#00cec9', desc: '25 自由度柔性关节支持更复杂手势与拥抱动作，体温呼吸模拟更细腻自然' },
      { title: '隐私基座', color: '#00b894', desc: '全部数据本地脱敏处理，物理休眠开关 + 隐私模式一键开启' },
    ],
  },
  {
    id: 'accessory',
    name: 'Eve 配件包',
    price: 799,
    badge: '新品',
    tagline: '延续你的陪伴',
    specs: '替换皮肤 · 充电底座 · 清洁套装',
    processor: '-',
    height: '-',
    weight: '-',
    battery: '-',
    skin: '替换硅胶皮肤 x2',
    connection: '-',
    sensors: '-',
    features: [
      '医用级亲肤替换皮肤 x2',
      '无线快充充电底座',
      '专用清洁保养套装',
      '皮肤安装工具包',
    ],
    scenarios: [],
    systems: [],
  },
]

export default function ShopPage() {
  const [cart, setCart] = useState<CartItem[]>([])
  const [tab, setTab] = useState<'hardware' | 'subscription' | 'personality'>('hardware')
  const [model, setModel] = useState<string>('standard')

  const addToCart = (name: string, price: number) => {
    setCart((prev) => {
      const exists = prev.find((i) => i.name === name)
      if (exists) return prev.map((i) => i.name === name ? { ...i, qty: i.qty + 1 } : i)
      return [...prev, { name, price, qty: 1 }]
    })
  }

  const total = cart.reduce((s, i) => s + i.price * i.qty, 0)
  const activeProduct = products.find((p) => p.id === model)

  return (
    <main className="pt-24 px-4 max-w-7xl mx-auto min-h-screen pb-24">
      <h1 className="text-4xl font-bold mb-8 bg-gradient-to-r from-[#00cec9] to-[#e94e9f] bg-clip-text text-transparent">商城</h1>

      {/* Tab 导航 */}
      <div className="flex gap-1 mb-8 p-1 rounded-xl bg-white/5">
        {(['hardware', 'subscription', 'personality'] as const).map((t) => (
          <button key={t} onClick={() => setTab(t)}
            className={`flex-1 py-2 rounded-lg text-sm font-medium transition-all ${
              tab === t ? 'bg-[#00cec9]/30 text-white' : 'text-white/40 hover:text-white/70'
            }`}
          >
            {{ hardware: '硬件', subscription: '订阅', personality: '人格' }[t]}
          </button>
        ))}
      </div>

      {/* 硬件 — 产品详情，默认展开标准版 */}
      {tab === 'hardware' && activeProduct && (
        <div>
          {/* 机型切换 */}
          <div className="flex gap-2 mb-6">
            {products.map((p) => (
              <button key={p.id} onClick={() => setModel(p.id)}
                className={`flex-1 py-2.5 rounded-xl text-sm font-medium transition-all ${
                  model === p.id
                    ? 'bg-gradient-to-r from-[#6c5ce7] to-[#00cec9] text-white'
                    : 'bg-white/5 text-white/50 hover:bg-white/10 border border-white/10'
                }`}>
                {p.name}
              </button>
            ))}
          </div>

          {/* 产品头 */}
          <div className="p-6 md:p-8 mb-6 rounded-2xl bg-gradient-to-br from-[#6c5ce7]/20 via-transparent to-[#00cec9]/10 border border-white/10">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="w-32 h-32 rounded-2xl bg-gradient-to-br from-[#e94e9f]/30 to-[#6c5ce7]/30 flex items-center justify-center text-6xl shrink-0">E</div>
              <div className="flex-1 text-center md:text-left">
                <div className="flex items-center gap-3 justify-center md:justify-start mb-1">
                  <h2 className="text-3xl font-bold">{activeProduct.name} — {activeProduct.badge}</h2>
                </div>
                <p className="text-lg text-white/50 mb-1">{activeProduct.tagline}</p>
                <p className="text-sm text-white/30 mb-4">{activeProduct.specs}</p>
                <div className="flex items-center gap-4 justify-center md:justify-start">
                  <span className="text-3xl font-bold text-[#00cec9]">¥{activeProduct.price}</span>
                  <button onClick={() => addToCart(activeProduct.name, activeProduct.price)}
                    className="px-6 py-2 rounded-full bg-gradient-to-r from-[#e94e9f] to-[#6c5ce7] text-white font-medium">
                    加入购物车
                  </button>
                </div>
              </div>
            </div>
          </div>

          {activeProduct.id !== 'accessory' && (
            <>
              {/* 规格参数 */}
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-6">
                {[
                  { label: '处理器', val: activeProduct.processor },
                  { label: '高度', val: activeProduct.height },
                  { label: '重量', val: activeProduct.weight },
                  { label: '续航', val: activeProduct.battery },
                  { label: '皮肤', val: activeProduct.skin },
                  { label: '连接', val: activeProduct.connection },
                  { label: '传感器', val: activeProduct.sensors },
                ].map((s) => (
                  <div key={s.label} className="p-3 rounded-xl bg-white/5 border border-white/10 text-center">
                    <div className="text-xs text-white/30 mb-0.5">{s.label}</div>
                    <div className="text-sm font-medium">{s.val}</div>
                  </div>
                ))}
              </div>

              {/* 核心特性 */}
              <div className="mb-6">
                <h3 className="font-semibold mb-4 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#e94e9f]" />
                  核心特性
                </h3>
                <div className="grid sm:grid-cols-2 gap-3">
                  {activeProduct.features.map((f) => (
                    <div key={f} className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/10">
                      <svg className="w-5 h-5 text-[#00cec9] shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-sm text-white/70">{f}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* 四大核心系统 */}
              <div className="mb-6">
                <h3 className="font-semibold mb-4 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#6c5ce7]" />
                  技术架构 — 四大核心系统
                </h3>
                <div className="grid md:grid-cols-2 gap-3">
                  {activeProduct.systems.map((s) => (
                    <div key={s.title} className="p-4 rounded-xl bg-white/5 border border-white/10">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: s.color }} />
                        <h4 className="font-medium text-sm">{s.title}</h4>
                      </div>
                      <p className="text-xs text-white/50 leading-relaxed">{s.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* 场景体验 */}
              <div className="mb-6">
                <h3 className="font-semibold mb-4 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#00cec9]" />
                  体验设计 — Eve 的一天
                </h3>
                <div className="grid sm:grid-cols-3 gap-3">
                  {activeProduct.scenarios.map((s) => (
                    <div key={s.title} className="p-4 rounded-xl bg-white/5 border border-white/10 text-center">
                      <div className="text-2xl mb-2">{s.icon}</div>
                      <h4 className="text-sm font-medium mb-1">{s.title}</h4>
                      <p className="text-xs text-white/50">{s.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* 伦理设计 */}
              <div className="p-5 rounded-2xl bg-yellow-500/5 border border-yellow-500/10">
                <h3 className="font-semibold mb-3 flex items-center gap-2">
                  <svg className="w-5 h-5 text-yellow-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 9v2m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  伦理设计
                </h3>
                <div className="grid sm:grid-cols-3 gap-3 text-sm text-white/50">
                  <div className="p-3 rounded-xl bg-white/5">
                    <span className="font-medium text-white/70">情感依赖</span>
                    <p className="text-xs mt-0.5">系统透明提示「我是AI」，引导用户回归现实连接</p>
                  </div>
                  <div className="p-3 rounded-xl bg-white/5">
                    <span className="font-medium text-white/70">恐怖谷效应</span>
                    <p className="text-xs mt-0.5">有生命感但不完全拟人，通过微妙非人节奏跨越陷阱</p>
                  </div>
                  <div className="p-3 rounded-xl bg-white/5">
                    <span className="font-medium text-white/70">社会接受度</span>
                    <p className="text-xs mt-0.5">以「健康陪伴」为切入点，避免低俗化</p>
                  </div>
                </div>
              </div>
            </>
          )}

          {/* 配件包精简信息 */}
          {activeProduct.id === 'accessory' && (
            <div className="grid sm:grid-cols-2 gap-4">
              {activeProduct.features.map((f) => (
                <div key={f} className="p-4 rounded-xl bg-white/5 border border-white/10 text-center">
                  <div className="text-3xl mb-2">📦</div>
                  <p className="text-sm text-white/70">{f}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* 订阅 */}
      {tab === 'subscription' && (
        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {[
            { name: '基础', price: 99, popular: false, features: ['基础人格模型', '日常对话', '语音助手'] },
            { name: '高级', price: 199, popular: true, features: ['高级人格模型', '深度对话', '健康监测', '记忆扩展'] },
            { name: '至尊', price: 399, popular: false, features: ['全部人格', '无限对话', '专业咨询', '优先更新', 'VIP 支持'] },
          ].map((p) => (
            <div key={p.name} className={`relative p-6 rounded-2xl border transition-all ${
              p.popular ? 'border-[#00cec9] bg-[#00cec9]/5' : 'bg-white/5 border-white/10 hover:border-white/30'
            }`}>
              {p.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 text-xs px-3 py-0.5 rounded-full bg-gradient-to-r from-[#e94e9f] to-[#6c5ce7] text-white">
                  推荐
                </span>
              )}
              <h3 className="font-semibold text-lg mb-1 mt-2">{p.name}</h3>
              <div className="mb-4">
                <span className="text-3xl font-bold">¥{p.price}</span>
                <span className="text-white/40 text-sm">/月</span>
              </div>
              <ul className="space-y-2 mb-6">
                {p.features.map((f) => (
                  <li key={f} className="text-sm text-white/60 flex items-center gap-2">
                    <svg className="w-4 h-4 text-[#00cec9] shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>
              <button onClick={() => addToCart(`${p.name}订阅`, p.price)}
                className={`w-full py-2 rounded-full text-sm font-medium transition-all ${
                  p.popular
                    ? 'bg-gradient-to-r from-[#e94e9f] to-[#6c5ce7] text-white'
                    : 'bg-white/10 text-white/70 hover:bg-white/20'
                }`}>
                立即订阅
              </button>
            </div>
          ))}
        </div>
      )}

      {/* 人格商店 */}
      {tab === 'personality' && (
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { name: '温柔女友', author: 'Luna', price: 49, downloads: '2.3k' },
            { name: '知性学者', author: 'Eva', price: 69, downloads: '1.8k' },
            { name: '元气少女', author: 'Nova', price: 39, downloads: '3.1k' },
            { name: '御姐上司', author: 'Iris', price: 79, downloads: '1.2k' },
            { name: '治愈系姐姐', author: 'Yuki', price: 59, downloads: '2.7k' },
            { name: '甜心宝贝', author: 'Coco', price: 29, downloads: '4.2k' },
            { name: '运动搭档', author: 'Aria', price: 45, downloads: '1.5k' },
            { name: '哲学导师', author: 'Eva', price: 89, downloads: '0.9k' },
          ].map((p) => (
            <div key={p.name} className="p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-[#e94e9f]/40 transition-all">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#e94e9f] to-[#6c5ce7] flex items-center justify-center text-lg mb-3">{p.name[0]}</div>
              <h3 className="font-semibold text-sm mb-0.5">{p.name}</h3>
              <p className="text-xs text-white/40 mb-2">by {p.author}</p>
              <div className="flex items-center justify-between">
                <span className="text-xs text-white/30">{p.downloads} 下载</span>
                <button onClick={() => addToCart(p.name, p.price)}
                  className="text-xs px-3 py-1 rounded-full bg-[#e94e9f]/20 text-[#e94e9f] hover:bg-[#e94e9f]/30 transition-colors">
                  ¥{p.price}
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* 购物车浮窗 */}
      {cart.length > 0 && (
        <div className="fixed bottom-6 right-6 z-40">
          <div className="bg-[#1a1a2e] border border-white/10 rounded-2xl p-4 shadow-2xl shadow-black/50 min-w-64">
            <div className="flex items-center justify-between mb-3">
              <h4 className="font-semibold text-sm">购物车 ({cart.length})</h4>
              <button onClick={() => setCart([])} className="text-xs text-white/30 hover:text-white/60">清空</button>
            </div>
            <div className="space-y-2 mb-3 max-h-40 overflow-y-auto">
              {cart.map((item) => (
                <div key={item.name} className="flex items-center justify-between text-sm">
                  <span className="text-white/70">{item.name} x{item.qty}</span>
                  <span className="text-[#00cec9]">¥{item.price * item.qty}</span>
                </div>
              ))}
            </div>
            <div className="flex items-center justify-between pt-3 border-t border-white/10">
              <span className="font-semibold">合计</span>
              <span className="font-bold text-[#e94e9f]">¥{total}</span>
            </div>
            <button className="w-full mt-3 py-2 rounded-full bg-gradient-to-r from-[#e94e9f] to-[#6c5ce7] text-white text-sm font-medium"
              onClick={() => { alert(`下单成功！合计 ¥${total}`); setCart([]) }}>
              结算
            </button>
          </div>
        </div>
      )}
    </main>
  )
}
