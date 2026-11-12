# Client Setup Guide

How to turn this master template into one client's independent website.
Each client gets **their own copy** of the project, repository, Formspree form, domain and Vercel project,
so a change to one client never touches another.

Most work happens in just two files:

- `src/lib/business.ts`: who the business is (name, contact, branding, images, form, SEO)
- `src/lib/services.ts`: what they offer

---

## 1. Duplicate the project

Never work in the master directly.

```sh
cp -R cleaning-master-template ../acme-cleaning-site     # use the client's name
cd ../acme-cleaning-site
rm -rf node_modules dist .vercel .tanstack .output       # start clean
npm install
npm run dev
```

Then create a **new, separate Git repository** for the client (`git init`, push to a new repo)
so it deploys independently. Do not fork or branch the master for a client.
Also change `"name"` in `package.json` to the client's slug.

## 2. Rename the business

In `src/lib/business.ts`:

```ts
name: "Acme Cleaning",          // shown everywhere (logo, headings, titles, footer)
legalName: "Acme Cleaning LLC", // optional; used for the © line and structured data
tagline: "…",                   // line under the homepage headline
description: "…",               // footer text + default meta description
businessType: "Professional Residential & Commercial Cleaning",
```

Also search the project once for leftover demo text: `grep -ri "sparkle rush" src public`.
(After setup it should only appear in this guide.)

## 3. Update the phone number

```ts
contact: {
  phone: "(555) 123-4567",   // drives every tel: link + structured data
  displayPhone: "",          // optional: different text to show (e.g. "555-123-4567")
  …
}
```

Every call button, the header, footer, contact page and service pages update automatically.

## 4. Update the email

`contact.email: "hello@clientdomain.com"`. When set, the email appears in the footer and on the
contact page (a dashed placeholder card shows while it is blank). The private lead-alert phone number
goes in `internal.leadNotificationPhone`: it is for your records only and is never shown or shipped to visitors.

## 5. Add a custom logo

Put the file in `public/images/` (SVG or PNG, about 36px tall once displayed), then:

```ts
branding: { logo: { src: "/images/logo.svg", alt: "Acme Cleaning logo", subtitle: "" }, … }
```

Leave `src: ""` to keep the built-in text logo (name + sparkle icon). `subtitle` is the small italic
line under the name ("cleaning co." in the demo); set it to `""` to hide it. For the browser-tab icon
replace `public/favicon.svg` (or change `branding.favicon`).

## 6. Change brand colors

The demo uses a navy palette defined in `src/styles.css`. To override, set any CSS colors
(hex, `rgb()`, `oklch()`) in `branding.colors`; blank values keep the default:

```ts
colors: { primary: "#0b5d3b", primaryForeground: "", secondary: "#eef6f1", accent: "#e3f1e8" }
```

`primary` is the main button/heading accent (also used for focus rings). `primaryForeground` is the text on top of
it (leave blank unless contrast is poor). Check text contrast after changing colors. Soft card shadows still use a
navy tint; edit the `rgba(18,59,86,…)` values in components only if that matters.

## 7. Add the client's founding story

`foundingStory: "…"`. Separate paragraphs with a blank line. When non-empty, an "Our Story" section appears on the About page;
when blank nothing is shown. Use only what the client actually tells you: never invent history, years in business, awards or certifications.

## 8. Select available services

Open `src/lib/services.ts`. Set `enabled: false` on any service the client doesn't offer. It disappears from the homepage,
header, footer, form dropdown, related services and sitemap, and its URL returns a real 404. Homepage FAQ entries that depend
on a service (deep cleaning, move-in/out, commercial) hide automatically too. Set `priority: true` on flagship services.

## 9. Add new service pages

Copy any entry in `services.ts`, then change:

```ts
slug: "window-cleaning",     // URL: /services/window-cleaning (lowercase-with-hyphens, unique)
enabled: true, priority: false,
title, short, card, eyebrow, tagline, intro, overview,
tasks: [...], benefits: [...], faqs: [{ q, a }],
image / imageAlt        // card + side photo
heroImage / heroAlt     // page banner
seoTitle?, seoDescription?   // optional overrides (otherwise generated)
```

Array order = display order everywhere. No other file needs editing: the page, nav link, footer link, form option,
sitemap entry and structured data are all generated.

## 10. Remove unwanted services

Delete the entry from `services.ts` (or `enabled: false` to keep the copy on file). Check the homepage, `/services`
and the estimate form to confirm.

## 11. Update service areas

```ts
location: { primaryCity: "Springfield", state: "IL", serviceAreas: ["Chatham", "Rochester"] }
```

List only places the client genuinely serves. These feed the page titles/descriptions (primary city), the contact page and the
`areaServed` structured data. To show a street address publicly, fill `contact.address` **and** set `showAddress: true`
(service-area businesses that work from home should leave it off). Opening hours: `contact.hours: [{ days: "Mon–Fri", hours: "8am–5pm" }]`.
Social links (`social.*`) and `googleBusinessProfileUrl` appear in the footer / structured data when filled.

