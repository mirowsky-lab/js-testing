export const reduce = <T>(
  collection: T[],
  reducer: (previousValue: T, currentValue: T, currentIndex: number) => T,
  initialValue?: T,
) => {
  let accumulator: T = initialValue ? initialValue : collection[0];

  for (let i = 1; i < collection.length; i++) {
    const accumulate = reducer(accumulator, collection[i], i);

    accumulator = accumulate;
  }

  return accumulator;
};
