import { motion } from 'framer-motion'

export default function BlogSection() {
  const posts = [
    {
      title: 'Finding Your Voice in a Noisy Relationship',
      date: 'MAY 12, 2026',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=800',
      category: 'SELF-WORTH'
    },
    {
      title: 'The Art of Setting Healthy Boundaries',
      date: 'MAY 08, 2026',
      image: 'https://images.unsplash.com/photo-1516589174184-c68526671ee6?auto=format&fit=crop&q=80&w=800',
      category: 'RELATIONSHIPS'
    },
    {
      title: 'Healing After Emotional Burnout',
      date: 'MAY 01, 2026',
      image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=800',
      category: 'HEALING'
    }
  ]

  return (
    <section className="section-padding bg-[#FAF7F2]">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <span className="label-caps mb-4 block">FROM THE BLOG</span>
            <h2 className="text-4xl lg:text-5xl font-bold text-main">Insights to Inspire Your Journey</h2>
          </div>
          <button className="text-pink-accent font-bold tracking-widest text-xs uppercase border-b-2 border-pink-100 hover:border-pink-accent transition-all pb-1">
            View All Posts
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {posts.map((post, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-[40px] mb-8 aspect-[4/3] shadow-lg">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-6 left-6">
                  <span className="glass-card py-2 px-4 rounded-full text-[10px] font-bold tracking-widest uppercase text-main border-white/50">
                    {post.category}
                  </span>
                </div>
              </div>
              <p className="text-[10px] font-bold tracking-[0.2em] text-secondary/60 mb-4 uppercase">
                {post.date}
              </p>
              <h3 className="text-2xl font-bold text-main mb-6 leading-tight group-hover:text-pink-accent transition-colors duration-300">
                {post.title}
              </h3>
              <a href="#" className="flex items-center gap-2 text-sm font-bold text-main group-hover:gap-4 transition-all duration-300">
                Read More 
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
