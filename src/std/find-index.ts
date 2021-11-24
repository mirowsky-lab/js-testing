import { Option, none, some } from 'fp-ts/Option';

export const findIndex = <TCollection>(
  collection: Array<TCollection>,
  predicate: (collection: TCollection) => boolean,
): Option<number> => {
  const index = collection.findIndex(predicate);
  return index === -1 ? none : some(index);
};
