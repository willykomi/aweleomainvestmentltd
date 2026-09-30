import { useState } from 'react'
import { BadgeCheck, Loader2, QrCode, ShieldAlert } from 'lucide-react'
import { site, submitNetlifyForm, waLink } from '@/lib/site'

// Serials on FleetGuard™ warranty cards: letters/digits, optional dashes, 8–24 chars.
const SERIAL_PATTERN = /^[A-Z0-9][A-Z0-9-]{6,22}[A-Z0-9]$/

type Status = 'idle' | 'sending' | 'sent' | 'error'

export function VerifyPanel({ initialSerial = '', compact = false }: { initialSerial?: string; compact?: boolean }) {
  const [serial, setSerial] = useState(initialSerial.toUpperCase())
  const [phone, setPhone] = useState('')
  const [touched, setTouched] = useState(false)
  const [status, setStatus] = useState<Status>('idle')

  const valid = SERIAL_PATTERN.test(serial.trim())

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault()
    setTouched(true)
    if (!valid) return
    setStatus('sending')
    try {
      await submitNetlifyForm('serial-verification', { serial: serial.trim(), phone })
      setStatus('sent')
    } catch {
      setStatus('error')
    }
  }

  if (status === 'sent') {
    return (
      <div className="text-center">
        <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-verified/15 text-verified">
          <BadgeCheck className="h-8 w-8" />
        </div>
        <h3 className="text-xl font-bold">Serial received for verification</h3>
        <p className="mt-2 text-sm text-slate-600">
          A Parts Advisor is checking <span className="font-mono font-semibold text-navy-900">{serial}</span> against our
          USA supplier records. For an instant answer, send it to us on WhatsApp.
        </p>
        <a
          href={waLink(`Hello Aweleoma, please verify this FleetGuard part serial: ${serial}`)}
          target="_blank"
          rel="noreferrer"
          className="mt-5 inline-flex items-center justify-center gap-2 rounded-lg bg-verified px-5 py-3 font-semibold text-white hover:brightness-110"
        >
          Confirm instantly on WhatsApp
        </a>
      </div>
    )
  }

  return (
    <form onSubmit={onSubmit} noValidate>
      {!compact && (
        <div className="mb-5 flex items-start gap-3 rounded-xl border border-dashed border-slate-300 bg-mist p-4 text-sm text-slate-600">
          <QrCode className="mt-0.5 h-5 w-5 shrink-0 text-navy-900" />
          <p>
            Every FleetGuard™ part ships with a warranty card carrying a serial and QR code. Scan the QR with your phone
            camera to open this check pre-filled, or type the serial below.
          </p>
        </div>
      )}
      <label className="block text-sm font-semibold" htmlFor="serial">
        Part serial number
      </label>
      <input
        id="serial"
        name="serial"
        value={serial}
        onChange={(e) => setSerial(e.target.value.toUpperCase().replace(/\s/g, ''))}
        onBlur={() => setTouched(true)}
        placeholder="e.g. FG-F150-8K2Q7D"
        aria-invalid={touched && !valid}
        aria-describedby="serial-help"
        className="mt-1.5 w-full rounded-lg border border-slate-300 bg-white px-4 py-3 font-mono text-lg tracking-wider uppercase placeholder:text-slate-400 focus:border-navy-900 focus:outline-none"
      />
      <p id="serial-help" className={`mt-1.5 text-xs ${touched && !valid ? 'text-red-600' : 'text-slate-500'}`}>
        {touched && !valid ? (
          <span className="inline-flex items-center gap-1">
            <ShieldAlert className="h-3.5 w-3.5" /> Enter the 8–24 character code printed on your warranty card.
          </span>
        ) : (
          'Letters, numbers and dashes only.'
        )}
      </p>
      <label className="mt-4 block text-sm font-semibold" htmlFor="verify-phone">
        Your phone / WhatsApp <span className="font-normal text-slate-500">(so we can send the result)</span>
      </label>
      <input
        id="verify-phone"
        name="phone"
        type="tel"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        placeholder="080..."
        className="mt-1.5 w-full rounded-lg border border-slate-300 bg-white px-4 py-3 focus:border-navy-900 focus:outline-none"
      />
      {status === 'error' && (
        <p className="mt-3 text-sm text-red-600">
          Couldn't send just now. Please try again or call {site.phoneDisplay}.
        </p>
      )}
      <button
        type="submit"
        disabled={status === 'sending'}
        className="mt-5 flex w-full items-center justify-center gap-2 rounded-lg bg-navy-900 px-5 py-3.5 font-semibold text-white transition hover:bg-navy-800 disabled:opacity-70"
      >
        {status === 'sending' ? <Loader2 className="h-5 w-5 animate-spin" /> : <BadgeCheck className="h-5 w-5 text-verified" />}
        Verify authenticity
      </button>
    </form>
  )
}
