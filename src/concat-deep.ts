import { isArray } from './is-array';

export const contactDeep = <TCollection extends unknown[]>(
  collection: TCollection,
) => {
  const collectionLocal = [...collection];
  const accumulator = [];

  let count = 0;
  while (count !== collectionLocal.length) {
    if (isArray(collectionLocal[count])) {
      accumulator.push(...(collectionLocal[count] as unknown[]));
    } else {
      accumulator.push(collectionLocal[count]);
    }

    count++;
  }

  return accumulator;
};
