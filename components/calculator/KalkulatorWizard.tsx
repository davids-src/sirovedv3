'use client';

import { useState } from 'react';
import { CalculatorAnswers, ContactData, getSteps, TOTAL_STEPS } from './types';
import Q1IngatlanTipus from './steps/Q1IngatlanTipus';
import Q2Alapterulet from './steps/Q2Alapterulet';
import Q3KameraRendszer from './steps/Q3KameraRendszer';
import Q4KameraDb from './steps/Q4KameraDb';
import Q5Riaszto from './steps/Q5Riaszto';
import Q6ErzekeloDb from './steps/Q6ErzekeloDb';
import Q7ExtraIgnyek from './steps/Q7ExtraIgnyek';
import Q8Kapcsolat from './steps/Q8Kapcsolat';
import ResultPage from './ResultPage';
import { ChevronLeft, ChevronRight, ShieldPlus, Expand } from 'lucide-react';
import { sendGa4Event } from '@/lib/analytics';

const ACCENT = '#1A6BE8';

const INITIAL_ANSWERS: CalculatorAnswers = {
    mode: undefined,
    q1: undefined,
    q2: undefined,
    q3: undefined,
    q4: { beltéri: 0, kültéri: 0, ptz: 0 },
    q5: undefined,
    q6: { pir: 0, nyitas: 0, uveg: 0 },
    q7: [],
    q8: undefined,
};

const STEP_TITLES: Record<number, string> = {
    0: 'Az Ön adatai – az ajánlatot ezekre küldjük',
    1: 'Milyen típusú ingatlanról van szó?',
    2: 'Mekkora az ingatlan alapterülete?',
    3: 'Milyen kamerarendszert szeretne?',
    4: 'Hány kamerát szeretne felszerelni?',
    5: 'Szeretne riasztórendszert?',
    6: 'Hány érzékelőre lenne szükség?',
    7: 'Milyen extra igények merülnek fel?',
};

function validateStep(step: number, answers: CalculatorAnswers): { valid: boolean; contactErrors: Partial<Record<keyof ContactData, string>> } {
    const contactErrors: Partial<Record<keyof ContactData, string>> = {};

    if (step === 0) {
        const c = answers.q8;
        if (!c?.nev?.trim()) contactErrors.nev = 'Kérjük adja meg a nevét.';
        if (!c?.telefon?.trim()) contactErrors.telefon = 'Kérjük adja meg a telefonszámát.';
        if (!c?.email?.trim()) contactErrors.email = 'Kérjük adja meg az email-cimét.';
        else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(c.email)) contactErrors.email = 'Érvénytelen email-cím.';
        if (!c?.helyszin?.trim()) contactErrors.helyszin = 'Kérjük adja meg a helyszínt.';
        return { valid: Object.keys(contactErrors).length === 0, contactErrors };
    }

    if (step === 1 && !answers.q1) return { valid: false, contactErrors };
    if (step === 2 && !answers.q2) return { valid: false, contactErrors };
    if (step === 3 && !answers.q3) return { valid: false, contactErrors };
    if (step === 3 && answers.q3 === 'nincs' && answers.q5 === 'nincs') return { valid: false, contactErrors };
    if (step === 5 && !answers.q5) return { valid: false, contactErrors };

    return { valid: true, contactErrors };
}

// ── Pre-screen component ───────────────────────────────────────────────────────

interface PreScreenProps {
    onSelect: (mode: 'uj' | 'bovites') => void;
}

