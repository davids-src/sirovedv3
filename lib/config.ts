// Central site config – update here, it propagates everywhere
export const SITE = {
    phone: '+36 70 273 5532',
    phoneTel: 'tel:+36702735532',
    email: 'hello@sironic.hu',
    emailHref: 'mailto:hello@sironic.hu',
    address: '8000 Székesfehérvár, Lövölde utca 24 4/15',
    region: 'Fejér megye, Budapest és Közép-Dunántúl',
    company: 'SIROTECH Kft.',
    taxNumber: '33056151-2-07',
    registrationNumber: '07-09-037603',
    court: 'Székesfehérvári Törvényszék Cégbírósága',
    website: 'siroved.hu',
    ga: process.env.NEXT_PUBLIC_GA_ID || 'G-MZ7RMC5YYL',
} as const;

