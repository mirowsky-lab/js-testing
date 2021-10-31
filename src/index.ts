import { concat } from './concat';
import mergeDict from './deep-merge';
import { protoFActory } from './factory-function';
import { flatten } from './flatten';
import { LinkedList } from './linked-list';
const arr = [1, 2, [3, 4, [5, 6, [7, [8, 9, 10]]]]];
const concatme = concat([[1], [2], [3, 4], [5, 6, 1, [3, 4]]]);

// console.log(flatten(arr));

const list = new LinkedList();

// list.append('hello');
// list.append('Ok');
// list.append('bye');
// list.append('bye bye');

// list.insert(1, 'I replace OK');

// list.print();

console.log(mergeDict({ abc: { def: { ghi: '123' } } }, {}));
