import { HeadContent, Scripts, createRootRoute, useRouterState } from '@tanstack/react-router'
import { useEffect } from 'react'

import '../styles.css'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { WhatsAppFloat } from '@/components/WhatsAppFloat'
import { VerifyProvider } from '@/components/VerifyContext'
import { site } from '@/lib/site'

const siteName = 'Aweleoma Investment Ltd — Genuine Ford Parts Lagos | FleetGuard™'
const siteDescription =
  'Genuine USA-direct Ford parts in Lagos with 48-hour delivery across Southwest Nigeria, 6-month warranty and serial verification. Plus agriculture, commodities and IT solutions. RC 1556828.'

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'AutoPartsStore',
  name: site.name,
  description: siteDescription,
  telephone: site.phone,
  email: site.email,
  foundingDate: '2019-01-29',
  identifier: site.rc,
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'No. 1A Ojelabi Street, Mangoro',
    addressLocality: 'Ikeja',
    addressRegion: 'Lagos',
    addressCountry: 'NG',
  },
  areaServed: ['Lagos', 'Ogun', 'Oyo', 'Osun', 'Ondo', 'Ekiti'],
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { title: siteName },
      { name: 'description', content: siteDescription },
      { name: 'theme-color', content: '#0f172a' },
      { property: 'og:title', content: siteName },
      { property: 'og:description', content: siteDescription },
      { property: 'og:type', content: 'website' },
      { property: 'og:image', content: '/.netlify/images?url=/img/hero.png&w=1200&h=630&fit=cover&fm=jpg' },
      { name: 'twitter:card', content: 'summary_large_image' },
    ],
    links: [
      { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
      { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossOrigin: 'anonymous' },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Montserrat:wght@500;600;700;800;900&family=Open+Sans:wght@400;500;600;700&family=JetBrains+Mono:wght@500;600&display=swap',
      },
      { rel: 'icon', href: '/favicon.svg', type: 'image/svg+xml' },
    ],
    scripts: [{ type: 'application/ld+json', children: JSON.stringify(jsonLd) }],
  }),
  shellComponent: RootDocument,
})

function useScrollReveal() {
  const pathname = useRouterState({ select: (s) => s.location.pathname })
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>('.reveal:not(.is-visible)')
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            io.unobserve(entry.target)
          }
        }
      },
      { rootMargin: '0px 0px -8% 0px' },
    )
    els.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [pathname])
}

function RootDocument({ children }: { children: React.ReactNode }) {
  useScrollReveal()
  return (
    <html lang="en-NG">
      <head>
        <HeadContent />
      </head>
      <body>
        <VerifyProvider>
          <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[80] focus:rounded focus:bg-white focus:px-4 focus:py-2">
            Skip to content
          </a>
          <Header />
          <main id="main">{children}</main>
          <Footer />
          <WhatsAppFloat />
        </VerifyProvider>
        <Scripts />
      </body>
    </html>
  )
}
