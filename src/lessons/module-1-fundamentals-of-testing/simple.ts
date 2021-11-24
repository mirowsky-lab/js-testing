const sum = (a: number, b: number) => a + b;
const subtract = (a: number, b: number) => a - b;
const subtractAsynchronously = (a: number, b: number) => {
  return new Promise((resolve, reject) => {
    let finish = false;

    setTimeout(() => {
      finish = true;
    }, 500);

    if (finish) {
      resolve(a + b);
    } else {
      reject(new Error('You suck'));
    }
  });
};

test('sum adds numbers', () => {
  const result = sum(3, 7);
  const expected = 10;
  expect(result).toBe(expected);
});

test('subtract numbers', () => {
  const result = subtract(7, 3);
  const expected = 4;
  expect(result).toBe(expected);
});

test('subtract numbers asynchronously', async () => {
  const result = await subtractAsynchronously(7, 3);
  const expected = 4;

  expect(result).toBe(expected);
});

async function test(
  title: string,
  callback: (...args: unknown[]) => void | Promise<void>,
): Promise<void> {
  try {
    await callback();
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
