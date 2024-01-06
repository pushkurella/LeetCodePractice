var findNumbers = function (nums) {
  let result = 0;
  for (let i = 0; i < nums.length; i++) {
    let num = nums[i];
    let count = 0;
    while (num % 10 > 0 || num > 0) {
      num = Math.floor(num / 10);
      console.log(num);
      count++;
    }
    if (count % 2 === 0) {
      result++;
    }
  }
  return result;
};
