'use client';

import Script from 'next/script';
import { SITE } from '@/lib/config';

export default function GoogleAnalytics() {
    if (!SITE.ga) return null;
    return (
        <>
            <Script
                src={`https://www.googletagmanager.com/gtag/js?id=${SITE.ga}`}
                strategy="afterInteractive"
            />
            <Script id="ga-init" strategy="afterInteractive">
                {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${SITE.ga}', { page_path: window.location.pathname });
        `}
            </Script>
        </>
    );
}
