import { useState } from 'react'
import { CheckCircle2, Loader2, Send } from 'lucide-react'
import { Field, Honeypot, inputCls } from './ui'
import { departments, site, submitNetlifyForm, waLink } from '@/lib/site'
import type { DepartmentId } from '@/lib/site'

type Status = 'idle' | 'sending' | 'sent' | 'error'

const placeholders: Record<DepartmentId, string> = {
  automotive: 'Vehicle model & year, part(s) needed, quantity, delivery city…',
  audit: 'Fleet size, models, current parts supplier challenges…',
  brokerage: 'Vehicle you want to buy or sell, budget, timeline…',
  agriculture: 'Produce / inputs, volumes, location, delivery timeline…',
  it: 'Devices, network, software or support needed; number of users/sites…',
  commodities: 'Goods, quantities, packaging, delivery location…',
}

export function InquiryForm({ defaultDepartment = 'automotive', lockDepartment = false }: { defaultDepartment?: DepartmentId; lockDepartment?: boolean }) {
  const [dept, setDept] = useState<DepartmentId>(defaultDepartment)
  const [status, setStatus] = useState<Status>('idle')
  const deptLabel = departments.find((d) => d.id === dept)?.label ?? ''

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const data = Object.fromEntries(new FormData(e.currentTarget)) as Record<string, string>
    if (data['bot-field']) return
    setStatus('sending')
    try {
      await submitNetlifyForm('inquiry', { ...data, department: deptLabel })
      setStatus('sent')
    } catch {
      setStatus('error')
    }
  }

  if (status === 'sent') {
    return (
      <div className="py-8 text-center">
        <CheckCircle2 className="mx-auto h-14 w-14 text-verified" />
        <h3 className="mt-4 text-2xl font-extrabold">Thank you — your enquiry is with our {deptLabel.split(' ')[0]} team.</h3>
        <p className="mx-auto mt-2 max-w-md text-slate-600">We respond within one business day. For urgent requests, message us on WhatsApp.</p>
        <a href={waLink(`Hello Aweleoma, I just sent a ${deptLabel} enquiry on your website.`)} target="_blank" rel="noreferrer" className="mt-5 inline-flex rounded-lg bg-[#25D366] px-5 py-3 font-semibold text-white">
          Continue on WhatsApp
        </a>
      </div>
    )
  }

  return (
    <form name="inquiry" onSubmit={onSubmit} className="grid gap-4 sm:grid-cols-2">
      <input type="hidden" name="form-name" value="inquiry" />
      <Honeypot />
      {!lockDepartment && (
        <fieldset className="sm:col-span-2">
          <legend className="text-sm font-semibold text-navy-900">Which team should handle this?</legend>
          <div className="mt-2 flex flex-wrap gap-2">
            {departments.map((d) => (
              <button
                type="button"
                key={d.id}
                onClick={() => setDept(d.id)}
                aria-pressed={dept === d.id}
                className={`rounded-full border px-3.5 py-2 text-sm font-semibold transition ${dept === d.id ? 'border-navy-900 bg-navy-900 text-white' : 'border-slate-300 text-navy-800 hover:border-navy-900'}`}
              >
                {d.label}
              </button>
            ))}
          </div>
        </fieldset>
      )}
      <Field label="Full name" htmlFor="i-name">
        <input id="i-name" name="name" required autoComplete="name" className={inputCls} />
      </Field>
      <Field label="Company" htmlFor="i-company" optional>
        <input id="i-company" name="company" autoComplete="organization" className={inputCls} />
      </Field>
      <Field label="Phone / WhatsApp" htmlFor="i-phone">
        <input id="i-phone" name="phone" type="tel" required autoComplete="tel" className={inputCls} placeholder="080..." />
      </Field>
      <Field label="Email" htmlFor="i-email">
        <input id="i-email" name="email" type="email" required autoComplete="email" className={inputCls} />
      </Field>
      <div className="sm:col-span-2">
        <Field label="How can we help?" htmlFor="i-message">
          <textarea id="i-message" name="message" required rows={4} className={inputCls} placeholder={placeholders[dept]} />
        </Field>
      </div>
      {status === 'error' && <p className="text-sm text-red-600 sm:col-span-2">Something went wrong. Please retry or call {site.phoneDisplay}.</p>}
      <button type="submit" disabled={status === 'sending'} className="flex items-center justify-center gap-2 rounded-lg bg-navy-900 px-6 py-4 font-bold text-white transition hover:bg-navy-800 disabled:opacity-70 sm:col-span-2">
        {status === 'sending' ? <Loader2 className="h-5 w-5 animate-spin" /> : <Send className="h-5 w-5 text-amber-brand" />}
        Send enquiry
      </button>
    </form>
  )
}
