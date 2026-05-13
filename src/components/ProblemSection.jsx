import { motion } from 'framer-motion'

export default function ProblemSection() {
  const points = [
    { title: 'Emotionally exhausted', icon: 'M12 21l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.18L12 21z' },
    { title: 'Always giving, never receiving', icon: 'M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm1 14.5h-2V13H8.5v-2H11V8.5h2V11h2.5v2H13v3.5z' },
    { title: 'Stuck in the same patterns', icon: 'M12 4V1L8 5l4 4V6c3.31 0 6 2.69 6 6 0 1.01-.25 1.97-.7 2.8l1.46 1.46A7.93 7.93 0 0 0 20 12c0-4.42-3.58-8-8-8zm-7.3 4.2L3.24 6.74A7.93 7.93 0 0 0 4 12c0 4.42 3.58 8 8 8v3l4-4-4-4v3c-3.31 0-6-2.69-6-6 0-1.01.25-1.97.7-2.8z' },
    { title: 'Anxious, overwhelmed & disconnected', icon: 'M13 1.07V9h7c0-4.08-3.05-7.44-7-7.93zM4 15c0 4.42 3.58 8 8 8s8-3.58 8-8v-4H4v4zm7.19-13.93c-3.95.49-7 3.85-7 7.93h7V1.07z' },
    { title: 'Lost touch with yourself', icon: 'M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z' }
  ]

  return (
    <section className="relative z-20 -mt-24 px-6 mb-20">
      <div className="container-custom">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="rounded-[48px] border border-white/20 shadow-[0_8px_40px_rgba(232,154,170,0.1)] overflow-hidden backdrop-blur-[40px] bg-white/5"
        >
          <div className="grid grid-cols-1 md:grid-cols-5">
            {points.map((point, index) => (
              <div 
                key={index}
                className={`flex flex-col items-center py-14 px-6 relative group ${
                  index !== points.length - 1 ? 'md:border-r border-white/5' : ''
                }`}
              >
                {/* Icon in Circle - More transparent */}
                <div className="w-16 h-16 rounded-full bg-white/30 backdrop-blur-md shadow-sm border border-white/30 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-white/50 transition-all duration-500">
                   <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="text-pink-accent">
                    <path d={point.icon} />
                  </svg>
                </div>
                
                <h3 className="text-[13px] font-semibold text-main/70 text-center leading-tight tracking-tight max-w-[140px] group-hover:text-main transition-colors duration-300">
                  {point.title}
                </h3>

                <div className="absolute inset-0 bg-white/0 group-hover:bg-white/5 transition-colors duration-500" />
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
