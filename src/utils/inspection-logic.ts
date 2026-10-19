export type InspectionStatus = 'P' | 'F' | 'NC' | 'NA' | null;

export interface InspectionStats {
  p: number;
  f: number;
  nc: number;
  na: number;
  total: number;
  checked: number;
}

export function calculateInspectionStats(
  statuses: Record<string, InspectionStatus>,
  totalExpected: number = 54
): InspectionStats {
  let p = 0;
  let f = 0;
  let nc = 0;
  let na = 0;

  for (const status of Object.values(statuses)) {
    if (status === 'P') p++;
    else if (status === 'F') f++;
    else if (status === 'NC') nc++;
    else if (status === 'NA') na++;
  }

  const checked = p + f + nc + na;

  return {
    p,
    f,
    nc,
    na,
    total: totalExpected,
    checked,
  };
}

/**
 * Calculates prospective single-phase short-circuit current (kA) from impedance (mΩ)
 * I_k1 = U_0 / Z = 230V / (Z_mΩ / 1000) = 230 / Z_mΩ (in kA)
 */
export function calculateShortCircuitCurrent(
  impedanceMilliOhms: number | string | null | undefined,
  voltagePhaseToNeutral: number = 230
): number | null {
  if (impedanceMilliOhms === null || impedanceMilliOhms === undefined || impedanceMilliOhms === '') {
    return null;
  }
  const z = typeof impedanceMilliOhms === 'string' ? parseFloat(impedanceMilliOhms) : impedanceMilliOhms;
  if (isNaN(z) || z <= 0) return null;

  const currentKA = voltagePhaseToNeutral / z;
  return Math.round(currentKA * 100) / 100;
}

/**
 * Calculates 3-phase symmetrical short-circuit current (kA) from line-to-line impedance (mΩ)
 * I_k3 = (c * U_n) / (sqrt(3) * Z)
 */
export function calculate3PhaseShortCircuit(
  impedanceMilliOhms: number | string | null | undefined,
  voltageLineToLine: number = 400
): number | null {
  if (impedanceMilliOhms === null || impedanceMilliOhms === undefined || impedanceMilliOhms === '') {
    return null;
  }
  const z = typeof impedanceMilliOhms === 'string' ? parseFloat(impedanceMilliOhms) : impedanceMilliOhms;
  if (isNaN(z) || z <= 0) return null;

  const currentKA = (voltageLineToLine / Math.sqrt(3)) / z;
  return Math.round(currentKA * 100) / 100;
}

/**
 * Validates date format or returns default
 */
export function sanitizeDate(val: string): string {
  if (!val) return '18/10/2026';
  return val.trim();
}
