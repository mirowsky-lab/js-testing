export const sum = (a: number, b: number) => a + b;
export const subtract = (a: number, b: number) => a - b;

const result = sum(3, 10);
const expected = 10;

if (result !== expected) {
  throw new Error(`${result} not equal to ${expected}`);
}
