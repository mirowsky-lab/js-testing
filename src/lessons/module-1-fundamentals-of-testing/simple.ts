const sum = (a: number, b: number) => a + b;
const subtract = (a: number, b: number) => a - b;

function sumTest() {
  const result = sum(3, 7);
  const expected = 10;
  expect(result).toBe(expected);
}

test('sum adds numbers', sumTest);

function substractTest() {
  const result = subtract(7, 3);
  const expected = 4;
  expect(result).toBe(expected);
}

test('subtract numbers', substractTest);

function test(title: string, callback: (...args: unknown[]) => void): void {
  try {
    callback();
    console.log(`✅ ${title}`);
  } catch (error) {
    console.error(`❌ ${title}`);
    console.error(error);
  }
}

function expect<TActual, TExpected extends TActual>(actual: TActual) {
  return {
    toBe(expected: TExpected) {
      if (actual !== expected) {
        throw new Error(`${actual} is not equal to ${expected}`);
      }
    },
    toEqual(expected: TExpected) {},
    toBeGreaterThan(expected: TExpected) {},
  };
}
