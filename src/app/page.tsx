'use client'

import HeroAnimation from "@/components/HeroAnimation";
import { useLang } from "@/i18n/useLanguage";

export default function Home() {
  const { t } = useLang()
  return (
    <main>
      <HeroAnimation />
      <section className="max-w-7xl mx-auto px-4 py-16 md:py-24">
        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          <div className="p-8 rounded-2xl bg-card border-theme text-center">
            <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-gradient-to-br from-[#e94e9f] to-[#6c5ce7] flex items-center justify-center text-2xl">1</div>
            <h3 className="text-xl font-semibold mb-2">{t('home.feature1.title')}</h3>
            <p className="text-secondary text-sm">{t('home.feature1.desc')}</p>
          </div>
          <div className="p-8 rounded-2xl bg-card border-theme text-center">
            <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-gradient-to-br from-[#6c5ce7] to-[#00cec9] flex items-center justify-center text-2xl">2</div>
            <h3 className="text-xl font-semibold mb-2">{t('home.feature2.title')}</h3>
            <p className="text-secondary text-sm">{t('home.feature2.desc')}</p>
          </div>
          <div className="p-8 rounded-2xl bg-card border-theme text-center">
            <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-gradient-to-br from-[#00cec9] to-[#e94e9f] flex items-center justify-center text-2xl">3</div>
            <h3 className="text-xl font-semibold mb-2">{t('home.feature3.title')}</h3>
            <p className="text-secondary text-sm">{t('home.feature3.desc')}</p>
          </div>
        </div>
      </section>
      <footer className="border-t border-theme py-8 text-center text-muted text-sm">
        &copy; 2026 Openfans. All rights reserved.
      </footer>
    </main>
  );
}
