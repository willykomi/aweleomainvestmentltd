import { createFileRoute } from '@tanstack/react-router'
import { Clock, Mail, MapPin, MessageCircle, Phone, ShieldCheck } from 'lucide-react'
import { InquiryForm } from '@/components/InquiryForm'
import { useVerify } from '@/components/VerifyContext'
import { Eyebrow } from '@/components/ui'
import { departments, site, waLink } from '@/lib/site'
import type { DepartmentId } from '@/lib/site'

export const Route = createFileRoute('/contact')({
  validateSearch: (s: Record<string, unknown>): { dept?: DepartmentId } => ({
    dept: departments.some((d) => d.id === s.dept) ? (s.dept as DepartmentId) : undefined,
  }),
  head: () => ({
    meta: [
      { title: 'Contact Aweleoma Investment Ltd — Ikeja, Lagos | WhatsApp & Phone' },
      { name: 'description', content: `Visit us at ${site.address}, call ${site.phoneDisplay} or WhatsApp ${site.whatsappDisplay}. Genuine Ford parts, fleet audits, agriculture, commodities and IT enquiries.` },
    ],
  }),
  component: Contact,
})

function Contact() {
  const { dept } = Route.useSearch()
  const { open: openVerify } = useVerify()
  const channels = [
    { icon: MessageCircle, t: 'WhatsApp', v: site.whatsappDisplay, href: waLink('Hello Aweleoma, I have an enquiry.'), note: 'Fastest — replies in minutes', accent: 'text-[#25D366]' },
    { icon: Phone, t: 'Call us', v: site.phoneDisplay, href: `tel:${site.phone}`, note: 'Mon–Sat, 8am–6pm', accent: 'text-amber-deep' },
    { icon: Mail, t: 'Email', v: site.email, href: `mailto:${site.email}`, note: 'For quotes, RFQs & documents', accent: 'text-amber-deep' },
  ]
  return (
    <>
      <section className="blueprint bg-navy-900 text-white">
        <div className="mx-auto max-w-7xl px-4 pt-16 pb-28 sm:px-6">
          <Eyebrow dark>Contact &amp; support</Eyebrow>
          <h1 className="mt-4 max-w-3xl text-4xl font-black sm:text-5xl">Let's get you what you need — fast.</h1>
          <p className="mt-4 max-w-2xl text-lg text-slate-300">Pick the channel that suits you. Every enquiry is routed to the right team automatically.</p>
        </div>
      </section>

      <section className="mx-auto -mt-16 max-w-7xl px-4 sm:px-6">
        <div className="grid gap-4 md:grid-cols-3">
          {channels.map((c) => (
            <a key={c.t} href={c.href} target={c.href.startsWith('http') ? '_blank' : undefined} rel="noreferrer" className="group rounded-2xl bg-white p-6 shadow-xl ring-1 ring-slate-200 transition hover:-translate-y-1 hover:ring-amber-brand">
              <c.icon className={`h-8 w-8 ${c.accent}`} />
              <p className="mt-4 text-sm font-bold tracking-wider text-slate-500 uppercase">{c.t}</p>
              <p className="mt-1 text-lg font-bold break-all text-navy-900 group-hover:text-amber-deep">{c.v}</p>
              <p className="mt-1 text-sm text-slate-500">{c.note}</p>
            </a>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:py-20">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr]">
          <div className="rounded-3xl bg-white p-6 shadow-2xl ring-1 ring-slate-200 sm:p-10">
            <h2 className="text-2xl font-extrabold">Send us an enquiry</h2>
            <p className="mt-1 mb-6 text-slate-600">Choose a team and we'll respond within one business day.</p>
            <InquiryForm key={dept} defaultDepartment={dept ?? 'automotive'} />
          </div>
          <div className="space-y-5">
            <div className="overflow-hidden rounded-3xl ring-1 ring-slate-200">
              <iframe
                title="Map showing Aweleoma Investment Ltd, Mangoro, Ikeja, Lagos"
                src={`https://maps.google.com/maps?q=${encodeURIComponent(site.mapQuery)}&z=15&output=embed`}
                className="h-72 w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <div className="flex items-start gap-3 bg-white p-5">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-amber-deep" />
                <div>
                  <p className="font-bold">Head office</p>
                  <p className="text-sm text-slate-600">{site.address}</p>
                  <a href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(site.mapQuery)}`} target="_blank" rel="noreferrer" className="mt-2 inline-block text-sm font-bold text-navy-900 underline hover:text-amber-deep">
                    Get directions →
                  </a>
                </div>
              </div>
            </div>
            <div className="flex items-start gap-3 rounded-2xl bg-mist p-5">
              <Clock className="mt-0.5 h-5 w-5 shrink-0 text-amber-deep" />
              <div className="text-sm">
                <p className="font-bold">Business hours</p>
                <p className="text-slate-600">Monday – Saturday: 8:00am – 6:00pm</p>
                <p className="text-slate-600">WhatsApp enquiries answered 7 days a week</p>
              </div>
            </div>
            <button onClick={() => openVerify()} className="flex w-full items-start gap-3 rounded-2xl border border-verified/40 bg-emerald-50 p-5 text-left hover:bg-emerald-100">
              <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-verified" />
              <div className="text-sm">
                <p className="font-bold">Warranty or authenticity question?</p>
                <p className="text-slate-600">Verify a FleetGuard™ part serial in seconds →</p>
              </div>
            </button>
          </div>
        </div>
      </section>
    </>
  )
}
