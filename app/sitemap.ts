import { MetadataRoute } from 'next';

const BASE_URL = 'https://siroved.hu';

export default function sitemap(): MetadataRoute.Sitemap {
    const now = new Date();

    const staticPages: MetadataRoute.Sitemap = [
        { url: BASE_URL, lastModified: now, changeFrequency: 'weekly', priority: 1.0 },
        { url: `${BASE_URL}/szolgaltatasok`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
        { url: `${BASE_URL}/szolgaltatasok/kamerarendszerek`, lastModified: now, changeFrequency: 'monthly', priority: 0.85 },
        { url: `${BASE_URL}/szolgaltatasok/riasztorendszerek`, lastModified: now, changeFrequency: 'monthly', priority: 0.85 },
        { url: `${BASE_URL}/szolgaltatasok/tuzjelzo-rendszerek`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
        { url: `${BASE_URL}/referenciak`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
        { url: `${BASE_URL}/kalkulator`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
        { url: `${BASE_URL}/rolunk`, lastModified: now, changeFrequency: 'yearly', priority: 0.6 },
        { url: `${BASE_URL}/kapcsolat`, lastModified: now, changeFrequency: 'yearly', priority: 0.7 },
    ];

    return staticPages;
}
