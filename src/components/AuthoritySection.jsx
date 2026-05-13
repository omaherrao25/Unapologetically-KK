import { motion } from 'framer-motion'

export default function AuthoritySection() {
  const stats = [
    { title: '25+ Years of Experience', desc: 'Guiding women through deep emotional healing.', icon: '🏆' },
    { title: 'NLP & Hypnosis Expert', desc: 'Certified master in subconscious transformation.', icon: '🧠' },
    { title: 'Featured Nationally', desc: 'Leading relationship voice in top publications.', icon: '📰' },
    { title: 'Top Podcast Host', desc: 'Empowering thousands through weekly insights.', icon: '🎙️' },
    { title: 'Kara Foundation', desc: 'Making a tangible impact on global wellness.', icon: '🤝' }
  ]

  return (
    <section className="section-padding bg-[#FAF7F2]">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="glass-card p-8 rounded-[40px] flex flex-col items-center text-center border-none shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="text-4xl mb-6">{stat.icon}</div>
              <h3 className="text-base font-bold text-main mb-2 leading-tight">
                {stat.title}
              </h3>
              <p className="text-xs text-secondary leading-relaxed">
                {stat.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
