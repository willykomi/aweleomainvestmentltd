import { useEffect } from 'react'
import { ShieldCheck, X } from 'lucide-react'
import { VerifyPanel } from './VerifyPanel'

export function VerifyModal({ initialSerial, onClose }: { initialSerial: string; onClose: () => void }) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose()
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [onClose])

  return (
    <div className="fixed inset-0 z-[70] flex items-end justify-center sm:items-center" role="dialog" aria-modal="true" aria-labelledby="verify-title">
      <button className="absolute inset-0 bg-navy-950/70 backdrop-blur-sm" onClick={onClose} aria-label="Close" />
      <div className="relative w-full max-w-md animate-rise rounded-t-2xl bg-white p-6 shadow-2xl sm:rounded-2xl sm:p-8">
        <button onClick={onClose} className="absolute top-4 right-4 rounded-full p-1.5 text-slate-500 hover:bg-slate-100" aria-label="Close">
          <X className="h-5 w-5" />
        </button>
        <div className="mb-5 flex items-center gap-3">
          <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-verified/15 text-verified">
            <ShieldCheck className="h-6 w-6" />
          </span>
          <div>
            <h2 id="verify-title" className="text-lg font-bold">Verify a genuine part</h2>
            <p className="text-sm text-slate-500">FleetGuard™ serial &amp; QR check</p>
          </div>
        </div>
        <VerifyPanel initialSerial={initialSerial} />
      </div>
    </div>
  )
}
