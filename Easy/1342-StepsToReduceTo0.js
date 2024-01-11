/**
 * @param {number} num
 * @return {number}
 */
// let numberOfSteps = function(num) {
//     let i = 0;
//     while (num > 0){
//         i++
//     if(num & 1 == 1){
//         num--
//     }
//     else {
//         num >>= 1;
//     }
//     };
//     return i;
// };
var numberOfSteps = function (n) {
  let stepCount = 0;
  while (n !== 0) {
    n % 2 === 0 ? (n = n / 2) : (n = n - 1);
    stepCount++;
  }
  return stepCount;
};
console.log(numberOfSteps(14));
