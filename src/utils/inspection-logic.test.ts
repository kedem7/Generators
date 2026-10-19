import test from 'node:test';
import assert from 'node:assert/strict';
import {
  calculateInspectionStats,
  calculateShortCircuitCurrent,
  calculate3PhaseShortCircuit,
} from './inspection-logic.ts';

test('calculateInspectionStats accurately tallies statuses and defaults to 54 total', () => {
  const initial = calculateInspectionStats({});
  assert.equal(initial.p, 0);
  assert.equal(initial.f, 0);
  assert.equal(initial.nc, 0);
  assert.equal(initial.na, 0);
  assert.equal(initial.total, 54);
  assert.equal(initial.checked, 0);

  const sample = calculateInspectionStats({
    item1: 'P',
    item2: 'P',
    item3: 'F',
    item4: 'NC',
    item5: 'NA',
    item6: null,
  });

  assert.equal(sample.p, 2);
  assert.equal(sample.f, 1);
  assert.equal(sample.nc, 1);
  assert.equal(sample.na, 1);
  assert.equal(sample.checked, 5);
  assert.equal(sample.total, 54);
});

test('calculateShortCircuitCurrent computes 230 / Z_mΩ in kA', () => {
  // If Z = 115 mΩ, Isc = 230 / 115 = 2.0 kA
  assert.equal(calculateShortCircuitCurrent(115), 2);
  // If Z = 230 mΩ, Isc = 230 / 230 = 1.0 kA
  assert.equal(calculateShortCircuitCurrent('230'), 1);
  // Invalid values return null
  assert.equal(calculateShortCircuitCurrent(0), null);
  assert.equal(calculateShortCircuitCurrent(''), null);
  assert.equal(calculateShortCircuitCurrent(null), null);
});

test('calculate3PhaseShortCircuit computes 3-phase symmetrical current', () => {
  // Line-to-line 400V / sqrt(3) ~= 230.94V
  // If Z = 230.94 mΩ -> ~1 kA
  const val = calculate3PhaseShortCircuit(230.94);
  assert.equal(val, 1.0);
});
