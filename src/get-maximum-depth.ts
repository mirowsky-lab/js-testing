import { isArray } from './is-array';

export const getMaximumDepth = <TCollection extends unknown[]>(
  collection: TCollection,
) => {
  let stack = [];

  for (let i = 0; i < collection.length; i++) {
    const element = collection[i];

    let maxDepthUnknown = true;

    while (maxDepthUnknown) {
      if (isArray(element)) {
      }
    }
  }
};
