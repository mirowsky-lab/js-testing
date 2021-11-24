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
