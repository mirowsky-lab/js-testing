/* eslint-disable no-unused-vars */
/* eslint-disable no-var */

import { expect as expectFn, test as testFn } from './src/utility';

declare global {
  var test: (...args: Parameters<typeof testFn>) => ReturnType<typeof testFn>;
  var expect: (
    ...args: Parameters<typeof expectFn>
  ) => ReturnType<typeof expectFn>;
}

globalThis.test = testFn;
globalThis.expect = expectFn;
