import { concat } from './concat';
import { containsArray } from './contains-array';

export const flatten = <T extends unknown[]>(collection: T) => {
  const accumulator: unknown[] = [...collection];

  const accumulatorContainsArray = containsArray(accumulator);

  while (accumulatorContainsArray) {
    concat(accumulator as unknown[][]);
  }

  return accumulator;
};
