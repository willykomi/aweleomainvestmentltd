import { useState } from 'react'
import { Link } from '@tanstack/react-router'
import { ArrowRight } from 'lucide-react'

const naira = (n: number) => '₦' + Math.round(n).toLocaleString('en-NG')

// Rough model of avoidable sourcing losses: overpayment to middlemen, parts that
// fail early (fake/grey-market) and fleet downtime while waiting for parts.
export function WastageEstimator() {
  const [vehicles, setVehicles] = useState(12)
  const [spend, setSpend] = useState(180000)
  const [downDays, setDownDays] = useState(3)

  const annualSpend = vehicles * spend * 12
  const overpay = annualSpend * 0.12
  const earlyFailure = annualSpend * 0.1
  const downtime = vehicles * downDays * 12 * 0.35 * 45000
  const total = overpay + earlyFailure + downtime
  const qualifies = total >= 500000

  return (
    <div className="grid gap-8 lg:grid-cols-[1fr_1fr]">
      <div className="space-y-7">
        <Slider label="Ford vehicles in your fleet" value={vehicles} min={1} max={150} step={1} onChange={setVehicles} display={String(vehicles)} />
        <Slider label="Average parts spend per vehicle / month" value={spend} min={20000} max={1000000} step={10000} onChange={setSpend} display={naira(spend)} />
        <Slider label="Days a vehicle waits for parts / month" value={downDays} min={0} max={15} step={1} onChange={setDownDays} display={`${downDays} day${downDays === 1 ? '' : 's'}`} />
        <p className="text-xs leading-relaxed text-slate-400">
          Indicative estimate based on typical Lagos fleet sourcing patterns: middleman mark-ups, early failure of non-genuine
          parts, and idle-vehicle cost. Your audit replaces this with real numbers.
        </p>
      </div>
      <div className="flex flex-col justify-between rounded-2xl border border-amber-brand/30 bg-navy-950/60 p-6 sm:p-8">
        <div>
          <p className="font-mono text-xs tracking-widest text-amber-brand uppercase">Estimated avoidable loss / year</p>
          <p className="mt-2 font-display text-4xl font-black text-white tabular-nums sm:text-5xl">{naira(total)}</p>
          <dl className="mt-6 space-y-3 text-sm">
            {[
              ['Middleman overpayment', overpay],
              ['Early failure of non-genuine parts', earlyFailure],
              ['Downtime while waiting for parts', downtime],
            ].map(([k, v]) => (
              <div key={k as string} className="flex justify-between gap-4 border-b border-white/10 pb-2">
                <dt className="text-slate-300">{k}</dt>
                <dd className="font-semibold text-white tabular-nums">{naira(v as number)}</dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="mt-6">
          <p className="text-sm text-slate-300">
            {qualifies
              ? 'That is above our ₦500k guarantee threshold — an audit is very likely to pay for itself.'
              : 'Even small fleets benefit — and if we find less than ₦500k in wastage, the audit is refunded plus ₦50k to you.'}
          </p>
          <Link to="/fleetguard" hash="audit" className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-amber-brand px-5 py-3.5 font-bold text-navy-950 hover:bg-amber-deep hover:text-white">
            Verify it with a risk-free audit <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  )
}

function Slider(props: { label: string; value: number; min: number; max: number; step: number; onChange: (v: number) => void; display: string }) {
  const id = props.label.replace(/\W+/g, '-').toLowerCase()
  const pct = ((props.value - props.min) / (props.max - props.min)) * 100
  return (
    <div>
      <div className="flex items-baseline justify-between gap-4">
        <label htmlFor={id} className="text-sm font-semibold text-slate-200">{props.label}</label>
        <span className="font-mono text-lg font-semibold text-amber-brand tabular-nums">{props.display}</span>
      </div>
      <input
        id={id}
        type="range"
        min={props.min}
        max={props.max}
        step={props.step}
        value={props.value}
        onChange={(e) => props.onChange(Number(e.target.value))}
        className="mt-3 h-2 w-full cursor-pointer appearance-none rounded-full accent-amber-brand"
        style={{ background: `linear-gradient(90deg, #f59e0b ${pct}%, rgba(255,255,255,0.15) ${pct}%)` }}
      />
    </div>
  )
}
