import { isArray } from './is-array';

export const containsArray = <TCollection extends unknown[]>(
  collection: TCollection,
) => {
  const accumulator = [];

  for (let i = 0; i < collection.length; i++) {
    const element = collection[i];

    if (isArray(element)) {
      accumulator.push(element);
    }
  }

  return accumulator.length > 0 ? true : false;
};
