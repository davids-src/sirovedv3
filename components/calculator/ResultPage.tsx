'use client';

import { useState } from 'react';
import { CalculatorAnswers, calculatePrice, priceRange, formatHuf } from './types';
import { CheckCircle2, Clock, ThumbsUp, ThumbsDown, Loader2, Flame, AlertTriangle } from 'lucide-react';
import { gtag } from '@/lib/gtag';

interface Props {
    answers: CalculatorAnswers;
    onReset: () => void;
}

function buildIncludedItems(answers: CalculatorAnswers): string[] {
    const items: string[] = [];
    const hasCam = answers.q3 && answers.q3 !== 'nincs';

    if (hasCam) {
        const total = answers.q4.beltéri + answers.q4.kültéri + answers.q4.ptz;
        items.push(`${total > 0 ? total + ' kamera' : 'Kamera'} telepítés és bekötés (munkadíj)`);
        if (answers.q3 === 'ip' || answers.q3 === 'nemtudom') {
            items.push('NVR rögzítő konfiguráció, mobilos távelérés beállítás');
        }
        if (answers.q3 === 'analog') {
            items.push('DVR rögzítő konfiguráció, mobilos távelérés beállítás');
        }
    }
    if (answers.q5 === 'uj') {
        items.push('Riasztóközpont telepítés és programozás');
    }
    if ((answers.q5 === 'uj' || answers.q5 === 'bovites') && (answers.q6.pir + answers.q6.nyitas + answers.q6.uveg > 0)) {
        const total = answers.q6.pir + answers.q6.nyitas + answers.q6.uveg;
        items.push(`${total} érzékelő telepítése (PIR, nyitás, üvegtörés)`);
    }
    if (answers.q5 === 'karbantartas') {
        items.push('Meglévő riasztó felülvizsgálat és karbantartás');
    }
    if (answers.q7.includes('tavfelügyelet')) {
        items.push('Távfelügyelet GSM/IP összekötés beállítása');
    }
    if (answers.q7.includes('belepto')) {
        items.push('Beléptető rendszer tervezés és telepítés');
    }
    if (answers.q7.includes('karb')) {
        items.push('Havidíjas felügyeleti csomag (éves felülvizsgálattal)');
    }
    items.push('Kezelési útmutató és átadás-átvételi dokumentáció');
    items.push('Ingyenes helyszíni felmérés az ajánlat véglegesítéséhez');
    return items;
}

