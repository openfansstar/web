export default function ReadmePage() {
  return (
    <main className="pt-24 px-4 max-w-4xl mx-auto min-h-screen pb-24">
      <h1 className="text-4xl font-bold mb-8 bg-gradient-to-r from-[#00cec9] to-[#6c5ce7] bg-clip-text text-transparent">
        Openfans 介绍
      </h1>

      <div className="prose prose-invert max-w-none space-y-8">
        {/* 项目简介 */}
        <section className="p-6 rounded-2xl bg-white/5 border border-white/10">
          <h2 className="text-xl font-semibold mb-3">什么是 Openfans？</h2>
          <p className="text-white/60 leading-relaxed">
            Openfans 是一个基于 Web3 的去中心化粉丝经济平台。我们结合了<strong className="text-white">具身智能机器人 Eve</strong>、
            <strong className="text-white">P2P 硬直连</strong>和<strong className="text-white">代币经济</strong>，
            为创作者和粉丝之间建立全新的连接方式。
          </p>
        </section>

        {/* 核心功能 */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">核心功能</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              {
                icon: '🔗',
                title: 'P2P 硬直连',
                desc: '点对点加密连接，不经过中心服务器。创作者和粉丝之间直接通信，延迟低、隐私强。',
              },
              {
                icon: '🤖',
                title: 'Eve 智能机器人',
                desc: '具身硅胶机器人，搭载先进 AI 人格模型。支持多人格切换、深度对话、健康监测。',
              },
              {
                icon: '🎭',
                title: '人格商店',
                desc: '社区创作者可上架自定义人格模型。温柔女友、知性学者、元气少女… 总有一款适合你。',
              },
              {
                icon: '💎',
                title: '代币经济',
                desc: '基于区块链的代币系统。粉丝打赏、创作者变现、人格交易，全部上链透明可查。',
              },
              {
                icon: '🛡️',
                title: '隐私保护',
                desc: '端到端加密通信，数据本地优先存储。用户数据主权归属用户自己，而非平台。',
              },
              {
                icon: '🌐',
                title: '去中心化社区',
                desc: 'DAO 治理模式，重大决策由社区投票决定。平台收益分配透明，创作者获得公平回报。',
              },
            ].map((f) => (
              <div key={f.title} className="p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-[#00cec9]/30 transition-all">
                <div className="text-2xl mb-3">{f.icon}</div>
                <h3 className="font-semibold mb-1">{f.title}</h3>
                <p className="text-sm text-white/50 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Eve 机器人 */}
        <section className="p-6 rounded-2xl bg-gradient-to-br from-[#6c5ce7]/10 to-[#e94e9f]/10 border border-white/10">
          <h2 className="text-xl font-semibold mb-3">Eve — 具身智能陪伴机器人</h2>
          <p className="text-white/60 leading-relaxed mb-4">
            Eve 是 Openfans 生态的核心硬件产品。采用硅胶皮肤、高自由度关节、先进 AI 人格模型，
            能实现自然对话、情感识别、健康监测、智能家居控制等功能。
          </p>
          <div className="grid sm:grid-cols-3 gap-3">
            {[
              { spec: '处理器', val: '下一代 AI 芯片 12TOPS' },
              { spec: '自由度', val: '标准版 15 / Pro 25' },
              { spec: '续航', val: '标准版 8h / Pro 16h' },
              { spec: '皮肤', val: '医用级硅胶（可替换）' },
              { spec: '连接', val: 'WiFi 6 / BLE 5.3 / P2P' },
              { spec: '传感器', val: '摄像头 · 麦克风 · 触觉 · 红外' },
            ].map((s) => (
              <div key={s.spec} className="text-center p-3 rounded-xl bg-white/5">
                <div className="text-xs text-white/30">{s.spec}</div>
                <div className="text-sm font-medium mt-0.5">{s.val}</div>
              </div>
            ))}
          </div>
        </section>

        {/* 技术架构 */}
        <section className="p-6 rounded-2xl bg-white/5 border border-white/10">
          <h2 className="text-xl font-semibold mb-3">技术架构</h2>
          <div className="space-y-3">
            {[
              { layer: '前端', tech: 'Next.js 14 · TailwindCSS · TypeScript · 静态导出' },
              { layer: '智能合约', tech: 'Solidity · ERC-20 代币 · NFT 人格资产' },
              { layer: 'P2P 网络', tech: 'WebRTC · libp2p · 端到端加密' },
              { layer: 'AI 引擎', tech: '本地大模型推理 · 情感计算 · 语音合成' },
              { layer: '存储', tech: 'IPFS 去中心化存储 · 本地加密数据库' },
            ].map((t) => (
              <div key={t.layer} className="flex items-start gap-4">
                <span className="text-xs px-2 py-0.5 rounded-full bg-[#6c5ce7]/20 text-[#6c5ce7] shrink-0 mt-0.5">{t.layer}</span>
                <span className="text-sm text-white/50">{t.tech}</span>
              </div>
            ))}
          </div>
        </section>

        {/* 愿景 */}
        <section className="p-6 rounded-2xl border border-white/10 text-center bg-gradient-to-b from-white/5 to-transparent">
          <h2 className="text-xl font-semibold mb-3">我们的愿景</h2>
          <p className="text-white/50 leading-relaxed max-w-2xl mx-auto">
            让每个人都能拥有属于自己的 AI 陪伴，让创作者的价值回归创作者。
            Openfans 致力于构建一个人机共生、去中心化的粉丝经济新生态。
          </p>
          <p className="text-lg mt-4 font-medium bg-gradient-to-r from-[#e94e9f] to-[#00cec9] bg-clip-text text-transparent">
            You are the star.
          </p>
        </section>
      </div>
    </main>
  )
}
