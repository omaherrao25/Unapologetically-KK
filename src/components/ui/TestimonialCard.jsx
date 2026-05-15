import React from 'react'

export default function TestimonialCard({ quote, name, age, location }) {
  return (
    <div className="bg-white border border-bronze/15 rounded p-7 flex flex-col gap-3 h-full">
      <span className="font-serif text-5xl text-bronze/20 leading-none select-none">"</span>
      <p className="font-serif italic text-sm text-charcoal/80 leading-loose flex-1">{quote}</p>
      <div className="pt-4 border-t border-bronze/10">
        <p className="font-sans font-medium text-slate text-xs">{name}</p>
        <p className="text-soft text-xs mt-1">
          {age} · {location}
        </p>
      </div>
    </div>
  )
}
