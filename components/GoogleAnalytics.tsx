'use client';

import { Suspense, useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import Script from 'next/script';
import { SITE } from '@/lib/config';
import { gtag } from '@/lib/gtag';
import { captureAttribution, trackPhoneClick, trackEmailClick } from '@/lib/analytics';

function AnalyticsTracker() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // Capture attribution on every navigation (first-touch written once, last-touch on campaign params)
  useEffect(() => {
    captureAttribution();
  }, [pathname, searchParams]);

  // Manual page_view tracking (send_page_view: false in gtag config to avoid double fire)
  useEffect(() => {
    if (!SITE.ga) return;
    const url = pathname + (searchParams?.toString() ? `?${searchParams.toString()}` : '');
    gtag('config', SITE.ga, { page_path: url });
  }, [pathname, searchParams]);

  // Global click handler for phone / email / outbound links
  useEffect(() => {
    if (!SITE.ga) return;

    const handleGlobalClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a');
      if (!anchor) return;

      const href = anchor.getAttribute('href');
      if (!href) return;

      const pageType = pathname?.split('/')[1] || 'home';

      if (href.startsWith('tel:')) {
        trackPhoneClick({
          cta_location: anchor.closest('[data-cta-location]')?.getAttribute('data-cta-location') ?? 'global',
          page_type: pageType,
        });
        // Legacy event for backwards compat
        gtag('event', 'contact', { method: 'phone' });
      } else if (href.startsWith('mailto:')) {
        trackEmailClick({
          cta_location: anchor.closest('[data-cta-location]')?.getAttribute('data-cta-location') ?? 'global',
          page_type: pageType,
        });
        gtag('event', 'contact', { method: 'email' });
      }
    };

    document.addEventListener('click', handleGlobalClick);
    return () => document.removeEventListener('click', handleGlobalClick);
  }, [pathname]);

  return null;
}

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
          window.gtag = window.gtag || function(){window.dataLayer.push(arguments);};
          
          var consent = 'denied';
          try {
            if (localStorage.getItem('siroved_cookie_consent') === 'accepted') {
              consent = 'granted';
            }
          } catch(e) {}
          
          window.gtag('consent', 'default', {
            'analytics_storage': consent,
            'ad_storage': consent,
            'ad_user_data': consent,
            'ad_personalization': consent
          });
          
          window.gtag('js', new Date());
          window.gtag('config', '${SITE.ga}', {
            send_page_view: false
          });
        `}
      </Script>
      <Suspense fallback={null}>
        <AnalyticsTracker />
      </Suspense>
    </>
  );
}
