import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import {
    CalculatorAnswers,
    calculatePrice,
    priceRange,
    formatHuf,
    ExtraType,
} from '@/components/calculator/types';

// ─── Label maps ──────────────────────────────────────────────────────────────

const INGATLAN_LABELS: Record<string, string> = {
    lakas: 'Lakás / lakóingatlan',
    iroda: 'Iroda / üzlethelyiség',
    raktar: 'Raktár / gyártócsarnok',
    vendeg: 'Vendéglátás / bolt / szalon',
    egeszseg: 'Egészségügyi rendelő / klinika',
    egyeb: 'Egyéb / vegyes',
};

const MERET_LABELS: Record<string, string> = {
    xs: '50 m² alatt',
    s: '50–150 m²',
    m: '150–400 m²',
    l: '400–1000 m²',
    xl: '1000 m² felett',
};

const KAMERA_LABELS: Record<string, string> = {
    nincs: 'Nem kért kamerát',
    ip: 'IP kamerarendszer',
    analog: 'Analóg kamerarendszer',
    nemtudom: 'Ajánlást kér',
};

const RIASZTO_LABELS: Record<string, string> = {
    nincs: 'Nem kért riasztót',
    uj: 'Új riasztórendszer',
    bovites: 'Meglévő riasztó bővítése',
    karbantartas: 'Meglévő riasztó karbantartása',
};

const EXTRA_LABELS: Record<ExtraType, string> = {
    tavfelügyelet: 'Távfelügyelet összekötés',
    belepto: 'Beléptető rendszer',
    karb: 'Havidíjas karbantartási csomag',
    tuzjelzo: 'Tűzjelző rendszer (érdeklődés)',
};

// ─── Request body type ────────────────────────────────────────────────────────

interface RequestBody {
    answers: CalculatorAnswers;
    accepted: boolean;
}

// ─── Transporter ─────────────────────────────────────────────────────────────

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

// ─── Admin email HTML ─────────────────────────────────────────────────────────

function buildAdminHtml(answers: CalculatorAnswers, accepted: boolean): string {
    const exact = calculatePrice(answers);
    const { low, high } = priceRange(exact);
    const contact = answers.q8!;
    const hasFire = answers.q7.includes('tuzjelzo');

    const extrasList = answers.q7
        .map((e) => `<li>${EXTRA_LABELS[e]}</li>`)
        .join('');

    return `
<html><body style="font-family:Arial,sans-serif;max-width:640px;margin:0 auto;color:#1a1a1a">
  <div style="background:#D85A30;padding:24px;border-radius:8px 8px 0 0">
    <h1 style="color:#fff;margin:0;font-size:20px">Új biztonságtechnika ajánlatkérés – Siro Véd</h1>
  </div>
  <div style="padding:24px;border:1px solid #e5e5e5;border-top:none;border-radius:0 0 8px 8px">
    <p style="font-size:13px;color:#666">Beküldés: ${new Date().toLocaleString('hu-HU', { timeZone: 'Europe/Budapest' })}</p>

    <div style="background:${accepted ? '#d1fae5' : '#fee2e2'};padding:12px 16px;border-radius:6px;margin-bottom:20px">
      <strong>${accepted ? '✅ Elfogadta az ajánlatot' : '❌ Egyelőre csak tájékozódott'}</strong>
    </div>

    ${hasFire ? `<div style="background:#fef3c7;padding:12px 16px;border-radius:6px;margin-bottom:20px;border-left:4px solid #f59e0b">
      🔥 <strong>Tűzjelző iránt érdeklődött</strong> – hamarosan értesíteni kell az indulásról.
    </div>` : ''}

    <h2 style="font-size:16px;border-bottom:2px solid #D85A30;padding-bottom:6px">Kapcsolati adatok</h2>
    <table style="width:100%;font-size:14px;border-collapse:collapse">
      <tr><td style="padding:4px 0;color:#666;width:140px">Név:</td><td><strong>${contact.nev}</strong></td></tr>
      <tr><td style="padding:4px 0;color:#666">Telefon:</td><td><a href="tel:${contact.telefon}">${contact.telefon}</a></td></tr>
      <tr><td style="padding:4px 0;color:#666">E-mail:</td><td><a href="mailto:${contact.email}">${contact.email}</a></td></tr>
      <tr><td style="padding:4px 0;color:#666">Helyszín:</td><td>${contact.helyszin}</td></tr>
    </table>

    <h2 style="font-size:16px;border-bottom:2px solid #D85A30;padding-bottom:6px;margin-top:24px">Ingatlan adatok</h2>
    <table style="width:100%;font-size:14px;border-collapse:collapse">
      <tr><td style="padding:4px 0;color:#666;width:140px">Típus:</td><td>${answers.q1 ? INGATLAN_LABELS[answers.q1] : '–'}</td></tr>
      <tr><td style="padding:4px 0;color:#666">Alapterület:</td><td>${answers.q2 ? MERET_LABELS[answers.q2] : '–'}</td></tr>
    </table>

    <h2 style="font-size:16px;border-bottom:2px solid #D85A30;padding-bottom:6px;margin-top:24px">Kamerarendszer</h2>
    <table style="width:100%;font-size:14px;border-collapse:collapse">
      <tr><td style="padding:4px 0;color:#666;width:140px">Típus:</td><td>${answers.q3 ? KAMERA_LABELS[answers.q3] : '–'}</td></tr>
      ${answers.q3 && answers.q3 !== 'nincs' ? `
      <tr><td style="padding:4px 0;color:#666">Beltéri:</td><td>${answers.q4.beltéri} db</td></tr>
      <tr><td style="padding:4px 0;color:#666">Kültéri:</td><td>${answers.q4.kültéri} db</td></tr>
      <tr><td style="padding:4px 0;color:#666">PTZ:</td><td>${answers.q4.ptz} db</td></tr>
      ` : ''}
    </table>

    <h2 style="font-size:16px;border-bottom:2px solid #D85A30;padding-bottom:6px;margin-top:24px">Riasztórendszer</h2>
    <table style="width:100%;font-size:14px;border-collapse:collapse">
      <tr><td style="padding:4px 0;color:#666;width:140px">Típus:</td><td>${answers.q5 ? RIASZTO_LABELS[answers.q5] : '–'}</td></tr>
      ${answers.q5 === 'uj' || answers.q5 === 'bovites' ? `
      <tr><td style="padding:4px 0;color:#666">PIR érzékelő:</td><td>${answers.q6.pir} db</td></tr>
      <tr><td style="padding:4px 0;color:#666">Nyitásérzékelő:</td><td>${answers.q6.nyitas} db</td></tr>
      <tr><td style="padding:4px 0;color:#666">Üvegtörés:</td><td>${answers.q6.uveg} db</td></tr>
      ` : ''}
    </table>

    ${answers.q7.length > 0 ? `
    <h2 style="font-size:16px;border-bottom:2px solid #D85A30;padding-bottom:6px;margin-top:24px">Extra igények</h2>
    <ul style="font-size:14px;padding-left:20px">${extrasList}</ul>
    ` : ''}

    <h2 style="font-size:16px;border-bottom:2px solid #D85A30;padding-bottom:6px;margin-top:24px">Kalkulált ár</h2>
    <div style="background:#f9fafb;padding:16px;border-radius:6px;font-size:15px">
      <p style="margin:0 0 8px 0"><strong>Pontos (belső):</strong> ${formatHuf(exact)} nettó</p>
      <p style="margin:0"><strong>Tartomány (ügyfél látta):</strong> ${formatHuf(low)} – ${formatHuf(high)} nettó</p>
    </div>
  </div>
</body></html>`;
}

