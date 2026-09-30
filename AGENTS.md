# AGENTS.md

A lead-generation website for Aweleoma Investment Ltd (Lagos, RC 1556828). Built with TanStack Start, React 19, Tailwind CSS 4 and deployed on Netlify. The site's main goal is conversion, so every page should keep a clear path to WhatsApp, the ₦150k audit, a parts quote or an enquiry.

## Directory structure

```
public/
  __forms.html        # Hidden form skeletons so Netlify Forms registers the React forms at build time
  img/                # AI-generated photography (always served through /.netlify/images via img())
  favicon.svg
src/
  lib/site.ts         # Single source of truth: contact details, departments, waLink(), img(), submitNetlifyForm()
  data/parts.ts       # Catalog data: parts, vehicle models, categories, stock labels
  components/
    Header.tsx, Footer.tsx, Logo.tsx
    WhatsAppFloat.tsx # Sticky WhatsApp button with a menu that routes by need
    VerifyContext.tsx # Global provider + useVerify() to open the serial-verification modal from anywhere
    VerifyModal.tsx, VerifyPanel.tsx
    AuditForm.tsx     # Netlify form "audit-booking"
    InquiryForm.tsx   # Netlify form "inquiry" with department routing chips
    WastageEstimator.tsx
    ServicePage.tsx   # Shared layout for agriculture / IT / commodities
    FinalCta.tsx, ui.tsx (Eyebrow, SectionHeading, Field, Honeypot, inputCls)
  routes/             # index, fleetguard, parts, agriculture, it-solutions, commodities, about, contact, verify
  styles.css          # Tailwind theme tokens (navy/amber/verified), animations, .blueprint grid, .reveal
```

## Conventions & non-obvious decisions

- **Forms**: React forms POST URL-encoded data to `/__forms.html` (not `/`, which the SSR function would catch). When you add or rename a field, update `public/__forms.html` too. Netlify Forms is enabled with the skill's `enable.cjs` script.
- **No storage needed**: leads go to Netlify Forms, and the parts quote list is saved in `localStorage` only.
- **Serial verification** does not look anything up automatically. It records the request (form `serial-verification`) and passes it to a Parts Advisor on WhatsApp. An automatic lookup would need a serial registry, for example Netlify Database.
- **Prices are not shown** on purpose (import prices follow exchange rates). The catalog leads to quotes instead.
- **Scroll reveal**: add the `reveal` class to any element. `__root.tsx` watches these elements and re-runs on each route change.
- **Brand**: navy `#0F172A`/`#1E293B`, amber `#F59E0B`/`#D97706`, verified green `#10B981`. Fonts are Montserrat (headings), Open Sans (body) and JetBrains Mono (serials and labels). These come from the client's brief.
- Page SEO is set with each route's `head()`. Global metadata and LocalBusiness JSON-LD are in `__root.tsx`.
- Do not claim things the client hasn't confirmed (testimonials, client logos, customer counts). The site uses only facts from the brief.
