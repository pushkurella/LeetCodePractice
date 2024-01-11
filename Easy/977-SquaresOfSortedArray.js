// var sortedSquares = function (nums) {
//   let start = 0;
//   let end = nums.length - 1;
//   const res = [];
//   for (let i = 0; i < nums.length; i++) {
//     while (start <= end) {
//       let middle = Math.floor((start + end) / 2);
//       if (nums[middle] * nums[middle] === nums[i] * nums[i]) {
//         res.push(nums[start] * nums[start]);
//       } else if (nums[middle] * nums[middle] < nums[i] * nums[i]) {
//         start = middle + 1;
//       } else {
//         end = middle - 1;
//       }
//     }
//   }
//   console.log(res);
//   return res;
// };
var sortedSquares = function (nums) {
  let start = 0;
  let end = nums.length - 1;
  let index = end;
  let resultArr = [];
  while (index > -1) {
    if (Math.abs(nums[start]) > Math.abs(nums[end])) {
      resultArr[index] = nums[start] * nums[start];
      start++;
    } else {
      resultArr[index] = nums[end] * nums[end];
      end--;
    }
    index--;
  }
  return resultArr;
};
console.log(sortedSquares([-4, -3, -2, 1]));
