import React from 'react'

export default function ProcessStep({ number, title, description, isLast }) {
  return (
    <div
      className={`flex flex-col gap-4 px-6 lg:px-8 py-8 ${
        !isLast ? 'border-b border-white/10 lg:border-b-0 lg:border-r lg:border-white/10' : ''
      }`}
    >
      <span className="font-serif text-5xl text-bronze/20 leading-none">{number}</span>
      <h3 className="font-serif text-xl text-ivory">{title}</h3>
      <p className="font-sans text-xs text-ivory/55 font-light leading-relaxed">{description}</p>
    </div>
  )
}
