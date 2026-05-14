import { motion } from 'framer-motion'
import { Award, Brain, Newspaper, Mic, Heart } from 'lucide-react'

export default function AuthoritySection() {
  const stats = [
    { title: '25+ Years of Experience', icon: <Award size={24} /> },
    { title: 'NLP, Hypnosis & Relationship Expert', icon: <Brain size={24} /> },
    { title: 'Featured in Leading Publications', icon: <Newspaper size={24} /> },
    { title: 'Top Relationship Podcast Host', icon: <Mic size={24} /> },
    { title: 'Kara Foundation Making an Impact', icon: <Heart size={24} /> }
  ]

  return (
    <section className="py-12 bg-transparent relative z-10">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="rounded-[48px] border border-white/40 shadow-[0_8px_40px_rgba(232,154,170,0.1)] overflow-hidden backdrop-blur-xl bg-white/40"
        >
          <div className="grid grid-cols-1 md:grid-cols-5">
            {stats.map((stat, index) => (
              <div
                key={index}
                className={`flex flex-col items-center py-12 px-6 relative group ${index !== stats.length - 1 ? 'md:border-r border-pink-100/30' : ''
                  }`}
              >
                {/* Icon Container */}
                <div className="w-14 h-14 rounded-full bg-white/50 backdrop-blur-md shadow-sm border border-white/60 flex items-center justify-center mb-5 group-hover:scale-110 group-hover:bg-white/80 transition-all duration-500 text-pink-accent">
                  {stat.icon}
                </div>

                <h3 className="text-[13px] font-semibold text-main/80 text-center leading-tight tracking-tight max-w-[160px] group-hover:text-main transition-colors duration-300">
                  {stat.title}
                </h3>

                <div className="absolute inset-0 bg-white/0 group-hover:bg-white/5 transition-colors duration-500 -z-10" />
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
