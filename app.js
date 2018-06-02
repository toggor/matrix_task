/* eslint-disable no-console */

const genMatrix = require('./matrix');
const runAlg = require('./algorithm');

const arr = genMatrix(process.argv[2]); //  we get the matrix size from the commandline
console.log('The matrix:');
for (let i = 0; i <= arr.length - 1; i++) {
  console.log(arr[i]);
}
const result = runAlg(arr);
console.log(`Resulting sequence: ${result.reverse()}`); //  after runAlg center is the last value and we need it to be the first
