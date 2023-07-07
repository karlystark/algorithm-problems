"use strict";
// add whatever parameters you deem necessary & write docstring
/**Create a frequency counter, take a number, and create an object with frequency of digits of the number */

function frequencyCounter(num) {
  let strNum = num.toString();
  const frequencyObj = {};
  for (let char of strNum) {
    frequencyObj[char] = (frequencyCounter[char] || 0) + 1;
  }
  return frequencyObj;
}


/**Take two numbers, compare the frequency of digits from two number, return a boolean
 * Time complexity: O(n + m)
*/
function sameFrequency(num1, num2) {
  if (num1.toString().length !== num2.toString().length) return false;
  const num1Counter = frequencyCounter(num1);
  const num2Counter = frequencyCounter(num2);
  for (let key in num1Counter) {
    if (num1Counter[key] !== num2Counter[key]) return false;
  }
  return true;
}
