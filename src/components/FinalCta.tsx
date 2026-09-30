import { MessageCircle } from 'lucide-react'
import { site, waLink } from '@/lib/site'

export function FinalCta() {
  return (
    <section className="relative overflow-hidden bg-amber-brand">
      <div className="absolute -top-24 -right-24 h-80 w-80 rounded-full border-[40px] border-navy-900/10" />
      <div className="relative mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 px-4 py-16 sm:px-6 lg:flex-row lg:items-center">
        <div>
          <h2 className="text-3xl font-black text-navy-950 sm:text-4xl">Need a genuine part today?</h2>
          <p className="mt-2 text-lg font-medium text-navy-900/80">Send your vehicle details on WhatsApp — get a verified quote in minutes.</p>
        </div>
        <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
          <a href={waLink('Hello Aweleoma, I need a genuine Ford part. Vehicle model & year: ')} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 rounded-lg bg-navy-950 px-7 py-4 font-bold text-white hover:bg-navy-800">
            <MessageCircle className="h-5 w-5 text-amber-brand" /> WhatsApp {site.whatsappDisplay}
          </a>
          <a href={`tel:${site.phone}`} className="inline-flex items-center justify-center rounded-lg border-2 border-navy-950 px-7 py-4 font-bold text-navy-950 hover:bg-navy-950 hover:text-white">
            Call {site.phoneDisplay}
          </a>
        </div>
      </div>
    </section>
  )
}
