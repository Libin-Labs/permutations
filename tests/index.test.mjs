import assert from 'node:assert/strict';
import test from 'node:test';
import * as api from '../dist/esm/index.js';
test('generates full permutations', () => {
  assert.deepEqual(api.permutations([1, 2]), [
    [1, 2],
    [2, 1],
  ]);
});
test('generates partial permutations', () => {
  assert.deepEqual(api.permutations([1, 2, 3], 2), [
    [1, 2],
    [1, 3],
    [2, 1],
    [2, 3],
    [3, 1],
    [3, 2],
  ]);
});
test('returns empty path for length zero', () => {
  assert.deepEqual(api.permutations([1], 0), [[]]);
});
test('returns empty for length too large', () => {
  assert.deepEqual(api.permutations([1], 2), []);
});
test('distinguishes duplicate positions', () => {
  assert.equal(api.permutations(['x', 'x'], 2).length, 2);
});
test('enforces output bound', () => {
  assert.throws(() => api.permutations([1, 2, 3], 2, 2), RangeError);
});
