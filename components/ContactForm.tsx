'use client';

import { useState, useEffect, useRef, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Loader2, ShieldCheck, CheckCircle } from 'lucide-react';
import {
  trackGenerateLead,
  trackFormStart,
  trackFormError,
  trackRequestTypeSelect,
  trackCustomerTypeSelect,
  getAttribution,
  type RequestType,
  type CustomerType,
} from '@/lib/analytics';

const ACCENT = '#1A6BE8';

interface FormData {
  name: string;
  email: string;
  phone: string;
  inquiryType: string;
  // New lead-qualification fields
  customer_type: CustomerType | '';
  request_type: RequestType | '';
  property_type: string;
  timeframe: string;
  location: string;
  // Legacy fields
  ingatlanTipus: string;
  jelenlegiRendszer: string;
  message: string;
  privacyConsent: boolean;
  // Hidden attribution (not shown in UI)
  first_touch: string;
  last_touch: string;
}

const INITIAL_FORM: FormData = {
  name: '',
  email: '',
  phone: '',
  inquiryType: 'altalanos',
  customer_type: '',
  request_type: '',
  property_type: '',
  timeframe: '',
  location: '',
  ingatlanTipus: 'lakoingatlan',
  jelenlegiRendszer: 'nincs',
  message: '',
  privacyConsent: false,
  first_touch: '',
  last_touch: '',
};

const INQUIRY_TYPE_LABELS: Record<string, string> = {
  'ingyenes-felmeres': 'Ingyenes vagyonvédelmi állapotfelmérés (Kamera & Riasztó)',
  'altalanos': 'Általános érdeklődés / Tanácsadás',
  'ajajanlat': 'Egyedi árajánlatkérés',
};

const REQUEST_TYPE_OPTIONS: { value: RequestType; label: string }[] = [
  { value: 'uj-rendszer', label: 'Új rendszert szeretnék' },
  { value: 'bovites', label: 'Meglévő rendszer bővítése' },
  { value: 'javitas', label: 'Hibajavítás / állapotfelmérés' },
  { value: 'karbantartas', label: 'Rendszeres karbantartás' },
];

const PROPERTY_TYPE_OPTIONS = [
  { value: 'csaladi-haz', label: 'Családi ház' },
  { value: 'lakas', label: 'Lakás' },
  { value: 'iroda', label: 'Iroda' },
  { value: 'uzlet', label: 'Üzlet / Rendelő' },
  { value: 'telephely', label: 'Telephely' },
  { value: 'raktar', label: 'Raktár / Csarnok' },
  { value: 'egyeb', label: 'Egyéb' },
];

const TIMEFRAME_OPTIONS = [
  { value: 'azonnal', label: 'Minél hamarabb (1–2 héten belül)' },
  { value: '1-honap', label: '1 hónapon belül' },
  { value: '3-honap', label: '1–3 hónapon belül' },
  { value: 'rugalmas', label: 'Rugalmas / tervezési fázisban vagyok' },
];

