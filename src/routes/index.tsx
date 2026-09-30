import { Link, createFileRoute } from '@tanstack/react-router'
import {
  ArrowRight,
  BadgeCheck,
  Building2,
  Cpu,
  FileSearch,
  Plus,
  ShieldCheck,
  Sprout,
  Tractor,
  Truck,
  Wheat,
  Wrench,
} from 'lucide-react'
import { AuditForm } from '@/components/AuditForm'
import { WastageEstimator } from '@/components/WastageEstimator'
import { useVerify } from '@/components/VerifyContext'
import { Eyebrow, SectionHeading } from '@/components/ui'
import { FinalCta } from '@/components/FinalCta'
import { img, site, waLink } from '@/lib/site'

export const Route = createFileRoute('/')({ component: Home })

const trustItems = [
  `CAC Registered · ${site.rc}`,
  'Active since 2019',
  '100% USA-direct Ford parts',
  '48-hour delivery SLA',
  '6-month warranty per part',
  'QR serial verification',
  'Dedicated Parts Advisor',
  'Quarterly fleet health reports',
]

function Home() {
  const { open: openVerify } = useVerify()
  return (
    <>
      {/* HERO */}
      <section className="relative isolate overflow-hidden bg-navy-900">
        <img
          src={img('hero.png', 1800)}
          srcSet={`${img('hero.png', 900)} 900w, ${img('hero.png', 1400)} 1400w, ${img('hero.png', 1800)} 1800w`}
          sizes="100vw"
          alt="A row of Ford pick-up trucks at a Lagos fleet depot with a fleet manager checking a tablet"
          className="absolute inset-0 -z-20 h-full w-full object-cover object-[70%_center]"
          fetchPriority="high"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-navy-950 via-navy-950/85 to-navy-950/10" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-navy-950/80 via-transparent to-transparent" />
        <div className="blueprint absolute inset-0 -z-10 opacity-50 [mask-image:linear-gradient(90deg,black,transparent_60%)]" />

        <div className="mx-auto grid max-w-7xl gap-12 px-4 pt-16 pb-24 sm:px-6 sm:pt-24 lg:grid-cols-[1.25fr_1fr] lg:pb-32">
          <div>
            <div className="animate-rise">
              <Eyebrow dark>FleetGuard™ · Genuine Ford Parts · Lagos</Eyebrow>
            </div>
            <h1 className="mt-5 animate-rise text-4xl leading-[1.05] font-black text-white [animation-delay:80ms] sm:text-5xl lg:text-[64px]">
              Genuine Ford parts in <span className="text-amber-brand">48 hours</span> — or we pay for your downtime.
            </h1>
            <p className="mt-6 max-w-xl animate-rise text-lg leading-relaxed text-slate-300 [animation-delay:160ms]">
              USA-direct, serial-verified parts for your F-150s, Rangers, Explorers and Everests — delivered across Southwest
              Nigeria with a 6-month warranty on every part. No fakes. No guesswork. No idle vehicles.
            </p>
            <div className="mt-8 flex animate-rise flex-col gap-3 [animation-delay:240ms] sm:flex-row">
              <Link to="/parts" className="group inline-flex items-center justify-center gap-2 rounded-lg bg-amber-brand px-7 py-4 text-base font-extrabold text-navy-950 shadow-xl shadow-amber-900/30 transition hover:bg-amber-deep hover:text-white">
                Explore Auto Catalog <ArrowRight className="h-5 w-5 transition group-hover:translate-x-1" />
              </Link>
              <Link to="/fleetguard" hash="audit" className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-white/30 px-7 py-4 text-base font-bold text-white backdrop-blur transition hover:border-amber-brand hover:text-amber-brand">
                Book ₦150k Audit
              </Link>
            </div>
            <ul className="mt-10 flex animate-rise flex-wrap gap-2.5 [animation-delay:320ms]">
              {['100% Direct USA Sourced', '48-Hour SLA', '6-Month Warranty'].map((b) => (
                <li key={b} className="inline-flex items-center gap-1.5 rounded-full border border-verified/40 bg-verified/10 px-3 py-1.5 text-xs font-semibold text-emerald-300">
                  <BadgeCheck className="h-4 w-4" /> {b}
                </li>
              ))}
            </ul>
          </div>

          {/* Verification card */}
          <div className="hidden items-end justify-end lg:flex">
            <div className="w-80 animate-rise rounded-2xl border border-white/15 bg-white/10 p-5 text-white shadow-2xl backdrop-blur-xl [animation-delay:400ms]">
              <div className="flex items-center justify-between">
                <span className="font-mono text-[11px] tracking-widest text-slate-300 uppercase">Part authenticity</span>
                <span className="inline-flex items-center gap-1 rounded-full bg-verified px-2 py-0.5 text-[11px] font-bold">
                  <ShieldCheck className="h-3 w-3" /> GENUINE
                </span>
              </div>
              <div className="mt-4 flex gap-4">
                <div className="grid h-20 w-20 shrink-0 grid-cols-5 gap-0.5 rounded-md bg-white p-1.5" aria-hidden="true">
                  {'1011010110001111010110110'.split('').map((b, i) => (
                    <span key={i} className={b === '1' ? 'bg-navy-900' : ''} />
                  ))}
                </div>
                <div className="text-sm">
                  <p className="font-semibold">Front Brake Pad Set</p>
                  <p className="text-slate-300">F-150 · 2018–2023</p>
                  <p className="mt-1 font-mono text-xs text-amber-brand">FG-F150-8K2Q7D</p>
                </div>
              </div>
              <div className="mt-4 grid grid-cols-2 gap-2 text-xs">
                <div className="rounded-lg bg-white/10 p-2.5"><p className="text-slate-400">Origin</p><p className="font-semibold">USA direct</p></div>
                <div className="rounded-lg bg-white/10 p-2.5"><p className="text-slate-400">Warranty</p><p className="font-semibold">6 months</p></div>
              </div>
              <button onClick={() => openVerify()} className="mt-4 w-full rounded-lg bg-white py-2.5 text-sm font-bold text-navy-900 hover:bg-amber-brand">
                Verify your part →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST STRIP */}
      <section className="overflow-hidden border-y border-slate-200 bg-mist py-4" aria-label="Credentials">
        <div className="flex w-max animate-marquee gap-10 whitespace-nowrap">
          {[...trustItems, ...trustItems].map((t, i) => (
            <span key={i} className="inline-flex items-center gap-2 font-mono text-sm font-semibold text-navy-800">
              <BadgeCheck className="h-4 w-4 text-verified" /> {t}
            </span>
          ))}
        </div>
      </section>

      {/* PROBLEM → SOLUTION */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:py-28">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:items-center">
          <div>
            <SectionHeading
              eyebrow="Why fleets switch to us"
              title="Fake and grey-market parts are quietly draining your fleet budget."
              intro="Every counterfeit filter, every wrong-fit brake pad, every day a Ranger sits waiting for a part costs you money. FleetGuard™ was built to end all three."
            />
            <div className="reveal mt-8 flex flex-col gap-3 sm:flex-row">
              <a href={waLink('Hello Aweleoma, I want to talk to a Parts Advisor about my fleet.')} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 rounded-lg bg-navy-900 px-6 py-3.5 font-bold text-white hover:bg-navy-800">
                Talk to a Parts Advisor
              </a>
              <Link to="/fleetguard" className="inline-flex items-center justify-center gap-2 rounded-lg px-6 py-3.5 font-bold text-navy-900 hover:text-amber-deep">
                How FleetGuard™ works <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
          <div className="grid gap-4">
            {[
              { pain: 'Counterfeit parts that fail in weeks', fix: 'Every part sourced direct from the USA and serial-verified with a QR warranty card.', icon: ShieldCheck },
              { pain: 'Vehicles idle for days waiting on parts', fix: '48-hour delivery across Southwest Nigeria — backed by a downtime payment guarantee.', icon: Truck },
              { pain: 'No accountability after purchase', fix: '6-month warranty per part, a dedicated Parts Advisor and quarterly fleet health reports.', icon: FileSearch },
            ].map(({ pain, fix, icon: Icon }, i) => (
              <div key={pain} className="reveal group grid grid-cols-[auto_1fr] gap-5 rounded-2xl border border-slate-200 bg-white p-6 transition hover:-translate-y-0.5 hover:border-amber-brand hover:shadow-xl" style={{ transitionDelay: `${i * 80}ms` }}>
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-navy-900 text-amber-brand transition group-hover:bg-amber-brand group-hover:text-navy-950">
                  <Icon className="h-6 w-6" />
                </span>
                <div>
                  <p className="text-sm font-semibold text-red-600 line-through decoration-red-300">{pain}</p>
                  <p className="mt-1 text-lg font-semibold text-navy-900">{fix}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GUARANTEE BANNER */}
      <section className="blueprint relative bg-navy-900 py-20 text-white lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <SectionHeading dark center eyebrow="The FleetGuard™ guarantee" title="Promises we put in writing." intro="Four commitments on every order — whether you run one Ford or one hundred." />
          <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { big: '48h', label: 'Delivery SLA', text: 'Across Lagos and Southwest Nigeria. Miss it and we pay for your downtime.' },
              { big: '6mo', label: 'Warranty per part', text: 'Official warranty card with every part — replaced if it fails.' },
              { big: '100%', label: 'USA-direct sourcing', text: 'No grey imports, no middlemen, no guesswork on origin.' },
              { big: 'QR', label: 'Serial verification', text: 'Scan the warranty card to confirm authenticity in seconds.' },
            ].map((g, i) => (
              <div key={g.label} className="reveal bg-navy-900 p-8" style={{ transitionDelay: `${i * 90}ms` }}>
                <p className="font-display text-5xl font-black text-amber-brand">{g.big}</p>
                <p className="mt-3 font-bold">{g.label}</p>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">{g.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VERTICALS */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:py-28">
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <SectionHeading eyebrow="One trusted partner, four sectors" title="Built in Lagos. Serving businesses across Nigeria." />
          <p className="reveal max-w-md text-slate-600">
            The same verified-sourcing discipline behind FleetGuard™ powers our agriculture, commodities and IT divisions.
          </p>
        </div>
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-12">
          <VerticalCard className="lg:col-span-7 lg:row-span-2" to="/fleetguard" image="mechanic.png" icon={Wrench} tag="Flagship" title="Automotive & FleetGuard™" text="Genuine Ford parts for SUVs, trucks, pick-ups and sedans, engine oils, accessories and vehicle brokerage." tall />
          <VerticalCard className="lg:col-span-5" to="/agriculture" image="agriculture.png" icon={Sprout} title="Agriculture" text="Farming value-chain services, inputs and agri-trade." />
          <VerticalCard className="lg:col-span-5" to="/it-solutions" image="it.png" icon={Cpu} title="Information Technology" text="Infrastructure, devices and consulting for growing companies." />
          <VerticalCard className="lg:col-span-12" to="/commodities" image="commodities.png" icon={Wheat} title="Commodities & General Merchandise" text="Reliable bulk distribution and general goods trading, from warehouse to your door." wide />
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="bg-mist py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <SectionHeading center eyebrow="Ordering made simple" title="From “I need a part” to fitted in 4 steps." />
          <ol className="mt-14 grid gap-6 md:grid-cols-4">
            {[
              { t: 'Tell us your vehicle', d: 'Share model, year and VIN or a photo of the old part on WhatsApp or our catalog.' },
              { t: 'Get a verified quote', d: 'Your Parts Advisor confirms fitment and sends a clear price — usually within the hour.' },
              { t: 'Delivered in 48 hours', d: 'Dispatched to your workshop or depot anywhere in Southwest Nigeria.' },
              { t: 'Scan, fit, relax', d: 'Scan the QR warranty card to verify authenticity. Covered for 6 months.' },
            ].map((s, i) => (
              <li key={s.t} className="reveal relative rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200" style={{ transitionDelay: `${i * 90}ms` }}>
                <span className="font-mono text-sm font-bold text-amber-deep">STEP 0{i + 1}</span>
                <h3 className="mt-3 text-lg font-bold">{s.t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{s.d}</p>
                {i < 3 && <ArrowRight className="absolute top-1/2 -right-5 hidden h-5 w-5 -translate-y-1/2 text-amber-brand md:block" />}
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ESTIMATOR */}
      <section className="relative overflow-hidden bg-navy-900 py-20 text-white lg:py-28">
        <div className="blueprint absolute inset-0 opacity-60" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
          <SectionHeading dark eyebrow="Sourcing wastage estimator" title="How much is parts sourcing really costing your fleet?" intro="Move the sliders to see a quick estimate. Then let our audit find the exact figure." />
          <div className="reveal mt-12">
            <WastageEstimator />
          </div>
        </div>
      </section>

      {/* AUDIT LEAD MAGNET */}
      <section id="audit" className="mx-auto max-w-7xl scroll-mt-24 px-4 py-20 sm:px-6 lg:py-28">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr]">
          <div>
            <SectionHeading eyebrow="Risk-free fleet audit" title={<>We find ₦500k in wastage — <span className="text-amber-deep">or you get paid.</span></>} />
            <div className="reveal mt-6 space-y-4 text-lg text-slate-600">
              <p>Our FleetGuard™ audit reviews your parts history, suppliers, failure rates and downtime to uncover exactly where money is leaking.</p>
            </div>
            <div className="reveal mt-8 rounded-2xl border-2 border-dashed border-amber-brand bg-amber-50/60 p-6">
              <p className="font-mono text-xs font-bold tracking-widest text-amber-deep uppercase">The guarantee</p>
              <p className="mt-2 text-xl font-bold text-navy-900">
                Audit fee: ₦150,000. If we don't uncover at least ₦500,000 in sourcing wastage, you get the full ₦150k back —
                <span className="text-amber-deep"> plus ₦50,000 paid to you.</span>
              </p>
            </div>
            <ul className="reveal mt-8 space-y-3">
              {['Parts spend & supplier review', 'Counterfeit & wrong-fit risk report', 'Downtime cost analysis', 'A 90-day savings action plan'].map((x) => (
                <li key={x} className="flex items-center gap-3 font-semibold"><BadgeCheck className="h-5 w-5 text-verified" /> {x}</li>
              ))}
            </ul>
          </div>
          <div className="reveal rounded-3xl bg-white p-6 shadow-2xl ring-1 ring-slate-200 sm:p-10">
            <h3 className="text-2xl font-extrabold">Book your audit</h3>
            <p className="mt-1 mb-6 text-slate-600">Takes 60 seconds. An advisor calls you within one business day.</p>
            <AuditForm />
          </div>
        </div>
      </section>

      {/* PERSONAS */}
      <section className="border-t border-slate-200 bg-mist py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <SectionHeading eyebrow="Who we serve" title="Find your fastest route to what you need." />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {([
              { icon: Truck, t: 'Fleet managers & transport operators', d: 'Cut downtime and parts waste across your fleet.', cta: 'Book an audit', to: '/fleetguard', hash: 'audit' },
              { icon: Wrench, t: 'Ford owners & auto mechanics', d: 'Find the right genuine part or engine oil fast.', cta: 'Browse parts', to: '/parts' },
              { icon: Tractor, t: 'Agri enterprises & bulk buyers', d: 'Source inputs, produce and bulk goods reliably.', cta: 'Explore agriculture', to: '/agriculture' },
              { icon: Building2, t: 'Corporate IT procurement', d: 'Devices, networks and support from one vendor.', cta: 'Explore IT', to: '/it-solutions' },
            ] as const).map((p, i) => (
              <Link key={p.t} to={p.to} hash={'hash' in p ? p.hash : undefined} className="reveal group flex flex-col rounded-2xl bg-white p-6 ring-1 ring-slate-200 transition hover:-translate-y-1 hover:shadow-xl hover:ring-amber-brand" style={{ transitionDelay: `${i * 70}ms` }}>
                <p.icon className="h-8 w-8 text-amber-deep" />
                <h3 className="mt-4 text-lg leading-snug font-bold">{p.t}</h3>
                <p className="mt-2 flex-1 text-sm text-slate-600">{p.d}</p>
                <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-bold text-navy-900 group-hover:text-amber-deep">
                  {p.cta} <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-4xl px-4 py-20 sm:px-6 lg:py-24">
        <SectionHeading center eyebrow="Questions, answered" title="Before you order" />
        <div className="mt-10 divide-y divide-slate-200 rounded-2xl border border-slate-200 bg-white">
          {faqs.map((f) => (
            <details key={f.q} className="group p-6 [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex cursor-pointer items-center justify-between gap-4 text-left font-bold text-navy-900">
                {f.q}
                <Plus className="h-5 w-5 shrink-0 text-amber-deep transition group-open:rotate-45" />
              </summary>
              <p className="mt-3 leading-relaxed text-slate-600">{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      <FinalCta />
    </>
  )
}

const faqs = [
  { q: 'How do I know a part is genuine?', a: 'Every FleetGuard™ part is sourced directly from the USA and ships with an official warranty card carrying a unique serial and QR code. Scan it or enter the serial on our site and a Parts Advisor confirms it against our supplier records.' },
  { q: 'Where do you deliver within 48 hours?', a: 'Across Lagos and Southwest Nigeria — including Ogun, Oyo, Osun, Ondo and Ekiti. If we miss the 48-hour SLA on a covered order, our downtime payment guarantee applies.' },
  { q: 'What does the 6-month warranty cover?', a: 'Manufacturing defects and premature failure under normal use. Keep your warranty card; if a covered part fails within 6 months we replace it.' },
  { q: 'Do you only supply fleets?', a: 'No. We serve individual Ford owners and mechanics too. Fleets get extras like a dedicated Parts Advisor and quarterly fleet health reports.' },
  { q: 'How does the ₦150k audit guarantee work?', a: 'We audit your parts sourcing, suppliers and downtime. If we do not uncover at least ₦500,000 in sourcing wastage, we refund the full ₦150,000 and pay you an additional ₦50,000.' },
  { q: 'Why are prices not listed?', a: 'Parts are imported and prices move with exchange rates, so we quote live. Add parts to your quote list or send a WhatsApp message and you will usually get a firm price within the hour.' },
]

function VerticalCard({ to, image, icon: Icon, title, text, tag, className = '', tall = false, wide = false }: { to: '/fleetguard' | '/agriculture' | '/it-solutions' | '/commodities'; image: string; icon: typeof Wrench; title: string; text: string; tag?: string; className?: string; tall?: boolean; wide?: boolean }) {
  return (
    <Link to={to} className={`reveal group relative isolate flex min-h-[260px] flex-col justify-end overflow-hidden rounded-3xl p-7 text-white ${tall ? 'lg:min-h-[540px]' : ''} ${wide ? 'lg:min-h-[240px]' : ''} ${className}`}>
      <img src={img(image, tall ? 1100 : 900)} alt="" loading="lazy" className="absolute inset-0 -z-20 h-full w-full object-cover transition duration-700 group-hover:scale-105" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-navy-950 via-navy-950/60 to-navy-950/5" />
      {tag && <span className="absolute top-6 left-6 rounded-full bg-amber-brand px-3 py-1 text-xs font-extrabold text-navy-950 uppercase">{tag}</span>}
      <Icon className="h-8 w-8 text-amber-brand" />
      <h3 className={`mt-3 font-extrabold ${tall ? 'text-3xl' : 'text-2xl'}`}>{title}</h3>
      <p className="mt-2 max-w-md text-slate-300">{text}</p>
      <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-bold text-amber-brand">
        Explore <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
      </span>
    </Link>
  )
}
