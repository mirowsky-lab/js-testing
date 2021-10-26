import { containsArray } from './contains-array';
import { isArray } from './is-array';

export const flatten = <TCollection extends unknown[]>(
  collection: TCollection,
) => {
  let stack: unknown[] = [...collection];
  let stopConditionReached = false;

  while (stopConditionReached === false) {
    const vectorLocal = [];

    for (let i = 0; i < stack.length; i++) {
      const element = stack[i];

      if (isArray(element)) {
        vectorLocal.push(...(element as unknown[]));
      } else {
        vectorLocal.push(element);
      }
    }

    stack = vectorLocal;

    if (containsArray(stack)) {
      stopConditionReached = false;
    } else {
      stopConditionReached = true;
    }
  }

  return stack;
};
