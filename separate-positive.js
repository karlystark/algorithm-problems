"use strict";

/** Sorts an array with positive numbers on left, negative numbers on right
 * Accepts an array
 * Returns the original array
 */

function separatePositive(arr) {
  //sort reverse
  //arr.sort((a,b) => a - b);

  //pointer ==> unshift (positive numbers), push (negative numbers)
  //splice to remove that num

  for (let i = 0; i < arr.length; i++) {
    let num = arr[i];
    // if (num > 0) {
    //   arr.splice(i, 1);
    //   arr.unshift(num);
    if (num < 0) {
      arr.push(num);
      arr.splice(i, 1);
      i--;
    }
  }
  return arr;
}
