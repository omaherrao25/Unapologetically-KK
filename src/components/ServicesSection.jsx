import { motion } from 'framer-motion'

export default function ServicesSection() {
  const services = [
    {
      title: '1:1 Private Coaching',
      desc: 'Exclusive, personalized guidance for the woman who is ready for a radical transformation.',
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zM12 14c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
        </svg>
      ),
      cta: 'Book Your Session'
    },
    {
      title: 'Group Programs',
      desc: 'Join a community of like-minded women on a shared journey of healing and reclamation.',
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2M9 7a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      ),
      cta: 'Explore Programs'
    },
    {
      title: 'Speaking & Events',
      desc: 'Immersive workshops and powerful keynote sessions designed to inspire and empower.',
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
        </svg>
      ),
      cta: 'Book KK to Speak'
    }
  ]

  return (
    <section id="coaching" className="section-padding bg-[#FDFBF9] relative overflow-hidden">
      {/* Soft Gradients */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-pink-50/50 to-transparent pointer-events-none" />
      
      <div className="container-custom relative z-10">
        <div className="text-center mb-20">
          <span className="label-caps mb-4 block">TAILORED SUPPORT</span>
          <h2 className="text-4xl lg:text-5xl font-bold text-main">Coaching That Meets You Where You Are</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className="glass-card p-12 rounded-[48px] flex flex-col items-center text-center group hover:bg-white/80 transition-all duration-500"
            >
              <div className="w-20 h-20 rounded-3xl bg-pink-50 flex items-center justify-center text-pink-accent mb-8 group-hover:scale-110 transition-transform duration-500">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold text-main mb-4">{service.title}</h3>
              <p className="text-secondary mb-10 leading-relaxed">
                {service.desc}
              </p>
              <button className="btn-secondary w-full group-hover:bg-pink-accent group-hover:text-white transition-all duration-300">
                {service.cta}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
