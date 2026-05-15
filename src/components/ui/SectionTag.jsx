import React from 'react'

export default function SectionTag({ children, light = false }) {
  return (
    <div className="flex items-center gap-3 mb-4">
      <div className={`w-5 h-px ${light ? 'bg-bronze-light' : 'bg-bronze'}`} />
      <span
        className={`font-sans text-tag uppercase tracking-widest ${
          light ? 'text-bronze-light' : 'text-bronze'
        }`}
      >
        {children}
      </span>
    </div>
  )
}
