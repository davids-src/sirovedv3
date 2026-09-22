import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

interface AttributionTouch {
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_content?: string;
  utm_term?: string;
  gclid?: string;
  gbraid?: string;
  wbraid?: string;
  landing_page?: string;
  referrer?: string;
  timestamp?: string;
}

interface ContactRequestBody {
  name: string;
  email: string;
  phone: string;
  inquiryType: string;
  // Extended lead-qualification
  customer_type?: string;
  request_type?: string;
  property_type?: string;
  timeframe?: string;
  location?: string;
  // Legacy
  ingatlanTipus?: string;
  jelenlegiRendszer?: string;
  message: string;
  privacyConsent: boolean;
  // Attribution (serialised JSON strings)
  first_touch?: string;
  last_touch?: string;
}

// ── Label maps ────────────────────────────────────────────────────────────────

const INQUIRY_TYPE_LABELS: Record<string, string> = {
  'ingyenes-felmeres': 'Ingyenes vagyonvédelmi állapotfelmérés (Kamera & Riasztó)',
  'altalanos': 'Általános érdeklődés / Tanácsadás',
  'ajajanlat': 'Egyedi árajánlatkérés',
};

const CUSTOMER_TYPE_LABELS: Record<string, string> = {
  b2c: 'Magánszemély (B2C)',
  b2b: 'Vállalkozás / cég (B2B)',
};

const REQUEST_TYPE_LABELS: Record<string, string> = {
  'uj-rendszer': 'Új rendszer (telepítés)',
  'bovites': 'Meglévő rendszer bővítése',
  'javitas': 'Hibajavítás / állapotfelmérés',
  'karbantartas': 'Rendszeres karbantartás',
};

const PROPERTY_TYPE_LABELS: Record<string, string> = {
  'csaladi-haz': 'Családi ház',
  'lakas': 'Lakás',
  'iroda': 'Iroda',
  'uzlet': 'Üzlet / Rendelő',
  'telephely': 'Telephely',
  'raktar': 'Raktár / Csarnok',
  'egyeb': 'Egyéb',
};

const TIMEFRAME_LABELS: Record<string, string> = {
  'azonnal': 'Minél hamarabb (1–2 héten belül)',
  '1-honap': '1 hónapon belül',
  '3-honap': '1–3 hónapon belül',
  'rugalmas': 'Rugalmas / tervezési fázisban',
};

const INGATLAN_LABELS: Record<string, string> = {
  lakoingatlan: 'Lakóingatlan (Családi ház / Lakás)',
  uzlet: 'Üzlethelyiség / Iroda',
  telephely: 'Telephely / Raktár',
  egyeb: 'Egyéb ingatlan',
};

const RENDSZER_LABELS: Record<string, string> = {
  nincs: 'Nincs még kamera / riasztó',
  kamera: 'Van kamerarendszer (átvizsgálás/bővítés)',
  riasztos: 'Van riasztórendszer (átvizsgálás/bővítés)',
  mindketto: 'Mindkettő van meglévőként',
};

// ── Helpers ───────────────────────────────────────────────────────────────────

function createTransporter() {
  return nodemailer.createTransport({
    host: process.env.SMTP_HOST || 'smtp.gmail.com',
    port: Number(process.env.SMTP_PORT) || 587,
    secure: process.env.SMTP_SECURE === 'true',
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });
}

function parseTouch(raw?: string): AttributionTouch {
  if (!raw) return {};
  try { return JSON.parse(raw); } catch { return {}; }
}

function touchRow(label: string, value?: string) {
  if (!value) return '';
  return `<tr><td style="padding:3px 0;color:#666;width:160px">${label}:</td><td>${value}</td></tr>`;
}

