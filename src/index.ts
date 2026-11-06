export function permutations<T>(items: readonly T[], length = items.length, limit = 100000): T[][] {
  if (!Array.isArray(items)) throw new TypeError('Expected array');
  if (!Number.isSafeInteger(length) || length < 0)
    throw new RangeError('Length must be nonnegative');
  if (!Number.isSafeInteger(limit) || limit < 0 || limit > 1000000)
    throw new RangeError('Invalid output limit');
  if (length > items.length) return [];
  const out: T[][] = [],
    path: T[] = [],
    used = Array(items.length).fill(false);
  function visit(): void {
    if (path.length === length) {
      if (out.length >= limit) throw new RangeError('Permutation output limit exceeded');
      out.push([...path]);
      return;
    }
    for (let i = 0; i < items.length; i++)
      if (!used[i]) {
        used[i] = true;
        path.push(items[i]!);
        visit();
        path.pop();
        used[i] = false;
      }
  }
  visit();
  return out;
}
