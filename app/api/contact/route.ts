import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

interface ContactRequestBody {
  name: string;
  email: string;
  phone: string;
  inquiryType: string;
  ingatlanTipus?: string;
  jelenlegiRendszer?: string;
  message: string;
  privacyConsent: boolean;
}

const INQUIRY_TYPE_LABELS: Record<string, string> = {
  'ingyenes-felmeres': 'Ingyenes vagyonvédelmi állapotfelmérés (Kamera & Riasztó)',
  'altalanos': 'Általános érdeklődés / Tanácsadás',
  'ajajanlat': 'Egyedi árajánlatkérés',
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

function buildAdminHtml(data: ContactRequestBody): string {
  const inquiryLabel = INQUIRY_TYPE_LABELS[data.inquiryType] || data.inquiryType;
  const isFelmeres = data.inquiryType === 'ingyenes-felmeres';

  return `
<html><body style="font-family:Arial,sans-serif;max-width:640px;margin:0 auto;color:#1a1a1a">
  <div style="background:#1A6BE8;padding:24px;border-radius:8px 8px 0 0">
    <h1 style="color:#fff;margin:0;font-size:20px">Új megkeresés az oldalról – Siro Véd</h1>
    <p style="color:#e0edff;margin:6px 0 0;font-size:14px">${inquiryLabel}</p>
  </div>
  <div style="padding:24px;border:1px solid #e5e5e5;border-top:none;border-radius:0 0 8px 8px">
    <p style="font-size:13px;color:#666">Beküldés ideje: ${new Date().toLocaleString('hu-HU', { timeZone: 'Europe/Budapest' })}</p>

    <h2 style="font-size:16px;border-bottom:2px solid #1A6BE8;padding-bottom:6px">Kapcsolati adatok</h2>
    <table style="width:100%;font-size:14px;border-collapse:collapse">
      <tr><td style="padding:4px 0;color:#666;width:160px">Név:</td><td><strong>${data.name}</strong></td></tr>
      <tr><td style="padding:4px 0;color:#666">Telefonszám:</td><td><a href="tel:${data.phone}">${data.phone}</a></td></tr>
      <tr><td style="padding:4px 0;color:#666">E-mail cím:</td><td><a href="mailto:${data.email}">${data.email}</a></td></tr>
      <tr><td style="padding:4px 0;color:#666">Megkeresés típusa:</td><td>${inquiryLabel}</td></tr>
    </table>

    ${isFelmeres ? `
    <h2 style="font-size:16px;border-bottom:2px solid #1A6BE8;padding-bottom:6px;margin-top:24px">Felmérés részletei</h2>
    <table style="width:100%;font-size:14px;border-collapse:collapse">
      <tr><td style="padding:4px 0;color:#666;width:160px">Ingatlan típusa:</td><td>${data.ingatlanTipus ? INGATLAN_LABELS[data.ingatlanTipus] || data.ingatlanTipus : '–'}</td></tr>
      <tr><td style="padding:4px 0;color:#666">Jelenlegi rendszer:</td><td>${data.jelenlegiRendszer ? RENDSZER_LABELS[data.jelenlegiRendszer] || data.jelenlegiRendszer : '–'}</td></tr>
    </table>
    ` : ''}

    <h2 style="font-size:16px;border-bottom:2px solid #1A6BE8;padding-bottom:6px;margin-top:24px">Üzenet / Részletek</h2>
    <div style="background:#f8fafc;border:1px solid #e2e8f0;padding:16px;border-radius:6px;font-size:14px;white-space:pre-wrap">${data.message}</div>
  </div>
</body></html>`;
}

function buildClientHtml(data: ContactRequestBody): string {
  const inquiryLabel = INQUIRY_TYPE_LABELS[data.inquiryType] || data.inquiryType;

  return `
<html><body style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;color:#1a1a1a">
  <div style="background:#1A6BE8;padding:28px 24px;border-radius:8px 8px 0 0;text-align:center">
    <h1 style="color:#fff;margin:0;font-size:22px">🛡️ Siro Véd – Biztonságtechnika</h1>
    <p style="color:#e0edff;margin:6px 0 0">Megkeresés visszaigazolása</p>
  </div>
  <div style="padding:28px 24px;border:1px solid #e5e5e5;border-top:none;border-radius:0 0 8px 8px">
    <p>Kedves <strong>${data.name}</strong>!</p>
    <p>Köszönjük, hogy felvette velünk a kapcsolatot! Üzenetét sikeresen megkaptuk.</p>

    <div style="background:#f8fafc;border:1px solid #cbd5e1;border-radius:8px;padding:16px;margin:20px 0;font-size:14px">
      <p style="margin:0 0 8px;font-weight:bold;color:#1A6BE8">Az Ön által megadott adatok:</p>
      <p style="margin:4px 0"><strong>Típus:</strong> ${inquiryLabel}</p>
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
      Ez egy automatikus visszaigazoló e-mail a Siro Véd weboldaláról.
    </p>
  </div>
</body></html>`;
}

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

    // Admin email küldése
    await transporter.sendMail({
      from: `"Siro Véd Kapcsolat" <${process.env.SMTP_USER || adminEmail}>`,
      to: adminEmail,
      subject: `Új megkeresés – ${data.name} – ${INQUIRY_TYPE_LABELS[data.inquiryType] || data.inquiryType}`,
      html: buildAdminHtml(data),
    });

    // Ügyfél visszaigazoló email küldése
    await transporter.sendMail({
      from: `"Siro Véd Biztonságtechnika" <${process.env.SMTP_USER || adminEmail}>`,
      to: data.email,
      subject: 'Kapcsolatfelvétel visszaigazolása – Siro Véd',
      html: buildClientHtml(data),
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('Contact email error:', err);
    return NextResponse.json({ error: 'Hiba történt az email küldése során.' }, { status: 500 });
  }
}
