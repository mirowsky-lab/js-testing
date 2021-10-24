import { isArray } from './is-array';

export const concat = <TCollection extends unknown[]>(
  collection: TCollection,
) => {
  for (let i = 0; i < collection.length; i++) {
    const element = collection[i];

    if (isArray(element)) {
      console.log('list');
    } else {
      console.log('not list');
    }
  }
};
