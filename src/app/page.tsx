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
        <div className="max-w-7xl mx-auto px-4">
          <a href="https://x.com/openfansai" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 hover:text-primary transition-colors mb-2">
            <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
            @openfansai
          </a>
          <p>&copy; 2026 Openfans. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}