## 12. Replace photos

Images live in `public/images/` and are referenced by path from `src/lib/images.ts` (the shared library),
`business.ts` (`images.*`, `gallery.images`) and `services.ts`.

- Same-name swap: drop a new file over e.g. `public/images/kitchen.jpg`; no code changes.
- New file: add it to `public/images/`, then point the relevant `src` at `/images/your-file.jpg`.
- Use real, properly licensed photos at about 1200px wide, JPEG/WebP, ideally under 250 KB.
- **Gallery:** the shipped photos are stock demonstration images. Replace them with the client's real project photos and set
  `gallery.isSample: false` (this removes the "Sample Cleaning Gallery" labels). Never present stock photos as the client's work,
  and never fabricate before/after shots.
- Social share image: `images.ogImage` (1200×630).
- Always keep meaningful `alt` text.

## 13. Configure Formspree

1. Create a free form at [formspree.io](https://formspree.io) using the client's notification email.
2. Copy its endpoint (looks like `https://formspree.io/f/xxxxxxxx`).
3. Paste it into `form.endpoint` in `business.ts` (keep `provider: "formspree"`).
4. In Formspree: enable spam protection and, if wanted, SMS/Slack/email alerts to the lead-notification contact.
5. Test on the deployed preview with a clearly fake lead (e.g. "TEST"), confirm it arrives, then delete it.

Until an endpoint is set, the form runs in **demo mode**: a visible "Demo mode" note appears and the success screen says nothing was sent.
Fields sent: `name`, `phone`, `service`, `message`, `_subject`, `page`. The form validates required fields and phone format, shows
loading/success/error states, blocks double submits and includes a hidden spam trap. Edit `form.successMessage` /
`form.errorMessage` for custom wording (`{name}` inserts the business name).

## 14. Set the domain

In `business.ts`:

```ts
seo: { siteUrl: "https://www.clientdomain.com", indexable: false }   // no trailing slash needed
```

`siteUrl` is the single canonical origin used for canonical tags, Open Graph URLs, the sitemap and structured data.
Keep `indexable: false` until launch (next section). Add the same domain in Vercel (Project → Settings → Domains)
and choose one of `www` / apex as primary with the other redirecting to it so it matches `siteUrl`.

## 15. Set SEO metadata

Everything is generated from your config. Titles look like `Deep Cleaning in Springfield | Acme Cleaning`; descriptions mention the
business, service and city. Adjust by:

- `businessType`, `description`, `location.primaryCity` for the homepage title/description
- `seoTitle` / `seoDescription` on any service for custom copy
- `schemaType` (`"LocalBusiness"` by default)

The site publishes LocalBusiness, Service and FAQ structured data. It **never** emits ratings or review counts; do not add any
unless they come from the client's real, verifiable Google reviews.

### Launch checklist (turning indexing on)

1. `seo.siteUrl` is the final HTTPS domain; `seo.indexable` → `true`.
2. All demo text, stock photos, and the placeholder Privacy Policy / Terms (`src/routes/privacy.tsx`, `terms.tsx`) are replaced with the client's real content (have the client or their counsel approve legal text).
3. Formspree endpoint is live and a test lead arrived.
4. Deploy, then verify: `/robots.txt` shows `Allow: /` + a `Sitemap:` line, `/sitemap.xml` lists the pages, page source has **no** `noindex`, and each page has a canonical tag.
5. Submit `/sitemap.xml` in Google Search Console and connect the Google Business Profile.

## 16. Deploy to Vercel independently

1. Push the client's own repository to GitHub.
2. In Vercel: **Add New → Project →** import that repo (one Vercel project per client).
3. Framework preset: Vercel auto-detects the Nitro server. Build command `npm run build`; leave Output Directory empty.
   (The build writes `.vercel/output`.) Node 20+ (22 is fine).
4. Deploy, test the preview URL (menu, every service page, the form), then attach the client's domain.
5. Nothing else is shared between clients: no environment variables are required.

> The template has been verified to build a Vercel-format output locally, but the master has **not** been deployed.
> Treat the first client deploy as the real Vercel smoke test.

---

## Quick reference: files you normally touch per client

| File                      | What                                                          |
| ------------------------- | ------------------------------------------------------------- |
| `src/lib/business.ts`     | name, contact, colors, logo, images, area, form, SEO          |
| `src/lib/services.ts`     | services + per-service content                                |
| `src/lib/faq.ts`          | homepage FAQ wording                                          |
| `public/images/*`         | photos, logo                                                  |
| `src/routes/privacy.tsx`, `terms.tsx` | legal text                                        |

Generic marketing copy that isn't business-specific (hero paragraph, "how it works", benefits strip) lives in the
components under `src/components/` and works for any cleaning company; edit it only if the client wants different wording.
