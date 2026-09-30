import { createFileRoute } from '@tanstack/react-router'
import { Leaf, PackageCheck, Scale, Sprout, Tractor, Truck } from 'lucide-react'
import { ServicePage } from '@/components/ServicePage'

export const Route = createFileRoute('/agriculture')({
  head: () => ({
    meta: [
      { title: 'Agriculture & Agri-Trade Services Lagos — Aweleoma Investment Ltd' },
      { name: 'description', content: 'Innovative farming value-chain services, farm inputs, produce aggregation and agri-trade for enterprises and bulk buyers across Nigeria.' },
    ],
  }),
  component: () => (
    <ServicePage
      eyebrow="Agriculture division"
      title={<>From farm gate to <span className="text-amber-brand">market</span> — without the leakage.</>}
      intro="We connect agricultural enterprises and bulk buyers with reliable inputs, quality produce and dependable logistics across the value chain."
      image="agriculture.png"
      imageAlt="Nigerian farmland at sunrise with a farmer inspecting crops"
      department="agriculture"
      whatsappMessage="Hello Aweleoma, I have an agriculture enquiry: "
      highlights={['Value-chain partnerships', 'Bulk produce sourcing', 'Quality-checked supply', 'Nationwide logistics']}
      services={[
        { icon: Sprout, title: 'Farm inputs supply', text: 'Seeds, agro-chemicals and fertilisers sourced from reputable manufacturers for commercial farms.' },
        { icon: Scale, title: 'Produce aggregation & trade', text: 'Grains, tubers and cash crops aggregated from vetted farmers and sold to processors and bulk buyers.' },
        { icon: Tractor, title: 'Mechanisation support', text: 'Tractor and equipment parts sourcing, drawing on our automotive supply network.' },
        { icon: Truck, title: 'Agri-logistics', text: 'Coordinated haulage and delivery from farm clusters to warehouses and factories.' },
        { icon: PackageCheck, title: 'Off-take arrangements', text: 'Structured supply agreements that give buyers volume certainty and farmers a reliable market.' },
        { icon: Leaf, title: 'Value-chain advisory', text: 'Practical guidance on crop selection, post-harvest handling and loss reduction.' },
      ]}
      useCases={[
        { who: 'Food processor', challenge: 'Inconsistent grain supply causing factory downtime.', outcome: 'Scheduled bulk deliveries from aggregated, quality-checked farm clusters.' },
        { who: 'Commercial farm', challenge: 'Late or counterfeit inputs hurting yield.', outcome: 'Verified inputs delivered ahead of the planting window.' },
        { who: 'Agro-export buyer', challenge: 'Difficulty sourcing volume that meets spec.', outcome: 'Off-take coordination and pre-shipment quality checks.' },
      ]}
    />
  ),
})
