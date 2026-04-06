'use client';

import { CalculatorAnswers, ContactData } from '../types';
import { User, Phone, Mail, MapPin } from 'lucide-react';

interface Props {
    answers: CalculatorAnswers;
    onAnswer: (update: Partial<CalculatorAnswers>) => void;
    errors: Partial<Record<keyof ContactData, string>>;
}

const FIELDS: {
    key: keyof ContactData;
    label: string;
    type: string;
    placeholder: string;
    icon: React.ReactNode;
}[] = [
        { key: 'nev', label: 'Teljes név', type: 'text', placeholder: 'Kovács János', icon: <User className="h-4 w-4" /> },
        { key: 'telefon', label: 'Telefonszám', type: 'tel', placeholder: '+36 30 123 4567', icon: <Phone className="h-4 w-4" /> },
        { key: 'email', label: 'Email cím', type: 'email', placeholder: 'info@pelda.hu', icon: <Mail className="h-4 w-4" /> },
        { key: 'helyszin', label: 'Helyszín (város, utca)', type: 'text', placeholder: 'Székesfehérvár, Példa u. 1.', icon: <MapPin className="h-4 w-4" /> },
    ];

const EMPTY_CONTACT: ContactData = { nev: '', telefon: '', email: '', helyszin: '' };

export default function Q8Kapcsolat({ answers, onAnswer, errors }: Props) {
    const contact: ContactData = answers.q8 ?? EMPTY_CONTACT;

    function handleChange(key: keyof ContactData, value: string) {
        onAnswer({ q8: { ...contact, [key]: value } });
    }

    return (
        <div>
            <p className="text-sm text-gray-500 mb-6">
                Adja meg elérhetőségeit – kollégánk 1 munkanapon belül felveszi Önnel a kapcsolatot az ingyenes felmérés egyeztetéséhez.
            </p>
            <div className="space-y-4">
                {FIELDS.map(({ key, label, type, placeholder, icon }) => (
                    <div key={key}>
                        <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
                        <div className="relative">
                            <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">{icon}</div>
                            <input
                                type={type}
                                value={contact[key]}
                                onChange={(e) => handleChange(key, e.target.value)}
                                placeholder={placeholder}
                                className={`w-full pl-9 pr-4 py-3 border-2 rounded-xl text-sm outline-none transition-colors ${errors[key]
                                        ? 'border-red-400 focus:border-red-600 bg-red-50'
                                        : 'border-gray-200 focus:border-red-500 bg-white'
                                    }`}
                            />
                        </div>
                        {errors[key] && <p className="mt-1 text-xs text-red-600">{errors[key]}</p>}
                    </div>
                ))}
            </div>
            <p className="mt-4 text-xs text-gray-400">
                🔒 Minden adat bizalmasan kezelt. Kötelezettség nélküli tájékoztatás.
            </p>
        </div>
    );
}
