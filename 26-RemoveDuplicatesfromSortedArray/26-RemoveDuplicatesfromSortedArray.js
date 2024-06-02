 */
var removeDuplicates = (numbers) => {
   let i = 0;
 * @return {number}
/**
 * @param {number[]} nums
   for (let j = 0; j<numbers.length; j++){
    if (numbers[j] !== numbers[i]){
        numbers[++i] = numbers[j]
    }
   }
   return ++i
};
[
