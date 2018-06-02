const runAlg = require('../algorithm');
const genMatrix = require('../matrix');
const assert = require('assert');

describe('Algorithm', () => {
  it('Algorithm should do 3x3 matrix', () => {
    const arr = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
    const expected = [5, 4, 7, 8, 9, 6, 3, 2, 1];
    const result = runAlg(arr).reverse();
    if (assert.deepEqual(result, expected)) {
      throw new Error(`Expected ${expected} but got ${result}`);
    }
  });

  it('Algorithm should do 5x5 matrix', () => {
    const arr = [
      [1, 2, 3, 4, 5],
      [6, 7, 8, 9, 10],
      [11, 12, 13, 14, 15],
      [16, 17, 18, 19, 20],
      [21, 22, 23, 24, 25],
    ];
    const expected = [13, 12, 17, 18, 19, 14, 9, 8, 7, 6, 11,
      16, 21, 22, 23, 24, 25, 20, 15, 10, 5, 4, 3, 2, 1];
    const result = runAlg(arr).reverse();
    if (assert.deepEqual(result, expected)) {
      throw new Error(`Expected ${expected} but got ${result}`);
    }
  });
});

describe('genMatrix', () => {
  it('genMatrix should create 5x5  matrix', () => {
    const n = 3;
    const msize = 2 * n - 1;
    const result = genMatrix(n);
    if (result[0].length !== result.length || result[0].length !== msize) {
      throw new Error(`Expected ${msize}x${msize} matrix but got ${result[0].length}x${result.length}`);
    }
  });
  it('genMatrix should create 99x99  matrix', () => {
    const n = 50;
    const msize = 2 * n - 1;
    const result = genMatrix(n);
    if (result[0].length !== result.length || result[0].length !== msize) {
      throw new Error(`Expected ${msize}x${msize} matrix but got ${result[0].length}x${result.length}`);
    }
  });
});
