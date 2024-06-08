    if (nums[i] === target) {
      result = i;
    } else {
      if (
        nums[i] === target - 1 ||
        (nums[i] < target && target < nums[i + 1])
      ) {
        result = i + 1;
      } else if (target > nums[i]) {
        result = i + 1;
const searchInsert = (nums, target) => {
  let result = 0;
  for (let i = 0; i < nums.length; i++) {
      }
    }
  }
  return result;
};
[
