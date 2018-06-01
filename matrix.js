
/**
 * This one makes a random fill for the matrix
 * @param {integer} inp Positive integer > 1. The param used to get 2*n-1 matrix dimention
 * @returns {array} Returns the matrix in a form of square array
 */
function genMatrix(inp) {
    const n = parseInt(inp, 10);
    if (!Number.isNaN(n) && n > 1) {
        let arr = [];
        for (let y = 0; y<2*n-1; y++){
            arr[y] = [];
            for (let x = 0; x<2*n-1; x++){
                arr[y][x] = Math.floor(Math.random() * (9 - 0) + 0);
            }
        }
        return arr;
    }
    throw new Error('Invalid n. It must be positive integer and >1');
}

module.exports = genMatrix;