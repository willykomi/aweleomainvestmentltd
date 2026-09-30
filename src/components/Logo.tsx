export function Logo({ light = false }: { light?: boolean }) {
  return (
    <span className="flex items-center gap-2.5">
      <svg viewBox="0 0 40 40" className="h-9 w-9 shrink-0" aria-hidden="true">
        <rect width="40" height="40" rx="9" fill={light ? '#f59e0b' : '#0f172a'} />
        <path d="M11 30 L20 9 L29 30" fill="none" stroke={light ? '#0f172a' : '#f59e0b'} strokeWidth="3.6" strokeLinejoin="round" strokeLinecap="round" />
        <path d="M14.6 23 H25.4" stroke={light ? '#0f172a' : '#fff'} strokeWidth="3" strokeLinecap="round" />
      </svg>
      <span className="leading-none">
        <span className={`block font-display text-[15px] font-extrabold tracking-tight ${light ? 'text-white' : 'text-navy-900'}`}>
          AWELEOMA
        </span>
        <span className={`block text-[10px] font-semibold tracking-[0.22em] ${light ? 'text-amber-brand' : 'text-navy-700'}`}>
          INVESTMENT LTD
        </span>
      </span>
    </span>
  )
}
