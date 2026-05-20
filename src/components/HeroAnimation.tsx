'use client'

import { useEffect, useState } from 'react'
import { useLang } from '@/i18n/useLanguage'

const TOTAL_IMAGES = 10

export default function HeroAnimation() {
  const { t } = useLang()
  const [current, setCurrent] = useState(0)
  const [prev, setPrev] = useState(9)

  useEffect(() => {
    const timer = setInterval(() => {
      setPrev(current)
      setCurrent((c) => (c + 1) % TOTAL_IMAGES)
    }, 2500)
    return () => clearInterval(timer)
  }, [current])

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {Array.from({ length: TOTAL_IMAGES }, (_, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-all duration-1000 ${
            i === current
              ? 'opacity-100 scale-100'
              : i === prev
                ? 'opacity-0 scale-105'
                : 'opacity-0 scale-95'
          }`}
        >
          <img
            src={`/eve${i + 1}.png`}
            alt={`Eve ${i + 1}`}
            className="h-full w-full object-cover"
          />
        </div>
      ))}

      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0f0f1a]" />

      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-[#e94e9f] via-[#6c5ce7] to-[#00cec9] bg-clip-text text-transparent mb-4">
          Openfans
        </h1>
        <p className="text-xl md:text-2xl text-white/70 max-w-xl">
          You are the star.
        </p>
        <div className="flex gap-6 mt-10">
          <a
            href="/discover"
            className="px-8 py-3 rounded-full bg-gradient-to-r from-[#e94e9f] to-[#6c5ce7] text-white font-semibold text-lg hover:opacity-90 transition-opacity"
          >
            {t('hero.explore')}
          </a>
          <a
            href="/console"
            className="px-8 py-3 rounded-full border border-white/30 text-white/80 font-semibold text-lg hover:bg-white/10 transition-colors"
          >
            {t('hero.console')}
          </a>
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
        {Array.from({ length: TOTAL_IMAGES }, (_, i) => (
          <button
            key={i}
            onClick={() => { setPrev(current); setCurrent(i) }}
            className={`w-2 h-2 rounded-full transition-all ${
              i === current ? 'bg-white w-6' : 'bg-white/40'
            }`}
          />
        ))}
      </div>
    </section>
  )
}
