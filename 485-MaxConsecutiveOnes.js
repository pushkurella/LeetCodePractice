var findMaxConsecutiveOnes = function (nums) {
  let currentCount = 0;
  let largestCount = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      currentCount = 0;
    } else {
      currentCount++;
    }
    if (currentCount > largestCount) largestCount = currentCount;
  }
  return largestCount;
};
