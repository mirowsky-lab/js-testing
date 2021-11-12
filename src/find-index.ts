import { Option, none, some } from 'fp-ts/Option';

export const findIndex = <TType>(
  as: Array<TType>,
  predicate: (a: TType) => boolean,
): Option<number> => {
  const index = as.findIndex(predicate);
  return index === -1 ? none : some(index);
};