function PreScreen({ onSelect }: PreScreenProps) {
    return (
        <div className="bg-[#12121A] rounded-2xl shadow-lg border border-white/5 p-6 sm:p-8">
            <div className="mb-8 text-center">
                <span className="text-xs font-semibold uppercase tracking-widest px-3 py-1.5 rounded-full border border-white/10 text-gray-400">
                    Kalkulátor
                </span>
                <h2 className="mt-5 text-xl font-bold text-white">Milyen a jelenlegi helyzete?</h2>
                <p className="mt-2 text-sm text-gray-400">Ez segít az árbecslés pontosabb kialakításában.</p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
                <button
                    id="calc-prescreen-uj"
                    onClick={() => onSelect('uj')}
                    className="group flex flex-col items-start gap-3 p-6 rounded-xl border-2 border-white/10 hover:border-[#1A6BE8]/70 hover:bg-[#1A6BE8]/5 transition-all duration-200 text-left"
                >
                    <div className="w-12 h-12 rounded-lg flex items-center justify-center" style={{ background: `${ACCENT}15` }}>
                        <ShieldPlus size={22} strokeWidth={1.5} style={{ color: ACCENT }} />
                    </div>
                    <div>
                        <h3 className="font-semibold text-white text-base">Új rendszert szeretnék</h3>
                        <p className="text-sm text-gray-400 mt-1 leading-relaxed">Jelenleg nincs biztonságtechnikai rendszerem, és nulláról tervezném.</p>
                    </div>
                </button>

                <button
                    id="calc-prescreen-bovites"
                    onClick={() => onSelect('bovites')}
                    className="group flex flex-col items-start gap-3 p-6 rounded-xl border-2 border-white/10 hover:border-[#1A6BE8]/70 hover:bg-[#1A6BE8]/5 transition-all duration-200 text-left"
                >
                    <div className="w-12 h-12 rounded-lg flex items-center justify-center" style={{ background: `${ACCENT}15` }}>
                        <Expand size={22} strokeWidth={1.5} style={{ color: ACCENT }} />
                    </div>
                    <div>
                        <h3 className="font-semibold text-white text-base">Meglévő rendszert bővíteném</h3>
                        <p className="text-sm text-gray-400 mt-1 leading-relaxed">Már van valamilyen kamera vagy riasztó, és azt szeretném bővíteni vagy fejleszteni.</p>
                    </div>
                </button>
            </div>
        </div>
    );
}

// ── Main wizard ────────────────────────────────────────────────────────────────

