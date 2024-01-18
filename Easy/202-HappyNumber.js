/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
  const array = [];
  while (n !== 1) {
    console.log("n begin", n);
    const nums = n.toString().split("").map(Number);
    // let totalValue = 0
    console.log(nums);
    let total = nums.reduce((acc, curr) => {
      acc = acc + curr * curr;
      return acc;
    }, 0);
    console.log("total", total);
    n = total;
    if (n === 1) {
      console.log("happy number");
      return true;
    }
    if (array.indexOf(total) !== -1) {
      return false;
    }
    array.push(n);
  }
  return false;
};
// const nums = [1, 2, 3];
// const total = nums.reduce((acc, curr) => acc + curr * curr, 0);
// console.log(total);
// console.log(isHappy(2));
const n = 123;
console.log(Array.from(n.toString(), (n) => +n));
