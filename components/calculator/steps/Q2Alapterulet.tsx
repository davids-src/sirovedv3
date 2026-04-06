'use client';

import { CalculatorAnswers, MeretType } from '../types';
import { RulerIcon } from 'lucide-react';

interface Props {
    answers: CalculatorAnswers;
    onAnswer: (update: Partial<CalculatorAnswers>) => void;
}

const OPTIONS: { value: MeretType; label: string; sub: string }[] = [
    { value: 'xs', label: '50 m² alatt', sub: 'Kis lakás, kis iroda' },
    { value: 's', label: '50–150 m²', sub: 'Átlagos lakás, kis üzlet' },
    { value: 'm', label: '150–400 m²', sub: 'Nagyobb iroda, vendéglő' },
    { value: 'l', label: '400–1000 m²', sub: 'Raktár, csarnok, klinika' },
    { value: 'xl', label: '1000 m² felett', sub: 'Nagy ipari, kereskedelmi' },
];

export default function Q2Alapterulet({ answers, onAnswer }: Props) {
    return (
        <div>
            <p className="text-sm text-gray-500 mb-6">Hozzávetőleges méret is tökéletes – ez a kameraigényt és a munkaidőt befolyásolja.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {OPTIONS.map((opt) => {
                    const selected = answers.q2 === opt.value;
                    return (
                        <button
                            key={opt.value}
                            onClick={() => onAnswer({ q2: opt.value })}
                            className={`flex items-center gap-4 p-4 rounded-xl border-2 text-left transition-all ${selected
                                    ? 'border-red-600 bg-red-50'
                                    : 'border-gray-200 bg-white hover:border-red-300 hover:bg-red-50/30'
                                }`}
                        >
                            <div className={`p-2 rounded-lg flex-shrink-0 ${selected ? 'bg-red-600 text-white' : 'bg-gray-100 text-gray-500'}`}>
                                <RulerIcon className="h-5 w-5" />
                            </div>
                            <div>
                                <p className={`font-semibold text-sm ${selected ? 'text-red-700' : 'text-gray-900'}`}>{opt.label}</p>
                                <p className="text-xs text-gray-500 mt-0.5">{opt.sub}</p>
                            </div>
                        </button>
                    );
                })}
            </div>
        </div>
    );
}
