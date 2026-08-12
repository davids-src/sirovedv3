'use client';

import { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Loader2, ShieldCheck, CheckCircle } from 'lucide-react';
import { gtag } from '@/lib/gtag';

const ACCENT = '#1A6BE8';

function ContactFormContent() {
  const searchParams = useSearchParams();
  const forrasParam = searchParams.get('forras') || '';

  const isIngyenesFelmeresDefault = forrasParam.includes('ingyenes-felmeres');

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    inquiryType: isIngyenesFelmeresDefault ? 'ingyenes-felmeres' : 'altalanos',
    ingatlanTipus: 'lakoingatlan',
    jelenlegiRendszer: 'nincs',
    message: '',
    privacyConsent: false,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  useEffect(() => {
    if (forrasParam.includes('ingyenes-felmeres')) {
      setFormData((prev) => ({
        ...prev,
        inquiryType: 'ingyenes-felmeres',
      }));
    }
  }, [forrasParam]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const value = e.target.type === 'checkbox' ? (e.target as HTMLInputElement).checked : e.target.value;
    setFormData({
      ...formData,
      [e.target.name]: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.privacyConsent) {
      setSubmitStatus('error');
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));

      setSubmitStatus('success');
      gtag('event', 'generate_lead', {
        event_category: 'Contact',
        event_label: `Form Submission - ${formData.inquiryType}`,
        value: 1,
      });
      gtag('event', 'contact', {
        method: 'form',
      });
      setFormData({
        name: '',
        email: '',
        phone: '',
        inquiryType: 'altalanos',
        ingatlanTipus: 'lakoingatlan',
        jelenlegiRendszer: 'nincs',
        message: '',
        privacyConsent: false,
      });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const isFelmeresSelected = formData.inquiryType === 'ingyenes-felmeres';

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

      {/* Megkeresés típusa */}
      <div>
        <Label htmlFor="inquiryType" className="text-muted text-sm font-medium">
          Megkeresés típusa *
        </Label>
        <select
          id="inquiryType"
          name="inquiryType"
          value={formData.inquiryType}
          onChange={handleChange}
          className="mt-2 w-full h-11 px-3.5 py-2 rounded-md border border-[#2A2A35] bg-[#111116] text-ink text-sm focus:outline-none focus:border-[#1A6BE8] transition-colors"
        >
          <option value="ingyenes-felmeres">
            Ingyenes vagyonvédelmi állapotfelmérés (Kamera & Riasztó)
          </option>
          <option value="altalanos">Általános érdeklődés / Tanácsadás</option>
          <option value="ajajanlat">Egyedi árajánlatkérés</option>
        </select>
      </div>

      {/* Személyes adatok */}
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <Label htmlFor="name" className="text-muted text-sm font-medium">
            Név *
          </Label>
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
          <Label htmlFor="phone" className="text-muted text-sm font-medium">
            Telefonszám *
          </Label>
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
        <Label htmlFor="email" className="text-muted text-sm font-medium">
          Email cím *
        </Label>
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

      {/* Kondicionális extra mezők Ingyenes felmérés esetén */}
      {isFelmeresSelected && (
        <div className="p-4 rounded-lg bg-[#14141C] border border-[#2A2A35] space-y-4">
          <div className="flex items-center gap-2 text-xs font-mono text-ink">
            <CheckCircle size={14} style={{ color: ACCENT }} />
            <span>Felméréshez kapcsolódó adatok (opcionális a pontosabb előkészítéshez):</span>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="ingatlanTipus" className="text-muted text-xs font-medium">
                Ingatlan típusa
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

      {/* GDPR consent checkbox */}
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
            Jelentkezés küldése...
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