export default function KalkulatorWizard() {
    const [answers, setAnswers] = useState<CalculatorAnswers>(INITIAL_ANSWERS);
    const [stepIndex, setStepIndex] = useState(0);
    const [showResult, setShowResult] = useState(false);
    const [touched, setTouched] = useState(false);
    const [contactErrors, setContactErrors] = useState<Partial<Record<keyof ContactData, string>>>({});

    // Pre-screen: not shown if mode is already set
    const showPreScreen = answers.mode === undefined;

    function handlePreScreenSelect(mode: 'uj' | 'bovites') {
        setAnswers((prev) => ({ ...prev, mode }));
        sendGa4Event('calculator_start', { mode });
    }

    function getVisibleSteps(a: CalculatorAnswers) {
        return getSteps(a);
    }

    const steps = getVisibleSteps(answers);
    const currentStep = steps[stepIndex];
    const progressPct = Math.round(((stepIndex + 1) / TOTAL_STEPS) * 100);

    function handleAnswer(update: Partial<CalculatorAnswers>) {
        setAnswers((prev) => ({ ...prev, ...update }));
        setTouched(false);
    }

    function handleNext() {
        setTouched(true);
        const { valid, contactErrors: ce } = validateStep(currentStep, answers);
        if (!valid) {
            setContactErrors(ce);
            return;
        }
        setContactErrors({});

        sendGa4Event('calculator_step', { step: currentStep, step_index: stepIndex, mode: answers.mode });

        const updatedSteps = getVisibleSteps(answers);
        if (stepIndex < updatedSteps.length - 1) {
            setStepIndex(stepIndex + 1);
        } else {
            if (answers.q3 === 'nincs' && answers.q5 === 'nincs') return;
            sendGa4Event('calculator_complete', { mode: answers.mode });
            setShowResult(true);
        }
        setTouched(false);
    }

    function handleBack() {
        if (stepIndex > 0) {
            setStepIndex(stepIndex - 1);
            setTouched(false);
        }
    }

    function handleReset() {
        setAnswers(INITIAL_ANSWERS);
        setStepIndex(0);
        setShowResult(false);
        setTouched(false);
    }

    const { valid } = validateStep(currentStep, answers);
    const showValidationHint = touched && !valid;
    const noServiceSelected = answers.q3 === 'nincs' && answers.q5 === 'nincs';
    const updatedSteps = getVisibleSteps(answers);

    // ── Pre-screen ──
    if (showPreScreen) {
        return <PreScreen onSelect={handlePreScreenSelect} />;
    }

    // ── Result ──
    if (showResult) {
        return (
            <div className="bg-[#12121A] rounded-2xl shadow-lg border border-white/5 p-6 sm:p-8">
                <h2 className="text-xl font-bold text-white mb-6">🎉 Kalkulált árajánlat</h2>
                <ResultPage answers={answers} onReset={handleReset} />
            </div>
        );
    }

    // ── Wizard steps ──
    return (
        <div className="bg-[#12121A] rounded-2xl shadow-lg border border-white/5 overflow-hidden">
            {/* Mode badge */}
            {answers.mode && (
                <div className="px-6 pt-4 pb-0">
                    <span
                        className="inline-flex items-center gap-1.5 text-xs font-medium px-2.5 py-1 rounded-full"
                        style={{ background: `${ACCENT}15`, color: ACCENT }}
                    >
                        {answers.mode === 'uj' ? <ShieldPlus size={12} /> : <Expand size={12} />}
                        {answers.mode === 'uj' ? 'Új rendszer' : 'Bővítés'}
                        <button
                            onClick={() => setAnswers((prev) => ({ ...prev, mode: undefined }))}
                            className="ml-1 opacity-60 hover:opacity-100 transition-opacity"
                            title="Módosítás"
                        >
                            ×
                        </button>
                    </span>
                </div>
            )}

            {/* Progress bar */}
            <div className="h-1.5 bg-white/10 mt-3">
                <div
                    className="h-full bg-[#1A6BE8] transition-all duration-500 ease-out"
                    style={{ width: `${progressPct}%` }}
                />
            </div>

            <div className="p-6 sm:p-8">
                {/* Step header */}
                <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-medium text-[#1A6BE8] bg-[#1A6BE8]/10 px-3 py-1 rounded-full">
                        {stepIndex + 1} / {updatedSteps.length} lépés
                    </span>
                    <span className="text-xs text-gray-400">{progressPct}% kész</span>
                </div>

                <h2 className="text-xl font-bold text-white mb-6">{STEP_TITLES[currentStep]}</h2>

                {/* No-service warning */}
                {noServiceSelected && currentStep === 5 && (
                    <div className="mb-4 p-3 bg-yellow-900/20 border border-yellow-900/50 rounded-xl text-sm text-yellow-400">
                        ⚠️ Kérjük válasszon legalább egy szolgáltatást (kamera vagy riasztó).
                    </div>
                )}

                {/* Validation hint */}
                {showValidationHint && currentStep !== 0 && (
                    <div className="mb-4 p-3 bg-[#1A6BE8]/10 border border-[#1A6BE8]/30 rounded-xl text-sm text-[#1A6BE8]">
                        Kérjük válasszon egy lehetőséget a továbblépéshez.
                    </div>
                )}

                {/* Step content */}
                <div className="min-h-[280px]">
                    {currentStep === 0 && <Q8Kapcsolat answers={answers} onAnswer={handleAnswer} errors={contactErrors} />}
                    {currentStep === 1 && <Q1IngatlanTipus answers={answers} onAnswer={handleAnswer} />}
                    {currentStep === 2 && <Q2Alapterulet answers={answers} onAnswer={handleAnswer} />}
                    {currentStep === 3 && <Q3KameraRendszer answers={answers} onAnswer={handleAnswer} />}
                    {currentStep === 4 && <Q4KameraDb answers={answers} onAnswer={handleAnswer} />}
                    {currentStep === 5 && <Q5Riaszto answers={answers} onAnswer={handleAnswer} />}
                    {currentStep === 6 && <Q6ErzekeloDb answers={answers} onAnswer={handleAnswer} />}
                    {currentStep === 7 && <Q7ExtraIgnyek answers={answers} onAnswer={handleAnswer} />}
                </div>

                {/* Navigation */}
                <div className="flex items-center justify-between mt-8 pt-6 border-t border-white/5">
                    <button
                        onClick={handleBack}
                        disabled={stepIndex === 0}
                        className="flex items-center gap-2 px-4 py-2.5 rounded-xl border-2 border-white/10 text-gray-400 text-sm font-medium hover:border-white/20 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                    >
                        <ChevronLeft className="h-4 w-4" /> Vissza
                    </button>

                    <button
                        onClick={handleNext}
                        className="flex items-center gap-2 px-6 py-2.5 rounded-xl bg-[#1A6BE8] text-white text-sm font-semibold hover:bg-[#155ecc] transition-colors"
                        id="calc-next-btn"
                    >
                        {stepIndex === updatedSteps.length - 1 ? 'Ajánlat megtekintése' : 'Következő'}
                        <ChevronRight className="h-4 w-4" />
                    </button>
                </div>
            </div>
        </div>
    );
}
