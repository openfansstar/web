'use client'

import { useLang } from '@/i18n/useLanguage'

export default function ReadmePage() {
  const { t } = useLang()
  return (
    <main className="pt-24 px-4 max-w-4xl mx-auto min-h-screen pb-24">
      <h1 className="text-4xl font-bold mb-8 bg-gradient-to-r from-[#00cec9] to-[#6c5ce7] bg-clip-text text-transparent">
        {t('about.title')}
      </h1>

      <div className="prose prose-invert max-w-none space-y-8">
        <section className="p-6 rounded-2xl bg-white/5 border border-white/10">
          <h2 className="text-xl font-semibold mb-3">{t('about.whatIs')}</h2>
          <p className="text-white/60 leading-relaxed">
            {t('about.whatIsDesc')}
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">{t('about.features')}</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              { icon: '🔗', title: 'P2P ' + t('about.featureP2P'), desc: t('about.featureP2PDesc') },
              { icon: '🤖', title: t('about.featureEve'), desc: t('about.featureEveDesc') },
              { icon: '🎭', title: t('about.featurePersonality'), desc: t('about.featurePersonalityDesc') },
              { icon: '💎', title: t('about.featureToken'), desc: t('about.featureTokenDesc') },
              { icon: '🛡️', title: t('about.featurePrivacy'), desc: t('about.featurePrivacyDesc') },
              { icon: '🌐', title: t('about.featureDAO'), desc: t('about.featureDAODesc') },
            ].map((f) => (
              <div key={f.title} className="p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-[#00cec9]/30 transition-all">
                <div className="text-2xl mb-3">{f.icon}</div>
                <h3 className="font-semibold mb-1">{f.title}</h3>
                <p className="text-sm text-white/50 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="p-6 rounded-2xl bg-gradient-to-br from-[#6c5ce7]/10 to-[#e94e9f]/10 border border-white/10">
          <h2 className="text-xl font-semibold mb-3">{t('about.eveSection')}</h2>
          <p className="text-white/60 leading-relaxed mb-4">
            {t('about.eveDesc')}
          </p>
          <div className="grid sm:grid-cols-3 gap-3">
            {[
              { spec: t('about.specProcessor'), val: '12 TOPS' },
              { spec: t('about.specDOF'), val: t('about.specDOFVal') },
              { spec: t('about.specBattery'), val: t('about.specBatteryVal') },
              { spec: t('about.specSkin'), val: t('about.specSkinVal') },
              { spec: t('about.specConnectivity'), val: 'WiFi 6 / BLE 5.3 / P2P' },
              { spec: t('about.specSensors'), val: t('about.specSensorsVal') },
            ].map((s) => (
              <div key={s.spec} className="text-center p-3 rounded-xl bg-white/5">
                <div className="text-xs text-white/30">{s.spec}</div>
                <div className="text-sm font-medium mt-0.5">{s.val}</div>
              </div>
            ))}
          </div>
        </section>

        <section className="p-6 rounded-2xl bg-white/5 border border-white/10">
          <h2 className="text-xl font-semibold mb-3">{t('about.techStack')}</h2>
          <div className="space-y-3">
            {[
              { layer: t('about.tsFrontend'), tech: 'Next.js 14 · TailwindCSS · TypeScript · Static Export' },
              { layer: t('about.tsContract'), tech: 'Solidity · ERC-20 Token · NFT Personality Assets' },
              { layer: t('about.tsP2P'), tech: 'WebRTC · libp2p · End-to-End Encryption' },
              { layer: t('about.tsAI'), tech: t('about.tsAIDesc') },
              { layer: t('about.tsStorage'), tech: t('about.tsStorageDesc') },
            ].map((item) => (
              <div key={item.layer} className="flex items-start gap-4">
                <span className="text-xs px-2 py-0.5 rounded-full bg-[#6c5ce7]/20 text-[#6c5ce7] shrink-0 mt-0.5">{item.layer}</span>
                <span className="text-sm text-white/50">{item.tech}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="p-6 rounded-2xl border border-white/10 text-center bg-gradient-to-b from-white/5 to-transparent">
          <h2 className="text-xl font-semibold mb-3">{t('about.vision')}</h2>
          <p className="text-white/50 leading-relaxed max-w-2xl mx-auto">
            {t('about.visionDesc')}
          </p>
          <p className="text-lg mt-4 font-medium bg-gradient-to-r from-[#e94e9f] to-[#00cec9] bg-clip-text text-transparent">
            You are the star.
          </p>
        </section>
      </div>
    </main>
  )
}
