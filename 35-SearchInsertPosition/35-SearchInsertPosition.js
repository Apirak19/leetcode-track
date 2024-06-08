    let mid = Math.floor((left + right) / 2);
    if (target === nums[mid]) {
      return mid;
    } else if (target > nums[mid]) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  while (left <= right) {
const searchInsert = (nums, target) => {
  let left = 0;
  let right = nums.length - 1;
 * @return {number}
 */

 * @param {number[]} nums
 * @param {number} target
/**
[