// ─── Client email HTML ────────────────────────────────────────────────────────

function buildClientHtml(answers: CalculatorAnswers, accepted: boolean): string {
    const exact = calculatePrice(answers);
    const { low, high } = priceRange(exact);
    const contact = answers.q8!;
    const hasCam = answers.q3 && answers.q3 !== 'nincs';
    const hasAlarm = answers.q5 && answers.q5 !== 'nincs';
    const hasFire = answers.q7.includes('tuzjelzo');

    const items: string[] = [];
    if (hasCam) {
        const totalCam = answers.q4.beltéri + answers.q4.kültéri + answers.q4.ptz;
        items.push(`${totalCam > 0 ? totalCam + ' kamera telepítés és bekötés (munkadíj)' : 'Kamera telepítés munkadíj'}`);
        if (answers.q3 === 'ip' || answers.q3 === 'nemtudom') items.push('NVR rögzítő konfiguráció, mobilos távelérés beállítás');
        if (answers.q3 === 'analog') items.push('DVR rögzítő konfiguráció, mobilos távelérés beállítás');
    }
    if (answers.q5 === 'uj') items.push('Riasztóközpont telepítés és programozás');
    if ((answers.q5 === 'uj' || answers.q5 === 'bovites') && (answers.q6.pir + answers.q6.nyitas + answers.q6.uveg > 0)) {
        const total = answers.q6.pir + answers.q6.nyitas + answers.q6.uveg;
        items.push(`${total} érzékelő telepítése (PIR, nyitás, üvegtörés)`);
    }
    if (answers.q5 === 'karbantartas') items.push('Meglévő riasztó felülvizsgálat és karbantartás');
    if (answers.q7.includes('tavfelügyelet')) items.push('Távfelügyelet GSM/IP összekötés beállítása');
    if (answers.q7.includes('belepto')) items.push('Beléptető rendszer tervezés és telepítés');
    if (answers.q7.includes('karb')) items.push('Havidíjas felügyeleti csomag (éves felülvizsgálattal)');
    items.push('Kezelési útmutató és átadás-átvételi dokumentáció');
    items.push('Ingyenes helyszíni felmérés az ajánlat véglegesítéséhez');

    const itemsHtml = items.map((i) => `<li style="padding:4px 0">${i}</li>`).join('');

    return `
<html><body style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;color:#1a1a1a">
  <div style="background:#D85A30;padding:28px 24px;border-radius:8px 8px 0 0;text-align:center">
    <h1 style="color:#fff;margin:0;font-size:22px">🛡️ Siro Véd – Biztonságtechnika</h1>
    <p style="color:#fde8df;margin:6px 0 0">Biztonságtechnikai árajánlat</p>
  </div>
  <div style="padding:28px 24px;border:1px solid #e5e5e5;border-top:none;border-radius:0 0 8px 8px">
    <p>Kedves <strong>${contact.nev}</strong>!</p>
    <p>Köszönjük, hogy kitöltötte a kalkulátorunkat! Az Ön által megadott adatok alapján az alábbi tájékoztató árat számoltuk ki:</p>

    <div style="background:#fff5f0;border:2px solid #D85A30;border-radius:8px;padding:20px;text-align:center;margin:20px 0">
      <p style="margin:0 0 4px;color:#666;font-size:13px">Tájékoztató egyszeri projektköltség (munkadíj)</p>
      <p style="margin:0;font-size:26px;font-weight:bold;color:#D85A30">${formatHuf(low)} – ${formatHuf(high)}</p>
      <p style="margin:6px 0 0;color:#888;font-size:12px">nettó + ÁFA • az eszközök (kamerák, érzékelők, rögzítők) ára külön</p>
    </div>

    <h2 style="font-size:15px;color:#1a1a1a;border-bottom:2px solid #D85A30;padding-bottom:6px">A kalkulátor szerint a munkadíj tartalmazza:</h2>
    <ul style="font-size:14px;padding-left:20px">${itemsHtml}</ul>

    ${hasFire ? `<div style="background:#fef3c7;padding:12px 16px;border-radius:6px;margin:20px 0;border-left:4px solid #f59e0b;font-size:14px">
      🔥 <strong>Tűzjelző rendszer iránt érdeklődött.</strong> Ez a szolgáltatás hamarosan elérhető lesz – kollégánk tájékoztatja az indulásról.
    </div>` : ''}

    <div style="background:#f0fdf4;padding:14px 16px;border-radius:6px;margin:20px 0;font-size:14px">
      <strong>Következő lépés:</strong> Kollégánk 1 munkanapon belül felveszi Önnel a kapcsolatot az ingyenes helyszíni felmérés egyeztetéséhez.
    </div>

    <h2 style="font-size:15px;color:#1a1a1a;border-bottom:2px solid #D85A30;padding-bottom:6px;margin-top:24px">Elérhetőségeink</h2>
    <table style="font-size:14px;border-collapse:collapse">
      <tr><td style="padding:3px 16px 3px 0;color:#666">📞 Telefon:</td><td>+36 XX XXX XXXX</td></tr>
      <tr><td style="padding:3px 16px 3px 0;color:#666">✉️ E-mail:</td><td>info@siroved.hu</td></tr>
      <tr><td style="padding:3px 16px 3px 0;color:#666">🌐 Weboldal:</td><td>siroved.hu</td></tr>
    </table>

    <p style="font-size:12px;color:#aaa;margin-top:28px;border-top:1px solid #e5e5e5;padding-top:14px">
      Ez egy tájékoztató ártartomány a megadott adatok alapján. A pontos ajánlathoz ingyenes helyszíni felmérést végzünk.<br>
      ${accepted ? 'Jelzése szerint elfogadja az irányárat – hamarosan felvesszük Önnel a kapcsolatot.' : 'Jelzése szerint egyelőre csak tájékozódott – örömmel várjuk visszatérését.'}
    </p>
  </div>
</body></html>`;
}

