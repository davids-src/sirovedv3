/**
 * lib/analytics.ts
 * ─────────────────────────────────────────────────────────────────────────────
 * Consent-gated GA4 event helpers + first/last-touch attribution storage.
 * No PII is stored in GA4 or localStorage.
 * ─────────────────────────────────────────────────────────────────────────────
 */

// ── Types ─────────────────────────────────────────────────────────────────────

export type CustomerType = 'b2c' | 'b2b';
export type RequestType = 'uj-rendszer' | 'bovites' | 'javitas' | 'karbantartas';
export type ProjectType =
  | 'csaladi-haz'
  | 'lakas'
  | 'iroda'
  | 'uzlet'
  | 'telephely'
  | 'raktar'
  | 'rendelo'
  | 'egyeb';

export interface AttributionTouch {
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_content?: string;
  utm_term?: string;
  gclid?: string;
  gbraid?: string;
  wbraid?: string;
  landing_page?: string;
  referrer?: string;
  timestamp?: string;
}

export interface Attribution {
  first_touch: AttributionTouch;
  last_touch: AttributionTouch;
}

const FIRST_TOUCH_KEY = 'siroved_first_touch';
const LAST_TOUCH_KEY = 'siroved_last_touch';
const CAMPAIGN_PARAMS = [
  'utm_source',
  'utm_medium',
  'utm_campaign',
  'utm_content',
  'utm_term',
  'gclid',
  'gbraid',
  'wbraid',
] as const;

// ── GA4 sender ────────────────────────────────────────────────────────────────

/**
 * Sends a GA4 event, respecting the existing Consent Mode.
 * Never include PII (name, email, phone) in params.
 */
export function sendGa4Event(
  eventName: string,
  params: Record<string, string | number | boolean | undefined> = {}
): void {
  if (typeof window === 'undefined') return;
  const w = window as any;
  if (typeof w.gtag !== 'function') return;
  w.gtag('event', eventName, params);
}

// ── Attribution storage ───────────────────────────────────────────────────────

function readSearchParams(): Record<string, string> {
  if (typeof window === 'undefined') return {};
  const params: Record<string, string> = {};
  const sp = new URLSearchParams(window.location.search);
  for (const key of CAMPAIGN_PARAMS) {
    const val = sp.get(key);
    if (val) params[key] = val;
  }
  return params;
}

function hasCampaignParams(params: Record<string, string>): boolean {
  return CAMPAIGN_PARAMS.some((k) => Boolean(params[k]));
}

function safeRead(key: string): AttributionTouch | null {
  try {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}

function safeWrite(key: string, value: AttributionTouch): void {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch {
    // quota exceeded or private mode – silently ignore
  }
}

/**
 * Captures UTM / gclid attribution on page load.
 * - first_touch is written once and never overwritten.
 * - last_touch is refreshed whenever campaign params are present.
 * Call this once per page load (from GoogleAnalytics component).
 */
export function captureAttribution(): void {
  if (typeof window === 'undefined') return;

  const campaignParams = readSearchParams();
  const now = new Date().toISOString();

  const touch: AttributionTouch = {
    ...campaignParams,
    landing_page: window.location.pathname,
    referrer: document.referrer || undefined,
    timestamp: now,
  };

  // First touch: write only once
  const existing = safeRead(FIRST_TOUCH_KEY);
  if (!existing) {
    safeWrite(FIRST_TOUCH_KEY, touch);
  }

  // Last touch: update whenever campaign params are present
  if (hasCampaignParams(campaignParams)) {
    safeWrite(LAST_TOUCH_KEY, touch);
  }

  // If last_touch has never been written, initialise it too
  if (!safeRead(LAST_TOUCH_KEY)) {
    safeWrite(LAST_TOUCH_KEY, touch);
  }
}

/**
 * Returns the stored attribution (first + last touch).
 * Safe to call server-side (returns empty objects).
 */
export function getAttribution(): Attribution {
  if (typeof window === 'undefined') {
    return { first_touch: {}, last_touch: {} };
  }
  return {
    first_touch: safeRead(FIRST_TOUCH_KEY) ?? {},
    last_touch: safeRead(LAST_TOUCH_KEY) ?? {},
  };
}

// ── Typed event helpers ───────────────────────────────────────────────────────

export function trackPhoneClick(params: {
  cta_location: string;
  page_type: string;
  service?: string;
  request_type?: RequestType;
}): void {
  sendGa4Event('phone_click', params);
}

export function trackEmailClick(params: {
  cta_location: string;
  page_type: string;
}): void {
  sendGa4Event('email_click', params);
}

export function trackCtaClick(params: {
  cta_label: string;
  cta_location: string;
  cta_type: string;
  page_type: string;
}): void {
  sendGa4Event('cta_click', params);
}

export function trackFormStart(params: {
  form_type: string;
}): void {
  sendGa4Event('form_start', params);
}

export function trackFormStepComplete(params: {
  form_type: string;
  step_name: string;
  step_number: number;
}): void {
  sendGa4Event('form_step_complete', params);
}

export function trackFormError(params: {
  form_type: string;
  error_type: string;
}): void {
  sendGa4Event('form_error', params);
}

export function trackRequestTypeSelect(request_type: RequestType): void {
  sendGa4Event('request_type_select', { request_type });
}

export function trackCustomerTypeSelect(customer_type: CustomerType): void {
  sendGa4Event('customer_type_select', { customer_type });
}

export function trackServiceSelect(service: string): void {
  sendGa4Event('service_select', { service });
}

export function trackOutboundDivisionClick(params: {
  destination_brand: string;
  context: string;
  cta_location: string;
}): void {
  sendGa4Event('outbound_division_click', params);
}

export function trackGenerateLead(params: {
  lead_source: string;
  form_type: string;
  customer_type?: string;
  request_type?: string;
  project_type?: string;
  service?: string;
  region?: string;
  cta_location?: string;
  source_site?: string;
  landing_page?: string;
}): void {
  sendGa4Event('generate_lead', params);
}
