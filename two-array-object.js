"use strict";

/**  Creates an object that merges two arrays
 * Accepts two arrays of possibly-different lengths
 * Returns an object
 * If not enough values, rest of keys will have value null
 */

function twoArrayObject(arr1, arr2) {
let mergedObj = {};

for(let i = 0; i < arr1.length; i++){
  let key = arr1[i];
  mergedObj[key] = arr2[i] || null;
}
return mergedObj;
}

