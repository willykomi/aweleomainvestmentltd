import type { ReactNode } from 'react'

export function Eyebrow({ children, dark = false }: { children: ReactNode; dark?: boolean }) {
  return (
    <p className={`inline-flex items-center gap-2 font-mono text-xs font-semibold tracking-[0.18em] uppercase ${dark ? 'text-amber-brand' : 'text-amber-deep'}`}>
      <span className="h-px w-6 bg-current" /> {children}
    </p>
  )
}

export function SectionHeading({ eyebrow, title, intro, dark = false, center = false }: { eyebrow: string; title: ReactNode; intro?: ReactNode; dark?: boolean; center?: boolean }) {
  return (
    <div className={`reveal max-w-2xl ${center ? 'mx-auto text-center' : ''}`}>
      <Eyebrow dark={dark}>{eyebrow}</Eyebrow>
      <h2 className={`mt-3 text-3xl leading-tight font-extrabold sm:text-4xl ${dark ? 'text-white' : 'text-navy-900'}`}>{title}</h2>
      {intro && <p className={`mt-4 text-lg leading-relaxed ${dark ? 'text-slate-300' : 'text-slate-600'}`}>{intro}</p>}
    </div>
  )
}

export const inputCls =
  'mt-1.5 w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-[15px] text-navy-900 placeholder:text-slate-400 focus:border-navy-900 focus:ring-2 focus:ring-amber-brand/40 focus:outline-none'

export function Field({ label, htmlFor, children, optional = false }: { label: string; htmlFor: string; children: ReactNode; optional?: boolean }) {
  return (
    <div>
      <label htmlFor={htmlFor} className="block text-sm font-semibold text-navy-900">
        {label} {optional && <span className="font-normal text-slate-500">(optional)</span>}
      </label>
      {children}
    </div>
  )
}

export function Honeypot() {
  return (
    <p className="hidden" aria-hidden="true">
      <label>
        Don't fill this out: <input name="bot-field" tabIndex={-1} autoComplete="off" />
      </label>
    </p>
  )
}
