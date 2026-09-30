import { createFileRoute } from '@tanstack/react-router'
import { ShieldCheck } from 'lucide-react'
import { VerifyPanel } from '@/components/VerifyPanel'
import { Eyebrow } from '@/components/ui'

// Target of the QR codes printed on FleetGuard™ warranty cards: /verify?serial=XXXX
export const Route = createFileRoute('/verify')({
  validateSearch: (s: Record<string, unknown>): { serial?: string } => ({
    serial: typeof s.serial === 'string' ? s.serial.slice(0, 24) : undefined,
  }),
  head: () => ({
    meta: [
      { title: 'Verify a Genuine FleetGuard™ Ford Part — Aweleoma Investment Ltd' },
      { name: 'description', content: 'Check the serial or QR code on your FleetGuard™ warranty card to confirm your Ford part is genuine and USA-sourced.' },
    ],
  }),
  component: Verify,
})

function Verify() {
  const { serial } = Route.useSearch()
  return (
    <section className="blueprint min-h-[70vh] bg-navy-900 px-4 py-16 sm:py-24">
      <div className="mx-auto max-w-lg">
        <div className="text-center text-white">
          <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-verified/20 text-verified">
            <ShieldCheck className="h-9 w-9" />
          </span>
          <div className="mt-5"><Eyebrow dark>FleetGuard™ authenticity check</Eyebrow></div>
          <h1 className="mt-3 text-3xl font-black sm:text-4xl">Is your part genuine?</h1>
          <p className="mt-3 text-slate-300">Confirm your part against our USA supplier records.</p>
        </div>
        <div className="mt-8 rounded-3xl bg-white p-6 shadow-2xl sm:p-8">
          <VerifyPanel initialSerial={serial ?? ''} />
        </div>
      </div>
    </section>
  )
}
