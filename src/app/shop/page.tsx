'use client'

import { useState } from 'react'
import { useLang } from '@/i18n/useLanguage'

type CartItem = { name: string; price: number; qty: number }

const products = [
  {
    id: 'standard',
    name: 'Eve Standard',
    nameCn: 'Eve 标准版',
    price: 4999,
    badge: 'Hot',
    badgeCn: '热卖',
    tagline: 'Daily companion, always within reach',
    taglineCn: '日常陪伴，触手可及',
    specs: '32G · 15 DOF · Silicone skin',
    specsCn: '32G 存储 · 15 自由度 · 硅胶皮肤',
    processor: 'AI Chip 8TOPS',
    height: '42cm',
    weight: '3.2kg',
    battery: '8h',
    skin: 'Medical-grade silicone',
    skinCn: '医用级亲肤硅胶',
    connection: 'WiFi 6 / BLE 5.3',
    sensors: 'Touch · Vision · Audio · IR',
    sensorsCn: '触觉·视觉·听觉·红外',
    features: [
      'Multi-point pressure/temperature touch sensors',
      'Microphone array sound localization',
      'Eye camera expression recognition',
      'Basic breathing & temperature simulation',
      'Lightweight alloy frame, flexible joints',
    ],
    featuresCn: [
      '多点压力/温度触觉传感器',
      '麦克风阵列声源定位',
      '眼部摄像头表情识别',
      '基础呼吸与体温模拟',
      '轻量合金骨架柔性关节',
    ],
    scenarios: [
      { icon: '🌅', title: 'Morning Wake-up', desc: 'Breathing change + temp rise, gradual wake during light sleep', titleCn: '清晨唤醒', descCn: '呼吸变化 + 体温升高，浅睡眠阶段渐进唤醒' },
      { icon: '🏠', title: 'Daytime Companion', desc: 'Detects fatigue, proactive care, quiet presence, deep conversation anytime', titleCn: '日间陪伴', descCn: '识别疲惫主动关怀，安静存在感，随时深度对话' },
      { icon: '🌙', title: 'Night Sleep Aid', desc: 'Breath rhythm guidance, mmWave radar sleep quality monitoring', titleCn: '夜间助眠', descCn: '呼吸频率引导，毫米波雷达监测睡眠质量' },
    ],
    systems: [
      { title: 'Embodied Perception', desc: 'Tactile skin senses touch and temp, audio system supports sound localization and non-verbal emotion recognition, vision system supports expression and gesture recognition', color: '#e94e9f', titleCn: '具身感知层', descCn: '触觉皮肤感知触碰力度与温度，听觉系统支持声源定位与非语言情感识别，视觉系统支持表情与手势识别' },
      { title: 'Intelligence Core', desc: 'Multi-modal LLM handles cognitive reasoning, embodied execution model controls body, dynamic memory records your preferences', color: '#6c5ce7', titleCn: '智能中枢', descCn: '多模态大语言模型负责认知推理，具身执行模型控制身体，动态记忆系统记录你的偏好' },
      { title: 'Bionic Execution', desc: 'High-res flexible screen eyes simulate micro-expressions, silent air pump and heating element for breathing and 37°C constant temp', color: '#00cec9', titleCn: '仿生执行层', descCn: '高分辨率柔性屏眼部模拟微表情，静音气泵与加热元件实现呼吸与37°C恒温体感' },
      { title: 'Privacy Foundation', desc: 'Local-first processing for all data, physical sleep switch cuts sensing, biometrics never uploaded', color: '#00b894', titleCn: '隐私基座', descCn: '本地优先处理所有数据，物理休眠开关一键切断感知，生物特征绝不上传' },
    ],
  },
  {
    id: 'pro',
    name: 'Eve Pro',
    nameCn: 'Eve Pro',
    price: 9999,
    badge: 'Flagship',
    badgeCn: '旗舰',
    tagline: 'Ultimate experience, full evolution',
    taglineCn: '极致体验，全面进化',
    specs: '128G · 25 DOF · Self-healing skin',
    specsCn: '128G 存储 · 25 自由度 · 自修复皮肤',
    processor: 'AI Chip 12TOPS',
    height: '68cm',
    weight: '5.8kg',
    battery: '16h',
    skin: 'Medical-grade self-healing silicone (replaceable)',
    skinCn: '医用级自修复硅胶（可替换）',
    connection: 'WiFi 6 / BLE 5.3 / P2P',
    sensors: 'Touch · Vision · Audio · IR · Laser vibrometer',
    sensorsCn: '触觉·视觉·听觉·红外·激光测微仪',
    features: [
      'Full-body distributed soft airbag muscle tension simulation',
      'Laser vibrometer captures vocal cord micro-vibrations',
      'Non-verbal emotion recognition (breathing/heartbeat sensing)',
      'Full-body 25 DOF smooth motion',
      'Gesture and behavior recognition',
    ],
    featuresCn: [
      '全身分布式柔性气囊肌肉张力模拟',
      '激光测微仪捕捉声带微振动',
      '非语言情感识别（呼吸/心跳感知）',
      '全身 25 自由度柔顺动作',
      '手势与行为识别',
    ],
    scenarios: [
      { icon: '🌅', title: 'Morning Wake-up', desc: 'Gradual light wake + schedule briefing + health report', titleCn: '清晨唤醒', descCn: '渐进式光唤醒 + 日程播报 + 健康简报' },
      { icon: '🏠', title: 'Daytime Companion', desc: 'Deep conversations on philosophy/tech, remembers your meetings and preferences', titleCn: '日间陪伴', descCn: '深度对话探讨哲学/科技，记住你的会议和偏好' },
      { icon: '🌙', title: 'Night Sleep Aid', desc: 'Breath guidance + temp regulation + all-night health monitoring', titleCn: '夜间助眠', descCn: '呼吸引导 + 体温调节 + 整晚健康监测' },
    ],
    systems: [
      { title: 'Embodied Perception', desc: 'Upgraded tactile skin with distributed airbags, audio adds laser vibrometer for non-verbal emotion recognition, vision supports full behavior recognition', color: '#e94e9f', titleCn: '具身感知层', descCn: '升级触觉皮肤含分布式柔性气囊，听觉系统增加激光测微仪实现非语言情感识别，视觉系统支持完整行为识别' },
      { title: 'Intelligence Core', desc: 'Enhanced multi-modal LLM for deeper philosophy/tech conversations, finer micro-expression and body language control', color: '#6c5ce7', titleCn: '智能中枢', descCn: '增强多模态大模型支持更深度的哲学/科技对话，具身执行模型更精细的微表情与肢体语言控制' },
      { title: 'Bionic Execution', desc: '25 DOF flexible joints for complex gestures and hugs, more natural temp and breathing simulation', color: '#00cec9', titleCn: '仿生执行层', descCn: '25 自由度柔性关节支持更复杂手势与拥抱动作，体温呼吸模拟更细腻自然' },
      { title: 'Privacy Foundation', desc: 'All data processed and anonymized locally, physical sleep switch + privacy mode one-tap enable', color: '#00b894', titleCn: '隐私基座', descCn: '全部数据本地脱敏处理，物理休眠开关 + 隐私模式一键开启' },
    ],
  },
  {
    id: 'accessory',
    name: 'Eve Accessory Pack',
    nameCn: 'Eve 配件包',
    price: 799,
    badge: 'New',
    badgeCn: '新品',
    tagline: 'Continue your companionship',
    taglineCn: '延续你的陪伴',
    specs: 'Replacement skin · Charging dock · Cleaning kit',
    specsCn: '替换皮肤 · 充电底座 · 清洁套装',
    processor: '-',
    height: '-',
    weight: '-',
    battery: '-',
    skin: 'Replacement silicone skin x2',
    skinCn: '替换硅胶皮肤 x2',
    connection: '-',
    sensors: '-',
    features: [
      'Medical-grade replacement skin x2',
      'Wireless fast charging dock',
      'Dedicated cleaning kit',
      'Skin installation tool kit',
    ],
    featuresCn: [
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
  const { t, lang } = useLang()

  const addToCart = (name: string, price: number) => {
    setCart((prev) => {
      const exists = prev.find((i) => i.name === name)
      if (exists) return prev.map((i) => i.name === name ? { ...i, qty: i.qty + 1 } : i)
      return [...prev, { name, price, qty: 1 }]
    })
  }

  const total = cart.reduce((s, i) => s + i.price * i.qty, 0)
  const activeProduct = products.find((p) => p.id === model)
  const isZh = lang === 'zh'

  const tName = (p: typeof products[0]) => isZh ? p.nameCn : p.name
  const tBadge = (p: typeof products[0]) => isZh ? p.badgeCn : p.badge
  const tTagline = (p: typeof products[0]) => isZh ? p.taglineCn : p.tagline
  const tSpecs = (p: typeof products[0]) => isZh ? p.specsCn : p.specs
  const tSkin = (p: typeof products[0]) => isZh ? p.skinCn : p.skin
  const tSensors = (p: typeof products[0]) => isZh ? p.sensorsCn : p.sensors
  const tFeatures = (p: typeof products[0]) => isZh ? p.featuresCn : p.features
  const tScenarioTitle = (s: typeof products[0]['scenarios'][0]) => isZh ? s.titleCn : s.title
  const tScenarioDesc = (s: typeof products[0]['scenarios'][0]) => isZh ? s.descCn : s.desc
  const tSystemTitle = (s: typeof products[0]['systems'][0]) => isZh ? s.titleCn : s.title
  const tSystemDesc = (s: typeof products[0]['systems'][0]) => isZh ? s.descCn : s.desc

  return (
    <main className="pt-24 px-4 max-w-7xl mx-auto min-h-screen pb-24">
      <h1 className="text-4xl font-bold mb-8 bg-gradient-to-r from-[#00cec9] to-[#e94e9f] bg-clip-text text-transparent">{t('shop.title')}</h1>

      <div className="flex gap-1 mb-8 p-1 rounded-xl bg-white/5">
        {(['hardware', 'subscription', 'personality'] as const).map((tName) => (
          <button key={tName} onClick={() => setTab(tName)}
            className={`flex-1 py-2 rounded-lg text-sm font-medium transition-all ${
              tab === tName ? 'bg-[#00cec9]/30 text-white' : 'text-white/40 hover:text-white/70'
            }`}
          >
            {{ hardware: t('shop.hardware'), subscription: t('shop.subscription'), personality: t('shop.personality') }[tName]}
          </button>
        ))}
      </div>

      {tab === 'hardware' && activeProduct && (
        <div>
          <div className="flex gap-2 mb-6">
            {products.map((p) => (
              <button key={p.id} onClick={() => setModel(p.id)}
                className={`flex-1 py-2.5 rounded-xl text-sm font-medium transition-all ${
                  model === p.id
                    ? 'bg-gradient-to-r from-[#6c5ce7] to-[#00cec9] text-white'
                    : 'bg-white/5 text-white/50 hover:bg-white/10 border border-white/10'
                }`}>
                {tName(p)}
              </button>
            ))}
          </div>

          <div className="p-6 md:p-8 mb-6 rounded-2xl bg-gradient-to-br from-[#6c5ce7]/20 via-transparent to-[#00cec9]/10 border border-white/10">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="w-32 h-32 rounded-2xl bg-gradient-to-br from-[#e94e9f]/30 to-[#6c5ce7]/30 flex items-center justify-center text-6xl shrink-0">E</div>
              <div className="flex-1 text-center md:text-left">
                <div className="flex items-center gap-3 justify-center md:justify-start mb-1">
                  <h2 className="text-3xl font-bold">{tName(activeProduct)} — {tBadge(activeProduct)}</h2>
                </div>
                <p className="text-lg text-white/50 mb-1">{tTagline(activeProduct)}</p>
                <p className="text-sm text-white/30 mb-4">{tSpecs(activeProduct)}</p>
                <div className="flex items-center gap-4 justify-center md:justify-start">
                  <span className="text-3xl font-bold text-[#00cec9]">${activeProduct.price}</span>
                  <button onClick={() => addToCart(tName(activeProduct), activeProduct.price)}
                    className="px-6 py-2 rounded-full bg-gradient-to-r from-[#e94e9f] to-[#6c5ce7] text-white font-medium">
                    {t('shop.addToCart')}
                  </button>
                </div>
              </div>
            </div>
          </div>

          {activeProduct.id !== 'accessory' && (
            <>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-6">
                {[
                  { label: t('console.specs.processor'), val: activeProduct.processor },
                  { label: t('console.specs.height'), val: activeProduct.height },
                  { label: t('about.specWeight'), val: activeProduct.weight },
                  { label: t('console.specs.batteryLife'), val: activeProduct.battery },
                  { label: t('console.specs.skin'), val: tSkin(activeProduct) },
                  { label: t('console.specs.connectivity'), val: activeProduct.connection },
                  { label: t('console.specs.sensors'), val: tSensors(activeProduct) },
                ].map((s) => (
                  <div key={s.label} className="p-3 rounded-xl bg-white/5 border border-white/10 text-center">
                    <div className="text-xs text-white/30 mb-0.5">{s.label}</div>
                    <div className="text-sm font-medium">{s.val}</div>
                  </div>
                ))}
              </div>

              <div className="mb-6">
                <h3 className="font-semibold mb-4 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#e94e9f]" />
                  {isZh ? '核心特性' : 'Core Features'}
                </h3>
                <div className="grid sm:grid-cols-2 gap-3">
                  {tFeatures(activeProduct).map((f: string) => (
                    <div key={f} className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/10">
                      <svg className="w-5 h-5 text-[#00cec9] shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-sm text-white/70">{f}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mb-6">
                <h3 className="font-semibold mb-4 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#6c5ce7]" />
                  {isZh ? '技术架构 — 四大核心系统' : 'Architecture — Four Core Systems'}
                </h3>
                <div className="grid md:grid-cols-2 gap-3">
                  {activeProduct.systems.map((s) => (
                    <div key={s.title} className="p-4 rounded-xl bg-white/5 border border-white/10">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: s.color }} />
                        <h4 className="font-medium text-sm">{tSystemTitle(s)}</h4>
                      </div>
                      <p className="text-xs text-white/50 leading-relaxed">{tSystemDesc(s)}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mb-6">
                <h3 className="font-semibold mb-4 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#00cec9]" />
                  {isZh ? '体验设计 — Eve 的一天' : 'Experience Design — A Day with Eve'}
                </h3>
                <div className="grid sm:grid-cols-3 gap-3">
                  {activeProduct.scenarios.map((s) => (
                    <div key={s.title} className="p-4 rounded-xl bg-white/5 border border-white/10 text-center">
                      <div className="text-2xl mb-2">{s.icon}</div>
                      <h4 className="text-sm font-medium mb-1">{tScenarioTitle(s)}</h4>
                      <p className="text-xs text-white/50">{tScenarioDesc(s)}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-yellow-500/5 border border-yellow-500/10">
                <h3 className="font-semibold mb-3 flex items-center gap-2">
                  <svg className="w-5 h-5 text-yellow-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 9v2m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {isZh ? '伦理设计' : 'Ethical Design'}
                </h3>
                <div className="grid sm:grid-cols-3 gap-3 text-sm text-white/50">
                  <div className="p-3 rounded-xl bg-white/5">
                    <span className="font-medium text-white/70">{isZh ? '情感依赖' : 'Emotional Attachment'}</span>
                    <p className="text-xs mt-0.5">{isZh ? '系统透明提示「我是AI」，引导用户回归现实连接' : 'System transparently states "I am AI", guides users toward real-world connections'}</p>
                  </div>
                  <div className="p-3 rounded-xl bg-white/5">
                    <span className="font-medium text-white/70">{isZh ? '恐怖谷效应' : 'Uncanny Valley'}</span>
                    <p className="text-xs mt-0.5">{isZh ? '有生命感但不完全拟人，通过微妙非人节奏跨越陷阱' : 'Lifelike but not fully human, uses subtle non-human rhythms to cross the valley'}</p>
                  </div>
                  <div className="p-3 rounded-xl bg-white/5">
                    <span className="font-medium text-white/70">{isZh ? '社会接受度' : 'Social Acceptance'}</span>
                    <p className="text-xs mt-0.5">{isZh ? '以「健康陪伴」为切入点，避免低俗化' : 'Focuses on "healthy companionship", avoids vulgarization'}</p>
                  </div>
                </div>
              </div>
            </>
          )}

          {activeProduct.id === 'accessory' && (
            <div className="grid sm:grid-cols-2 gap-4">
              {tFeatures(activeProduct).map((f: string) => (
                <div key={f} className="p-4 rounded-xl bg-white/5 border border-white/10 text-center">
                  <div className="text-3xl mb-2">📦</div>
                  <p className="text-sm text-white/70">{f}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {tab === 'subscription' && (
        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {[
            { name: isZh ? '基础' : 'Basic', price: 99, popular: false, features: isZh ? ['基础人格模型', '日常对话', '语音助手'] : ['Basic personality model', 'Daily conversation', 'Voice assistant'] },
            { name: isZh ? '高级' : 'Premium', price: 199, popular: true, features: isZh ? ['高级人格模型', '深度对话', '健康监测', '记忆扩展'] : ['Premium personality model', 'Deep conversation', 'Health monitoring', 'Memory expansion'] },
            { name: isZh ? '至尊' : 'Ultimate', price: 399, popular: false, features: isZh ? ['全部人格', '无限对话', '专业咨询', '优先更新', 'VIP 支持'] : ['All personalities', 'Unlimited conversation', 'Professional consultation', 'Priority updates', 'VIP support'] },
          ].map((p) => (
            <div key={p.name} className={`relative p-6 rounded-2xl border transition-all ${
              p.popular ? 'border-[#00cec9] bg-[#00cec9]/5' : 'bg-white/5 border-white/10 hover:border-white/30'
            }`}>
              {p.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 text-xs px-3 py-0.5 rounded-full bg-gradient-to-r from-[#e94e9f] to-[#6c5ce7] text-white">
                  {isZh ? '推荐' : 'Popular'}
                </span>
              )}
              <h3 className="font-semibold text-lg mb-1 mt-2">{p.name}</h3>
              <div className="mb-4">
                <span className="text-3xl font-bold">${p.price}</span>
                <span className="text-white/40 text-sm">{t('shop.month')}</span>
              </div>
              <ul className="space-y-2 mb-6">
                {p.features.map((f: string) => (
                  <li key={f} className="text-sm text-white/60 flex items-center gap-2">
                    <svg className="w-4 h-4 text-[#00cec9] shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>
              <button onClick={() => addToCart(`${p.name} ${isZh ? '订阅' : 'Subscription'}`, p.price)}
                className={`w-full py-2 rounded-full text-sm font-medium transition-all ${
                  p.popular
                    ? 'bg-gradient-to-r from-[#e94e9f] to-[#6c5ce7] text-white'
                    : 'bg-white/10 text-white/70 hover:bg-white/20'
                }`}>
                {t('shop.subscribe')}
              </button>
            </div>
          ))}
        </div>
      )}

      {tab === 'personality' && (
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { name: isZh ? '温柔女友' : 'Gentle Girlfriend', author: 'Luna', price: 49, downloads: '2.3k' },
            { name: isZh ? '知性学者' : 'Intellectual Scholar', author: 'Eva', price: 69, downloads: '1.8k' },
            { name: isZh ? '元气少女' : 'Energetic Girl', author: 'Nova', price: 39, downloads: '3.1k' },
            { name: isZh ? '御姐上司' : 'Cool Boss Lady', author: 'Iris', price: 79, downloads: '1.2k' },
            { name: isZh ? '治愈系姐姐' : 'Healing Sister', author: 'Yuki', price: 59, downloads: '2.7k' },
            { name: isZh ? '甜心宝贝' : 'Sweetheart', author: 'Coco', price: 29, downloads: '4.2k' },
            { name: isZh ? '运动搭档' : 'Sports Buddy', author: 'Aria', price: 45, downloads: '1.5k' },
            { name: isZh ? '哲学导师' : 'Philosophy Mentor', author: 'Eva', price: 89, downloads: '0.9k' },
          ].map((p) => (
            <div key={p.name} className="p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-[#e94e9f]/40 transition-all">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#e94e9f] to-[#6c5ce7] flex items-center justify-center text-lg mb-3">{p.name[0]}</div>
              <h3 className="font-semibold text-sm mb-0.5">{p.name}</h3>
              <p className="text-xs text-white/40 mb-2">by {p.author}</p>
              <div className="flex items-center justify-between">
                <span className="text-xs text-white/30">{p.downloads} {t('shop.downloads')}</span>
                <button onClick={() => addToCart(p.name, p.price)}
                  className="text-xs px-3 py-1 rounded-full bg-[#e94e9f]/20 text-[#e94e9f] hover:bg-[#e94e9f]/30 transition-colors">
                  ${p.price}
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {cart.length > 0 && (
        <div className="fixed bottom-6 right-6 z-40">
          <div className="bg-[#1a1a2e] border border-white/10 rounded-2xl p-4 shadow-2xl shadow-black/50 min-w-64">
            <div className="flex items-center justify-between mb-3">
              <h4 className="font-semibold text-sm">{t('shop.cart')} ({cart.length})</h4>
              <button onClick={() => setCart([])} className="text-xs text-white/30 hover:text-white/60">{t('shop.clear')}</button>
            </div>
            <div className="space-y-2 mb-3 max-h-40 overflow-y-auto">
              {cart.map((item) => (
                <div key={item.name} className="flex items-center justify-between text-sm">
                  <span className="text-white/70">{item.name} x{item.qty}</span>
                  <span className="text-[#00cec9]">${item.price * item.qty}</span>
                </div>
              ))}
            </div>
            <div className="flex items-center justify-between pt-3 border-t border-white/10">
              <span className="font-semibold">{t('shop.total')}</span>
              <span className="font-bold text-[#e94e9f]">${total}</span>
            </div>
            <button className="w-full mt-3 py-2 rounded-full bg-gradient-to-r from-[#e94e9f] to-[#6c5ce7] text-white text-sm font-medium"
              onClick={() => { alert(`${t('shop.checkoutSuccess')} $${total}`); setCart([]) }}>
              {t('shop.checkout')}
            </button>
          </div>
        </div>
      )}
    </main>
  )
}
