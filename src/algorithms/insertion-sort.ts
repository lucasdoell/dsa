/**
 * Sorts the given array in-place using the insertion sort algorithm.
 *
 * Insertion sort is a simple sorting algorithm that builds the final sorted
 * array one item at a time. It is efficient for small data sets, with a time
 * complexity of O(n^2).
 *
 * @param array - The array to be sorted.
 */
export function insertionSort(array: number[]) {
  for (let i = 1; i < array.length; i++) {
    const key = array[i];
    let j = i - 1;

    while (j >= 0 && array[j] > key) {
      array[j + 1] = array[j];
      j -= 1;
    }
    array[j + 1] = key;
  }
}

/**
 * Sorts the given array in-place using the reverse insertion sort algorithm.
 *
 * Reverse insertion sort is a variation of the insertion sort algorithm that
 * sorts the array in descending order. It builds the final sorted array one
 * item at a time, inserting each new element into its correct position in the
 * sorted portion of the array.
 *
 * @param array - The array to be sorted in descending order.
 */
export function reverseInsertionSort(array: number[]) {
  for (let i = 1; i < array.length; i++) {
    const key = array[i];
    let j = i - 1;

    while (j >= 0 && array[j] < key) {
      array[j + 1] = array[j];
      j -= 1;
    }
    array[j + 1] = key;
  }
}
