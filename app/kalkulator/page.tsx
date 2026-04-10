import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import KalkulatorWizard from '@/components/calculator/KalkulatorWizard';
import { Metadata } from 'next';
import { CheckCircle2, Phone, Mail, ShieldCheck } from 'lucide-react';
import { SITE } from '@/lib/config';

export const metadata: Metadata = {
    title: 'Ingyenes Árajánlat Kalkulátor – SIRO-VÉD Biztonságtechnika',
    description:
        '8 kérdés, 5 perc – azonnal kap egy tájékoztató árat. Kamerarendszer, riasztórendszer és extra igények kalkulálása. Helyszíni felmérés nélkül, kötelezettség nélkül.',
    keywords: [
        'biztonságtechnika árajánlat',
        'kamerarendszer ár kalkulátor',
        'riasztórendszer árajánlat',
        'SIRO-VÉD',
        'Székesfehérvár',
    ],
};

const TRUST_POINTS = [
    {
        icon: ShieldCheck,
        title: 'Ingyenes helyszíni felmérés',
        desc: 'A kalkulátor után kollégánk személyesen is felméri az ingatlant – díjmentesen, kötelezettség nélkül.',
    },
    {
        icon: CheckCircle2,
        title: 'Megbízható márkák, garanciával',
        desc: 'Csak bevált, minőségi eszközöket telepítünk – gyártói garanciával és 1 év munkadíj garanciával.',
    },
    {
        icon: Phone,
        title: 'Gyors reagálás',
        desc: '1 munkanapon belül visszahívjuk – Székesfehérváron általában 24–48 órán belül ki tudunk szállni.',
    },
];

export default function KalkulatorPage() {
    return (
        <>
            <Navbar />
            <main className="pt-20">
                {/* Hero */}
                <section className="bg-gradient-to-br from-gray-900 to-red-900 py-20 text-white text-center">
                    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full text-sm font-medium mb-6">
                            <ShieldCheck className="h-4 w-4" />
                            <span>Ingyenes, kötelezettségmentes</span>
                        </div>
                        <h1 className="text-4xl sm:text-5xl font-bold mb-4 leading-tight">
                            Ingyenes árajánlat kalkulátor
                        </h1>
                        <p className="text-xl text-gray-200 mb-4">
                            8 kérdés, 5 perc – azonnal kap egy tájékoztató árat. Helyszíni felmérés nélkül.
                        </p>
                        <p className="text-sm text-gray-400">
                            🔒 Minden adat bizalmasan kezelt. Kötelezettség nélküli tájékoztatás.
                        </p>
                    </div>
                </section>

                {/* Calculator */}
                <section className="py-16 bg-gray-50">
                    <div className="max-w-2xl mx-auto px-4 sm:px-6">
                        <KalkulatorWizard />
                    </div>
                </section>

                {/* Trust section */}
                <section className="py-16 bg-white">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-10">
                            <h2 className="text-2xl font-bold text-gray-900 mb-2">
                                Miért érdemes nálunk ajánlatot kérni?
                            </h2>
                            <p className="text-gray-500 text-sm">
                            Gyors, átlátható és kötelezettségmentes ajánlatkérés.
                            </p>
                        </div>
                        <div className="grid sm:grid-cols-3 gap-6">
                            {TRUST_POINTS.map(({ icon: Icon, title, desc }) => (
                                <div
                                    key={title}
                                    className="bg-gray-50 rounded-2xl p-6 text-center hover:shadow-md transition-shadow"
                                >
                                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-red-100 mb-4">
                                        <Icon className="h-6 w-6 text-red-600" />
                                    </div>
                                    <h3 className="font-bold text-gray-900 mb-2 text-sm">{title}</h3>
                                    <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Contact fallback */}
                <section className="py-12 bg-gray-50 border-t border-gray-100">
                    <div className="max-w-xl mx-auto px-4 text-center">
                        <p className="text-gray-600 font-medium mb-4">Inkább személyesen kérdezne?</p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a
                                href={SITE.phoneTel}
                                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-red-600 text-white text-sm font-semibold hover:bg-red-700 transition-colors"
                            >
                                <Phone className="h-4 w-4" />
                                {SITE.phone}
                            </a>
                            <a
                                href={SITE.emailHref}
                                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl border-2 border-gray-200 text-gray-700 text-sm font-semibold hover:border-red-300 transition-colors"
                            >
                                <Mail className="h-4 w-4" />
                                {SITE.email}
                            </a>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
