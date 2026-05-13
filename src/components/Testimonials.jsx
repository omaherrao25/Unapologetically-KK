import { motion } from 'framer-motion'

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Priya S.',
      location: 'Mumbai',
      text: 'Kanchan helped me see patterns I never knew existed. My marriage has been transformed from constant conflict to deep understanding.',
      image: 'https://i.pravatar.cc/150?u=priya'
    },
    {
      name: 'Anjali K.',
      location: 'London',
      text: 'I finally reclaimed my peace. The Emotional Reclamation Method is not just coaching; it is a life-changing spiritual journey.',
      image: 'https://i.pravatar.cc/150?u=anjali'
    },
    {
      name: 'Meera R.',
      location: 'New York',
      text: 'Working with KK was the best investment I ever made for myself. I am now more confident and at peace than I have ever been.',
      image: 'https://i.pravatar.cc/150?u=meera'
    }
  ]

  return (
    <section id="testimonials" className="section-padding relative overflow-hidden bg-[#FAF7F2]">
      {/* Floating Circles */}
      <div className="absolute top-1/4 -left-20 w-64 h-64 glass-card rounded-full blur-2xl opacity-20 animate-float" />
      <div className="absolute bottom-1/4 -right-20 w-80 h-80 glass-card rounded-full blur-3xl opacity-30 animate-float" style={{ animationDelay: '2s' }} />

      <div className="container-custom relative z-10">
        <div className="text-center mb-20">
          <span className="label-caps mb-4 block">REAL WOMEN. REAL STORIES. REAL RESULTS.</span>
          <h2 className="text-4xl lg:text-5xl font-bold text-main">Success Stories</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {testimonials.map((t, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className="glass-card p-10 rounded-[40px] flex flex-col h-full relative"
            >
              <div className="text-pink-accent text-5xl font-serif mb-6 opacity-40 leading-none">“</div>
              <p className="text-lg text-main mb-8 flex-grow leading-relaxed italic">
                {t.text}
              </p>
              <div className="flex items-center gap-4 mt-auto">
                <img src={t.image} alt={t.name} className="w-14 h-14 rounded-full object-cover border-2 border-white" />
                <div>
                  <h4 className="font-bold text-main">{t.name}</h4>
                  <p className="text-xs text-secondary tracking-widest uppercase">{t.location}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <button className="btn-secondary">
            Read More Success Stories
          </button>
        </div>
      </div>
    </section>
  )
}
