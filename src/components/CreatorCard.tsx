'use client'

import { Creator } from '@/data/creators'

const tagColors: Record<string, string> = {
  温柔: 'bg-pink-500/20 text-pink-300',
  知性: 'bg-purple-500/20 text-purple-300',
  音乐: 'bg-blue-500/20 text-blue-300',
  活力: 'bg-orange-500/20 text-orange-300',
  运动: 'bg-green-500/20 text-green-300',
  游戏: 'bg-cyan-500/20 text-cyan-300',
  治愈: 'bg-teal-500/20 text-teal-300',
  阅读: 'bg-yellow-500/20 text-yellow-300',
  咖啡: 'bg-amber-500/20 text-amber-300',
  科技: 'bg-indigo-500/20 text-indigo-300',
  AI: 'bg-violet-500/20 text-violet-300',
  哲学: 'bg-fuchsia-500/20 text-fuchsia-300',
  艺术: 'bg-rose-500/20 text-rose-300',
  摄影: 'bg-sky-500/20 text-sky-300',
  旅行: 'bg-emerald-500/20 text-emerald-300',
  萌系: 'bg-pink-400/20 text-pink-200',
  可爱: 'bg-red-400/20 text-red-200',
  舞蹈: 'bg-orange-400/20 text-orange-200',
  御姐: 'bg-red-500/20 text-red-300',
  职场: 'bg-slate-500/20 text-slate-300',
  红酒: 'bg-rose-600/20 text-rose-400',
  甜系: 'bg-pink-300/20 text-pink-100',
  萝莉: 'bg-purple-300/20 text-purple-100',
  撒娇: 'bg-fuchsia-300/20 text-fuchsia-100',
}

const tagTranslations: Record<string, string> = {
  '温柔': 'Gentle', '知性': 'Intellectual', '音乐': 'Music',
  '活力': 'Energetic', '运动': 'Sports', '游戏': 'Gaming',
  '治愈': 'Healing', '阅读': 'Reading', '咖啡': 'Coffee',
  科技: 'Tech', AI: 'AI', 哲学: 'Philosophy',
  艺术: 'Art', 摄影: 'Photography', 旅行: 'Travel',
  萌系: 'Cute', 可爱: 'Lovely', 舞蹈: 'Dance',
  御姐: 'Mature', 职场: 'Office', 红酒: 'Wine',
  甜系: 'Sweet', 萝莉: 'Loli', 撒娇: 'Playful',
}

export default function CreatorCard({ creator, onConnect, lang }: { creator: Creator; onConnect: () => void; lang: string }) {
  const isZh = lang === 'zh'
  return (
    <div className="group relative rounded-2xl bg-card border-theme overflow-hidden transition-all" style={{ borderColor: 'var(--border-color)' }}
      onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'rgba(233,78,159,0.4)'; e.currentTarget.style.backgroundColor = 'var(--bg-card-hover)' }}
      onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'var(--border-color)'; e.currentTarget.style.backgroundColor = 'var(--bg-card)' }}>
      <div className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div className="relative">
            <img src={creator.avatar} alt={creator.name} className="w-16 h-16 rounded-full bg-card-hover" />
            {creator.online && (
              <span className="absolute -bottom-0.5 -right-0.5 w-4 h-4 bg-green-400 rounded-full" style={{ border: '2px solid var(--bg-primary)' }} />
            )}
          </div>
          <div className="text-right">
            <div className="text-xs text-muted">{creator.online ? (isZh ? '在线' : 'Online') : (isZh ? '离线' : 'Offline')}</div>
            <div className="text-lg font-bold text-[#e94e9f]">${creator.price}</div>
            <div className="text-xs text-muted">{isZh ? '/ 小时' : '/ hr'}</div>
          </div>
        </div>

        <div className="flex items-center gap-2 mb-1">
          <h3 className="font-semibold text-lg">{creator.name}</h3>
          <span className="text-xs text-muted">{creator.age}</span>
          <div className="flex items-center gap-0.5 ml-auto">
            <span className="text-yellow-400 text-xs">★</span>
            <span className="text-xs text-secondary">{creator.rating}</span>
          </div>
        </div>

        <p className="text-sm text-secondary mb-3 line-clamp-2">{isZh ? creator.bio : creator.bioEn}</p>

        <div className="flex flex-wrap gap-1.5 mb-4">
          {creator.tags.map((t) => (
            <span key={t} className={`text-xs px-2 py-0.5 rounded-full ${tagColors[t] || 'bg-card-hover text-nav-link'}`}>
              {isZh ? t : (tagTranslations[t] || t)}
            </span>
          ))}
        </div>

        <div className="flex items-center justify-between">
          <span className="text-xs text-muted">{creator.followers} {isZh ? '粉丝' : 'fans'}</span>
          <button
            onClick={onConnect}
            className="px-4 py-1.5 rounded-full bg-gradient-to-r from-[#e94e9f] to-[#6c5ce7] text-white text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity"
          >
            {isZh ? 'P2P 连接' : 'P2P Connect'}
          </button>
        </div>
      </div>
    </div>
  )
}
