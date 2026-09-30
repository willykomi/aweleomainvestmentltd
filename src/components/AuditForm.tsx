import { useState } from 'react'
import { CalendarCheck, CheckCircle2, Loader2 } from 'lucide-react'
import { Field, Honeypot, inputCls } from './ui'
import { site, submitNetlifyForm, waLink } from '@/lib/site'

type Status = 'idle' | 'sending' | 'sent' | 'error'

export function AuditForm() {
  const [status, setStatus] = useState<Status>('idle')
  const [name, setName] = useState('')

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const data = Object.fromEntries(new FormData(e.currentTarget)) as Record<string, string>
    if (data['bot-field']) return
    setName(data.name.split(' ')[0])
    setStatus('sending')
    try {
      await submitNetlifyForm('audit-booking', data)
      setStatus('sent')
    } catch {
      setStatus('error')
    }
  }

  if (status === 'sent') {
    return (
      <div className="py-6 text-center">
        <CheckCircle2 className="mx-auto h-14 w-14 text-verified" />
        <h3 className="mt-4 text-2xl font-extrabold">Audit request received{name ? `, ${name}` : ''}.</h3>
        <p className="mx-auto mt-2 max-w-sm text-slate-600">
          A FleetGuard™ advisor calls you within one business day to schedule your audit. Want to move faster?
        </p>
        <a
          href={waLink('Hello Aweleoma, I just booked a FleetGuard fleet audit on your website and want to schedule it.')}
          target="_blank"
          rel="noreferrer"
          className="mt-5 inline-flex rounded-lg bg-[#25D366] px-5 py-3 font-semibold text-white hover:brightness-105"
        >
          Schedule now on WhatsApp
        </a>
      </div>
    )
  }

  return (
    <form name="audit-booking" onSubmit={onSubmit} className="grid gap-4 sm:grid-cols-2">
      <input type="hidden" name="form-name" value="audit-booking" />
      <Honeypot />
      <Field label="Full name" htmlFor="a-name">
        <input id="a-name" name="name" required autoComplete="name" className={inputCls} placeholder="Adaeze Okafor" />
      </Field>
      <Field label="Company" htmlFor="a-company">
        <input id="a-company" name="company" required autoComplete="organization" className={inputCls} placeholder="Company / fleet operator" />
      </Field>
      <Field label="Phone / WhatsApp" htmlFor="a-phone">
        <input id="a-phone" name="phone" type="tel" required autoComplete="tel" className={inputCls} placeholder="080..." />
      </Field>
      <Field label="Work email" htmlFor="a-email">
        <input id="a-email" name="email" type="email" required autoComplete="email" className={inputCls} placeholder="you@company.com" />
      </Field>
      <Field label="Fleet size" htmlFor="a-fleet">
        <select id="a-fleet" name="fleetSize" required className={inputCls} defaultValue="">
          <option value="" disabled>Select</option>
          <option>1–5 vehicles</option>
          <option>6–15 vehicles</option>
          <option>16–50 vehicles</option>
          <option>51–150 vehicles</option>
          <option>150+ vehicles</option>
        </select>
      </Field>
      <Field label="Main Ford models" htmlFor="a-models" optional>
        <input id="a-models" name="models" className={inputCls} placeholder="Ranger, F-150, Everest…" />
      </Field>
      <div className="sm:col-span-2">
        <Field label="Fleet location" htmlFor="a-location">
          <input id="a-location" name="location" required className={inputCls} placeholder="e.g. Ikeja, Lagos / Ibadan / Abeokuta" />
        </Field>
      </div>
      {status === 'error' && (
        <p className="text-sm text-red-600 sm:col-span-2">
          We couldn't submit your request. Please try again, or call {site.phoneDisplay}.
        </p>
      )}
      <button
        type="submit"
        disabled={status === 'sending'}
        className="flex items-center justify-center gap-2 rounded-lg bg-amber-brand px-6 py-4 text-base font-extrabold text-navy-950 shadow-lg shadow-amber-900/20 transition hover:bg-amber-deep hover:text-white disabled:opacity-70 sm:col-span-2"
      >
        {status === 'sending' ? <Loader2 className="h-5 w-5 animate-spin" /> : <CalendarCheck className="h-5 w-5" />}
        Book my risk-free ₦150k audit
      </button>
      <p className="text-center text-xs text-slate-500 sm:col-span-2">
        No payment now. We confirm scope and schedule with you first.
      </p>
    </form>
  )
}
