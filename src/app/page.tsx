import HeroAnimation from "@/components/HeroAnimation";

export default function Home() {
  return (
    <main>
      <HeroAnimation />

      <section className="max-w-7xl mx-auto px-4 py-16 md:py-24">
        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          <div className="p-8 rounded-2xl bg-white/5 border border-white/10 text-center">
            <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-gradient-to-br from-[#e94e9f] to-[#6c5ce7] flex items-center justify-center text-2xl">1</div>
            <h3 className="text-xl font-semibold mb-2">发现连接</h3>
            <p className="text-white/50 text-sm">P2P 硬直连，找到你的专属搭档</p>
          </div>
          <div className="p-8 rounded-2xl bg-white/5 border border-white/10 text-center">
            <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-gradient-to-br from-[#6c5ce7] to-[#00cec9] flex items-center justify-center text-2xl">2</div>
            <h3 className="text-xl font-semibold mb-2">Eve 机器人</h3>
            <p className="text-white/50 text-sm">具身智能硅胶陪伴，全天候守护</p>
          </div>
          <div className="p-8 rounded-2xl bg-white/5 border border-white/10 text-center">
            <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-gradient-to-br from-[#00cec9] to-[#e94e9f] flex items-center justify-center text-2xl">3</div>
            <h3 className="text-xl font-semibold mb-2">Web3 社区</h3>
            <p className="text-white/50 text-sm">去中心化粉丝经济，你就是明星</p>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 py-8 text-center text-white/30 text-sm">
        &copy; 2026 Openfans. All rights reserved.
      </footer>
    </main>
  );
}
