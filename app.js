/* eslint-disable no-console */

const genMatrix = require('./matrix');
const runAlg = require('./algorithm');

const arr = genMatrix(process.argv[2]);

console.log('The matrix:');

for (let i = 0; i <= arr.length - 1; i++) {
  console.log(arr[i]);
}

const result = runAlg(arr);

console.log(`Resulting sequence: ${result.reverse()}`); // center is a last value and we need it to be first



/** const genMatrix = Promise.promisify(require('./matrix'));
 * const runAlg = Promise.promisify(require('./algorithm'));
 * genMatrix(process.argv[2]).then(function(arr){
 * console.log('The matrix:');
 * for (let i = 0; i <= arr.length - 1; i++) {
 * console.log(arr[i]);
 * }
 * return runAlg(arr);
 * }).then(function(result){
 * console.log(`Resulting sequence: ${result.reverse()}`);
 * }).catch (function(e) {
 * console.log("Error processing matrix", e);
 * });
*/