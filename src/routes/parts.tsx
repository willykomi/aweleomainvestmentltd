import { createFileRoute } from '@tanstack/react-router'
import { useEffect, useMemo, useState } from 'react'
import {
  BatteryCharging,
  Check,
  CheckCircle2,
  CircleDot,
  Droplets,
  Filter,
  Loader2,
  MessageCircle,
  Package,
  Plus,
  Search,
  ShieldCheck,
  Thermometer,
  Trash2,
  Wrench,
  X,
} from 'lucide-react'
import { categories, parts, stockLabel, vehicleModels } from '@/data/parts'
import type { Category, Part, VehicleModel } from '@/data/parts'
import { Eyebrow, Honeypot, inputCls } from '@/components/ui'
import { useVerify } from '@/components/VerifyContext'
import { submitNetlifyForm, waLink } from '@/lib/site'

type CatalogSearch = { q?: string; category?: Category; model?: VehicleModel }

export const Route = createFileRoute('/parts')({
  validateSearch: (s: Record<string, unknown>): CatalogSearch => ({
    q: typeof s.q === 'string' ? s.q : undefined,
    category: categories.includes(s.category as Category) ? (s.category as Category) : undefined,
    model: vehicleModels.includes(s.model as VehicleModel) ? (s.model as VehicleModel) : undefined,
  }),
  head: () => ({
    meta: [
      { title: 'Genuine Ford Parts Lagos — F-150, Ranger, Explorer Catalog | Aweleoma FleetGuard™' },
      { name: 'description', content: 'Search genuine USA-direct Ford parts and engine oils in Lagos for F-150, Ranger, Explorer, Everest and more. 48-hour delivery, 6-month warranty, instant WhatsApp quotes.' },
    ],
  }),
  component: Catalog,
})

const categoryIcon: Record<Category, typeof Wrench> = {
  'Engine Oils': Droplets,
  Filters: Filter,
  'Brake Systems': CircleDot,
  Suspension: Wrench,
  'Ignition & Electrical': BatteryCharging,
  Cooling: Thermometer,
  Accessories: Package,
}

const QUOTE_KEY = 'aweleoma-quote'

