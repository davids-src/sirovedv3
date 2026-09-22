# CHANGELOG_IMPLEMENTATION.md

> Implementáció dátuma: 2026-09-22  
> Branch: main  
> Verzió: v3.1.0

---

## Összefoglaló

A SIRO-VÉD site (`siroved.hu`) funkcionalitás-bővítése a javítás/karbantartás leadek megtartása mellett egyenrangú útvonalak létrehozásával új rendszer és bővítési projektek számára. B2B és B2C egyensúly, erőteljesen kibővített GA4 tracking, form mezők és e-mail payload.

---

## Új fájlok

| Fájl | Leírás |
|---|---|
| `lib/analytics.ts` | GA4 event wrapper, attribution capture/read, typed event helpers |
| `components/SolutionLayout.tsx` | Közös layout komponens a 6 megoldás aloldalhoz |
| `app/megoldasok/page.tsx` | /megoldasok hub oldal (SSR) |
| `app/megoldasok/uj-biztonsagtechnikai-rendszer/page.tsx` | Új rendszer aloldal (SSR) |
| `app/megoldasok/rendszerbovites/page.tsx` | Bővítés aloldal (SSR) |
| `app/megoldasok/telephely-biztonsag/page.tsx` | Telephely aloldal (SSR) |
| `app/megoldasok/csaladi-haz-biztonsag/page.tsx` | Családi ház aloldal (SSR) |
| `app/megoldasok/raktar-csarnok-biztonsag/page.tsx` | Raktár/csarnok aloldal (SSR) |
| `app/megoldasok/uzlet-rendelo-biztonsag/page.tsx` | Üzlet/rendelő aloldal (SSR) |
| `app/robots.ts` | Next.js 13 App Router robots.ts |
| `ANALYTICS_SETUP.md` | GA4 Admin konfigurációs útmutató |
| `CHANGELOG_IMPLEMENTATION.md` | Ez a fájl |

---

## Módosított fájlok

### `app/page.tsx` (Főoldal)
- **[ÚJ]** „Milyen helyzetben van?" szekció a Hero után — 4 egyenrangú kártya: Új rendszer / Bővítés / Javítás / Karbantartás. Kék outline, hover glow. GA4: `cta_click` + `request_type_select` minden kártyán.
- **[ÚJ]** „Otthonra és üzleti környezetbe" B2C/B2B split szekció — inline SVG alaprajz vizuálokkal. Linkek: `/megoldasok/csaladi-haz-biztonsag` és `/megoldasok/telephely-biztonsag`.
- **[MÓDOSÍTVA]** CTA banner secondary CTA: `/szolgaltatasok` → `/megoldasok`. GA4 tracking hozzáadva.
- **[MÓDOSÍTVA]** SIROTECH GROUP kártyák: `outbound_click` → `outbound_division_click` a bővített paraméterekkel.

### `components/Navbar.tsx`
- **[ÚJ]** „Megoldások" dropdown desktop navban — 7 item, hover dropdown, click-outside bezárás, ARIA attrs.
- **[ÚJ]** Mobilon accordion-szerű kinyitható Megoldások lista.

### `components/ContactForm.tsx`
- **[ÚJ]** Mezők: `customer_type` (B2B/B2C rádiógomb), `request_type`, `property_type`, `timeframe`, `location`.
- **[ÚJ]** URL params (`request_type`, `property_type`) automatikusan előtöltenek.
- **[ÚJ]** Rejtett attribution mezők: `first_touch`, `last_touch` (localStorage-ból).
- **[ÚJ]** GA4: `form_start`, `form_error`, `generate_lead`, `request_type_select`, `customer_type_select`.
- Legacy mezők (`ingatlanTipus`, `jelenlegiRendszer`) megmaradtak.

### `app/api/contact/route.ts`
- **[ÚJ]** Interface bővítve: `customer_type`, `request_type`, `property_type`, `timeframe`, `location`, `first_touch`, `last_touch`.
- **[ÚJ]** Admin e-mail tetején „Lead besorolás" blokk: B2B/B2C | Igénytípus | Ingatlantípus | Helyszín | Időzítés.
- **[ÚJ]** Subject line: `[B2B | Új rendszer]` tag az ügyféllel.
- **[ÚJ]** Attribution sorok az e-mail aljára.

### `components/GoogleAnalytics.tsx`
- **[MÓDOSÍTVA]** `captureAttribution()` hívás minden navigációnál.
- **[MÓDOSÍTVA]** `phone_click`, `email_click` → `lib/analytics.ts` typed helperekre cserélve.
- `send_page_view: false` megmaradt — nincs dupla page_view.

### `components/calculator/types.ts`
- **[ÚJ]** `mode?: 'uj' | 'bovites'` field a `CalculatorAnswers` interface-ben.

### `components/calculator/KalkulatorWizard.tsx`
- **[ÚJ]** Pre-screen lépés (Új rendszer / Bővítés) a Q1-Q8 wizard előtt.
- **[ÚJ]** Mode badge a wizard fejlécén, visszavonható.
- **[ÚJ]** GA4: `calculator_start` (pre-screen), `calculator_step`, `calculator_complete`.
- Q1–Q8 logika, validáció, routing változatlan.

### `app/sitemap.ts`
- **[ÚJ]** `/megoldasok` + 6 aloldal hozzáadva.
- **[JAVÍTVA]** `lastModified: new Date()` helyett statikus `CONTENT_DATES` objektum per-oldal valódi dátummal.
- Blog posztok maradnak `publishedAt`-ból.

---

## SEO elemek

| Oldal | title | description | canonical | OG | BreadcrumbList JSON-LD | Service JSON-LD |
|---|---|---|---|---|---|---|
| /megoldasok | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| /megoldasok/uj-biztonsagtechnikai-rendszer | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| /megoldasok/rendszerbovites | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| /megoldasok/telephely-biztonsag | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| /megoldasok/csaladi-haz-biztonsag | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| /megoldasok/raktar-csarnok-biztonsag | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| /megoldasok/uzlet-rendelo-biztonsag | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |

---

## Strict rules compliance

| Szabály | Állapot |
|---|---|
| Kék-sötét arculat megmaradt | ✅ |
| Interaktív alaprajz-vizuál megmaradt (Hero) | ✅ |
| Kalkulátor Q1-Q8 logika változatlan | ✅ |
| CRM/adatbázis: nem implementálva | ✅ |
| Dupla page_view nem keletkezik | ✅ |
| PII nem kerül GA4-be | ✅ |
| Sitemap URL roles.ts-ben | ✅ |
| lastModified nem new Date() minden buildnél | ✅ |

---

## Definition of Done — ellenőrzőlista

- [x] Hero után 4 útvonal egyenrangú: új, bővítés, javítás, karbantartás
- [x] B2B és B2C külön vizuális blokkban azonos súllyal
- [x] Kalkulátor és jelenlegi szolgáltatásoldalak működnek
- [x] GA4 lead és kalkulátor funnel mérhető
- [x] ANALYTICS_SETUP.md elkészült
- [x] CHANGELOG_IMPLEMENTATION.md elkészült
