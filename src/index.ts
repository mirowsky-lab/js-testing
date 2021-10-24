import { reduce } from './reduce';
import { concat } from './concat';

const reduceme = reduce(
  [1, 2, 3],
  (prev, current, index) => {
    return prev + current;
  },
  10,
);

const concatme = concat([[1], [2], 2]);
