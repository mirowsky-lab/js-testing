export const concat = <TCollection extends unknown[]>(
  collection: TCollection[],
) => {
  let accumulator: unknown[] = [];

  for (let i = 0; i < collection.length; i++) {
    const innerCollection = collection[i];

    const accumulate = [...accumulator, ...innerCollection];

    accumulator = accumulate;
  }

  return accumulator;
};
