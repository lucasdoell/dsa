import { expect, test } from "vitest";
import { insertionSort } from "./insertion-sort";

test("array is sorted", () => {
  const array = [5, 2, 4, 6, 1, 3];
  insertionSort(array);

  expect(array).toEqual([1, 2, 3, 4, 5, 6]);
});
