// Central site config – update here, it propagates everywhere
export const SITE = {
    phone: '+36 70 273 5532',
    phoneTel: 'tel:+36702735532',
    email: 'hello@sironic.hu',
    emailHref: 'mailto:hello@sironic.hu',
    address: '8000 Székesfehérvár, Lövölde utca 24',
    region: 'Fejér Vármegye, Székesfehérvár',
    company: 'Skoda Dávid András Egyéni Vállalkozó',
    taxNumber: '45755754-2-27',
    website: 'siroved.hu',
    ga: process.env.NEXT_PUBLIC_GA_ID ?? '',
} as const;
