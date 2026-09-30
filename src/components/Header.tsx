import { useEffect, useState } from 'react'
import { Link, useRouterState } from '@tanstack/react-router'
import { ChevronDown, Menu, Phone, ShieldCheck, Timer, X } from 'lucide-react'
import { Logo } from './Logo'
import { useVerify } from './VerifyContext'
import { site } from '@/lib/site'

const services = [
  { to: '/agriculture', label: 'Agriculture', hint: 'Farming value-chain & agri-trade' },
  { to: '/it-solutions', label: 'IT Solutions', hint: 'Infrastructure, devices & consulting' },
  { to: '/commodities', label: 'Commodities & Merchandise', hint: 'Bulk distribution & brokerage' },
] as const

export function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { open: openVerify } = useVerify()
  const pathname = useRouterState({ select: (s) => s.location.pathname })

  useEffect(() => setOpen(false), [pathname])
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const linkCls = 'rounded-md px-3 py-2 text-sm font-semibold text-navy-800 transition hover:text-amber-deep'
  const activeCls = { className: 'text-amber-deep' }

  return (
    <>
      <div className="bg-navy-950 text-[12px] text-slate-300">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-2 sm:px-6">
          <div className="flex items-center gap-4">
            <span className="inline-flex items-center gap-1.5">
              <ShieldCheck className="h-3.5 w-3.5 text-verified" /> CAC-registered · {site.rc}
            </span>
            <span className="hidden items-center gap-1.5 md:inline-flex">
              <Timer className="h-3.5 w-3.5 text-amber-brand" /> 48-hour parts delivery across Southwest Nigeria
            </span>
          </div>
          <a href={`tel:${site.phone}`} className="inline-flex items-center gap-1.5 font-semibold text-white hover:text-amber-brand">
            <Phone className="h-3.5 w-3.5" /> {site.phoneDisplay}
          </a>
        </div>
      </div>
      <header className={`sticky top-0 z-50 border-b bg-white/90 backdrop-blur-md transition-shadow ${scrolled ? 'border-slate-200 shadow-sm' : 'border-transparent'}`}>
        <div className="mx-auto flex h-[68px] max-w-7xl items-center justify-between gap-4 px-4 sm:px-6">
          <Link to="/" aria-label="Aweleoma Investment Ltd home">
            <Logo />
          </Link>
          <nav className="hidden items-center gap-1 lg:flex" aria-label="Main">
            <Link to="/fleetguard" className={linkCls} activeProps={activeCls}>FleetGuard™</Link>
            <Link to="/parts" className={linkCls} activeProps={activeCls}>Parts Catalog</Link>
            <div className="group relative">
              <button className={`${linkCls} inline-flex items-center gap-1`} aria-haspopup="true">
                Services <ChevronDown className="h-4 w-4 transition group-hover:rotate-180" />
              </button>
              <div className="invisible absolute top-full left-0 w-72 translate-y-1 pt-2 opacity-0 transition group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                <div className="rounded-xl border border-slate-200 bg-white p-2 shadow-xl">
                  {services.map((s) => (
                    <Link key={s.to} to={s.to} className="block rounded-lg px-3 py-2.5 hover:bg-mist">
                      <span className="block text-sm font-semibold text-navy-900">{s.label}</span>
                      <span className="block text-xs text-slate-500">{s.hint}</span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            <Link to="/about" className={linkCls} activeProps={activeCls}>About</Link>
            <Link to="/contact" className={linkCls} activeProps={activeCls}>Contact</Link>
          </nav>
          <div className="hidden items-center gap-2 lg:flex">
            <button onClick={() => openVerify()} className="inline-flex items-center gap-1.5 rounded-lg border border-slate-300 px-3.5 py-2 text-sm font-semibold hover:border-verified hover:text-verified">
              <ShieldCheck className="h-4 w-4" /> Verify part
            </button>
            <Link to="/fleetguard" hash="audit" className="rounded-lg bg-amber-brand px-4 py-2.5 text-sm font-bold text-navy-950 shadow-sm transition hover:bg-amber-deep hover:text-white">
              Book ₦150k Audit
            </Link>
          </div>
          <button className="rounded-lg p-2 lg:hidden" onClick={() => setOpen((v) => !v)} aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open}>
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
        {open && (
          <div className="border-t border-slate-200 bg-white px-4 pb-6 lg:hidden">
            <nav className="flex flex-col py-2 text-base font-semibold" aria-label="Mobile">
              {[
                { to: '/', label: 'Home' },
                { to: '/fleetguard', label: 'FleetGuard™ Programme' },
                { to: '/parts', label: 'Parts Catalog' },
                ...services,
                { to: '/about', label: 'About & Compliance' },
                { to: '/contact', label: 'Contact & Support' },
              ].map((l) => (
                <Link key={l.to} to={l.to} className="border-b border-slate-100 py-3.5" activeProps={activeCls} activeOptions={{ exact: true }}>
                  {l.label}
                </Link>
              ))}
            </nav>
            <div className="grid grid-cols-2 gap-2">
              <button onClick={() => openVerify()} className="rounded-lg border border-slate-300 py-3 text-sm font-semibold">
                Verify part
              </button>
              <Link to="/fleetguard" hash="audit" className="rounded-lg bg-amber-brand py-3 text-center text-sm font-bold text-navy-950">
                Book Audit
              </Link>
            </div>
          </div>
        )}
      </header>
    </>
  )
}
