import { Link, createFileRoute } from '@tanstack/react-router'
import { ArrowRight, BadgeCheck, ClipboardList, FileBarChart, Headset, MapPin, QrCode, ShieldCheck, Timer, Truck } from 'lucide-react'
import { AuditForm } from '@/components/AuditForm'
import { WastageEstimator } from '@/components/WastageEstimator'
import { FinalCta } from '@/components/FinalCta'
import { useVerify } from '@/components/VerifyContext'
import { Eyebrow, SectionHeading } from '@/components/ui'
import { img, waLink } from '@/lib/site'

export const Route = createFileRoute('/fleetguard')({
  head: () => ({
    meta: [
      { title: 'FleetGuard™ Fleet Maintenance Ikeja | 48-Hour Genuine Ford Parts — Aweleoma' },
      { name: 'description', content: 'FleetGuard™ gives Nigerian fleets USA-direct Ford parts, a 48-hour delivery SLA, 6-month warranty, QR serial verification and a risk-free ₦150k fleet audit.' },
    ],
  }),
  component: FleetGuard,
})

const features = [
  { icon: ShieldCheck, t: '100% USA-direct parts', d: 'Sourced straight from verified US suppliers with serial verification on every unit.' },
  { icon: Timer, t: '48-hour delivery SLA', d: 'Across Southwest Nigeria, backed by a downtime payment guarantee if we are late.' },
  { icon: BadgeCheck, t: '6-month warranty', d: 'Every part ships with an official warranty card. Covered failures are replaced.' },
  { icon: Headset, t: 'Dedicated Parts Advisor', d: 'One named expert who knows your fleet, confirms fitment and handles every order.' },
  { icon: FileBarChart, t: 'Quarterly fleet health reports', d: 'Spend, failure trends and upcoming service needs — so you plan instead of react.' },
  { icon: QrCode, t: 'Digital QR verification', d: 'Scan any warranty card to confirm a part is genuine before it goes on a vehicle.' },
]

const coverage = ['Lagos', 'Ogun', 'Oyo', 'Osun', 'Ondo', 'Ekiti']

