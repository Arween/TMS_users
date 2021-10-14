// describe("My Test Suite", () => {
//   it("My Test Case", () => {
//     expect(true).toEqual(true);
//   });
// });

import { sum, isBigger } from "./sum";

test("adds 1 + 2 to equal 3", () => {
  expect(sum(1, 2)).toBe(3);
});

test("My Test Suite", () => {
  expect(true).toEqual(true);
});

test("1 bigger 2 = false", () => {
  expect(isBigger(1, 2)).toBe(false);
});

test("4 bigger 2", () => {
  expect(isBigger(4, 2)).toBe(true);
});
