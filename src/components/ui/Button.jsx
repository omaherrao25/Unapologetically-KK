import React from 'react'

const variantClasses = {
  solid: 'bg-bronze text-ivory hover:bg-slate',
  outline: 'border border-bronze text-bronze hover:bg-bronze hover:text-ivory',
  'outline-light': 'border border-ivory/60 text-ivory hover:bg-ivory/10',
  ghost: 'text-bronze border-b border-bronze hover:text-slate',
}

const sizeClasses = {
  sm: 'px-4 py-2',
  md: 'px-6 py-3',
  lg: 'px-8 py-4',
}

export default function Button({
  variant = 'solid',
  size = 'md',
  children,
  href,
  onClick,
  className = '',
}) {
  const isGhost = variant === 'ghost'
  const base =
    'font-sans tracking-widest uppercase text-tag transition-all duration-300 rounded-sm inline-block'
  const variantCls = variantClasses[variant] ?? variantClasses.solid
  const sizeCls = isGhost ? 'pb-0.5' : sizeClasses[size]
  const classes = `${base} ${variantCls} ${sizeCls} ${className}`.trim()

  if (href) {
    const isExternal = href.startsWith('http')
    return (
      <a
        href={href}
        className={classes}
        {...(isExternal ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      >
        {children}
      </a>
    )
  }

  return (
    <button onClick={onClick} className={classes}>
      {children}
    </button>
  )
}
