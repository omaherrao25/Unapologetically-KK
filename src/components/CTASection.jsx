import { motion } from 'framer-motion'

export default function CTASection() {
  return (
    <section id="resource" className="section-padding relative overflow-hidden bg-[#F6E7E7]/30">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-1/2 h-full pointer-events-none opacity-20">
        <svg viewBox="0 0 400 400" className="w-full h-full text-pink-300">
          <path fill="currentColor" d="M320,160C320,248.4,248.4,320,160,320S0,248.4,0,160S71.6,0,160,0S320,71.6,320,160z" opacity="0.3" transform="translate(100, 100)" />
        </svg>
      </div>

      <div className="container-custom relative z-10">
        <div className="glass-card rounded-[64px] overflow-hidden p-12 lg:p-20 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center border-white/40">
          
          {/* Left: Ebook Mockup */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex justify-center"
          >
            <div className="relative group">
              <div className="absolute -inset-4 bg-pink-200/30 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <img 
                src="/brain/7f8f530d-429f-43bc-a2bd-d510b060a96d/ebook_mockup_1778667754086.png" 
                alt="Free Guide: 5 Steps to Reclaim Your Peace & Power" 
                className="w-full max-w-[400px] rounded-2xl shadow-2xl transform transition-transform duration-700 group-hover:rotate-2 group-hover:scale-105"
              />
            </div>
          </motion.div>

          {/* Right: Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="label-caps mb-6 block">FREE RESOURCE</span>
            <h2 className="text-4xl lg:text-5xl font-bold text-main mb-6 leading-tight">
              5 Steps to Reclaim Your Peace & Power
            </h2>
            <p className="text-lg text-secondary mb-10 leading-relaxed">
              Start your transformation journey today with this exclusive guide. Simple, actionable steps to help you break free from survival mode and rediscover your true self.
            </p>

            <form className="flex flex-col sm:flex-row gap-4">
              <input 
                type="email" 
                placeholder="Enter your email address" 
                className="flex-grow px-8 py-4 rounded-full bg-white/60 border border-white/50 focus:outline-none focus:ring-2 focus:ring-pink-200 text-main placeholder:text-secondary/50 backdrop-blur-sm"
              />
              <button type="submit" className="btn-primary whitespace-nowrap">
                Get Free Guide
              </button>
            </form>
            
            <p className="text-xs text-secondary/60 mt-4 px-4 italic">
              Your privacy is respected. Unsubscribe at any time.
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
