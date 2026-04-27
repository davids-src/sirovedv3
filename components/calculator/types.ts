// ─── Type definitions ────────────────────────────────────────────────────────

export type IngatlanType = 'lakas' | 'iroda' | 'raktar' | 'vendeg' | 'egeszseg' | 'egyeb';
export type MeretType = 'xs' | 's' | 'm' | 'l' | 'xl';
export type KameraType = 'nincs' | 'ip' | 'analog' | 'nemtudom';
export type RiasztoType = 'nincs' | 'uj' | 'bovites' | 'karbantartas';
export type ExtraType = 'tavfelügyelet' | 'belepto' | 'karb' | 'tuzjelzo';

export interface KameraDb {
  beltéri: number;
  kültéri: number;
  ptz: number;
}

export interface ErzekeloDb {
  pir: number;
  nyitas: number;
  uveg: number;
}

export interface ContactData {
  nev: string;
  telefon: string;
  email: string;
  helyszin: string;
}

export interface CalculatorAnswers {
  q1?: IngatlanType;
  q2?: MeretType;
  q3?: KameraType;
  q4: KameraDb;
  q5?: RiasztoType;
  q6: ErzekeloDb;
  q7: ExtraType[];
  q8?: ContactData;
}

// ─── Pricing constants ────────────────────────────────────────────────────────

export const TYPE_MULTIPLIERS: Record<IngatlanType, number> = {
  lakas: 1.0,
  iroda: 1.1,
  raktar: 1.2,
  vendeg: 1.15,
  egeszseg: 1.15,
  egyeb: 1.1,
};

export const SIZE_MULTIPLIERS: Record<MeretType, number> = {
  xs: 1.0,
  s: 1.05,
  m: 1.12,
  l: 1.20,
  xl: 1.30,
};

export const CAM_BASE: Record<Exclude<KameraType, 'nincs'>, number> = {
  ip: 15000,
  analog: 12000,
  nemtudom: 14000,
};

export const CAM_UNIT_PRICES: Record<Exclude<KameraType, 'nincs'>, KameraDb> = {
  ip: { beltéri: 14000, kültéri: 16000, ptz: 20000 },
  analog: { beltéri: 11000, kültéri: 11000, ptz: 16000 },
  nemtudom: { beltéri: 13000, kültéri: 15000, ptz: 19000 },
};

export const ALARM_BASE: Record<RiasztoType, number> = {
  nincs: 0,
  uj: 18000,
  bovites: 8000,
  karbantartas: 12000,
};

export const SENSOR_PRICES: ErzekeloDb = {
  pir: 10000,
  nyitas: 8000,
  uveg: 9000,
};

export const EXTRA_PRICES: Record<ExtraType, number> = {
  tavfelügyelet: 8000,
  belepto: 35000,
  karb: 15000,
  tuzjelzo: 0,
};

// ─── Price calculation ────────────────────────────────────────────────────────

export function calculatePrice(a: CalculatorAnswers): number {
  const typeMult = a.q1 ? TYPE_MULTIPLIERS[a.q1] : 1;
  const sizeMult = a.q2 ? SIZE_MULTIPLIERS[a.q2] : 1;

  // Camera work cost
  let camCost = 0;
  if (a.q3 && a.q3 !== 'nincs') {
    const base = CAM_BASE[a.q3];
    const unit = CAM_UNIT_PRICES[a.q3];
    camCost =
      base +
      a.q4.beltéri * unit.beltéri +
      a.q4.kültéri * unit.kültéri +
      a.q4.ptz * unit.ptz;
  }

  // Alarm work cost
  let alarmCost = 0;
  if (a.q5) {
    alarmCost = ALARM_BASE[a.q5];
    if (a.q5 === 'uj' || a.q5 === 'bovites') {
      alarmCost +=
        a.q6.pir * SENSOR_PRICES.pir +
        a.q6.nyitas * SENSOR_PRICES.nyitas +
        a.q6.uveg * SENSOR_PRICES.uveg;
    }
  }

  // Extra costs
  const extraCost = a.q7.reduce((sum, e) => sum + EXTRA_PRICES[e], 0);

  const base = camCost + alarmCost + extraCost;
  return Math.round(base * typeMult * sizeMult);
}

export function priceRange(exact: number): { low: number; high: number } {
  return {
    low: Math.round((exact * 0.9) / 1000) * 1000,
    high: Math.round((exact * 1.15) / 1000) * 1000,
  };
}

export function formatHuf(n: number): string {
  return n.toLocaleString('hu-HU') + ' Ft';
}

// ─── Step routing helpers ──────────────────────────────────────────────────────

export function getSteps(a: CalculatorAnswers): number[] {
  const steps = [0, 1, 2, 3];  // 0 = kapcsolat (első lépés)
  if (!a.q3 || a.q3 !== 'nincs') steps.push(4);
  steps.push(5);
  if (a.q5 === 'uj' || a.q5 === 'bovites') steps.push(6);
  steps.push(7);
  return steps;
}

export const TOTAL_STEPS = 8;
