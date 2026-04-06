'use client';

import { CalculatorAnswers, IngatlanType } from '../types';
import { Building2, Briefcase, Warehouse, UtensilsCrossed, Stethoscope, LayoutGrid } from 'lucide-react';

interface Props {
    answers: CalculatorAnswers;
    onAnswer: (update: Partial<CalculatorAnswers>) => void;
}

const OPTIONS: { value: IngatlanType; label: string; sub: string; icon: React.ReactNode }[] = [
    { value: 'lakas', label: 'Lakás / lakóingatlan', sub: 'Társasházi vagy családi ház', icon: <Building2 className="h-6 w-6" /> },
    { value: 'iroda', label: 'Iroda / üzlethelyiség', sub: 'Kisebb céges tér', icon: <Briefcase className="h-6 w-6" /> },
    { value: 'raktar', label: 'Raktár / gyártócsarnok', sub: 'Ipari, nagyobb tér', icon: <Warehouse className="h-6 w-6" /> },
    { value: 'vendeg', label: 'Vendéglátás / bolt / szalon', sub: 'Étterem, üzlet, szépségszalon', icon: <UtensilsCrossed className="h-6 w-6" /> },
    { value: 'egeszseg', label: 'Egészségügyi rendelő / klinika', sub: 'Rendelő, klinika, gyógyszertár', icon: <Stethoscope className="h-6 w-6" /> },
    { value: 'egyeb', label: 'Egyéb / vegyes', sub: 'Több funkciójú ingatlan', icon: <LayoutGrid className="h-6 w-6" /> },
];

export default function Q1IngatlanTipus({ answers, onAnswer }: Props) {
    return (
        <div>
            <p className="text-sm text-gray-500 mb-6">Ez segít megbecsülni a rendszer komplexitását és a várható munkaidőt.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {OPTIONS.map((opt) => {
                    const selected = answers.q1 === opt.value;
                    return (
                        <button
                            key={opt.value}
                            onClick={() => onAnswer({ q1: opt.value })}
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
