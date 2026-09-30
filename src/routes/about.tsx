import { Link, createFileRoute } from '@tanstack/react-router'
import { ArrowRight, BadgeCheck, Building2, CalendarDays, FileCheck2, Handshake, MapPin, Scale, ShieldCheck, Target } from 'lucide-react'
import { FinalCta } from '@/components/FinalCta'
import { Eyebrow, SectionHeading } from '@/components/ui'
import { img, site } from '@/lib/site'

export const Route = createFileRoute('/about')({
  head: () => ({
    meta: [
      { title: 'About Aweleoma Investment Ltd — RC 1556828 | Lagos, Nigeria' },
      { name: 'description', content: 'Aweleoma Investment Ltd is a CAC-registered Lagos company (RC 1556828, incorporated 2019) in automotive retail, commodities, agriculture and IT.' },
    ],
  }),
  component: About,
})

function About() {
  return (
    <>
      <section className="blueprint bg-navy-900 text-white">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:items-center lg:py-24">
          <div>
            <Eyebrow dark>About &amp; compliance</Eyebrow>
            <h1 className="mt-4 text-4xl leading-tight font-black sm:text-5xl">A Lagos company built on one idea: <span className="text-amber-brand">verified, or it doesn't ship.</span></h1>
            <p className="mt-6 text-lg leading-relaxed text-slate-300">
              Since 2019, Aweleoma Investment Ltd has helped Nigerian businesses buy with confidence — first in automotive parts, and
              now across commodities, agriculture and information technology.
            </p>
          </div>
          <img src={img('mechanic.png', 1000, 700)} alt="A technician fitting a genuine brake component to a pick-up truck" className="rounded-3xl shadow-2xl ring-1 ring-white/10" loading="lazy" />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr]">
          <div>
            <SectionHeading eyebrow="Our mission" title="Remove guesswork from how Nigerian businesses source what they depend on." />
            <div className="reveal mt-6 space-y-4 text-lg leading-relaxed text-slate-600">
              <p>
                Counterfeit parts, unreliable suppliers and missed delivery dates cost businesses far more than the sticker price.
                We built our company to be the opposite: a supplier that verifies every item, commits to delivery times in writing, and
                stands behind what it sells.
              </p>
              <p>
                Our flagship FleetGuard™ programme brings USA-direct Ford parts to fleets and vehicle owners with a 48-hour SLA and a
                6-month warranty. The same discipline now powers our commodities, agriculture and IT divisions.
              </p>
            </div>
          </div>
          <div className="reveal grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
            {[
              { icon: Target, t: 'Vision', d: 'To be Nigeria’s most trusted multi-sector supply partner.' },
              { icon: ShieldCheck, t: 'Integrity', d: 'Verified sourcing and honest pricing on every order.' },
              { icon: Handshake, t: 'Accountability', d: 'Written guarantees, named advisors and clear reporting.' },
            ].map((v) => (
              <div key={v.t} className="flex gap-4 rounded-2xl border border-slate-200 p-5">
                <v.icon className="h-7 w-7 shrink-0 text-amber-deep" />
                <div><p className="font-bold">{v.t}</p><p className="text-sm text-slate-600">{v.d}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-mist py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <SectionHeading eyebrow="Verification details" title="Check us out before you buy." intro="We encourage every client to verify our registration. Here are the details you need." />
          <div className="reveal mt-10 overflow-hidden rounded-3xl bg-white shadow-xl ring-1 ring-slate-200">
            <div className="flex items-center justify-between gap-4 bg-navy-900 px-6 py-4 text-white">
              <p className="font-display font-bold">Corporate Affairs Commission record</p>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-verified px-3 py-1 text-xs font-bold"><BadgeCheck className="h-4 w-4" /> ACTIVE</span>
            </div>
            <dl className="grid divide-y divide-slate-200 sm:grid-cols-2 sm:divide-y-0">
              {[
                { icon: Building2, k: 'Registered name', v: site.name },
                { icon: FileCheck2, k: 'Registration number', v: site.rc, mono: true },
                { icon: CalendarDays, k: 'Date of incorporation', v: site.incorporated },
                { icon: Scale, k: 'Company status', v: 'Active' },
                { icon: MapPin, k: 'Registered address', v: site.address },
                { icon: BadgeCheck, k: 'Business sectors', v: 'General merchandise & automotive retail · Commodities trading · Agriculture · Information technology' },
              ].map((r) => (
                <div key={r.k} className="flex gap-4 border-slate-200 p-6 sm:border-b sm:odd:border-r">
                  <r.icon className="mt-0.5 h-5 w-5 shrink-0 text-amber-deep" />
                  <div>
                    <dt className="text-xs font-bold tracking-wider text-slate-500 uppercase">{r.k}</dt>
                    <dd className={`mt-1 font-semibold text-navy-900 ${'mono' in r ? 'font-mono text-lg' : ''}`}>{r.v}</dd>
                  </div>
                </div>
              ))}
            </dl>
          </div>
          <p className="reveal mt-4 text-sm text-slate-500">
            You can confirm these details on the CAC public search portal at{' '}
            <a href="https://search.cac.gov.ng" target="_blank" rel="noreferrer" className="font-semibold text-navy-900 underline">search.cac.gov.ng</a>.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 py-20 text-center sm:px-6 lg:py-24">
        <SectionHeading center eyebrow="Leadership commitment" title="“If we sell it, we stand behind it.”" />
        <p className="reveal mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-slate-600">
          Our leadership personally commits to three things for every client: we will only supply what we have verified, we will tell
          you the truth about timelines and pricing, and we will make it right if something goes wrong. That is why our guarantees are
          in writing.
        </p>
        <p className="reveal mt-6 font-display font-bold">— Management, {site.name}</p>
        <Link to="/contact" className="reveal mt-8 inline-flex items-center gap-2 rounded-lg bg-navy-900 px-6 py-3.5 font-bold text-white hover:bg-navy-800">
          Speak with our team <ArrowRight className="h-4 w-4" />
        </Link>
      </section>

      <FinalCta />
    </>
  )
}
