"use strict";
/**Create a function to calculate the average of two numbers */

function caculateAvg(num1, num2) {
  return (num1 + num2) / 2;
}

/** take in sorted array of nums and determine if
 * there's a pair of nums with their average === target
*/

function averagePair(nums, targetAvg) {
  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    const avg = caculateAvg(nums[left], nums[right]);


    if (avg === targetAvg) {
      return true;
    }
    else if (avg > targetAvg) {
      right--;
    }
    else {
      left++;
    }
  }

  return false;

}

