/**
 * Function makes a snail run around the given matrix from outside to center: right-down-left-up
 * @param {array} arr Should be a square matrix and zise is Odd
 *  @returns {array} Returns the string with values from top left to center
 */
function runSnail(arr) {
    if (arr[0].length !== arr.length) {
        throw new Error('Matrix should be square');
    }

    let j = 0;
    const result = [],
        center = (arr.length + 1) / 2 - 1,
        size = arr.length;

    for (let shift = 1; shift <= center; shift++) // we run circles until we reach center
    {
        for (j = shift - 1; j < size - shift + 1; j++) result.push(arr[shift - 1][j]);       //  top row
        for (j = shift; j < size - shift + 1; j++) result.push(arr[j][size - shift]);        //  right column
        for (j = size - shift - 1; j >= shift - 1; --j) result.push(arr[size - shift][j]);   //  bottom row
        for (j = size - shift - 1; j >= shift; j--) result.push(arr[j][shift - 1]);          //  left column, loop done shift++
    }
    result.push(arr[center][center]);
    return result;
}

module.exports = runSnail;

