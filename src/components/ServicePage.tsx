import { ArrowRight, BadgeCheck, MessageCircle } from 'lucide-react'
import type { ReactNode } from 'react'
import { InquiryForm } from './InquiryForm'
import { Eyebrow, SectionHeading } from './ui'
import { img, waLink } from '@/lib/site'
import type { DepartmentId } from '@/lib/site'

export interface ServiceItem {
  icon: typeof BadgeCheck
  title: string
  text: string
}

export interface UseCase {
  who: string
  challenge: string
  outcome: string
}

export function ServicePage(props: {
  eyebrow: string
  title: ReactNode
  intro: string
  image: string
  imageAlt: string
  department: DepartmentId
  whatsappMessage: string
  services: Array<ServiceItem>
  useCases: Array<UseCase>
  highlights: Array<string>
  children?: ReactNode
}) {
  return (
    <>
      <section className="relative isolate overflow-hidden bg-navy-950 text-white">
        <img src={img(props.image, 1800)} alt={props.imageAlt} className="absolute inset-0 -z-20 h-full w-full object-cover opacity-60" fetchPriority="high" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-navy-950 via-navy-950/85 to-navy-950/20" />
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:py-28">
          <div className="max-w-2xl">
            <Eyebrow dark>{props.eyebrow}</Eyebrow>
            <h1 className="mt-4 text-4xl leading-tight font-black sm:text-5xl">{props.title}</h1>
            <p className="mt-6 text-lg leading-relaxed text-slate-300">{props.intro}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href="#enquire" className="inline-flex items-center justify-center gap-2 rounded-lg bg-amber-brand px-7 py-4 font-extrabold text-navy-950 hover:bg-amber-deep hover:text-white">
                Request a proposal <ArrowRight className="h-5 w-5" />
              </a>
              <a href={waLink(props.whatsappMessage)} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-white/30 px-7 py-4 font-bold hover:border-[#25D366] hover:text-[#25D366]">
                <MessageCircle className="h-5 w-5" /> Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-slate-200 bg-mist">
        <ul className="mx-auto flex max-w-7xl flex-wrap justify-center gap-x-8 gap-y-3 px-4 py-5 sm:px-6">
          {props.highlights.map((h) => (
            <li key={h} className="inline-flex items-center gap-2 text-sm font-semibold text-navy-800">
              <BadgeCheck className="h-4 w-4 text-verified" /> {h}
            </li>
          ))}
        </ul>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:py-24">
        <SectionHeading eyebrow="Scope of services" title="What we deliver" />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {props.services.map((s, i) => (
            <div key={s.title} className="reveal rounded-2xl border border-slate-200 p-7 transition hover:border-amber-brand hover:shadow-lg" style={{ transitionDelay: `${(i % 3) * 80}ms` }}>
              <s.icon className="h-9 w-9 text-amber-deep" />
              <h3 className="mt-4 text-xl font-bold">{s.title}</h3>
              <p className="mt-2 leading-relaxed text-slate-600">{s.text}</p>
            </div>
          ))}
        </div>
      </section>

      {props.children}

      <section className="blueprint bg-navy-900 py-20 text-white lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <SectionHeading dark eyebrow="Use cases" title="How clients put us to work" />
          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {props.useCases.map((u, i) => (
              <article key={u.who} className="reveal rounded-2xl border border-white/10 bg-navy-950/60 p-7" style={{ transitionDelay: `${i * 90}ms` }}>
                <p className="font-mono text-xs tracking-widest text-amber-brand uppercase">{u.who}</p>
                <p className="mt-4 text-sm font-semibold text-slate-400">Challenge</p>
                <p className="mt-1 text-slate-200">{u.challenge}</p>
                <p className="mt-4 text-sm font-semibold text-slate-400">How we help</p>
                <p className="mt-1 text-white">{u.outcome}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="enquire" className="mx-auto max-w-4xl scroll-mt-24 px-4 py-20 sm:px-6 lg:py-24">
        <SectionHeading center eyebrow="Start a conversation" title="Tell us what you need" intro="Your enquiry goes straight to the right team. We respond within one business day." />
        <div className="reveal mt-10 rounded-3xl bg-white p-6 shadow-2xl ring-1 ring-slate-200 sm:p-10">
          <InquiryForm defaultDepartment={props.department} />
        </div>
      </section>
    </>
  )
}
