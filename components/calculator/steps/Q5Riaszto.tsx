'use client';

import { CalculatorAnswers, RiasztoType } from '../types';
import { BellOff, BellRing, Wrench, PlusCircle } from 'lucide-react';

interface Props {
    answers: CalculatorAnswers;
    onAnswer: (update: Partial<CalculatorAnswers>) => void;
}

const OPTIONS: { value: RiasztoType; label: string; sub: string; icon: React.ReactNode }[] = [
    { value: 'nincs', label: 'Nem kérek riasztót', sub: 'Csak kamerarendszer kérek', icon: <BellOff className="h-6 w-6" /> },
    { value: 'uj', label: 'Igen, új riasztót kérek', sub: 'Teljes új rendszer: központ, érzékelők, sziréna', icon: <BellRing className="h-6 w-6" /> },
    { value: 'bovites', label: 'Meglévő riasztót bővínék', sub: 'Extra érzékelők, zónák hozzáadása meglévő központhoz', icon: <PlusCircle className="h-6 w-6" /> },
    { value: 'karbantartas', label: 'Meglévő riasztó karbantartása', sub: 'Éves felülvizsgálat, hibás érzékelő csere, programozás', icon: <Wrench className="h-6 w-6" /> },
];

export default function Q5Riaszto({ answers, onAnswer }: Props) {
    return (
        <div>
            <p className="text-sm text-gray-500 mb-6">
                A riasztó és a kamerarendszer kombinálható – együtt lényegesen hatékonyabb védelmet nyújtanak.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {OPTIONS.map((opt) => {
                    const selected = answers.q5 === opt.value;
                    return (
                        <button
                            key={opt.value}
                            onClick={() => onAnswer({ q5: opt.value })}
                            className={`flex items-start gap-4 p-4 rounded-xl border-2 text-left transition-all ${selected
                                    ? 'border-red-600 bg-red-50'
                                    : 'border-gray-200 bg-white hover:border-red-300 hover:bg-red-50/30'
                                }`}
                        >
                            <div className={`p-2 rounded-lg flex-shrink-0 ${selected ? 'bg-red-600 text-white' : 'bg-gray-100 text-gray-500'}`}>
                                {opt.icon}
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
