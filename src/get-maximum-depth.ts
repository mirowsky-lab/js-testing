import { isArray } from './is-array';

export const getMaximumDepth = <TCollection extends unknown[]>(
  collection: TCollection,
) => {
  let stack = [...collection];

  for (let i = 0; i < collection.length; i++) {
    const element = collection[i];

    while (maxDepthUnknown) {
      if (isArray(element)) {
      }
    }
  }
};
