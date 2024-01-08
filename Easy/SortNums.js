function Sort(nums) {
  const result = new Array(nums.length).fill(0);
  let start = 0;
  let end = nums.length - 1;

  for (let i = 0; i < nums.length; i++) {
    nums[i] = nums[i] * nums[i];
  }

  for (let pos = nums.length - 1; pos >= 0; pos--) {
    if (nums[start] > nums[end]) {
      result[pos] = nums[start];
      start++;
    } else {
      result[pos] = nums[end];
      end--;
    }
  }

  return result;
}
console.log(Sort([-4, -1, 2, 3, 5]));
