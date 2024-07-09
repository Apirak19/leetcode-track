
  for (; len1 >= 0 || len2 >= 0 || carry > 0; len1--, len2--) {
  let len1 = a.length - 1;
  let len2 = b.length - 1;
    let sum = (+a[len1] || 0) + (+b[len2] || 0) + carry;
    if (sum > 1) {
      sum = sum % 2;
      carry = 1;
    } else {
  let carry = 0;
  let result = '';

 * @return {string}
 */
const addBinary = (a, b) => {
/**
 * @param {string} a
 * @param {string} b
"