// ─── Route handler ────────────────────────────────────────────────────────────

export async function POST(request: Request) {
    try {
        const body: RequestBody = await request.json();
        const { answers, accepted } = body;

        if (!answers.q8?.email || !answers.q8?.nev) {
            return NextResponse.json({ error: 'Hiányzó kapcsolati adatok.' }, { status: 400 });
        }

        const adminEmail = process.env.SIROVED_ADMIN_EMAIL;
        if (!adminEmail) {
            return NextResponse.json({ error: 'Admin email nincs beállítva.' }, { status: 500 });
        }

        const transporter = createTransporter();
        const contact = answers.q8;
        const acceptedLabel = accepted ? 'ELFOGADTA' : 'csak tájékozódott';
        const city = contact.helyszin.split(',')[0].trim();

        // Admin email
        await transporter.sendMail({
            from: `"Siro Véd Kalkulátor" <${process.env.SMTP_USER}>`,
            to: adminEmail,
            subject: `Új ajánlatkérés – ${contact.nev} – ${city} – ${acceptedLabel}`,
            html: buildAdminHtml(answers, accepted),
        });

        // Client email
        await transporter.sendMail({
            from: `"Siro Véd Biztonságtechnika" <${process.env.SMTP_USER}>`,
            to: contact.email,
            subject: 'Biztonságtechnika árajánlat – Siro Véd',
            html: buildClientHtml(answers, accepted),
        });

        return NextResponse.json({ success: true });
    } catch (err) {
        console.error('Email sending error:', err);
        return NextResponse.json({ error: 'Email küldési hiba.' }, { status: 500 });
    }
}
