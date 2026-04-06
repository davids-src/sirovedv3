'use client';

import { CalculatorAnswers, ErzekeloDb } from '../types';
import { Minus, Plus } from 'lucide-react';

interface Props {
    answers: CalculatorAnswers;
    onAnswer: (update: Partial<CalculatorAnswers>) => void;
}

const FIELDS: { key: keyof ErzekeloDb; label: string; sub: string; max: number }[] = [
    { key: 'pir', label: 'Mozgásérzékelő (PIR)', sub: 'Minden helyiségbe 1 ajánlott', max: 30 },
    { key: 'nyitas', label: 'Nyitásérzékelő (ajtó / ablak)', sub: 'Minden ajtóra/ablakra 1', max: 50 },
    { key: 'uveg', label: 'Üvegtörés-érzékelő', sub: 'Nagy üvegfelületekhez', max: 20 },
];

function clamp(n: number, min: number, max: number) {
    return Math.max(min, Math.min(max, n));
}

export default function Q6ErzekeloDb({ answers, onAnswer }: Props) {
    const q6 = answers.q6;

    function update(key: keyof ErzekeloDb, delta: number) {
        const max = FIELDS.find((f) => f.key === key)!.max;
        onAnswer({ q6: { ...q6, [key]: clamp(q6[key] + delta, 0, max) } });
    }

    const total = q6.pir + q6.nyitas + q6.uveg;

    return (
        <div>
            <p className="text-sm text-gray-500 mb-6">
                Ha nem tudja pontosan, becsüljön – kollégánk a helyszíni felmérésen pontosítja.
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
                                disabled={q6[key] === 0}
                                className="h-8 w-8 rounded-full border-2 border-gray-200 flex items-center justify-center text-gray-600 hover:border-red-400 hover:text-red-600 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                            >
                                <Minus className="h-4 w-4" />
                            </button>
                            <span className="w-6 text-center font-bold text-lg text-gray-900">{q6[key]}</span>
                            <button
                                onClick={() => update(key, 1)}
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
                    Összesen: {total} érzékelő
                </p>
            )}
        </div>
    );
}
