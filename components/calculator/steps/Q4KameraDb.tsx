'use client';

import { CalculatorAnswers, KameraDb } from '../types';
import { Minus, Plus } from 'lucide-react';

interface Props {
    answers: CalculatorAnswers;
    onAnswer: (update: Partial<CalculatorAnswers>) => void;
}

const FIELDS: { key: keyof KameraDb; label: string; sub: string }[] = [
    { key: 'beltéri', label: 'Beltéri kamera', sub: 'Folyosó, bejárat, pénztár' },
    { key: 'kültéri', label: 'Kültéri kamera', sub: 'Kerítés, parkoló, homlokzat' },
    { key: 'ptz', label: 'PTZ kamera', sub: 'Forgó-billenő, nagy terület lefedéséhez' },
];

function clamp(n: number, min: number, max: number) {
    return Math.max(min, Math.min(max, n));
}

const MAX: Record<keyof KameraDb, number> = { beltéri: 50, kültéri: 50, ptz: 20 };

export default function Q4KameraDb({ answers, onAnswer }: Props) {
    const q4 = answers.q4;

    function update(key: keyof KameraDb, delta: number) {
        onAnswer({ q4: { ...q4, [key]: clamp(q4[key] + delta, 0, MAX[key]) } });
    }

    const total = q4.beltéri + q4.kültéri + q4.ptz;

    return (
        <div>
            <p className="text-sm text-gray-500 mb-6">
                Adja meg a kívánt kamerák számát. Ha nem tudja pontosan, becsüljön – kollégánk a helyszíni felmérésen pontosítja.
            </p>
            <div className="space-y-4">
                {FIELDS.map(({ key, label, sub }) => (
                    <div key={key} className="flex items-center justify-between bg-white border-2 border-gray-200 rounded-xl p-4">
                        <div>
                            <p className="font-semibold text-sm text-gray-900">{label}</p>
                            <p className="text-xs text-gray-500">{sub}</p>
                        </div>
                        <div className="flex items-center gap-3">
                            <button
                                onClick={() => update(key, -1)}
                                disabled={q4[key] === 0}
                                className="h-8 w-8 rounded-full border-2 border-gray-200 flex items-center justify-center text-gray-600 hover:border-red-400 hover:text-red-600 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                            >
                                <Minus className="h-4 w-4" />
                            </button>
                            <span className="w-6 text-center font-bold text-lg text-gray-900">{q4[key]}</span>
                            <button
                                onClick={() => update(key, 1)}
                                disabled={q4[key] === MAX[key]}
                                className="h-8 w-8 rounded-full border-2 border-red-600 bg-red-600 flex items-center justify-center text-white hover:bg-red-700 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                            >
                                <Plus className="h-4 w-4" />
                            </button>
                        </div>
                    </div>
                ))}
            </div>
            {total > 0 && (
                <p className="mt-4 text-sm text-red-600 font-medium text-center">
                    Összesen: {total} kamera
                </p>
            )}
        </div>
    );
}
