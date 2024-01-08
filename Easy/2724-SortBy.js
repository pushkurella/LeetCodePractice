// Approach 1
// var sortBy = function (arr, fn) {
//   let resultArr = [];
//   let tempObj = {};
//   arr.forEach((ele) => (tempObj[fn(ele)] = ele));
//   console.log(tempObj);
//   let sortedResult = Object.keys(tempObj).sort((a, b) => a - b);
//   console.log("ss", sortedResult);
//   arr = [];
//   sortedResult.map((ele) => arr.push(tempObj[ele]));
//   return arr;
// };
// Approach 2
var sortBy = function (arr, fn) {
  return arr.sort((a, b) => fn(a) - fn(b));
};
console.log(sortBy([5, 4, 1, 2, 3], (x) => x));
