import React from 'react'
import { CALENDLY_URL, EMAIL, SITE_NAME, SITE_TAGLINE } from '../../constants'

function MailIcon() {
  return (
    <svg className="w-4 h-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  )
}

function InstagramIcon() {
  return (
    <svg className="w-4 h-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <rect x="2" y="2" width="20" height="20" rx="5" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="12" cy="12" r="4" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="17.5" cy="6.5" r="0.75" fill="currentColor" stroke="none" />
    </svg>
  )
}

function CalendarIcon() {
  return (
    <svg className="w-4 h-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
    </svg>
  )
}

export default function Footer() {
  return (
    <footer className="bg-slate-dark">
      <div className="max-w-7xl mx-auto px-6 md:px-16 py-16 grid grid-cols-1 md:grid-cols-3 gap-12">
        <div className="flex flex-col gap-5">
          <div>
            <p className="font-serif tracking-widest text-ivory text-sm font-light">
              {SITE_NAME.toUpperCase()}
            </p>
            <p className="font-sans text-tag uppercase tracking-widest text-bronze-light mt-1">
              {SITE_TAGLINE}
            </p>
          </div>
          <p className="font-sans text-xs text-ivory/40 font-light leading-relaxed">
            Helping women stop living in survival mode and take back their peace through focused,
            results-driven relationship coaching.
          </p>
          <div className="border border-white/10 rounded px-3 py-2 w-fit">
            <p className="font-sans text-tag uppercase tracking-widest text-bronze-light">
              PCC Certified Coach
            </p>
            <p className="font-sans text-xs text-ivory/40 mt-1">
              International Coaching Federation
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <p className="font-sans text-tag uppercase tracking-widest text-ivory/50 mb-2">
            Navigation
          </p>
          {[
            { label: 'Home', href: '#' },
            { label: 'Coaching', href: '#process' },
            { label: 'About', href: '#why-me' },
            { label: 'Foundation', href: '#foundation' },
            { label: 'Book a Call', href: CALENDLY_URL },
          ].map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="font-sans text-xs text-ivory/50 hover:text-bronze-light transition-colors"
              {...(link.href.startsWith('http')
                ? { target: '_blank', rel: 'noopener noreferrer' }
                : {})}
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex flex-col gap-4">
          <p className="font-sans text-tag uppercase tracking-widest text-ivory/50 mb-2">
            Connect
          </p>
          <a
            href={`mailto:${EMAIL}`}
            className="flex items-center gap-2 font-sans text-xs text-ivory/50 hover:text-bronze-light transition-colors"
          >
            <MailIcon />
            {EMAIL}
          </a>
          <a
            href="https://instagram.com/unapologeticallykk"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 font-sans text-xs text-ivory/50 hover:text-bronze-light transition-colors"
          >
            <InstagramIcon />
            @unapologeticallykk
          </a>
          <a
            href={CALENDLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 font-sans text-xs text-ivory/50 hover:text-bronze-light transition-colors"
          >
            <CalendarIcon />
            Book a Free Strategy Call
          </a>
        </div>
      </div>

      <div className="bg-[#1A2D37] px-6 md:px-16 py-4 flex flex-col sm:flex-row items-center justify-between gap-2">
        <p className="font-sans text-xs text-ivory/25">© 2025 Kanchan Kulkarni · UAKK</p>
        <div className="flex gap-4">
          <a href="#" className="font-sans text-xs text-ivory/25 hover:text-ivory/50 transition-colors">
            Privacy
          </a>
          <a href="#" className="font-sans text-xs text-ivory/25 hover:text-ivory/50 transition-colors">
            Terms
          </a>
        </div>
      </div>
    </footer>
  )
}
