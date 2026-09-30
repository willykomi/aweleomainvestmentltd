export const site = {
  name: 'Aweleoma Investment Ltd',
  shortName: 'Aweleoma',
  rc: 'RC 1556828',
  incorporated: 'January 29, 2019',
  address: 'No. 1A Ojelabi Street, Mangoro, Ikeja, Lagos State, Nigeria',
  addressShort: '1A Ojelabi St, Mangoro, Ikeja, Lagos',
  whatsapp: '2347120016135',
  whatsappDisplay: '+234 712 001 6135',
  phone: '+2348130800464',
  phoneDisplay: '+234 813 080 0464',
  email: 'aweleomainvestmentltd@gmail.com',
  mapQuery: 'Ojelabi Street, Mangoro, Ikeja, Lagos, Nigeria',
}

export function waLink(message: string) {
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`
}

export function img(file: string, w: number, h?: number) {
  const size = h ? `&h=${h}&fit=cover` : ''
  return `/.netlify/images?url=/img/${file}&w=${w}${size}&fm=webp&q=72`
}

export const departments = [
  { id: 'automotive', label: 'Automotive & FleetGuard™ parts' },
  { id: 'audit', label: 'FleetGuard™ fleet audit' },
  { id: 'brokerage', label: 'Vehicle brokerage' },
  { id: 'agriculture', label: 'Agriculture & agri-trade' },
  { id: 'it', label: 'IT solutions & infrastructure' },
  { id: 'commodities', label: 'Commodities & general merchandise' },
] as const

export type DepartmentId = (typeof departments)[number]['id']

export function encodeForm(data: Record<string, string>) {
  return new URLSearchParams(data).toString()
}

export async function submitNetlifyForm(formName: string, data: Record<string, string>) {
  const res = await fetch('/__forms.html', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: encodeForm({ 'form-name': formName, ...data }),
  })
  if (!res.ok) throw new Error(`Submission failed (${res.status})`)
}
