/**
 * @param {number[]} digits
 * @return {number[]}
 */
const plusOne = (arr) => {
  let result = BigInt(arr.join("")) + BigInt(1);
  for (let index = 0; index < result.length; index++) {
    result[index] = Number(result[index]);
  }
  return result;
};
  result = result.toString().split("");
[
