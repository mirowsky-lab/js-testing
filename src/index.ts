import { pipe } from './pipe';

const add1 = (x: number) => x + 1;
const add3 = (x: number) => x + 3;

const add4 = pipe(add1, add3);

console.log(add4(5));