function FleetGuard() {
  const { open: openVerify } = useVerify()
  return (
    <>
      <section className="relative isolate overflow-hidden bg-navy-950 text-white">
        <img src={img('parts.png', 1800)} alt="Genuine Ford brake discs, filters, spark plugs and engine oil with a verified QR tag" className="absolute inset-0 -z-20 h-full w-full object-cover opacity-50" fetchPriority="high" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-navy-950 via-navy-950/85 to-navy-950/30" />
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:py-28">
          <div className="max-w-2xl">
            <Eyebrow dark>Flagship programme</Eyebrow>
            <h1 className="mt-4 text-4xl leading-tight font-black sm:text-6xl">
              FleetGuard<sup className="text-2xl">™</sup>
              <span className="block text-amber-brand">Zero fakes. Zero waiting.</span>
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-slate-300">
              The parts programme for Nigerian businesses that run on Ford — SUVs, trucks, pick-ups and sedans. Genuine
              parts, guaranteed delivery times and full accountability, from one Lagos partner.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href="#audit" className="inline-flex items-center justify-center gap-2 rounded-lg bg-amber-brand px-7 py-4 font-extrabold text-navy-950 hover:bg-amber-deep hover:text-white">
                Book ₦150k Audit <ArrowRight className="h-5 w-5" />
              </a>
              <Link to="/parts" className="inline-flex items-center justify-center rounded-lg border-2 border-white/30 px-7 py-4 font-bold hover:border-amber-brand hover:text-amber-brand">
                Browse the parts catalog
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:py-28">
        <SectionHeading eyebrow="What's included" title="Everything a fleet needs to stop losing money on parts." />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => (
            <div key={f.t} className="reveal rounded-2xl border border-slate-200 p-7 transition hover:border-amber-brand hover:shadow-lg" style={{ transitionDelay: `${(i % 3) * 80}ms` }}>
              <f.icon className="h-9 w-9 text-amber-deep" />
              <h3 className="mt-4 text-xl font-bold">{f.t}</h3>
              <p className="mt-2 leading-relaxed text-slate-600">{f.d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-mist py-20 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:items-center">
          <div>
            <SectionHeading eyebrow="48-hour coverage" title="Delivered to your depot anywhere in Southwest Nigeria." intro="Orders confirmed with your Parts Advisor are dispatched from Ikeja and delivered within 48 hours. Late delivery on a covered order? Our downtime payment guarantee kicks in." />
            <ul className="reveal mt-8 flex flex-wrap gap-2">
              {coverage.map((c) => (
                <li key={c} className="inline-flex items-center gap-1.5 rounded-full bg-white px-4 py-2 text-sm font-semibold ring-1 ring-slate-200">
                  <MapPin className="h-4 w-4 text-amber-deep" /> {c}
                </li>
              ))}
            </ul>
          </div>
          <div className="reveal rounded-3xl bg-navy-900 p-8 text-white shadow-2xl">
            <p className="font-mono text-xs tracking-widest text-amber-brand uppercase">Order timeline</p>
            <ol className="mt-6 space-y-6">
              {[
                { h: 'Hour 0', t: 'Request received', d: 'Via WhatsApp, phone, catalog or your advisor.', icon: ClipboardList },
                { h: 'Hour 1', t: 'Fitment confirmed & quoted', d: 'VIN-checked, priced and approved by you.', icon: BadgeCheck },
                { h: 'Hour 2–40', t: 'Picked, verified & dispatched', d: 'Serial logged against your fleet record.', icon: Truck },
                { h: '≤ Hour 48', t: 'Delivered with warranty card', d: 'Scan the QR on arrival to verify.', icon: QrCode },
              ].map((s) => (
                <li key={s.t} className="grid grid-cols-[auto_1fr] gap-4">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-amber-brand text-navy-950"><s.icon className="h-5 w-5" /></span>
                  <div>
                    <p className="font-mono text-xs text-amber-brand">{s.h}</p>
                    <p className="font-bold">{s.t}</p>
                    <p className="text-sm text-slate-400">{s.d}</p>
                  </div>
                </li>
              ))}
            </ol>
            <button onClick={() => openVerify()} className="mt-8 w-full rounded-lg border border-verified/50 py-3 text-sm font-bold text-emerald-300 hover:bg-verified/10">
              Already have a part? Verify its serial →
            </button>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-navy-900 py-20 text-white lg:py-24">
        <div className="blueprint absolute inset-0 opacity-60" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
          <SectionHeading dark eyebrow="Estimate first" title="See what your fleet could be losing." />
          <div className="reveal mt-12"><WastageEstimator /></div>
        </div>
      </section>

      <section id="audit" className="mx-auto max-w-7xl scroll-mt-24 px-4 py-20 sm:px-6 lg:py-28">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr]">
          <div>
            <SectionHeading eyebrow="The ₦150k FleetGuard™ audit" title={<>Uncover ₦500k in wastage — <span className="text-amber-deep">or we refund you and pay ₦50k.</span></>} />
            <div className="reveal mt-8 overflow-hidden rounded-2xl ring-1 ring-slate-200">
              <table className="w-full text-left text-sm">
                <tbody className="divide-y divide-slate-200">
                  <tr><th className="bg-mist p-4 font-semibold">Audit fee</th><td className="p-4">₦150,000</td></tr>
                  <tr><th className="bg-mist p-4 font-semibold">We find ≥ ₦500k wastage</th><td className="p-4">You keep a savings plan worth many times the fee</td></tr>
                  <tr><th className="bg-mist p-4 font-semibold">We find less</th><td className="p-4 font-bold text-verified">₦150k refunded + ₦50k paid to you</td></tr>
                  <tr><th className="bg-mist p-4 font-semibold">You receive</th><td className="p-4">Supplier review, counterfeit risk report, downtime analysis, 90-day action plan</td></tr>
                </tbody>
              </table>
            </div>
            <a href={waLink('Hello Aweleoma, I have questions about the FleetGuard audit.')} target="_blank" rel="noreferrer" className="reveal mt-6 inline-flex items-center gap-2 font-bold text-navy-900 hover:text-amber-deep">
              Questions first? Ask on WhatsApp <ArrowRight className="h-4 w-4" />
            </a>
          </div>
          <div className="reveal rounded-3xl bg-white p-6 shadow-2xl ring-1 ring-slate-200 sm:p-10">
            <h2 className="text-2xl font-extrabold">Book your audit</h2>
            <p className="mt-1 mb-6 text-slate-600">An advisor calls you within one business day.</p>
            <AuditForm />
          </div>
        </div>
      </section>

      <FinalCta />
    </>
  )
}
