import { expect, test } from "vitest";
import { insertionSort, reverseInsertionSort } from "./insertion-sort";

test("array is sorted", () => {
  const array = [5, 2, 4, 6, 1, 3];
  insertionSort(array);

  expect(array).toEqual([1, 2, 3, 4, 5, 6]);
});

test("array is sorted in decreasing order", () => {
  const array = [5, 2, 4, 6, 1, 3];
  reverseInsertionSort(array);

  expect(array).toEqual([6, 5, 4, 3, 2, 1]);
});
