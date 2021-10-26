import { concat } from './concat';
import { flatten } from './flatten';
const arr = [1, 2, [3, 4, [5, 6, [7, [8, 9, 10]]]]];
const concatme = concat([[1], [2], [3, 4], [5, 6, 1, [3, 4]]]);

console.log(flatten(arr));
