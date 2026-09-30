import { createContext, useContext, useState } from 'react'
import type { ReactNode } from 'react'
import { VerifyModal } from './VerifyModal'

const Ctx = createContext<{ open: (serial?: string) => void }>({ open: () => {} })

export function VerifyProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<{ open: boolean; serial: string }>({ open: false, serial: '' })
  return (
    <Ctx.Provider value={{ open: (serial = '') => setState({ open: true, serial }) }}>
      {children}
      {state.open && <VerifyModal initialSerial={state.serial} onClose={() => setState({ open: false, serial: '' })} />}
    </Ctx.Provider>
  )
}

export const useVerify = () => useContext(Ctx)