function Catalog() {
  const search = Route.useSearch()
  const [query, setQuery] = useState(search.q ?? '')
  const [models, setModels] = useState<Array<VehicleModel>>(search.model ? [search.model] : [])
  const [category, setCategory] = useState<Category | 'All'>(search.category ?? 'All')
  const [quote, setQuote] = useState<Array<string>>([])
  const [drawer, setDrawer] = useState(false)
  const { open: openVerify } = useVerify()

  useEffect(() => {
    try {
      const saved = JSON.parse(localStorage.getItem(QUOTE_KEY) ?? '[]')
      if (Array.isArray(saved)) setQuote(saved.filter((id) => parts.some((p) => p.id === id)))
    } catch {
      /* ignore corrupt storage */
    }
  }, [])
  useEffect(() => {
    localStorage.setItem(QUOTE_KEY, JSON.stringify(quote))
  }, [quote])
  useEffect(() => {
    if (search.category) setCategory(search.category)
  }, [search.category])

  const results = useMemo(() => {
    const q = query.trim().toLowerCase()
    return parts.filter(
      (p) =>
        (category === 'All' || p.category === category) &&
        (models.length === 0 || p.models.some((m) => models.includes(m))) &&
        (!q || `${p.name} ${p.spec} ${p.category} ${p.models.join(' ')}`.toLowerCase().includes(q)),
    )
  }, [query, models, category])

  const toggleModel = (m: VehicleModel) => setModels((cur) => (cur.includes(m) ? cur.filter((x) => x !== m) : [...cur, m]))
  const toggleQuote = (id: string) => setQuote((cur) => (cur.includes(id) ? cur.filter((x) => x !== id) : [...cur, id]))
  const clearFilters = () => {
    setQuery('')
    setModels([])
    setCategory('All')
  }

  return (
    <>
      <section className="blueprint bg-navy-900 text-white">
        <div className="mx-auto max-w-7xl px-4 pt-14 pb-24 sm:px-6">
          <Eyebrow dark>Automotive & FleetGuard™ catalog</Eyebrow>
          <h1 className="mt-3 max-w-3xl text-4xl font-black sm:text-5xl">Genuine Ford parts &amp; engine oils</h1>
          <p className="mt-4 max-w-2xl text-lg text-slate-300">
            Every part USA-direct, serial-verified and covered for 6 months. Build your list and get a live price on WhatsApp in minutes.
          </p>
        </div>
      </section>

      <section className="mx-auto -mt-14 max-w-7xl px-4 pb-24 sm:px-6">
        {/* Search & filters */}
        <div className="rounded-2xl bg-white p-4 shadow-xl ring-1 ring-slate-200 sm:p-6">
          <div className="relative">
            <Search className="pointer-events-none absolute top-1/2 left-4 h-5 w-5 -translate-y-1/2 text-slate-400" />
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search parts, e.g. “Ranger oil filter” or “brake pads”"
              aria-label="Search parts"
              className="w-full rounded-xl border border-slate-300 bg-mist py-4 pr-4 pl-12 text-base focus:border-navy-900 focus:bg-white focus:outline-none"
            />
          </div>
          <div className="mt-5">
            <p className="text-xs font-bold tracking-wider text-slate-500 uppercase">Vehicle model <span className="font-normal normal-case">(select any)</span></p>
            <div className="mt-2 flex flex-wrap gap-2">
              {vehicleModels.map((m) => {
                const on = models.includes(m)
                return (
                  <button key={m} onClick={() => toggleModel(m)} aria-pressed={on} className={`inline-flex items-center gap-1.5 rounded-lg border px-3 py-1.5 text-sm font-semibold transition ${on ? 'border-navy-900 bg-navy-900 text-white' : 'border-slate-300 hover:border-navy-900'}`}>
                    {on && <Check className="h-3.5 w-3.5 text-amber-brand" />} Ford {m}
                  </button>
                )
              })}
            </div>
          </div>
          <div className="mt-4">
            <p className="text-xs font-bold tracking-wider text-slate-500 uppercase">Category</p>
            <div className="mt-2 flex gap-2 overflow-x-auto pb-1">
              {(['All', ...categories] as const).map((c) => (
                <button key={c} onClick={() => setCategory(c)} aria-pressed={category === c} className={`shrink-0 rounded-full px-4 py-2 text-sm font-semibold transition ${category === c ? 'bg-amber-brand text-navy-950' : 'bg-mist text-navy-800 hover:bg-slate-200'}`}>
                  {c}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-between gap-3">
          <p className="text-sm text-slate-600" aria-live="polite">
            <span className="font-bold text-navy-900">{results.length}</span> part{results.length === 1 ? '' : 's'} found
          </p>
          <button onClick={() => openVerify()} className="inline-flex items-center gap-1.5 text-sm font-semibold text-verified hover:underline">
            <ShieldCheck className="h-4 w-4" /> Verify a part you already bought
          </button>
        </div>

        {results.length === 0 ? (
          <div className="mt-6 rounded-2xl border-2 border-dashed border-slate-300 p-12 text-center">
            <Search className="mx-auto h-10 w-10 text-slate-400" />
            <h2 className="mt-4 text-xl font-bold">Not listed? We can still source it.</h2>
            <p className="mx-auto mt-2 max-w-md text-slate-600">Our catalog shows fast-moving parts. Send us your model, year and VIN and we'll source any genuine Ford part from the USA.</p>
            <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
              <a href={waLink(`Hello Aweleoma, I'm looking for: ${query || 'a Ford part'}. My vehicle is: `)} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#25D366] px-5 py-3 font-bold text-white">
                <MessageCircle className="h-5 w-5" /> Request on WhatsApp
              </a>
              <button onClick={clearFilters} className="rounded-lg border border-slate-300 px-5 py-3 font-semibold">Clear filters</button>
            </div>
          </div>
        ) : (
          <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {results.map((p) => (
              <PartCard key={p.id} part={p} inQuote={quote.includes(p.id)} onToggle={() => toggleQuote(p.id)} />
            ))}
          </div>
        )}
      </section>

      {/* Quote bar */}
      {quote.length > 0 && !drawer && (
        <div className="fixed inset-x-0 bottom-0 z-50 border-t border-slate-200 bg-white/95 backdrop-blur sm:inset-x-auto sm:bottom-6 sm:left-6 sm:rounded-2xl sm:border sm:shadow-2xl">
          <div className="flex items-center gap-4 px-4 py-3 pr-20 sm:pr-4">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-navy-900 font-bold text-amber-brand">{quote.length}</span>
            <div className="text-sm">
              <p className="font-bold">Part{quote.length === 1 ? '' : 's'} in your quote list</p>
              <p className="text-slate-500">Get a live price in minutes</p>
            </div>
            <button onClick={() => setDrawer(true)} className="ml-auto rounded-lg bg-amber-brand px-4 py-2.5 text-sm font-bold text-navy-950 hover:bg-amber-deep hover:text-white">
              Get quote
            </button>
          </div>
        </div>
      )}
      {drawer && <QuoteDrawer ids={quote} onRemove={toggleQuote} onClose={() => setDrawer(false)} onDone={() => setQuote([])} />}
    </>
  )
}

function PartCard({ part, inQuote, onToggle }: { part: Part; inQuote: boolean; onToggle: () => void }) {
  const Icon = categoryIcon[part.category]
  const stock = stockLabel[part.stock]
  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl bg-white ring-1 ring-slate-200 transition hover:-translate-y-0.5 hover:shadow-xl hover:ring-navy-900/20">
      <div className="blueprint relative flex h-36 items-center justify-center bg-navy-900">
        <Icon className="h-14 w-14 text-amber-brand transition duration-500 group-hover:scale-110" strokeWidth={1.4} />
        <span className={`absolute top-3 left-3 rounded-full px-2.5 py-1 text-[11px] font-bold ring-1 ${stock.cls}`}>{stock.text}</span>
        <span className="absolute top-3 right-3 inline-flex items-center gap-1 rounded-full bg-verified/90 px-2 py-1 text-[11px] font-bold text-white">
          <ShieldCheck className="h-3 w-3" /> Genuine
        </span>
      </div>
      <div className="flex flex-1 flex-col p-5">
        <p className="font-mono text-[11px] font-semibold tracking-wider text-amber-deep uppercase">{part.category} · {part.ref}</p>
        <h3 className="mt-1.5 text-lg leading-snug font-bold">{part.name}</h3>
        <p className="mt-1.5 text-sm text-slate-600">{part.spec}</p>
        <p className="mt-3 text-xs text-slate-500">
          <span className="font-semibold text-navy-800">Fits:</span> {part.models.map((m) => `Ford ${m}`).join(', ')}
        </p>
        <div className="mt-auto grid grid-cols-2 gap-2 pt-5">
          <a href={waLink(`Hello Aweleoma, please quote: ${part.name}. My vehicle (model/year): `)} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-1.5 rounded-lg bg-[#25D366] px-3 py-2.5 text-sm font-bold text-white hover:brightness-105">
            <MessageCircle className="h-4 w-4" /> WhatsApp
          </a>
          <button onClick={onToggle} aria-pressed={inQuote} className={`inline-flex items-center justify-center gap-1.5 rounded-lg border px-3 py-2.5 text-sm font-bold transition ${inQuote ? 'border-navy-900 bg-navy-900 text-white' : 'border-slate-300 text-navy-900 hover:border-navy-900'}`}>
            {inQuote ? <Check className="h-4 w-4 text-amber-brand" /> : <Plus className="h-4 w-4" />} {inQuote ? 'Added' : 'Add to quote'}
          </button>
        </div>
      </div>
    </article>
  )
}

function QuoteDrawer({ ids, onRemove, onClose, onDone }: { ids: Array<string>; onRemove: (id: string) => void; onClose: () => void; onDone: () => void }) {
  const items = parts.filter((p) => ids.includes(p.id))
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')
  const [vehicle, setVehicle] = useState('')
  const [city, setCity] = useState('')
  const itemText = items.map((p, i) => `${i + 1}. ${p.name}`).join('\n')

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose()
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [onClose])

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const data = Object.fromEntries(new FormData(e.currentTarget)) as Record<string, string>
    if (data['bot-field']) return
    setStatus('sending')
    try {
      await submitNetlifyForm('parts-quote', { ...data, items: itemText })
      setStatus('sent')
      onDone()
    } catch {
      setStatus('error')
    }
  }

  const waMessage = `Hello Aweleoma, please quote these genuine Ford parts:\n${itemText}\n\nVehicle: ${vehicle || '—'}\nDelivery city: ${city || '—'}`

  return (
    <div className="fixed inset-0 z-[65] flex justify-end" role="dialog" aria-modal="true" aria-labelledby="quote-title">
      <button className="absolute inset-0 bg-navy-950/60 backdrop-blur-sm" onClick={onClose} aria-label="Close quote list" />
      <div className="relative flex h-full w-full max-w-md animate-rise flex-col overflow-y-auto bg-white shadow-2xl">
        <div className="flex items-center justify-between border-b border-slate-200 p-5">
          <h2 id="quote-title" className="text-xl font-extrabold">Your quote list</h2>
          <button onClick={onClose} className="rounded-full p-1.5 hover:bg-slate-100" aria-label="Close"><X className="h-5 w-5" /></button>
        </div>
        {status === 'sent' ? (
          <div className="p-8 text-center">
            <CheckCircle2 className="mx-auto h-14 w-14 text-verified" />
            <h3 className="mt-4 text-2xl font-extrabold">Quote request sent</h3>
            <p className="mt-2 text-slate-600">Your Parts Advisor will call or WhatsApp you with a firm price shortly.</p>
            <button onClick={onClose} className="mt-6 rounded-lg bg-navy-900 px-5 py-3 font-bold text-white">Continue browsing</button>
          </div>
        ) : (
          <>
            <ul className="divide-y divide-slate-100 px-5">
              {items.map((p) => (
                <li key={p.id} className="flex items-start justify-between gap-3 py-3">
                  <div>
                    <p className="text-sm font-semibold">{p.name}</p>
                    <p className="text-xs text-slate-500">{stockLabel[p.stock].text}</p>
                  </div>
                  <button onClick={() => onRemove(p.id)} className="rounded p-1 text-slate-400 hover:text-red-600" aria-label={`Remove ${p.name}`}><Trash2 className="h-4 w-4" /></button>
                </li>
              ))}
              {items.length === 0 && <li className="py-6 text-center text-sm text-slate-500">Your list is empty. Add parts from the catalog.</li>}
            </ul>
            <form name="parts-quote" onSubmit={onSubmit} className="mt-2 space-y-4 border-t border-slate-200 bg-mist p-5">
              <input type="hidden" name="form-name" value="parts-quote" />
              <Honeypot />
              <div className="grid grid-cols-2 gap-3">
                <label className="text-sm font-semibold">Vehicle &amp; year
                  <input name="vehicle" required value={vehicle} onChange={(e) => setVehicle(e.target.value)} className={inputCls} placeholder="Ranger 2019" />
                </label>
                <label className="text-sm font-semibold">Delivery city
                  <input name="city" required value={city} onChange={(e) => setCity(e.target.value)} className={inputCls} placeholder="Ikeja" />
                </label>
              </div>
              <a href={waLink(waMessage)} target="_blank" rel="noreferrer" className={`flex items-center justify-center gap-2 rounded-lg bg-[#25D366] py-3.5 font-bold text-white hover:brightness-105 ${items.length === 0 ? 'pointer-events-none opacity-50' : ''}`}>
                <MessageCircle className="h-5 w-5" /> Send list on WhatsApp (fastest)
              </a>
              <div className="flex items-center gap-3 text-xs text-slate-400"><span className="h-px flex-1 bg-slate-300" />or get a callback<span className="h-px flex-1 bg-slate-300" /></div>
              <div className="grid grid-cols-2 gap-3">
                <label className="text-sm font-semibold">Name
                  <input name="name" required autoComplete="name" className={inputCls} />
                </label>
                <label className="text-sm font-semibold">Phone
                  <input name="phone" type="tel" required autoComplete="tel" className={inputCls} />
                </label>
              </div>
              {status === 'error' && <p className="text-sm text-red-600">Couldn't send. Please try WhatsApp instead.</p>}
              <button type="submit" disabled={status === 'sending' || items.length === 0} className="flex w-full items-center justify-center gap-2 rounded-lg bg-navy-900 py-3.5 font-bold text-white hover:bg-navy-800 disabled:opacity-50">
                {status === 'sending' && <Loader2 className="h-5 w-5 animate-spin" />} Request a callback quote
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  )
}
