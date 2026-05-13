import { motion } from 'framer-motion'

export default function Footer() {
  return (
    <footer className="relative pt-24 pb-12 overflow-hidden bg-[#FAF7F2]">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-30">
        <div className="gradient-orb orb-blush top-[-200px] left-[-200px] w-[600px] h-[600px]" />
      </div>

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-20">
          
          {/* Brand Column */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 bg-pink-100 rounded-full flex items-center justify-center">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#E89AAA" strokeWidth="1.5">
                  <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                </svg>
              </div>
              <h2 className="text-xl font-bold">Unapologetically KK</h2>
            </div>
            <p className="text-secondary leading-relaxed mb-8 max-w-sm">
              Empowering women to reclaim their peace, redefine their relationships, and live life on their own terms. Your journey to emotional freedom starts here.
            </p>
            <div className="flex gap-4">
              {['Instagram', 'LinkedIn', 'YouTube', 'Podcast'].map((social) => (
                <a key={social} href="#" className="w-10 h-10 rounded-full glass-card flex items-center justify-center text-secondary hover:text-pink-accent hover:border-pink-200 transition-all duration-300">
                  <span className="sr-only">{social}</span>
                  <div className="w-4 h-4 bg-current rounded-sm opacity-60" />
                </a>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          <div className="lg:col-span-4 grid grid-cols-2 gap-8">
            <div>
              <h3 className="font-bold text-main mb-8 tracking-widest uppercase text-xs">Quick Links</h3>
              <ul className="space-y-4">
                <li><a href="#" className="text-secondary hover:text-pink-accent transition-colors">Home</a></li>
                <li><a href="#coaching" className="text-secondary hover:text-pink-accent transition-colors">Coaching</a></li>
                <li><a href="#about" className="text-secondary hover:text-pink-accent transition-colors">About KK</a></li>
                <li><a href="#testimonials" className="text-secondary hover:text-pink-accent transition-colors">Success Stories</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-main mb-8 tracking-widest uppercase text-xs">Resources</h3>
              <ul className="space-y-4">
                <li><a href="#" className="text-secondary hover:text-pink-accent transition-colors">Free Guide</a></li>
                <li><a href="#" className="text-secondary hover:text-pink-accent transition-colors">Blog</a></li>
                <li><a href="#" className="text-secondary hover:text-pink-accent transition-colors">Podcast</a></li>
                <li><a href="#" className="text-secondary hover:text-pink-accent transition-colors">Foundation</a></li>
              </ul>
            </div>
          </div>

          {/* Newsletter Column */}
          <div className="lg:col-span-4">
            <div className="glass-card p-8 rounded-[40px] border-white/50">
              <h3 className="text-lg font-bold text-main mb-4">Stay Inspired</h3>
              <p className="text-sm text-secondary mb-6 leading-relaxed">
                Receive weekly insights on healing, boundaries, and relationship mastery directly in your inbox.
              </p>
              <form className="space-y-3">
                <input 
                  type="email" 
                  placeholder="Email address" 
                  className="w-full px-6 py-3 rounded-2xl bg-white/40 border border-white/40 focus:outline-none focus:ring-1 focus:ring-pink-200 text-sm"
                />
                <button className="btn-primary w-full py-3 text-sm">
                  Subscribe
                </button>
              </form>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-pink-100 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] font-bold tracking-widest text-secondary/50 uppercase">
            © 2026 UNAPOLOGETICALLY KK. ALL RIGHTS RESERVED.
          </p>
          <div className="flex gap-8">
            <a href="#" className="text-[10px] font-bold tracking-widest text-secondary/50 uppercase hover:text-pink-accent">Privacy Policy</a>
            <a href="#" className="text-[10px] font-bold tracking-widest text-secondary/50 uppercase hover:text-pink-accent">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
