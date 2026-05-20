'use client'

import { useState } from 'react'
import CreatorCard from '@/components/CreatorCard'
import { creators } from '@/data/creators'

const categories = ['全部', '在线', '温柔', '知性', '治愈', '活力', '科技', '萌系']

export default function DiscoverPage() {
  const [activeCat, setActiveCat] = useState('全部')
  const [search, setSearch] = useState('')

  const filtered = creators.filter((c) => {
    const matchCat =
      activeCat === '全部' ||
      (activeCat === '在线' && c.online) ||
      c.tags.includes(activeCat)
    const q = search.toLowerCase()
    const matchSearch =
      !q || c.name.toLowerCase().includes(q) || c.tags.some((t) => t.includes(q))
    return matchCat && matchSearch
  })

  return (
    <main className="pt-24 px-4 max-w-7xl mx-auto min-h-screen pb-24">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-[#e94e9f] to-[#6c5ce7] bg-clip-text text-transparent">发现</h1>
        <div className="text-sm text-white/40">
          {filtered.length} 位创作者在线
        </div>
      </div>

      <div className="relative mb-6">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="搜索创作者或标签..."
          className="w-full px-4 py-3 pl-10 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 focus:outline-none focus:border-[#e94e9f]/50"
        />
        <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path d="M21 21l-4.35-4.35M11 19a8 8 0 100-16 8 8 0 000 16z" />
        </svg>
      </div>

      <div className="flex gap-2 mb-8 overflow-x-auto pb-2 scrollbar-none">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCat(cat)}
            className={`shrink-0 px-4 py-1.5 rounded-full text-sm transition-all ${
              activeCat === cat
                ? 'bg-gradient-to-r from-[#e94e9f] to-[#6c5ce7] text-white'
                : 'bg-white/5 text-white/60 hover:bg-white/10'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {filtered.map((c) => (
          <CreatorCard
            key={c.id}
            creator={c}
            onConnect={() => alert(`P2P 连接请求已发送给 ${c.name}`)}
          />
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="text-center py-20 text-white/30">
          没有找到匹配的创作者
        </div>
      )}
    </main>
  )
}
