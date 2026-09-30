import { createFileRoute } from '@tanstack/react-router'
import { ArrowRight, Boxes, Car, Handshake, PackageSearch, ShieldCheck, Store, Warehouse } from 'lucide-react'
import { ServicePage } from '@/components/ServicePage'
import { SectionHeading } from '@/components/ui'
import { waLink } from '@/lib/site'

export const Route = createFileRoute('/commodities')({
  head: () => ({
    meta: [
      { title: 'Commodities Trading, General Merchandise & Vehicle Brokerage Lagos — Aweleoma' },
      { name: 'description', content: 'Bulk commodities distribution, general merchandise and trusted vehicle brokerage from Aweleoma Investment Ltd, Ikeja, Lagos.' },
    ],
  }),
  component: Commodities,
})

function Commodities() {
  return (
    <ServicePage
      eyebrow="Commodities & general merchandise"
      title={<>Bulk goods, delivered <span className="text-amber-brand">as promised.</span></>}
      intro="Distribution and general goods trading for businesses that need dependable supply, fair pricing and clear documentation."
      image="commodities.png"
      imageAlt="A Lagos warehouse with stacked grain sacks and pallets of packaged goods"
      department="commodities"
      whatsappMessage="Hello Aweleoma, I have a commodities / merchandise enquiry: "
      highlights={['Bulk & recurring orders', 'Transparent pricing', 'Warehouse to doorstep', 'CAC-registered supplier']}
      services={[
        { icon: Boxes, title: 'Commodities distribution', text: 'Grains, food staples and raw materials supplied in bulk to processors and distributors.' },
        { icon: Store, title: 'General merchandise', text: 'Everyday goods and supplies for retailers, offices and institutions.' },
        { icon: PackageSearch, title: 'Procurement on request', text: 'Tell us what you need — we source, verify and deliver it.' },
        { icon: Warehouse, title: 'Storage & consolidation', text: 'Coordinated warehousing and consolidation of multi-supplier orders.' },
        { icon: Handshake, title: 'Supply contracts', text: 'Recurring supply agreements with agreed volumes, schedules and prices.' },
        { icon: Car, title: 'Vehicle brokerage', text: 'Buy or sell vehicles with verified history and a trusted intermediary.' },
      ]}
      useCases={[
        { who: 'Retail chain', challenge: 'Stock-outs from unreliable wholesalers.', outcome: 'A fixed replenishment schedule with a single accountable supplier.' },
        { who: 'Institution / office', challenge: 'Many small purchases from many vendors.', outcome: 'Consolidated monthly supply with one invoice.' },
        { who: 'Fleet owner', challenge: 'Selling old vehicles and buying replacements safely.', outcome: 'Brokered sales and purchases with inspection and paperwork handled.' },
      ]}
    >
      <section id="brokerage" className="scroll-mt-24 bg-mist py-20 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:items-center">
          <SectionHeading eyebrow="Vehicle brokerage" title="Buy or sell a vehicle without the usual risk." intro="We handle the search, inspection, negotiation and paperwork — with the same verification mindset behind FleetGuard™. Ford SUVs, trucks and pick-ups are our speciality." />
          <div className="reveal rounded-3xl bg-white p-8 shadow-xl ring-1 ring-slate-200">
            <ul className="space-y-4">
              {['Sourcing to your budget and spec', 'Pre-purchase inspection & history checks', 'Fair negotiation on your behalf', 'Documentation and handover support'].map((x) => (
                <li key={x} className="flex items-center gap-3 font-semibold"><ShieldCheck className="h-5 w-5 text-verified" /> {x}</li>
              ))}
            </ul>
            <a href={waLink('Hello Aweleoma, I want to buy / sell a vehicle. Details: ')} target="_blank" rel="noreferrer" className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-navy-900 px-6 py-4 font-bold text-white hover:bg-navy-800">
              Discuss a vehicle deal <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>
    </ServicePage>
  )
}
