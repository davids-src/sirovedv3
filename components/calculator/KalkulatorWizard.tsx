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
import { ChevronLeft, ChevronRight } from 'lucide-react';

const INITIAL_ANSWERS: CalculatorAnswers = {
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
    1: 'Milyen típusú ingatlanról van szó?',
    2: 'Mekkora az ingatlan alapterülete?',
    3: 'Milyen kamerarendszert szeretne?',
    4: 'Hány kamerát szeretne felszerelni?',
    5: 'Szeretne riasztórendszert?',
    6: 'Hány érzékelőre lenne szükség?',
    7: 'Milyen extra igények merülnek fel?',
    8: 'Hova küldjük az ajánlatot?',
};

function validateStep(step: number, answers: CalculatorAnswers): { valid: boolean; contactErrors: Partial<Record<keyof ContactData, string>> } {
    const contactErrors: Partial<Record<keyof ContactData, string>> = {};

    if (step === 1 && !answers.q1) return { valid: false, contactErrors };
    if (step === 2 && !answers.q2) return { valid: false, contactErrors };
    if (step === 3 && !answers.q3) return { valid: false, contactErrors };
    if (step === 3 && answers.q3 === 'nincs' && answers.q5 === 'nincs') return { valid: false, contactErrors };
    if (step === 5 && !answers.q5) return { valid: false, contactErrors };

    if (step === 8) {
        const c = answers.q8;
        if (!c?.nev?.trim()) contactErrors.nev = 'Kérjük adja meg a nevét.';
        if (!c?.telefon?.trim()) contactErrors.telefon = 'Kérjük adja meg a telefonszámát.';
        if (!c?.email?.trim()) contactErrors.email = 'Kérjük adja meg az email-cimét.';
        else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(c.email)) contactErrors.email = 'Érvénytelen email-cím.';
        if (!c?.helyszin?.trim()) contactErrors.helyszin = 'Kérjük adja meg a helyszínt.';
        return { valid: Object.keys(contactErrors).length === 0, contactErrors };
    }

    return { valid: true, contactErrors };
}

export default function KalkulatorWizard() {
    const [answers, setAnswers] = useState<CalculatorAnswers>(INITIAL_ANSWERS);
    const [stepIndex, setStepIndex] = useState(0); // index into steps array
    const [showResult, setShowResult] = useState(false);
    const [touched, setTouched] = useState(false);
    const [contactErrors, setContactErrors] = useState<Partial<Record<keyof ContactData, string>>>({});

    function getVisibleSteps(a: CalculatorAnswers) {
        return getSteps(a);
    }

    const steps = getVisibleSteps(answers);
    const currentStep = steps[stepIndex];
    const progressPct = Math.round(((stepIndex + 1) / TOTAL_STEPS) * 100);

    function handleAnswer(update: Partial<CalculatorAnswers>) {
        setAnswers((prev) => {
            const next = { ...prev, ...update };
            // Re-evaluate visible steps; if current step index exceeds, clamp
            return next;
        });
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

        // Recompute steps after any answer changes (for skip logic)
        const updatedSteps = getVisibleSteps(answers);
        if (stepIndex < updatedSteps.length - 1) {
            setStepIndex(stepIndex + 1);
        } else {
            // Additional validation: at least one service selected
            if (answers.q3 === 'nincs' && answers.q5 === 'nincs') {
                return;
            }
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

    // No-service validation
    const noServiceSelected = answers.q3 === 'nincs' && answers.q5 === 'nincs';

    const updatedSteps = getVisibleSteps(answers);

    if (showResult) {
        return (
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 sm:p-8">
                <h2 className="text-xl font-bold text-gray-900 mb-6">🎉 Kalkulált árajánlat</h2>
                <ResultPage answers={answers} onReset={handleReset} />
            </div>
        );
    }

    return (
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
            {/* Progress bar */}
            <div className="h-1.5 bg-gray-100">
                <div
                    className="h-full bg-red-600 transition-all duration-500 ease-out"
                    style={{ width: `${progressPct}%` }}
                />
            </div>

            <div className="p-6 sm:p-8">
                {/* Step header */}
                <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-medium text-red-600 bg-red-50 px-3 py-1 rounded-full">
                        {stepIndex + 1} / {updatedSteps.length} lépés
                    </span>
                    <span className="text-xs text-gray-400">{progressPct}% kész</span>
                </div>

                <h2 className="text-xl font-bold text-gray-900 mb-6">{STEP_TITLES[currentStep]}</h2>

                {/* No-service warning */}
                {noServiceSelected && currentStep === 5 && (
                    <div className="mb-4 p-3 bg-yellow-50 border border-yellow-200 rounded-xl text-sm text-yellow-800">
                        ⚠️ Kérjük válasszon legalább egy szolgáltatást (kamera vagy riasztó).
                    </div>
                )}

                {/* Validation hint */}
                {showValidationHint && currentStep !== 8 && (
                    <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-xl text-sm text-red-700">
                        Kérjük válasszon egy lehetőséget a továbblépéshez.
                    </div>
                )}

                {/* Step content */}
                <div className="min-h-[280px]">
                    {currentStep === 1 && <Q1IngatlanTipus answers={answers} onAnswer={handleAnswer} />}
                    {currentStep === 2 && <Q2Alapterulet answers={answers} onAnswer={handleAnswer} />}
                    {currentStep === 3 && <Q3KameraRendszer answers={answers} onAnswer={handleAnswer} />}
                    {currentStep === 4 && <Q4KameraDb answers={answers} onAnswer={handleAnswer} />}
                    {currentStep === 5 && <Q5Riaszto answers={answers} onAnswer={handleAnswer} />}
                    {currentStep === 6 && <Q6ErzekeloDb answers={answers} onAnswer={handleAnswer} />}
                    {currentStep === 7 && <Q7ExtraIgnyek answers={answers} onAnswer={handleAnswer} />}
                    {currentStep === 8 && <Q8Kapcsolat answers={answers} onAnswer={handleAnswer} errors={contactErrors} />}
                </div>

                {/* Navigation */}
                <div className="flex items-center justify-between mt-8 pt-6 border-t border-gray-100">
                    <button
                        onClick={handleBack}
                        disabled={stepIndex === 0}
                        className="flex items-center gap-2 px-4 py-2.5 rounded-xl border-2 border-gray-200 text-gray-600 text-sm font-medium hover:border-gray-300 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                    >
                        <ChevronLeft className="h-4 w-4" /> Vissza
                    </button>

                    <button
                        onClick={handleNext}
                        className="flex items-center gap-2 px-6 py-2.5 rounded-xl bg-red-600 text-white text-sm font-semibold hover:bg-red-700 transition-colors"
                    >
                        {stepIndex === updatedSteps.length - 1 ? 'Ajánlat megtekintése' : 'Következő'}
                        <ChevronRight className="h-4 w-4" />
                    </button>
                </div>
            </div>
        </div>
    );
}
