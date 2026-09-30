import { Link } from '@tanstack/react-router'
import { Mail, MapPin, MessageCircle, Phone } from 'lucide-react'
import { Logo } from './Logo'
import { site, waLink } from '@/lib/site'

export function Footer() {
  return (
    <footer className="bg-navy-950 text-slate-400">
      <div className="hazard h-1.5" />
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.3fr]">
        <div>
          <Logo light />
          <p className="mt-5 max-w-xs text-sm leading-relaxed">
            A Lagos-based, CAC-registered company in automotive retail, commodities trading, agriculture and
            information technology — built on verified sourcing and fast delivery.
          </p>
          <p className="mt-4 font-mono text-xs text-slate-500">{site.rc} · Incorporated {site.incorporated}</p>
        </div>
        <div>
          <h3 className="text-sm font-bold tracking-wider text-white uppercase">Automotive</h3>
          <ul className="mt-4 space-y-2.5 text-sm">
            <li><Link to="/fleetguard" className="hover:text-amber-brand">FleetGuard™ Programme</Link></li>
            <li><Link to="/parts" className="hover:text-amber-brand">Genuine Ford Parts</Link></li>
            <li><Link to="/parts" search={{ category: 'Engine Oils' }} className="hover:text-amber-brand">Engine Oils</Link></li>
            <li><Link to="/fleetguard" hash="audit" className="hover:text-amber-brand">Book a Fleet Audit</Link></li>
            <li><Link to="/commodities" hash="brokerage" className="hover:text-amber-brand">Vehicle Brokerage</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-bold tracking-wider text-white uppercase">Company</h3>
          <ul className="mt-4 space-y-2.5 text-sm">
            <li><Link to="/agriculture" className="hover:text-amber-brand">Agriculture</Link></li>
            <li><Link to="/it-solutions" className="hover:text-amber-brand">IT Solutions</Link></li>
            <li><Link to="/commodities" className="hover:text-amber-brand">Commodities</Link></li>
            <li><Link to="/about" className="hover:text-amber-brand">About &amp; Compliance</Link></li>
            <li><Link to="/contact" className="hover:text-amber-brand">Contact &amp; Support</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-bold tracking-wider text-white uppercase">Talk to us</h3>
          <ul className="mt-4 space-y-3 text-sm">
            <li className="flex gap-2.5"><MapPin className="mt-0.5 h-4 w-4 shrink-0 text-amber-brand" />{site.address}</li>
            <li><a href={`tel:${site.phone}`} className="flex gap-2.5 hover:text-white"><Phone className="h-4 w-4 text-amber-brand" />{site.phoneDisplay}</a></li>
            <li><a href={waLink('Hello Aweleoma, I have an enquiry.')} target="_blank" rel="noreferrer" className="flex gap-2.5 hover:text-white"><MessageCircle className="h-4 w-4 text-verified" />WhatsApp {site.whatsappDisplay}</a></li>
            <li><a href={`mailto:${site.email}`} className="flex gap-2.5 break-all hover:text-white"><Mail className="h-4 w-4 shrink-0 text-amber-brand" />{site.email}</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-5 text-xs sm:flex-row sm:justify-between sm:px-6">
          <p>© {new Date().getFullYear()} {site.name}. All rights reserved.</p>
          <p>Ford is a trademark of Ford Motor Company. FleetGuard™ is a service programme of {site.name}.</p>
        </div>
      </div>
    </footer>
  )
}
