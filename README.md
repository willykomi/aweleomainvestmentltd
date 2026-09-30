# Aweleoma Investment Ltd — Website

The marketing and lead-generation website for **Aweleoma Investment Ltd** (RC 1556828), a Lagos company working in automotive retail (the FleetGuard™ genuine Ford parts programme), commodities trading, agriculture and information technology.

The site is built to turn visitors into customers. Every page leads to one of four actions: a WhatsApp chat, a booking for the ₦150k fleet audit, a parts quote request, or an enquiry sent to the right department.

## Pages

| Route | Purpose |
|-------|---------|
| `/` | Home: hero with two main buttons, trust strip, guarantees, the four business areas, how ordering works, a wastage estimator, audit booking, customer types, FAQ |
| `/fleetguard` | FleetGuard™ programme details, 48-hour delivery coverage, order timeline, estimator, audit booking (`#audit`) |
| `/parts` | Searchable Ford parts catalog with vehicle-model and category filters, a WhatsApp button on every part, and a quote list |
| `/agriculture`, `/it-solutions`, `/commodities` | Service pages with scope, use cases and an enquiry form already set to that department (vehicle brokerage is at `/commodities#brokerage`) |
| `/about` | Company background, CAC verification details, leadership commitment |
| `/contact` | Contact options, an enquiry form that routes to the right department (`?dept=it` etc.), Google Map of the Ikeja office |
| `/verify` | Part serial check. QR codes on warranty cards point to `/verify?serial=XXXX` |

## Tech

- TanStack Start (React 19, file-based routing), Vite 7, Tailwind CSS 4
- **Netlify Forms** for every lead form: `audit-booking`, `inquiry`, `parts-quote`, `serial-verification`
- **Netlify Image CDN** serves the custom AI-generated photography in `public/img`
- WhatsApp click-to-chat (`wa.me`) with a pre-filled message for each situation

## Run locally

```bash
pnpm install
netlify dev   # or: pnpm dev
```

Form submissions only work on a deployed Netlify site. View them in the Netlify UI under **Forms**, and turn on email notifications under *Project configuration → Notifications*.

## Editing content

- Contact details, WhatsApp number, address: `src/lib/site.ts`
- Catalog parts, vehicle models, categories, stock status: `src/data/parts.ts`
