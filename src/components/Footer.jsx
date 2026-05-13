import { useState } from 'react'
import { motion } from 'framer-motion'
import { Instagram, Facebook, Youtube, Twitter, Send } from 'lucide-react'

const footerLinks = {
  'Quick Links': ['Home', 'Relationship Coaching', 'About KK', 'Kara Foundation'],
  'Resources': ['Blog', 'Podcast', 'Testimonials', 'Contact'],
  'Legal': ['Privacy Policy', 'Terms of Use'],
}

const socials = [
  { Icon: Instagram, href: 'https://instagram.com', label: 'Instagram' },
  { Icon: Facebook, href: 'https://facebook.com', label: 'Facebook' },
  { Icon: Youtube, href: 'https://youtube.com', label: 'YouTube' },
  { Icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
]

export default function Footer() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubscribe = (e) => {
    e.preventDefault()
    if (email) { setSubmitted(true); setEmail('') }
  }

  return (
    <footer
      className="relative overflow-hidden"
      style={{ background: '#EFE7DD' }}
    >
      {/* Top border */}
      <div className="h-px w-full"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(200,169,107,0.4), transparent)' }} />

      <div className="max-w-7xl mx-auto px-6 lg:px-10 pt-20 pb-8">
        {/* Main footer grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">

          {/* Brand column */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 rounded-full border border-gold/40 flex items-center justify-center">
                <div className="w-3 h-3 rounded-full bg-gradient-to-br from-gold to-rose opacity-80" />
              </div>
              <div>
                <p className="font-serif text-base font-semibold text-charcoal leading-tight">
                  Kanchan Kulkarni
                </p>
                <p className="eyebrow text-[0.6rem]">Relationship Expert</p>
              </div>
            </div>

            <p className="font-sans text-sm text-charcoal-muted leading-relaxed mb-8 max-w-xs">
              Helping women reclaim themselves, set boundaries, and create relationships 
              filled with love, peace and joy.
            </p>

            {/* Socials */}
            <div className="flex gap-3">
              {socials.map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full border border-gold/20 flex items-center justify-center text-charcoal-muted hover:text-gold hover:border-gold/50 hover:bg-gold/5 transition-all duration-300 hover:-translate-y-0.5"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Nav columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <p className="font-sans text-xs font-semibold text-charcoal tracking-widest uppercase mb-5">
                {category}
              </p>
              <ul className="space-y-3">
                {links.map(link => (
                  <li key={link}>
                    <a
                      href="#"
                      className="font-sans text-sm text-charcoal-muted hover:text-gold transition-colors duration-300"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Newsletter */}
          <div className="lg:col-span-1 md:col-span-2">
            <p className="font-sans text-xs font-semibold text-charcoal tracking-widest uppercase mb-5">
              Stay Connected
            </p>
            <p className="font-sans text-sm text-charcoal-muted mb-5 leading-relaxed">
              Join my newsletter for insights, tips and updates.
            </p>
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center gap-2 text-gold"
              >
                <span>✓</span>
                <p className="font-sans text-sm">You're on the list!</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="flex-1 min-w-0 px-4 py-3 rounded-full border border-gold/20 bg-white/60 font-sans text-sm text-charcoal placeholder-charcoal-muted/50 focus:outline-none focus:border-gold/50 focus:ring-1 focus:ring-gold/20 transition-all"
                />
                <button
                  type="submit"
                  className="w-11 h-11 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-luxury"
                  style={{ background: 'linear-gradient(135deg, #C8A96B, #B89050)' }}
                  aria-label="Subscribe"
                >
                  <Send size={14} className="text-white" />
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gold/15 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-sans text-xs text-charcoal-muted">
            © {new Date().getFullYear()} Unapologetically KK. All Rights Reserved.
          </p>
          <p className="font-serif italic text-xs text-charcoal-muted">
            Designed with love, for women who deserve more ♡
          </p>
        </div>
      </div>
    </footer>
  )
}
