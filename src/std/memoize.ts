export function memoize(f: (...args: unknown[]) => unknown) {
  const cache: Record<string, unknown> = {};

  return (...argsInner: unknown[]) => {
    return cache[JSON.stringify(argsInner)] !== {}
      ? cache[JSON.stringify(argsInner)]
      : f(...argsInner);
  };
}
