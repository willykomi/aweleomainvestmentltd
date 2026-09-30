import { useState } from 'react'
import { MessageCircle, X } from 'lucide-react'
import { site, waLink } from '@/lib/site'

const routes = [
  { label: 'Ford parts & engine oils', msg: 'Hello Aweleoma, I need genuine Ford parts. My vehicle is: ' },
  { label: 'Book a ₦150k fleet audit', msg: 'Hello Aweleoma, I want to book a FleetGuard fleet audit. Fleet size: ' },
  { label: 'Verify a part serial', msg: 'Hello Aweleoma, please verify this part serial: ' },
  { label: 'Agriculture / bulk commodities', msg: 'Hello Aweleoma, I have an agriculture / commodities enquiry: ' },
  { label: 'IT solutions', msg: 'Hello Aweleoma, I have an IT procurement enquiry: ' },
]

export function WhatsAppFloat() {
  const [open, setOpen] = useState(false)
  return (
    <div className="fixed right-4 bottom-4 z-[60] flex flex-col items-end gap-3 sm:right-6 sm:bottom-6">
      {open && (
        <div className="w-[min(88vw,320px)] animate-rise overflow-hidden rounded-2xl bg-white shadow-2xl ring-1 ring-slate-200">
          <div className="bg-[#075E54] px-5 py-4 text-white">
            <p className="font-display font-bold">Chat with a Parts Advisor</p>
            <p className="text-xs text-white/80">Typically replies within minutes · {site.whatsappDisplay}</p>
          </div>
          <div className="p-2">
            <p className="px-3 pt-2 pb-1 text-xs font-semibold text-slate-500 uppercase">What do you need?</p>
            {routes.map((r) => (
              <a key={r.label} href={waLink(r.msg)} target="_blank" rel="noreferrer" className="block rounded-lg px-3 py-2.5 text-sm font-medium text-navy-900 hover:bg-emerald-50">
                {r.label} →
              </a>
            ))}
          </div>
        </div>
      )}
      <button
        onClick={() => setOpen((v) => !v)}
        className="relative flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-emerald-900/30 transition hover:scale-105"
        aria-label={open ? 'Close WhatsApp menu' : 'Chat on WhatsApp'}
        aria-expanded={open}
      >
        {!open && <span className="absolute inset-0 animate-pulse-ring rounded-full bg-[#25D366]" aria-hidden="true" />}
        {open ? <X className="relative h-6 w-6" /> : <MessageCircle className="relative h-7 w-7" />}
      </button>
    </div>
  )
}