function buildAdminHtml(data: ContactRequestBody): string {
  const customerLabel = data.customer_type ? CUSTOMER_TYPE_LABELS[data.customer_type] ?? data.customer_type : '–';
  const requestLabel  = data.request_type  ? REQUEST_TYPE_LABELS[data.request_type]  ?? data.request_type  : '–';
  const propertyLabel = data.property_type ? PROPERTY_TYPE_LABELS[data.property_type] ?? data.property_type : '–';
  const timeframeLabel = data.timeframe    ? TIMEFRAME_LABELS[data.timeframe]         ?? data.timeframe    : '–';
  const inquiryLabel  = INQUIRY_TYPE_LABELS[data.inquiryType] ?? data.inquiryType;
  const isFelmeres = data.inquiryType === 'ingyenes-felmeres';

  const firstTouch = parseTouch(data.first_touch);
  const lastTouch  = parseTouch(data.last_touch);

  return `
<html><body style="font-family:Arial,sans-serif;max-width:640px;margin:0 auto;color:#1a1a1a">
  <div style="background:#1A6BE8;padding:24px;border-radius:8px 8px 0 0">
    <h1 style="color:#fff;margin:0;font-size:20px">Új megkeresés az oldalról – SIRO-VÉD</h1>
    <p style="color:#e0edff;margin:6px 0 0;font-size:14px">${inquiryLabel}</p>
  </div>
  <div style="padding:24px;border:1px solid #e5e5e5;border-top:none;border-radius:0 0 8px 8px">

    <!-- ── LEAD CLASSIFIER (fontos, tetején) ── -->
    <div style="background:#f0f7ff;border:2px solid #1A6BE8;border-radius:8px;padding:16px;margin-bottom:24px">
      <h2 style="margin:0 0 10px;font-size:15px;color:#1A6BE8">Lead besorolás</h2>
      <table style="width:100%;font-size:14px;border-collapse:collapse">
        <tr><td style="padding:4px 0;color:#333;width:160px;font-weight:bold">Ügyfél típusa:</td><td><strong>${customerLabel}</strong></td></tr>
        <tr><td style="padding:4px 0;color:#333;font-weight:bold">Igény típusa:</td><td><strong>${requestLabel}</strong></td></tr>
        <tr><td style="padding:4px 0;color:#333;font-weight:bold">Ingatlan típusa:</td><td><strong>${propertyLabel}</strong></td></tr>
        <tr><td style="padding:4px 0;color:#333">Helyszín:</td><td>${data.location || '–'}</td></tr>
        <tr><td style="padding:4px 0;color:#333">Időzítés:</td><td>${timeframeLabel}</td></tr>
      </table>
    </div>

    <p style="font-size:13px;color:#666">Beküldés: ${new Date().toLocaleString('hu-HU', { timeZone: 'Europe/Budapest' })}</p>

    <h2 style="font-size:16px;border-bottom:2px solid #1A6BE8;padding-bottom:6px">Kapcsolati adatok</h2>
    <table style="width:100%;font-size:14px;border-collapse:collapse">
      <tr><td style="padding:4px 0;color:#666;width:160px">Név:</td><td><strong>${data.name}</strong></td></tr>
      <tr><td style="padding:4px 0;color:#666">Telefonszám:</td><td><a href="tel:${data.phone}">${data.phone}</a></td></tr>
      <tr><td style="padding:4px 0;color:#666">E-mail cím:</td><td><a href="mailto:${data.email}">${data.email}</a></td></tr>
      <tr><td style="padding:4px 0;color:#666">Megkeresés:</td><td>${inquiryLabel}</td></tr>
    </table>

    ${isFelmeres ? `
    <h2 style="font-size:16px;border-bottom:2px solid #1A6BE8;padding-bottom:6px;margin-top:24px">Felmérés részletei</h2>
    <table style="width:100%;font-size:14px;border-collapse:collapse">
      <tr><td style="padding:4px 0;color:#666;width:160px">Ingatlan (régi mező):</td><td>${data.ingatlanTipus ? INGATLAN_LABELS[data.ingatlanTipus] ?? data.ingatlanTipus : '–'}</td></tr>
      <tr><td style="padding:4px 0;color:#666">Jelenlegi rendszer:</td><td>${data.jelenlegiRendszer ? RENDSZER_LABELS[data.jelenlegiRendszer] ?? data.jelenlegiRendszer : '–'}</td></tr>
    </table>
    ` : ''}

    <h2 style="font-size:16px;border-bottom:2px solid #1A6BE8;padding-bottom:6px;margin-top:24px">Üzenet / Részletek</h2>
    <div style="background:#f8fafc;border:1px solid #e2e8f0;padding:16px;border-radius:6px;font-size:14px;white-space:pre-wrap">${data.message}</div>

    <!-- ── Attribution ── -->
    ${(firstTouch.utm_source || firstTouch.landing_page) ? `
    <h2 style="font-size:14px;color:#888;border-top:1px solid #e5e5e5;padding-top:16px;margin-top:24px">Forgalmi forrás</h2>
    <table style="width:100%;font-size:12px;border-collapse:collapse;color:#666">
      ${touchRow('First source', firstTouch.utm_source)}
      ${touchRow('First medium', firstTouch.utm_medium)}
      ${touchRow('First campaign', firstTouch.utm_campaign)}
      ${touchRow('First landing', firstTouch.landing_page)}
      ${touchRow('First referrer', firstTouch.referrer)}
      ${touchRow('Last source', lastTouch.utm_source)}
      ${touchRow('Last medium', lastTouch.utm_medium)}
      ${touchRow('Last campaign', lastTouch.utm_campaign)}
      ${touchRow('GCLID', firstTouch.gclid || lastTouch.gclid)}
    </table>
    ` : ''}
  </div>
</body></html>`;
}

