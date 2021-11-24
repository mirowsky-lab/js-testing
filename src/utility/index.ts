export async function test(
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

export function expect<TActual, TExpected extends TActual>(actual: TActual) {
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
