export interface Creator {
  id: number
  name: string
  avatar: string
  age: number
  tags: string[]
  bio: string
  bioEn: string
  online: boolean
  price: number
  rating: number
  followers: string
}

export const creators: Creator[] = [
  { id: 1, name: 'Luna', avatar: 'https://api.dicebear.com/9.x/avataaars/svg?seed=1', age: 24, tags: ['温柔', '知性', '音乐'], bio: '喜欢夜晚长谈，分享生活点滴', bioEn: 'Loves late-night talks, sharing life moments', online: true, price: 299, rating: 4.9, followers: '12.3k' },
  { id: 2, name: 'Aria', avatar: 'https://api.dicebear.com/9.x/avataaars/svg?seed=2', age: 22, tags: ['活力', '运动', '游戏'], bio: '陪你打游戏，也陪你跑步', bioEn: 'Game buddy and running partner', online: true, price: 199, rating: 4.8, followers: '8.7k' },
  { id: 3, name: 'Yuki', avatar: 'https://api.dicebear.com/9.x/avataaars/svg?seed=3', age: 26, tags: ['治愈', '阅读', '咖啡'], bio: '一杯咖啡，一本好书，一段对话', bioEn: 'Coffee, a good book, and meaningful conversation', online: false, price: 249, rating: 4.7, followers: '6.2k' },
  { id: 4, name: 'Eva', avatar: 'https://api.dicebear.com/9.x/avataaars/svg?seed=4', age: 23, tags: ['科技', 'AI', '哲学'], bio: '聊科技趋势，也聊人生意义', bioEn: 'Discusses tech trends and the meaning of life', online: true, price: 349, rating: 4.9, followers: '15.1k' },
  { id: 5, name: 'Mia', avatar: 'https://api.dicebear.com/9.x/avataaars/svg?seed=5', age: 25, tags: ['艺术', '摄影', '旅行'], bio: '用镜头记录世界，用故事温暖你', bioEn: 'Captures the world through lenses, warms you with stories', online: false, price: 279, rating: 4.6, followers: '4.8k' },
  { id: 6, name: 'Nova', avatar: 'https://api.dicebear.com/9.x/avataaars/svg?seed=6', age: 21, tags: ['萌系', '可爱', '舞蹈'], bio: '元气满满的一天从早安开始', bioEn: 'A vibrant day starts with a warm good morning', online: true, price: 159, rating: 4.5, followers: '9.3k' },
  { id: 7, name: 'Iris', avatar: 'https://api.dicebear.com/9.x/avataaars/svg?seed=7', age: 27, tags: ['御姐', '职场', '红酒'], bio: '职场丽人，成熟魅力的对话', bioEn: 'Powerful professional with mature charm', online: true, price: 399, rating: 4.8, followers: '11.5k' },
  { id: 8, name: 'Coco', avatar: 'https://api.dicebear.com/9.x/avataaars/svg?seed=8', age: 20, tags: ['甜系', '萝莉', '撒娇'], bio: '甜甜的声音，陪你度过每一天', bioEn: 'Sweet voice to brighten your every day', online: false, price: 129, rating: 4.4, followers: '7.6k' },
]
