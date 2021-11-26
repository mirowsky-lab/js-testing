function fn(impl: (...args: unknown[]) => unknown) {
  const mockFn = (...args: unknown[]) => {
    (mockFn as any).mock.calls.push(args);
    return impl(...args);
  };

  return mockFn;
}
