import { createFileRoute } from '@tanstack/react-router'
import { Cloud, Cpu, Headset, Laptop, Network, ShieldCheck } from 'lucide-react'
import { ServicePage } from '@/components/ServicePage'

export const Route = createFileRoute('/it-solutions')({
  head: () => ({
    meta: [
      { title: 'IT Solutions, Infrastructure & Consulting Lagos — Aweleoma Investment Ltd' },
      { name: 'description', content: 'Corporate IT procurement, network infrastructure, cloud, cybersecurity and managed support for businesses in Lagos and across Nigeria.' },
    ],
  }),
  component: () => (
    <ServicePage
      eyebrow="Information technology"
      title={<>IT that <span className="text-amber-brand">just works</span> — procured, installed and supported.</>}
      intro="One accountable partner for your devices, networks, software and support — so your team can focus on the business, not the tech."
      image="it.png"
      imageAlt="An IT engineer configuring network equipment in a Lagos server room"
      department="it"
      whatsappMessage="Hello Aweleoma, I have an IT procurement enquiry: "
      highlights={['Genuine, warrantied hardware', 'Single point of accountability', 'Corporate procurement ready', 'Ongoing support']}
      services={[
        { icon: Laptop, title: 'Device procurement', text: 'Laptops, desktops, printers and peripherals from authorised channels with full warranty.' },
        { icon: Network, title: 'Network infrastructure', text: 'Structured cabling, Wi-Fi, routers, switches and site-to-site connectivity.' },
        { icon: Cloud, title: 'Cloud & productivity', text: 'Business email, collaboration suites, backups and cloud migration.' },
        { icon: ShieldCheck, title: 'Cybersecurity', text: 'Firewalls, endpoint protection, access control and staff awareness.' },
        { icon: Headset, title: 'Managed IT support', text: 'Helpdesk, maintenance and on-site visits under a clear service agreement.' },
        { icon: Cpu, title: 'IT consulting', text: 'Technology audits, roadmaps and vendor selection for growing organisations.' },
      ]}
      useCases={[
        { who: 'SME office refresh', challenge: 'Ageing devices and unreliable office Wi-Fi.', outcome: 'New warrantied devices plus a redesigned network, installed over a weekend.' },
        { who: 'Multi-branch company', challenge: 'Branches working in silos with no shared systems.', outcome: 'Cloud email, shared drives and secure inter-branch connectivity.' },
        { who: 'Corporate procurement', challenge: 'Too many vendors, no single point of accountability.', outcome: 'Consolidated sourcing, documentation and support under one contract.' },
      ]}
    />
  ),
})