function buildClientHtml(data: ContactRequestBody): string {
  const inquiryLabel = INQUIRY_TYPE_LABELS[data.inquiryType] ?? data.inquiryType;
  const requestLabel = data.request_type ? REQUEST_TYPE_LABELS[data.request_type] ?? data.request_type : null;

  return `
<html><body style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;color:#1a1a1a">
  <div style="background:#1A6BE8;padding:28px 24px;border-radius:8px 8px 0 0;text-align:center">
    <h1 style="color:#fff;margin:0;font-size:22px">🛡️ SIRO-VÉD – Biztonságtechnika</h1>
    <p style="color:#e0edff;margin:6px 0 0">Megkeresés visszaigazolása</p>
  </div>
  <div style="padding:28px 24px;border:1px solid #e5e5e5;border-top:none;border-radius:0 0 8px 8px">
    <p>Kedves <strong>${data.name}</strong>!</p>
    <p>Köszönjük, hogy felvette velünk a kapcsolatot! Üzenetét sikeresen megkaptuk.</p>

    <div style="background:#f8fafc;border:1px solid #cbd5e1;border-radius:8px;padding:16px;margin:20px 0;font-size:14px">
      <p style="margin:0 0 8px;font-weight:bold;color:#1A6BE8">Az Ön által megadott adatok:</p>
      <p style="margin:4px 0"><strong>Típus:</strong> ${inquiryLabel}</p>
      ${requestLabel ? `<p style="margin:4px 0"><strong>Igény:</strong> ${requestLabel}</p>` : ''}
      <p style="margin:4px 0"><strong>Telefonszám:</strong> ${data.phone}</p>
      <p style="margin:4px 0"><strong>Üzenet:</strong> ${data.message}</p>
    </div>

    <div style="background:#f0fdf4;padding:14px 16px;border-radius:6px;margin:20px 0;font-size:14px;border-left:4px solid #22c55e">
      <strong>Következő lépés:</strong> Kollégánk 1 munkanapon belül felveszi Önnel a kapcsolatot a megadott elérhetőségek egyikén!
    </div>

    <h2 style="font-size:15px;color:#1a1a1a;border-bottom:2px solid #1A6BE8;padding-bottom:6px;margin-top:24px">Elérhetőségeink</h2>
    <table style="font-size:14px;border-collapse:collapse">
      <tr><td style="padding:3px 16px 3px 0;color:#666">📞 Telefon:</td><td><a href="tel:+36702735532">+36 70 273 5532</a></td></tr>
      <tr><td style="padding:3px 16px 3px 0;color:#666">✉️ E-mail:</td><td><a href="mailto:hello@sironic.hu">hello@sironic.hu</a></td></tr>
      <tr><td style="padding:3px 16px 3px 0;color:#666">🌐 Weboldal:</td><td>siroved.hu</td></tr>
    </table>

    <p style="font-size:12px;color:#aaa;margin-top:28px;border-top:1px solid #e5e5e5;padding-top:14px">
      Ez egy automatikus visszaigazoló e-mail a SIRO-VÉD weboldaláról.
    </p>
  </div>
</body></html>`;
}

// ── Route handler ─────────────────────────────────────────────────────────────

export async function POST(request: Request) {
  try {
    const data: ContactRequestBody = await request.json();

    if (!data.email || !data.name || !data.message || !data.phone) {
      return NextResponse.json({ error: 'Hiányzó kötelező mezők.' }, { status: 400 });
    }

    if (!data.privacyConsent) {
      return NextResponse.json({ error: 'Adatvédelmi nyilatkozat elfogadása kötelező.' }, { status: 400 });
    }

    const adminEmail = process.env.SIROVED_ADMIN_EMAIL || 'hello@sironic.hu';
    const transporter = createTransporter();

    const requestTypeLabel = data.request_type ? (REQUEST_TYPE_LABELS[data.request_type] ?? data.request_type) : '';
    const customerTypeLabel = data.customer_type ? (CUSTOMER_TYPE_LABELS[data.customer_type] ?? data.customer_type) : '';

    const subjectTag = [customerTypeLabel, requestTypeLabel].filter(Boolean).join(' | ');
    const subject = `Új megkeresés – ${data.name}${subjectTag ? ` – [${subjectTag}]` : ''}`;

    await transporter.sendMail({
      from: `"SIRO-VÉD Kapcsolat" <${process.env.SMTP_USER || adminEmail}>`,
      to: adminEmail,
      subject,
      html: buildAdminHtml(data),
    });

    await transporter.sendMail({
      from: `"SIRO-VÉD Biztonságtechnika" <${process.env.SMTP_USER || adminEmail}>`,
      to: data.email,
      subject: 'Kapcsolatfelvétel visszaigazolása – SIRO-VÉD',
      html: buildClientHtml(data),
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('Contact email error:', err);
    return NextResponse.json({ error: 'Hiba történt az email küldése során.' }, { status: 500 });
  }
}
