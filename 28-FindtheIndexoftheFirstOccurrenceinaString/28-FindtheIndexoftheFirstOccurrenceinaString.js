 * @return {number}
 */
const strStr = function (haystack, needle) {
  if (needle === "" || needle === haystack) return 0;
  if (haystack.length < needle.length) return -1;
  for (let i = 0; i <= haystack.length - needle.length; i++) {
    if (haystack[i] === needle[0]) {
      for (let j = 0; j < needle.length; j++) {
        if (needle[j] !== haystack[i + j]) {
          break;
        } else if (j === needle.length - 1) {
          return i;
        }
      }
    }
 * @param {string} haystack
 * @param {string} needle
/**
"
