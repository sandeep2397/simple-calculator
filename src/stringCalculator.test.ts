import { add } from "./stringCalculator";

describe("String Calculator", () => {
  test("returns 0 for an empty string", () => {
    expect(add("")).toBe(0);
  });

  test("returns the number itself if a single number is provided", () => {
    expect(add("1")).toBe(1);
  });

  test("returns the sum of two numbers", () => {
    expect(add("1,5")).toBe(6);
  });

  test("returns the sum of multiple numbers", () => {
    expect(add("1,2,3,4")).toBe(10);
  });

  test("handles new lines as delimiters", () => {
    expect(add("1\n2,3")).toBe(6);
  });

  test("supports custom delimiter", () => {
    expect(add("//;\n1;2;3")).toBe(6);
  });

  test("throws an error for negative numbers", () => {
    expect(() => add("1,-2,3,-4")).toThrow("negative numbers not allowed: -2, -4");
  });
});
