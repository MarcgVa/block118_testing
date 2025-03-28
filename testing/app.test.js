import { describe, test, it, expect } from "vitest";
import { addition, multiplication, concatOdds } from "../src/app";

describe('addition', () => {
  it('Should return the sum of the first and second arguments', () => {
    expect(addition(2,3)).toBe(5);
  })
})

describe('multiplication', () => {
  it('Should return the product of the first and second arguments', () => {
    expect(multiplication(2,3)).toBe(6);
  })
})

describe('concatOdds', () => {
  it('Should return a single array', () => {
    expect(concatOdds([1, 2, 5, 4, 3], [9, 8, 15, 7, 6,])).toBeTypeOf("object")
  });
  it('Should return a sorted array of the odd numbers in the first and second arguments', () => {
    expect(concatOdds([5,3,2,1],[9,8,7,])).toStrictEqual([1,3,5,7,9])
  })
})