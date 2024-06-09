/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLastWord = (str) => {
  let string = str.trim().split(" ");
  return string[string.length - 1].length;
};
"