export default function ResultPage({ answers, onReset }: Props) {
    const [decision, setDecision] = useState<'accepted' | 'declined' | null>(null);
    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const exact = calculatePrice(answers);
    const { low, high } = priceRange(exact);
    const items = buildIncludedItems(answers);
    const hasFire = answers.q7.includes('tuzjelzo');

    async function handleSubmit(accepted: boolean) {
        setLoading(true);
        setError('');
        try {
            const res = await fetch('/api/send-email', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ answers, accepted }),
            });
            if (!res.ok) throw new Error('error');
            setSubmitted(true);
            setDecision(accepted ? 'accepted' : 'declined');

            // Track lead event in Google Analytics
            gtag('event', 'generate_lead', {
                event_category: 'Calculator',
                event_label: accepted ? 'Calculator Accepted' : 'Calculator Info Only',
                value: exact,
                currency: 'HUF',
                property_type: answers.q1,
                accepted_contact: accepted,
            });
            gtag('event', 'calculator_submission', {
                property_type: answers.q1,
                price_estimate: exact,
                accepted_contact: accepted
            });
        } catch {
            setError('Az email küldése nem sikerült. Kérjük, hívjon minket közvetlenül!');
        } finally {
            setLoading(false);
        }
    }

    if (submitted) {
        return (
            <div className="text-center py-8">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-green-100 mb-6">
                    <CheckCircle2 className="h-10 w-10 text-green-500" />
                </div>
                <h2 className="text-2xl font-bold text-white mb-3">Köszönjük!</h2>
                <p className="text-gray-400 mb-2">
                    {decision === 'accepted'
                        ? 'Kollégánk 1 munkanapon belül felveszi Önnel a kapcsolatot az ingyenes helyszíni felmérés egyeztetéséhez.'
                        : 'Megkaptuk az ajánlatkérést. Ha kérdése van, örömmel hívjuk fel!'}
                </p>
                <p className="text-sm text-gray-400 mb-8">Az összefoglaló e-mailt elküldtük a megadott email-re.</p>
                <div className="flex items-center justify-center gap-2 text-gray-400 text-sm">
                    <Clock className="h-4 w-4 text-[#1A6BE8]" />
                    <span>Visszahívás: 1 munkanapon belül</span>
                </div>
                <button
                    onClick={onReset}
                    className="mt-8 text-sm text-[#1A6BE8] hover:text-[#155ecc] underline underline-offset-2"
                >
                    Új kalkuláció indítása
                </button>
            </div>
        );
    }

    return (
        <div>
            {/* Price display */}
            <div className="bg-gradient-to-br from-[#1A6BE8] to-[#155ecc] rounded-2xl p-6 text-center text-white mb-6">
                <p className="text-blue-200 text-sm mb-1">Tájékoztató egyszeri projektköltség (munkadíj)</p>
                <p className="text-4xl font-bold tracking-tight mb-1">
                    {formatHuf(low)} – {formatHuf(high)}
                </p>
                <p className="text-blue-200 text-xs">nettó + ÁFA</p>
                <p className="text-blue-300 text-xs mt-2">Az eszközök (kamerák, érzékelők, rögzítők) ára külön</p>
            </div>

            {/* Included items */}
            <div className="bg-gray-50 rounded-xl p-5 mb-6">
                <h3 className="font-semibold text-white mb-3 text-sm">A munkadíj tartalmazza:</h3>
                <ul className="space-y-2">
                    {items.map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-white/80">
                            <CheckCircle2 className="h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" />
                            {item}
                        </li>
                    ))}
                </ul>
            </div>

            {/* Disclaimer */}
            <p className="text-xs text-gray-400 mb-6 leading-relaxed">
                Ez egy tájékoztató ártartomány a megadott adatok alapján. A pontos ajánlathoz ingyenes helyszíni felmérést végzünk – kollégánk 1 munkanapon belül felveszi Önnel a kapcsolatot.
            </p>

            {/* Acceptance question */}
            <div className="border-t border-white/5 pt-6">
                <p className="font-semibold text-white mb-4 text-sm">Mit szeretne tenni az ajánlattal?</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
                    <button
                        onClick={() => handleSubmit(true)}
                        disabled={loading}
                        className="flex items-center gap-3 p-4 rounded-xl border-2 border-green-500 bg-green-900/20 hover:bg-green-100 transition-colors text-left disabled:opacity-50"
                    >
                        <ThumbsUp className="h-5 w-5 text-green-500 flex-shrink-0" />
                        <div>
                            <p className="font-semibold text-sm text-green-400">Elfogadom, kérem a kapcsolatfelvételt</p>
                            <p className="text-xs text-green-500">Hamarosan felhívjuk</p>
                        </div>
                    </button>
                    <button
                        onClick={() => handleSubmit(false)}
                        disabled={loading}
                        className="flex items-center gap-3 p-4 rounded-xl border-2 border-white/10 bg-[#12121A] hover:border-white/20 transition-colors text-left disabled:opacity-50"
                    >
                        <ThumbsDown className="h-5 w-5 text-gray-400 flex-shrink-0" />
                        <div>
                            <p className="font-semibold text-sm text-white/80">Egyelőre csak tájékozódtam</p>
                            <p className="text-xs text-gray-400">De mentjük az ajánlatot</p>
                        </div>
                    </button>
                </div>

                {loading && (
                    <div className="flex items-center justify-center gap-2 text-gray-400 text-sm py-2">
                        <Loader2 className="h-4 w-4 animate-spin" />
                        <span>Küldés folyamatban...</span>
                    </div>
                )}
                {error && (
                    <div className="flex items-start gap-2 bg-red-900/20 border border-red-900/50 rounded-lg p-3 text-sm text-red-400">
                        <AlertTriangle className="h-4 w-4 flex-shrink-0 mt-0.5" />
                        {error}
                    </div>
                )}
            </div>
        </div>
    );
}
