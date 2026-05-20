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

export default function CreatorCard({ creator, onConnect }: { creator: Creator; onConnect: () => void }) {
  return (
    <div className="group relative rounded-2xl bg-white/5 border border-white/10 overflow-hidden hover:border-[#e94e9f]/40 hover:bg-white/[0.07] transition-all">
      <div className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div className="relative">
            <img src={creator.avatar} alt={creator.name} className="w-16 h-16 rounded-full bg-white/10" />
            {creator.online && (
              <span className="absolute -bottom-0.5 -right-0.5 w-4 h-4 bg-green-400 border-2 border-[#0f0f1a] rounded-full" />
            )}
          </div>
          <div className="text-right">
            <div className="text-xs text-white/40">{creator.online ? '在线' : '离线'}</div>
            <div className="text-lg font-bold text-[#e94e9f]">${creator.price}</div>
            <div className="text-xs text-white/40">/ 小时</div>
          </div>
        </div>

        <div className="flex items-center gap-2 mb-1">
          <h3 className="font-semibold text-lg">{creator.name}</h3>
          <span className="text-xs text-white/30">{creator.age}</span>
          <div className="flex items-center gap-0.5 ml-auto">
            <span className="text-yellow-400 text-xs">★</span>
            <span className="text-xs text-white/50">{creator.rating}</span>
          </div>
        </div>

        <p className="text-sm text-white/50 mb-3 line-clamp-2">{creator.bio}</p>

        <div className="flex flex-wrap gap-1.5 mb-4">
          {creator.tags.map((t) => (
            <span key={t} className={`text-xs px-2 py-0.5 rounded-full ${tagColors[t] || 'bg-white/10 text-white/60'}`}>
              {t}
            </span>
          ))}
        </div>

        <div className="flex items-center justify-between">
          <span className="text-xs text-white/30">{creator.followers} 粉丝</span>
          <button
            onClick={onConnect}
            className="px-4 py-1.5 rounded-full bg-gradient-to-r from-[#e94e9f] to-[#6c5ce7] text-white text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity"
          >
            P2P 连接
          </button>
        </div>
      </div>
    </div>
  )
}
