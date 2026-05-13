import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative min-h-screen pt-32 pb-20 overflow-hidden flex items-center z-10">
      <div className="container-custom relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="z-20"
          >
            <span className="label-caps mb-6 block text-muted-rose font-bold">YOU’VE HELD EVERYTHING TOGETHER.</span>
            <h2 className="text-6xl lg:text-7xl font-bold leading-[1.1] mb-8 text-main">
              Now it’s time to <br />
              <span className="text-pink-accent">reclaim yourself.</span>
            </h2>
            <p className="text-lg text-secondary mb-10 max-w-lg leading-relaxed">
              Helping women break free from relationship burnout, rebuild self-worth, and create peaceful, fulfilling relationships.
            </p>

            <div className="flex flex-wrap gap-5 mb-12">
              <a href="#resource" className="btn-primary py-4 px-10 shadow-xl">
                Book Your Free Strategy Call
              </a>
              <a href="#coaching" className="btn-secondary py-4 px-10">
                Learn How I Can Help
              </a>
            </div>

            {/* Trusted By */}
            <div className="flex items-center gap-4">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-pink-100 flex items-center justify-center overflow-hidden">
                    <img src={`https://i.pravatar.cc/100?img=${i + 20}`} alt="User" />
                  </div>
                ))}
              </div>
              <div>
                <div className="flex text-yellow-500 text-sm mb-0.5">
                  {"★★★★★"} <span className="ml-2 text-main font-bold">4.9</span>
                </div>
                <p className="text-xs font-semibold text-secondary tracking-tight">
                  Trusted by 1,000+ Women Worldwide
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Content: Image & Floating Cards */}
          <div className="relative flex justify-center lg:justify-end">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="relative w-full max-w-[500px]"
            >
              {/* Main Image Container */}
              <div className="relative z-10 rounded-[60px] overflow-hidden aspect-[4/5] shadow-2xl">
                <img
                  src="/brain/7f8f530d-429f-43bc-a2bd-d510b060a96d/kk_hero_portrait_1778667131005.png"
                  alt="Kanchan Kulkarni"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Floating Quote Card - EXACT MATCH to image placement */}
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="absolute top-1/2 -right-12 lg:-right-20 transform -translate-y-1/2 z-30 glass-card rounded-[40px] p-10 max-w-[280px] shadow-2xl border-white/60"
              >
                <div className="text-pink-accent text-5xl font-serif mb-6 opacity-30 leading-none">“</div>
                <p className="text-main font-semibold italic text-xl leading-tight mb-4">
                  You deserve love, peace and a life that feels like you again.
                </p>
                <div className="flex justify-end">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#E89AAA" strokeWidth="1" opacity="0.5">
                    <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                  </svg>
                </div>
              </motion.div>

              {/* Backing Glow / Decoration */}
              <div className="absolute -z-10 top-0 left-0 w-full h-full bg-pink-100/30 rounded-full blur-[100px]" />
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  )
}