function ContactFormContent() {
  const searchParams = useSearchParams();
  const forrasParam = searchParams.get('forras') || '';
  const requestTypeParam = searchParams.get('request_type') as RequestType | null;
  const propertyTypeParam = searchParams.get('property_type') || '';

  const formStartedRef = useRef(false);

  const [formData, setFormData] = useState<FormData>({
    ...INITIAL_FORM,
    inquiryType: forrasParam.includes('ingyenes-felmeres') ? 'ingyenes-felmeres' : 'altalanos',
    request_type: requestTypeParam || '',
    property_type: propertyTypeParam || '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  // Populate attribution from localStorage on mount
  useEffect(() => {
    const { first_touch, last_touch } = getAttribution();
    setFormData((prev) => ({
      ...prev,
      first_touch: JSON.stringify(first_touch),
      last_touch: JSON.stringify(last_touch),
    }));
  }, []);

  // Update inquiry type if URL param changes
  useEffect(() => {
    if (forrasParam.includes('ingyenes-felmeres')) {
      setFormData((prev) => ({ ...prev, inquiryType: 'ingyenes-felmeres' }));
    }
  }, [forrasParam]);

  const trackFirstInteraction = () => {
    if (!formStartedRef.current) {
      formStartedRef.current = true;
      trackFormStart({ form_type: 'contact_form' });
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    trackFirstInteraction();
    const value =
      e.target.type === 'checkbox'
        ? (e.target as HTMLInputElement).checked
        : e.target.value;

    const name = e.target.name as keyof FormData;
    const newData = { ...formData, [name]: value };
    setFormData(newData);

    // Track specific selections
    if (name === 'request_type' && value) {
      trackRequestTypeSelect(value as RequestType);
    }
    if (name === 'customer_type' && value) {
      trackCustomerTypeSelect(value as CustomerType);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.privacyConsent) {
      setSubmitStatus('error');
      trackFormError({ form_type: 'contact_form', error_type: 'missing_consent' });
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error('Email sending failed');

      setSubmitStatus('success');
      trackGenerateLead({
        lead_source: forrasParam || 'direct',
        form_type: 'contact_form',
        customer_type: formData.customer_type || undefined,
        request_type: formData.request_type || undefined,
        project_type: formData.property_type || undefined,
        landing_page: typeof window !== 'undefined' ? window.location.pathname : undefined,
        source_site: 'siroved.hu',
      });

      setFormData({ ...INITIAL_FORM, first_touch: formData.first_touch, last_touch: formData.last_touch });
      formStartedRef.current = false;
    } catch (error) {
      console.error('Contact form submission error:', error);
      setSubmitStatus('error');
      trackFormError({ form_type: 'contact_form', error_type: 'server_error' });
    } finally {
      setIsSubmitting(false);
    }
  };

  const isFelmeresSelected = formData.inquiryType === 'ingyenes-felmeres';

  const selectClass =
    'mt-2 w-full h-11 px-3.5 py-2 rounded-md border border-[#2A2A35] bg-[#111116] text-ink text-sm focus:outline-none focus:border-[#1A6BE8] transition-colors';

  return (
    <form onSubmit={handleSubmit} id="felmeres-urlap" className="space-y-6">
      {/* Bizalmi üzenet banner */}
      <div
        className="rounded-lg p-4 border text-sm space-y-1"
        style={{ background: `${ACCENT}0A`, borderColor: `${ACCENT}30` }}
      >
        <div className="flex items-center gap-2 font-semibold text-ink">
          <ShieldCheck size={18} style={{ color: ACCENT }} />
          <span>Kötelezettségmentes Megkeresés</span>
        </div>
        <p className="text-muted text-xs leading-[1.6]">
          A felmérés kötelezettségmentes.
        </p>
      </div>

      {/* ── Ügyfél típusa (B2B / B2C) ── */}
      <div>
        <Label className="text-muted text-sm font-medium">Ön magánszemély vagy vállalkozás?</Label>
        <div className="mt-2 flex gap-3">
          {([
            { value: 'b2c', label: 'Magánszemély' },
            { value: 'b2b', label: 'Vállalkozás / cég' },
          ] as { value: CustomerType; label: string }[]).map((opt) => (
            <label
              key={opt.value}
              className={`flex-1 cursor-pointer rounded-md border px-4 py-3 text-sm font-medium text-center transition-colors duration-150 ${
                formData.customer_type === opt.value
                  ? 'border-[#1A6BE8] bg-[#1A6BE8]/10 text-ink'
                  : 'border-[#2A2A35] text-muted hover:border-[#1A6BE8]/50'
              }`}
            >
              <input
                type="radio"
                name="customer_type"
                value={opt.value}
                checked={formData.customer_type === opt.value}
                onChange={handleChange}
                className="sr-only"
              />
              {opt.label}
            </label>
          ))}
        </div>
      </div>

      {/* ── Igény típusa ── */}
      <div>
        <Label htmlFor="request_type" className="text-muted text-sm font-medium">
          Miben segíthetünk? *
        </Label>
        <select
          id="request_type"
          name="request_type"
          value={formData.request_type}
          onChange={handleChange}
          className={selectClass}
          required
        >
          <option value="">Kérem, válasszon...</option>
          {REQUEST_TYPE_OPTIONS.map((o) => (
            <option key={o.value} value={o.value}>{o.label}</option>
          ))}
        </select>
      </div>

      {/* ── Megkeresés típusa (legacy, kisebb) ── */}
      <div>
        <Label htmlFor="inquiryType" className="text-muted text-sm font-medium">
          Megkeresés típusa
        </Label>
        <select
          id="inquiryType"
          name="inquiryType"
          value={formData.inquiryType}
          onChange={handleChange}
          className={selectClass}
        >
          <option value="ingyenes-felmeres">
            Ingyenes vagyonvédelmi állapotfelmérés (Kamera &amp; Riasztó)
          </option>
          <option value="altalanos">Általános érdeklődés / Tanácsadás</option>
          <option value="ajajanlat">Egyedi árajánlatkérés</option>
        </select>
      </div>

      {/* ── Ingatlantípus ── */}
      <div>
        <Label htmlFor="property_type" className="text-muted text-sm font-medium">
          Ingatlan típusa
        </Label>
        <select
          id="property_type"
          name="property_type"
          value={formData.property_type}
          onChange={handleChange}
          className={selectClass}
        >
          <option value="">Kérem, válasszon...</option>
          {PROPERTY_TYPE_OPTIONS.map((o) => (
            <option key={o.value} value={o.value}>{o.label}</option>
          ))}
        </select>
      </div>

      {/* ── Helyszín + Időkeret ── */}
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <Label htmlFor="location" className="text-muted text-sm font-medium">
            Helyszín (település / kerület)
          </Label>
          <Input
            id="location"
            name="location"
            type="text"
            value={formData.location}
            onChange={handleChange}
            className="mt-2 bg-[#111116] border-[#2A2A35] text-ink"
            placeholder="pl. Székesfehérvár, II. kerület…"
          />
        </div>
        <div>
          <Label htmlFor="timeframe" className="text-muted text-sm font-medium">
            Tervezett időzítés
          </Label>
          <select
            id="timeframe"
            name="timeframe"
            value={formData.timeframe}
            onChange={handleChange}
            className={selectClass}
          >
            <option value="">Kérem, válasszon...</option>
            {TIMEFRAME_OPTIONS.map((o) => (
              <option key={o.value} value={o.value}>{o.label}</option>
            ))}
          </select>
        </div>
      </div>

      {/* ── Személyes adatok ── */}
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <Label htmlFor="name" className="text-muted text-sm font-medium">Név *</Label>
          <Input
            id="name"
            name="name"
            type="text"
            required
            value={formData.name}
            onChange={handleChange}
            className="mt-2 bg-[#111116] border-[#2A2A35] text-ink"
            placeholder="Teljes név"
          />
        </div>
        <div>
          <Label htmlFor="phone" className="text-muted text-sm font-medium">Telefonszám *</Label>
          <Input
            id="phone"
            name="phone"
            type="tel"
            required
            value={formData.phone}
            onChange={handleChange}
            className="mt-2 bg-[#111116] border-[#2A2A35] text-ink"
            placeholder="+36 XX XXX XXXX"
          />
        </div>
      </div>

      <div>
        <Label htmlFor="email" className="text-muted text-sm font-medium">Email cím *</Label>
        <Input
          id="email"
          name="email"
          type="email"
          required
          value={formData.email}
          onChange={handleChange}
          className="mt-2 bg-[#111116] border-[#2A2A35] text-ink"
          placeholder="pelda@email.com"
        />
      </div>

      {/* ── Ingyenes felmérés extra mezők (legacy) ── */}
      {isFelmeresSelected && (
        <div className="p-4 rounded-lg bg-[#14141C] border border-[#2A2A35] space-y-4">
          <div className="flex items-center gap-2 text-xs font-mono text-ink">
            <CheckCircle size={14} style={{ color: ACCENT }} />
            <span>Felméréshez kapcsolódó adatok (opcionális a pontosabb előkészítéshez):</span>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="ingatlanTipus" className="text-muted text-xs font-medium">
                Jelenlegi ingatlan típusa
              </Label>
              <select
                id="ingatlanTipus"
                name="ingatlanTipus"
                value={formData.ingatlanTipus}
                onChange={handleChange}
                className="mt-1.5 w-full h-10 px-3 py-1.5 rounded-md border border-[#2A2A35] bg-[#0E0E12] text-ink text-xs focus:outline-none focus:border-[#1A6BE8]"
              >
                <option value="lakoingatlan">Lakóingatlan (Családi ház / Lakás)</option>
                <option value="uzlet">Üzlethelyiség / Iroda</option>
                <option value="telephely">Telephely / Raktár</option>
                <option value="egyeb">Egyéb ingatlan</option>
              </select>
            </div>
            <div>
              <Label htmlFor="jelenlegiRendszer" className="text-muted text-xs font-medium">
                Jelenlegi biztonságtechnika
              </Label>
              <select
                id="jelenlegiRendszer"
                name="jelenlegiRendszer"
                value={formData.jelenlegiRendszer}
                onChange={handleChange}
                className="mt-1.5 w-full h-10 px-3 py-1.5 rounded-md border border-[#2A2A35] bg-[#0E0E12] text-ink text-xs focus:outline-none focus:border-[#1A6BE8]"
              >
                <option value="nincs">Nincs még kamera / riasztó</option>
                <option value="kamera">Van kamerarendszer (átvizsgálás/bővítés)</option>
                <option value="riasztos">Van riasztórendszer (átvizsgálás/bővítés)</option>
                <option value="mindketto">Mindkettő van meglévőként</option>
              </select>
            </div>
          </div>
        </div>
      )}

      <div>
        <Label htmlFor="message" className="text-muted text-sm font-medium">
          Üzenet / Részletek *
        </Label>
        <Textarea
          id="message"
          name="message"
          required
          value={formData.message}
          onChange={handleChange}
          className="mt-2 bg-[#111116] border-[#2A2A35] text-ink"
          rows={4}
          placeholder={
            isFelmeresSelected
              ? 'Röviden írja le az ingatlan elhelyezkedését vagy a meglévő rendszerrel kapcsolatos tapasztalatait...'
              : 'Írja le, miben segíthetünk...'
          }
        />
      </div>

      {/* Hidden attribution fields */}
      <input type="hidden" name="first_touch" value={formData.first_touch} />
      <input type="hidden" name="last_touch" value={formData.last_touch} />

      {/* GDPR consent */}
      <div className="flex items-start gap-3 pt-1">
        <input
          type="checkbox"
          id="privacyConsent"
          name="privacyConsent"
          required
          checked={formData.privacyConsent}
          onChange={handleChange}
          className="mt-1 h-4 w-4 rounded border-[#2A2A35] bg-[#111116] text-[#1A6BE8] focus:ring-[#1A6BE8] shrink-0 accent-[#1A6BE8]"
        />
        <Label htmlFor="privacyConsent" className="text-xs text-muted leading-[1.6] cursor-pointer">
          Elfogadom az{' '}
          <a href="/adatvedelem" target="_blank" rel="noopener noreferrer" className="underline text-ink hover:text-[#1A6BE8]">
            Adatkezelési Tájékoztatót
          </a>{' '}
          és hozzájárulok adataim kezeléséhez a kapcsolatfelvétel céljából. *
        </Label>
      </div>

      {submitStatus === 'success' && (
        <div className="bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 px-4 py-3 rounded-lg text-sm">
          Köszönjük jelentkezését! Kollégánk hamarosan felveszi Önnel a kapcsolatot az időpont-egyeztetéshez.
        </div>
      )}

      {submitStatus === 'error' && (
        <div className="bg-rose-500/10 border border-rose-500/30 text-rose-300 px-4 py-3 rounded-lg text-sm">
          Kérjük, fogadja el az Adatkezelési Tájékoztatót és töltse ki az összes kötelező mezőt!
        </div>
      )}

      <Button
        type="submit"
        disabled={isSubmitting || !formData.privacyConsent}
        className="w-full bg-[#1A6BE8] hover:bg-[#155ecc] text-white font-semibold py-3 h-auto disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Küldés folyamatban...
          </>
        ) : isFelmeresSelected ? (
          'Kérem az ingyenes állapotfelmérést'
        ) : (
          'Üzenet küldése'
        )}
      </Button>
    </form>
  );
}

export default function ContactForm() {
  return (
    <Suspense
      fallback={
        <div className="p-8 text-center text-muted font-mono text-xs">Űrlap betöltése...</div>
      }
    >
      <ContactFormContent />
    </Suspense>
  );
}
