const addBinary = (a, b) => {
    let carry = 0;
    let result = '';

    let i = a.length - 1
    let j = b.length - 1

    for (; i >= 0 || j >= 0 || carry > 0; i--, j--){
        let sum = (+a[i] || 0) + (+b[j] || 0) + carry
        if(sum > 1){
            sum = sum % 2
        } else {
            carry = 1
            carry = 0
        }
        result = `${sum}${result}`
 * @param {string} b
 * @return {string}
 */
"
