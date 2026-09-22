# ANALYTICS_SETUP.md — SIRO-VÉD GA4 beállítási útmutató

> Ez a dokumentum az implementált GA4 tracking GA4 Admin felületen elvégzendő konfigurációját írja le.  
> A kódban csak az eseményküldés van implementálva — a GA4 Admin beállításokat manuálisan kell elvégezni.

---

## 1. Egyéni dimenziók (Custom Dimensions)

A GA4 Admin → **Configure → Custom Definitions → Custom Dimensions** menüben hozd létre az alábbi dimenziókat:

| Display name | Scope | Description | Event parameter |
|---|---|---|---|
| Customer Type | Event | B2B vagy B2C ügyfél | `customer_type` |
| Request Type | Event | Igény típusa (uj/bővítés/javítás/karbantartás) | `request_type` |
| Project Type | Event | Ingatlantípus | `project_type` |
| Service | Event | Konkrét szolgáltatás | `service` |
| Region | Event | Helyszín / régió | `region` |
| CTA Location | Event | Melyik UI elem indította az eseményt | `cta_location` |
| Source Site | Event | Forrás domain (siroved.hu) | `source_site` |
| Form Type | Event | Űrlap típusa | `form_type` |

> **Fontos:** Custom dimensionök GA4-ben max 50 event-scope dimenzió rögzíthető. Ezeket érdemes prioritizálni.

---

## 2. Key Events (Konverziók)

A GA4 Admin → **Configure → Events** menüben jelöld meg Key Eventként:

| Event neve | Leírás | Trigger |
|---|---|---|
| `generate_lead` | Sikeres lead | Csak sikeres szerver-oldali form-küldés után tüzel |

> A `generate_lead` esemény paramétereit az implementáció tartalmazza: `lead_source`, `form_type`, `customer_type`, `request_type`, `project_type`, `service`, `region`, `cta_location`, `source_site`, `landing_page`.

---

## 3. Implementált custom events — kódon belül

Az alábbi eseményeket a `lib/analytics.ts` fájl és a komponensek küldik:

```
generate_lead       — sikeres form-küldés után
form_start          — első mezőinterakcióra
form_step_complete  — többlépéses form lépésváltásnál (params: form_type, step_name, step_number)
form_error          — validációs vagy szerver hiba
phone_click         — tel: link kattintás
email_click         — mailto: link kattintás
cta_click           — üzleti CTA kattintás (params: cta_label, cta_location, cta_type, page_type)
request_type_select — igény típus kiválasztása
customer_type_select — B2B/B2C kiválasztása
service_select      — szolgáltatás kiválasztása
outbound_division_click — más SIROTECH brand felé kattintás
calculator_start    — kalkulátor pre-screen kitöltése
calculator_step     — kalkulátor lépésváltás
calculator_complete — kalkulátor befejezése
```

---

## 4. Attribution Storage

Az attribution adatok `first-party localStorage`-ban tárolódnak:

| Kulcs | Tartalom |
|---|---|
| `siroved_first_touch` | Első látogatás UTM/GCLID/landing_page/referrer/timestamp adatai |
| `siroved_last_touch` | Legutóbbi kampányparaméteres látogatás adatai |

- **First touch**: csak egyszer íródik, nem frissül.
- **Last touch**: minden kampányparaméteres (utm_source/gclid stb.) belépéskor frissül.
- Ezek az adatok **nem kerülnek GA4-be**, csak a Nodemailer e-mail payloadba (rejtett mezőként).
- **Nincs PII** a localStorage-ban.

---

## 5. Consent Mode

A jelenlegi implementáció megtartja az eredeti Consent Mode logikát:

- `analytics_storage` és `ad_storage` alapértelmezetten `denied`.
- Ha a user elfogadja a cookie bannert (`siroved_cookie_consent === 'accepted'`), mindkettő `granted` lesz.
- A `captureAttribution()` hívás nem függ consent-től (csak localStorage, no PII).

---

## 6. Ajánlott GA4 Audience-ek

| Audience neve | Feltétel |
|---|---|
| Lead - Új rendszer | `request_type = uj-rendszer` AND `generate_lead` |
| Lead - Bővítés | `request_type = bovites` AND `generate_lead` |
| Lead - B2B | `customer_type = b2b` AND `generate_lead` |
| Kalkulátor indítók | `calculator_start` esemény |
| Kalkulátor befejezők | `calculator_complete` esemény |

---

## 7. Google Ads integration

- A `generate_lead` event ajánlott konverzióként a Google Ads-ben is rögzíthető.
- `gclid`, `gbraid`, `wbraid` paraméterek az attribution localStorage-ban tárolódnak és az admin e-mail alján megjelennek.
- Enhanced Conversion: **ne** küldj PII-t (name, email, phone) GA4/GAds eventek paramétereiben.
