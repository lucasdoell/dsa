import { expect, test } from "vitest";
import { mergeSort } from "./merge-sort";

test("array is sorted", () => {
  const array = [5, 2, 4, 6, 1, 3];
  mergeSort(array);

  expect(array).toEqual([1, 2, 3, 4, 5, 6]);
});
