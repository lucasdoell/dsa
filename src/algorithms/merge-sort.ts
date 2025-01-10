/**
 * A function to merge two adjacent, sorted subarrays.
 *
 * **Invariant**: p <= q < r.
 *
 * **Time complexity**: O(n)
 *
 * @param a The array to be sorted.
 * @param p An index of the array.
 * @param q The index for the midpoint.
 * @param r An index of the array.
 */
function merge(a: number[], p: number, q: number, r: number) {
  const lenLeft = q - p + 1; // length of A[p:q]
  const lenRight = r - q; // length of A[q+1:r]

  const leftArr = [];
  const rightArr = [];

  for (let i = 0; i < lenLeft; i++) {
    // copy A[p:q] into L[0:nl - 1]
    leftArr[i] = a[p + i];
  }
  for (let j = 0; j < lenRight; j++) {
    // copy A[q+1:r] into L[0:nl - 1]
    rightArr[j] = a[q + j + 1];
  }

  let i = 0;
  let j = 0;
  let k = p;

  while (i < lenLeft && j < lenRight) {
    if (leftArr[i] <= rightArr[j]) {
      a[k] = leftArr[i];
      i += 1;
    } else {
      a[k] = rightArr[j];
      j += 1;
    }

    k += 1;
  }

  while (i < lenLeft) {
    a[k] = leftArr[i];
    i += 1;
    k += 1;
  }

  while (j < lenRight) {
    a[k] = rightArr[j];
    j += 1;
    k += 1;
  }
}

/**
 * Recursively sorts the given array `a` using the merge sort algorithm.
 *
 * **Time complexity**: O(n)
 *
 * @param a The array to be sorted.
 * @param p The starting index of the array.
 * @param r The ending index of the array.
 */
export function mergeSort(a: number[], p = 0, r = a.length - 1) {
  if (p >= r) return;

  const q = Math.floor((p + r) / 2);

  mergeSort(a, p, q);
  mergeSort(a, q + 1, r);

  merge(a, p, q, r);
}
